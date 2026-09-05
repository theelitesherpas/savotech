import type { Metadata } from "next";
import LegalPageView from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Savo Technologies collects, uses and protects your data, written in plain language.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalPageView
      kicker="Legal"
      title="Privacy Policy"
      updated="1 February 2026"
      intro="This policy explains what data Savo Technologies collects through this website and our engagements, why we collect it, and the control you keep over it. We wrote it to be read, not skimmed past."
      sections={[
        {
          h: "Data we collect",
          li: [
            "Contact details you give us: name, email, phone number, company and the content of your messages.",
            "Usage data: pages visited, referrer, approximate region inferred from your IP for currency display, and browser type.",
            "Engagement data: when you work with us, the project data you share under a mutual NDA stays governed by that agreement.",
          ],
        },
        {
          h: "Why we collect it",
          li: [
            "To reply to your enquiry, call you back when you ask, or send a proposal you requested.",
            "To show prices in your local currency, which uses your approximate region only.",
            "To keep the site fast and protect forms from bots. The math challenge on our forms exists to stop spam, not to track you.",
          ],
        },
        {
          h: "What we never do",
          li: [
            "Sell or rent your data to anyone, for any reason.",
            "Run third party advertising trackers on this site.",
            "Use your project data to train AI models. Client work stays client work.",
          ],
        },
        {
          h: "Where data lives",
          p: "Enquiry data is stored on infrastructure we control. We do not maintain a public account system beyond the client portal, whose access data is session scoped. We retain enquiry records for up to 24 months, then delete them.",
        },
        {
          h: "Your rights",
          li: [
            "Ask for a copy of the personal data we hold about you.",
            "Ask for corrections or deletion at any time, and we will confirm in writing within 30 days.",
            "Withdraw consent to communication with one reply, and the callback stops the same day.",
          ],
        },
        {
          h: "Cookies",
          p: "This site uses one functional cookie to remember your currency choice. We set no advertising or analytics cookies that identify you personally.",
        },
        {
          h: "Contact",
          p: "For any privacy question or request, write to legal@savotechnologies.com. We are based in Jaipur, India, and handle requests under applicable Indian data protection law and GDPR where relevant.",
        },
      ]}
    />
  );
}
