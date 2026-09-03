# Deploy keaasglobal.com — same droplet as kannanware, separate container

This site runs in its own Docker container (`keaas-global-web`), fully independent from the
`s4hana-elevate-*` containers and from `divine-will-web` (own image, own restarts, no shared
volumes). It's a static export, so the container is just `nginx:alpine` serving pre-built
files — no Node process running in production. It shares only two things with the other sites
on the droplet: the public IP, and the front-door nginx (inside kannanware's `web` container)
that owns ports 80/443 and routes by domain name.

## 1) Copy the project to the droplet

From your Mac:

```bash
rsync -avz --exclude node_modules --exclude .next --exclude out \
  "/Users/santhosh/Desktop/KEASS-main/" your-user@droplet-ip:/var/www/keaasglobal/
```

(Or `git init` this folder, push to a new GitHub repo, and `git clone` it on the droplet
instead — whichever you prefer. `rsync` is fastest for a first deploy.)

## 2) Shared Docker network

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

```bash
cd /var/www/keaasglobal
git pull            # or re-rsync
docker compose up -d --build
```

The other sites' containers are never touched by this flow.

## Notes on this app specifically

- `next.config.ts` sets `basePath`/`assetPrefix` based on `GITHUB_PAGES=true`, used only for
  the GitHub Pages build. Don't set that env var on the droplet — self-hosting needs an empty
  base path, which is the default.
- `output: "export"` + `trailingSlash: true` means the build emits directories with
  `index.html` (e.g. `/about/index.html`). `nginx.static.conf` in this repo handles that with
  `try_files $uri $uri/ $uri.html /404.html;` — no changes needed there for new pages.
