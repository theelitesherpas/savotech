import Link from "next/link";

/* ------------------------------------------------------------------ */
/* shared icon set (line style, 24 grid, currentColor)                */
/* ------------------------------------------------------------------ */
type Tech = { n: string; i: string };

/* ------------------------------------------------------------------ */
/* per service content                                                */
/* ------------------------------------------------------------------ */
export type ServicePage = {
  slug: string;
  title: string;
  kicker: string;
  tagline: string;
  intro: string[];
  stats: { v: string; l: string }[];
  deliverables: { t: string; d: string }[];
  process: { t: string; d: string }[];
  stack: Tech[];
  tech: string[];
  portfolioCat: "web" | "mobile" | "ai";
  portfolio: { name: string; meta: string; img: string; stat: string }[];
  roles: { t: string; rate: number }[];
  faqs: { q: string; a: string }[];
  knowledge: { t: string; d: string; time: string }[];
  calc: { base: [number, number]; opts: { label: string; items: [string, number, number][] }[] };
};

export const SERVICES: ServicePage[] = [
  {
    slug: "web-development",
    title: "Web Development",
    kicker: "Service",
    tagline: "Web platforms built to carry real load.",
    intro: [
      "From marketing sites that convert to customer portals serving millions of sessions, we design and build web platforms on React, Next.js and Node.js with the performance budgets and accessibility standards your users expect.",
      "Every engagement ships with CI/CD, observability and documentation as standard, not as an afterthought.",
    ],
    stats: [
      { v: "120+", l: "web platforms shipped" },
      { v: "98", l: "avg Lighthouse score" },
      { v: "11 yrs", l: "average lead experience" },
    ],
    deliverables: [
      { t: "Progressive web apps", d: "Offline capable PWAs with app grade interactions and install prompts that actually get used." },
      { t: "Customer portals", d: "Secure, role aware portals for your users, partners and internal teams, wired to your systems." },
      { t: "Headless commerce", d: "Storefronts on Next.js with CMS driven content, sub second page loads and conversion tracking." },
      { t: "APIs and integrations", d: "REST and GraphQL APIs, payment rails, CRM and ERP integrations with audit trails." },
    ],
    process: [
      { t: "Scope and architecture", d: "One week of discovery: information architecture, tech choices and a fixed milestone plan." },
      { t: "Design system first", d: "Components, tokens and accessibility baked in before feature sprints begin." },
      { t: "Weekly shipping", d: "Demo every Friday on a staging URL you can click, not a slide you can read." },
      { t: "Hardening and handover", d: "Load tests, security review, documentation and a team that stays on support." },
    ],
    stack: [
      { n: "React", i: "react" }, { n: "Next.js", i: "next" }, { n: "TypeScript", i: "ts" },
      { n: "Node.js", i: "node" }, { n: "PostgreSQL", i: "postgres" }, { n: "GraphQL", i: "graphql" },
      { n: "Redis", i: "redis" }, { n: "AWS", i: "aws" },
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "GraphQL", "Redis", "Prisma", "Tailwind", "Playwright", "Vercel", "AWS"],
    portfolioCat: "web",
    portfolio: [
      { name: "MediBridge Health", meta: "Patient portal · 40+ clinics", img: "/work/medibridge.jpg", stat: "40+ clinics live" },
      { name: "ClearLedger", meta: "SME banking dashboard · UK", img: "/work/clearledger.jpg", stat: "Open banking ready" },
      { name: "EduSpring", meta: "Learning platform · India", img: "/work/eduspring.jpg", stat: "200k students" },
    ],
    roles: [
      { t: "Frontend Engineer (React)", rate: 85000 },
      { t: "Full Stack Engineer", rate: 95000 },
      { t: "QA Automation Engineer", rate: 60000 },
    ],
    faqs: [
      { q: "How fast can we start?", a: "A scoped team can start within two weeks of a signed proposal. Discovery begins even earlier if you need it." },
      { q: "Do you work with our existing codebase?", a: "Yes. Roughly half our web engagements begin with an audit of an existing React or legacy codebase, followed by incremental modernization rather than a risky rewrite." },
      { q: "Who owns the code?", a: "You do, from the first commit. Repos live in your organization with full commit history and documentation." },
      { q: "What does a typical platform cost?", a: "Most web platforms land between ₹8L and ₹40L depending on breadth. The calculator below gives a tailored range in under a minute." },
    ],
    knowledge: [
      { t: "Choosing between SSR, SSG and CSR in 2026", d: "A practical decision framework based on content volatility, SEO needs and auth patterns.", time: "8 min read" },
      { t: "Core Web Vitals: the budget we ship with", d: "The exact performance budgets in every Savo web proposal and how we enforce them in CI.", time: "6 min read" },
      { t: "Headless commerce in India: GST, UPI and beyond", d: "Lessons from payment integrations across Indian and GCC storefronts.", time: "10 min read" },
    ],
    calc: {
      base: [800000, 1200000],
      opts: [
        { label: "Platform size", items: [["Marketing site", 0.4, 0.5], ["Customer portal", 1, 1], ["Complex platform", 1.6, 1.9]] },
        { label: "Integrations", items: [["None", 0.9, 0.95], ["Payments or auth", 1, 1.1], ["Multiple (CRM, ERP, AI)", 1.25, 1.45]] },
        { label: "Timeline", items: [["Flexible", 0.9, 0.95], ["Standard", 1, 1], ["Urgent", 1.25, 1.35]] },
      ],
    },
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    kicker: "Service",
    tagline: "Apps people keep on their home screen.",
    intro: [
      "Native quality iOS and Android apps from one codebase: React Native and Flutter for product velocity, Swift and Kotlin where the hardware demands it. Store releases weekly, crash free sessions above 99.5.",
      "From fintech wallets used across the GCC to logistics apps tracking 12,000 vehicles, our mobile work survives real users at scale.",
    ],
    stats: [
      { v: "60+", l: "apps on the stores" },
      { v: "99.5%", l: "crash free sessions" },
      { v: "4.7★", l: "average store rating" },
    ],
    deliverables: [
      { t: "Cross platform apps", d: "React Native and Flutter apps sharing one team, one roadmap and 95% code reuse." },
      { t: "Native modules", d: "Swift and Kotlin for camera, payments, BLE and background services that must be perfect." },
      { t: "Offline first sync", d: "Conflict aware data sync so field teams keep working through dead zones." },
      { t: "Store operations", d: "Release trains, phased rollouts, review handling and ASO as a managed service." },
    ],
    process: [
      { t: "Product workshop", d: "Flows, platform choices and a clickable prototype in two weeks." },
      { t: "Design system on device", d: "Native components tuned for each platform, tested on real hardware." },
      { t: "Weekly store builds", d: "TestFlight and Play internal tracks updated every sprint." },
      { t: "Launch and growth", d: "Phased rollout, analytics review and iteration cycles post launch." },
    ],
    stack: [
      { n: "React Native", i: "react" }, { n: "Flutter", i: "flutter" }, { n: "Swift", i: "swift" },
      { n: "Kotlin", i: "kotlin" }, { n: "Firebase", i: "firebase" }, { n: "Node.js", i: "node" },
      { n: "PostgreSQL", i: "postgres" }, { n: "AWS", i: "aws" },
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase", "Realm", "Fastlane", "Detox", "App Store Connect", "Play Console"],
    portfolioCat: "mobile",
    portfolio: [
      { name: "GulfPay", meta: "GCC digital wallet", img: "/work/gulfpay.jpg", stat: "PCI DSS ready" },
      { name: "RideLink", meta: "Fleet tracking · Australia", img: "/work/ridelink.jpg", stat: "12k vehicles tracked" },
    ],
    roles: [
      { t: "Mobile Engineer (RN)", rate: 90000 },
      { t: "Flutter Engineer", rate: 90000 },
      { t: "Backend Engineer", rate: 85000 },
    ],
    faqs: [
      { q: "React Native, Flutter or native?", a: "We recommend based on your product: cross platform for most business apps, native when heavy camera, AR or OS level integration dominates. The workshop settles it with evidence, not preference." },
      { q: "Do you handle store approvals?", a: "Yes, end to end: listings, screenshots, review responses and phased rollouts on both stores." },
      { q: "Can you rescue an existing app?", a: "Frequently. We start with a crash and dependency audit, then stabilize, modernize and resume weekly releases." },
      { q: "How do you test on real devices?", a: "A device lab covering the popular Indian, GCC and western models, plus automated suites on Firebase Test Lab." },
    ],
    knowledge: [
      { t: "React Native vs Flutter in 2026: an honest scorecard", d: "Performance, hiring, ecosystem and migration costs, judged on client projects not demos.", time: "9 min read" },
      { t: "Getting through App Store review, first time", d: "The checklist our releases run before submission, built from 200+ approvals.", time: "5 min read" },
      { t: "Offline first architecture that survives bad networks", d: "Sync engines, conflict resolution and queue design for field apps.", time: "11 min read" },
    ],
    calc: {
      base: [900000, 1400000],
      opts: [
        { label: "Platforms", items: [["Single platform", 0.7, 0.75], ["iOS and Android", 1, 1]] },
        { label: "App complexity", items: [["Standard business app", 0.9, 1], ["Commerce or fintech", 1.2, 1.4], ["Heavy native (camera, BLE, AR)", 1.5, 1.8]] },
        { label: "Timeline", items: [["Flexible", 0.9, 0.95], ["Standard", 1, 1], ["Urgent", 1.25, 1.35]] },
      ],
    },
  },
  {
    slug: "ui-ux",
    title: "UI/UX Design",
    kicker: "Service",
    tagline: "Interfaces developers can build without guessing.",
    intro: [
      "Research driven product design that ends the ping pong between design and engineering: systems, tokens and specs your team can implement directly, validated with real users before a line of code ships.",
      "From zero to one products to design system overhauls for scaleups, our designers work inside the delivery team, not ahead of it.",
    ],
    stats: [
      { v: "300+", l: "product surfaces designed" },
      { v: "38%", l: "avg conversion lift after redesign" },
      { v: "AA", l: "accessibility as default" },
    ],
    deliverables: [
      { t: "Product discovery", d: "User interviews, journey mapping and clickable prototypes that de risk the roadmap." },
      { t: "Design systems", d: "Figma libraries with variables, tokens and documentation that engineering actually adopts." },
      { t: "Web and mobile UI", d: "Screen by screen specs, states and edge cases, handed over with a working component kit." },
      { t: "Brand identity", d: "Logo, type and color systems for products that need to look like a business, not a template." },
    ],
    process: [
      { t: "Research sprint", d: "One week of interviews and analytics to find what users actually struggle with." },
      { t: "Flows and wireframes", d: "Structure before polish: flows validated with users in low fidelity." },
      { t: "System and screens", d: "The design system grows with every screen, keeping velocity high late in the project." },
      { t: "Dev handover", d: "Tokens, specs and a component review cadence until the build matches the intent." },
    ],
    stack: [
      { n: "Figma", i: "figma" }, { n: "Design tokens", i: "figmaSimple" }, { n: "Storybook", i: "ts" },
      { n: "Maze", i: "ai" }, { n: "WebAIM", i: "figmaSimple" }, { n: "React", i: "react" },
    ],
    tech: ["Figma", "Design tokens", "Storybook", "Maze", "Hotjar", "WCAG 2.2", "Framer", "Rive", "Lottie"],
    portfolioCat: "web",
    portfolio: [
      { name: "Sahm AI Support Desk", meta: "Conversational UX · Telecom", img: "/work/sahm.jpg", stat: "96% auto-resolved" },
      { name: "MediBridge Health", meta: "Clinical interface design", img: "/work/medibridge.jpg", stat: "40+ clinics live" },
    ],
    roles: [
      { t: "Product Designer", rate: 70000 },
      { t: "UX Researcher", rate: 65000 },
      { t: "Design Systems Lead", rate: 90000 },
    ],
    faqs: [
      { q: "Do you design and build?", a: "Both. Roughly 70% of our design engagements continue into the build with the same team, which is why our specs are so implementable." },
      { q: "Can you work inside our existing design system?", a: "Yes. We extend tokens and components in place, respecting your governance instead of starting over." },
      { q: "How do you test with users?", a: "Moderated interviews and unmoderated Maze tests with your target segments, plus accessibility audits against WCAG 2.2 AA." },
      { q: "What does a design system engagement look like?", a: "A six to ten week arc: audit, tokens, core components, documentation and a handover cadence with your engineers." },
    ],
    knowledge: [
      { t: "The design token structure we use on every product", d: "Naming, tiers and dark mode strategy that survives three years of growth.", time: "7 min read" },
      { t: "WCAG 2.2 in practice: the checks we automate", d: "Contrast, targets, focus and reduced motion, wired into CI so nothing regresses.", time: "6 min read" },
      { t: "Prototyping in Figma that engineers love", d: "Auto layout discipline, variables and spec pages that remove questions.", time: "5 min read" },
    ],
    calc: {
      base: [400000, 700000],
      opts: [
        { label: "Scope", items: [["Redesign of key flows", 0.6, 0.7], ["Full product design", 1, 1], ["Design system build", 1.1, 1.3]] },
        { label: "Research", items: [["Light (analytics + heuristic)", 0.85, 0.9], ["Moderated user research", 1, 1.1]] },
        { label: "Platforms", items: [["Web only", 0.9, 0.95], ["Web and mobile", 1.1, 1.25]] },
      ],
    },
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    kicker: "Service",
    tagline: "Boring infrastructure, in the best way.",
    intro: [
      "Zero drama AWS and Kubernetes operations: infrastructure as code, pipelines that deploy on merge, observability that catches issues before customers do, and cloud bills that shrink instead of creep.",
      "We run, harden and hand over the platforms our client products live on, with SLAs your business can rely on.",
    ],
    stats: [
      { v: "99.98%", l: "managed uptime" },
      { v: "11 min", l: "median deploy time" },
      { v: "31%", l: "avg cloud cost saved" },
    ],
    deliverables: [
      { t: "Landing zones", d: "Secure multi account AWS foundations with networking, IAM and guardrails from day one." },
      { t: "Kubernetes operations", d: "EKS clusters with autoscaling, backups and rehearsed restores, monitored around the clock." },
      { t: "CI/CD pipelines", d: "Trunk based flows with preview environments, automated tests and one click rollbacks." },
      { t: "FinOps", d: "Right sizing, reserved capacity and tagging discipline that returns budget to your roadmap." },
    ],
    process: [
      { t: "Audit week", d: "Security, cost and reliability reviewed against a 200 point checklist." },
      { t: "Foundation as code", d: "Terraform modules for accounts, clusters and pipelines, peer reviewed like product code." },
      { t: "Migration", d: "Workloads moved with traffic shifting and rollback plans at every step." },
      { t: "Run and handover", d: "On call, runbooks and training until your team can operate it, or we keep operating it." },
    ],
    stack: [
      { n: "AWS", i: "aws" }, { n: "Kubernetes", i: "k8s" }, { n: "Docker", i: "docker" },
      { n: "Terraform", i: "terraform" }, { n: "Node.js", i: "node" }, { n: "Python", i: "python" },
      { n: "PostgreSQL", i: "postgres" }, { n: "Redis", i: "redis" },
    ],
    tech: ["AWS", "EKS", "Kubernetes", "Terraform", "Docker", "ArgoCD", "GitHub Actions", "Grafana", "Prometheus", "Loki", "Vault", "Cloudflare"],
    portfolioCat: "web",
    portfolio: [
      { name: "GulfPay", meta: "PCI DSS infrastructure · GCC", img: "/work/gulfpay.jpg", stat: "PCI DSS ready" },
      { name: "RideLink", meta: "Realtime fleet platform · Australia", img: "/work/ridelink.jpg", stat: "12k vehicles tracked" },
    ],
    roles: [
      { t: "DevOps Engineer", rate: 95000 },
      { t: "SRE", rate: 105000 },
      { t: "Platform Engineer", rate: 100000 },
    ],
    faqs: [
      { q: "Can you take over an existing setup?", a: "That is most of our work. We audit first, stabilize second, then improve incrementally with no big bang migrations." },
      { q: "Which clouds do you support?", a: "AWS is our home ground. We also operate on GCP and Azure where client policy requires it." },
      { q: "Do you offer on call?", a: "Yes, with defined SLAs and runbooks. Alerts reach engineers who built the system, not a rotation reading a wiki." },
      { q: "How fast are cost savings visible?", a: "Right sizing and reserved capacity typically show in the first full billing cycle, often 20 to 35%." },
    ],
    knowledge: [
      { t: "The 200 point AWS audit we run before touching anything", d: "Security groups, IAM trust, backups and cost traps, and how we prioritize findings.", time: "12 min read" },
      { t: "Kubernetes you can sleep on", d: "Resource budgets, PDBs and restore drills that make 3am pages rare.", time: "9 min read" },
      { t: "FinOps for scaleups: the first 90 days", d: "Tagging, right sizing and commitment strategy in order of payoff.", time: "7 min read" },
    ],
    calc: {
      base: [500000, 900000],
      opts: [
        { label: "Engagement", items: [["Audit and roadmap", 0.3, 0.4], ["Foundation build", 1, 1], ["Full migration", 1.4, 1.7]] },
        { label: "Environment scale", items: [["Single environment", 0.8, 0.9], ["Multi environment + staging", 1, 1.15]] },
        { label: "Managed on call", items: [["No", 0.9, 0.95], ["Business hours", 1, 1.1], ["24x7 SLA", 1.35, 1.5]] },
      ],
    },
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    kicker: "Service",
    tagline: "Decisions your whole team can defend.",
    intro: [
      "Pipelines, warehouses and dashboards that turn scattered data into one version of the truth: event capture done right, dbt modelled warehouses, and BI your leaders actually open every morning.",
      "We also build the machine learning layer on top: forecasting, segmentation and the AI features your product roadmap keeps asking for.",
    ],
    stats: [
      { v: "2.1B", l: "events processed monthly" },
      { v: "14", l: "warehouses in production" },
      { v: "6 hrs", l: "avg reporting time saved weekly" },
    ],
    deliverables: [
      { t: "Data pipelines", d: "Streaming and batch ETL with schema contracts, tests and lineage from source to dashboard." },
      { t: "Warehouse modelling", d: "dbt layers on Snowflake, BigQuery or Redshift with documented, tested models." },
      { t: "BI and self serve", d: "Metric definitions your finance team signs off on, dashboards executives read without training." },
      { t: "ML in production", d: "Forecasting, recommendations and anomaly detection shipped as monitored services, not notebooks." },
    ],
    process: [
      { t: "Data audit", d: "Sources, quality and definitions mapped in one week." },
      { t: "Pipeline foundation", d: "Ingestion, warehouse and dbt core, versioned and tested." },
      { t: "Metrics layer", d: "The 20 metrics that matter, defined once and reused everywhere." },
      { t: "Enablement", d: "Self serve training and docs so analysts stop queuing behind engineers." },
    ],
    stack: [
      { n: "Python", i: "python" }, { n: "PostgreSQL", i: "postgres" }, { n: "dbt", i: "ts" },
      { n: "GraphQL", i: "graphql" }, { n: "Redis", i: "redis" }, { n: "AWS", i: "aws" },
      { n: "AI / ML", i: "ai" }, { n: "Node.js", i: "node" },
    ],
    tech: ["Python", "dbt", "Airflow", "Kafka", "Snowflake", "BigQuery", "Redshift", "Metabase", "Looker", "Airbyte", "Pandas", "PyTorch"],
    portfolioCat: "ai",
    portfolio: [
      { name: "Sahm AI Support Desk", meta: "Analytics + AI · Telecom", img: "/work/sahm.jpg", stat: "96% auto-resolved" },
      { name: "ClearLedger", meta: "Cashflow analytics · UK", img: "/work/clearledger.jpg", stat: "Open banking ready" },
    ],
    roles: [
      { t: "Data Engineer", rate: 95000 },
      { t: "Analytics Engineer", rate: 85000 },
      { t: "ML Engineer", rate: 120000 },
    ],
    faqs: [
      { q: "We have data everywhere. Where do you start?", a: "With a one week audit that maps sources, quality and the decisions they should support. The first pipeline usually pays for the audit." },
      { q: "Which warehouse should we pick?", a: "We choose by workload and team: BigQuery for analytics heavy startups, Snowflake where governance scales, Redshift inside AWS shops. We model with dbt so switching later stays cheap." },
      { q: "Can you fix our dashboards nobody trusts?", a: "That is the metrics layer work: definitions agreed with finance and ops, tested in CI, one source of truth." },
      { q: "Do you do AI features too?", a: "Yes, from forecasting to RAG powered search, shipped as monitored production services with eval suites." },
    ],
    knowledge: [
      { t: "The dbt project layout that scales past 500 models", d: "Folder structure, testing tiers and documentation habits that keep speed high.", time: "8 min read" },
      { t: "Event tracking: the 12 events every product should capture", d: "A starter schema that answers growth questions before anyone asks them.", time: "6 min read" },
      { t: "From notebook to production ML in six weeks", d: "The path we use to ship first models with monitoring and evals.", time: "10 min read" },
    ],
    calc: {
      base: [600000, 1000000],
      opts: [
        { label: "Scope", items: [["Pipelines and warehouse", 1, 1], ["Add BI layer", 1.2, 1.35], ["Add ML feature", 1.5, 1.8]] },
        { label: "Data sources", items: [["1 to 3 sources", 0.9, 0.95], ["4 to 8 sources", 1, 1.15], ["8+ sources", 1.25, 1.4]] },
        { label: "Timeline", items: [["Flexible", 0.9, 0.95], ["Standard", 1, 1], ["Urgent", 1.2, 1.3]] },
      ],
    },
  },
];

export const CLIENT_QUOTES = [
  {
    quote: "Savo rebuilt our patient portal in four months. Uptime has been flawless. Their support agent now resolves 70% of tier 1 tickets before a human sees them.",
    name: "Dr. Reem Al Otaibi",
    role: "CIO · Healthcare group · Riyadh",
  },
  {
    quote: "The dedicated team model just works. Same engineers for two years running. They know our codebase better than we do.",
    name: "James Whitfield",
    role: "CTO · Logistics scaleup · Sydney",
  },
  {
    quote: "Transparent pricing, weekly demos, zero surprises. Their instant estimator quoted our build within 5% of the final invoice.",
    name: "Ananya Iyer",
    role: "VP Product · FinTech · Bengaluru",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export const HireLink = ({ children }: { children: React.ReactNode }) => (
  <Link href="/#hire" className="text-cta">{children}</Link>
);
