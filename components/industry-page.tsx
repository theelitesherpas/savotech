import Link from "next/link";
import Reveal from "./reveal";
import SvcWork from "./svc-work";
import { INDUSTRIES, type Industry } from "@/lib/industries-data";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Shared template for every dedicated industry page. */
export default function IndustryPageView({ industry }: { industry: Industry }) {
  const ind = industry;
  const others = INDUSTRIES.filter((x) => x.slug !== ind.slug);

  return (
    <>
      {/* ---------- hero: dark, spacious, giant numeral ---------- */}
      <section className="section section-dark cs-hero">
        <div className="wrap">
          <div className="cs-hero-grid">
            <div className="cs-hero-copy">
              <Reveal>
                <p className="page-kicker">
                  <Link href="/#industries" className="text-cta">Industries</Link> / {ind.title}
                </p>
                <h1>{ind.tagline}</h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="lead">{ind.intro[0]}</p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="cs-hero-num-wrap" aria-hidden="true">
              <span className={`cs-hero-num${ind.numeral.v.length > 3 ? (ind.numeral.v.length > 6 ? " xs" : " sm") : ""}`}>{ind.numeral.v}</span>
              <span className="cs-hero-num-label">{ind.numeral.l}</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- challenges: white, numbered like a field report ---------- */}
      <section className="section section-light">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>What slows {ind.short.toLowerCase()} teams down.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                We have watched these exact problems burn roadmaps across {ind.short.toLowerCase()}{" "}
                companies. Recognition is the first half of the fix.
              </p>
            </Reveal>
          </div>
          <div className="ind-challenges">
            {ind.challenges.map((c, i) => (
              <Reveal key={c.t} delay={0.05 * i}>
                <article className="ind-challenge">
                  <span className={`ind-ch-num n${i % 4}`}>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- how we help: ink band with solution rows ---------- */}
      <section className="section ind-solutions">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>How we help {ind.short.toLowerCase()} teams win.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">{ind.intro[1]}</p>
            </Reveal>
          </div>
          <div className="ind-sol-rows">
            {ind.solutions.map((s, i) => (
              <Reveal key={s.t} delay={0.05 * i}>
                <div className="ind-sol-row">
                  <span className={`ind-sol-num n${i % 3}`}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- outcomes: paper, big numbers ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Outcomes we measure.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">Numbers from shipped {ind.short.toLowerCase()} work, not projections.</p>
            </Reveal>
          </div>
          <div className="ind-outcomes">
            {ind.outcomes.map((o, i) => (
              <Reveal key={o.l} delay={0.05 * i}>
                <div className={`ind-outcome o${i % 3}`}>
                  <strong>{o.v}</strong>
                  <span>{o.l}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- case work: white ---------- */}
      <section className="section section-light">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Work in this industry.</h2>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <SvcWork items={ind.cases} />
          </Reveal>
        </div>
      </section>

      {/* ---------- stack + compliance: paper ---------- */}
      <section className="section section-alt">
        <div className="wrap ind-stack-grid">
          <div>
            <Reveal>
              <h2>Technology we bring.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="svc-chips on-light" aria-label="Technologies">
                {ind.tech.map((t) => (
                  <span key={t} className="svc-chip-light">{t}</span>
                ))}
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.06}>
              <h2>Compliance we speak.</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <ul className="ind-compliance" aria-label="Compliance standards">
                {ind.compliance.map((c, i) => (
                  <li key={c} className={`ic-${i % 3}`}>
                    <span className="ic-check" aria-hidden="true">
                      <svg viewBox="0 0 16 16" fill="none">
                        <path d="m3 8.6 3.2 3.2L13 4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- other industries: ink tile grid ---------- */}
      <section className="section ind-others">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Other industries we serve.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">Regulation fluent teams across ten sectors, same model: matched in 48 hours, two week trial, transparent rates.</p>
            </Reveal>
          </div>
          <div className="ind-others-grid">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={0.04 * i}>
                <Link className="ind-other-tile" href={`/industries/${o.slug}/`}>
                  <img src={`${BP}${o.photo}`} alt={`${o.title} work by Savo`} loading="lazy" />
                  <span className="role-photo-veil" aria-hidden="true" />
                  <span className="role-photo-body">
                    <strong>{o.title}</strong>
                    <span className="role-photo-cta">
                      Explore {o.short.toLowerCase()}
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ: white ---------- */}
      <section className="section section-light" id="faq">
        <div className="wrap wrap-narrow">
          <div className="section-head">
            <Reveal>
              <h2>{ind.short} questions, answered.</h2>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <div className="faq-list">
              {ind.faqs.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="faq-body"><p>{f.a}</p></div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- knowledge center: paper ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <p className="page-kicker">Knowledge center</p>
              <h2>Go deeper on {ind.short.toLowerCase()} software.</h2>
            </Reveal>
          </div>
          <div className="svc-know-grid know-light">
            {ind.knowledge.map((k, i) => (
              <Reveal key={k.t} delay={0.05 * i}>
                <article className="svc-know-card know-light">
                  <div className="svc-know-media">
                    <img src={`${BP}${ind.cases[i % ind.cases.length].img}`} alt="" loading="lazy" aria-hidden="true" />
                  </div>
                  <span className="svc-know-time">{k.time}</span>
                  <h3>{k.t}</h3>
                  <p>{k.d}</p>
                  <span className="text-cta svc-know-cta">Read on the blog →</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- final CTA: ink ---------- */}
      <section className="section svc-cta cs-cta-ink">
        <div className="wrap svc-cta-wrap">
          <Reveal>
            <h2>Have a {ind.short.toLowerCase()} problem we just described?</h2>
            <p>Tell us which one. A senior consultant who has solved it before replies within one business day.</p>
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
