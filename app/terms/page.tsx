import type { Metadata } from "next";
import LegalPageView from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the Savo Technologies website and engagement of our services.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <LegalPageView
      kicker="Legal"
      title="Terms of Service"
      updated="1 February 2026"
      intro="These terms govern the use of this website and the engagements we take on. Project specific agreements always take precedence where they differ; this page covers the defaults."
      sections={[
        {
          h: "Using this website",
          p: "You may browse, share links and quote our content with attribution. You may not scrape the site at scale, resell our content as your own, or use it to train competing commercial models without written permission.",
        },
        {
          h: "Estimates and content",
          p: "Prices, timelines and calculators on this site are honest ranges, not binding quotes. A number only becomes a commitment when it appears in a signed proposal. Case study figures reflect specific client outcomes and are not guarantees for your project.",
        },
        {
          h: "Engagements",
          li: [
            "Work starts under a written proposal with defined scope, milestones and rates.",
            "Hiring engagements begin with a two week trial; both sides may end the fit cleanly at trial end.",
            "All intellectual property created for you is assigned to you on payment, from the first commit.",
          ],
        },
        {
          h: "Confidentiality",
          p: "Everything you share with us before, during and after an engagement stays confidential. We sign NDAs on request before any substantive discussion, and our teams are bound by the same obligations internally.",
        },
        {
          h: "Liability",
          p: "We deliver work with professional care and stand behind it. Our liability is limited to the fees paid for the engagement in question. We are not liable for indirect losses, and nothing in these terms limits protections the law provides you regardless.",
        },
        {
          h: "Changes",
          p: "We may update these terms as our services evolve. The dated version on this page is always the current one, and material changes are flagged on this page for 30 days.",
        },
        {
          h: "Governing law",
          p: "These terms are governed by the laws of India, with jurisdiction in Jaipur, Rajasthan, unless a signed project agreement states otherwise.",
        },
      ]}
    />
  );
}
