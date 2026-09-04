import type { Metadata } from "next";
import ServicePageView from "@/components/service-page";
import { getService } from "@/lib/services-data";

const s = getService("ai-consulting")!;

export const metadata: Metadata = {
  title: "AI Consulting & Strategy",
  description: "AI consulting and strategy by Savo Technologies: vendor neutral opportunity audits, working proofs of concept, governance frameworks and costed roadmaps your board can sign. Instant price estimate.",
  alternates: { canonical: "/ai/consulting/" },
  openGraph: {
    title: "AI Consulting & Strategy | Savo Technologies",
    description: "AI consulting and strategy by Savo Technologies: vendor neutral opportunity audits, working proofs of concept, governance frameworks and costed roadmaps your board can sign. Instant price estimate.",
  },
};

export default function Page() {
  return <ServicePageView service={s} />;
}
