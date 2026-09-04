import type { Metadata } from "next";
import HirePageView from "@/components/hire-page";
import { getHireRole } from "@/lib/hire-data";

const r = getHireRole("backend-developers")!;

export const metadata: Metadata = {
  title: "Hire Backend Developers",
  description: "Hire dedicated backend developers from Savo Technologies: Node.js, Python and Go APIs, PostgreSQL and regulated experience, matched in 48 hours with a two week paid trial. Transparent rates.",
  alternates: { canonical: "/hire/backend-developers/" },
  openGraph: {
    title: "Hire Backend Developers | Savo Technologies",
    description: "Hire dedicated backend developers from Savo Technologies: Node.js, Python and Go APIs, PostgreSQL and regulated experience, matched in 48 hours with a two week paid trial. Transparent rates.",
  },
};

export default function Page() {
  return <HirePageView role={r} />;
}
