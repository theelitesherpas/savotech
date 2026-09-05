import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { ARTICLES } from "@/lib/resources-data";

export const metadata: Metadata = {
  title: "Resources & Blog",
  description:
    "Engineering, AI, design and delivery writing from the Savo Technologies team. Honest field notes from ten years of shipping software.",
  alternates: { canonical: "/resources/" },
};

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const CATS = ["All", "Engineering", "AI", "Design", "Delivery"] as const;

export default function ResourcesPage() {
  const [featured, ...rest] = ARTICLES;
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="section section-dark cs-hero">
        <div className="wrap">
          <div className="cs-hero-grid">
            <div className="cs-hero-copy">
              <Reveal>
                <p className="page-kicker">Resources & Blog</p>
                <h1>Field notes from ten years of shipping.</h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="lead">
                  No thought leadership theater. Just the patterns, budgets and postmortems our
                  engineers, designers and consultants use in production every week.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="cs-hero-num-wrap" aria-hidden="true">
              <span className="cs-hero-num sm">06</span>
              <span className="cs-hero-num-label">long form pieces, more monthly</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- featured ---------- */}
      <section className="section section-light">
        <div className="wrap">
          <Reveal>
            <Link className="res-featured" href={`/resources/${featured.slug}/`}>
              <div className="res-featured-media">
                <img src={`${BP}${featured.img}`} alt="" aria-hidden="true" />
              </div>
              <div className="res-featured-body">
                <span className="res-cat c-ai">Featured · {featured.cat}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <span className="res-meta">
                  {featured.author} · {featured.date} · {featured.time}
                </span>
                <span className="text-cta res-read-cta">Read the piece →</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- grid ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Everything we have written down.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="res-cats" aria-label="Categories">
                {CATS.map((c, i) => (
                  <span key={c} className={`res-cat-chip${i === 0 ? " on" : ""}`}>{c}</span>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="res-grid">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={0.05 * i}>
                <Link className="res-card" href={`/resources/${a.slug}/`}>
                  <div className="res-card-media">
                    <img src={`${BP}${a.img}`} alt="" loading="lazy" aria-hidden="true" />
                    <span className={`res-cat ${a.cat === "AI" ? "c-ai" : a.cat === "Design" ? "c-design" : a.cat === "Delivery" ? "c-delivery" : "c-eng"}`}>{a.cat}</span>
                  </div>
                  <div className="res-card-body">
                    <h3>{a.title}</h3>
                    <p>{a.excerpt}</p>
                    <span className="res-meta">{a.author} · {a.date} · {a.time}</span>
                  </div>
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
            <h2>Reading is step one. Building is the fun part.</h2>
            <p>Put these ideas to work on your product with the team that wrote them.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="svc-hire-ctas">
              <Link className="btn btn-primary btn-lg" href="/start-your-project/">Start your project</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
