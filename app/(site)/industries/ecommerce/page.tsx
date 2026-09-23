import { pageMetadata } from "@/lib/seo";
import IndustryPageView from "@/components/industry-page";
import { mustGetIndustry } from "@/lib/industries-data";

const ind = mustGetIndustry("ecommerce");

export const metadata = pageMetadata({
  title: "Ecommerce & Retail Software Development",
  description: "Ecommerce and retail software by Savo Technologies: headless storefronts, PIM and marketplace platforms with measurable conversion lifts. See the numbers.",
  path: "/industries/ecommerce/",
});

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
