import Link from "next/link";
import Reveal from "./reveal";
import ServiceCalculator from "./service-calculator";
import SvcRoles from "./svc-roles";
import SvcWork from "./svc-work";
import { CLIENT_QUOTES, type ServicePage } from "@/lib/services-data";
import { ICONS } from "./service-icons";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Shared template for every dedicated service page. */
export default function ServicePageView({ service }: { service: ServicePage }) {
  const s = service;
  return (
    <>
      {/* ---------- hero: backdrop image, copy over it, ink facts strip ---------- */}
      <section className="section section-light start-hero svc-hero2">
        <img className="hh-bg" src={`${BP}${s.portfolio[0].img}`} alt="" aria-hidden="true" />
        <div className="hh-bg-veil" aria-hidden="true" />
        <div className="hh-badge" aria-hidden="true">
          <span className="hh-badge-dot" />
          Trusted since 2015
        </div>
        <div className="wrap hh-content">
          <div className="hh-copy">
            <Reveal>
              <p className="page-kicker svc-kicker">
                <Link href="/#services" className="text-cta">Services</Link> / {s.title}
              </p>
              <h1>{s.tagline}</h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">{s.intro[0]}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="svc-hire-ctas">
                <Link className="btn btn-primary btn-lg" href="/start-your-project/">Start your project</Link>
                <Link className="btn btn-ghost btn-lg" href="#calculator">Price it now</Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <ul className="hh-facts" aria-label={`${s.title} at a glance`}>
              {s.stats.map((st, i) => (
                <li key={st.l} className={`hh-fact f${i % 3}`}>
                  <strong>{st.v}</strong>
                  <span>{st.l}</span>
                </li>
              ))}
              <li className="hh-fact-cta">
                <Link className="btn btn-ghost-sm" href="/contact/">Talk to an engineer →</Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- what you get ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>What you get.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">{s.intro[1]}</p>
            </Reveal>
          </div>
          <div className="svc-grid">
            {s.deliverables.map((d, i) => (
              <Reveal key={d.t} delay={0.05 * (i % 2)}>
                <article className="svc-card">
                  <span className={`svc-num n${i % 3}`}>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{d.t}</h3>
                  <p>{d.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- process ---------- */}
      <section className="section section-light">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>How we run it.</h2>
            </Reveal>
          </div>
          <ol className="svc-process">
            {s.process.map((p, i) => (
              <Reveal key={p.t} delay={0.05 * i}>
                <li>
                  <span className="svc-step-dot" aria-hidden="true" />
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- stack: ink band, not whitish ---------- */}
      <section className="section svc-stack">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>The stack we ship on.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">Chosen for your product, not our comfort. Battle tested across the work below.</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ul className="svc-stack-grid">
              {s.stack.map((t, i) => {
                const Icon = ICONS[t.i as string];
                return (
                  <li key={t.n} className={`svc-tech-tile t${i % 3}`}>
                    <span className="svc-tech-ico" aria-hidden="true">
                      {Icon ? <Icon /> : null}
                    </span>
                    <strong>{t.n}</strong>
                  </li>
                );
              })}
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="svc-chips" aria-label="Related technologies">
              {s.tech.map((t) => (
                <span key={t} className="svc-chip">{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- calculator ---------- */}
      <ServiceCalculator service={s} />

      {/* ---------- portfolio for this service ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Built with this service.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">Representative {s.title.toLowerCase()} work, with the numbers clients let us publish.</p>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <SvcWork items={s.portfolio} />
          </Reveal>
        </div>
      </section>

      {/* ---------- hire related resources ---------- */}
      <section className="section section-light" id="hire">
        <div className="wrap svc-hire-grid">
          <div>
            <Reveal>
              <p className="page-kicker">Related resources</p>
              <h2>Need engineers for this stack?</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Dedicate the same people who build our {s.title.toLowerCase()} work to yours. Monthly INR
                rates, two week trial, no lock in. Or apply to join the team building it.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="svc-hire-ctas">
                <Link className="btn btn-primary" href="/start-your-project/">Hire a team</Link>
                <Link className="btn btn-ghost" href="/careers/">Join as an engineer</Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <SvcRoles roles={s.roles} />
          </Reveal>
        </div>
      </section>

      {/* ---------- what clients say ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>What our clients say.</h2>
            </Reveal>
          </div>
          <div className="svc-quotes">
            {CLIENT_QUOTES.map((q, i) => (
              <Reveal key={q.name} delay={0.05 * i}>
                <figure className={`svc-quote q${i % 3}`}>
                  <blockquote>“{q.quote}”</blockquote>
                  <figcaption>
                    <span className="svc-quote-photo">
                      <img src={`${BP}${q.img}`} alt={q.name} loading="lazy" />
                    </span>
                    <span>
                      <strong>{q.name}</strong>
                      <span>{q.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section section-light" id="faq">
        <div className="wrap wrap-narrow">
          <div className="section-head">
            <Reveal>
              <h2>{s.title} questions, answered.</h2>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <div className="faq-list">
              {s.faqs.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="faq-body"><p>{f.a}</p></div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- knowledge center: ink for contrast ---------- */}
      <section className="section svc-knowledge">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <p className="page-kicker">Knowledge center</p>
              <h2>Go deeper on {s.title.toLowerCase()}.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">Engineering notes from the people who ship this work every week.</p>
            </Reveal>
          </div>
          <div className="svc-know-grid">
            {s.knowledge.map((k, i) => (
              <Reveal key={k.t} delay={0.05 * i}>
                <article className="svc-know-card">
                  <div className="svc-know-media">
                    <img src={`${BP}${s.portfolio[i % s.portfolio.length].img}`} alt="" loading="lazy" aria-hidden="true" />
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

      {/* ---------- final CTA ---------- */}
      <section className="section svc-cta">
        <div className="wrap svc-cta-wrap">
          <Reveal>
            <h2>Let&apos;s scope your {s.title.toLowerCase()} work.</h2>
            <p>One call, a written proposal within days, and a start date you can plan around.</p>
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
