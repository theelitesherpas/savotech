import type { NextConfig } from "next";

/**
 * Savo Technologies — homepage
 * basePath is env-driven so one build serves any mount point:
 *   local  → http://localhost:3000/savotech     (NEXT_PUBLIC_BASE_PATH=/savotech)
 *   vercel → https://savotech.vercel.app/newdesign (NEXT_PUBLIC_BASE_PATH=/newdesign)
 * Static-first rendering for fast loads; hardened headers for enterprise trust.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/savotech";
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
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
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
