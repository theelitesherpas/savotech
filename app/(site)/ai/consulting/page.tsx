import { pageMetadata } from "@/lib/seo";
import ServicePageView from "@/components/service-page";
import { mustGetService } from "@/lib/services-data";

const s = mustGetService("ai-consulting");

export const metadata = pageMetadata({
  title: "AI Consulting & Strategy",
  description: "AI consulting and strategy by Savo Technologies: vendor neutral opportunity audits, working proofs of concept, governance frameworks and costed roadmaps your board can sign. Instant price estimate.",
  path: "/ai/consulting/",
});

export default function Page() {
  return <ServicePageView service={s} />;
}
