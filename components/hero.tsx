"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import HeroGridDots from "./hero-grid-dots";

const SLIDE_MS = 6500;

/* ---------------- slide scenes ---------------- */

function OrbitScene() {
  return (
    <svg className="orbit-scene" viewBox="0 0 560 480" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="coreGlow" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#1D28FF" stopOpacity=".5" />
          <stop offset="1" stopColor="#1D28FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="orbitGrad" x1="80" y1="80" x2="480" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1D28FF" stopOpacity=".9" />
          <stop offset=".5" stopColor="#4D5CFF" stopOpacity=".7" />
          <stop offset="1" stopColor="#2BD926" stopOpacity=".9" />
        </linearGradient>
      </defs>
      <circle cx="280" cy="240" r="150" fill="url(#coreGlow)" />
      <circle className="orbit-ring" cx="280" cy="240" r="190" stroke="url(#orbitGrad)" strokeWidth="1.2" strokeDasharray="2 7" />
      <circle className="orbit-ring rev" cx="280" cy="240" r="128" stroke="rgba(170,170,182,.35)" strokeWidth="1" />
      <circle className="orbit-ring" cx="280" cy="240" r="248" stroke="rgba(170,170,182,.16)" strokeWidth="1" />
      <g className="orbit-spin">
        <g className="node" transform="translate(470,240)">
          <circle r="26" fill="#17171F" stroke="#1D28FF" strokeWidth="1.4" />
          <path d="M-7 0h14M0-7v14" stroke="#8F9BFF" strokeWidth="1.8" strokeLinecap="round" />
        </g>
        <g className="node" transform="translate(152,140)">
          <circle r="22" fill="#17171F" stroke="#4D5CFF" strokeWidth="1.4" />
          <path d="M-6 3 0-4l6 7" stroke="#8F9BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="node" transform="translate(208,368)">
          <circle r="24" fill="#17171F" stroke="#2BD926" strokeWidth="1.4" />
          <circle cx="0" cy="3" r="4.5" fill="#2BD926" />
          <path d="M-7-4a9 6 0 0 1 14 0" stroke="#9CF08F" strokeWidth="1.7" strokeLinecap="round" />
        </g>
      </g>
      <g className="orbit-spin rev">
        <g className="node" transform="translate(280,112)">
          <circle r="20" fill="#17171F" stroke="#8F9BFF" strokeWidth="1.3" />
          <rect x="-6" y="-6" width="12" height="12" rx="3" stroke="#8F9BFF" strokeWidth="1.7" />
        </g>
        <g className="node" transform="translate(408,240)">
          <circle r="20" fill="#17171F" stroke="#1D28FF" strokeWidth="1.3" />
          <path d="M-6-1h12M-3-5l-3 4 3 4M6-5l3 4-3 4" stroke="#8F9BFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      <circle cx="280" cy="240" r="34" fill="#12121A" stroke="url(#orbitGrad)" strokeWidth="1.6" />
      <path d="M269 232c5-4 17-4 22 0M269 248c5 4 17 4 22 0" stroke="url(#orbitGrad)" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M470 240 280 240M152 140 280 240M208 368 280 240M280 112 280 240M408 240 280 240"
        stroke="rgba(29,40,255,.22)"
        strokeWidth="1"
      />
    </svg>
  );
}

