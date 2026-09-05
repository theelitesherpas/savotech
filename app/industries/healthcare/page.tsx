import type { Metadata } from "next";
import IndustryPageView from "@/components/industry-page";
import { getIndustry } from "@/lib/industries-data";

const ind = getIndustry("healthcare")!;

export const metadata: Metadata = {
  title: "Healthcare Software Development",
  description: "Healthcare software by Savo Technologies: HIPAA aligned patient portals, telehealth and clinical copilots with the uptime clinicians trust. See outcomes, compliance and work.",
  alternates: { canonical: "/industries/healthcare/" },
  openGraph: {
    title: "Healthcare Software Development | Savo Technologies",
    description: "Healthcare software by Savo Technologies: HIPAA aligned patient portals, telehealth and clinical copilots with the uptime clinicians trust. See outcomes, compliance and work.",
  },
};

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
