import { pageMetadata } from "@/lib/seo";
import IndustryPageView from "@/components/industry-page";
import { mustGetIndustry } from "@/lib/industries-data";

const ind = mustGetIndustry("energy");

export const metadata = pageMetadata({
  title: "Energy & Utilities Software Development",
  description: "Energy software by Savo Technologies: grid analytics, smart metering platforms and asset monitoring that turn utility telemetry into decisions.",
  path: "/industries/energy/",
});

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
