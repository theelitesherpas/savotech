import { pageMetadata } from "@/lib/seo";
import IndustryPageView from "@/components/industry-page";
import { mustGetIndustry } from "@/lib/industries-data";

const ind = mustGetIndustry("fintech");

export const metadata = pageMetadata({
  title: "FinTech & Banking Software Development",
  description: "FinTech software by Savo Technologies: PCI DSS ready wallets, banking dashboards and payment platforms across India, GCC and UK. See outcomes and compliance.",
  path: "/industries/fintech/",
});

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
