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

const SERVICES: { t: string; d: string; href: string; icon: React.ReactNode }[] = [
  {
    t: "Custom Software Development",
    d: "Enterprise platforms and internal tools built for your exact workflow, stack and scale.",
    href: "/services/custom-software/",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 7 4.5 12 8 17M16 7l3.5 5L16 17M13 5l-2 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    t: "Mobile App Development",
    d: "Native iOS/Android and Flutter apps, designed and shipped to the stores.",
    href: "/services/mobile-apps/",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7.5" y="3" width="9" height="18" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 17.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    t: "Web Development",
    d: "High performance websites and web applications on React, Next.js and Node.js.",
    href: "/services/web-development/",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4.5" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 8.5h18M9.5 21h5M12 17.5V21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    t: "Cloud & DevOps",
    d: "AWS, Azure and GCP architecture with CI/CD, infrastructure as code and 24/7 monitoring.",
    href: "/services/cloud-devops/",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 17a4 4 0 0 1-.6-7.95A5.5 5.5 0 0 1 17 8.6 3.8 3.8 0 0 1 17.4 17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12v6M9.5 15.5 12 18l2.5-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    t: "Data & Analytics",
    d: "Pipelines, warehouses and dashboards that turn raw data into decisions.",
    href: "/services/data-analytics/",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16M7 20v-6M12 20V8M17 20v-9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="4.5" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    t: "UI/UX & Brand Identity",
    d: "Research driven interfaces and identity systems users trust within seconds.",
    href: "/services/ui-ux/",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 2.1 4.6L19 9l-3.4 3.6.6 5-4.2-2.3L7.8 17.6l.6-5L5 9l4.9-1.4L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    t: "Digital Marketing & SEO",
    d: "SEO, AEO and performance marketing that compounds long after launch.",
    href: "/services/digital-marketing/",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 10v4M8 7v10M12 4.5v15M16 7v10M20 10v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    t: "QA & Testing",
    d: "Automated and manual QA baked into every sprint, not bolted on after.",
    href: "/services/qa-testing/",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5 20 6v5.5c0 4.6-3.2 7.4-8 9-4.8-1.6-8-4.4-8-9V6l8-2.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="m8.7 12 2.3 2.3 4.3-4.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    t: "IT Consulting",
    d: "Architecture audits, roadmaps and modernization from senior engineers.",
    href: "/services/it-consulting/",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="m14.8 9.2-1.9 4.7-4.7 1.9 1.9-4.7 4.7-1.9Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    t: "Cybersecurity",
    d: "Threat modeling, penetration testing and compliance hardening.",
    href: "/services/cybersecurity/",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5M12 14.5v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    t: "Product Engineering",
    d: "End to end product teams that design, build and iterate on your roadmap.",
    href: "/services/product-engineering/",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 12 20 7.5M12 12v9M12 12 4 7.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="section section-light" id="services">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <h2>Full spectrum services. One accountable team.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead">
              From latest generation AI agent development to launch scale engineering, Savo
              Technologies is a full spectrum custom software development company. Strategy,
              design, build and operations stay under one roof, so nothing falls between vendors.
            </p>
          </Reveal>
        </div>

        <div className="services-grid">
          <Reveal className="svc-feature-wrap">
            <Link className="svc svc-feature" href="/services/ai-development/">
              <div className="svc-feature-visual" aria-hidden="true">
                <svg viewBox="0 0 120 90" fill="none">
                  <circle cx="60" cy="45" r="30" stroke="rgba(255,255,255,.25)" strokeDasharray="2 5" />
                  <circle cx="60" cy="45" r="6" fill="#1D28FF" />
                  <circle cx="88" cy="30" r="4" fill="#4D5CFF" />
                  <circle cx="34" cy="62" r="4" fill="#2BD926" />
                  <circle cx="70" cy="72" r="3" fill="#1D28FF" />
                </svg>
                <span className="pro-badge">PRO</span>
              </div>
              <h3>AI Development &amp; Agents</h3>
              <p>
                Latest generation AI agents and LLM solutions, engineered and trained on your
                data, deployed into production in weeks, not quarters.
              </p>
              <span className="svc-link">
                Explore AI services <Arrow />
              </span>
            </Link>
          </Reveal>

          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={0.05 * ((i + 1) % 4)}>
              <Link className="svc" href={s.href}>
                {s.icon}
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="svc-link">
                  Learn more <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
