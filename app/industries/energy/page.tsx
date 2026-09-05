import type { Metadata } from "next";
import IndustryPageView from "@/components/industry-page";
import { getIndustry } from "@/lib/industries-data";

const ind = getIndustry("energy")!;

export const metadata: Metadata = {
  title: "Energy & Utilities Software Development",
  description: "Energy software by Savo Technologies: grid analytics, smart metering platforms and asset monitoring that turn utility telemetry into decisions.",
  alternates: { canonical: "/industries/energy/" },
};

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
