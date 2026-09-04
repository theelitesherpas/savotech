import Link from "next/link";
import Reveal from "./reveal";
import HirePlans from "./hire-plans";
import SvcWork from "./svc-work";
import { HIRE_ROLES, type HireRole } from "@/lib/hire-data";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Shared template for every dedicated hire resources page. */
export default function HirePageView({ role }: { role: HireRole }) {
  const r = role;
  const others = HIRE_ROLES.filter((x) => x.slug !== r.slug);

  return (
    <>
      {/* ---------- hero: ink ---------- */}
      <section className="section section-dark start-hero svc-hero svc-hero-dark hire-hero">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: "1.4rem" }}>
            <Reveal>
              <p className="page-kicker">
                <Link href="/#hire" className="text-cta">Hire Resources</Link> / {r.title}
              </p>
              <h1>{r.tagline}</h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">{r.intro[0]}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="svc-hire-ctas">
                <Link className="btn btn-primary btn-lg" href="/start-your-project/">Hire now</Link>
                <Link className="btn btn-ghost btn-lg" href="#plans">See plans</Link>
                <Link className="btn btn-ghost btn-lg" href="/contact/">Talk to us</Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <ul className="svc-stats" aria-label={`${r.title} at a glance`}>
              {r.facts.map((f) => (
                <li key={f.l}>
                  <strong>{f.v}</strong>
                  <span>{f.l}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- what you get ---------- */}
      <section className="section section-light">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>What you get.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">{r.intro[1]}</p>
            </Reveal>
          </div>
          <div className="svc-grid">
            {r.skills.map((d, i) => (
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

      {/* ---------- engagement flow ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>How we start, and every stage after.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Hiring should feel like adding a teammate, not signing a contract. Here is the
                exact path from first call to a running team.
              </p>
            </Reveal>
          </div>
          <ol className="svc-process">
            {r.process.map((p, i) => (
              <Reveal key={p.t} delay={0.05 * i}>
                <li>
                  <span className="svc-step-dot" aria-hidden="true" />
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.2}>
            <div className="svc-hire-ctas center">
              <Link className="btn btn-primary" href="/start-your-project/">Start the first step</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- plans: ink ---------- */}
      <HirePlans monthly={r.monthly} role={r.title} />

      {/* ---------- projects ---------- */}
      <section className="section section-light">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Work our {r.short.toLowerCase()} teams shipped.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">Products these engineers build and maintain today.</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <SvcWork items={r.portfolio} />
          </Reveal>
        </div>
      </section>

      {/* ---------- technologies ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Technologies they live in.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">The stack your dedicated {r.short.toLowerCase()} engineer brings on day one.</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="svc-chips on-light" aria-label="Technologies">
              {r.tech.map((t) => (
                <span key={t} className="svc-chip-light">{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- other roles: photo grid ---------- */}
      <section className="section section-light" id="roles">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Other specialists you can hire.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">Every discipline on the same model: matched in 48 hours, two week trial, one monthly rate.</p>
            </Reveal>
          </div>
          <div className="role-photo-grid">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={0.05 * i}>
                <Link className="role-photo-card" href={`/hire/${o.slug}/`}>
                  <img src={`${BP}${o.photo}`} alt={`Hire ${o.title}`} loading="lazy" />
                  <span className="role-photo-veil" aria-hidden="true" />
                  <span className="role-photo-body">
                    <strong>{o.title}</strong>
                    <span className="role-photo-cta">
                      Hire {o.short.toLowerCase()}
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

      {/* ---------- why hire us ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Why teams hire our developers.</h2>
            </Reveal>
          </div>
          <div className="svc-grid">
            {r.why.map((w, i) => (
              <Reveal key={w.t} delay={0.05 * (i % 2)}>
                <article className="svc-card">
                  <span className={`svc-num n${i % 3}`}>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{w.t}</h3>
                  <p>{w.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.16}>
            <div className="svc-hire-ctas center">
              <Link className="btn btn-primary btn-lg" href="/start-your-project/">Hire a {r.short.toLowerCase()} engineer</Link>
              <Link className="btn btn-ghost btn-lg" href="/contact/">Ask us anything</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section section-light" id="faq">
        <div className="wrap wrap-narrow">
          <div className="section-head">
            <Reveal>
              <h2>Questions clients actually ask.</h2>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <div className="faq-list">
              {r.faqs.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="faq-body"><p>{f.a}</p></div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- knowledge center: ink ---------- */}
      <section className="section svc-knowledge">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <p className="page-kicker">Knowledge center</p>
              <h2>Go deeper on hiring {r.short.toLowerCase()} talent.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">Notes from the people who match and manage these teams every week.</p>
            </Reveal>
          </div>
          <div className="svc-know-grid">
            {r.knowledge.map((k, i) => (
              <Reveal key={k.t} delay={0.05 * i}>
                <article className="svc-know-card">
                  <div className="svc-know-media">
                    <img src={`${BP}${r.portfolio[i % r.portfolio.length].img}`} alt="" loading="lazy" aria-hidden="true" />
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

      {/* ---------- final CTA: paper ---------- */}
      <section className="section svc-cta">
        <div className="wrap svc-cta-wrap">
          <Reveal>
            <h2>Your {r.short.toLowerCase()} engineer can start in two weeks.</h2>
            <p>Share what you are building. We will send matched profiles within 48 hours.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="svc-hire-ctas">
              <Link className="btn btn-primary btn-lg" href="/start-your-project/">Start hiring</Link>
              <Link className="btn btn-ghost btn-lg" href="/contact/">Talk to us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
