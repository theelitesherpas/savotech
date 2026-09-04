import type { ReactNode } from "react";

export type HireRole = {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  intro: string[];
  facts: { v: string; l: string }[];
  skills: { t: string; d: string }[];
  process: { t: string; d: string }[];
  stack: { n: string }[];
  tech: string[];
  monthly: number; // INR per month, dedicated senior
  portfolio: { name: string; meta: string; img: string; stat: string }[];
  why: { t: string; d: string }[];
  faqs: { q: string; a: string }[];
  knowledge: { t: string; d: string; time: string }[];
  photo: string; // image used on sibling cards
};

export const HIRE_ROLES: HireRole[] = [
  {
    slug: "ai-ml-engineers",
    title: "AI & ML Engineers",
    short: "AI & ML",
    tagline: "Hire AI & ML engineers who ship to production.",
    intro: [
      "Dedicated AI and ML engineers who have deployed agents, RAG systems and predictive models for healthcare, fintech and telecom products. Not researchers with notebooks, engineers with pager duty.",
      "Start with one engineer or a full pod: architect, engineer and data engineer working as your team, on your roadmap, in your standups.",
    ],
    facts: [
      { v: "2 weeks", l: "to a matched engineer" },
      { v: "Trial", l: "paid, cancel anytime" },
      { v: "Senior", l: "average 6+ years" },
    ],
    skills: [
      { t: "LLM applications", d: "Agents, RAG pipelines, evaluation suites and guardrails that survive real traffic." },
      { t: "Predictive models", d: "Forecasting, recommendation and anomaly models monitored in production." },
      { t: "Data engineering", d: "Pipelines and feature stores that feed models reliably, versioned like code." },
      { t: "MLOps", d: "Deployment, drift monitoring and retraining loops so models stay honest." },
    ],
    process: [
      { t: "Share your needs", d: "A 30 minute call to understand the role, stack and team fit." },
      { t: "Meet matched engineers", d: "We shortlist in 48 hours; you interview whoever you want." },
      { t: "Two week paid trial", d: "Work together on real tasks. Not a fit? Replace or walk away." },
      { t: "Onboard and scale", d: "Same engineers long term. Add or reduce with 30 days notice." },
    ],
    stack: [{ n: "Python" }, { n: "LangChain" }, { n: "PyTorch" }, { n: "pgvector" }, { n: "Airflow" }, { n: "MLflow" }, { n: "AWS" }, { n: "FastAPI" }],
    tech: ["Python", "LangChain", "LlamaIndex", "PyTorch", "scikit-learn", "pgvector", "Pinecone", "Airflow", "Feast", "MLflow", "FastAPI", "Docker", "AWS"],
    monthly: 120000,
    portfolio: [
      { name: "Sahm AI Support Desk", meta: "Arabic + English agent · GCC telecom", img: "/work/sahm.jpg", stat: "96% auto-resolved" },
      { name: "MediBridge Health", meta: "Clinical copilot · 40+ clinics", img: "/work/medibridge.jpg", stat: "70% tickets deflected" },
    ],
    why: [
      { t: "Production scars", d: "Our engineers have run models under real load, on call, for years. They design for failure from day one." },
      { t: "Business first", d: "Every model ties to a metric you track. No science projects on your budget." },
      { t: "Full stack around the model", d: "APIs, dashboards and integrations come from the same team, not a handoff." },
      { t: "Transparent rates", d: "One monthly rate per engineer. No recruitment fees, no benching charges, no surprises." },
    ],
    faqs: [
      { q: "How quickly can an AI engineer start?", a: "Typically within two weeks of your first call. Senior profiles are shared within 48 hours, and most clients interview the same week." },
      { q: "What if the engineer is not a good fit?", a: "The first two weeks are a paid trial. If the fit is wrong, we replace the engineer or you stop, no questions asked." },
      { q: "Do they work only for us?", a: "Yes. Dedicated means dedicated: your engineer works exclusively on your product, in your tools and standups." },
      { q: "Can we scale the team later?", a: "Any time. Add engineers with about two weeks notice, or reduce with 30 days notice." },
      { q: "Who owns the code and models?", a: "You do, from the first commit, including training code and evaluation sets." },
      { q: "What time zones do they work?", a: "Indian time with a minimum four hour overlap with your team, adjusted to your convenience." },
    ],
    knowledge: [
      { t: "Interview questions that actually filter AI engineers", d: "The ten questions we use before presenting any candidate.", time: "7 min read" },
      { t: "RAG or fine tune: what your project actually needs", d: "A costing lens for hiring the right specialisation.", time: "8 min read" },
      { t: "The first 30 days with a dedicated ML engineer", d: "How to onboard for momentum instead of orientation.", time: "6 min read" },
    ],
    photo: "/work/sahm.jpg",
  },
  {
    slug: "frontend-developers",
    title: "Frontend Developers",
    short: "Frontend",
    tagline: "Hire frontend developers who sweat the pixels.",
    intro: [
      "React and Next.js engineers who treat performance budgets, accessibility and design fidelity as non negotiable. They build design systems, not just screens.",
      "Embedded in your team from week one: your repo, your reviews, your Friday demos.",
    ],
    facts: [
      { v: "2 weeks", l: "to a matched developer" },
      { v: "98", l: "avg Lighthouse score" },
      { v: "WCAG AA", l: "accessibility by default" },
    ],
    skills: [
      { t: "React and Next.js", d: "App router, SSR, edge rendering and migrations from legacy React." },
      { t: "Design systems", d: "Component libraries, tokens and Storybook docs your whole team uses." },
      { t: "Performance", d: "Core Web Vitals budgets enforced in CI, not aspirational." },
      { t: "Accessibility", d: "WCAG 2.2 AA as a habit: keyboard, screen readers, reduced motion." },
    ],
    process: [
      { t: "Share your needs", d: "Stack, product area and the collaboration model you prefer." },
      { t: "Meet matched developers", d: "Shortlist in 48 hours with code samples and project history." },
      { t: "Two week paid trial", d: "Real tickets, real reviews. Keep or replace, your call." },
      { t: "Onboard and scale", d: "Long term dedication with the flexibility to resize." },
    ],
    stack: [{ n: "React" }, { n: "Next.js" }, { n: "TypeScript" }, { n: "Tailwind" }, { n: "Storybook" }, { n: "Playwright" }, { n: "Vercel" }, { n: "Figma" }],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Zustand", "GraphQL", "Storybook", "Jest", "Playwright", "Vercel", "Figma"],
    monthly: 85000,
    portfolio: [
      { name: "MediBridge Health", meta: "Patient portal · 40+ clinics", img: "/work/medibridge.jpg", stat: "40+ clinics live" },
      { name: "ClearLedger", meta: "Banking dashboard · UK", img: "/work/clearledger.jpg", stat: "Open banking ready" },
    ],
    why: [
      { t: "Design empathy", d: "They read Figma like engineers and argue for the user, not the framework." },
      { t: "Performance culture", d: "Budgets in CI, real device testing, no regressions shipped." },
      { t: "Senior by default", d: "Every profile we send has shipped and maintained production UI at scale." },
      { t: "Transparent rates", d: "One monthly rate. No recruiter cut stacked on top." },
    ],
    faqs: [
      { q: "Can they work in our existing codebase?", a: "That is the norm. Most engagements start inside an existing React or Next.js app, including older architectures we modernise incrementally." },
      { q: "How do you test their skills?", a: "Every candidate passes a practical review with our leads: architecture, debugging and a live component build before you ever see the profile." },
      { q: "What if we need a designer too?", a: "We can pair the developer with a product designer from our team on the same monthly model." },
      { q: "Do they join our standups and tools?", a: "Yes: Slack, Jira, GitHub, rituals. They behave like your employee, just on our payroll." },
      { q: "Can we hire them full time later?", a: "Yes, convert to your payroll after six months with a simple conversion fee." },
      { q: "What does the trial cost?", a: "The trial is the normal monthly rate, pro rated for two weeks. Cancel and pay nothing more if it is not working." },
    ],
    knowledge: [
      { t: "Reviewing a frontend developer in 45 minutes", d: "The exact code review exercise we run before shortlisting.", time: "6 min read" },
      { t: "Design systems that survive reorgs", d: "Tokens, governance and docs that keep a system alive.", time: "8 min read" },
      { t: "Core Web Vitals for product managers", d: "What the numbers mean and when to care, minus the jargon.", time: "5 min read" },
    ],
    photo: "/work/medibridge.jpg",
  },
  {
    slug: "backend-developers",
    title: "Backend Developers",
    short: "Backend",
    tagline: "Hire backend developers who build for the worst day.",
    intro: [
      "Node.js, Python and Go engineers designing APIs, data models and integrations that hold up under load and audit. Security minded, test obsessed, documentation friendly.",
      "From payment rails to clinical records, they have carried regulated traffic for years.",
    ],
    facts: [
      { v: "99.98%", l: "uptime our teams maintain" },
      { v: "PCI/HIPAA", l: "regulated experience" },
      { v: "TDD", l: "tests as a habit" },
    ],
    skills: [
      { t: "APIs and services", d: "REST and GraphQL design, versioning, and docs other teams enjoy." },
      { t: "Data modelling", d: "PostgreSQL and NoSQL schemas tuned for real access patterns." },
      { t: "Integrations", d: "Payments, CRMs, ERPs and third party APIs with retries and audit trails." },
      { t: "Security", d: "Auth, least privilege, encryption and the boring hygiene that prevents incidents." },
    ],
    process: [
      { t: "Share your needs", d: "Workload, stack and the compliance context, if any." },
      { t: "Meet matched developers", d: "Shortlist in 48 hours with architecture samples." },
      { t: "Two week paid trial", d: "Ship a real slice with your team reviewing every PR." },
      { t: "Onboard and scale", d: "Grow into a pod with a lead when you are ready." },
    ],
    stack: [{ n: "Node.js" }, { n: "Python" }, { n: "PostgreSQL" }, { n: "Redis" }, { n: "GraphQL" }, { n: "Docker" }, { n: "AWS" }, { n: "Terraform" }],
    tech: ["Node.js", "TypeScript", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "Kafka", "GraphQL", "gRPC", "Docker", "Kubernetes", "AWS", "Terraform"],
    monthly: 90000,
    portfolio: [
      { name: "GulfPay", meta: "Payments platform · GCC", img: "/work/gulfpay.jpg", stat: "PCI DSS ready" },
      { name: "MediBridge Health", meta: "Clinical systems · 40+ clinics", img: "/work/medibridge.jpg", stat: "40+ clinics live" },
    ],
    why: [
      { t: "Regulated experience", d: "PCI, HIPAA aligned and GDPR ready. They know what auditors ask." },
      { t: "Boring reliability", d: "Backups, restores rehearsed, dashboards before incidents." },
      { t: "Clear writing", d: "Design docs and runbooks your next hire can follow." },
      { t: "Transparent rates", d: "One monthly rate per engineer, however hairy the problem." },
    ],
    faqs: [
      { q: "Which backend stacks do you cover?", a: "Primarily Node.js, Python and Go with PostgreSQL. If your stack differs, tell us: we will say no honestly if we cannot staff it well." },
      { q: "Can they take over an existing service?", a: "Yes. Most engagements begin with a knowledge transfer week and a stabilisation plan before new features." },
      { q: "Do they do DevOps too?", a: "Basic deployment and monitoring, yes. Dedicated infrastructure work is better staffed with our DevOps engineers on the same model." },
      { q: "How is my data kept safe?", a: "Engineers work in your infrastructure with least privilege access, NDA signed, and access revoked the day an engagement ends." },
      { q: "What hours do they work?", a: "Indian working hours with at least four hours of overlap with your team, adjustable by agreement." },
      { q: "Can we start with one and grow?", a: "Most clients do. One engineer proving the model, then a pod of three to five within a quarter." },
    ],
    knowledge: [
      { t: "The backend handover checklist we run", d: "How an engineer inherits a service without sleepless nights.", time: "7 min read" },
      { t: "API versioning without regrets", d: "Patterns that keep clients happy for years.", time: "6 min read" },
      { t: "What a fair SLA looks like", d: "Setting reliability targets your business can afford.", time: "5 min read" },
    ],
    photo: "/work/gulfpay.jpg",
  },
  {
    slug: "full-stack-developers",
    title: "Full Stack Developers",
    short: "Full Stack",
    tagline: "Hire full stack developers who own features end to end.",
    intro: [
      "Product minded engineers comfortable from the database to the pixel: React on the front, Node or Python behind, PostgreSQL underneath, deployed on AWS.",
      "Ideal when you need one person who can carry a feature from ticket to production without waiting on three specialists.",
    ],
    facts: [
      { v: "1 person", l: "whole feature, end to end" },
      { v: "6+ yrs", l: "average experience" },
      { v: "Trial", l: "two weeks, cancel anytime" },
    ],
    skills: [
      { t: "Feature ownership", d: "From acceptance criteria to deploy button, including tests and docs." },
      { t: "Modern web stack", d: "Next.js, TypeScript, Node APIs and PostgreSQL schemas in one head." },
      { t: "Cloud deployment", d: "CI/CD, environments and monitoring set up and maintained." },
      { t: "Product judgment", d: "They ask why, propose simpler paths and flag risks early." },
    ],
    process: [
      { t: "Share your needs", d: "Product area, stack depth needed front versus back." },
      { t: "Meet matched developers", d: "Shortlist in 48 hours, full stack profiles with shipped products." },
      { t: "Two week paid trial", d: "One real feature slice, reviewed by your lead." },
      { t: "Onboard and scale", d: "Add specialists around them as the product grows." },
    ],
    stack: [{ n: "React" }, { n: "Next.js" }, { n: "Node.js" }, { n: "TypeScript" }, { n: "PostgreSQL" }, { n: "Docker" }, { n: "AWS" }, { n: "Playwright" }],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Express", "NestJS", "PostgreSQL", "Prisma", "Redis", "Docker", "AWS", "Playwright"],
    monthly: 95000,
    portfolio: [
      { name: "ClearLedger", meta: "Full product build · UK fintech", img: "/work/clearledger.jpg", stat: "Open banking ready" },
      { name: "EduSpring", meta: "Learning platform · India", img: "/work/eduspring.jpg", stat: "200k students" },
    ],
    why: [
      { t: "Fewer handoffs", d: "One owner per feature means fewer meetings and faster Fridays." },
      { t: "Startup velocity", d: "Built for zero to one phases where breadth beats depth." },
      { t: "Senior judgment", d: "They scope honestly and push back with alternatives, not excuses." },
      { t: "Transparent rates", d: "One monthly rate, however wide the stack." },
    ],
    faqs: [
      { q: "Is full stack a jack of all trades?", a: "Ours are senior engineers who chose breadth. Each also has a deep specialism, front or back, which we match to where your work is heavier." },
      { q: "Can they lead a small team?", a: "Yes. Several of our full stack engineers run pods of two to four as tech leads." },
      { q: "What if we need deeper expertise later?", a: "Add a specialist, frontend or backend or DevOps, alongside them on the same model. The full stacker becomes the glue." },
      { q: "How do you ensure code quality?", a: "Your reviews, our internal standards, automated tests and CI. Every engineer also has a Savo lead they can pull in for second opinions." },
      { q: "Can they work directly with our designer?", a: "Daily if needed. Our engineers are used to pairing with designers in Figma." },
      { q: "What does it cost to stop?", a: "Thirty days notice. No exit fees, no buyouts, and all work product is yours." },
    ],
    knowledge: [
      { t: "When to hire full stack versus specialists", d: "A simple decision guide based on product stage.", time: "6 min read" },
      { t: "The two week trial, done right", d: "How to structure a trial that predicts the next year.", time: "7 min read" },
      { t: "One repo or many for small teams", d: "Monorepo trade offs from teams of three.", time: "8 min read" },
    ],
    photo: "/work/clearledger.jpg",
  },
  {
    slug: "mobile-developers",
    title: "Mobile Developers",
    short: "Mobile",
    tagline: "Hire mobile developers who ship weekly.",
    intro: [
      "React Native and Flutter engineers, with Swift and Kotlin native specialists when the hardware demands it. Weekly store builds, crash free rates above 99.5.",
      "They have shipped fintech wallets, logistics trackers and healthcare apps used across India, the GCC and beyond.",
    ],
    facts: [
      { v: "99.5%", l: "crash free sessions" },
      { v: "Weekly", l: "store releases" },
      { v: "4.7★", l: "average app rating" },
    ],
    skills: [
      { t: "Cross platform", d: "React Native and Flutter apps with native quality and 95% shared code." },
      { t: "Native modules", d: "Swift and Kotlin for camera, payments, BLE and background work." },
      { t: "Offline first", d: "Sync engines that survive dead zones and bad networks." },
      { t: "Store operations", d: "Release trains, phased rollouts, review handling and ASO." },
    ],
    process: [
      { t: "Share your needs", d: "Platform, app stage and whether native depth is required." },
      { t: "Meet matched developers", d: "Shortlist in 48 hours with store links they shipped." },
      { t: "Two week paid trial", d: "Build on your TestFlight or Play track with your team." },
      { t: "Onboard and scale", d: "Add a designer or backend engineer around them as needed." },
    ],
    stack: [{ n: "React Native" }, { n: "Flutter" }, { n: "Swift" }, { n: "Kotlin" }, { n: "Firebase" }, { n: "Fastlane" }, { n: "Detox" }, { n: "Node.js" }],
    tech: ["React Native", "Flutter", "Expo", "Swift", "Kotlin", "Firebase", "Realm", "SQLite", "Fastlane", "Detox", "App Store Connect", "Play Console"],
    monthly: 90000,
    portfolio: [
      { name: "GulfPay", meta: "GCC digital wallet", img: "/work/gulfpay.jpg", stat: "PCI DSS ready" },
      { name: "RideLink", meta: "Fleet tracking · Australia", img: "/work/ridelink.jpg", stat: "12k vehicles tracked" },
    ],
    why: [
      { t: "Real device discipline", d: "A device lab across Indian, GCC and western models, not just emulators." },
      { t: "Store veterans", d: "Hundreds of approvals navigated, including fintech scrutiny." },
      { t: "Backend fluent", d: "They speak APIs, auth and push infrastructure natively." },
      { t: "Transparent rates", d: "One monthly rate per engineer, platform agnostic." },
    ],
    faqs: [
      { q: "React Native, Flutter or native?", a: "Depends on your product. We staff all three and recommend honestly, including a hybrid where only some screens go native." },
      { q: "Can they rescue an existing app?", a: "Frequently. Crash and dependency audit first, then stabilise, modernise and resume weekly releases." },
      { q: "Do they handle store approvals?", a: "Yes: listings, metadata, screenshots, review responses and phased rollouts on both stores." },
      { q: "How do you test on real devices?", a: "Our device lab plus automated suites on Firebase Test Lab covering your key markets." },
      { q: "Can one developer cover both platforms?", a: "With React Native or Flutter, yes, that is the point. Pure native needs two specialists, which we also staff." },
      { q: "What if the app needs a backend too?", a: "Pair them with a backend engineer from our team on the same monthly model." },
    ],
    knowledge: [
      { t: "Choosing between RN and Flutter in 2026", d: "An honest scorecard from shipped apps, not conference talks.", time: "9 min read" },
      { t: "Getting through App Store review first time", d: "The checklist behind 200+ clean approvals.", time: "5 min read" },
      { t: "Offline first that actually syncs", d: "Conflict resolution patterns for field apps.", time: "11 min read" },
    ],
    photo: "/work/ridelink.jpg",
  },
  {
    slug: "devops-qa-engineers",
    title: "DevOps & QA Engineers",
    short: "DevOps & QA",
    tagline: "Hire DevOps and QA engineers who delete 3am pages.",
    intro: [
      "Infrastructure as code, pipelines that deploy on merge, and test suites that catch regressions before your users do. Our DevOps and QA engineers make releases boring.",
      "From AWS landing zones to Playwright farms, they build the machinery your product ships on.",
    ],
    facts: [
      { v: "31%", l: "avg cloud cost saved" },
      { v: "11 min", l: "median deploy time" },
      { v: "99.98%", l: "uptime maintained" },
    ],
    skills: [
      { t: "Infrastructure as code", d: "Terraform managed AWS accounts, peer reviewed like product code." },
      { t: "CI/CD pipelines", d: "Trunk based flows, preview environments, one click rollbacks." },
      { t: "Test automation", d: "Playwright and Detox suites wired into CI with flake control." },
      { t: "Observability", d: "Dashboards, alerts and runbooks tuned to your SLAs." },
    ],
    process: [
      { t: "Share your needs", d: "Cloud, pain points and where releases hurt today." },
      { t: "Meet matched engineers", d: "Shortlist in 48 hours with systems they run today." },
      { t: "Two week paid trial", d: "Fix one real pipeline or build one real test suite." },
      { t: "Onboard and scale", d: "Keep them on retainer or hand over with full runbooks." },
    ],
    stack: [{ n: "AWS" }, { n: "Kubernetes" }, { n: "Terraform" }, { n: "Docker" }, { n: "GitHub Actions" }, { n: "ArgoCD" }, { n: "Playwright" }, { n: "Grafana" }],
    tech: ["AWS", "GCP", "Kubernetes", "Terraform", "Docker", "ArgoCD", "GitHub Actions", "Grafana", "Prometheus", "Loki", "Playwright", "k6", "Cloudflare"],
    monthly: 95000,
    portfolio: [
      { name: "GulfPay", meta: "PCI DSS infrastructure · GCC", img: "/work/gulfpay.jpg", stat: "PCI DSS ready" },
      { name: "RideLink", meta: "Realtime fleet platform · Australia", img: "/work/ridelink.jpg", stat: "12k vehicles tracked" },
    ],
    why: [
      { t: "Audit ready", d: "PCI and SOC experience: guardrails, evidence and documentation built in." },
      { t: "Cost hunters", d: "Right sizing and commitment strategy that pays for the engagement." },
      { t: "Quality gates", d: "Tests that gate releases, not decorate them." },
      { t: "Transparent rates", d: "One monthly rate, on call optional and clearly priced." },
    ],
    faqs: [
      { q: "Can they take over our existing setup?", a: "That is most of the work: audit, stabilise, improve incrementally. No big bang migrations unless truly needed." },
      { q: "Do you offer on call?", a: "Yes, with defined SLAs and runbooks, priced transparently on top of the monthly rate." },
      { q: "Which clouds do you support?", a: "AWS is home ground; we also run GCP and Azure where policy requires." },
      { q: "Is QA a separate engineer?", a: "You can hire pure QA automation, pure DevOps, or one engineer covering both for smaller setups." },
      { q: "How fast are cost savings visible?", a: "Right sizing and reserved capacity usually show in the first billing cycle, often 20 to 35%." },
      { q: "What happens when they leave?", a: "Everything is code and documented: runbooks, diagrams and a proper handover are part of the engagement, not extras." },
    ],
    knowledge: [
      { t: "The 200 point AWS audit we run", d: "What we check before touching any new environment.", time: "12 min read" },
      { t: "Test suites without flakes", d: "Quarantine patterns that keep CI trustworthy.", time: "7 min read" },
      { t: "FinOps for scaleups", d: "The first 90 days of cloud cost discipline.", time: "7 min read" },
    ],
    photo: "/work/eduspring.jpg",
  },
];

export function getHireRole(slug: string) {
  return HIRE_ROLES.find((r) => r.slug === slug);
}

export type { ReactNode };
