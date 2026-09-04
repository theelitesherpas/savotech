"use client";

import { useState } from "react";
import { api } from "@/lib/api";

const COUNTRIES: [string, string][] = [
  ["India", "+91"],
  ["United States", "+1"],
  ["United Kingdom", "+44"],
  ["United Arab Emirates", "+971"],
  ["Saudi Arabia", "+966"],
  ["Qatar", "+974"],
  ["Kuwait", "+965"],
  ["Oman", "+968"],
  ["Bahrain", "+973"],
  ["Australia", "+61"],
  ["Canada", "+1"],
  ["Germany", "+49"],
  ["Netherlands", "+31"],
  ["France", "+33"],
  ["Singapore", "+65"],
  ["New Zealand", "+64"],
  ["South Africa", "+27"],
  ["Ireland", "+353"],
  ["Other", "+"],
];

/** Footer call-back request. Country + number only; guarded like every form. */
export default function CallbackForm() {
  const [country, setCountry] = useState("India");
  const [phone, setPhone] = useState("");
  const [hp, setHp] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [failed, setFailed] = useState(false);
  const [mountedAt] = useState(() => Date.now());

  const dial = COUNTRIES.find(([n]) => n === country)?.[1] ?? "+";
  const digits = phone.replace(/[^\d]/g, "");
  const valid = digits.length >= 7 && digits.length <= 12;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || busy) return;
    setBusy(true);
    setFailed(false);
    try {
      const res = await fetch(api("/api/leads"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          website: hp,
          elapsed: Date.now() - mountedAt,
          source: "callback",
          name: "Callback request",
          phone: `${dial} ${phone}`,
          notes: `Requested a call-back from ${country} via the footer widget.`,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setDone(true);
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
    }
  };

  if (done) {
    return (
      <p className="call-ok" role="status">
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
          <path d="m6.5 10.2 2.4 2.4 4.6-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Noted. A senior consultant calls you within two business hours.
      </p>
    );
  }

  return (
    <form className="call-form" onSubmit={submit} noValidate>
      <label className="sr-only" htmlFor="cbCountry">Country</label>
      <select
        id="cbCountry"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        autoComplete="country-name"
      >
        {COUNTRIES.map(([name, d]) => (
          <option key={name} value={name}>
            {name} ({d})
          </option>
        ))}
      </select>
      <label className="sr-only" htmlFor="cbPhone">Phone number</label>
      <div className="call-phone">
        <span className="call-dial" aria-hidden="true">{dial}</span>
        <input
          id="cbPhone"
          type="tel"
          inputMode="numeric"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="10 digit mobile number"
          autoComplete="tel-national"
          aria-invalid={phone !== "" && !valid}
        />
      </div>
      <input
        className="hp-field"
        type="text"
        name="website"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <button className="btn btn-primary call-btn" type="submit" disabled={busy || !valid}>
        {busy ? "Booking" : "Call me"}
      </button>
      {failed && (
        <p className="call-err" role="alert">
          Could not book the call. Please retry or email hello@savotechnologies.com.
        </p>
      )}
    </form>
  );
}
