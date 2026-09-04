import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import StartYourProjectPanel from "@/components/start-panel";

export const metadata: Metadata = {
  title: "Start Your Project",
  description:
    "Tell Savo Technologies what you are building. Send a project brief and a senior engineer replies within one business day with scope, timeline and an INR estimate. AI agents, web platforms, mobile apps and dedicated teams.",
  alternates: { canonical: "/start-your-project/" },
  openGraph: {
    title: "Start Your Project | Savo Technologies",
    description:
      "Send a project brief. A senior engineer replies within one business day with scope, timeline and an INR estimate.",
  },
};

const NEXT_STEPS = [
  { t: "Within 24 hours", d: "A senior engineer, not a sales rep, reads your brief and replies with first questions." },
  { t: "Day 2 to 3", d: "A free 30 minute scoping call: goals, constraints, success metrics and a rough range." },
  { t: "Day 3 to 5", d: "A written proposal with fixed milestones, INR pricing and a start date you can hold us to." },
];

const NEXT_ICONS = {
  route: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <path d="M8 18h5.5a4 4 0 0 0 0-8H9.5a4 4 0 0 1 0-8" transform="translate(1.5 1)" />
    </svg>
  ),
  calc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <path d="M8.5 7.5h7M9 12h.01M12 12h.01M15 12h.01M9 15.5h.01M12 15.5h.01M15 15.5h.01" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-7Z" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15 9-1.8 4.2L9 15l1.8-4.2L15 9Z" />
    </svg>
  ),
};

const GUARANTEES = [
  { t: "Reply within one business day", d: "A senior engineer, not a sales rep, reads every brief." },
  { t: "NDA on request", d: "Before you share anything sensitive, at no cost." },
  { t: "Senior engineer review", d: "Every brief is scoped by someone who will build it." },
];

export default function StartYourProjectPage() {
  return (
    <>
      <section className="section section-light start-hero">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: "2.5rem" }}>
            <Reveal>
              <p className="page-kicker">Start Your Project</p>
              <h1>Tell us what you are building.</h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                One brief is all it takes: scope, timeline and transparent INR pricing,
                before any commitment.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="guarantee-grid">
              {GUARANTEES.map((g, i) => (
                <div key={g.t} className={`guarantee-card g-${i + 1}`}>
                  <h3>{g.t}</h3>
                  <p>{g.d}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="start-grid">
              <div className="start-card">
                <div className="start-card-head">
                  <h2>Project brief</h2>
                  <p>Takes about two minutes. Nothing here is binding.</p>
                </div>
                <StartYourProjectPanel />
              </div>

              <aside className="start-aside">
                <div className="start-aside-card">
                  <div className="aside-ico" aria-hidden="true">{NEXT_ICONS.route}</div>
                  <h3>What happens next</h3>
                  <ol className="start-steps">
                    {NEXT_STEPS.map((s) => (
                      <li key={s.t}>
                        <strong>{s.t}</strong>
                        <span>{s.d}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="start-aside-card start-aside-ink">
                  <div className="aside-ico" aria-hidden="true">{NEXT_ICONS.calc}</div>
                  <h3>Prefer numbers first?</h3>
                  <p>
                    The instant estimator prices your project in INR in under a minute, no
                    contact details needed until the end.
                  </p>
                  <Link className="btn btn-ghost-sm" href="/#estimator">
                    Open the instant estimator
                  </Link>
                </div>

                <div className="start-aside-card">
                  <div className="aside-ico ico-red" aria-hidden="true">{NEXT_ICONS.chat}</div>
                  <h3>Talk to us directly</h3>
                  <p>
                    <a href="mailto:hello@savotechnologies.com">hello@savotechnologies.com</a>
                    <br />
                    <a href="tel:+910000000000">+91 00000 00000</a>
                  </p>
                  <p className="start-aside-note">
                    Existing client?{" "}
                    <Link href="/portal/">Client Login</Link>
                  </p>
                </div>

                <div className="start-aside-card">
                  <div className="aside-ico ico-green" aria-hidden="true">{NEXT_ICONS.compass}</div>
                  <h3>Explore first</h3>
                  <ul className="start-links">
                    <li>
                      <Link href="/ai-agents/">Meet our AI agents</Link>
                    </li>
                    <li>
                      <Link href="/#services">All services</Link>
                    </li>
                    <li>
                      <Link href="/#work">Case studies</Link>
                    </li>
                    <li>
                      <Link href="/#hire">Hire dedicated developers</Link>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
