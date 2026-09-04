import Reveal from "./reveal";

const WHY: { t: string; d: string; icon: React.ReactNode }[] = [
  {
    t: "A decade of shipped promises",
    d: "Ten years, 650+ projects, clients who renew. We have survived every tech cycle since 2016 by making deadlines boring.",
    icon: (
      <>
        <circle cx="12" cy="9" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="m8.4 13.5-1.4 7 5-2.6 5 2.6-1.4-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    t: "Global delivery, local hours",
    d: "Engineering HQ in India; delivery presence across the USA, Saudi Arabia & GCC, the UK and Australia. Your timezone, your standups.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 12h17M12 3.5c2.6 2.3 4 5.2 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.2-4-8.5s1.4-6.2 4-8.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
  {
    t: "Security engineered in",
    d: "GDPR aligned, ISO compliant processes, NDA first engagements, encryption in transit and at rest. Audited, not asserted.",
    icon: (
      <>
        <path d="M12 3.5 20 6v5.5c0 4.6-3.2 7.4-8 9-4.8-1.6-8-4.4-8-9V6l8-2.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 8v4M12 15.2v.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    t: "Agile you can watch",
    d: "Two week sprints, a demo every Friday, burndown and budget visible in your portal. Progress you can point at.",
    icon: (
      <path d="M20 8.5 12 4 4 8.5m16 0v7L12 20l-8-4.5v-7m16 0L12 13 4 8.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    t: "Dedicated teams, your stack",
    d: "Engineers assigned to you, not shared across five clients. They learn your codebase and stay for the life of the product.",
    icon: (
      <>
        <circle cx="8.5" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="9.5" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 19c.6-3.4 2.6-5 5-5s4.4 1.6 5 5M14 19c.2-2.2 1.2-3.4 2.9-3.4 1.6 0 2.7 1.1 3.1 3.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    t: "Your IP, your data",
    d: "Full intellectual property transfer on final payment. Source code, models and data stay yours. Contractually, permanently.",
    icon: (
      <>
        <path d="M7 3.5h7.5L19 8v12.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M14 3.5V8h5M9 13h6M9 16.5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

const PROCESS = [
  ["Discover", "Requirements, risks and scope in one week"],
  ["Design", "Flows, prototypes and system architecture"],
  ["Build", "Two week sprints, Friday demos"],
  ["Launch", "Hardening, compliance checks, rollout"],
  ["Scale", "Monitoring, iteration, growth engineering"],
];

export default function Why() {
  return (
    <section className="section section-dark why-section" id="why">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <h2>Why teams choose Savo Technologies.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead">
              Ten years, five regions, one standard of engineering. The differentiators below are
              commitments we put in writing, in every SOW.
            </p>
          </Reveal>
        </div>

        <div className="why-grid">
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={0.06 * (i % 3)}>
              <div className="why-card">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  {w.icon}
                </svg>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="process" aria-label="Delivery process">
            {PROCESS.map(([t, d]) => (
              <div className="process-step" key={t}>
                <span className="process-dot" />
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
