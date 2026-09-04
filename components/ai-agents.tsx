import Link from "next/link";
import Reveal from "./reveal";
import { AGENTS } from "@/lib/agents-data";

const Arrow = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path
      d="M2 8h11M9 3.5 13.5 8 9 12.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export default function AiAgents() {
  return (
    <section className="section section-light section-alt ai-section ai-section-light" id="ai-agents">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <h2>Meet our AI agents.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead">
              Six production ready agent personas, deployed for clients and trained
              on your data. Every Savo agent ships with human handoff, audit logs and
              enterprise security as standard.
            </p>
          </Reveal>
        </div>

        <div className="agents-grid">
          {AGENTS.map((a, i) => (
            <Reveal key={a.name} delay={0.06 * (i % 3)}>
              <article className="agent-card">
                <div className="agent-avatar" aria-hidden="true">
                  {a.avatar}
                </div>
                <h3>
                  {a.name} <span className="pro-badge">PRO</span>
                </h3>
                <p>{a.desc}</p>
                <ul className="tags" aria-label="Capabilities">
                  {a.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="agent-foot">
                  <Link className="agent-cta" href={a.href}>
                    Request a Demo <Arrow />
                  </Link>
                  <span className="live-dot">Production ready</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="agents-note">
            Each agent is customized to your stack during a 2 to 4 week deployment sprint, and then it
            keeps learning. <Link href="/ai-agents/">Meet all six agents in depth</Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
