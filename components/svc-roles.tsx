"use client";

import { useCurrency } from "./currency-provider";

/** Hiring rates for a service, priced in the visitor's currency. */
export default function SvcRoles({ roles }: { roles: { t: string; rate: number }[] }) {
  const { price } = useCurrency();
  return (
    <ul className="svc-roles">
      {roles.map((r) => (
        <li key={r.t}>
          <span>{r.t}</span>
          <strong>from {price(r.rate, 50)} / month</strong>
        </li>
      ))}
    </ul>
  );
}
