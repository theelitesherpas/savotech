import type { Metadata } from "next";
import IndustryPageView from "@/components/industry-page";
import { getIndustry } from "@/lib/industries-data";

const ind = getIndustry("education")!;

export const metadata: Metadata = {
  title: "Education & EdTech Software Development",
  description: "EdTech software by Savo Technologies: LMS platforms, live classrooms and assessment engines serving 200,000 students with measurable completion gains.",
  alternates: { canonical: "/industries/education/" },
  openGraph: {
    title: "Education & EdTech Software Development | Savo Technologies",
    description: "EdTech software by Savo Technologies: LMS platforms, live classrooms and assessment engines serving 200,000 students with measurable completion gains.",
  },
};

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
