import Link from "next/link";
import Reveal from "./reveal";
import HirePlans from "./hire-plans";
import HireRateCompare from "./hire-rate-compare";
import SvcWork from "./svc-work";
import { HIRE_ROLES, CLIENT_QUOTES, type HireRole } from "@/lib/hire-data";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const MODELS = [
  {
    t: "Dedicated engineer",
    d: "One senior engineer embedded in your team, long term.",
    points: ["Works only on your product", "Your tools, standups and rituals", "Direct daily communication", "Scale up or down with notice"],
    best: "Most engagements",
    hot: true,
  },
  {
    t: "Managed pod",
    d: "Three to five engineers plus a Savo tech lead running delivery.",
    points: ["Lead included at no premium", "Backfill handled by us", "Sprint planning and QA built in", "Ideal for 2+ engineers"],
    best: "Fast roadmaps",
    hot: false,
  },
  {
    t: "Time and material",
    d: "Flexible capacity for evolving scopes and audits.",
    points: ["Start from 20 hours a week", "Weekly reporting", "Great for rescue work", "Convert to dedicated anytime"],
    best: "Uncertain scope",
    hot: false,
  },
];

const INDUSTRIES = ["Healthcare", "FinTech & Banking", "Ecommerce & Retail", "Logistics & Fleet", "Education", "Energy & Utilities"];

const PROCESS_TAIL = {
  t: "Ongoing support",
  d: "Quarterly performance reviews, a Savo lead overseeing delivery and instant free replacement if anyone underperforms.",
};

/** Shared template for every dedicated hire resources page. */
export default function HirePageView({ role }: { role: HireRole }) {
  const r = role;
  const others = HIRE_ROLES.filter((x) => x.slug !== r.slug);
  const steps = [...r.process, PROCESS_TAIL];

  return (
    <>
      {/* ---------- hero: backdrop image, copy over it, ink facts strip ---------- */}
      <section className="section section-light start-hero hire-hero2">
        <img className="hh-bg" src={`${BP}${r.photo}`} alt="" aria-hidden="true" />
        <div className="hh-bg-veil" aria-hidden="true" />
        <div className="hh-badge" aria-hidden="true">
          <span className="hh-badge-dot" />
          Matched in 48 hours
        </div>
        <div className="wrap hh-content">
          <div className="hh-copy">
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

          <Reveal delay={0.16}>
            <ul className="hh-facts" aria-label={`${r.title} at a glance`}>
              {r.facts.map((f, i) => (
                <li key={f.l} className={`hh-fact f${i % 3}`}>
                  <strong>{f.v}</strong>
                  <span>{f.l}</span>
                </li>
              ))}
              <li className="hh-fact-cta">
                <Link className="btn btn-ghost-sm" href="/careers/">They build here. Join them →</Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- snapshot + why checklist: split panel ---------- */}
      <section className="section section-alt">
        <div className="wrap hire-split">
          <aside className="hire-snapshot">
            <Reveal>
              <p className="page-kicker">At a glance</p>
              <h2>The Savo standard.</h2>
              <dl>
                <div>
                  <dt>Seniority</dt>
                  <dd>Mid to senior, 5 to 10 years</dd>
                </div>
                <div>
                  <dt>Timezone</dt>
                  <dd>4+ hours daily overlap with you</dd>
                </div>
                <div>
                  <dt>Trial</dt>
                  <dd>Two weeks, paid, cancel anytime</dd>
                </div>
                <div>
                  <dt>Replacement</dt>
                  <dd>Free and instant, forever</dd>
                </div>
                <div>
                  <dt>IP and code</dt>
                  <dd>100% yours from commit one</dd>
                </div>
                <div>
                  <dt>Security</dt>
                  <dd>NDA, least privilege access</dd>
                </div>
              </dl>
              <Link className="btn btn-primary" href="/start-your-project/">Get matched profiles</Link>
            </Reveal>
          </aside>
          <div className="hire-why">
            <Reveal delay={0.08}>
              <h2>Why teams keep our {r.short.toLowerCase()} engineers for years.</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <ul className="hire-checklist">
                {r.checklist.map((c) => (
                  <li key={c}>
                    <span className="hc-tick" aria-hidden="true">
                      <svg viewBox="0 0 16 16" fill="none">
                        <path d="m3 8.6 3.2 3.2L13 4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead">{r.intro[1]}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- solutions our role delivers ---------- */}
      <section className="section section-light">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>What our {r.short.toLowerCase()} engineers take off your plate.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Hire for one of these or all of them. The scope is yours; the seniority is ours.
              </p>
            </Reveal>
          </div>
          <div className="hire-solutions">
            {r.solutions.map((s, i) => (
              <Reveal key={s} delay={0.03 * (i % 3)}>
                <div className="hire-sol">
                  <span className={`hs-ico n${i % 3}`} aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="m4 10.4 4 4L16 5.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{s}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- engagement models ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Three ways to engage.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">Same engineers, same rates. Pick the shape that fits how you work.</p>
            </Reveal>
          </div>
          <div className="hire-models">
            {MODELS.map((m, i) => (
              <Reveal key={m.t} delay={0.06 * i}>
                <article className={`hire-model${m.hot ? " is-hot" : ""}`}>
                  {m.hot && <span className="plan-flag">Most chosen</span>}
                  <h3>{m.t}</h3>
                  <p>{m.d}</p>
                  <ul>
                    {m.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <span className="hm-best">Best for: {m.best}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- plans + global rate compare: ink ---------- */}
      <HirePlans monthly={r.monthly} role={r.title} />
      <section className="section section-alt hire-rates">
        <div className="wrap">
          <Reveal>
            <div className="rates-head">
              <h2>What the same {r.short.toLowerCase()} engineer costs worldwide.</h2>
              <p>
                Seniority, English fluency and timezone overlap held constant. Geography is the
                only variable.
              </p>
            </div>
            <HireRateCompare monthly={r.monthly} />
          </Reveal>
        </div>
      </section>

      {/* ---------- hiring process ---------- */}
      <section className="section section-light">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>From first call to running team, in five stages.</h2>
            </Reveal>
          </div>
          <ol className="svc-process steps-5">
            {steps.map((p, i) => (
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
              <Link className="btn btn-primary" href="/start-your-project/">Start stage one today</Link>
            </div>
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

      {/* ---------- industries ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Industries they know already.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">Your engineer arrives fluent in your domain&apos;s rules and rituals.</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="hire-industries">
              {INDUSTRIES.map((ind, i) => (
                <span key={ind} className={`hire-ind n${i % 3}`}>{ind}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- other roles photo grid ---------- */}
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

      {/* ---------- testimonials ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>What hiring teams say.</h2>
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
