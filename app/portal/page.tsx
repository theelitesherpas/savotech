import type { Metadata } from "next";
import PortalApp from "@/components/portal-app";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "Sign in to the Savo Technologies client portal: live milestones, deliverables, invoices and direct chat with your delivery team.",
  alternates: { canonical: "/portal/" },
  robots: { index: false, follow: true },
};

export default function PortalPage() {
  return (
    <section className="section section-light start-hero portal-page">
      <div className="wrap">
        <PortalApp />
      </div>
    </section>
  );
}
