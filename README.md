# KEAAS

Knowledge & Expertise as a Service.

Premium corporate website for KEAAS — an Experts-as-a-Service partner for System Integrators.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide Icons

## Develop

```bash
npm install
npm run dev
```

## Production build

The site is a static export (`output: "export"`).

```bash
npm run build
npx serve out
```

## Deploy

- **Netlify:** `npx netlify deploy --dir=out --no-build --prod`
- **Vercel:** `npx vercel --prod`
- **DigitalOcean:** every push or merge to `main` triggers the deployment workflow. See [DEPLOY.md](DEPLOY.md) for the one-time setup.
