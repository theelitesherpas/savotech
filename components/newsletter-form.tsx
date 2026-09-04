"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || busy) return;
    setBusy(true);
    try {
      await fetch(api("/api/newsletter"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setDone(true);
    } catch {
      setDone(true); // never block the moment on a demo backend
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <p className="news-ok" role="status">
        Subscribed, welcome aboard. (Demo confirmation; ESP/CRM wiring lands with the build.)
      </p>
    );
  }

  return (
    <form className="news-form" id="newsForm" onSubmit={submit}>
      <label className="sr-only" htmlFor="newsEmail">
        Email address
      </label>
      <input
        id="newsEmail"
        type="email"
        placeholder="you@company.com"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn btn-primary" type="submit" disabled={busy}>
        {busy ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
