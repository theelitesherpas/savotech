import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import Reveal from "@/components/reveal";
import { INDUSTRY_CARDS } from "@/components/industries";
import { INDUSTRIES } from "@/lib/industries-data";

export const metadata = pageMetadata({
  title: "All Industries | Software Delivery Across Ten Sectors",
  description: "Savo Technologies delivers software for healthcare, fintech, ecommerce, logistics, real estate, education, travel, manufacturing, government and energy. Explore outcomes and compliance per sector.",
  path: "/industries/",
  ogDescription: "Ten sectors, one delivery standard. Regulation fluent teams and shipped outcomes in every industry we serve.",
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

const statFor = (slug: string) => INDUSTRIES.find((i) => i.slug === slug)?.numeral;

export default function AllIndustriesPage() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="section section-dark cs-hero">
        <div className="wrap">
          <div className="cs-hero-grid">
            <div className="cs-hero-copy">
              <Reveal>
                <p className="page-kicker">All Industries</p>
                <h1>Ten sectors. One delivery standard.</h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="lead">
                  A decade of delivery across healthcare, fintech and the Gulf&apos;s energy
                  economy, plus the retail, logistics, education, travel, manufacturing,
                  government and utility work between them. Every team arrives fluent in your
                  domain&apos;s regulations and rituals.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="svc-hire-ctas">
                  <Link className="btn btn-primary btn-lg" href="/start-your-project/">
                    Start your project
                  </Link>
                  <Link className="btn btn-ghost btn-lg" href="/case-studies/">
                    See the work
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="cs-hero-num-wrap" aria-hidden="true">
              <span className="cs-hero-num sm">10</span>
              <span className="cs-hero-num-label">industries, delivered with domain fluency</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- grid ---------- */}
      <section className="section section-light">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Pick your sector.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Each page carries the sector&apos;s real challenges, the systems we ship, shipped
                case work and the compliance posture that comes as standard.
              </p>
            </Reveal>
          </div>
          <div className="industries-grid">
            {INDUSTRY_CARDS.map((ind, i) => {
              const stat = statFor(ind.slug);
              return (
                <Reveal key={ind.slug} delay={0.05 * (i % 5)}>
                  <Link className="ind ind-portal" href={ind.href}>
                    <span className={`ind-art ${ind.tint}`} aria-hidden="true">
                      <svg viewBox="0 0 32 32" fill="none">
                        {ind.icon}
                      </svg>
                    </span>
                    <h3>{ind.t}</h3>
                    <p>{ind.d}</p>
                    {stat && (
                      <span className="ind-stat">
                        <strong>{stat.v}</strong>
                        <span>{stat.l}</span>
                      </span>
                    )}
                    <span className="text-cta ind-cta">
                      Explore the sector <Arrow />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section svc-cta cs-cta-ink">
        <div className="wrap svc-cta-wrap">
          <Reveal>
            <h2>Building in one of these sectors?</h2>
            <p>Tell us the outcome you need. We reply with a scoped, costed path within one business day.</p>
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
