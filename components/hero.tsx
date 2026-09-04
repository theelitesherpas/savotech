"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import HeroGridDots from "./hero-grid-dots";
import Link from "next/link";

const SLIDE_MS = 6500;

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
    level: "h1" as const,
  },
  {
    label: "Web & Mobile",
    heading: <>Enterprise web &amp; mobile development at product speed.</>,
    sub: "Strategy, UI/UX, engineering and scale under one roof. 650+ products shipped across 25+ countries in a decade, from MVPs to platforms serving millions.",
    level: "h2" as const,
  },
  {
    label: "Global Delivery",
    heading: <>One accountable team. Five regions. Around-the-clock delivery.</>,
    sub: "Engineering HQ in India with delivery presence across the USA, Saudi Arabia & GCC, the UK and Australia. Follow-the-sun teams keep your roadmap moving while you sleep.",
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
            </article>
          );
        })}
      </div>

      <div className="hero-footer">
        <div className="hero-ctas">
          <Link className="btn btn-primary btn-lg" href="/start-your-project/">
            Start Your Project
          </Link>
          <Link className="btn btn-outline btn-lg" href="/ai-agents/">
            Meet Our AI Agents <span className="pro-badge">PRO</span>
          </Link>
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
