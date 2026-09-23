import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import Reveal from "@/components/reveal";
import { SERVICE_CARDS, AI_SERVICE_CARDS } from "@/components/services";
import { INDUSTRY_CARDS } from "@/components/industries";

export const metadata = pageMetadata({
  title: "All Services | AI, Software, Design & Growth",
  description: "Browse every Savo Technologies service: AI agent development, generative AI, machine learning, web and mobile engineering, UI/UX, cloud, QA and digital marketing. Instant price estimates on every service page.",
  path: "/services/",
  ogDescription: "Thirteen services across AI, engineering, design and growth. Strategy, build and operations under one accountable team.",
});

const Arrow = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path
      d="M2 8h11M9 3.5 13.5 8 9 12.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const dataCard = SERVICE_CARDS.find((s) => s.slug === "data-analytics")!;
const engineeringCards = SERVICE_CARDS.filter((s) => s.slug !== "data-analytics");

export default function AllServicesPage() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="section section-dark cs-hero">
        <div className="wrap">
          <div className="cs-hero-grid">
            <div className="cs-hero-copy">
              <Reveal>
                <p className="page-kicker">All Services</p>
                <h1>Thirteen services. One accountable team.</h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="lead">
                  From latest generation AI agents to launch scale engineering, every capability
                  lives in house: strategy, design, build and operations, so nothing falls
                  between vendors. Each service page carries an instant price estimate.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="svc-hire-ctas">
                  <Link className="btn btn-primary btn-lg" href="/start-your-project/">
                    Start your project
                  </Link>
                  <Link className="btn btn-ghost btn-lg" href="/#estimator">
                    Open the estimator
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="cs-hero-num-wrap" aria-hidden="true">
              <span className="cs-hero-num sm">13</span>
              <span className="cs-hero-num-label">services across AI, engineering and growth</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- AI & data ---------- */}
      <section className="section section-light">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>AI &amp; Data.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                The flagship zone. Agents, LLM integration, applied machine learning and the
                data plumbing that feeds all of it, deployed to production in weeks, not quarters.
              </p>
            </Reveal>
          </div>
          <div className="services-grid">
            <Reveal className="svc-feature-wrap">
              <Link className="svc svc-feature" href="/services/ai-agent-development/">
                <div className="svc-feature-visual" aria-hidden="true">
                  <svg viewBox="0 0 120 90" fill="none">
                    <circle cx="60" cy="45" r="30" stroke="rgba(255,255,255,.25)" strokeDasharray="2 5" />
                    <circle cx="60" cy="45" r="6" fill="#1D28FF" />
                    <circle cx="88" cy="30" r="4" fill="#4D5CFF" />
                    <circle cx="34" cy="62" r="4" fill="#2BD926" />
                    <circle cx="70" cy="72" r="3" fill="#1D28FF" />
                  </svg>
                  <span className="pro-badge">PRO</span>
                </div>
                <h3>AI Agent Development</h3>
                <p>
                  Latest generation AI agents and LLM solutions, engineered and trained on your
                  data, deployed into production in weeks, not quarters.
                </p>
                <span className="svc-link">
                  Explore AI agents <Arrow />
                </span>
              </Link>
            </Reveal>

            {[...AI_SERVICE_CARDS, dataCard].map((s, i) => (
              <Reveal key={s.slug} delay={0.05 * ((i + 1) % 4)}>
                <Link className="svc" href={s.href}>
                  {s.icon}
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  <span className="svc-link">
                    Learn more <Arrow />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- engineering, design & growth ---------- */}
      <section className="section about-timeline">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Engineering, design &amp; growth.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                The delivery core: product teams that design, build, test, ship and market your
                software with weekly demos and one accountable lead.
              </p>
            </Reveal>
          </div>
          <div className="services-grid">
            {engineeringCards.map((s, i) => (
              <Reveal key={s.slug} delay={0.05 * ((i + 1) % 4)}>
                <Link className="svc" href={s.href}>
                  {s.icon}
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  <span className="svc-link">
                    Learn more <Arrow />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- industries ---------- */}
      <section className="section section-light">
        <div className="wrap">
          <div className="section-head split">
            <div>
              <Reveal>
                <h2>Built for your sector.</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="lead">
                  Ten industries, each with its own regulations, integrations and rituals. Teams
                  arrive fluent in yours.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <Link className="text-cta" href="/industries/">
                All industries
                <Arrow />
              </Link>
            </Reveal>
          </div>
          <div className="industries-grid">
            {INDUSTRY_CARDS.map((ind, i) => (
              <Reveal key={ind.slug} delay={0.05 * (i % 5)}>
                <Link className="ind" href={ind.href}>
                  <span className={`ind-art ${ind.tint}`} aria-hidden="true">
                    <svg viewBox="0 0 32 32" fill="none">
                      {ind.icon}
                    </svg>
                  </span>
                  <h3>{ind.t}</h3>
                  <p>{ind.d}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section svc-cta cs-cta-ink">
        <div className="wrap svc-cta-wrap">
          <Reveal>
            <h2>Tell us the outcome. We scope the path.</h2>
            <p>A senior consultant replies within one business day with a costed next step.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="svc-hire-ctas">
              <Link className="btn btn-primary btn-lg" href="/start-your-project/">
                Start your project
              </Link>
              <Link className="btn btn-ghost btn-lg" href="/contact/">
                Talk to us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
