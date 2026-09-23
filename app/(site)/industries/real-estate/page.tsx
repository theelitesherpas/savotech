import { pageMetadata } from "@/lib/seo";
import IndustryPageView from "@/components/industry-page";
import { mustGetIndustry } from "@/lib/industries-data";

const ind = mustGetIndustry("real-estate");

export const metadata = pageMetadata({
  title: "Real Estate & PropTech Software Development",
  description: "PropTech software by Savo Technologies: listings platforms, virtual tours and property management suites that turn browsing into booked site visits.",
  path: "/industries/real-estate/",
});

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