function StackScene() {
  return (
    <svg className="stack-scene" viewBox="0 0 560 480" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="tab1g" x1="94" y1="218" x2="164" y2="244" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1D28FF" />
          <stop offset="1" stopColor="#4D5CFF" />
        </linearGradient>
        <linearGradient id="tab2g" x1="446" y1="232" x2="494" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4D5CFF" />
          <stop offset="1" stopColor="#1D28FF" />
        </linearGradient>
      </defs>
      <rect x="70" y="96" width="330" height="230" rx="14" fill="#12121A" stroke="rgba(170,170,182,.3)" />
      <path d="M70 110a14 14 0 0 1 14-14h302a14 14 0 0 1 14 14v20H70v-20Z" fill="#17171F" />
      <circle cx="92" cy="113" r="4" fill="#1D28FF" />
      <circle cx="106" cy="113" r="4" fill="#4D5CFF" />
      <circle cx="120" cy="113" r="4" fill="#2BD926" />
      <rect x="94" y="150" width="130" height="10" rx="5" fill="rgba(142,155,255,.55)" />
      <rect x="94" y="172" width="90" height="8" rx="4" fill="rgba(170,170,182,.3)" />
      <rect x="94" y="192" width="108" height="8" rx="4" fill="rgba(170,170,182,.3)" />
      <rect x="94" y="218" width="70" height="26" rx="8" fill="url(#tab1g)" />
      <rect x="248" y="150" width="130" height="132" rx="10" fill="#17171F" stroke="rgba(170,170,182,.22)" />
      <rect x="262" y="166" width="60" height="8" rx="4" fill="rgba(142,155,255,.5)" />
      <rect x="262" y="184" width="102" height="8" rx="4" fill="rgba(170,170,182,.25)" />
      <rect x="262" y="202" width="84" height="8" rx="4" fill="rgba(170,170,182,.25)" />
      <path d="M262 232c14-12 30 12 44 0s30 12 44 0" stroke="#2BD926" strokeWidth="2" strokeLinecap="round" />
      <circle cx="318" cy="258" r="6" fill="#2BD926" />
      <rect x="428" y="180" width="104" height="210" rx="20" fill="#12121A" stroke="rgba(170,170,182,.3)" />
      <rect x="446" y="210" width="68" height="9" rx="4.5" fill="rgba(142,155,255,.55)" />
      <rect x="446" y="232" width="48" height="48" rx="12" fill="url(#tab2g)" />
      <rect x="446" y="296" width="68" height="8" rx="4" fill="rgba(170,170,182,.25)" />
      <rect x="446" y="314" width="54" height="8" rx="4" fill="rgba(170,170,182,.25)" />
      <rect x="446" y="348" width="68" height="24" rx="8" fill="#2BD926" opacity=".9" />
      <path d="M400 211c14 6 22 14 28 26" stroke="rgba(29,40,255,.5)" strokeDasharray="3 5" />
      <circle className="pulse-dot" cx="428" cy="238" r="4" fill="#2BD926" />
    </svg>
  );
}

function GlobeScene() {
  return (
    <svg className="globe-scene" viewBox="0 0 560 480" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="arcG" x1="120" y1="120" x2="460" y2="380" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1D28FF" />
          <stop offset=".5" stopColor="#4D5CFF" />
          <stop offset="1" stopColor="#2BD926" />
        </linearGradient>
      </defs>
      <circle cx="280" cy="240" r="190" stroke="rgba(170,170,182,.22)" />
      <ellipse cx="280" cy="240" rx="190" ry="76" stroke="rgba(170,170,182,.18)" />
      <ellipse cx="280" cy="240" rx="76" ry="190" stroke="rgba(170,170,182,.18)" />
      <path d="M280 50v380M90 240h380" stroke="rgba(170,170,182,.1)" />
      <g fill="rgba(142,155,255,.5)">
        <circle cx="180" cy="150" r="2" /><circle cx="220" cy="120" r="2" /><circle cx="300" cy="100" r="2" />
        <circle cx="360" cy="150" r="2" /><circle cx="150" cy="230" r="2" /><circle cx="250" cy="180" r="2" />
        <circle cx="330" cy="200" r="2" /><circle cx="410" cy="250" r="2" /><circle cx="190" cy="300" r="2" />
        <circle cx="290" cy="280" r="2" /><circle cx="370" cy="330" r="2" /><circle cx="240" cy="350" r="2" />
        <circle cx="320" cy="380" r="2" /><circle cx="160" cy="270" r="2" /><circle cx="430" cy="180" r="2" />
      </g>
      <path className="arc" d="M196 296C240 200 360 160 424 176" stroke="url(#arcG)" strokeWidth="1.8" strokeDasharray="4 6" />
      <path className="arc" d="M196 296C260 340 360 340 424 176" stroke="url(#arcG)" strokeWidth="1.4" strokeDasharray="4 6" />
      <path className="arc" d="M196 296C150 220 170 140 250 108" stroke="url(#arcG)" strokeWidth="1.4" strokeDasharray="4 6" />
      <g className="pin">
        <circle cx="196" cy="296" r="6" fill="#1D28FF" />
        <circle className="ping" cx="196" cy="296" r="6" stroke="#1D28FF" />
      </g>
      <g className="pin p2">
        <circle cx="424" cy="176" r="6" fill="#2BD926" />
        <circle className="ping" cx="424" cy="176" r="6" stroke="#2BD926" />
      </g>
      <g className="pin p3">
        <circle cx="250" cy="108" r="6" fill="#4D5CFF" />
        <circle className="ping" cx="250" cy="108" r="6" stroke="#4D5CFF" />
      </g>
      <text x="184" y="326" fill="#9C9CA6" fontSize="12" fontFamily="Plus Jakarta Sans,sans-serif">India · HQ</text>
      <text x="380" y="162" fill="#9C9CA6" fontSize="12" fontFamily="Plus Jakarta Sans,sans-serif">Australia</text>
      <text x="176" y="96" fill="#9C9CA6" fontSize="12" fontFamily="Plus Jakarta Sans,sans-serif">UK &amp; Europe</text>
    </svg>
  );
}

