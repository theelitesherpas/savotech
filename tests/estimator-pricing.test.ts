import { describe, expect, it } from "vitest";
import {
  computeEstimate,
  SERVICES,
  TYPES,
  COMPLEXITIES,
  TIMELINES,
  ROLES,
} from "@/lib/estimator/pricing";

const base = {
  services: ["ai"] as const,
  type: "new" as const,
  complexity: "standard" as const,
  timeline: "standard" as const,
  roles: [] as const,
};

describe("estimator pricing model", () => {
  it("exposes complete, unique option catalogs", () => {
    for (const list of [SERVICES, TYPES, COMPLEXITIES, TIMELINES, ROLES]) {
      const keys = list.map((o) => o.key);
      expect(new Set(keys).size).toBe(keys.length);
      expect(list.every((o) => o.label.length > 0)).toBe(true);
    }
  });

  it("prices a single AI service in the documented band", () => {
    // ai = ₹500k base, all multipliers 1 → total 500k; range 0.9x–1.25x.
    const est = computeEstimate(base);
    expect(est.min).toBe(450000);
    expect(est.max).toBe(630000); // 625k rounds half-up to 630k
    expect(est.durText).toBe("≈ 4 to 6 months");
  });

  it("applies the overlap discount only for multiple services", () => {
    const one = computeEstimate({ ...base, services: ["web"] });
    const two = computeEstimate({ ...base, services: ["web", "mobile"] });
    // web+mobile = 600k * 0.88 = 528k vs web alone 250k
    expect(two.min).toBeGreaterThan(one.min);
    expect(two.min).toBe(Math.round((600000 * 0.88 * 0.9) / 10000) * 10000);
  });

  it("multiplies type, complexity and timeline factors", () => {
    const enterprise = computeEstimate({ ...base, type: "enterprise" });
    expect(enterprise.min).toBe(Math.round((500000 * 1.6 * 0.9) / 10000) * 10000);

    const urgent = computeEstimate({ ...base, timeline: "urgent" });
    expect(urgent.min).toBe(Math.round((500000 * 1.3 * 0.9) / 10000) * 10000);
    expect(urgent.durText).toContain("compressed");
  });

  it("adds role costs for the complexity duration and never prices below the floor", () => {
    const withRoles = computeEstimate({ ...base, roles: ["pm", "ai"] });
    // 500k + (100k + 120k) * 4 months = 1_380k
    expect(withRoles.min).toBe(Math.round((1380000 * 0.9) / 10000) * 10000);

    const floor = computeEstimate({
      ...base,
      services: [],
      type: "redesign",
      complexity: "lean",
      timeline: "flexible",
      roles: [],
    });
    expect(floor.min).toBeGreaterThanOrEqual(140000); // floor 150k * 0.9 rounded
    expect(floor.max).toBe(190000); // 150k * 1.25
  });

  it("rounds every figure to the nearest ₹10,000", () => {
    const est = computeEstimate({ ...base, services: ["ai", "web", "qa"], roles: ["devs"] });
    expect(est.min % 10000).toBe(0);
    expect(est.max % 10000).toBe(0);
    expect(est.max).toBeGreaterThan(est.min);
  });
});
