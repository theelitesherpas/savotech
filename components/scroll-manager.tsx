"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Guarantees every route change lands at the top of the page, on every
 * screen size and entry point (header, mega menus, footer, mobile nav).
 *
 * Two browser behaviors fight the router here:
 *  1. global `scroll-behavior: smooth` (used for in page anchors) turns the
 *     router's instant scroll into an animation the router can interrupt;
 *  2. scroll anchoring: as images and revealed sections load, the browser
 *     keeps the viewport pinned to mid page content, undoing the scroll.
 *
 * So we disable smoothness for the jump, scroll instantly, and keep
 * re-asserting the top position through a short rAF window until layout
 * settles. Hash navigation is left untouched for anchor links.
 */
export default function ScrollManager() {
  const pathname = usePathname();
  const stop = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (window.location.hash) return; // anchor navigation handles itself

    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    const prevAnchor = html.style.overflowAnchor;
    html.style.scrollBehavior = "auto";
    html.style.overflowAnchor = "none";

    let frames = 0;
    let cancelled = false;
    const jump = () => {
      if (cancelled) return;
      if (window.scrollY > 0) window.scrollTo(0, 0);
      if (++frames < 40) requestAnimationFrame(jump); // keep asserting ~600ms
    };
    requestAnimationFrame(jump);

    stop.current = () => {
      cancelled = true;
      html.style.scrollBehavior = prevBehavior;
      html.style.overflowAnchor = prevAnchor;
    };
    return () => stop.current?.();
  }, [pathname]);

  return null;
}
