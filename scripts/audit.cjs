/* Programmatic layout + a11y + console audit for the Savo homepage. */
const puppeteer = require("puppeteer-core");

const URL = process.argv[2] || "http://localhost:3000/savotech";
const WIDTH = Number(process.argv[3] || 1440);
const HEIGHT = Number(process.argv[4] || 940);

function lum(r, g, b) {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}
function parseRGB(s) {
  const m = s.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
  if (!m) return null;
  return { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] };
}
function contrast(fg, bg) {
  const l1 = lum(fg.r, fg.g, fg.b);
  const l2 = lum(bg.r, bg.g, bg.b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}
function blend(fg, bg) {
  if (fg.a >= 1) return fg;
  const a = fg.a;
  return {
    r: fg.r * a + bg.r * (1 - a),
    g: fg.g * a + bg.g * (1 - a),
    b: fg.b * a + bg.b * (1 - a),
    a: 1,
  };
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: "new",
    args: ["--disable-gpu", "--hide-scrollbars", "--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });
  const errors = [];
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text().slice(0, 200));
  });
  page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message.slice(0, 200)));

  await page.goto(URL, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1200));

  const report = await page.evaluate(() => {
    const out = { overflowX: null, sections: [], h1: null, headings: [], imgs: [] };
    const de = document.documentElement;
    out.overflowX = de.scrollWidth - de.clientWidth;
    out.docHeight = de.scrollHeight;

    const main = document.querySelector("main");
    for (const sec of main ? main.children : []) {
      const r = sec.getBoundingClientRect();
      out.sections.push({ id: sec.id || sec.className.split(" ")[0], top: Math.round(r.top + scrollY), h: Math.round(r.height) });
    }
    const h1 = document.querySelector("h1");
    if (h1) {
      const cs = getComputedStyle(h1);
      out.h1 = { text: h1.textContent.slice(0, 80), font: cs.fontFamily.split(",")[0], size: cs.fontSize, weight: cs.fontWeight };
    }
    let level = 0;
    for (const h of document.querySelectorAll("h1,h2,h3")) {
      out.headings.push({ tag: h.tagName, t: h.textContent.trim().slice(0, 50) });
    }
    return out;
  });

  // contrast audit on key text elements
  const contrastReport = await page.evaluate(() => {
    const sels = [
      [".hero-sub", "body text on hero"],
      [".lead", "section lead (light)"],
      [".stat-label", "stat label"],
      [".svc p", "service card text"],
      [".agent-card > p", "agent card text"],
      [".muted-dark, .work-desc", "work desc"],
      [".chat-status", "chat status"],
      [".why-card p", "why card text"],
      [".faq-body p", "faq body"],
      [".foot-tag", "footer tagline"],
      [".hire-note", "hire note"],
    ];
    const res = [];
    for (const [sel, label] of sels) {
      const el = document.querySelector(sel);
      if (!el) {
        res.push({ label, sel, missing: true });
        continue;
      }
      let node = el;
      let fg = null;
      let bgEl = el;
      // walk up for non-transparent bg
      let bg = null;
      while (bgEl) {
        const c = parseRGB2(getComputedStyle(bgEl).backgroundColor);
        if (c && c.a > 0.05) {
          bg = c;
          break;
        }
        bgEl = bgEl.parentElement;
      }
      fg = parseRGB2(getComputedStyle(node).color);
      function parseRGB2(s) {
        const m = s.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
        if (!m) return null;
        return { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] };
      }
      if (!fg || !bg) {
        res.push({ label, sel, missing: true });
        continue;
      }
      const fgb = { r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a) };
      const L = (c) => {
        const a = [c.r, c.g, c.b].map((v) => {
          v /= 255;
          return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
      };
      const ratio = (Math.max(L(fgb), L(bg)) + 0.05) / (Math.min(L(fgb), L(bg)) + 0.05);
      res.push({ label, sel, ratio: Math.round(ratio * 100) / 100, size: getComputedStyle(el).fontSize });
    }
    return res;
  });

  console.log(JSON.stringify({ report, contrastReport, consoleErrors: errors }, null, 1));
  await browser.close();
})().catch((e) => {
  console.error("AUDIT FAILED:", e.message);
  process.exit(1);
});
