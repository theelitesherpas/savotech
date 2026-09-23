import { pageMetadata } from "@/lib/seo";
import IndustryPageView from "@/components/industry-page";
import { mustGetIndustry } from "@/lib/industries-data";

const ind = mustGetIndustry("healthcare");

export const metadata = pageMetadata({
  title: "Healthcare Software Development",
  description: "Healthcare software by Savo Technologies: HIPAA aligned patient portals, telehealth and clinical copilots with the uptime clinicians trust. See outcomes, compliance and work.",
  path: "/industries/healthcare/",
});

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
