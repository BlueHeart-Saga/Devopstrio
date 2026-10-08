"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as THREE from "three";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Bot,
  Cloud,
  Database,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */

interface Category {
  id: string;
  n: string;
  s: string;
  icon: LucideIcon;
}

const CATS: Category[] = [
  { id: "saas", n: "SaaS Platforms", s: "8 pre-built products", icon: Boxes },
  { id: "ai", n: "AI Platforms", s: "Agentic AI & private LLMs", icon: Bot },
  { id: "cloud", n: "Cloud Platforms", s: "IaC & Kubernetes grids", icon: Cloud },
  { id: "data", n: "Data Platforms", s: "Streaming ETL & analytics", icon: Database },
  { id: "security", n: "Security Platforms", s: "Zero trust & compliance", icon: ShieldCheck },
];

const SAAS_PRODUCTS = [
  { name: "Humanex", logo: "/webp/assets/Home-page/our-products/logo/humanex.webp" },
  { name: "Brio", logo: "/webp/assets/Home-page/our-products/logo/brio.webp" },
  { name: "eSigniva", logo: "/webp/assets/Home-page/our-products/logo/safesign.webp" },
  { name: "CareSuite", logo: "/webp/assets/Home-page/our-products/logo/Caresuite.webp" },
  { name: "Homela", logo: "/webp/assets/Home-page/our-products/logo/homela.webp" },
  { name: "Campix", logo: "/webp/assets/Home-page/our-products/logo/Campix.webp" },
  { name: "Justivon", logo: "/webp/assets/Home-page/our-products/logo/Justivon.webp" },
  { name: "Prestivo", logo: "/webp/assets/Home-page/our-products/logo/Prestivo.webp" },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const AUTO_DWELL_MS = 5500;
const MANUAL_DWELL_MS = 10000;

/* ------------------------------------------------------------------ */
/* Scene constants                                                    */
/* ------------------------------------------------------------------ */

const TAU = Math.PI * 2;
const CAM_FOV = 38;
const CAM_Z = 10.5;
const OUTER_R = 2.7;
const INNER_R = 1.6;
const TILT_X = 0.38;
const CARD_W = 620;
const CARD_H = 200;
const CARD_SCALE = 2;
const CARD_WORLD_W = 1.9;
const CARD_WORLD_H = (CARD_WORLD_W * CARD_H) / CARD_W;
const LOGO_WORLD = 0.44;
const CARD_FONT = 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const damp = (current: number, target: number, lambda: number, dt: number) =>
  current + (target - current) * (1 - Math.exp(-lambda * dt));

/* ------------------------------------------------------------------ */
/* Canvas card helpers                                                */
/* ------------------------------------------------------------------ */

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

  const pad = 3;
  roundedRectPath(ctx, pad, pad, CARD_W - pad * 2, CARD_H - pad * 2, 28);

  const bg = ctx.createLinearGradient(0, 0, 0, CARD_H);
  if (active) {
    bg.addColorStop(0, "rgba(40, 16, 24, 0.94)");
    bg.addColorStop(1, "rgba(12, 8, 11, 0.96)");
  } else {
    bg.addColorStop(0, "rgba(24, 24, 28, 0.84)");
    bg.addColorStop(1, "rgba(12, 12, 15, 0.88)");
  }
  ctx.fillStyle = bg;
  ctx.fill();

  ctx.lineWidth = active ? 2 : 1.5;
  ctx.strokeStyle = active ? "rgba(244, 63, 94, 0.55)" : "rgba(255, 255, 255, 0.10)";
  ctx.stroke();

  const barH = active ? 64 : 36;
  ctx.fillStyle = active ? "#f43f5e" : "rgba(244, 63, 94, 0.45)";
  roundedRectPath(ctx, 54, CARD_H / 2 - barH / 2, 4, barH, 2);
  ctx.fill();

  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillStyle = active ? "#ffffff" : "rgba(255, 255, 255, 0.78)";
  ctx.font = `600 46px ${CARD_FONT}`;
  ctx.fillText(cat.n, 88, CARD_H / 2 - 22);

  ctx.fillStyle = active ? "#d4d4d8" : "#8b8b96";
  ctx.font = `400 28px ${CARD_FONT}`;
  ctx.fillText(cat.s, 88, CARD_H / 2 + 26);
}

