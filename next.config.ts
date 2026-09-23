import type { NextConfig } from "next";

/**
 * Savo Technologies — corporate website
 * basePath is env-driven so one build serves any mount point:
 *   local  → http://localhost:3000/savotech     (NEXT_PUBLIC_BASE_PATH=/savotech)
 *   vercel → https://savotech.vercel.app/newdesign (NEXT_PUBLIC_BASE_PATH=/newdesign)
 * Static-first rendering for fast loads; hardened headers for enterprise trust.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/savotech";

/**
 * Security headers.
 *
 * CSP notes: the site is static-first, so we do not use nonces (nonce-based
 * CSP forces dynamic rendering of every route). `unsafe-inline` for scripts
 * and styles is required by Next.js hydration payloads; the CSP still pins
 * every network fetch to same-origin, blocks framing, plug-ins, and form
 * submissions to third parties. There are no third-party scripts, fonts or
 * images — everything is self-hosted (next/font included).
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  basePath: BASE_PATH,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  // db/schema.sql is read at runtime to auto-provision tables; make sure the
  // serverless bundle includes it (otherwise Postgres silently never engages).
  outputFileTracingIncludes: {
    "/api/leads": ["./db/schema.sql"],
    "/api/chat": ["./db/schema.sql"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async rewrites() {
    return [
      // Jusspanda kids-fashion storefront — proxied from its own Vercel project
      // (keeps the two brands/codebases separate; assets live under /jusspanda).
      {
        source: "/jusspanda",
        destination: "https://jusspanda.vercel.app/jusspanda",
        basePath: false,
      },
      {
        source: "/jusspanda/:path*",
        destination: "https://jusspanda.vercel.app/jusspanda/:path*",
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
