"use client";

import Link from "next/link";
import HeroGridDots from "./hero-grid-dots";

/** Careers hero: compact ink band over the animated dot grid. */
export default function CareersHero() {
  return (
    <section className="section section-dark careers-hero">
      <HeroGridDots />
      <div className="wrap careers-hero-wrap">
        <div className="careers-hero-copy">
          <p className="page-kicker">Careers</p>
          <h1>Build software people rely on.</h1>
          <p className="lead">
            Healthcare, fintech and AI products with real users. Small teams, genuine
            ownership, remote first across India, salaries in INR.
          </p>
          <div className="careers-hero-ctas">
            <Link className="btn btn-primary btn-lg" href="#openings">
              See open roles
            </Link>
            <Link className="btn btn-ghost btn-lg" href="mailto:careers@savotechnologies.com">
              Write to us
            </Link>
          </div>
        </div>

        <ul className="careers-hero-facts" aria-label="At a glance">
          <li>
            <strong>6</strong>
            <span>open roles</span>
          </li>
          <li>
            <strong>Remote</strong>
            <span>first, India</span>
          </li>
          <li>
            <strong>4 steps</strong>
            <span>to an offer</span>
          </li>
          <li>
            <strong>2 days</strong>
            <span>reply, always</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
