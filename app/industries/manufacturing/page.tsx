import type { Metadata } from "next";
import IndustryPageView from "@/components/industry-page";
import { getIndustry } from "@/lib/industries-data";

const ind = getIndustry("manufacturing")!;

export const metadata: Metadata = {
  title: "Manufacturing & Industry 4.0 Software Development",
  description: "Manufacturing software by Savo Technologies: MES builds, IoT telemetry and traceability systems that connect shop floor machines to leadership dashboards.",
  alternates: { canonical: "/industries/manufacturing/" },
};

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
