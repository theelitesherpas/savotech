import type { Metadata } from "next";
import IndustryPageView from "@/components/industry-page";
import { getIndustry } from "@/lib/industries-data";

const ind = getIndustry("government")!;

export const metadata: Metadata = {
  title: "Government & Public Sector Software Development",
  description: "Public sector software by Savo Technologies: WCAG AA citizen portals, grievance systems and digital service delivery built for scale and scrutiny.",
  alternates: { canonical: "/industries/government/" },
};

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
