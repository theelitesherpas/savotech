"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Guarantees every route change lands at the top of the page.
 *
 * Next.js scrolls to top on navigation, but a global `scroll-behavior:
 * smooth` (used for in page anchors) turns that instant scroll into an
 * animation that the router can interrupt, which sometimes leaves the
 * viewport partway down the page. This manager scrolls instantly by
 * temporarily overriding the smooth behavior. Hash links are left alone
 * so anchor navigation keeps working.
 */
export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return; // anchor navigation handles itself

    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    // restore after the paint so later anchor clicks stay smooth
    const t = window.setTimeout(() => {
      html.style.scrollBehavior = prev;
    }, 80);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
