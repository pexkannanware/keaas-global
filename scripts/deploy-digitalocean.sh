#!/usr/bin/env bash
# Called on the Droplet by .github/workflows/deploy-digitalocean.yml.
set -Eeuo pipefail

release_dir=$(cd "${1:?release directory required}" && pwd)
app_dir=${2:?application directory required}
proxy_dir=${3:?proxy compose directory required}
revision=${4:?commit SHA required}
[[ "$revision" =~ ^[a-f0-9]{40}$ ]]

# Serialize with other invocations on this Droplet, including manual runs.
mkdir -p "$app_dir"
exec 9>"$app_dir/.deploy.lock"
flock -w 600 9
trap 'rm -f "$release_dir/image.tar.gz"' EXIT

docker compose version
docker network inspect shared_web >/dev/null
docker compose --project-directory "$proxy_dir" exec -T web nginx -t

previous_image=$(docker inspect --format '{{.Image}}' keaas-global-web 2>/dev/null || true)
# Refuse to accidentally take over a container managed by another Compose project.
if [[ -n "$previous_image" ]]; then
  owner=$(docker inspect --format '{{index .Config.Labels "com.docker.compose.project.working_dir"}}' keaas-global-web)
  if [[ "$owner" != "$app_dir" ]]; then
    echo "Container belongs to $owner; set DO_APP_DIR to that directory." >&2
    exit 1
  fi
fi

docker load --input "$release_dir/image.tar.gz"
docker image inspect "keaas-global:$revision" >/dev/null

compose=(docker compose --project-directory "$app_dir" -f "$app_dir/docker-compose.yml")
reload_proxy() {
  docker compose --project-directory "$proxy_dir" exec -T web nginx -t
  docker compose --project-directory "$proxy_dir" exec -T web nginx -s reload
}

rollback() {
  trap - ERR
  echo "Deployment failed; restoring the previous image if available." >&2
  "${compose[@]}" logs --tail 50 web || true
  if [[ -n "$previous_image" ]]; then
    docker tag "$previous_image" keaas-global:latest
    if [[ -f "$release_dir/previous-compose.yml" ]]; then
      cp "$release_dir/previous-compose.yml" "$app_dir/docker-compose.yml"
    fi
    "${compose[@]}" up -d --no-build --pull never --wait --wait-timeout 60 web || true
    reload_proxy || true
  fi
  exit 1
}

if [[ -f "$app_dir/docker-compose.yml" ]]; then
  cp "$app_dir/docker-compose.yml" "$release_dir/previous-compose.yml"
fi
trap rollback ERR
cp "$release_dir/docker-compose.yml" "$app_dir/docker-compose.yml"
docker tag "keaas-global:$revision" keaas-global:latest
"${compose[@]}" up -d --no-build --pull never --wait --wait-timeout 60 web

# nginx resolves upstream names on reload; a recreated app may have a new IP.
reload_proxy
curl --fail --silent --show-error --retry 5 --retry-delay 3 --retry-all-errors \
  --connect-timeout 10 --max-time 30 https://keaasglobal.com/ >/dev/null
printf '%s\n' "$revision" > "$app_dir/.deployed-revision"
trap - ERR
echo "Deployed $revision to https://keaasglobal.com"
rm -rf "$release_dir"
