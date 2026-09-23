import { pageMetadata } from "@/lib/seo";
import IndustryPageView from "@/components/industry-page";
import { mustGetIndustry } from "@/lib/industries-data";

const ind = mustGetIndustry("education");

export const metadata = pageMetadata({
  title: "Education & EdTech Software Development",
  description: "EdTech software by Savo Technologies: LMS platforms, live classrooms and assessment engines serving 200,000 students with measurable completion gains.",
  path: "/industries/education/",
});

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
