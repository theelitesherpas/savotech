import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { AGENTS } from "@/lib/agents-data";

export const metadata: Metadata = {
  title: "Meet Our AI Agents",
  description:
    "Six production-ready AI agents from Savo Technologies: SalesBot, SupportAgent, RecruitAI, InsightAgent, ContentAgent and OpsAgent. Trained on your data, guarded by enterprise security, deployed in 2 to 4 weeks.",
  alternates: { canonical: "/ai-agents/" },
  openGraph: {
    title: "Meet Our AI Agents | Savo Technologies",
    description:
      "Six production-ready AI agents, trained on your data and deployed in 2 to 4 weeks. Human handoff, audit logs and enterprise security as standard.",
  },
};

const PROCESS = [
  { t: "Discover", d: "Workshop maps the agent to your stack, data and success metrics." },
  { t: "Train", d: "Learns from your docs and tickets. You review before anything ships." },
  { t: "Guard", d: "Handoff rules, audit logs and security review lock the guardrails." },
  { t: "Ship", d: "Live on your channels in 2 to 4 weeks, then it keeps learning." },
];

const GUARANTEES = [
  { t: "Human handoff, always", d: "Edge cases route to people with full context." },
  { t: "Audit logs on everything", d: "Every decision and action is reviewable." },
  { t: "Your data stays yours", d: "Trained inside your boundary. No shared models." },
];

export default function AiAgentsPage() {
  return (
    <>
      {/* ink zone: hero + fleet */}
      <section className="section section-dark agents-page-hero">
        <div className="neural-bg" aria-hidden="true">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
            <g stroke="rgba(29,40,255,.14)" strokeWidth="1">
              <path d="M-40 220 240 140l200 160 280-120 260 180 240-100 300 140" />
              <path d="M-40 620 200 560l300 120 280-80 320 100 260-60 160 40" />
            </g>
            <g fill="rgba(77,92,255,.5)">
              <circle cx="240" cy="140" r="3" />
              <circle cx="720" cy="180" r="3.5" />
              <circle cx="1300" cy="260" r="3" />
              <circle cx="200" cy="560" r="2.5" />
              <circle cx="780" cy="600" r="3" />
              <circle cx="1220" cy="620" r="2.5" />
            </g>
            <circle cx="720" cy="180" r="90" fill="rgba(29,40,255,.07)" />
            <circle cx="1220" cy="620" r="120" fill="rgba(77,92,255,.06)" />
          </svg>
        </div>
        <div className="wrap">
          <div className="agents-page-head">
            <Reveal>
              <p className="page-kicker">The Savo Agent Fleet</p>
              <h1>
                Meet our AI agents. <span className="pro-badge">PRO</span>
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Six production-ready personas, trained on your data and deployed in a
                2 to 4 week sprint. Pick one, or run several as a crew.
              </p>
            </Reveal>
          </div>

          <div className="agents-grid agents-page-grid">
            {AGENTS.map((a, i) => (
              <Reveal key={a.slug} delay={0.06 * (i % 3)}>
                <article className="agent-card" id={a.slug}>
                  <div className="agent-avatar" aria-hidden="true">
                    {a.avatar}
                  </div>
                  <h3>
                    {a.name} <span className="pro-badge">PRO</span>
                  </h3>
                  <p>{a.desc}</p>
                  <ul className="agent-list" aria-label={`What ${a.name} delivers`}>
                    {a.deliverables.slice(0, 3).map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <div className="agent-foot">
                    <Link className="agent-cta" href="/start-your-project/">
                      Request a Demo
                    </Link>
                    <span className="live-dot">Production-ready</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* deployment process */}
      <section className="section section-alt agents-page-process">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>From workshop to production in one sprint.</h2>
            </Reveal>
          </div>
          <div className="process cols-4">
            {PROCESS.map((s) => (
              <Reveal key={s.t}>
                <div className="process-step">
                  <span className="process-dot" />
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* guarantees: slim tinted trio */}
      <section className="section section-light agents-page-guarantees">
        <div className="wrap">
          <div className="guarantee-grid">
            {GUARANTEES.map((g, i) => (
              <Reveal key={g.t} delay={0.05 * i}>
                <div className={`guarantee-card g-${i + 1}`}>
                  <h3>{g.t}</h3>
                  <p>{g.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* page CTA */}
      <section className="final-cta agents-page-cta">
        <div className="wrap">
          <h2>Deploy your first agent this month.</h2>
          <p>Tell us which persona fits your bottleneck. Free 30 minute scoping session.</p>
          <div className="cta-row">
            <Link className="btn btn-primary btn-lg" href="/start-your-project/">
              Start Your Project
            </Link>
            <Link className="btn btn-outline btn-lg" href="/#ask-savo">
              Ask Savo Assistant
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
