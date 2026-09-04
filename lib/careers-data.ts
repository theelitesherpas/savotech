export type Role = {
  title: string;
  track: string;
  cat: "eng" | "design" | "ops";
  exp: string;
  band: string;
  ctc: [number, number];
  blurb: string;
  duties: string[];
  brings: string[];
};

/** Open positions shared by the homepage band, the careers page and its form. */
export const ROLES: Role[] = [
  {
    title: "Senior Frontend Engineer",
    track: "React · Next.js",
    cat: "eng",
    exp: "3 to 6 years",
    band: "₹18L to ₹30L",
    ctc: [18, 30],
    blurb: "Own interfaces that ship to millions: design systems, performance budgets and accessibility as first class citizens.",
    duties: [
      "Lead feature builds across React and Next.js codebases with real performance budgets",
      "Grow the design system reused across healthcare and fintech products",
      "Pair with designers weekly and mentor two junior engineers",
    ],
    brings: [
      "Deep React and TypeScript plus an accessibility story you can defend",
      "Core Web Vitals wins you can show with numbers",
      "Comfort owning a product surface end to end",
    ],
  },
  {
    title: "Backend Engineer",
    track: "Node.js · PostgreSQL",
    cat: "eng",
    exp: "2 to 5 years",
    band: "₹12L to ₹24L",
    ctc: [12, 24],
    blurb: "Design APIs and data models behind healthcare, fintech and logistics products with real uptime stakes.",
    duties: [
      "Design REST and event driven services for regulated industries",
      "Own schema design, migrations and query performance in PostgreSQL",
      "Write the integration tests you refuse to live without",
    ],
    brings: [
      "Production Node.js and SQL you have tuned under load",
      "A security mindset: least privilege, audit trails, sane auth",
      "Clear written technical decisions",
    ],
  },
  {
    title: "AI / ML Engineer",
    track: "Agents · RAG · LLMs",
    cat: "eng",
    exp: "2 to 5 years",
    band: "₹15L to ₹28L",
    ctc: [15, 28],
    blurb: "Build the agent fleet clients actually deploy: retrieval, tooling, evaluation and guardrails in production.",
    duties: [
      "Ship retrieval pipelines and tool using agents to client environments",
      "Build evaluation harnesses that catch regressions before clients do",
      "Keep inference costs honest with caching and routing",
    ],
    brings: [
      "Hands on LLM application experience, not just notebooks",
      "Python plus one production backend ecosystem",
      "Opinions on guardrails and how to test them",
    ],
  },
  {
    title: "Mobile Engineer",
    track: "React Native · Flutter",
    cat: "eng",
    exp: "2 to 5 years",
    band: "₹10L to ₹20L",
    ctc: [10, 20],
    blurb: "Ship store releases weekly for GCC and Indian consumers on codebases you would be proud to show.",
    duties: [
      "Own release trains for iOS and Android from branch to store review",
      "Keep crash free sessions above 99.5 across the fleet",
      "Work shoulder to shoulder with backend on offline first flows",
    ],
    brings: [
      "Shipped apps you can point to on the stores",
      "Native debugging skills on at least one platform",
      "Care for accessibility on small screens",
    ],
  },
  {
    title: "DevOps Engineer",
    track: "AWS · Kubernetes · Terraform",
    cat: "ops",
    exp: "3 to 6 years",
    band: "₹16L to ₹28L",
    ctc: [16, 28],
    blurb: "Run zero drama infrastructure: pipelines, observability and cost discipline across client environments.",
    duties: [
      "Own CI/CD pipelines from commit to production across client projects",
      "Keep clusters boring: autoscaling, backups, restores rehearsed",
      "Cut cloud spend without cutting reliability",
    ],
    brings: [
      "Terraform managed multi environment AWS",
      "Kubernetes in production with the scars to prove it",
      "Observability habit: dashboards before incidents",
    ],
  },
  {
    title: "UI/UX Designer",
    track: "Product · Brand",
    cat: "design",
    exp: "2 to 5 years",
    band: "₹8L to ₹16L",
    ctc: [8, 16],
    blurb: "Turn fuzzy briefs into systems: research, flows and interfaces that developers can build without guessing.",
    duties: [
      "Run discovery: interviews, flows and prototypes that survive contact with engineers",
      "Extend the design system across web and mobile surfaces",
      "Validate with users, not opinions",
    ],
    brings: [
      "A portfolio of shipped product work with your reasoning",
      "Figma fluency including variables and component libraries",
      "Writing that clarifies instead of decorates",
    ],
  },
];

/** Life at Savo stats (placeholders, update with real numbers). */
export const TEAM_STATS = [
  { v: "42", l: "engineers and designers" },
  { v: "11", l: "years shipping software" },
  { v: "92%", l: "team retention" },
  { v: "4.9", l: "internal eNPS score" },
];
