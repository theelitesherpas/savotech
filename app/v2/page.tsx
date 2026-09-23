import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/logo";
import { siteConfig } from "@/config/site";
import { AGENTS } from "@/lib/agents-data";
import HeroField from "./hero-field";
import V2Nav from "./v2-nav";
import styles from "./v2.module.css";

export const metadata: Metadata = {
  title: { absolute: "Savo Technologies | AI Agents, Web Platforms & Mobile Apps" },
  description:
    "Homepage concept v2 for Savo Technologies: a 10-year engineering company building AI agents, web platforms and mobile apps for teams across India, the USA, the GCC, the UK and Australia.",
  alternates: { canonical: "/v2/" },
  robots: { index: false, follow: false }, // design preview — promote to indexable when approved
};

/* DIRECTION CONTRACT (v2 — "The Night Control Room")
THESIS: The AI machine room at night opens the page — an ink field where luminous
packets travel a dot lattice — then the lights come on: a Swiss-light working floor
of hairlines, ink type and one tricolor. Refuses the card-grid SaaS homepage.
OWN-WORLD: Ink #070D1D hero with the travelling-particle canvas (Savo blue dominant,
green/red sparse); below, white ground, 1px #E7E7EB hairlines, #101014 type, flat
#1D28FF/#2BD926/#FF5C5C accents; Plus Jakarta Sans everywhere; services as a ledger,
not cards; agents as a console list.
STORY: The visitor reads a decade-old engineering firm whose systems are alive and
moving, then walks a calm, professional floor and acts: Start your project.
FIRST VIEWPORT: Full-height ink hero; fixed light-on-dark nav; giant display H1 with
one blue-marked phrase; blue primary + ghost CTAs; hairline stat strip at the fold.
FORM: User-pinned direction (Octolane hero field + clean professional structure);
code-led. Standalone route (/v2) — the main site is untouched.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish
review, the verdict, DESIGN.md, and every shipping raster carrying its provenance */

const SERVICES_LEDGER = [
  {
    title: "AI Agent Development",
    desc: "Production agents with RAG, guardrails and eval suites — live on web, WhatsApp and email in two to four weeks.",
    href: "/services/ai-agent-development/",
    color: "var(--v2-blue)",
  },
  {
    title: "Web Development",
    desc: "React, Next.js and Node.js platforms, portals and headless commerce with performance budgets baked in.",
    href: "/services/web-development/",
    color: "var(--v2-green)",
  },
  {
    title: "Mobile App Development",
    desc: "Flutter and native apps for iOS and Android, shipped weekly from the first sprint to the stores.",
    href: "/services/mobile-apps/",
    color: "var(--v2-red)",
  },
  {
    title: "UI/UX Design",
    desc: "Research-led product design: design systems, prototypes and accessibility as default, not retrofit.",
    href: "/services/ui-ux/",
    color: "var(--v2-blue)",
  },
  {
    title: "Cloud & DevOps",
    desc: "AWS and Azure infrastructure, CI/CD pipelines and observability that keep weekly ships boring.",
    href: "/services/cloud-devops/",
    color: "var(--v2-green)",
  },
  {
    title: "Data & Analytics",
    desc: "Pipelines, warehouses and dashboards that turn scattered data into decisions your board can read.",
    href: "/services/data-analytics/",
    color: "var(--v2-red)",
  },
] as const;

const INDUSTRIES = [
  ["Healthcare", "/industries/healthcare/"],
  ["FinTech & Banking", "/industries/fintech/"],
  ["Ecommerce & Retail", "/industries/ecommerce/"],
  ["Real Estate", "/industries/real-estate/"],
  ["Logistics & Supply Chain", "/industries/logistics/"],
  ["Education & EdTech", "/industries/education/"],
  ["Travel & Hospitality", "/industries/travel/"],
  ["Manufacturing & 4.0", "/industries/manufacturing/"],
  ["Government", "/industries/government/"],
  ["Energy & Utilities", "/industries/energy/"],
] as const;

const AGENT_DOTS = ["var(--v2-blue-soft)", "var(--v2-green)", "var(--v2-red)", "var(--v2-blue-soft)", "var(--v2-green)", "var(--v2-blue-soft)"];

