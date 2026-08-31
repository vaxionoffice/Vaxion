# Vaxion

Vaxion is a founder operating layer in formation: a focused place to turn intent into clarity, signals, and forward motion.

This repository contains the starter experience:

- Futuristic, responsive marketing landing page
- Supabase email/password auth foundation with confirmation callback
- Server-only Resend welcome email route
- Protected founder dashboard shell with an intentional coming-soon state
- Branded password recovery, email verification, 404, and error screens
- Custom generated hero background and scroll-triggered motion system
- Design and product decisions in [`docs/DEVELOPMENT_PLAN.md`](./docs/DEVELOPMENT_PLAN.md)

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The public site and dashboard preview render without credentials. The auth forms show a demo-mode message until Supabase is configured.

### Environment troubleshooting

Environment files must be in the repository root, next to `package.json`:

```text
Vaxion/
├── .env.local
├── package.json
└── app/
```

Use the exact variable names in `.env.example`. After creating or changing `.env.local`, stop the running server and start it again. Run `npm run check-env` to verify only the variable names and statuses; it never prints secret values. If you use `npm run start`, run `npm run build` after changing environment variables because public values are compiled during the build.

Routes included:

- `/` — landing page
- `/login` and `/signup` — authentication
- `/forgot-password`, `/reset-password`, `/verify-email` — account recovery and confirmation
- `/onboarding` — first-run founder workspace setup
- `/dashboard` — protected sample founder workspace shell
- `/auth/callback` — Supabase confirmation/recovery callback

## Environment variables

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=Vaxion <hello@vaxion.pro>
NEXT_PUBLIC_SITE_URL=https://vaxion.pro
```

For Supabase email confirmation, set the project Site URL and add these redirect URLs:

- `http://localhost:3000/auth/callback`
- `https://YOUR-VERCEL-DOMAIN.vercel.app/auth/callback`
- `https://vaxion.pro/auth/callback`

For production Supabase emails, configure Custom SMTP with Resend (`smtp.resend.com`, port `465` or `587`, username `resend`) and use a verified `@vaxion.pro` sender.

`RESEND_API_KEY` and `RESEND_FROM_EMAIL` are server-side values. Never expose them as `NEXT_PUBLIC_*` variables.

## Scripts

- `npm run dev` — start the local development server without touching another running server’s cache
- `npm run dev:clean` — clear `.next` and start a fresh development server; stop any existing Vaxion server first
- `npm run clean` — remove the `.next` build cache if a stale chunk error appears; stop active Next.js processes first
- `npm run check-env` — verify environment variable names without printing their values
- `npm run typecheck` — run TypeScript checks
- `npm run build` — remove the cache and create a production build; do not run it alongside `npm run dev`
- `npm run start` — serve the production build

## Product caveat

The source MD files referenced in the project brief were not present in the initial checkout, so the copy and positioning in this starter are provisional. Review [`docs/DEVELOPMENT_PLAN.md`](./docs/DEVELOPMENT_PLAN.md) with the founder before treating the messaging as final.
