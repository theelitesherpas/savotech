import type { Metadata } from "next";
import HirePageView from "@/components/hire-page";
import { getHireRole } from "@/lib/hire-data";

const r = getHireRole("full-stack-developers")!;

export const metadata: Metadata = {
  title: "Hire Full Stack Developers",
  description: "Hire dedicated full stack developers from Savo Technologies: React, Node and PostgreSQL engineers who own features end to end. Matched in 48 hours with a two week paid trial and transparent rates.",
  alternates: { canonical: "/hire/full-stack-developers/" },
  openGraph: {
    title: "Hire Full Stack Developers | Savo Technologies",
    description: "Hire dedicated full stack developers from Savo Technologies: React, Node and PostgreSQL engineers who own features end to end. Matched in 48 hours with a two week paid trial and transparent rates.",
  },
};

export default function Page() {
  return <HirePageView role={r} />;
}
