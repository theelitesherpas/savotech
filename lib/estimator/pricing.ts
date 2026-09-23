/**
 * Instant Estimator — pricing model.
 *
 * Single source of truth for the estimator's business rules: option
 * definitions, INR price anchors and the range computation. The UI
 * (components/estimator.tsx) renders these definitions and submits
 * `computeEstimate()` results with the lead; unit tests pin the maths.
 */

/* ----------------------------- pricing anchors ----------------------------- */
/* All amounts are INR. Transparent "affordable premium" positioning. */

export type ServiceKey = "ai" | "web" | "mobile" | "software" | "cloud" | "data" | "uiux" | "marketing" | "qa";
export type TypeKey = "new" | "redesign" | "mvp" | "enterprise";
export type ComplexityKey = "lean" | "standard" | "complex";
export type TimelineKey = "flexible" | "standard" | "urgent";
export type RoleKey = "pm" | "designer" | "devs" | "ai" | "qa" | "devops";

const SERVICE_COST: Record<ServiceKey, number> = {
  ai: 500000,
  web: 250000,
  mobile: 350000,
  software: 400000,
  cloud: 150000,
  data: 200000,
  uiux: 100000,
  marketing: 80000,
  qa: 60000,
};

const TYPE_MULT: Record<TypeKey, number> = { new: 1, redesign: 0.6, mvp: 0.7, enterprise: 1.6 };
const COMPLEXITY_MULT: Record<ComplexityKey, number> = { lean: 0.7, standard: 1, complex: 1.6 };
const TIMELINE_MULT: Record<TimelineKey, number> = { flexible: 0.95, standard: 1, urgent: 1.3 };
const COMPLEXITY_MONTHS: Record<ComplexityKey, number> = { lean: 2, standard: 4, complex: 7 };

const ROLE_MONTHLY: Record<RoleKey, number> = {
  pm: 100000,
  designer: 70000,
  devs: 85000,
  ai: 120000,
  qa: 60000,
  devops: 95000,
};

/** Floor for any estimate — below this a project is not viable for the studio. */
const MIN_ESTIMATE = 150000;
/** Discount applied when several services overlap in one engagement. */
const MULTI_SERVICE_DISCOUNT = 0.88;

/* ------------------------------ option models ------------------------------ */

export type Option<K extends string = string> = { key: K; label: string; hint?: string };

export const SERVICES: Option<ServiceKey>[] = [
  { key: "ai", label: "AI Agent Development" },
  { key: "web", label: "Web Development" },
  { key: "mobile", label: "Mobile App" },
  { key: "software", label: "Custom Software" },
  { key: "cloud", label: "Cloud & DevOps" },
  { key: "data", label: "Data & Analytics" },
  { key: "uiux", label: "UI/UX Design" },
  { key: "marketing", label: "Marketing & SEO" },
  { key: "qa", label: "QA & Testing" },
];

export const TYPES: Option<TypeKey>[] = [
  { key: "new", label: "New build", hint: "From zero to launch" },
  { key: "redesign", label: "Redesign", hint: "Modernize what exists" },
  { key: "mvp", label: "MVP", hint: "Validate fast, then scale" },
  { key: "enterprise", label: "Enterprise", hint: "Platform built to scale" },
];

export const COMPLEXITIES: Option<ComplexityKey>[] = [
  { key: "lean", label: "Lean", hint: "Few screens, standard integrations" },
  { key: "standard", label: "Standard", hint: "Typical product breadth" },
  { key: "complex", label: "Complex", hint: "Deep logic, many integrations" },
];

export const TIMELINES: Option<TimelineKey>[] = [
  { key: "flexible", label: "Flexible", hint: "3 to 6 months" },
  { key: "standard", label: "Standard", hint: "2 to 3 months" },
  { key: "urgent", label: "Urgent", hint: "4 to 8 weeks" },
];

export const ROLES: Option<RoleKey>[] = [
  { key: "pm", label: "Project Manager" },
  { key: "designer", label: "Designer" },
  { key: "devs", label: "Developers" },
  { key: "ai", label: "AI Engineer" },
  { key: "qa", label: "QA" },
  { key: "devops", label: "DevOps" },
];

/* -------------------------------- computation ------------------------------- */

export type EstimateInput = {
  services: Iterable<ServiceKey>;
  type: TypeKey;
  complexity: ComplexityKey;
  timeline: TimelineKey;
  roles: Iterable<RoleKey>;
};

export type Estimate = {
  /** Lower bound of the quoted range, INR, rounded to the nearest ₹10k. */
  min: number;
  /** Upper bound of the quoted range, INR, rounded to the nearest ₹10k. */
  max: number;
  /** Human-readable delivery window. */
  durText: string;
};

const round10k = (v: number) => Math.round(v / 10000) * 10000;

export function computeEstimate(input: EstimateInput): Estimate {
  const services = [...input.services];
  const svcSum = services.reduce((s, k) => s + (SERVICE_COST[k] ?? 0), 0);
  const svcBase = services.length > 1 ? svcSum * MULTI_SERVICE_DISCOUNT : svcSum;
  const months = COMPLEXITY_MONTHS[input.complexity];
  const rolesCost = [...input.roles].reduce((s, k) => s + (ROLE_MONTHLY[k] ?? 0), 0) * months;

  let total =
    svcBase * TYPE_MULT[input.type] * COMPLEXITY_MULT[input.complexity] * TIMELINE_MULT[input.timeline] +
    rolesCost;
  total = Math.max(total, MIN_ESTIMATE);

  const durText =
    input.timeline === "urgent"
      ? `≈ ${Math.max(1, months - 1)} to ${months} months (compressed)`
      : `≈ ${months} to ${months + 2} months`;

  return { min: round10k(total * 0.9), max: round10k(total * 1.25), durText };
}
