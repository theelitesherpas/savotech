import type { Metadata } from "next";
import IndustryPageView from "@/components/industry-page";
import { getIndustry } from "@/lib/industries-data";

const ind = getIndustry("travel")!;

export const metadata: Metadata = {
  title: "Travel & Hospitality Software Development",
  description: "Travel software by Savo Technologies: direct booking engines, channel management and guest apps that turn browsing into confirmed bookings with measurable occupancy gains.",
  alternates: { canonical: "/industries/travel/" },
};

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