/* ------------------------------------------------------------------ */
/* Hero Component                                                     */
/* ------------------------------------------------------------------ */

export function PlatformsHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeRef = useRef(0);

  const [activeIdx, setActiveIdx] = useState(0);
  const [dwell, setDwell] = useState(AUTO_DWELL_MS);
  const [tabVisible, setTabVisible] = useState(true);
  const [sceneFailed, setSceneFailed] = useState(false);

  const reduceMotion = !!useReducedMotion();
  const inView = useInView(sectionRef, { amount: 0.25 });
  const autoplay = !reduceMotion && inView && tabVisible;

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
    const id = window.setTimeout(() => select((activeIdx + 1) % CATS.length, false), dwell);
    return () => window.clearTimeout(id);
  }, [autoplay, activeIdx, dwell, select]);

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
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(CAM_FOV, 1, 0.1, 100);
    camera.position.set(0, 0, CAM_Z);

    const clock = new THREE.Clock();
    const world = new THREE.Group();
    scene.add(world);

    const rings = new THREE.Group();
    world.add(rings);

    const texLoader = new THREE.TextureLoader();
    const maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());

    /* ----- Core ----- */

    const emblem = new THREE.Group();
    world.add(emblem);

    const backingMat = new THREE.MeshBasicMaterial({
      color: 0x0a0a0d,
      transparent: true,
      opacity: 0.96,
      depthWrite: false,
    });
    const backingGeo = new THREE.CircleGeometry(0.48, 48);
    const backing = new THREE.Mesh(backingGeo, backingMat);
    emblem.add(backing);

    const logoTex = texLoader.load("/webp/assets/logo/logo.webp");
    logoTex.anisotropy = maxAniso;
    const logoMat = new THREE.SpriteMaterial({ map: logoTex, transparent: true, depthWrite: false });
    const logoSprite = new THREE.Sprite(logoMat);
    logoSprite.scale.set(0.7, 0.7, 1);
    emblem.add(logoSprite);

    const core = new THREE.Group();
    world.add(core);
    const wireGeo = new THREE.IcosahedronGeometry(0.82, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xf43f5e,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    core.add(wire);

    const glowCanvas = document.createElement("canvas");
    glowCanvas.width = glowCanvas.height = 256;
    const gctx = glowCanvas.getContext("2d");
    if (gctx) {
      const g = gctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      g.addColorStop(0, "rgba(244, 63, 94, 0.35)");
      g.addColorStop(0.4, "rgba(244, 63, 94, 0.08)");
      g.addColorStop(1, "rgba(0, 0, 0, 0)");
      gctx.fillStyle = g;
      gctx.fillRect(0, 0, 256, 256);
    }
    const glowTex = new THREE.CanvasTexture(glowCanvas);
    const haloMat = new THREE.SpriteMaterial({
      map: glowTex,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 0.55,
    });
    const halo = new THREE.Sprite(haloMat);
    halo.scale.set(3.8, 3.8, 1);
    world.add(halo);

    /* ----- Rings ----- */

    const makeRingLine = (radius: number, opacity: number) => {
      const pts: THREE.Vector3[] = [];
      for (let k = 0; k <= 160; k++) {
        const a = (k / 160) * TAU;
        pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
      }
      const mat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity });
      const line = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), mat);
      rings.add(line);
      return { line, mat };
    };
    const outerRing = makeRingLine(OUTER_R, 0.14);
    const innerRing = makeRingLine(INNER_R, 0.08);

    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0xf43f5e,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const pulseGeo = new THREE.RingGeometry(0.95, 1.0, 128).rotateX(-Math.PI / 2);
    const pulse = new THREE.Mesh(pulseGeo, pulseMat);
    rings.add(pulse);

    /* ----- Ambient stars ----- */

    const particleCount = 100;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const rr = 3.2 + Math.random() * 5.5;
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

    /* ----- Category cards ----- */

    const makeCardTexture = (cat: Category, active: boolean) => {
      const cv = document.createElement("canvas");
      cv.width = CARD_W * CARD_SCALE;
      cv.height = CARD_H * CARD_SCALE;
      paintCard(cv, cat, active);
      const tex = new THREE.CanvasTexture(cv);
      tex.anisotropy = maxAniso;
      return tex;
    };

    const cardGeo = new THREE.PlaneGeometry(CARD_WORLD_W, CARD_WORLD_H);

    const cards = CATS.map((cat) => {
      const texIdle = makeCardTexture(cat, false);
      const texActive = makeCardTexture(cat, true);
      const mat = new THREE.MeshBasicMaterial({ map: texIdle, transparent: true, depthWrite: false });
      const mesh = new THREE.Mesh(cardGeo, mat);
      scene.add(mesh);
      return { mesh, mat, texIdle, texActive, f: 0 };
    });

    /* ----- SaaS logo badges ----- */

    const badgeGeo = new THREE.PlaneGeometry(LOGO_WORLD, LOGO_WORLD);
    const badges = SAAS_PRODUCTS.map((prod, i) => {
      const cv = document.createElement("canvas");
      cv.width = cv.height = 160;
      const ctx = cv.getContext("2d");
      const tex = new THREE.CanvasTexture(cv);
      tex.anisotropy = 4;

      const img = new Image();
      img.onload = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, 160, 160);
        ctx.beginPath();
        ctx.arc(80, 80, 76, 0, TAU);
        ctx.fillStyle = "rgba(12, 12, 16, 0.94)";
        ctx.fill();
        ctx.save();
        ctx.beginPath();
        ctx.arc(80, 80, 66, 0, TAU);
        ctx.clip();
        ctx.drawImage(img, 22, 22, 116, 116);
        ctx.restore();
        ctx.beginPath();
        ctx.arc(80, 80, 74, 0, TAU);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.14)";
        ctx.stroke();
        tex.needsUpdate = true;
      };
      img.src = prod.logo;

      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false });
      const mesh = new THREE.Mesh(badgeGeo, mat);
      scene.add(mesh);
      return { mesh, mat, tex, base: (i / SAAS_PRODUCTS.length) * TAU };
    });

    /* ----- State ----- */

    let sel = activeRef.current;
    let pulseAt = -9;
    let hover = -1;
    let elapsed = reduce ? 4 : 0;
    let ringAngle = Math.PI / 2 - sel * (TAU / CATS.length);

    const applyMaps = () => {
      cards.forEach((cd, i) => {
        cd.mat.map = i === sel ? cd.texActive : cd.texIdle;
      });
    };
    applyMaps();

    /* ----- Layout & Resize ----- */

    let base = 1;
    const RMAX = OUTER_R + CARD_WORLD_W / 2;

    const resize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;

      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const halfW = 3.65 * camera.aspect;
      const wide = w > 860 && w / h > 1.05;

      if (wide) {
        base = Math.min(1.05, (halfW * 0.54) / RMAX);
        world.position.set(halfW * 0.44, 0, 0);
      } else {
        base = Math.max(0.48, Math.min(0.72, (halfW * 0.92) / RMAX));
        world.position.set(0, -2.2, 0);
      }
      world.scale.setScalar(base);
    };

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
    const cardMeshes = cards.map((c) => c.mesh);

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

    const frame = () => {
      reqId = requestAnimationFrame(frame);

      const dt = Math.min(0.05, clock.getDelta());
      if (!visible || document.hidden) return;

      if (!reduce) elapsed += dt;
      const t = elapsed;

      if (activeRef.current !== sel) {
        sel = activeRef.current;
        pulseAt = t;
        applyMaps();
      }

      const intro = reduce ? 1 : 1 - Math.pow(1 - Math.min(1, t / 2.2), 3);

      mx = damp(mx, tx, 2.5, dt);
      my = damp(my, ty, 2.5, dt);
      eul.set(TILT_X + my * 0.05, mx * 0.16, 0);
      rings.rotation.copy(eul);

      const target = Math.PI / 2 - sel * (TAU / CATS.length);
      let d = (target - ringAngle) % TAU;
      if (d > Math.PI) d -= TAU;
      if (d < -Math.PI) d += TAU;
      ringAngle = reduce ? target : ringAngle + d * (1 - Math.exp(-3.2 * dt));

      emblem.quaternion.copy(camera.quaternion);
      emblem.scale.setScalar(intro * (1 + (reduce ? 0 : Math.sin(t * 1.4) * 0.015)));
      core.rotation.y = t * 0.16;
      core.rotation.x = t * 0.07;
      core.scale.setScalar(intro);
      wireMat.opacity = 0.18 * intro;
      haloMat.opacity = 0.55 * intro + (reduce ? 0 : Math.sin(t * 1.2) * 0.03);
      parts.rotation.y = t * 0.01;

      const k = (t - pulseAt) / 1.4;
      if (!reduce && k >= 0 && k < 1) {
        pulse.scale.setScalar(1 + (1 - Math.pow(1 - k, 3)) * 2.6);
        pulseMat.opacity = 0.3 * (1 - k);
      } else {
        pulseMat.opacity = 0;
      }

      cards.forEach((cd, i) => {
        const on = i === sel;
        cd.f = reduce ? (on ? 1 : 0) : damp(cd.f, on ? 1 : 0, 5, dt);

        const a = ringAngle + i * (TAU / CATS.length);
        const depth = (Math.sin(a) + 1) / 2;

        v.set(Math.cos(a) * OUTER_R * intro, 0, Math.sin(a) * OUTER_R * intro)
          .applyEuler(eul)
          .multiplyScalar(base)
          .add(world.position);

        cd.mesh.position.copy(v);
        cd.mesh.quaternion.copy(camera.quaternion);
        cd.mesh.scale.setScalar(base * (0.88 + 0.12 * depth) * (1 + 0.05 * cd.f));
        cd.mat.opacity = intro * (0.3 + 0.7 * depth) * (0.6 + 0.4 * cd.f);
        cd.mesh.renderOrder = 30 + Math.round(depth * 10) + (on ? 10 : 0);
      });

      outerRing.mat.opacity = 0.14 * intro;
      innerRing.mat.opacity = 0.08 * intro;

      badges.forEach((b) => {
        const a = b.base - (reduce ? 0 : t * 0.1);
        const depth = (Math.sin(a) + 1) / 2;

        v.set(Math.cos(a) * INNER_R * intro, 0, Math.sin(a) * INNER_R * intro)
          .applyEuler(eul)
          .multiplyScalar(base)
          .add(world.position);

        b.mesh.position.copy(v);
        b.mesh.quaternion.copy(camera.quaternion);
        b.mesh.scale.setScalar(base * (0.85 + 0.15 * depth));
        b.mat.opacity = intro * (0.35 + 0.65 * depth);
        b.mesh.renderOrder = 15 + Math.round(depth * 10);
      });

      renderer.render(scene, camera);
    };

    frame();

    return () => {
      cancelAnimationFrame(reqId);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointermove", onCanvasMove);
      canvas.removeEventListener("pointerleave", onCanvasLeave);
      canvas.removeEventListener("click", onCanvasClick);

      cards.forEach((cd) => {
        cd.texIdle.dispose();
        cd.texActive.dispose();
        cd.mat.dispose();
      });
      cardGeo.dispose();

      badges.forEach((b) => {
        b.tex.dispose();
        b.mat.dispose();
      });
      badgeGeo.dispose();

      backingGeo.dispose();
      backingMat.dispose();
      logoTex.dispose();
      logoMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      glowTex.dispose();
      haloMat.dispose();
      outerRing.line.geometry.dispose();
      outerRing.mat.dispose();
      innerRing.line.geometry.dispose();
      innerRing.mat.dispose();
      pulseGeo.dispose();
      pulseMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      renderer.dispose();
    };
  }, [select]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[72vh] lg:min-h-[78vh] flex items-center border-b border-zinc-900 bg-[#050507] py-8 md:py-12 overflow-hidden"
      aria-label="Devopstrio platform ecosystem"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_45%,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e0e12_1px,transparent_1px),linear-gradient(to_bottom,#0e0e12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none z-0 opacity-30" />

      {/* Fullscreen 3D Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full block z-[1] ${sceneFailed ? "hidden" : ""}`}
      />

      {/* Hero Content on the Left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pointer-events-none">
        <div className="max-w-xl pointer-events-auto">
          {/* Eyebrow badge */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-400 text-xs sm:text-sm font-medium mb-5 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-rose-400" />
            <span>Enterprise Platform Ecosystem</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            className="text-4xl sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem] font-bold tracking-tight leading-[1.1] text-white mb-5 text-balance"
          >
            Build, Launch & Scale <span className="text-rose-500">Digital Platforms</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-lg mb-8"
          >
            SaaS products, AI, cloud, data and security platforms, all built to run securely in your
            own cloud.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: EASE }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#categories"
              className="group inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(244,63,94,0.35)] transition-all duration-200 hover:bg-rose-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <span>Explore Platforms</span>
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 backdrop-blur-sm"
            >
              <span>Request Demo</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
