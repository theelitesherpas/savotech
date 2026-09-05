import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import CaseStudiesGrid from "@/components/case-studies-grid";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Web platforms, mobile apps, AI agents and brand identities built by Savo Technologies across healthcare, fintech, logistics, retail and energy in India, the GCC, UK and Australia.",
  alternates: { canonical: "/case-studies/" },
  openGraph: {
    title: "Case Studies | Savo Technologies",
    description:
      "A decade of shipped work: filterable portfolio of web, mobile, AI and brand projects with the numbers clients let us publish.",
  },
};

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function CaseStudiesPage() {
  return (
    <>
      {/* ---------- hero: dark, spacious, giant numeral (reference: braininventory) ---------- */}
      <section className="section section-dark cs-hero">
        <div className="wrap">
          <div className="cs-hero-grid">
            <div className="cs-hero-copy">
              <Reveal>
                <p className="page-kicker">Portfolio</p>
                <h1>Work we can prove.</h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="lead">
                  Real engagements, real clients, many still in production years after launch.
                  Filter by what you are shopping for.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="cs-hero-num-wrap" aria-hidden="true">
              <span className="cs-hero-num">12</span>
              <span className="cs-hero-num-label">flagship engagements shipped</span>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <ul className="hh-facts" aria-label="Portfolio at a glance">
              <li className="hh-fact f0"><strong>5 regions</strong><span>India, GCC, UK, AU, SG</span></li>
              <li className="hh-fact f1"><strong>11 yrs</strong><span>of shipping software</span></li>
              <li className="hh-fact f2"><strong>96%</strong><span>best AI resolution rate</span></li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- bento grid ---------- */}
      <section className="section section-alt" id="grid">
        <div className="wrap">
          <Reveal>
            <CaseStudiesGrid />
          </Reveal>
        </div>
      </section>

      {/* ---------- final CTA ---------- */}
      <section className="section svc-cta cs-cta-ink">
        <div className="wrap svc-cta-wrap">
          <Reveal>
            <h2>Your project could be the next card here.</h2>
            <p>Bring us the brief. We will bring the references.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="svc-hire-ctas">
              <Link className="btn btn-primary btn-lg" href="/start-your-project/">Start your project</Link>
              <Link className="btn btn-ghost btn-lg" href="/contact/">Talk to us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
