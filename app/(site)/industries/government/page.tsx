import { pageMetadata } from "@/lib/seo";
import IndustryPageView from "@/components/industry-page";
import { mustGetIndustry } from "@/lib/industries-data";

const ind = mustGetIndustry("government");

export const metadata = pageMetadata({
  title: "Government & Public Sector Software Development",
  description: "Public sector software by Savo Technologies: WCAG AA citizen portals, grievance systems and digital service delivery built for scale and scrutiny.",
  path: "/industries/government/",
});

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
