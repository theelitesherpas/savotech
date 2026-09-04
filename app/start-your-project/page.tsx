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

const ASSURANCES = [
  "Reply within one business day",
  "NDA on request, before you share anything",
  "Senior engineer reviews every brief",
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
                One brief is all it takes. A senior engineer reads it, replies within one
                business day, and you get scope, timeline and transparent INR pricing before
                any commitment.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <ul className="hero-assurance" style={{ marginTop: "1.6rem" }}>
                {ASSURANCES.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </Reveal>
          </div>

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
