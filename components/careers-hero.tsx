"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HeroGridDots from "./hero-grid-dots";
import { ROLES } from "@/lib/careers-data";

/**
 * Careers hero: ink zone over the animated dot grid, with a terminal
 * card that types the open roles. Falls back to a static line when the
 * visitor prefers reduced motion.
 */
export default function CareersHero() {
  const lines = ROLES.map((r) => `open: ${r.title}`);
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const full = lines[idx % lines.length];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (typed.length < full.length) t = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 42);
      else t = setTimeout(() => setPhase("holding"), 1400);
    } else if (phase === "holding") {
      t = setTimeout(() => setPhase("deleting"), 600);
    } else {
      if (typed.length > 0) t = setTimeout(() => setTyped(full.slice(0, typed.length - 1)), 16);
      else {
        t = setTimeout(() => {
          setIdx((i) => i + 1);
          setPhase("typing");
        }, 250);
      }
    }
    return () => clearTimeout(t);
  }, [typed, phase, idx, reduced, lines]);

  return (
    <section className="section section-dark careers-hero">
      <HeroGridDots />
      <div className="wrap careers-hero-wrap">
        <div className="careers-hero-copy">
          <p className="page-kicker">Careers</p>
          <h1>Build software people rely on.</h1>
          <p className="lead">
            Healthcare, fintech and AI products with real users and real stakes. Small teams,
            genuine ownership, remote first across India, salaries in INR. Pick a role and talk
            to the people who build here.
          </p>
          <div className="careers-hero-ctas">
            <Link className="btn btn-primary btn-lg" href="#openings">
              See open roles
            </Link>
            <Link className="btn btn-ghost btn-lg" href="mailto:careers@savotechnologies.com">
              Write to us
            </Link>
          </div>
          <ul className="careers-hero-facts" aria-label="At a glance">
            <li>
              <strong>6</strong>
              <span>open roles</span>
            </li>
            <li>
              <strong>Remote</strong>
              <span>first, across India</span>
            </li>
            <li>
              <strong>4 steps</strong>
              <span>hiring process</span>
            </li>
          </ul>
        </div>

        <div className="careers-term" aria-hidden={reduced ? undefined : "true"}>
          <div className="ct-bar">
            <span className="ct-dot d1" />
            <span className="ct-dot d2" />
            <span className="ct-dot d3" />
            <span className="ct-title">savo / careers</span>
          </div>
          <div className="ct-body">
            <p className="ct-line">
              <span className="ct-prompt">$</span> {reduced ? lines[0] : typed}
              <span className="ct-caret" />
            </p>
            <p className="ct-muted"># ship weekly · own your surface · no bench</p>
            <p className="ct-muted"># apply in ten minutes, one form</p>
          </div>
        </div>
      </div>
    </section>
  );
}
