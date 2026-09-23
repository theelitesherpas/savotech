import Link from "next/link";
import type { Metadata } from "next";
import Logo from "@/components/logo";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/** Branded 404 — unknown routes return a real 404 status, not a soft "coming soon" page. */
export default function NotFound() {
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
        <div style={{ display: "grid", placeItems: "center", marginBottom: 28, color: "#101014" }}>
          <Logo />
        </div>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "#1D28FF",
            margin: "0 0 10px",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 26,
            letterSpacing: "-0.02em",
            margin: "0 0 12px",
          }}
        >
          This page does not exist
        </h1>
        <p style={{ color: "#55555F", lineHeight: 1.65, fontSize: 15 }}>
          The link may be outdated or mistyped. Explore our services, industries and AI agents,
          or start your project with Savo Technologies directly.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "13px 26px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 15,
              color: "#fff",
              background: "#1D28FF",
              boxShadow: "0 8px 20px -8px rgba(29,40,255,.45)",
            }}
          >
            Return to the homepage
          </Link>
          <Link
            href="/services/"
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
            Browse services
          </Link>
        </div>
      </div>
    </section>
  );
}
