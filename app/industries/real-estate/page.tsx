import type { Metadata } from "next";
import IndustryPageView from "@/components/industry-page";
import { getIndustry } from "@/lib/industries-data";

const ind = getIndustry("real-estate")!;

export const metadata: Metadata = {
  title: "Real Estate & PropTech Software Development",
  description: "PropTech software by Savo Technologies: listings platforms, virtual tours and property management suites that turn browsing into booked site visits.",
  alternates: { canonical: "/industries/real-estate/" },
  openGraph: {
    title: "Real Estate & PropTech Software Development | Savo Technologies",
    description: "PropTech software by Savo Technologies: listings platforms, virtual tours and property management suites that turn browsing into booked site visits.",
  },
};

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
