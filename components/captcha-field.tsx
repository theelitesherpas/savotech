"use client";

import { useCallback, useEffect, useState } from "react";
import { api } from "@/lib/api";

/**
 * Human check: fetches a server-signed challenge (math or type the word),
 * posts the answer with the form. Refreshable, accessible, and every
 * token works exactly once.
 */
export default function CaptchaField({
  token,
  answer,
  onToken,
  onAnswer,
}: {
  token: string;
  answer: string;
  onToken: (v: string) => void;
  onAnswer: (v: string) => void;
}) {
  const [question, setQuestion] = useState("");
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  const load = useCallback(async () => {
    setBusy(true);
    setFailed(false);
    try {
      const res = await fetch(api("/api/captcha"));
      if (!res.ok) throw new Error("failed");
      const data = (await res.json()) as { question: string; token: string };
      setQuestion(data.question);
      onToken(data.token);
      onAnswer("");
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
    }
  }, [onToken, onAnswer]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <fieldset className="est-step captcha-step">
      <legend>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="legend-ico">
          <path d="M12 3.2 20 6.8v4.9c0 4.5-3.3 7.6-8 9.1-4.7-1.5-8-4.6-8-9.1V6.8l8-3.6Z" />
          <path d="m8.8 11.8 2.2 2.2 4.2-4.6" />
        </svg>
        Human check
      </legend>
      <div className="captcha-row">
        <span className="captcha-q">{busy ? "Loading challenge…" : question}</span>
        <input
          className="captcha-input"
          type="text"
          value={answer}
          onChange={(e) => onAnswer(e.target.value)}
          placeholder="Your answer"
          autoComplete="off"
          aria-label="Captcha answer"
          required
        />
        <button type="button" className="captcha-refresh" onClick={() => void load()} aria-label="New challenge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 11a8 8 0 1 0-2.3 5.7" />
            <path d="M20 4.5V11h-6" />
          </svg>
        </button>
      </div>
      {failed && <p className="field-err">Could not load the human check. Refresh and try again.</p>}
    </fieldset>
  );
}
