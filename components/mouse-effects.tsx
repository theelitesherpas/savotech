"use client";

import { useEffect, useState } from "react";

/**
 * Site-wide mouse effects:
 * 1. A soft electric-blue cursor spotlight following the pointer across the page.
 * 2. Hero dot-grid reveal: dots near the cursor light up blue (mask at --hmx/--hmy).
 * 3. Hero console parallax: the ink panel drifts gently toward the cursor.
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

      const hero = document.querySelector<HTMLElement>(".hero");
      if (hero) {
        const r = hero.getBoundingClientRect();
        if (y >= r.top && y <= r.bottom) {
          const dx = (x - (r.left + r.width / 2)) / r.width;
          const dy = (y - (r.top + r.height / 2)) / r.height;
          const tx = Math.max(-1, Math.min(1, dx)) * 10;
          const ty = Math.max(-1, Math.min(1, dy)) * 8;
          hero.querySelectorAll<HTMLElement>(".hero-visual").forEach((el) => {
            el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
          });
        } else {
          hero.querySelectorAll<HTMLElement>(".hero-visual").forEach((el) => {
            el.style.transform = "";
          });
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
