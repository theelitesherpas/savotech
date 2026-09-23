"use client";

import Link from "next/link";
import { useEffect } from "react";

/**
 * Route-level error boundary: a branded recovery screen that resets the
 * segment without leaking internals. `digest` is the only error detail
 * Next.js shares with the client (safe to display to support).
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the failure server-side in the platform's logs.
    console.error("[savo-ui] route error:", error.message, error.digest);
  }, [error]);

  return (
    <section
      style={{
        minHeight: "calc(100svh - 76px)",
        display: "grid",
        placeItems: "center",
        padding: "6rem 1.5rem",
        background: "#ffffff",
        color: "#101014",
      }}
    >
      <div
        style={{
          maxWidth: 560,
          textAlign: "center",
          border: "1px solid #E7E7EB",
          borderRadius: 20,
          padding: "3rem 2.5rem",
          background: "#ffffff",
          boxShadow: "0 20px 44px -20px rgba(16,16,20,.2)",
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "#FF1E1D",
            margin: "0 0 10px",
          }}
        >
          Something broke
        </p>
        <h1 style={{ fontSize: 26, letterSpacing: "-0.02em", margin: "0 0 12px", fontFamily: "var(--font-display)" }}>
          This section hit an error
        </h1>
        <p style={{ color: "#55555F", lineHeight: 1.65, fontSize: 15 }}>
          The rest of the site is fine. Retry this page, or head back to the homepage.
          {error.digest ? ` Reference: ${error.digest}` : null}
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
          <button
            onClick={reset}
            style={{
              padding: "13px 26px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 15,
              color: "#fff",
              background: "#1D28FF",
              border: "none",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "13px 26px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 15,
              color: "#101014",
              border: "1px solid #101014",
            }}
          >
            Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
