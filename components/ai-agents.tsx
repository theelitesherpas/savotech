import Link from "next/link";
import Reveal from "./reveal";

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

const AGENTS = [
  {
    name: "Savo SalesBot",
    desc: "Qualifies inbound leads, answers product questions and books meetings straight into your CRM, around the clock.",
    tags: ["24/7", "CRM Integration", "Lead Scoring"],
    href: "/ai/agents/salesbot/",
    avatar: (
      <svg viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="ag1" x1="9" y1="14" x2="39" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D28FF" />
            <stop offset="1" stopColor="#2BD926" />
          </linearGradient>
        </defs>
        <path d="M15 18c-4 2-6 5.5-6 9.5 0 4.5 3 7 6.5 7 2.4 0 4.3-1 5.5-2.7L24 28l3 3.8c1.2 1.7 3.1 2.7 5.5 2.7 3.5 0 6.5-2.5 6.5-7 0-4-2-7.5-6-9.5" stroke="url(#ag1)" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M24 28v-6" stroke="url(#ag1)" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="18" cy="15" r="3.4" fill="#1D28FF" />
        <circle cx="30" cy="15" r="3.4" fill="#4D5CFF" />
      </svg>
    ),
  },
  {
    name: "Savo SupportAgent",
    desc: "Resolves tier-1 support in 40+ languages and escalates edge cases to humans with full context attached.",
    tags: ["Multi-language", "Human Handoff", "Ticket Sync"],
    href: "/ai/agents/supportagent/",
    avatar: (
      <svg viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="ag2" x1="9" y1="10" x2="39" y2="39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF1E1D" />
            <stop offset="1" stopColor="#FF6B5C" />
          </linearGradient>
        </defs>
        <path d="M9 15h30v20a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4V15Z" stroke="url(#ag2)" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="m15 27 4.5 4.5L28 23" stroke="url(#ag2)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 15v-2a7 7 0 0 1 14 0v2" stroke="url(#ag2)" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Savo RecruitAI",
    desc: "Screens resumes, runs structured first-round chats and ranks candidates against your scorecard, bias-audited.",
    tags: ["Resume Parsing", "ATS Sync", "Bias Audits"],
    href: "/ai/agents/recruitai/",
    avatar: (
      <svg viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="ag3" x1="8" y1="10" x2="40" y2="39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D28FF" />
            <stop offset="1" stopColor="#4D5CFF" />
          </linearGradient>
        </defs>
        <circle cx="18" cy="16" r="5.5" stroke="url(#ag3)" strokeWidth="2.2" />
        <path d="M8 38c1-5.5 4.8-8.5 10-8.5 3 0 5.4 1 7.2 2.8" stroke="url(#ag3)" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="32.5" cy="21" r="6.5" stroke="url(#ag3)" strokeWidth="2.2" />
        <path d="M23 39c.8-6 4.6-9.5 9.5-9.5s6.3 3.5 7.5 9.5" stroke="url(#ag3)" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Savo InsightAgent",
    desc: "Answers data questions in plain English, builds live dashboards and flags anomalies before they cost money.",
    tags: ["NL → SQL", "Live Dashboards", "Anomaly Alerts"],
    href: "/ai/agents/insightagent/",
    avatar: (
      <svg viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="ag4" x1="8" y1="9" x2="40" y2="41" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2BD926" />
            <stop offset="1" stopColor="#1D28FF" />
          </linearGradient>
        </defs>
        <rect x="8" y="9" width="32" height="24" rx="3" stroke="url(#ag4)" strokeWidth="2.2" />
        <path d="M8 16h32" stroke="url(#ag4)" strokeWidth="2.2" />
        <path d="M15 33v4M33 33v4M13 41h22" stroke="url(#ag4)" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M18 23h4M18 27h9" stroke="url(#ag4)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="25" r="3" stroke="url(#ag4)" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Savo ContentAgent",
    desc: "Drafts on-brand marketing copy, SEO pages and social posts in your voice, with human approval built in.",
    tags: ["Brand Voice", "SEO-aware", "Approval Flows"],
    href: "/ai/agents/contentagent/",
    avatar: (
      <svg viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="ag5" x1="12" y1="7" x2="36" y2="41" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4D5CFF" />
            <stop offset="1" stopColor="#2BD926" />
          </linearGradient>
        </defs>
        <path d="m24 7 3.4 7.3 8 .9-6 5.4 1.7 7.9L24 24.5l-7.1 4 1.7-7.9-6-5.4 8-.9L24 7Z" stroke="url(#ag5)" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M14 34.5 12 41l8-3M34 34.5 36 41l-8-3" stroke="url(#ag5)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Savo OpsAgent",
    desc: "Triages incidents, runs remediation runbooks and posts status updates to your channels at 3 a.m.",
    tags: ["Incident Triage", "Runbooks", "Cloud-native"],
    href: "/ai/agents/opsagent/",
    avatar: (
      <svg viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="ag6" x1="9" y1="9" x2="39" y2="39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D28FF" />
            <stop offset="1" stopColor="#4D5CFF" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="15" stroke="url(#ag6)" strokeWidth="2.2" />
        <path d="M24 9v30M9.8 17l28.4 14M9.8 31 38.2 17" stroke="url(#ag6)" strokeWidth="1.4" opacity=".55" />
        <circle cx="24" cy="24" r="4.5" fill="url(#ag6)" />
        <path d="M24 13.5a10.5 10.5 0 0 1 9 5.2" stroke="#2BD926" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

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
            keeps learning. <Link href="/ai/">View the full AI platform</Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
