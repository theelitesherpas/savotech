import Link from "next/link";
import Reveal from "./reveal";

import { SAVO_S_PATH } from "./logo";

export default function PortalTeaser() {
  return (
    <section className="section section-light portal-section" id="portal">
      <div className="wrap portal-grid">
        <div className="portal-copy">
          <Reveal>
            <h2>Your project, visible end-to-end.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead">
              Every Savo engagement includes a secure client portal: the same window into
              delivery our own teams use. No status-chasing emails. No black-box sprints.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <ul className="portal-features">
              <li>
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 19.5v-15M5 19.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="m8 16 3.5-5 3 3L19 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3>Live milestones</h3>
                  <p>Every sprint, deliverable and blocker, tracked in real time, not in Friday recaps.</p>
                </div>
              </li>
              <li>
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.5 3.5h11V20.5H6.5zM9.5 7.5h5M9.5 11h5M9.5 14.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3>Deliverables &amp; invoices</h3>
                  <p>Downloads, versions and billing history in one auditable place.</p>
                </div>
              </li>
              <li>
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H9l-5 4v-13.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M8.5 10h7M8.5 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <div>
                  <h3>Direct team chat</h3>
                  <p>Message your dedicated engineers and PM directly, with answers in hours, not days.</p>
                </div>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.18}>
            <Link className="btn btn-primary" href="/portal/">
              Client Login
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div
            className="portal-mock"
            role="img"
            aria-label="Savo client portal preview: milestone tracking, invoices and team chat"
          >
            <div className="pm-chrome">
              <span />
              <span />
              <span />
              <p>portal.savotechnologies.com</p>
            </div>
            <div className="pm-body">
              <aside className="pm-side">
                <div className="pm-logo" aria-hidden="true">
                  <svg viewBox="160 326 138 202" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d={SAVO_S_PATH} fill="#ffffff" />
                  </svg>
                </div>
                <p className="pm-proj">GulfPay · Wallet v2</p>
                <ul>
                  <li className="on">Milestones</li>
                  <li>Deliverables</li>
                  <li>Invoices</li>
                  <li>Team Chat</li>
                  <li>Settings</li>
                </ul>
              </aside>
              <div className="pm-main">
                <div className="pm-head">
                  <div>
                    <p className="pm-kicker">Sprint 14 of 18</p>
                    <p className="pm-title">Milestones</p>
                  </div>
                  <span className="pm-chip ok">
                    <i />
                    On track
                  </span>
                </div>
                <div className="pm-bar">
                  <i style={{ width: "72%" }} />
                </div>
                <p className="pm-pct">72% complete · ETA Oct 12</p>
                <div className="pm-rows">
                  <div className="pm-row">
                    <span className="pm-state done" />
                    <p>KYC flow rebuild</p>
                    <em>Shipped</em>
                  </div>
                  <div className="pm-row">
                    <span className="pm-state done" />
                    <p>Bill-pay integrations</p>
                    <em>Shipped</em>
                  </div>
                  <div className="pm-row">
                    <span className="pm-state run" />
                    <p>Card issuing UI</p>
                    <em>In review</em>
                  </div>
                  <div className="pm-row">
                    <span className="pm-state" />
                    <p>Pen-test &amp; hardening</p>
                    <em>Queued</em>
                  </div>
                </div>
                <div className="pm-chat">
                  <div className="pm-msg them">
                    <p>Sprint 14 demo is up. New KYC flow cut drop-off from 31% to 12%.</p>
                  </div>
                  <div className="pm-msg me">
                    <p>Excellent. Can we move card UI review to Thursday?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
