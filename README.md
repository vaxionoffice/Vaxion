# Vaxion

Vaxion is a founder operating layer in formation: a focused place to turn intent into clarity, signals, and forward motion.

This repository contains the starter experience:

- Futuristic, responsive marketing landing page
- Supabase email/password auth foundation with confirmation callback
- Server-only Resend welcome email route
- Protected founder dashboard shell with an intentional coming-soon state
- Design and product decisions in [`docs/DEVELOPMENT_PLAN.md`](./docs/DEVELOPMENT_PLAN.md)

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The public site and dashboard preview render without credentials. The auth forms show a demo-mode message until Supabase is configured.

## Environment variables

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=Vaxion <hello@your-domain.com>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For Supabase email confirmation, set the project Site URL and add these redirect URLs:

- `http://localhost:3000/auth/callback`
- `https://YOUR-VERCEL-DOMAIN.vercel.app/auth/callback`

`RESEND_API_KEY` and `RESEND_FROM_EMAIL` are server-side values. Never expose them as `NEXT_PUBLIC_*` variables.

## Scripts

- `npm run dev` — start the local development server
- `npm run typecheck` — run TypeScript checks
- `npm run build` — create a production build
- `npm run start` — serve the production build

## Product caveat

The source MD files referenced in the project brief were not present in the initial checkout, so the copy and positioning in this starter are provisional. Review [`docs/DEVELOPMENT_PLAN.md`](./docs/DEVELOPMENT_PLAN.md) with the founder before treating the messaging as final.
