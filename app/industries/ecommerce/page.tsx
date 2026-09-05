import type { Metadata } from "next";
import IndustryPageView from "@/components/industry-page";
import { getIndustry } from "@/lib/industries-data";

const ind = getIndustry("ecommerce")!;

export const metadata: Metadata = {
  title: "Ecommerce & Retail Software Development",
  description: "Ecommerce and retail software by Savo Technologies: headless storefronts, PIM and marketplace platforms with measurable conversion lifts. See the numbers.",
  alternates: { canonical: "/industries/ecommerce/" },
  openGraph: {
    title: "Ecommerce & Retail Software Development | Savo Technologies",
    description: "Ecommerce and retail software by Savo Technologies: headless storefronts, PIM and marketplace platforms with measurable conversion lifts. See the numbers.",
  },
};

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
