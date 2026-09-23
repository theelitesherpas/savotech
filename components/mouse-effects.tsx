"use client";

import { useEffect } from "react";

/**
 * Site-wide mouse effects:
 * 1. A soft electric-blue cursor spotlight following the pointer across the page.
 * 2. Hero dot-grid reveal: dots near the cursor light up blue (mask at --hmx/--hmy).
 *
 * The spotlight element always renders and is hidden by CSS for coarse pointers
 * and reduced-motion users, so no client-only state is needed. The mousemove
 * listener runs only for fine pointers without reduced-motion:
 * single listener + rAF writes; zero work while idle.
 */
export default function MouseEffects() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

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

  return <div className="cursor-spotlight" aria-hidden="true" />;
}
