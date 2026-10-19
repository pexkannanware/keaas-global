# Deploy keaasglobal.com — same droplet as kannanware, separate container

This site runs in its own Docker container (`keaas-global-web`), fully independent from the
`s4hana-elevate-*` containers and from `divine-will-web` (own image, own restarts, no shared
volumes). It's a static export, so the container is just `nginx:alpine` serving pre-built
files — no Node process running in production. It shares only two things with the other sites
on the droplet: the public IP, and the front-door nginx (inside kannanware's `web` container)
that owns ports 80/443 and routes by domain name.

## 1) Copy the project to the droplet

The repo lives at https://github.com/pexkannanware/keaas-global — clone it directly on the
droplet:

```bash
ssh your-user@droplet-ip
cd /var/www
git clone https://github.com/pexkannanware/keaas-global.git keaasglobal
```

### 2) Shared Docker network

Reuses the same `shared_web` network divine-will already created. Skip this if it exists:

```bash
docker network create shared_web
```

kannanware's `web` service should already be attached to `shared_web` from the divine-will
setup. If not, see divine-will's `DEPLOY.md` §3.

## 3) Build and start the keaasglobal container

```bash
cd /var/www/keaasglobal
docker compose up -d --build
```

It won't be reachable from the internet yet — no host port is published, no nginx route
exists for it yet. That's expected.

## 4) DNS

In your DNS provider for `keaasglobal.com`, add A records pointing at the same droplet IP
the other sites use:

- `A` record: `keaasglobal.com` → droplet IP
- `A` record: `www.keaasglobal.com` → droplet IP

Wait for propagation (`dig keaasglobal.com`) before the next step.

## 5) Add an HTTP-only nginx route first (needed for the cert challenge)

Edit `/var/www/s4hana-elevate/kannanwarerevamp/nginx.conf` and append this new `server`
block (don't touch anything else in the file):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name keaasglobal.com www.keaasglobal.com;

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/certbot;
        try_files $uri =404;
    }

    location / {
        proxy_pass http://keaas-global-web:80;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Reload:

```bash
cd /var/www/s4hana-elevate/kannanwarerevamp
docker compose exec web nginx -t
docker compose exec web nginx -s reload
```

Check `http://keaasglobal.com` loads the site over plain HTTP at this point.

## 6) Issue the SSL certificate

Reuses the same `certbot` sidecar and shared `letsencrypt`/`certbot-webroot` volumes
kannanware already has running — no new certbot setup needed.

```bash
cd /var/www/s4hana-elevate/kannanwarerevamp
docker compose exec certbot certbot certonly --webroot -w /var/www/certbot \
  -d keaasglobal.com -d www.keaasglobal.com
```

## 7) Switch the nginx block to HTTPS

Replace the `server` block you added in step 5 with these two blocks (redirect + real
HTTPS block):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name keaasglobal.com www.keaasglobal.com;

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/certbot;
        try_files $uri =404;
    }

    location / {
        return 301 https://keaasglobal.com$request_uri;
    }
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name keaasglobal.com www.keaasglobal.com;

    ssl_certificate /etc/letsencrypt/live/keaasglobal.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/keaasglobal.com/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    location / {
        proxy_pass http://keaas-global-web:80;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Reload again:

```bash
docker compose exec web nginx -t
docker compose exec web nginx -s reload
```

Renewal is automatic — the existing `certbot` sidecar's 12h renew loop and `web`'s 12h nginx
reload (see kannanware's `DEPLOY_DIGITALOCEAN_DROPLET.md` §11) already cover any cert in the
shared `letsencrypt` volume, this one included. Nothing extra to configure.

## 8) Verify

```bash
curl -I https://keaasglobal.com
curl -I https://kannanware.com       # confirm kannanware still fine
curl -I https://thedivinewill.in     # confirm divine-will still fine
```

## Future updates (after source changes)

Once the CI/CD setup below is complete, push to `main`. GitHub Actions builds the
production Docker image and deploys it to the Droplet automatically, regardless of
which contributor pushed or merged the code. You can also
run **Actions → Deploy to DigitalOcean → Run workflow** against `main`.

For a manual source deployment instead:

```bash
cd /var/www/keaasglobal
git pull
docker compose up -d --build
cd /var/www/s4hana-elevate/kannanwarerevamp
docker compose exec -T web nginx -t
docker compose exec -T web nginx -s reload
```

The shared nginx reload refreshes the site's container IP and applies the existing
routes; the other sites' containers are not recreated.

## Automatic deployment from `main` (GitHub Actions)

Workflow: [`.github/workflows/deploy-digitalocean.yml`](.github/workflows/deploy-digitalocean.yml).
Droplet script: [`scripts/deploy-digitalocean.sh`](scripts/deploy-digitalocean.sh).

Every push to `main`, including a merged pull request, triggers this workflow.
There are no contributor or file-path filters. Builds run on a GitHub-hosted Ubuntu
runner, and deployment runs against DigitalOcean using repository secrets. Contributors
only need permission to push or merge into `main`; their computers do not need Docker,
Node.js, deployment SSH keys, or any local CI/CD configuration. A repository administrator
configures the shared credentials once using GitHub settings and the Droplet console.

Complete steps 1–8 above once before enabling CI/CD. The workflow expects the existing
`shared_web` network, working DNS/HTTPS, and the shared proxy's `web` service. It targets
an **amd64/x86_64 Linux Droplet** with Docker Engine, a recent Docker Compose v2
(supporting `up --wait`), Bash, `flock`, and `curl` installed.

### 1. Create a deployment SSH key

In the DigitalOcean Droplet console, sign in as the deployment user and generate a
dedicated key (use an empty passphrase for automation):

```bash
deploy_key_dir=$(mktemp -d /tmp/keaas-ci-key.XXXXXX)
ssh-keygen -t ed25519 -N '' -C github-keaas-deploy -f "$deploy_key_dir/key"
mkdir -p ~/.ssh
chmod 700 ~/.ssh
cat "$deploy_key_dir/key.pub" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
cat "$deploy_key_dir/key"
```

Save the displayed private key as the GitHub repository secret described below. The
public key has been added to this deployment user's `authorized_keys`.
This user must be able to run Docker without
an interactive sudo prompt, write to `/var/www/keaasglobal`, and access the proxy's
Compose directory. Use the same application directory and Compose project as the
existing deployment; the script checks ownership before replacing the container.
Docker access grants administrative control of the Droplet, so keep this key private.

### 2. Configure GitHub settings

In the GitHub repository, open **Settings → Secrets and variables → Actions → Secrets**
and use **New repository secret** to add these shared credentials. This workflow uses
repository secrets directly and does not require a deployment environment or manual
environment approval.

| Secret | Value |
| --- | --- |
| `DO_HOST` | Droplet IPv4 address or SSH hostname (without `https://`) |
| `DO_USER` | SSH deployment username |
| `DO_SSH_PRIVATE_KEY` | Entire private key displayed in step 1, including BEGIN/END lines |
| `DO_SSH_KNOWN_HOSTS` | Verified SSH host-key entry for the Droplet |

After saving the private key in GitHub, remove the temporary key files in the same
Droplet console session (the installed public key in `authorized_keys` stays):

```bash
rm -- "$deploy_key_dir/key" "$deploy_key_dir/key.pub"
rmdir -- "$deploy_key_dir"
```

Collect the host-key entry from the Droplet console:

```bash
ssh-keyscan -p 22 -H YOUR_DROPLET_IP > /tmp/keaas-known-hosts
ssh-keygen -lf /tmp/keaas-known-hosts
```

Verify the fingerprint using the DigitalOcean console before trusting it. For example,
run `ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub` in the Droplet console and compare
the ED25519 fingerprint. Paste the verified entry into `DO_SSH_KNOWN_HOSTS`.
For a custom SSH port, use that port in `ssh-keyscan` too.

Optional repository **variables**, under the **Variables** tab on the same settings page:

| Variable | Default |
| --- | --- |
| `DO_SSH_PORT` | `22` |
| `DO_APP_DIR` | `/var/www/keaasglobal` |
| `DO_PROXY_DIR` | `/var/www/s4hana-elevate/kannanwarerevamp` |

Paths must be absolute and contain only letters, numbers, underscores, dots, slashes,
and hyphens. The deployment user needs SSH access from GitHub-hosted runners; allow
the configured SSH port in the Droplet/cloud firewall as appropriate for your setup.
No DigitalOcean API token or container registry credentials are needed.

### 3. Push and verify

Commit these deployment files and push to `main`, then open **Actions → Deploy to
DigitalOcean** to follow the run. GitHub Actions must be enabled for the repository.
After this one-time setup, any contributor's push or merge to `main` runs the workflow
without further configuration on their computer. The workflow:

1. Builds the static site inside the existing Dockerfile on the GitHub runner.
2. Tags the image with the commit SHA and transfers a compressed image over verified SSH.
3. Loads the image and updates only the application's `web` service, without building
   on the Droplet or pulling source there.
4. Waits for the container's HTTP health check, reloads the shared proxy, and checks
   `https://keaasglobal.com/`.

A build failure leaves production untouched. A failure while replacing or verifying
the container triggers an attempt to restore the previous image and Compose file.
There is no previous image to restore on a first deployment. Deployment replacement
can cause a short interruption; this is not a zero-downtime setup.
Deployments run one at a time. The last successful commit is recorded in
`/var/www/keaasglobal/.deployed-revision`. Image tags are retained for recovery;
monitor Droplet disk usage and remove older `keaas-global:<sha>` images when no longer
needed. Do not prune images used by the other applications.

The repository's existing **Deploy to GitHub Pages** workflow still runs independently.
It uses a separate build with `GITHUB_PAGES=true`; the DigitalOcean build uses the
root domain configuration. Source files in the Droplet checkout are not synchronized
by CI; run `git pull` there before a later manual source build.

Workflow behavior follows the [GitHub Actions workflow reference](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax)
and [Docker Compose deployment options](https://docs.docker.com/reference/cli/docker/compose/up/).

## Notes on this app specifically

- `next.config.ts` sets `basePath`/`assetPrefix` based on `GITHUB_PAGES=true`, used only for
  the GitHub Pages build. Don't set that env var on the droplet — self-hosting needs an empty
  base path, which is the default.
- `output: "export"` + `trailingSlash: true` means the build emits directories with
  `index.html` (e.g. `/about/index.html`). `nginx.static.conf` in this repo handles that with
  `try_files $uri $uri/ $uri.html /404.html;` — no changes needed there for new pages.
