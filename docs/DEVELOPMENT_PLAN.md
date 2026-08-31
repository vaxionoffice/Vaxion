# Vaxion — Starter Site Development Plan

> **Status:** Proposed starter direction — pending founder review
>
> **Repository note:** The checkout currently contains only a placeholder `README.md`. The product MD files referenced in the brief were not present in this checkout, so the copy and product language below are intentionally provisional and should be reconciled with the founder's source material before launch.

## 1. Product intent

Vaxion is being shaped as a founder and entrepreneur operating layer: a place to turn intent into clarity, signals, and forward motion. The starter release is not a full productivity product yet. It is a clear, memorable front door plus a trustworthy foundation for authenticated founder workspaces.

### Starter release outcomes

- Make the Vaxion point of view understandable in under 10 seconds.
- Establish a distinctive visual system that can scale beyond the landing page.
- Give visitors a real path from landing page to sign up and sign in.
- Protect a founder dashboard route and make its “coming soon” state feel intentional, not empty.
- Keep all secrets server-side and make deployment to Vercel straightforward.

## 2. Build phases and discussion gates

### Phase 0 — Discovery and approval

- Add the missing Vaxion MD files or confirm that the provisional positioning can be used.
- Confirm the primary audience: solo founders, startup teams, or both.
- Confirm the first dashboard capability after the starter release.
- Approve the design tokens, navigation labels, and initial copy.

**Gate:** founder approves positioning, visual direction, and auth scope.

### Phase 1 — Experience foundation

- Next.js App Router + TypeScript foundation.
- Shared layout, responsive navigation, metadata, error/loading boundaries as the app grows.
- Design tokens in one CSS layer so color, type, spacing, border, shadow, and motion decisions remain consistent.
- Accessible primitives: keyboard-visible focus, semantic headings, reduced-motion support, labeled forms, and readable contrast.

### Phase 2 — Landing page

- Futuristic hero with a CSS/SVG “Vaxion core” graphic rather than a stock image.
- Product promise, three operating pillars, a simple founder workflow, and a focused conversion CTA.
- Responsive treatment for small screens; the visual should simplify instead of becoming a cropped desktop composition.
- No dependency on proprietary product screenshots until the real product exists.

### Phase 3 — Authentication foundation

- Supabase Auth for email/password sign up and sign in.
- Email confirmation callback at `/auth/callback`.
- Server-side session refresh middleware and a protected `/dashboard` route.
- Resend server route for a welcome email after sign up when Resend environment variables are configured.
- Graceful demo mode when local credentials are not configured so the visual starter remains reviewable.

### Phase 4 — Founder dashboard shell

- Authenticated shell with brand, navigation, user identity, and sign-out.
- Clear “Founder workspace is being assembled” coming-soon state.
- Reserve the information architecture for future modules without pretending those modules are available.

### Phase 5 — Deployment and hardening

- Vercel deployment with environment variables configured in the project settings.
- Supabase Site URL and redirect URL configuration for local and production domains.
- Resend verified sender domain and production email template.
- Rate limiting, abuse protection, analytics consent, and monitoring before public launch.

## 3. Fixed design system v0.1

### Color palette

| Token | Value | Use |
| --- | --- | --- |
| `ink-950` | `#070A12` | page background |
| `ink-900` | `#0C1220` | elevated panels |
| `ink-800` | `#151E30` | borders and secondary surfaces |
| `paper` | `#F5F7F4` | primary text |
| `mist` | `#A5B1C5` | secondary text |
| `signal` | `#63F5D5` | primary accent, links, focus |
| `violet` | `#9C7BFF` | secondary accent / gradient |
| `volt` | `#C6F36B` | highlight / status |
| `coral` | `#FF8C7A` | restrained alert accent |

The page stays dark by default. Bright accents are used as signals, not decoration everywhere. Gradients should move from signal to violet; never add a new accent without a product reason.

### Typography

- **Display:** Space Grotesk, with a system sans fallback. Used for the wordmark, hero, and section titles.
- **Body:** Inter, with a system sans fallback. Used for navigation, paragraphs, labels, and controls.
- **Technical labels:** IBM Plex Mono, with a monospace fallback. Used for eyebrow labels, metadata, status, and data-like UI.

Type scale is intentionally compact and editorial: large display contrast, 16–18px readable body copy, and mono labels with increased tracking.

### Layout and UI rules

- 12-column desktop grid, capped at 1180px; 20px page gutters on mobile and 32px on desktop.
- Section rhythm uses large breathing room: 96–140px desktop, 72–96px mobile.
- Panel radius: 24px for feature surfaces, 16px for controls, pill radius only for tags and status.
- One-pixel low-contrast borders define surfaces; shadows are soft and atmospheric rather than generic drop shadows.
- Motion is short and purposeful: 180–300ms UI transitions, slow ambient orbit animation, and a reduced-motion fallback.
- Every interactive control has a visible `:focus-visible` ring in `signal`.

## 4. Technical decisions

- **Framework:** Next.js App Router and TypeScript.
- **Styling:** CSS modules are not required for this small starter; global design tokens and component classes keep the system easy to inspect and migrate.
- **Auth/data:** Supabase SSR helpers. No Supabase service-role key is ever shipped to the browser.
- **Email:** Resend is called only from a server route. The browser never receives the Resend API key.
- **Hosting:** Vercel. Relative URLs are used by browser-facing code, so the app works behind a Vercel preview URL.
- **Local review:** If Supabase variables are absent, public pages render normally and auth surfaces explain that they are in demo mode instead of crashing.
- **Build hygiene:** `dev` and `build` clear `.next` before compiling so interrupted or mixed dev/production builds cannot leave stale webpack chunk references behind.

### Required environment variables

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=Vaxion <hello@your-domain.com>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 5. Approval questions

1. Which source MD files should be treated as the canonical voice and product vocabulary?
2. Is “the operating layer for what’s next” an acceptable temporary positioning line, or should Vaxion be framed more narrowly?
3. Should the first production auth release support email/password only, or also magic links and an OAuth provider?
4. What should the first real dashboard module be: goals, founder CRM, decision log, planning, or another workflow?

## 6. Definition of done for this starter

- Landing page is responsive, visually distinctive, and usable without JavaScript-dependent hero content.
- Sign up, sign in, callback, session refresh, and sign out paths are present and documented.
- `/dashboard` is protected when Supabase is configured and presents a deliberate coming-soon state.
- Resend integration is server-only and optional in local/demo mode.
- `npm run typecheck` and `npm run build` pass before the starter is handed over.
- No secrets, generated build output, or large visual assets are committed.
