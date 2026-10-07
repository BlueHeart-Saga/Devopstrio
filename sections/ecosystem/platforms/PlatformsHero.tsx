"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as THREE from "three";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
  Cloud,
  Database,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */

interface Category {
  id: string;
  n: string;
  s: string;
  d: string;
  icon: LucideIcon;
}

const CATS: Category[] = [
  {
    id: "saas",
    n: "SaaS Platforms",
    s: "8 pre-built products",
    d: "Ready-to-deploy platforms for HR, legal, healthcare, e-sign & proptech.",
    icon: Boxes,
  },
  {
    id: "ai",
    n: "AI Platforms",
    s: "Agentic AI & private LLMs",
    d: "Autonomous agent workflows, private fine-tuning & vector RAG systems.",
    icon: Bot,
  },
  {
    id: "cloud",
    n: "Cloud Platforms",
    s: "IaC & Kubernetes grids",
    d: "Automated multi-cloud provisioning, FinOps controls & Kubernetes SRE.",
    icon: Cloud,
  },
  {
    id: "data",
    n: "Data Platforms",
    s: "Streaming ETL & analytics",
    d: "Real-time streaming pipelines, unified lakes & executive analytics.",
    icon: Database,
  },
  {
    id: "security",
    n: "Security Platforms",
    s: "Zero trust & compliance",
    d: "Enterprise IAM federation, endpoint shield & automated SOC 2 / HIPAA.",
    icon: ShieldCheck,
  },
];

interface StatItem {
  value: number;
  decimals: number;
  unit: string;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: 99.9, decimals: 1, unit: "", suffix: "%", label: "Platform uptime SLA" },
  { value: 1, decimals: 0, unit: "M", suffix: "+", label: "Daily transactions" },
  { value: 100, decimals: 0, unit: "K", suffix: "+", label: "Enterprise users" },
  { value: 50, decimals: 0, unit: "", suffix: "+", label: "Pre-built integrations" },
];

const formatStat = (s: StatItem, n: number) => `${n.toFixed(s.decimals)}${s.unit}`;

/* ------------------------------------------------------------------ */
/* Motion + timing constants                                          */
/* ------------------------------------------------------------------ */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const AUTO_DWELL_MS = 5500;
const MANUAL_DWELL_MS = 10000;

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/* ------------------------------------------------------------------ */
/* Canvas card helpers                                                */
/* ------------------------------------------------------------------ */

const CARD_W = 620;
const CARD_H = 210;
const CARD_SCALE = 2; // render card textures at 2x for crisp text
const CARD_FONT = 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

function roundedRectPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function paintCard(cv: HTMLCanvasElement, cat: Category, active: boolean) {
  const ctx = cv.getContext("2d");
  if (!ctx) return;

  ctx.setTransform(CARD_SCALE, 0, 0, CARD_SCALE, 0, 0);
  ctx.clearRect(0, 0, CARD_W, CARD_H);

  const inset = 2;
  roundedRectPath(ctx, inset, inset, CARD_W - inset * 2, CARD_H - inset * 2, 34);

  const bg = ctx.createLinearGradient(0, 0, 0, CARD_H);
  if (active) {
    bg.addColorStop(0, "rgba(38, 18, 25, 0.96)");
    bg.addColorStop(1, "rgba(14, 8, 11, 0.98)");
  } else {
    bg.addColorStop(0, "rgba(22, 22, 26, 0.94)");
    bg.addColorStop(1, "rgba(10, 10, 12, 0.96)");
  }
  ctx.fillStyle = bg;
  ctx.fill();

  ctx.lineWidth = active ? 2.5 : 2;
  ctx.strokeStyle = active ? "rgba(244, 63, 94, 0.55)" : "rgba(255, 255, 255, 0.12)";
  ctx.stroke();

  // Top accent line
  ctx.beginPath();
  ctx.moveTo(44, inset);
  ctx.lineTo(CARD_W - 44, inset);
  ctx.lineWidth = 2.5;
  ctx.lineCap = "round";
  ctx.strokeStyle = active ? "rgba(244, 63, 94, 0.95)" : "rgba(244, 63, 94, 0.4)";
  ctx.stroke();

  // Status dot (with halo ring when active)
  const cy = CARD_H / 2;
  if (active) {
    ctx.beginPath();
    ctx.arc(52, cy, 16, 0, Math.PI * 2);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(244, 63, 94, 0.35)";
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(52, cy, 8, 0, Math.PI * 2);
  ctx.fillStyle = active ? "#f43f5e" : "rgba(244, 63, 94, 0.65)";
  ctx.fill();

  // Text
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#ffffff";
  ctx.font = `600 44px ${CARD_FONT}`;
  ctx.fillText(cat.n, 88, cy - 18);

  ctx.fillStyle = active ? "#d4d4d8" : "#a1a1aa";
  ctx.font = `400 28px ${CARD_FONT}`;
  ctx.fillText(cat.s, 88, cy + 28);
}

const damp = (current: number, target: number, lambda: number, dt: number) =>
  current + (target - current) * (1 - Math.exp(-lambda * dt));

/* ------------------------------------------------------------------ */
/* Stat (count-up on first view)                                      */
/* ------------------------------------------------------------------ */

function Stat({
  stat,
  index,
  reduce,
}: {
  stat: StatItem;
  index: number;
  reduce: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => formatStat(stat, v));

  useEffect(() => {
    if (reduce) {
      mv.set(stat.value);
      return;
    }
    if (!inView) return;
    const controls = animate(mv, stat.value, {
      duration: 1.6,
      delay: 0.35 + index * 0.08,
      ease: EASE,
    });
    return () => controls.stop();
  }, [inView, reduce, mv, stat.value, index]);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        index > 0 ? "md:border-l md:border-zinc-900/80 md:pl-8" : ""
      }`}
    >
      <span className="sr-only">
        {formatStat(stat, stat.value)}
        {stat.suffix} {stat.label}
      </span>
      <div className="flex items-baseline gap-0.5" aria-hidden="true">
        <motion.span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-mono tabular-nums">
          {text}
        </motion.span>
        <span className="text-base font-semibold text-rose-500 font-mono">
          {stat.suffix}
        </span>
      </div>
      <span className="text-xs text-zinc-400 mt-0.5 font-medium" aria-hidden="true">
        {stat.label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                               */
/* ------------------------------------------------------------------ */

export function PlatformsHero({
  demoHref = "/contact",
  exploreHref = "#featured",
}: {
  demoHref?: string;
  exploreHref?: string;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeRef = useRef(0);

  const [activeIdx, setActiveIdx] = useState(0);
  const [dwell, setDwell] = useState(AUTO_DWELL_MS);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [sceneFailed, setSceneFailed] = useState(false);

  const reduceMotion = !!useReducedMotion();
  const inView = useInView(sectionRef, { amount: 0.25 });

  const currentCat = CATS[activeIdx];
  const ActiveIcon = currentCat.icon;

  // Autoplay runs only when it's visible, unobstructed and not being used.
  const autoplay = !reduceMotion && inView && tabVisible && !hovered && !focused;

  const select = useCallback((i: number, manual = true) => {
    setActiveIdx(i);
    setDwell(manual ? MANUAL_DWELL_MS : AUTO_DWELL_MS);
  }, []);

  useEffect(() => {
    activeRef.current = activeIdx;
  }, [activeIdx]);

  useEffect(() => {
    const onVis = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const id = window.setTimeout(
      () => select((activeIdx + 1) % CATS.length, false),
      dwell
    );
    return () => window.clearTimeout(id);
  }, [autoplay, activeIdx, dwell, select]);

  const onChipKeyDown = (e: React.KeyboardEvent) => {
    const n = CATS.length;
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (activeIdx + 1) % n;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (activeIdx - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    if (next >= 0) {
      e.preventDefault();
      select(next);
      chipRefs.current[next]?.focus();
    }
  };

  /* ---------------------------- 3D scene ---------------------------- */

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      setSceneFailed(true);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 10.5);

    const clock = new THREE.Clock();
    const world = new THREE.Group();
    const rings = new THREE.Group();
    scene.add(world);
    world.add(rings);

    const TAU = Math.PI * 2;

    // Soft glow texture
    function createGlowTexture() {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext("2d");
      if (!ctx) return new THREE.Texture();
      const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      g.addColorStop(0, "rgba(255, 255, 255, 0.65)");
      g.addColorStop(0.25, "rgba(244, 63, 94, 0.2)");
      g.addColorStop(0.6, "rgba(244, 63, 94, 0.04)");
      g.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 256, 256);
      return new THREE.CanvasTexture(c);
    }

    // Core
    const core = new THREE.Group();
    world.add(core);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.85, 1),
      new THREE.MeshBasicMaterial({
        color: 0xf43f5e,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      })
    );
    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.42, 2),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.85,
      })
    );
    core.add(wire, inner);

    const glowTex = createGlowTexture();
    const haloMat = new THREE.SpriteMaterial({
      map: glowTex,
      color: 0xf43f5e,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 0.65,
    });
    const halo = new THREE.Sprite(haloMat);
    halo.scale.set(4.5, 4.5, 1);
    world.add(halo);

    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0xf43f5e,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const pulse = new THREE.Mesh(
      new THREE.RingGeometry(0.86, 0.9, 128).rotateX(-Math.PI / 2),
      pulseMat
    );
    rings.add(pulse);

    // Ambient particles
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const rr = 2.8 + Math.random() * 6.5;
      const th = Math.random() * TAU;
      const ph = Math.acos(2 * Math.random() - 1);
      particlePositions[i * 3] = rr * Math.sin(ph) * Math.cos(th);
      particlePositions[i * 3 + 1] = rr * Math.cos(ph) * 0.5;
      particlePositions[i * 3 + 2] = rr * Math.sin(ph) * Math.sin(th);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
    });
    const parts = new THREE.Points(particleGeo, particleMat);
    world.add(parts);

    // Orbits, satellites and cards
    const SAT_GEO = new THREE.SphereGeometry(0.04, 12, 12);
    const satMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.65,
    });
    const satActiveMaterial = new THREE.MeshBasicMaterial({
      color: 0xf43f5e,
      transparent: true,
      opacity: 0.9,
    });

    const maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());

    function makeCardTexture(cat: Category, active: boolean) {
      const cv = document.createElement("canvas");
      cv.width = CARD_W * CARD_SCALE;
      cv.height = CARD_H * CARD_SCALE;
      paintCard(cv, cat, active);
      const tex = new THREE.CanvasTexture(cv);
      tex.anisotropy = maxAniso;
      return tex;
    }

    interface CatData {
      r: number;
      angle: number;
      speed: number;
      f: number; // selected factor 0..1
      h: number; // hover factor 0..1
      line: THREE.LineLoop;
      lineMat: THREE.LineBasicMaterial;
      sats: THREE.Mesh[];
      texIdle: THREE.CanvasTexture;
      texActive: THREE.CanvasTexture;
      m: THREE.Mesh;
      mat: THREE.MeshBasicMaterial;
    }

    const catDatas: CatData[] = CATS.map((c, i) => {
      const r = 1.55 + i * 0.5;
      const angle = i * 1.2566 + 0.6;
      const speed = (i % 2 !== 0 ? -1 : 1) * (0.16 - i * 0.02);

      const pts: THREE.Vector3[] = [];
      for (let k = 0; k <= 128; k++) {
        const a = (k / 128) * TAU;
        pts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r));
      }
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.09,
      });
      const line = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), lineMat);
      rings.add(line);

      const sats: THREE.Mesh[] = [];
      for (let k = 0; k < 2; k++) {
        const s = new THREE.Mesh(SAT_GEO, satMaterial);
        rings.add(s);
        sats.push(s);
      }

      const texIdle = makeCardTexture(c, false);
      const texActive = makeCardTexture(c, true);

      const mat = new THREE.MeshBasicMaterial({
        map: texIdle,
        transparent: true,
        depthWrite: false,
      });
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(2.15, (2.15 * CARD_H) / CARD_W),
        mat
      );
      scene.add(m);

      return { r, angle, speed, f: 0, h: 0, line, lineMat, sats, texIdle, texActive, m, mat };
    });

    const linkMat = new THREE.LineBasicMaterial({
      color: 0xf43f5e,
      transparent: true,
      opacity: 0.35,
    });
    const link = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]),
      linkMat
    );
    link.frustumCulled = false;
    scene.add(link);

    /* ----- State ----- */
    let sel = activeRef.current;
    let pulseAt = -9;
    let hover = -1;
    let elapsed = reduce ? 4 : 0;

    function applyMaps() {
      catDatas.forEach((cd, i) => {
        cd.mat.map = i === sel ? cd.texActive : cd.texIdle;
      });
    }
    applyMaps();

    /* ----- Layout ----- */
    let base = 1;
    let mob = 1;
    const RMAX = 3.5;

    function resize() {
      if (!canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const halfW = 3.84 * camera.aspect;
      const wide = w > 860 && w / h > 1.05;
      if (wide) {
        base = Math.min(1.0, (halfW * 0.54) / (RMAX + 1.1));
        world.position.set(halfW * 0.44, 0, 0);
        mob = 1;
      } else {
        base = Math.max(0.42, Math.min(0.68, (halfW * 0.92) / (RMAX + 1.1)));
        world.position.set(0, -2.4, 0);
        mob = 1.25;
      }
      world.scale.setScalar(base);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    /* ----- Input ----- */
    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;

    const onPointerMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth) * 2 - 1;
      ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    if (!reduce) window.addEventListener("pointermove", onPointerMove, { passive: true });

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const cardMeshes = catDatas.map((cd) => cd.m);

    const pick = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      pointer.set(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -((clientY - rect.top) / rect.height) * 2 + 1
      );
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(cardMeshes, false)[0];
      return hit ? cardMeshes.indexOf(hit.object as THREE.Mesh) : -1;
    };

    const onCanvasMove = (e: PointerEvent) => {
      const idx = pick(e.clientX, e.clientY);
      if (idx !== hover) {
        hover = idx;
        canvas.style.cursor = idx >= 0 ? "pointer" : "default";
      }
    };
    const onCanvasLeave = () => {
      hover = -1;
      canvas.style.cursor = "default";
    };
    const onCanvasClick = (e: MouseEvent) => {
      const idx = pick(e.clientX, e.clientY);
      if (idx !== -1) select(idx);
    };
    canvas.addEventListener("pointermove", onCanvasMove);
    canvas.addEventListener("pointerleave", onCanvasLeave);
    canvas.addEventListener("click", onCanvasClick);

    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    /* ----- Render loop ----- */
    const v = new THREE.Vector3();
    const eul = new THREE.Euler();
    let reqId = 0;

    function frame() {
      reqId = requestAnimationFrame(frame);

      // Always consume the delta so a hidden/paused period doesn't produce a jump.
      const dt = Math.min(0.05, clock.getDelta());
      if (!visible || document.hidden) return;

      if (!reduce) elapsed += dt;
      const t = elapsed;

      // Selection changed from React (chips, autoplay) or from the canvas
      if (activeRef.current !== sel) {
        sel = activeRef.current;
        pulseAt = t;
        applyMaps();
      }

      // Intro ease
      let p = reduce ? 1 : Math.min(1, t / 2.2);
      p = 1 - Math.pow(1 - p, 3);

      // Pointer parallax (frame-rate independent)
      mx = damp(mx, tx, 2.5, dt);
      my = damp(my, ty, 2.5, dt);
      eul.set(0.44 + my * 0.1, mx * 0.22, 0);
      rings.rotation.copy(eul);

      // Core
      core.rotation.y = t * 0.25;
      core.rotation.x = t * 0.14;
      core.scale.setScalar(0.7 + 0.3 * p + (reduce ? 0 : Math.sin(t * 1.5) * 0.02));
      haloMat.opacity = 0.6 * p + (reduce ? 0.05 : Math.sin(t * 1.2) * 0.05);
      parts.rotation.y = t * 0.015;

      // Selection pulse
      const k = (t - pulseAt) / 1.6;
      if (!reduce && k >= 0 && k < 1) {
        const e = 1 - Math.pow(1 - k, 3);
        pulse.scale.setScalar(1.0 + e * 3.2);
        pulseMat.opacity = 0.45 * (1 - k);
      } else {
        pulseMat.opacity = 0;
      }

      catDatas.forEach((cd, i) => {
        const on = i === sel;

        if (reduce) {
          cd.f = on ? 1 : 0;
          cd.h = i === hover ? 1 : 0;
        } else {
          cd.f = damp(cd.f, on ? 1 : 0, 4.4, dt);
          cd.h = damp(cd.h, i === hover ? 1 : 0, 8, dt);
        }

        if (on) {
          let d = (Math.PI / 2 - cd.angle) % TAU;
          if (d > Math.PI) d -= TAU;
          if (d < -Math.PI) d += TAU;
          cd.angle = reduce ? Math.PI / 2 : cd.angle + d * (1 - Math.exp(-4 * dt));
        } else if (!reduce) {
          cd.angle += cd.speed * dt * (1 - cd.f * 0.9);
        }

        cd.lineMat.opacity = (0.08 + 0.4 * cd.f) * p;
        cd.lineMat.color.set(on ? 0xf43f5e : 0xffffff);

        cd.sats.forEach((s, j) => {
          const a = cd.angle + ((j + 1) * TAU) / 3;
          s.position.set(Math.cos(a) * cd.r * p, 0, Math.sin(a) * cd.r * p);
          s.scale.setScalar(on ? 1.3 : 1.0);
          s.material = on ? satActiveMaterial : satMaterial;
        });

        v.set(Math.cos(cd.angle) * cd.r * p, 0, Math.sin(cd.angle) * cd.r * p)
          .applyEuler(eul)
          .multiplyScalar(base)
          .add(world.position);

        cd.m.position.copy(v);
        cd.m.quaternion.copy(camera.quaternion);

        let dd = ((v.z - world.position.z) / (RMAX * base) + 1) / 2;
        dd = Math.max(0, Math.min(1, dd));

        cd.m.scale.setScalar(
          base * mob * (0.78 + 0.22 * dd) * (1 + 0.2 * cd.f + 0.04 * cd.h)
        );
        cd.mat.opacity = Math.min(
          1,
          p * (0.35 + 0.65 * dd) * (0.6 + 0.4 * cd.f) + 0.12 * cd.h * p
        );
        cd.m.renderOrder = Math.round(dd * 10) + 20 + (on ? 30 : 0);

        if (on) {
          const posAttr = link.geometry.attributes.position as THREE.BufferAttribute;
          const arr = posAttr.array as Float32Array;
          arr[0] = world.position.x;
          arr[1] = world.position.y;
          arr[2] = world.position.z;
          arr[3] = v.x;
          arr[4] = v.y;
          arr[5] = v.z;
          posAttr.needsUpdate = true;
        }
      });

      linkMat.opacity = 0.35 * p;

      renderer.render(scene, camera);
    }

    frame();

    return () => {
      cancelAnimationFrame(reqId);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointermove", onCanvasMove);
      canvas.removeEventListener("pointerleave", onCanvasLeave);
      canvas.removeEventListener("click", onCanvasClick);

      catDatas.forEach((cd) => {
        cd.texIdle.dispose();
        cd.texActive.dispose();
        cd.mat.dispose();
        cd.m.geometry.dispose();
        cd.line.geometry.dispose();
        cd.lineMat.dispose();
      });
      SAT_GEO.dispose();
      satMaterial.dispose();
      satActiveMaterial.dispose();
      glowTex.dispose();
      haloMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      wire.geometry.dispose();
      (wire.material as THREE.Material).dispose();
      inner.geometry.dispose();
      (inner.material as THREE.Material).dispose();
      pulse.geometry.dispose();
      pulseMat.dispose();
      link.geometry.dispose();
      linkMat.dispose();
      renderer.dispose();
    };
  }, [select]);

  /* ------------------------------ UI ------------------------------- */

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex flex-col justify-between border-b border-zinc-900 bg-[#050507] pt-20 md:pt-24 pb-6 overflow-hidden"
      aria-label="Devopstrio platform ecosystem"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_45%,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e0e12_1px,transparent_1px),linear-gradient(to_bottom,#0e0e12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none z-0 opacity-40" />

      {/* 3D canvas */}
      <canvas
        ref={canvasRef}
        id="scene"
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full block z-[1] ${sceneFailed ? "hidden" : ""}`}
      />

      {/* Hero body */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-4 pointer-events-none flex-grow flex items-center">
        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          className="max-w-xl pointer-events-auto"
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(e: React.FocusEvent<HTMLDivElement>) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
          }}
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm mb-4"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose-500" />
            </span>
            <span>Platform Ecosystem</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] text-white mb-4 text-balance"
          >
            Build, Launch & Scale <span className="text-rose-500">Digital Platforms</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg mb-6"
          >
            Five production platform families engineered for enterprise scale. Deploy in your
            cloud with pre-built integrations and zero-trust security.
          </motion.p>

          {/* Category selector */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 max-w-lg"
            role="radiogroup"
            aria-label="Platform categories"
            onKeyDown={onChipKeyDown}
          >
            {CATS.map((c, i) => {
              const isSelected = i === activeIdx;
              const Icon = c.icon;
              return (
                <button
                  key={c.id}
                  ref={(el) => {
                    chipRefs.current[i] = el;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => select(i)}
                  className={`text-xs font-medium rounded-full px-3 py-1.5 inline-flex items-center gap-1.5 cursor-pointer border transition-[background-color,border-color,color] duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050507] ${
                    isSelected
                      ? "bg-rose-500/15 border-rose-500/60 text-white"
                      : "bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                  }`}
                >
                  <Icon
                    size={13}
                    className={`transition-colors duration-200 ${
                      isSelected ? "text-rose-400" : "text-zinc-500"
                    }`}
                  />
                  <span>{c.n}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Active category summary */}
          <motion.div
            variants={itemVariants}
            className="relative mb-6 max-w-lg min-h-[4.5rem] overflow-hidden rounded-xl border border-zinc-800/70 bg-zinc-950/60 backdrop-blur-md"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentCat.id}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: EASE }}
                className="flex items-start justify-between gap-4 px-4 py-3.5"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span className="mt-0.5 p-1.5 rounded-md bg-rose-500/10 text-rose-400 shrink-0">
                    <ActiveIcon size={15} />
                  </span>
                  <div className="min-w-0">
                    <p className="flex flex-wrap items-baseline gap-x-2 text-[13px] leading-snug">
                      <span className="font-medium text-zinc-100">{currentCat.n}</span>
                      <span className="text-xs text-zinc-500">{currentCat.s}</span>
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-400">{currentCat.d}</p>
                  </div>
                </div>
                <a
                  href="#categories"
                  className="group inline-flex shrink-0 items-center gap-0.5 rounded text-xs font-medium text-rose-400 transition-colors hover:text-rose-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
                >
                  <span>Explore</span>
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Autoplay progress */}
            {autoplay && (
              <motion.span
                key={`${activeIdx}-${dwell}`}
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-full origin-left bg-rose-500/70"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: dwell / 1000, ease: "linear" }}
              />
            )}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <a
              href={exploreHref}
              className="group inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-2.5 text-xs font-medium text-white shadow-[0_0_0_1px_rgba(244,63,94,0.4),0_8px_24px_-8px_rgba(244,63,94,0.55)] transition-colors hover:bg-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050507] sm:text-sm"
            >
              <span>Explore Platforms</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-0.5"
              />
            </a>

            <Link
              href={demoHref}
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-5 py-2.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-900/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050507] sm:text-sm"
            >
              <span>Request Demo</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-4 border-t border-zinc-900/80"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center text-left">
          {STATS.map((s, idx) => (
            <Stat key={s.label} stat={s} index={idx} reduce={reduceMotion} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
