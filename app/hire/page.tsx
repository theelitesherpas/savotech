import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { HIRE_ROLES } from "@/lib/hire-data";

export const metadata: Metadata = {
  title: "Hire Developers",
  description:
    "Hire vetted AI, frontend, backend, full stack, mobile and DevOps engineers from Savo Technologies. Matched in 48 hours, two week trial, transparent monthly rates.",
  alternates: { canonical: "/hire/" },
};

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const MODELS = [
  { t: "Dedicated developer", d: "One engineer embedded in your team, your tools, your standups. Monthly, cancel with 30 days notice.", n: "01" },
  { t: "Build pod", d: "A lead plus two or three engineers who own a product area end to end, shipping weekly from week two.", n: "02" },
  { t: "Squad with QA", d: "Full delivery unit with engineering, QA and a delivery manager. For teams shipping hard deadlines.", n: "03" },
];

export default function HireIndexPage() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="section section-dark cs-hero">
        <div className="wrap">
          <div className="cs-hero-grid">
            <div className="cs-hero-copy">
              <Reveal>
                <p className="page-kicker">Hire Resources</p>
                <h1>Senior engineers, matched in 48 hours.</h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="lead">
                  Every developer is vetted by our leads, works your hours, in your tools, and starts
                  with a two week trial. If the fit is wrong, you pay nothing for it.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="cs-hero-num-wrap" aria-hidden="true">
              <span className="cs-hero-num sm">48h</span>
              <span className="cs-hero-num-label">from call to first commit</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- roles ---------- */}
      <section className="section section-light">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Pick the skill you need.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">Six disciplines, one vetting standard, transparent monthly rates in your currency.</p>
            </Reveal>
          </div>
          <div className="hire-index-grid">
            {HIRE_ROLES.map((h, i) => (
              <Reveal key={h.slug} delay={0.05 * i}>
                <Link className="hire-index-card" href={`/hire/${h.slug}/`}>
                  <div className="hire-index-media">
                    <img src={`${BP}${h.photo}`} alt="" loading="lazy" aria-hidden="true" />
                  </div>
                  <div className="hire-index-body">
                    <h3>{h.title}</h3>
                    <p>{h.tagline}</p>
                    <span className="text-cta hire-index-cta">
                      See rates and talent
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- engagement models ---------- */}
      <section className="section about-timeline">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Three ways to engage.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">Same engineers, same rates. You choose how much structure wraps around them.</p>
            </Reveal>
          </div>
          <div className="about-miles hire-models">
            {MODELS.map((m, i) => (
              <Reveal key={m.t} delay={0.05 * i}>
                <article className="about-mile">
                  <span className="about-mile-year">{m.n}</span>
                  <h3>{m.t}</h3>
                  <p>{m.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section svc-cta cs-cta-ink">
        <div className="wrap svc-cta-wrap">
          <Reveal>
            <h2>Tell us the skill. We introduce the person.</h2>
            <p>A senior consultant shares matched profiles within 48 hours, with rates and trial terms.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="svc-hire-ctas">
              <Link className="btn btn-primary btn-lg" href="/start-your-project/">Request profiles</Link>
              <Link className="btn btn-ghost btn-lg" href="/contact/">Talk to us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
