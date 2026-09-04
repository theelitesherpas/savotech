"use client";

import { useEffect } from "react";

/**
 * Spotlight card borders: one delegated listener tracks the pointer and
 * writes --mx/--my onto the hovered card, so a single CSS gradient can
 * draw a premium cursor-following border on every card type site wide.
 * Disabled for visitors who prefer reduced motion and idle on touch.
 */
export default function CardGlow() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const sel = [
      ".work-card",
      ".role-card",
      ".team-card",
      ".office-card",
      ".guarantee-card",
      ".ind",
      ".svc",
      ".agent-card",
      ".start-aside-card",
      ".pstat",
    ].join(", ");

    const onMove = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.(sel) as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
