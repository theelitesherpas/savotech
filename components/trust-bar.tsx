"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./reveal";

const STATS = [
  { n: 10, suffix: "+", label: "Years of delivery" },
  { n: 650, suffix: "+", label: "Projects shipped" },
  { n: 25, suffix: "+", label: "Countries served" },
  { n: 60, suffix: "+", label: "AI agents deployed" },
];

function Stat({ n, suffix, label }: { n: number; suffix: string; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const dur = 1400;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * n));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [n]);

  return (
    <div className="stat" ref={ref}>
      <span className="stat-num" aria-label={`${n}${suffix} ${label}`}>
        {val}
        {suffix}
      </span>
      <span className="stat-label" aria-hidden="true">
        {label}
      </span>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="trust" aria-label="Company track record">
      <div className="wrap trust-grid">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <Stat {...s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
