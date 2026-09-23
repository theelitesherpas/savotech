"use client";

/**
 * Last-resort boundary for failures in the root layout itself. Renders a
 * full HTML document (no shared layout is guaranteed to exist here).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error("[savo-ui] global error:", error.message, error.digest);

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#fff", color: "#101014" }}>
        <div style={{ minHeight: "100svh", display: "grid", placeItems: "center", padding: "2rem" }}>
          <div style={{ maxWidth: 480, textAlign: "center" }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#FF1E1D" }}>
              Savo Technologies
            </p>
            <h1 style={{ fontSize: 24, letterSpacing: "-0.02em" }}>The site hit an unexpected error</h1>
            <p style={{ color: "#55555F", lineHeight: 1.65 }}>
              Please retry. If it keeps happening, reach us at hello@savotechnologies.com.
            </p>
            <button
              onClick={reset}
              style={{
                marginTop: 8,
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
          </div>
        </div>
      </body>
    </html>
  );
}
