"use client";

import { useState } from "react";
import Link from "next/link";

type Item = { name: string; meta: string; img: string; stat: string };

/** Portfolio strip for service pages: two large cards at a time, slider when there are more. */
export default function SvcWork({ items }: { items: Item[] }) {
  const perPage = 2;
  const pages = Math.max(1, Math.ceil(items.length / perPage));
  const [page, setPage] = useState(0);
  const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const visible = items.slice(page * perPage, page * perPage + perPage);

  return (
    <div className="svc-slider">
      <div className="svc-slider-track" key={page}>
        {visible.map((w) => (
          <Link className="svc-work-big" key={w.name} href="/#work" aria-label={`${w.name} case study`}>
            <div className="svc-work-media">
              <img src={`${BP}${w.img}`} alt={`${w.name}, ${w.meta}`} loading="lazy" />
              <span className="work-stat">{w.stat}</span>
            </div>
            <div className="svc-work-body">
              <h3>{w.name}</h3>
              <p>{w.meta}</p>
              <span className="svc-work-cta">
                View Case Study
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {pages > 1 && (
        <div className="svc-slider-nav" role="tablist" aria-label="More work">
          <button
            type="button"
            className="svc-nav-btn"
            aria-label="Previous projects"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M14 8H3M7 3.5 2.5 8 7 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="svc-dots" aria-hidden="true">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                type="button"
                key={i}
                className={`svc-dot${i === page ? " on" : ""}`}
                aria-label={`Show projects ${i * perPage + 1} to ${Math.min(items.length, (i + 1) * perPage)}`}
                onClick={() => setPage(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="svc-nav-btn"
            aria-label="Next projects"
            disabled={page === pages - 1}
            onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
          >
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
