"use client";

import Link from "next/link";
import HeroGridDots from "./hero-grid-dots";

/** Careers hero: ink band over the dot grid with a highlighted code window. */
export default function CareersHero() {
  return (
    <section className="section section-dark careers-hero">
      <HeroGridDots />
      <div className="wrap careers-hero-wrap">
        <div className="careers-hero-copy">
          <p className="page-kicker">Careers</p>
          <h1>Ship work you are proud to sign.</h1>
          <p className="lead">
            Every commit you push here lands in a real product: hospital systems, payment
            rails, AI agents in production. Small teams, genuine ownership, remote first
            across India.
          </p>
          <ul className="careers-hero-facts careers-hero-facts-row" aria-label="At a glance">
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

        <div className="code-win" aria-hidden="true">
          <div className="cw-bar">
            <span className="cw-dot d1" />
            <span className="cw-dot d2" />
            <span className="cw-dot d3" />
            <span className="cw-title">careers.js</span>
            <span className="cw-lang">JavaScript</span>
          </div>
          <pre className="cw-body">
            <code>
              <span className="c-com">// savo technologies is hiring</span>{"\n"}
              <span className="c-kw">const</span> <span className="c-var">you</span> = {"{"}{"\n"}
              {"  "}<span className="c-key">curious</span>: <span className="c-bool">true</span>,{"\n"}
              {"  "}<span className="c-key">ships</span>: <span className="c-str">&quot;weekly&quot;</span>,{"\n"}
              {"  "}<span className="c-key">ego</span>: <span className="c-str">&quot;checked in&quot;</span>,{"\n"}
              {"}"};{"\n\n"}
              <span className="c-kw">if</span> (<span className="c-var">you</span>.<span className="c-key">curious</span>) {"{"}{"\n"}
              {"  "}<span className="c-fn">join</span>({"{"}{"\n"}
              {"    "}team: <span className="c-str">&quot;savo&quot;</span>,{"\n"}
              {"    "}role: <span className="c-var">ROLES</span>.<span className="c-prop">open</span>,{"\n"}
              {"    "}mode: <span className="c-str">&quot;remote&quot;</span>,{"\n"}
              {"  "}{"}"});{"\n"}
              {"  "}<span className="c-com">// personal reply within 2 business days</span>{"\n"}
              {"}"}
              <span className="cw-caret" />
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
