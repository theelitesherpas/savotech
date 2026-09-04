"use client";

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

type Cat = "web" | "mobile" | "ai";

const FEATURED: {
  name: string;
  meta: string;
  desc: string;
  stat: string;
  tags: string[];
  href: string;
  img: string;
  alt: string;
}[] = [
  {
    name: "MediBridge Health",
    meta: "Web · Healthcare",
    desc: "Patient engagement portal serving 40+ clinics: appointments, records and telehealth in one flow.",
    stat: "40+ clinics live",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    href: "/case-studies/medibridge/",
    img: "/work/medibridge.jpg",
    alt: "MediBridge Health patient portal on a clinician tablet",
  },
  {
    name: "GulfPay",
    meta: "Mobile · FinTech",
    desc: "GCC first digital wallet and payments super app with KYC, transfers and bill pay under one thumb.",
    stat: "PCI DSS ready",
    tags: ["Flutter", "Node.js", "PostgreSQL", "PCI DSS"],
    href: "/case-studies/gulfpay/",
    img: "/work/gulfpay.jpg",
    alt: "GulfPay digital wallet app on a phone",
  },
  {
    name: "Sahm AI Support Desk",
    meta: "AI Agent · Telecom",
    desc: "Arabic and English support agent for a GCC telecom, with 96% of tier 1 chats resolved without a human.",
    stat: "96% auto-resolved",
    tags: ["Python", "LangChain", "RAG", "WhatsApp API"],
    href: "/case-studies/sahm-ai/",
    img: "/work/sahm.jpg",
    alt: "AI assistant handling multilingual customer chats",
  },
  {
    name: "RideLink",
    meta: "Mobile · Logistics",
    desc: "Live fleet tracking across Australia with live ETAs, route alerts and driver scorecards.",
    stat: "12k vehicles tracked",
    tags: ["Flutter", "Firebase", "Maps API", "Cloud Functions"],
    href: "/case-studies/ridelink/",
    img: "/work/ridelink.jpg",
    alt: "City streets tracked by the RideLink fleet app",
  },
];

export default function Portfolio() {
  return (
    <section className="section section-light section-alt" id="work">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <h2>Featured work.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead">
              A selection of web, mobile and AI agent engagements from the last decade. Every
              one shipped by a dedicated Savo team, several still in production years later.
            </p>
          </Reveal>
        </div>

        <div className="work-grid work-grid-featured" id="workGrid">
          {FEATURED.map((p, i) => (
            <Reveal key={p.name} delay={0.06 * (i % 2)}>
              <article className="work-card">
                <Link className="work-media" href={p.href} aria-label={`${p.name} case study`}>
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${p.img}`} alt={p.alt} loading="lazy" />
                  <span className="work-stat">{p.stat}</span>
                </Link>
                <div className="work-body">
                  <p className="work-meta">{p.meta}</p>
                  <h3>{p.name}</h3>
                  <p className="work-desc">{p.desc}</p>
                  <ul className="tags" aria-label="Tech stack">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <Link className="work-link" href={p.href}>
                    View Case Study <Arrow />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
