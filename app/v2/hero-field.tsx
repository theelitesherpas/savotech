"use client";

import { useEffect, useRef } from "react";

/**
 * HeroField — the v2 signature surface.
 *
 * A quiet dot lattice over ink, with luminous packets travelling the grid:
 * each particle runs lattice-line to lattice-line, turning at intersections,
 * dragging a fading trail behind a glowing head. Motion pauses when the hero
 * scrolls out of view or the tab hides, and reduces to a static lattice under
 * prefers-reduced-motion. One canvas, one rAF, DPR-aware, zero dependencies.
 */

type Particle = {
  /** grid coordinates (col, row) */
  c: number;
  r: number;
  /** pixel position */
  x: number;
  y: number;
  /** target intersection in pixels */
  tx: number;
  ty: number;
  dir: 0 | 1 | 2 | 3; // 0 right, 1 down, 2 left, 3 up
  speed: number; // px per second
  color: string;
  life: number; // seconds remaining
  trail: { x: number; y: number; t: number }[]; // t = age in seconds
};

const COLORS = ["#4D5CFF", "#4D5CFF", "#4D5CFF", "#2BD926", "#FF5C5C", "#B9C0FF"];

export default function HeroField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const ctxEl = canvasEl.getContext("2d");
    if (!ctxEl) return;
    // Non-null by declaration (TS keeps declared types inside hoisted closures).
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = ctxEl;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let running = false;
    let visible = true;
    let w = 0;
    let h = 0;
    let gap = 36;
    let cols = 0;
    let rows = 0;
    let particles: Particle[] = [];
    let last = 0;

    const rand = (n: number) => Math.floor(Math.random() * n);

    function pickTarget(p: Particle) {
      // choose the next intersection; never reverse unless at the edge
      const reverse = (p.dir + 2) % 4;
      const options: (0 | 1 | 2 | 3)[] = [];
      for (let d = 0 as 0 | 1 | 2 | 3; d < 4; d++) {
        if (d === reverse) continue;
        const nc = p.c + (d === 0 ? 1 : d === 2 ? -1 : 0);
        const nr = p.r + (d === 1 ? 1 : d === 3 ? -1 : 0);
        if (nc >= 0 && nc <= cols && nr >= 0 && nr <= rows) options.push(d);
      }
      const straight = options.includes(p.dir);
      const next = straight && Math.random() < 0.72 ? p.dir : options[rand(options.length)] ?? p.dir;
      p.dir = next;
      p.c += next === 0 ? 1 : next === 2 ? -1 : 0;
      p.r += next === 1 ? 1 : next === 3 ? -1 : 0;
      p.tx = p.c * gap;
      p.ty = p.r * gap;
    }

    function spawn(): Particle {
      const c = rand(cols + 1);
      const r = rand(rows + 1);
      const p: Particle = {
        c,
        r,
        x: c * gap,
        y: r * gap,
        tx: c * gap,
        ty: r * gap,
        dir: rand(4) as 0 | 1 | 2 | 3,
        speed: gap * (1.6 + Math.random() * 1.8),
        color: COLORS[rand(COLORS.length)],
        life: 5 + Math.random() * 7,
        trail: [],
      };
      pickTarget(p);
      return p;
    }

    function reset() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      gap = w < 640 ? 30 : 36;
      cols = Math.floor(w / gap);
      rows = Math.floor(h / gap);
      const target = Math.round((w * h) / 90000);
      particles = Array.from({ length: Math.max(6, Math.min(14, target)) }, spawn);
      draw(0);
    }

    function drawLattice() {
      ctx.fillStyle = "#070D1D";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "rgba(214,222,255,0.085)";
      const R = 1;
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          ctx.beginPath();
          ctx.arc(c * gap, r * gap, R, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function draw(dt: number) {
      drawLattice();

      // glow pass: additive so heads and trails bloom over the lattice
      ctx.globalCompositeOperation = "lighter";

      for (const p of particles) {
        // advance toward the target intersection
        const dx = p.tx - p.x;
        const dy = p.ty - p.y;
        const dist = Math.hypot(dx, dy);
        const step = p.speed * dt;
        if (dist <= step) {
          p.x = p.tx;
          p.y = p.ty;
          pickTarget(p);
        } else {
          p.x += (dx / dist) * step;
          p.y += (dy / dist) * step;
        }
        p.life -= dt;
        p.trail.push({ x: p.x, y: p.y, t: 0 });
        for (const t of p.trail) t.t += dt;
        p.trail = p.trail.filter((t) => t.t < 1.1).slice(-40);
        if (p.life <= 0 || p.c < 0 || p.r < 0 || p.c > cols || p.r > rows) {
          Object.assign(p, spawn());
          continue;
        }

        // trail: segments fading with age
        ctx.lineCap = "round";
        for (let i = 1; i < p.trail.length; i++) {
          const a = p.trail[i - 1];
          const b = p.trail[i];
          const alpha = Math.max(0, 0.5 * (1 - b.t / 1.1));
          if (alpha <= 0.01) continue;
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }

        // head: tight core + soft halo
        ctx.globalAlpha = 0.95;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 0.16;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      ctx.globalCompositeOperation = "source-over";
    }

    function frame(now: number) {
      if (!running) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      draw(dt);
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (running || reduced || !visible) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    reset();

    if (reduced) {
      // static world: lattice with a few resting glows, no loop
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 7; i++) {
        const c = rand(cols + 1);
        const r = rand(rows + 1);
        const color = COLORS[rand(COLORS.length)];
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.arc(c * gap, r * gap, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 0.12;
        ctx.beginPath();
        ctx.arc(c * gap, r * gap, 9, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          visible = entries[0]?.isIntersecting ?? true;
          if (visible) start();
          else stop();
        },
        { threshold: 0.02 },
      );
      io.observe(canvas);
      const onVis = () => (document.hidden ? stop() : start());
      document.addEventListener("visibilitychange", onVis);
      let resizeTimer: ReturnType<typeof setTimeout>;
      const onResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(reset, 150);
      };
      window.addEventListener("resize", onResize);

      return () => {
        stop();
        io.disconnect();
        document.removeEventListener("visibilitychange", onVis);
        window.removeEventListener("resize", onResize);
        clearTimeout(resizeTimer);
      };
    }
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
