import type { Metadata } from "next";
import IndustryPageView from "@/components/industry-page";
import { getIndustry } from "@/lib/industries-data";

const ind = getIndustry("fintech")!;

export const metadata: Metadata = {
  title: "FinTech & Banking Software Development",
  description: "FinTech software by Savo Technologies: PCI DSS ready wallets, banking dashboards and payment platforms across India, GCC and UK. See outcomes and compliance.",
  alternates: { canonical: "/industries/fintech/" },
  openGraph: {
    title: "FinTech & Banking Software Development | Savo Technologies",
    description: "FinTech software by Savo Technologies: PCI DSS ready wallets, banking dashboards and payment platforms across India, GCC and UK. See outcomes and compliance.",
  },
};

export default function Page() {
  return <IndustryPageView industry={ind} />;
}
