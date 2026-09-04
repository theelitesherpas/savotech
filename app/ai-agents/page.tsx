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
  { t: "Discover", d: "We map the agent to your stack, data sources and success metrics in a focused workshop." },
  { t: "Train", d: "The agent learns from your docs, tickets and history. You review answers before anything ships." },
  { t: "Guard", d: "Human handoff rules, audit logs, rate limits and security review lock the guardrails in place." },
  { t: "Ship", d: "Deployment to your channels, watchful monitoring, and the agent keeps learning from feedback." },
];

const GUARANTEES = [
  { t: "Human handoff, always", d: "Every agent knows what it does not know, and routes edge cases to people with full context." },
  { t: "Audit logs on everything", d: "Every decision, answer and action is logged and reviewable. No black boxes in production." },
  { t: "Your data stays yours", d: "Trained inside your boundary. No data leakage, no shared models, no surprise retention." },
];

export default function AiAgentsPage() {
  return (
    <>
      {/* ink-zone hero: this is the AI page */}
      <section className="section section-dark agents-page-hero">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: "2.5rem" }}>
            <Reveal>
              <p className="page-kicker">The Savo Agent Fleet</p>
              <h1>
                Meet our AI agents. <span className="pro-badge">PRO</span>
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Six production-ready personas, deployed for clients and trained on your data.
                Every agent ships with human handoff, audit logs and enterprise security
                as standard, and goes live in a 2 to 4 week sprint.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="hero-ctas" style={{ marginTop: "2rem" }}>
                <Link className="btn btn-primary btn-lg" href="/start-your-project/">
                  Request a Demo
                </Link>
                <Link className="btn btn-outline btn-lg" href="/#ask-savo">
                  Ask Savo Assistant
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* fleet in detail */}
      <section className="section section-light">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>The fleet, in depth.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                One accountable team designs, trains and operates each agent for you. Pick a
                persona below or deploy several as a coordinated crew.
              </p>
            </Reveal>
          </div>

          <div className="agent-rows">
            {AGENTS.map((a, i) => (
              <Reveal key={a.slug} delay={0.04}>
                <article className="agent-row" id={a.slug}>
                  <div className="agent-row-art" aria-hidden="true">
                    {a.avatar}
                  </div>
                  <div className="agent-row-body">
                    <h3>
                      {a.name} <span className="pro-badge">PRO</span>
                    </h3>
                    <p className="agent-row-desc">{a.detail}</p>
                    <ul className="agent-row-list" aria-label={`What ${a.name} delivers`}>
                      {a.deliverables.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                    <div className="agent-foot">
                      <Link className="agent-cta" href="/start-your-project/">
                        Request a Demo
                      </Link>
                      <span className="live-dot">Production-ready</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* deployment process */}
      <section className="section section-alt">
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

      {/* guarantees */}
      <section className="section section-light">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Enterprise guarantees, not promises.</h2>
            </Reveal>
          </div>
          <div className="why-grid">
            {GUARANTEES.map((g, i) => (
              <Reveal key={g.t} delay={0.05 * i}>
                <div className="why-card">
                  <h3>{g.t}</h3>
                  <p>{g.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* page CTA */}
      <section className="final-cta">
        <div className="wrap">
          <h2>Deploy your first agent this month.</h2>
          <p>
            Tell us which persona fits your bottleneck. We will scope the sprint, guardrails
            and success metrics in a free 30 minute session.
          </p>
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