/* ---------------- hero ---------------- */

const SLIDES = [
  {
    label: "AI Agents",
    heading: (
      <>
        We engineer <span className="hl">AI agents</span>, web platforms and mobile apps for ambitious
        teams worldwide.
      </>
    ),
    sub: "Savo Technologies is a 10-year AI agent development and web & mobile app development company, delivering for clients across India, the USA, Saudi Arabia & GCC, the UK and Australia.",
    scene: <OrbitScene />,
    level: "h1" as const,
  },
  {
    label: "Web & Mobile",
    heading: <>Enterprise web &amp; mobile development at product speed.</>,
    sub: "Strategy, UI/UX, engineering and scale under one roof. 650+ products shipped across 25+ countries in a decade, from MVPs to platforms serving millions.",
    scene: <StackScene />,
    level: "h2" as const,
  },
  {
    label: "Global Delivery",
    heading: <>One accountable team. Five regions. Around-the-clock delivery.</>,
    sub: "Engineering HQ in India with delivery presence across the USA, Saudi Arabia & GCC, the UK and Australia. Follow-the-sun teams keep your roadmap moving while you sleep.",
    scene: <GlobeScene />,
    level: "h2" as const,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const go = useCallback((i: number) => setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), SLIDE_MS);
    return () => clearInterval(t);
  }, [paused, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const hero = heroRef.current;
      if (!hero || !hero.contains(document.activeElement)) return;
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, go]);

  return (
    <section
      className="hero"
      id="top"
      aria-label="Introduction"
      ref={heroRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <HeroGridDots />

      <div className="hero-slides" id="heroSlides" aria-live="off">
        {SLIDES.map((s, i) => {
          const Tag = s.level;
          return (
            <article
              key={s.label}
              className={`hero-slide ${i === index ? "is-active" : ""}`}
              data-slide={i}
              aria-hidden={i !== index}
            >
              <div className="hero-copy">
                <Tag>{s.heading}</Tag>
                <p className="hero-sub">{s.sub}</p>
              </div>
              <div className="hero-visual">{s.scene}</div>
            </article>
          );
        })}
      </div>

      <div className="hero-footer">
        <div className="hero-ctas">
          <a className="btn btn-primary btn-lg" href="/#estimator">
            Start Your Project
          </a>
          <a className="btn btn-outline btn-lg" href="/#ai-agents">
            Meet Our AI Agents <span className="pro-badge">PRO</span>
          </a>
        </div>
        <ul className="hero-assurance" aria-label="Assurances">
          <li>NDA-first engagements</li>
          <li>GDPR-ready delivery</li>
          <li>Dedicated teams since 2016</li>
        </ul>
      </div>

      <div className="slider-tabs" role="tablist" aria-label="Hero slides">
        {SLIDES.map((s, i) => (
          <button
            key={s.label}
            className={`slider-tab ${i === index ? "is-active" : ""}`}
            role="tab"
            aria-selected={i === index}
            aria-label={s.label}
            data-goto={i}
            onClick={() => go(i)}
          >
            <span>{s.label}</span>
            <i className="tab-progress" key={i === index ? `on-${index}-${paused}` : `off-${i}`} />
          </button>
        ))}
      </div>
    </section>
  );
}
