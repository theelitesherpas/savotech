# Savo Technologies — Corporate Website

Premium, AI-forward enterprise website for Savo Technologies. **Next.js 16 (App Router) + TypeScript (strict) + PostgreSQL**, static-first rendering for fast loads, SEO/AEO/GEO built in.

Preview: **http://localhost:3000/savotech** · Production: https://savotech.vercel.app/newdesign

## Run

```bash
npm install
npm run dev          # http://localhost:3000/savotech  (port 3000)
```

Production build & full local verification:

```bash
npm run verify       # lint + typecheck + unit tests + production build
npm run test:e2e     # full E2E suite against the production build (needs Chrome)
```

| Script | What it does |
| --- | --- |
| `npm run lint` | ESLint 9 flat config (`next/core-web-vitals` + TS rules) |
| `npm run typecheck` | `tsc --noEmit` (strict) |
| `npm run test` | Vitest unit tests (`tests/`) |
| `npm run test:e2e` | Puppeteer E2E + 70-page internal link crawl (`scripts/e2e.mjs`) |
| `npm run build` | Production build |

## Architecture

```
app/                    # App Router routes (all static unless noted)
  api/{leads,chat,captcha,geo}/   # Route Handlers (rate limited, validated)
  services/ industries/ hire/ ai/ # data-driven detail pages via shared view components
  resources/[slug]/              # SSG articles (generateStaticParams)
  error.tsx global-error.tsx not-found.tsx   # error boundaries + branded 404
  sitemap.ts robots.ts           # generated from the data modules
components/             # server components by default; "use client" only for interaction
config/
  site.ts               # shared site facts (contact, socials)
  navigation.ts         # typed nav data consumed by header + footer (single source)
lib/
  seo.ts                # pageMetadata() factory, asset(), canonical origin
  estimator/pricing.ts  # estimator business rules (unit-tested, UI-independent)
  captcha.ts form-guard.ts savo-intelligence.ts currency.ts
  *-data.ts(x)          # content layer: services, industries, hire roles, articles…
db/                     # pg pool + JSON fallback store + schema.sql
tests/                  # Vitest unit tests
scripts/e2e.mjs         # E2E smoke suite (system Chrome via puppeteer-core)
```

**Server/client split**: pages and view components are Server Components; only
interactive islands (forms, estimator, nav, chat, currency) are Client Components.

**next/image**: all content images (work, team, articles) run through the optimizer.
With `basePath`, `src` must include the basePath — use `asset()` from `lib/seo.ts`.

## Environment

See `.env.example`. All values are non-secret except `CAPTCHA_SECRET`.

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL (leads + chat logs). Falls back to a JSON store when unset/unreachable. |
| `NEXT_PUBLIC_SITE_URL` | Canonical production domain (SEO metadata, sitemap, JSON-LD). |
| `NEXT_PUBLIC_BASE_PATH` | Must match `basePath` in `next.config.ts` (`/savotech` local, `/newdesign` on Vercel). Empty when serving from the domain root. |
| `CAPTCHA_SECRET` | HMAC secret for the self-hosted captcha. **Set in production** — otherwise an ephemeral per-instance secret is used (rare retry prompts) and a warning is logged. |

Schema (`db/schema.sql`) is applied automatically on first write; the file is traced
into the serverless bundle (`outputFileTracingIncludes`).

## Security

- Route handlers: UA check, same-origin enforcement, honeypot + time-trap,
  in-memory sliding-window rate limits (per IP), HMAC-signed single-use captcha.
- Headers (`next.config.ts`): CSP (same-origin fetches, no framing/plugins),
  HSTS, `X-Frame-Options: DENY`, `nosniff`, referrer + permissions policies.
- No third-party scripts, fonts or trackers. `next/font` self-hosts Plus Jakarta Sans.

## SEO / AEO / GEO

- `pageMetadata()` (`lib/seo.ts`) gives every indexable page a unique title,
  description, canonical, OG + Twitter card.
- `sitemap.xml` is generated from the same data modules that render the pages;
  private routes (`/portal/`, `/careers/apply/`, `/api/`) are excluded and noindexed.
- JSON-LD: Organization + ProfessionalService + WebSite (site-wide, `structured-data.tsx`);
  FAQPage only where FAQs render (homepage, service/industry/hire pages);
  Service schema on service pages; Article + BreadcrumbList on resource articles.
- Unknown URLs return a real 404 (branded `not-found.tsx`), not a soft "coming soon" page.

## Ask Savo / Estimator

- **Ask Savo Anything** is a deterministic rule engine (`lib/savo-intelligence.ts`) —
  demo/preview capability, clearly separated behind `respond()` so a real LLM can be
  swapped in without touching the UI contract.
- **Instant Estimator** business rules live in `lib/estimator/pricing.ts`
  (typed, unit-tested); the UI only renders options and submits the computed range.

## Design system

`DESIGN.md` + `.impeccable/design.json` record tokens, named rules and component
patterns. New pages must reuse `app/globals.css` tokens and the documented
component vocabulary.

## ⚠️ Content requiring verification before launch

1. **Track-record stats** (10+ years, 650+ projects, 25+ countries, 60+ AI agents) — verify with real numbers.
2. **Case studies** (MediBridge, GulfPay, Sahm AI, RideLink, ClearLedger, EduSpring…) and **testimonials** — fictional composites; replace with real projects + consent.
3. **Compliance claims** (GDPR-aligned, ISO, PCI DSS readiness) — align with actual certifications/policies.
4. **Hire rates & estimator pricing model** — confirm commercial positioning.
5. **Social links** in `config/site.ts` — currently platform homepages, point at real profiles.
6. **Office addresses** — city-level only (Indore · Ahmedabad); add street addresses when confirmed.
7. **`NEXT_PUBLIC_SITE_URL`** — set to the final production domain before launch; plan 301s when migrating off `/newdesign`.
