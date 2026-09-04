"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./reveal";
import { ROLES } from "@/lib/careers-data";

/** Openings grid with team filters. Apply links to the dedicated page with the role preselected. */
export default function CareersRoles() {
  const [filter, setFilter] = useState("all");
  const [openRole, setOpenRole] = useState<string | null>(null);
  const visible = ROLES.filter((r) => filter === "all" || r.cat === filter);
  const FILTERS: [string, string][] = [
    ["all", "All roles"],
    ["eng", "Engineering"],
    ["design", "Design"],
    ["ops", "Operations"],
  ];

  return (
    <Reveal>
      <div className="role-filters" role="tablist" aria-label="Filter roles by team">
        {FILTERS.map(([key, label]) => (
          <button
            type="button"
            key={key}
            role="tab"
            aria-selected={filter === key}
            className={`chip${filter === key ? " sel" : ""}`}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="role-grid">
        {visible.map((r) => {
          const open = openRole === r.title;
          return (
            <article key={r.title} className={`role-card${open ? " is-open" : ""}`}>
              <div className="role-top">
                <span className="role-track">{r.track}</span>
                <span className="role-type">Full time · Remote (India)</span>
              </div>
              <h3>{r.title}</h3>
              <ul className="role-meta">
                <li>{r.exp}</li>
                <li>{r.band}</li>
                <li>Indore · Ahmedabad · Remote</li>
              </ul>
              <p>{r.blurb}</p>
              <div className="role-actions">
                <Link className="role-apply" href={`/careers/apply/?role=${r.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  Apply for this role
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <button
                  type="button"
                  className="role-more"
                  aria-expanded={open}
                  onClick={() => setOpenRole(open ? null : r.title)}
                >
                  {open ? "Hide details" : "Role details"}
                </button>
              </div>
              {open && (
                <div className="role-details">
                  <div>
                    <h4>What you will do</h4>
                    <ul>
                      {r.duties.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>What you bring</h4>
                    <ul>
                      {r.brings.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </Reveal>
  );
}
