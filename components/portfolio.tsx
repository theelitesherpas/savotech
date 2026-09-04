"use client";

import Link from "next/link";
import { useState } from "react";
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

const PROJECTS: {
  name: string;
  meta: string;
  desc: string;
  tags: string[];
  href: string;
  cat: Cat;
  img: string;
  alt: string;
}[] = [
  {
    name: "MediBridge Health",
    meta: "Web · Healthcare",
    desc: "Patient engagement portal serving 40+ clinics: appointments, records and telehealth in one flow.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    href: "/case-studies/medibridge/",
    cat: "web",
    img: "/work/medibridge.jpg",
    alt: "MediBridge Health patient portal on a clinician tablet",
  },
  {
    name: "GulfPay",
    meta: "Mobile · FinTech",
    desc: "GCC first digital wallet and payments super app with KYC, transfers and bill pay under one thumb.",
    tags: ["Flutter", "Node.js", "PostgreSQL", "PCI DSS"],
    href: "/case-studies/gulfpay/",
    cat: "mobile",
    img: "/work/gulfpay.jpg",
    alt: "GulfPay digital wallet app on a phone",
  },
  {
    name: "Sahm AI Support Desk",
    meta: "AI Agent · Telecom",
    desc: "Arabic and English support agent for a GCC telecom, with 96% of tier 1 chats resolved without a human.",
    tags: ["Python", "LangChain", "RAG", "WhatsApp API"],
    href: "/case-studies/sahm-ai/",
    cat: "ai",
    img: "/work/sahm.jpg",
    alt: "AI assistant handling multilingual customer chats",
  },
  {
    name: "RideLink",
    meta: "Mobile · Logistics",
    desc: "Live fleet tracking across Australia with live ETAs, route alerts and driver scorecards.",
    tags: ["Flutter", "Firebase", "Maps API", "Cloud Functions"],
    href: "/case-studies/ridelink/",
    cat: "mobile",
    img: "/work/ridelink.jpg",
    alt: "City streets tracked by the RideLink fleet app",
  },
  {
    name: "ClearLedger",
    meta: "Web · FinTech",
    desc: "SME banking dashboard for a UK challenger with open banking aggregation with live cashflow insight.",
    tags: ["React", "TypeScript", "GraphQL", "Node.js"],
    href: "/case-studies/clearledger/",
    cat: "web",
    img: "/work/clearledger.jpg",
    alt: "ClearLedger banking dashboard with live cashflow charts",
  },
  {
    name: "EduSpring",
    meta: "Web · EdTech",
    desc: "Learning platform for Indian universities with live classes, proctored assessments and analytics.",
    tags: ["React", "Node.js", "MySQL", "AWS"],
    href: "/case-studies/eduspring/",
    cat: "web",
    img: "/work/eduspring.jpg",
    alt: "Students learning on the EduSpring platform",
  },
];

const FILTERS: { key: "all" | Cat; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "ai", label: "AI Agents" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | Cat>("all");

  return (
    <section className="section section-light section-alt" id="work">
      <div className="wrap">
        <div className="section-head split">
          <div>
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
          <Reveal delay={0.12}>
            <div className="filters" role="group" aria-label="Filter projects">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  className={`filter ${filter === f.key ? "is-active" : ""}`}
                  aria-pressed={filter === f.key}
                  onClick={() => setFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="work-grid" id="workGrid">
          {PROJECTS.filter((p) => filter === "all" || p.cat === filter).map((p, i) => (
            <Reveal key={p.name} delay={0.06 * (i % 3)}>
              <article className="work-card" data-cat={p.cat}>
                <Link className="work-media" href={p.href} aria-label={`${p.name} case study`}>
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${p.img}`} alt={p.alt} loading="lazy" />
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
