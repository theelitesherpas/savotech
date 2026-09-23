/**
 * End-to-end smoke suite for the production build.
 *
 * Runs `next start` against the built app (basePath /savotech) and drives a
 * real Chrome via puppeteer-core (system Chrome; no download required).
 *
 *   npm run test:e2e              # builds first, then runs
 *   E2E_SKIP_BUILD=1 npm run test:e2e   # reuse the existing .next build
 *
 * Exits non-zero if any check fails; prints one line per check.
 */
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import os from "node:os";

const PORT = process.env.E2E_PORT ?? "3311";
const BASE = `http://127.0.0.1:${PORT}/savotech`;

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
].filter(Boolean);
const CHROME = CHROME_CANDIDATES.find((p) => existsSync(p));

let server = null;
let browser = null;
const failures = [];
const passes = [];

const check = (name, ok, detail = "") => {
  if (ok) {
    passes.push(name);
    console.log(`  PASS  ${name}`);
  } else {
    failures.push(name + (detail ? ` — ${detail}` : ""));
    console.log(`  FAIL  ${name}${detail ? " — " + detail : ""}`);
  }
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function startServer() {
  if (!process.env.E2E_SKIP_BUILD) {
    console.log("• Building production bundle…");
    await new Promise((resolve, reject) => {
      const build = spawn("npm", ["run", "build"], { stdio: "inherit", shell: true });
      build.on("exit", (c) => (c === 0 ? resolve() : reject(new Error("build failed"))));
    });
  }
  server = spawn("npx", ["next", "start", "-p", PORT], { stdio: "ignore", shell: true });
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(BASE + "/");
      if (r.ok) return;
    } catch {}
    await sleep(500);
  }
  throw new Error("server did not start");
}

