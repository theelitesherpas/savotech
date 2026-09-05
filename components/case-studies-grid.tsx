"use client";

import { useState } from "react";
import Link from "next/link";
import { CASE_FILTERS, CASE_STUDIES, type CaseCat } from "@/lib/case-studies-data";

const CAT_LABEL: Record<CaseCat, string> = {
  web: "Web platform",
  mobile: "Mobile app",
  ai: "AI & agents",
  brand: "Brand & design",
};

/** Bento grid of case studies: flagship work big, the rest compact, filterable. */
export default function CaseStudiesGrid() {
  const [filter, setFilter] = useState<"all" | CaseCat>("all");
  const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const visible = CASE_STUDIES.filter((c) => filter === "all" || c.cat === filter);

  /* editorial rhythm: two big, one full width banner, a half, a stacked
     pair and a tall portrait, then a calm row of four, closing wide */
  const RHYTHM = ["big", "big", "banner", "half", "tall", "small", "small", "half", "small", "small", "tall", "wide"] as const;
  const sizeOf = (i: number) => RHYTHM[i % RHYTHM.length];

  return (
    <>
      <div className="cs-filters" role="tablist" aria-label="Filter case studies">
        {CASE_FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            role="tab"
            aria-selected={filter === f.key}
            className={`chip${filter === f.key ? " sel" : ""}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="cs-grid" key={filter}>
        {visible.map((c, i) => (
          <article key={c.name} className={`cs-card is-${sizeOf(i)}`} style={{ animationDelay: `${0.04 * (i % 6)}s` }}>
            <img src={`${BP}${c.img}`} alt={`${c.name}: ${CAT_LABEL[c.cat].toLowerCase()} project`} width={900} height={900} decoding="async" />
            <span className="cs-veil" aria-hidden="true" />
            <span className={`cs-cat c-${c.cat}`}>{CAT_LABEL[c.cat]}</span>
            <div className="cs-body">
              <h3>{c.name}</h3>
              <p className="cs-meta">{c.meta}</p>
              <p className="cs-stat">{c.stat}</p>
              <ul className="cs-tech" aria-label="Technologies">
                {c.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <p className="cs-note">
        Detailed case studies are landing here soon. Want the full story of any project above?{" "}
        <Link className="text-cta" href="/contact/">
          Ask us and we will walk you through it
        </Link>
        .
      </p>
    </>
  );
}
