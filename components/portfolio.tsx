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
  mock: React.ReactNode;
}[] = [
  {
    name: "MediBridge Health",
    meta: "Web · Healthcare",
    desc: "Patient engagement portal serving 40+ clinics: appointments, records and telehealth in one flow.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    href: "/case-studies/medibridge/",
    cat: "web",
    mock: (
      <svg className="mock mock-web" viewBox="0 0 480 300" fill="none" role="img" aria-label="MediBridge patient portal dashboard mockup">
        <defs>
          <linearGradient id="wk1" x1="14" y1="118" x2="34" y2="138" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D28FF" />
            <stop offset="1" stopColor="#4D5CFF" />
          </linearGradient>
        </defs>
        <rect width="480" height="300" rx="12" fill="#101018" />
        <path d="M0 12a12 12 0 0 1 12-12h456a12 12 0 0 1 12 12v14H0V12Z" fill="#12121A" />
        <circle cx="16" cy="13" r="3.5" fill="#1D28FF" />
        <circle cx="28" cy="13" r="3.5" fill="#4D5CFF" />
        <circle cx="40" cy="13" r="3.5" fill="#2BD926" />
        <rect x="14" y="40" width="90" height="9" rx="4.5" fill="rgba(142,155,255,.6)" />
        <rect x="14" y="62" width="60" height="7" rx="3.5" fill="rgba(170,170,182,.25)" />
        <rect x="14" y="78" width="72" height="7" rx="3.5" fill="rgba(170,170,182,.25)" />
        <rect x="14" y="94" width="52" height="7" rx="3.5" fill="rgba(170,170,182,.25)" />
        <rect x="14" y="118" width="20" height="20" rx="10" fill="url(#wk1)" />
        <rect x="122" y="40" width="200" height="120" rx="10" fill="#12121A" stroke="rgba(170,170,182,.18)" />
        <path d="M138 148c20-18 34-8 48-22s28-2 44-20 30 6 44-6" stroke="#2BD926" strokeWidth="2.2" strokeLinecap="round" />
        <rect x="138" y="56" width="90" height="8" rx="4" fill="rgba(142,155,255,.5)" />
        <rect x="138" y="72" width="120" height="6" rx="3" fill="rgba(170,170,182,.22)" />
        <rect x="334" y="40" width="132" height="72" rx="10" fill="#12121A" stroke="rgba(170,170,182,.18)" />
        <path d="M352 88a20 20 0 0 1 20-14c11 0 18 6 18 14s-7 14-18 14h-20v-14Z" fill="none" stroke="#1D28FF" strokeWidth="1.6" />
        <rect x="334" y="126" width="132" height="34" rx="8" fill="#12121A" stroke="rgba(170,170,182,.18)" />
        <rect x="346" y="136" width="40" height="6" rx="3" fill="rgba(170,170,182,.3)" />
        <rect x="346" y="148" width="66" height="5" rx="2.5" fill="rgba(170,170,182,.2)" />
        <rect x="122" y="172" width="344" height="34" rx="8" fill="#12121A" stroke="rgba(170,170,182,.18)" />
        <rect x="134" y="184" width="70" height="6" rx="3" fill="rgba(170,170,182,.3)" />
        <rect x="360" y="184" width="50" height="8" rx="4" fill="#2BD926" opacity=".85" />
      </svg>
    ),
  },
  {
    name: "GulfPay",
    meta: "Mobile · FinTech",
    desc: "GCC first digital wallet and payments super app with KYC, transfers and bill pay under one thumb.",
    tags: ["Flutter", "Node.js", "PostgreSQL", "PCI DSS"],
    href: "/case-studies/gulfpay/",
    cat: "mobile",
    mock: (
      <svg className="mock mock-app" viewBox="0 0 480 300" fill="none" role="img" aria-label="GulfPay fintech mobile app mockup">
        <defs>
          <linearGradient id="wk2" x1="166" y1="48" x2="314" y2="122" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D28FF" />
            <stop offset="1" stopColor="#4D5CFF" />
          </linearGradient>
        </defs>
        <rect width="480" height="300" rx="12" fill="#101433" />
        <rect x="150" y="18" width="180" height="264" rx="26" fill="#12121A" stroke="rgba(170,170,182,.3)" />
        <rect x="216" y="28" width="48" height="7" rx="3.5" fill="#26262F" />
        <rect x="166" y="48" width="148" height="74" rx="14" fill="url(#wk2)" />
        <rect x="178" y="60" width="60" height="7" rx="3.5" fill="rgba(255,255,255,.75)" />
        <rect x="178" y="78" width="96" height="13" rx="6.5" fill="rgba(255,255,255,.92)" />
        <rect x="178" y="99" width="40" height="6" rx="3" fill="rgba(255,255,255,.55)" />
        <rect x="166" y="134" width="44" height="44" rx="12" fill="#1A1A22" />
        <rect x="218" y="134" width="44" height="44" rx="12" fill="#1A1A22" />
        <rect x="270" y="134" width="44" height="44" rx="12" fill="#1A1A22" />
        <path d="M180 156h16M188 148v16" stroke="#8F9BFF" strokeWidth="1.8" strokeLinecap="round" />
        <path d="m232 148 8 16 8-16" stroke="#2BD926" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M284 156c4-6 10-6 14 0M286 162a8 4 0 0 0 12 0" stroke="#8F9BFF" strokeWidth="1.7" strokeLinecap="round" />
        <rect x="166" y="190" width="148" height="8" rx="4" fill="rgba(142,155,255,.4)" />
        <rect x="166" y="206" width="110" height="8" rx="4" fill="rgba(170,170,182,.22)" />
        <rect x="166" y="228" width="148" height="34" rx="10" fill="#1A1A22" />
        <rect x="180" y="240" width="52" height="9" rx="4.5" fill="#2BD926" />
        <path d="M370 240c8-30-4-52-24-60" stroke="rgba(43,217,38,.4)" strokeDasharray="3 5" />
      </svg>
    ),
  },
  {
    name: "Sahm AI Support Desk",
    meta: "AI Agent · Telecom",
    desc: "Arabic and English support agent for a GCC telecom, with 96% of tier 1 chats resolved without a human.",
    tags: ["Python", "LangChain", "RAG", "WhatsApp API"],
    href: "/case-studies/sahm-ai/",
    cat: "ai",
    mock: (
      <svg className="mock mock-ai" viewBox="0 0 480 300" fill="none" role="img" aria-label="Sahm AI multilingual support agent conversation mockup">
        <defs>
          <linearGradient id="wk3" x1="250" y1="98" x2="460" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D28FF" />
            <stop offset="1" stopColor="#4D5CFF" />
          </linearGradient>
        </defs>
        <rect width="480" height="300" rx="12" fill="#12121A" />
        <path d="M0 12a12 12 0 0 1 12-12h456a12 12 0 0 1 12 12v18H0V12Z" fill="#0E0E13" />
        <circle cx="18" cy="15" r="4" fill="#1D28FF" />
        <circle cx="32" cy="15" r="4" fill="#4D5CFF" />
        <circle cx="46" cy="15" r="4" fill="#2BD926" />
        <rect x="20" y="46" width="210" height="40" rx="12" fill="#1B1B24" />
        <rect x="32" y="58" width="150" height="6" rx="3" fill="rgba(170,170,182,.4)" />
        <rect x="32" y="70" width="110" height="6" rx="3" fill="rgba(170,170,182,.25)" />
        <rect x="250" y="98" width="210" height="52" rx="12" fill="url(#wk3)" />
        <rect x="262" y="110" width="160" height="6" rx="3" fill="rgba(255,255,255,.7)" />
        <rect x="262" y="124" width="130" height="6" rx="3" fill="rgba(255,255,255,.45)" />
        <rect x="262" y="138" width="90" height="6" rx="3" fill="rgba(255,255,255,.35)" />
        <rect x="20" y="162" width="230" height="52" rx="12" fill="#1B1B24" />
        <rect x="32" y="174" width="180" height="6" rx="3" fill="rgba(170,170,182,.4)" />
        <rect x="32" y="188" width="150" height="6" rx="3" fill="rgba(170,170,182,.25)" />
        <rect x="32" y="202" width="70" height="5" rx="2.5" fill="#2BD926" />
        <rect x="20" y="228" width="120" height="26" rx="13" fill="#1B1B24" stroke="rgba(29,40,255,.4)" />
        <rect x="34" y="238" width="76" height="6" rx="3" fill="rgba(142,155,255,.55)" />
        <g transform="translate(390,225)">
          <circle r="26" fill="#17171F" stroke="#4D5CFF" strokeWidth="1.4" />
          <path d="M-8 2c6-5 10-8 16-3M-7-6c5-4 9-6 14-2" stroke="#8F9BFF" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="4" cy="10" r="3" fill="#2BD926" />
        </g>
        <text x="300" y="270" fill="rgba(166,177,204,.7)" fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif">96% auto resolution · Arabic + English</text>
      </svg>
    ),
  },
  {
    name: "RideLink",
    meta: "Mobile · Logistics",
    desc: "Live fleet tracking across Australia with live ETAs, route alerts and driver scorecards.",
    tags: ["Flutter", "Firebase", "Maps API", "Cloud Functions"],
    href: "/case-studies/ridelink/",
    cat: "mobile",
    mock: (
      <svg className="mock mock-app" viewBox="0 0 480 300" fill="none" role="img" aria-label="RideLink logistics tracking app mockup">
        <rect width="480" height="300" rx="12" fill="#12121A" />
        <rect x="160" y="16" width="160" height="268" rx="24" fill="#12121A" stroke="rgba(170,170,182,.28)" />
        <rect x="176" y="52" width="128" height="96" rx="12" fill="#122233" />
        <path d="M188 132c18-24 26-12 40-28s26-6 38-20 22 4 26-6" stroke="#2BD926" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="228" cy="102" r="4" fill="#2BD926" />
        <circle cx="252" cy="84" r="4" fill="#4D5CFF" />
        <circle cx="276" cy="66" r="4" fill="#1D28FF" />
        <path d="M232 100c8 6 14 2 18-14" stroke="rgba(43,217,38,.5)" strokeDasharray="2 4" />
        <rect x="176" y="160" width="128" height="9" rx="4.5" fill="rgba(142,155,255,.5)" />
        <rect x="176" y="180" width="84" height="7" rx="3.5" fill="rgba(170,170,182,.25)" />
        <rect x="176" y="196" width="128" height="30" rx="9" fill="#122233" />
        <rect x="188" y="206" width="56" height="5" rx="2.5" fill="rgba(170,170,182,.35)" />
        <rect x="262" y="203" width="30" height="16" rx="5" fill="#2BD926" opacity=".9" />
        <rect x="176" y="236" width="128" height="30" rx="9" fill="#122233" />
        <rect x="188" y="246" width="44" height="5" rx="2.5" fill="rgba(170,170,182,.35)" />
        <rect x="240" y="246" width="40" height="5" rx="2.5" fill="rgba(170,170,182,.22)" />
        <path d="M360 240c-20-14-14-38 6-46s40 6 36 26-24 30-42 20Z" fill="#122233" stroke="rgba(43,217,38,.35)" />
        <path d="M338 70c30 10 46 30 42 58" stroke="rgba(29,40,255,.45)" strokeDasharray="3 5" />
        <circle cx="338" cy="70" r="5" fill="#1D28FF" />
        <circle cx="380" cy="128" r="5" fill="#4D5CFF" />
      </svg>
    ),
  },
  {
    name: "ClearLedger",
    meta: "Web · FinTech",
    desc: "SME banking dashboard for a UK challenger with open banking aggregation with live cashflow insight.",
    tags: ["React", "TypeScript", "GraphQL", "Node.js"],
    href: "/case-studies/clearledger/",
    cat: "web",
    mock: (
      <svg className="mock mock-web" viewBox="0 0 480 300" fill="none" role="img" aria-label="ClearLedger banking dashboard mockup">
        <defs>
          <linearGradient id="wk5" x1="28" y1="54" x2="84" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D28FF" />
            <stop offset="1" stopColor="#4D5CFF" />
          </linearGradient>
        </defs>
        <rect width="480" height="300" rx="12" fill="#12121A" />
        <path d="M0 12a12 12 0 0 1 12-12h456a12 12 0 0 1 12 12v14H0V12Z" fill="#0E0E13" />
        <circle cx="16" cy="13" r="3.5" fill="#1D28FF" />
        <circle cx="28" cy="13" r="3.5" fill="#4D5CFF" />
        <circle cx="40" cy="13" r="3.5" fill="#2BD926" />
        <rect x="14" y="42" width="120" height="240" rx="10" fill="#101A30" />
        <rect x="28" y="58" width="56" height="8" rx="4" fill="url(#wk5)" />
        <rect x="28" y="84" width="92" height="7" rx="3.5" fill="rgba(142,155,255,.4)" />
        <rect x="28" y="102" width="78" height="7" rx="3.5" fill="rgba(170,170,182,.22)" />
        <rect x="28" y="120" width="84" height="7" rx="3.5" fill="rgba(170,170,182,.22)" />
        <rect x="152" y="42" width="160" height="70" rx="10" fill="#101A30" />
        <rect x="166" y="56" width="70" height="7" rx="3.5" fill="rgba(170,170,182,.35)" />
        <rect x="166" y="72" width="110" height="14" rx="7" fill="rgba(142,155,255,.65)" />
        <rect x="152" y="124" width="160" height="64" rx="10" fill="#101A30" />
        <path d="M166 172c12-14 20-6 30-16s18 2 28-10 16 6 26 0" stroke="#2BD926" strokeWidth="2" strokeLinecap="round" />
        <rect x="324" y="42" width="142" height="146" rx="10" fill="#101A30" />
        <rect x="338" y="58" width="60" height="7" rx="3.5" fill="rgba(170,170,182,.35)" />
        <rect x="338" y="76" width="114" height="10" rx="5" fill="rgba(170,170,182,.16)" />
        <rect x="338" y="94" width="114" height="10" rx="5" fill="rgba(170,170,182,.16)" />
        <rect x="338" y="112" width="114" height="10" rx="5" fill="rgba(170,170,182,.16)" />
        <rect x="338" y="130" width="80" height="10" rx="5" fill="rgba(29,40,255,.35)" />
        <rect x="152" y="198" width="314" height="84" rx="10" fill="#101A30" />
        <rect x="166" y="214" width="90" height="7" rx="3.5" fill="rgba(170,170,182,.3)" />
        <rect x="166" y="234" width="284" height="7" rx="3.5" fill="rgba(170,170,182,.14)" />
        <rect x="166" y="250" width="284" height="7" rx="3.5" fill="rgba(170,170,182,.14)" />
        <rect x="436" y="256" width="14" height="14" rx="7" fill="#2BD926" />
      </svg>
    ),
  },
  {
    name: "EduSpring",
    meta: "Web · EdTech",
    desc: "Learning platform for Indian universities with live classes, proctored assessments and analytics.",
    tags: ["React", "Node.js", "MySQL", "AWS"],
    href: "/case-studies/eduspring/",
    cat: "web",
    mock: (
      <svg className="mock mock-web" viewBox="0 0 480 300" fill="none" role="img" aria-label="EduSpring learning platform mockup">
        <defs>
          <linearGradient id="wk6" x1="246" y1="228" x2="466" y2="284" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D28FF" />
            <stop offset="1" stopColor="#4D5CFF" />
          </linearGradient>
        </defs>
        <rect width="480" height="300" rx="12" fill="#12121A" />
        <path d="M0 12a12 12 0 0 1 12-12h456a12 12 0 0 1 12 12v14H0V12Z" fill="#0C1428" />
        <circle cx="16" cy="13" r="3.5" fill="#1D28FF" />
        <circle cx="28" cy="13" r="3.5" fill="#4D5CFF" />
        <circle cx="40" cy="13" r="3.5" fill="#2BD926" />
        <rect x="14" y="44" width="140" height="90" rx="10" fill="#141F42" />
        <rect x="28" y="58" width="80" height="8" rx="4" fill="rgba(142,155,255,.55)" />
        <circle cx="36" cy="90" r="10" fill="none" stroke="#2BD926" strokeWidth="2" />
        <path d="M36 84v6l4 3" stroke="#2BD926" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="54" y="82" width="60" height="6" rx="3" fill="rgba(170,170,182,.3)" />
        <rect x="54" y="94" width="44" height="5" rx="2.5" fill="rgba(170,170,182,.2)" />
        <rect x="166" y="44" width="140" height="90" rx="10" fill="#141F42" />
        <rect x="180" y="58" width="70" height="8" rx="4" fill="rgba(142,155,255,.55)" />
        <path d="M188 108c8-10 14-4 22-12s14 2 22-8 12 4 20-2" stroke="#4D5CFF" strokeWidth="2" strokeLinecap="round" />
        <rect x="318" y="44" width="148" height="90" rx="10" fill="#141F42" />
        <rect x="332" y="58" width="60" height="8" rx="4" fill="rgba(142,155,255,.55)" />
        <g stroke="rgba(43,217,38,.7)" strokeWidth="1.6">
          <circle cx="356" cy="100" r="5" />
          <circle cx="384" cy="100" r="5" />
          <circle cx="412" cy="100" r="5" />
          <circle cx="440" cy="100" r="5" />
        </g>
        <path d="M361 100h18M389 100h18M417 100h18" stroke="rgba(43,217,38,.5)" strokeWidth="1.4" />
        <rect x="14" y="148" width="452" height="66" rx="10" fill="#141F42" />
        <rect x="28" y="162" width="100" height="7" rx="3.5" fill="rgba(170,170,182,.3)" />
        <rect x="28" y="182" width="420" height="7" rx="3.5" fill="rgba(170,170,182,.14)" />
        <rect x="28" y="196" width="360" height="7" rx="3.5" fill="rgba(170,170,182,.14)" />
        <rect x="14" y="228" width="220" height="56" rx="10" fill="#141F42" />
        <rect x="28" y="242" width="80" height="6" rx="3" fill="rgba(170,170,182,.28)" />
        <rect x="28" y="258" width="150" height="6" rx="3" fill="rgba(170,170,182,.16)" />
        <rect x="246" y="228" width="220" height="56" rx="10" fill="url(#wk6)" />
        <rect x="260" y="242" width="90" height="6" rx="3" fill="rgba(255,255,255,.7)" />
        <rect x="260" y="258" width="130" height="6" rx="3" fill="rgba(255,255,255,.45)" />
      </svg>
    ),
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
                  {p.mock}
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
