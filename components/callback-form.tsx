"use client";

import { useState } from "react";
import { api } from "@/lib/api";

type Country = {
  name: string;
  iso: string; // ISO 3166-1 alpha-2, rendered as a flag emoji
  dial: string;
  min: number; // allowed national number length, digits
  max: number;
};

const COUNTRIES: Country[] = [
  { name: "India", iso: "IN", dial: "+91", min: 10, max: 10 },
  { name: "United States", iso: "US", dial: "+1", min: 10, max: 10 },
  { name: "United Kingdom", iso: "GB", dial: "+44", min: 10, max: 10 },
  { name: "United Arab Emirates", iso: "AE", dial: "+971", min: 9, max: 9 },
  { name: "Saudi Arabia", iso: "SA", dial: "+966", min: 9, max: 9 },
  { name: "Qatar", iso: "QA", dial: "+974", min: 8, max: 8 },
  { name: "Kuwait", iso: "KW", dial: "+965", min: 8, max: 8 },
  { name: "Oman", iso: "OM", dial: "+968", min: 8, max: 8 },
  { name: "Bahrain", iso: "BH", dial: "+973", min: 8, max: 8 },
  { name: "Australia", iso: "AU", dial: "+61", min: 9, max: 9 },
  { name: "Canada", iso: "CA", dial: "+1", min: 10, max: 10 },
  { name: "Germany", iso: "DE", dial: "+49", min: 10, max: 11 },
  { name: "Netherlands", iso: "NL", dial: "+31", min: 9, max: 9 },
  { name: "France", iso: "FR", dial: "+33", min: 9, max: 9 },
  { name: "Singapore", iso: "SG", dial: "+65", min: 8, max: 8 },
  { name: "New Zealand", iso: "NZ", dial: "+64", min: 8, max: 10 },
  { name: "South Africa", iso: "ZA", dial: "+27", min: 9, max: 9 },
  { name: "Ireland", iso: "IE", dial: "+353", min: 9, max: 9 },
  { name: "Other", iso: "UN", dial: "+", min: 7, max: 12 },
];

/** ISO alpha-2 -> regional indicator flag emoji. */
const flag = (iso: string) =>
  String.fromCodePoint(...[...iso].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));

/** Footer call-back request. Flag + ISD select, number validated per country. */
export default function CallbackForm() {
  const [country, setCountry] = useState<Country>(COUNTRIES[0]);
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);
  const [hp, setHp] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [failed, setFailed] = useState(false);
  const [mountedAt] = useState(() => Date.now());

  const digits = phone.replace(/\D/g, "").slice(0, country.max);
  const valid = digits.length >= country.min && digits.length <= country.max;
  const lengthHint =
    country.min === country.max
      ? `${country.name} numbers are ${country.min} digits`
      : `${country.min} to ${country.max} digits for ${country.name}`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
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
          phone: `${country.dial} ${digits}`,
          notes: `Requested a call-back from ${country.name} (${country.dial}) via the footer widget.`,
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
      <label className="sr-only" htmlFor="cbPhone">Phone number</label>
      <div className={`call-group${touched && !valid ? " is-invalid" : ""}`}>
        <select
          id="cbCountry"
          value={country.name}
          onChange={(e) => {
            setCountry(COUNTRIES.find((c) => c.name === e.target.value) ?? COUNTRIES[0]);
            setTouched(false);
          }}
          autoComplete="country-name"
        >
          {COUNTRIES.map((c) => (
            <option key={c.iso} value={c.name}>
              {flag(c.iso)} {c.dial} {c.name}
            </option>
          ))}
        </select>
        <input
          id="cbPhone"
          type="tel"
          inputMode="numeric"
          value={digits}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder={
            country.min === country.max
              ? `${country.min} digit number`
              : `${country.min} to ${country.max} digit number`
          }
          autoComplete="tel-national"
          aria-invalid={touched && !valid}
          aria-describedby="cbHint"
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
      <button className="btn btn-primary call-btn" type="submit" disabled={busy || (touched && !valid)}>
        {busy ? "Booking" : "Call me"}
      </button>

      <p className={`call-hint${touched && digits.length > 0 && !valid ? " show" : ""}`} id="cbHint" role="alert">
        {lengthHint}. Please check the number.
      </p>
      {failed && (
        <p className="call-err" role="alert">
          Could not book the call. Please retry or email hello@savotechnologies.com.
        </p>
      )}
    </form>
  );
}
