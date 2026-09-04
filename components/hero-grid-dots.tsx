"use client";

import { useEffect, useState } from "react";

/**
 * Hero background: dotted grid + self-drawing signal paths + traveling dots.
 * Aceternity-style "Background Grid with Dots and Animations", rebuilt natively
 * (pure SVG/CSS/SMIL, zero JS per frame) in the Savo Swiss-light identity:
 * ink dot grid, tricolor signal paths, square pulse nodes.
 * Honors prefers-reduced-motion by rendering the drawn, static state.
 */
export default function HeroGridDots() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className={`hero-grid-dots${reduced ? " is-static" : ""}`} aria-hidden="true">
      <div className="hgd-dots" />
      <svg className="hgd-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
        {/* signal paths (pathLength=1 powers the CSS draw animation) */}
        <path id="hgdP1" className="hgd-path hgd-p1" pathLength={1} d="M-60 560 C 260 560 340 300 640 300 C 900 300 980 480 1240 460 C 1360 450 1440 400 1520 410" />
        <path id="hgdP2" className="hgd-path hgd-p2" pathLength={1} d="M-60 236 C 300 176 560 330 820 240 C 1020 170 1180 262 1520 196" />
        <path id="hgdP3" className="hgd-path hgd-p3" pathLength={1} d="M-60 762 C 320 722 520 842 860 782 C 1120 736 1240 822 1520 762" />

        {/* square pulse nodes on the paths */}
        <g className="hgd-nodes">
          <rect className="hgd-node hgd-n-blue" x="634" y="294" width="12" height="12" rx="3" fill="#1D28FF" />
          <rect className="hgd-node hgd-n-red" x="814" y="234" width="12" height="12" rx="3" fill="#FF1E1D" style={{ animationDelay: "1s" }} />
          <rect className="hgd-node hgd-n-green" x="854" y="776" width="12" height="12" rx="3" fill="#2BD926" style={{ animationDelay: "2s" }} />
          <rect className="hgd-node hgd-n-blue" x="1234" y="454" width="12" height="12" rx="3" fill="#1D28FF" style={{ animationDelay: ".5s" }} />
          <rect className="hgd-node hgd-n-red" x="300" y="554" width="12" height="12" rx="3" fill="#FF1E1D" style={{ animationDelay: "1.6s" }} />
        </g>

        {/* traveling dots along the paths (SMIL; skipped under reduced motion) */}
        {!reduced && (
          <g>
            <circle r="3.5" fill="#1D28FF">
              <animateMotion dur="9s" repeatCount="indefinite" begin="0.6s">
                <mpath href="#hgdP1" />
              </animateMotion>
            </circle>
            <circle r="2.2" fill="#8F9BFF">
              <animateMotion dur="9s" repeatCount="indefinite" begin="5.1s">
                <mpath href="#hgdP1" />
              </animateMotion>
            </circle>
            <circle r="3" fill="#FF1E1D">
              <animateMotion dur="11s" repeatCount="indefinite" begin="1.4s">
                <mpath href="#hgdP2" />
              </animateMotion>
            </circle>
            <circle r="3" fill="#2BD926">
              <animateMotion dur="10s" repeatCount="indefinite" begin="2.2s">
                <mpath href="#hgdP3" />
              </animateMotion>
            </circle>
          </g>
        )}
      </svg>
    </div>
  );
}
