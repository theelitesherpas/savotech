import Link from "next/link";
import type { Metadata } from "next";
import Logo from "@/components/logo";

export const metadata: Metadata = {
  title: "Page in development",
  robots: { index: false, follow: true },
};

/**
 * Branded placeholder for the planned sibling pages (About, Services detail,
 * Industries, Case Studies, Resources, Portal, Privacy, Terms…). They will be
 * built on this homepage's design system.
 */
export default function ComingSoonPage() {
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
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 26,
            letterSpacing: "-0.02em",
            marginBottom: 12,
          }}
        >
          This page is in development
        </h1>
        <p style={{ color: "#55555F", lineHeight: 1.65, fontSize: 15 }}>
          You have reached a route that is part of the planned Savo Technologies site rollout.
          The full site, covering About, Services, Industries, Case Studies, Resources and the
          Client Portal, is being built on the same design system as the homepage.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            marginTop: 28,
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
      </div>
    </section>
  );
}