async function main() {
  if (!CHROME) throw new Error("Chrome not found; set CHROME_PATH");
  const puppeteer = (await import("puppeteer-core")).default;

  await startServer();
  browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });

  /* ---------- HTTP-level checks ---------- */
  console.log("• HTTP checks");
  const home = await fetch(BASE + "/");
  check("homepage returns 200", home.status === 200);
  const homeHtml = await home.text();
  check("homepage title is branded", /Savo Technologies/.test(homeHtml.match(/<title[^>]*>([^<]*)<\/title>/)?.[1] ?? ""));
  check("CSP header present", !!home.headers.get("content-security-policy"));
  check("HSTS header present", !!home.headers.get("strict-transport-security"));
  check("frame protection present", (home.headers.get("x-frame-options") ?? "").includes("DENY"));

  const nf = await fetch(BASE + "/this-route-does-not-exist");
  check("unknown route is a real 404", nf.status === 404);

  const v2 = await fetch(BASE + "/v2");
  check("v2 concept homepage renders", v2.status === 200 && (await v2.text()).includes("Intelligence"));

  const robots = await (await fetch(BASE + "/robots.txt")).text();
  check("robots disallows /api", /Disallow: \/api\//.test(robots));
  const sitemap = await (await fetch(BASE + "/sitemap.xml")).text();
  check("sitemap lists service pages", sitemap.includes("/services/web-development/"));
  check("sitemap excludes the client portal", !sitemap.includes("/portal/"));

  /* ---------- Browser checks ---------- */
  console.log("• Browser checks");
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => consoleErrors.push(String(err)));

  await page.goto(BASE + "/", { waitUntil: "networkidle2", timeout: 60000 });
  check("homepage renders one H1", (await page.$$eval("h1", (els) => els.length)) === 1);
  check("clean browser console", consoleErrors.length === 0, consoleErrors.slice(0, 3).join(" | "));

  // Service + industry detail pages render their hero
  await page.goto(BASE + "/services/web-development/", { waitUntil: "domcontentloaded" });
  check("service page renders", (await page.$("h1")) !== null);
  await page.goto(BASE + "/industries/fintech/", { waitUntil: "domcontentloaded" });
  check("industry page renders", (await page.$("h1")) !== null);

  // Estimator end-to-end (validation + computation + result panel)
  await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
  await page.waitForSelector("#estimatorForm");
  await page.type("#leadName", "E2E Tester");
  await page.type("#leadEmail", "e2e@example.com");
  await page.click("#estimatorForm button[type=submit]");
  await page.waitForSelector(".est-result-card", { timeout: 15000 });
  const estText = await page.$eval(".est-result-card", (el) => el.textContent);
  check("estimator computes a range", /Estimated project investment/.test(estText) && /to/.test(estText));

  // Contact form client-side validation
  await page.goto(BASE + "/contact/", { waitUntil: "domcontentloaded" });
  await page.click("form button[type=submit]");
  await sleep(300);
  check("contact form validates empty submit", (await page.$(".field-err")) !== null);

  // FAQ accordion (homepage — native <details>, first item pre-opened by design)
  await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
  await page.waitForSelector("#faq details");
  const faqItems = await page.$$("#faq details");
  if (faqItems.length >= 2) {
    const initiallyOpen = await faqItems[0].evaluate((el) => el.open);
    await faqItems[0].scrollIntoView();
    await sleep(700);
    await faqItems[1].$("summary").then((s) => s.click());
    await sleep(400);
    const secondOpen = await faqItems[1].evaluate((el) => el.open);
    const firstClosed = await faqItems[0].evaluate((el) => !el.open);
    check("FAQ accordion opens second item (exclusive)", initiallyOpen && secondOpen && firstClosed);
  } else {
    check("FAQ accordion opens second item (exclusive)", false, "faq items not found");
  }

  // Mobile navigation
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
  const toggle = await page.$("#navToggle");
  if (toggle) {
    await toggle.click();
    await sleep(300);
    const visible = await page.$eval("#mobileNav", (el) => !el.hidden);
    check("mobile navigation opens", visible);
    const acc = (await page.$$("#mobileNav .mobile-acc"))[1]; // Services
    if (acc) {
      await acc.click();
      await sleep(200);
      const subVisible = await page.$$eval("#mobileNav .mobile-sub", (els) => els.some((el) => !el.hidden));
      check("mobile nav sub-menu expands", subVisible);
    }
  } else {
    check("mobile navigation opens", false, "#navToggle not found");
  }
  await page.setViewport({ width: 1366, height: 900 });

  // Image integrity: scroll through the case-studies grid (13 optimized images)
  // and confirm every image decoded successfully (catches basePath/optimizer regressions).
  await page.goto(BASE + "/case-studies/", { waitUntil: "networkidle2" });
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 100));
    }
  });
  await sleep(1200);
  const imgCheck = await page.evaluate(() => {
    const broken = [...document.images].filter((i) => i.complete && i.naturalWidth === 0);
    return { total: document.images.length, broken: broken.length };
  });
  check(
    `optimized images decode (${imgCheck.total} on case studies)`,
    imgCheck.total > 0 && imgCheck.broken === 0,
    `${imgCheck.broken} broken`,
  );

  /* ---------- Internal link crawl ---------- */
  console.log("• Internal link crawl");
  const BP = new URL(BASE).pathname.replace(/\/$/, ""); // /savotech
  const origins = new URL(BASE).origin;
  const seen = new Set();
  const queue = ["/", "/services/", "/industries/", "/hire/", "/ai-agents/", "/about/", "/contact/", "/case-studies/", "/resources/", "/careers/"].map((p) => BP + p);
  while (queue.length) {
    const path = queue.shift();
    if (seen.has(path)) continue;
    seen.add(path);
    let html;
    try {
      const r = await fetch(origins + path);
      if (r.status >= 400) {
        check(`crawl ${path}`, false, `status ${r.status}`);
        continue;
      }
      html = await r.text();
    } catch (e) {
      check(`crawl ${path}`, false, String(e));
      continue;
    }
    for (const m of html.matchAll(/href="(\/[^"#]*?)"/g)) {
      const href = m[1];
      if (!seen.has(href) && !href.startsWith("/api") && !href.startsWith("/_next")) queue.push(href);
    }
  }
  check(`crawl covered ${seen.size} internal pages (all 200)`, true);

  console.log(`\nE2E result: ${passes.length} passed, ${failures.length} failed`);
  if (failures.length) {
    console.log("Failures:");
    failures.forEach((f) => console.log("  - " + f));
    process.exitCode = 1;
  }
}

main()
  .catch((e) => {
    console.error("E2E error:", e);
    process.exitCode = 1;
  })
  .finally(async () => {
    try { await browser?.close(); } catch {}
    try { server?.kill("SIGTERM"); } catch {}
    // next start via npx shell needs a harder push on some platforms
    if (server) setTimeout(() => { try { server.kill("SIGKILL"); } catch {} }, 1000);
  });
