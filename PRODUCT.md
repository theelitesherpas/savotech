# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
User-decided framework (**Next.js + PostgreSQL**, explicit instruction), database engine
choice delegated to me after an offer between MongoDB and PostgreSQL — chose **PostgreSQL**:
leads/subscribers/chat are relational with JSON payloads, the planned client portal
(milestones, invoices, teams) is relational, and JSONB covers future CMS flexibility.
Next.js App Router, static-first server rendering, `next/font` self-hosted Plus Jakarta Sans,
metadata API + JSON-LD + sitemap/robots. `pg` client with `db/schema.sql` (leads,
newsletter_subscribers, chat_logs); connects to local PostgreSQL via `DATABASE_URL`
(Homebrew postgresql@17), with a JSON fallback store when no database is reachable so
local preview never breaks. Served at `http://localhost:3000/savotech` (basePath `/savotech`).
Fully isolated from the unrelated `/Users/om/savo-technologies` Next.js app (never touched).

## Users
- Buyers of technology services: founders, product owners, CTOs, and enterprise teams in
  India (primary/home market), USA, Saudi Arabia & GCC, Australia, UK, and globally.
- Situations: evaluating an established partner for AI agents, web/mobile builds, custom
  software; comparing dedicated-developer hiring; wanting a fast credible price indication.
- Existing clients: returning to track project status via the client portal.

## Product Purpose
Homepage for Savo Technologies, a 10-year-old global technology company offering website
design & development, mobile app design & development, AI agent development (flagship,
"latest generation"), and full-spectrum digital/software services. Success = visitor
believes the company is established, premium, secure, global and AI-forward, and takes
action: Start Your Project, request an AI agent demo, use the estimator, or contact.

## Positioning
Affordable-premium, India-based global delivery: 10 years of enterprise-grade engineering
with flagship AI agent capability, at cost advantage versus US/UK/Gulf rates — never
"cheap". Design benchmark: match and elevate eleks.com's polish (design language only;
no content/copy/code imitation).

## Operating Context
One-page marketing homepage; future sibling pages (About, AI, Services detail, Hire
Resources, Industries, Case Study, Resources, Contact, Client Portal) will reuse the same
design system. Served locally for preview at /savotech.

## Capabilities and Constraints
- Exact section order pinned by the brief (header → hero slider → trust bar → services →
  6 AI agents → Ask Savo Anything chat UX (front-end demo only; backend AI later) →
  industries (10) → portfolio (6) → hire developers + instant INR estimator → why choose →
  client portal teaser → testimonials → FAQ (10) → final CTA → large footer).
- Sticky header w/ AI mega-menu, "AI Agents" entry with glowing PRO badge, dual hero CTAs,
  trust stats, newsletter, compliance row (GDPR, SSL/PCI, ISO placeholders).
- Instant estimator outputs INR ranges; lead capture required.
- SEO/AEO/GEO: single keyword H1, logical heading hierarchy, FAQPage/Organization/
  ProfessionalService/Service JSON-LD, keyword-rich alt text, semantic HTML, fast load.

## Brand Commitments
- Name: Savo Technologies (only the S capitalized).
- **Visual world v2 (user-pinned reference set savo95-100):** Swiss-light identity — white
  ground, ink type, flat RGB tricolor accents (#FF1E1D / #1D28FF / #2BD926) with pale tint
  chips; ink zones reserved for AI and the ending; Plus Jakarta Sans (single face); no gradients/glow
  (PRO pulse excepted). Replaces the earlier ink-navy + volt-indigo world, which the user
  rejected ("I don't like the layout any design styling").
- Tone: established (10-year), global, secure, premium, AI-forward.
- Searchable by "Savo" and "Savo Technologies" (metadata + alternateName + FAQ content).

## Evidence on Hand
None. All stats, case studies, testimonials, client names, office details, contact data,
certification badges, and pricing figures are **illustrative placeholders authored for
design fidelity** and must be replaced with real, verified material before launch. No
commercial claim on the page should be treated as fact until the owner confirms it.
(Replacement list delivered at handoff.)

## Product Principles
1. Prove, don't claim: agents, assistant, estimator and portal mockup demonstrate capability.
2. Affordable premium, never cheap: credible INR pricing framed as global-quality value.
3. Ten years, five regions: experience and geography stated as plain, quotable facts.
4. One accountable team: full-spectrum services under a single accountable partner.
5. AI-forward without losing enterprise trust: glow reserved for AI surfaces, discipline everywhere else.

## Accessibility & Inclusion
WCAG-minded: contrast ≥4.5:1 body text, keyboard navigation, ARIA labels, visible focus
states, prefers-reduced-motion respected, mobile-first responsive.
