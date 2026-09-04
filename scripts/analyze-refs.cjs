/* Extract design signals from reference images: palette, band rhythm, card grids. */
const sharp = require("sharp");

const FILES = ["savo95", "savo96", "savo97", "savo98", "savo99", "savo100"].map(
  (n) => `/Users/om/Downloads/${n}.png`
);

const hex = (r, g, b) =>
  "#" + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
const lum = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;
const sat = (r, g, b) => {
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
  return mx === 0 ? 0 : (mx - mn) / mx;
};

async function analyze(file) {
  const W = 800;
  const img = sharp(file);
  const meta = await img.metadata();
  const H = Math.round((meta.height / meta.width) * W);
  const { data } = await img.resize(W, H).raw().toBuffer({ resolveWithObject: true });

  // quantized histogram (bucket 24)
  const buckets = new Map();
  for (let i = 0; i < data.length; i += 3) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const k = `${r >> 4},${g >> 4},${b >> 4}`;
    const e = buckets.get(k) || { n: 0, r: 0, g: 0, b: 0 };
    e.n++; e.r += r; e.g += g; e.b += b;
    buckets.set(k, e);
  }
  const clusters = [...buckets.values()]
    .map((e) => ({ n: e.n, r: e.r / e.n, g: e.g / e.n, b: e.b / e.n }))
    .sort((a, b) => b.n - a.n);
  const total = W * H;
  const palette = clusters.slice(0, 12).map((c) => ({
    hex: hex(c.r, c.g, c.b),
    share: Math.round((c.n / total) * 1000) / 10,
    lum: Math.round(lum(c.r, c.g, c.b)),
    sat: Math.round(sat(c.r, c.g, c.b) * 100) / 100,
  }));

  // saturated accent colors (share > 0.15%, sat > 0.35, not near-white/black)
  const accents = clusters
    .filter((c) => c.n / total > 0.0015 && sat(c.r, c.g, c.b) > 0.35 && lum(c.r, c.g, c.b) > 30 && lum(c.r, c.g, c.b) < 235)
    .sort((a, b) => sat(b.r, b.g, b.b) * b.n - sat(a.r, a.g, a.b) * a.n)
    .slice(0, 5)
    .map((c) => ({ hex: hex(c.r, c.g, c.b), share: Math.round((c.n / total) * 1000) / 10 }));

  // row bands: luminance + dominant color
  const BANDS = 14;
  const bands = [];
  const bh = Math.floor(H / BANDS);
  for (let bi = 0; bi < BANDS; bi++) {
    let r = 0, g = 0, b = 0, n = 0, L = 0;
    for (let y = bi * bh; y < (bi + 1) * bh; y += 2) {
      for (let x = 0; x < W; x += 4) {
        const i = (y * W + x) * 3;
        r += data[i]; g += data[i + 1]; b += data[i + 2];
        L += lum(data[i], data[i + 1], data[i + 2]);
        n++;
      }
    }
    bands.push({
      band: bi,
      avgHex: hex(r / n, g / n, b / n),
      lum: Math.round(L / n),
    });
  }

  // card detection: mask of pixels far from the dominant background color
  const bg = clusters[0];
  const mask = new Uint8Array(W * H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 3;
      const d = Math.abs(data[i] - bg.r) + Math.abs(data[i + 1] - bg.g) + Math.abs(data[i + 2] - bg.b);
      mask[y * W + x] = d > 90 ? 1 : 0;
    }
  }
  // connected components (4-neighbour, iterative)
  const labels = new Int32Array(W * H).fill(0);
  let next = 1;
  const comps = [];
  const stack = [];
  for (let p = 0; p < W * H; p++) {
    if (mask[p] && !labels[p]) {
      const id = next++;
      stack.length = 0;
      stack.push(p);
      labels[p] = id;
      let minX = W, maxX = 0, minY = H, maxY = 0, n = 0;
      while (stack.length) {
        const q = stack.pop();
        const qx = q % W, qy = (q / W) | 0;
        if (qx < minX) minX = qx; if (qx > maxX) maxX = qx;
        if (qy < minY) minY = qy; if (qy > maxY) maxY = qy;
        n++;
        if (qx > 0 && mask[q - 1] && !labels[q - 1]) { labels[q - 1] = id; stack.push(q - 1); }
        if (qx < W - 1 && mask[q + 1] && !labels[q + 1]) { labels[q + 1] = id; stack.push(q + 1); }
        if (qy > 0 && mask[q - W] && !labels[q - W]) { labels[q - W] = id; stack.push(q - W); }
        if (qy < H - 1 && mask[q + W] && !labels[q + W]) { labels[q + W] = id; stack.push(q + W); }
      }
      // only card-like components
      const w = maxX - minX + 1, h = maxY - minY + 1;
      if (n > (W * H) / 900 && w > W / 12 && w < W * 0.95) {
        const i0 = (minY * W + minX) * 3;
        comps.push({
          x: Math.round((minX / W) * 100),
          y: Math.round((minY / H) * 100),
          wPct: Math.round((w / W) * 100),
          hPct: Math.round((h / H) * 100),
          fill: hex(data[i0], data[i0 + 1], data[i0 + 2]),
          ar: Math.round((w / h) * 10) / 10,
        });
      }
    }
  }
  comps.sort((a, b) => a.y - b.y || a.x - b.x);

  return {
    file: file.split("/").pop(),
    size: `${meta.width}x${meta.height}`,
    background: { hex: hex(bg.r, bg.g, bg.b), share: Math.round((bg.n / total) * 100) },
    accents,
    palette: palette.slice(0, 8),
    bands,
    cards: comps.slice(0, 14),
  };
}

(async () => {
  for (const f of FILES) {
    try {
      console.log(JSON.stringify(await analyze(f), null, 1));
    } catch (e) {
      console.error(f, e.message);
    }
  }
})();