const Arrow = (
  <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3.5 10h12M10.5 4.5 16 10l-5.5 5.5" />
  </svg>
);

export default function V2Homepage() {
  return (
    <div className={styles.page}>
      <V2Nav />

      {/* ------------------------------ hero ------------------------------ */}
      <section className={styles.hero}>
        <HeroField className={styles.field} />
        <div className={styles.heroVeil} aria-hidden="true" />
        <div className={styles.heroBody}>
          <div className={styles.wrap}>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroTitle}>
                Software that ships.
                <br />
                <span className={styles.heroTitleMark}>Intelligence</span> that works.
              </h1>
              <p className={styles.heroSub}>
                Savo Technologies is a <strong>10-year engineering company</strong> building AI agents,
                web platforms and mobile apps for teams in India, the USA, the GCC, the UK and
                Australia — one accountable team, weekly ships, fixed scopes.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/start-your-project/" className={styles.btnPrimary}>
                  Start your project
                  {Arrow}
                </Link>
                <Link href="/case-studies/" className={styles.btnGhost}>
                  Explore our work
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollCue} aria-hidden="true">
          <span>Scroll</span>
          <span className={styles.scrollCueLine} />
        </div>
        <div className={styles.heroStats}>
          <div className={styles.heroStatsInner}>
            <span className={styles.stat}>
              <span className={styles.statDot} style={{ background: "var(--v2-blue-soft)" }} />
              <b>10+ years</b> engineering
            </span>
            <span className={styles.stat}>
              <span className={styles.statDot} style={{ background: "var(--v2-green)" }} />
              <b>650+ projects</b> shipped
            </span>
            <span className={styles.stat}>
              <span className={styles.statDot} style={{ background: "var(--v2-red)" }} />
              <b>25+ countries</b> served
            </span>
            <span className={styles.stat}>
              <span className={styles.statDot} style={{ background: "var(--v2-blue-soft)" }} />
              <b>6 AI agents</b> in production
            </span>
          </div>
        </div>
      </section>

      {/* --------------------------- services ledger --------------------------- */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>What we build</h2>
            <p className={styles.sectionLead}>
              Full-spectrum product engineering under one roof — scoped, built and run by the
              same accountable team.
            </p>
          </div>
          <div className={styles.ledger}>
            {SERVICES_LEDGER.map((s) => (
              <Link key={s.href} href={s.href} className={styles.row}>
                <span className={styles.rowTitle}>
                  <span className={styles.rowTick} style={{ background: s.color }} aria-hidden="true" />
                  {s.title}
                </span>
                <span className={styles.rowDesc}>{s.desc}</span>
                <span className={styles.rowArrow}>{Arrow}</span>
              </Link>
            ))}
          </div>
          <Link href="/services/" className={styles.ledgerMore}>
            View all services {Arrow}
          </Link>
        </div>
      </section>

      {/* --------------------------- agents console --------------------------- */}
      <section className={`${styles.section} ${styles.agentsBand}`}>
        <div className={`${styles.wrap} ${styles.agentsGrid}`}>
          <div>
            <h2 className={styles.h2}>Six production-ready AI agents.</h2>
            <p className={styles.agentsCopy}>
              Sales, support, recruiting, analytics, content and operations — each trained on
              your data, guarded by <strong>enterprise controls</strong>, and live in two to
              four weeks with human handoff and audit logs.
            </p>
            <Link href="/ai-agents/" className={styles.btnGhost}>
              Meet the fleet
            </Link>
          </div>
          <div className={styles.console} aria-label="The six Savo AI agents">
            <div className={styles.consoleBar}>
              <span className={`${styles.consoleDot} on`} style={{ background: "var(--v2-green)" }} />
              <span className={styles.consoleDot} />
              <span className={styles.consoleDot} />
              <span className={styles.consoleTitle}>savo · agent fleet · live</span>
            </div>
            <ul className={styles.consoleList}>
              {AGENTS.map((a, i) => (
                <li key={a.slug} className={styles.consoleItem}>
                  <span className={styles.consoleItemDot} style={{ background: AGENT_DOTS[i % AGENT_DOTS.length] }} />
                  <span className={styles.consoleItemName}>{a.name.replace("Savo ", "")}</span>
                  <span className={styles.consoleItemRole}>{a.tags[0]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --------------------------- industries --------------------------- */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Fluent in ten sectors.</h2>
            <p className={styles.sectionLead}>
              Regulation-aware teams and shipped outcomes in every industry we serve — from
              healthcare compliance to Gulf energy operations.
            </p>
          </div>
          <div className={styles.pills}>
            {INDUSTRIES.map(([label, href]) => (
              <Link key={href} href={href} className={styles.pill}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- quote --------------------------- */}
      <section className={`${styles.section} ${styles.quoteSection}`}>
        <div className={styles.wrap}>
          <blockquote className={styles.quote}>
            They ship like a product team and answer like an owner. Our support agent
            deflected the first tier of tickets in week three.
          </blockquote>
          <div className={styles.quoteMeta}>
            <span className={styles.quoteWho}>Head of Product, GCC fintech</span>
            <span className={styles.quoteTag}>Representative feedback</span>
          </div>
          <div className={styles.quoteExtra}>
            <span><b>48 hours</b> to a matched team</span>
            <span><b>2 weeks</b> trial on every engagement</span>
            <span><b>1 business day</b> reply, always</span>
          </div>
        </div>
      </section>

      {/* --------------------------- final CTA --------------------------- */}
      <section className={styles.final}>
        <div className={styles.finalDots} aria-hidden="true" />
        <div className={`${styles.wrap} ${styles.finalInner}`}>
          <h2 className={styles.finalTitle}>Tell us what you&rsquo;re building.</h2>
          <p className={styles.finalSub}>
            A senior engineer replies within one business day — scope, timeline and an INR
            estimate. No sales layers, no handoffs.
          </p>
          <Link href="/start-your-project/" className={styles.btnPrimary}>
            Start your project
            {Arrow}
          </Link>
          <a className={styles.finalMail} href={`mailto:${siteConfig.email}`}>
            or write to {siteConfig.email}
          </a>
        </div>
      </section>

      {/* --------------------------- footer --------------------------- */}
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.footerTop}>
            <div>
              <Link href="/" aria-label="Savo Technologies home" className={styles.footerLogo}>
                <Logo />
              </Link>
              <p className={styles.footerTag}>
                AI agents, web platforms and mobile apps — engineered by one accountable
                team since 2016, delivering from India to the world.
              </p>
            </div>
            <div>
              <h3 className={styles.footerH}>Services</h3>
              <ul className={styles.footerLinks}>
                <li><Link className={styles.footerLink} href="/services/ai-agent-development/">AI Agent Development</Link></li>
                <li><Link className={styles.footerLink} href="/services/web-development/">Web Development</Link></li>
                <li><Link className={styles.footerLink} href="/services/mobile-apps/">Mobile Apps</Link></li>
                <li><Link className={styles.footerLink} href="/services/cloud-devops/">Cloud &amp; DevOps</Link></li>
                <li><Link className={styles.footerLink} href="/services/">All services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className={styles.footerH}>Company</h3>
              <ul className={styles.footerLinks}>
                <li><Link className={styles.footerLink} href="/about/">About</Link></li>
                <li><Link className={styles.footerLink} href="/case-studies/">Case Studies</Link></li>
                <li><Link className={styles.footerLink} href="/careers/">Careers</Link></li>
                <li><Link className={styles.footerLink} href="/resources/">Resources</Link></li>
                <li><Link className={styles.footerLink} href="/contact/">Contact</Link></li>
              </ul>
            </div>
            <div className={styles.footerContact}>
              <h3 className={styles.footerH}>Reach us</h3>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <p>One business day reply, always.</p>
              <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phone}</a>
              <p>Indore · Ahmedabad, India</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2026 {siteConfig.legalName}</span>
            <div className={styles.footerBottomLinks}>
              <Link className={styles.footerLink} href="/privacy/">Privacy</Link>
              <Link className={styles.footerLink} href="/terms/">Terms</Link>
              <span className={styles.v2Tag}>Homepage v2</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
