import type { Metadata } from "next";
import IndustryPageView from "@/components/industry-page";
import { getIndustry } from "@/lib/industries-data";

const ind = getIndustry("logistics")!;

export const metadata: Metadata = {
  title: "Logistics & Supply Chain Software Development",
  description: "Logistics software by Savo Technologies: live fleet tracking for 12,000 vehicles, route optimization and offline first field apps. See outcomes.",
  alternates: { canonical: "/industries/logistics/" },
  openGraph: {
    title: "Logistics & Supply Chain Software Development | Savo Technologies",
    description: "Logistics software by Savo Technologies: live fleet tracking for 12,000 vehicles, route optimization and offline first field apps. See outcomes.",
  },
};

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
