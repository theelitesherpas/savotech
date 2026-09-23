import { pageMetadata } from "@/lib/seo";
import IndustryPageView from "@/components/industry-page";
import { mustGetIndustry } from "@/lib/industries-data";

const ind = mustGetIndustry("manufacturing");

export const metadata = pageMetadata({
  title: "Manufacturing & Industry 4.0 Software Development",
  description: "Manufacturing software by Savo Technologies: MES builds, IoT telemetry and traceability systems that connect shop floor machines to leadership dashboards.",
  path: "/industries/manufacturing/",
});

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
