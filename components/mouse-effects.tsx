"use client";

import { useEffect, useState } from "react";

/**
 * Site-wide mouse effects:
 * 1. A soft electric-blue cursor spotlight following the pointer across the page.
 * 2. Hero dot-grid reveal: dots near the cursor light up blue (mask at --hmx/--hmy).
 * Runs only for fine pointers (mouse/trackpad) and only without reduced-motion.
 * Single mousemove listener + rAF writes; zero work while idle.
 */
export default function MouseEffects() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let x = -500;
    let y = -500;
    let queued = false;

    const apply = () => {
      queued = false;
      const root = document.documentElement;
      root.style.setProperty("--mx", `${x}px`);
      root.style.setProperty("--my", `${y}px`);

      const field = document.querySelector<HTMLElement>(".hero-grid-dots");
      if (field) {
        const r = field.getBoundingClientRect();
        if (y >= r.top - 220 && y <= r.bottom + 220) {
          field.style.setProperty("--hmx", `${x - r.left}px`);
          field.style.setProperty("--hmy", `${y - r.top}px`);
          field.dataset.active = "1";
        } else {
          delete field.dataset.active;
        }
      }
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!queued) {
        queued = true;
        requestAnimationFrame(apply);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;
  return <div className="cursor-spotlight" aria-hidden="true" />;
}
