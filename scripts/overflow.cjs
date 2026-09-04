/* Find elements wider than the viewport. */
const puppeteer = require("puppeteer-core");
(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: "new",
    args: ["--disable-gpu", "--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(process.argv[2] || "http://localhost:3000/savotech", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 800));
  const bad = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const out = [];
    for (const el of document.querySelectorAll("*")) {
      const r = el.getBoundingClientRect();
      if (r.width > vw + 1 || r.right > vw + 1) {
        const cs = getComputedStyle(el);
        out.push({
          tag: el.tagName,
          cls: (el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className || "").toString().slice(0, 60),
          w: Math.round(r.width),
          right: Math.round(r.right),
          pos: cs.position,
        });
      }
    }
    return { vw, count: out.length, out: out.slice(0, 25) };
  });
  console.log(JSON.stringify(bad, null, 1));
  await browser.close();
})();
