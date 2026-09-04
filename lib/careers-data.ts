export type Role = {
  title: string;
  track: string;
  exp: string;
  band: string;
  ctc: [number, number];
  blurb: string;
};

/** Open positions shared by the homepage band, the careers page and its form. */
export const ROLES: Role[] = [
  {
    title: "Senior Frontend Engineer",
    track: "React · Next.js",
    exp: "3 to 6 years",
    band: "₹18L to ₹30L",
    ctc: [18, 30],
    blurb: "Own interfaces that ship to millions: design systems, performance budgets and accessibility as first class citizens.",
  },
  {
    title: "Backend Engineer",
    track: "Node.js · PostgreSQL",
    exp: "2 to 5 years",
    band: "₹12L to ₹24L",
    ctc: [12, 24],
    blurb: "Design APIs and data models behind healthcare, fintech and logistics products with real uptime stakes.",
  },
  {
    title: "AI / ML Engineer",
    track: "Agents · RAG · LLMs",
    exp: "2 to 5 years",
    band: "₹15L to ₹28L",
    ctc: [15, 28],
    blurb: "Build the agent fleet clients actually deploy: retrieval, tooling, evaluation and guardrails in production.",
  },
  {
    title: "Mobile Engineer",
    track: "React Native · Flutter",
    exp: "2 to 5 years",
    band: "₹10L to ₹20L",
    ctc: [10, 20],
    blurb: "Ship store releases weekly for GCC and Indian consumers on codebases you would be proud to show.",
  },
  {
    title: "DevOps Engineer",
    track: "AWS · Kubernetes · Terraform",
    exp: "3 to 6 years",
    band: "₹16L to ₹28L",
    ctc: [16, 28],
    blurb: "Run zero drama infrastructure: pipelines, observability and cost discipline across client environments.",
  },
  {
    title: "UI/UX Designer",
    track: "Product · Brand",
    exp: "2 to 5 years",
    band: "₹8L to ₹16L",
    ctc: [8, 16],
    blurb: "Turn fuzzy briefs into systems: research, flows and interfaces that developers can build without guessing.",
  },
];
