const puppeteer = require("puppeteer-core");
(async () => {
  const b = await puppeteer.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: "new",
    args: ["--disable-gpu", "--no-sandbox"],
  });
  for (const [w, name] of [
    [1440, "desktop"],
    [390, "mobile"],
  ]) {
    const p = await b.newPage();
    await p.setViewport({ width: w, height: 900, deviceScaleFactor: 1 });
    await p.goto("http://localhost:3000/savotech", { waitUntil: "networkidle0", timeout: 45000 });
    await new Promise((r) => setTimeout(r, 2200));
    await p.screenshot({ path: ".impeccable/review/" + name + ".png", fullPage: true });
    const probe = await p.evaluate(() => {
      const note = document.querySelector(".logos-note");
      const live = document.querySelector(".chat-shell p[aria-live]");
      return {
        illustrativeNote: !!note && getComputedStyle(note).display !== "none",
        noteText: note ? note.textContent.slice(0, 70) : null,
        chatLogLiveAttr: document.querySelector(".chat-log")?.getAttribute("aria-live"),
        srLiveRegionAbsolute: !!live && getComputedStyle(live).position === "absolute",
        buttonsInsideLiveRegion: live ? live.querySelectorAll("button").length : -1,
        overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      };
    });
    console.log(name, JSON.stringify(probe));
    await p.close();
  }
  await b.close();
})();
