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
    <section className="section section-dark ai-section" id="ai-agents">
      <div className="neural-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
          <g stroke="rgba(29,40,255,.14)" strokeWidth="1">
            <path d="M-40 220 240 140l200 160 280-120 260 180 240-100 300 140" />
            <path d="M-40 620 200 560l300 120 280-80 320 100 260-60 160 40" />
          </g>
          <g fill="rgba(77,92,255,.5)">
            <circle cx="240" cy="140" r="3" />
            <circle cx="440" cy="300" r="2.5" />
            <circle cx="720" cy="180" r="3.5" />
            <circle cx="980" cy="360" r="2.5" />
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
        <div className="section-head">
          <Reveal>
            <h2>Meet our AI agents.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead">
              Six production-ready agent personas, deployed for clients and trained
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
                  <span className="live-dot">Production-ready</span>
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
