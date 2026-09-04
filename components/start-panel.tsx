"use client";

import { useState } from "react";
import StartForm from "./start-form";

export default function StartYourProjectPanel() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="est-result-card" role="status">
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="start-done-icon">
          <circle cx="24" cy="24" r="21" stroke="#2BD926" strokeWidth="2.2" />
          <path d="m15 24.5 6 6L33 18" stroke="#2BD926" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="est-result-label">Brief received</p>
        <h2 className="start-done-title">Thank you. Your project brief is with our team.</h2>
        <p className="est-result-detail">
          A senior engineer will reply within one business day with next steps, questions and a
          suggested call slot. Want numbers while you wait?
        </p>
        <div className="est-result-ctas">
          <a className="btn btn-outline-inv" href="/#estimator">
            Get an instant estimate
          </a>
        </div>
      </div>
    );
  }

  return <StartForm onSubmitted={() => setSent(true)} />;
}
