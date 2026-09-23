import { pageMetadata } from "@/lib/seo";
import IndustryPageView from "@/components/industry-page";
import { mustGetIndustry } from "@/lib/industries-data";

const ind = mustGetIndustry("logistics");

export const metadata = pageMetadata({
  title: "Logistics & Supply Chain Software Development",
  description: "Logistics software by Savo Technologies: live fleet tracking for 12,000 vehicles, route optimization and offline first field apps. See outcomes.",
  path: "/industries/logistics/",
});

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
