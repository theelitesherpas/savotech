# Savo Technologies — Corporate Homepage

Premium, AI-forward enterprise homepage for Savo Technologies. **Next.js (App Router) + PostgreSQL**, static-first rendering for fast loads, SEO/AEO/GEO built in.

Preview: **http://localhost:3000/savotech**

## Run

```bash
npm install
npm run dev          # http://localhost:3000/savotech  (port 3000)
```

Production build:

```bash
npm run build && npm start
```

## PostgreSQL (optional locally, required in production)

The app writes estimator leads, newsletter subscribers and assistant chat logs to
PostgreSQL. Without a reachable database it falls back to a local JSON store
(`.data/store.json`), so the preview never breaks.

```bash
# local setup (Homebrew postgresql@17)
brew services start postgresql@17
createdb savotech
cp .env.example .env.local       # then set DATABASE_URL, e.g. postgres://om@localhost:5432/savotech
```

Schema (`db/schema.sql`) is applied automatically on first write.
Tables: `leads`, `newsletter_subscribers`, `chat_logs`.

## Stack notes

- **Next.js 16 App Router**, basePath `/savotech`, security headers, SSG homepage.
- **next/font** self-hosts Plus Jakarta Sans (no external font requests at runtime).
- **SEO/AEO/GEO**: metadata API, Organization + ProfessionalService + WebSite + FAQPage
  JSON-LD, `sitemap.xml`, `robots.txt`, semantic single-H1 document, keyword coverage for
  "Savo", "Savo Technologies", regions (India/USA/Saudi Arabia & GCC/UK/Australia) and
  freelancer-style queries (top freelancers, Upwork developers, Indore, Dubai…).
- **Ask Savo Anything**: front-end contract in `components/ask-savo.tsx`; answers come from
  the server-side rule engine in `lib/savo-intelligence.ts` (swap `respond()` for any LLM;
  the provider is never surfaced to visitors — always "Savo Intelligence").
- **Instant Estimator**: transparent INR model in `components/estimator.tsx`; submissions
  POST to `/api/leads`.

## Design system

`DESIGN.md` + `.impeccable/design.json` record tokens, named rules and component patterns.
All future pages (About, AI, Services detail, Hire Resources, Industries, Case Studies,
Resources, Contact, Client Portal, Privacy, Terms) should reuse `app/globals.css` tokens
and the documented component vocabulary. Unknown routes currently render a branded
"page in development" screen (`app/[...slug]/page.tsx`).

## ⚠️ Placeholder material to replace before launch (authored for design fidelity)

1. **Track-record stats** (10+ years, 650+ projects, 25+ countries, 60+ AI agents) — verify with real numbers.
2. **Case studies** (MediBridge, GulfPay, Sahm AI, RideLink, ClearLedger, EduSpring) — fictional composites; replace with real projects + imagery rights.
3. **Testimonials** (Dr. Reem Al-Otaibi, James Whitfield, Ananya Iyer) and **client wordmarks** in the logo strip — illustrative; the on-page note marks them as representative.
4. **Contact details**: hello@savotechnologies.com, +91 00000 00000, office locations (Indore/Ahmedabad HQ, Riyadh · Dubai · Manama, London, Sydney, North America).
5. **Compliance badges** (GDPR, SSL, PCI-DSS, ISO 27001) — align with actual certifications/policies.
6. **Hire rates & estimator pricing model** — confirm commercial positioning.
7. **Social links** (LinkedIn, X, GitHub, Instagram, YouTube) — point at real profiles.
8. **Structured-data address** in `components/structured-data.tsx` — currently a placeholder in Indore.
9. **NEXT_PUBLIC_SITE_URL** in `.env.local` — set to the production domain before launch.
