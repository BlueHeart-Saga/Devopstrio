"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

/* ==================================================================
 * ARCHITECTURE BLUEPRINT COVERFLOW
 * 3D perspective continuous flow carousel showcasing architecture diagrams.
 * Features:
 * - 3D Perspective angle & continuous auto-glide
 * - Floor mirror reflection (identical to 3D video display)
 * - Pause on hover / focus
 * - Click side cards to focus, keyboard & touch swipe support
 * ================================================================== */

export const ARCHITECTURE_BLUEPRINTS = [
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    category: "Multi-Cloud IaC",
    subtitle: "Enterprise landing zones, network isolation & automated Terraform blueprints.",
    image: "/webp/assets/ecosystem/herocard/acc-frameworks/Group-23.webp",
    href: "/ecosystem/accelerators-frameworks/cloud-accelerator"
  },
  {
    id: "ai-prompt-orchestration",
    title: "AI Prompt Orchestration",
    category: "GenAI & Agent Swarms",
    subtitle: "Multi-agent reasoning loops, semantic caching & enterprise RAG pipelines.",
    image: "/webp/assets/ecosystem/herocard/acc-frameworks/Group-24.webp",
    href: "/ecosystem/accelerators-frameworks/ai-framework"
  },
  {
    id: "devsecops-automation",
    title: "DevSecOps Automation",
    category: "Zero-Trust CI/CD",
    subtitle: "Automated shift-left security scans, admission gates & compliance auditing.",
    image: "/webp/assets/ecosystem/herocard/acc-frameworks/Group-25-1.webp",
    href: "/ecosystem/accelerators-frameworks/devops-accelerator"
  },
  {
    id: "custom-saas-boilerplate",
    title: "Custom SaaS Boilerplate",
    category: "Production SaaS Engine",
    subtitle: "Multi-tenant tenant isolation, billing meters & authentication fabric.",
    image: "/webp/assets/ecosystem/herocard/acc-frameworks/Group-26.webp",
    href: "/ecosystem/accelerators-frameworks"
  },
  {
    id: "identity-integration",
    title: "Identity Integration",
    category: "Enterprise IAM",
    subtitle: "Unified Single Sign-On, OAuth2/OIDC brokers & granular RBAC policies.",
    image: "/webp/assets/ecosystem/herocard/acc-frameworks/Group-27-1.webp",
    href: "/ecosystem/accelerators-frameworks/security-framework"
  },
  {
    id: "serverless-blueprints",
    title: "Serverless Blueprints",
    category: "Event-Driven Compute",
    subtitle: "Asynchronous pub/sub event meshes, queue workers & auto-scaling runtimes.",
    image: "/webp/assets/ecosystem/herocard/acc-frameworks/Group-28.webp",
    href: "/ecosystem/accelerators-frameworks/cloud-accelerator"
  }
];

const AUTOPLAY_MS = 3400;

function wrapOffset(i: number, active: number, n: number) {
  let d = (i - active) % n;
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
}

export function BlueprintCoverflow() {
  const n = ARCHITECTURE_BLUEPRINTS.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);
  const dragStart = useRef<number | null>(null);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Continuous auto-advance
  useEffect(() => {
    if (paused || reduce) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % n);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, reduce, n]);

  const go = (step: number) => {
    setActive((prev) => (prev + step + n) % n);
  };

  const current = ARCHITECTURE_BLUEPRINTS[active];

  return (
    <section
      id="blueprints-flow"
      className="relative w-full overflow-hidden bg-black py-20 lg:py-24 text-white border-b border-zinc-900/80 select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <style>{`
        .bpc-card {
          transition: transform 0.85s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.85s ease, box-shadow 0.85s ease;
          will-change: transform, opacity;
        }
        @keyframes bpcFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Atmospheric Radial Glow behind the stage */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="mb-12 md:mb-14 flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.25em] text-rose-500 mb-3.5 block">
              ARCHITECTURE BLUEPRINTS
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-4">
              Reusable Engineering <span className="text-rose-500">Assets</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
              Explore battle-tested cloud frameworks, autonomous AI fabrics, and production deployment blueprints in motion.
            </p>
          </div>
        </Reveal>

        {/* 3D Coverflow Stage with Floor Depth */}
        <div
          className="relative h-[320px] sm:h-[400px] md:h-[450px] w-full select-none overflow-hidden [perspective:1400px] flex items-center justify-center pt-2 pb-10"
          onPointerDown={(e) => {
            dragStart.current = e.clientX;
          }}
          onPointerUp={(e) => {
            if (dragStart.current === null) return;
            const dx = e.clientX - dragStart.current;
            dragStart.current = null;
            if (dx < -40) go(1);
            if (dx > 40) go(-1);
          }}
          onPointerLeave={() => {
            dragStart.current = null;
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
          }}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Reusable Engineering Architecture Blueprints"
        >
          {ARCHITECTURE_BLUEPRINTS.map((bp, i) => {
            const d = wrapOffset(i, active, n);
            const abs = Math.abs(d);
            const visible = abs <= 2;

            // 3D positioning matching continuous Coverflow ribbon
            const x = d === 0 ? 0 : d > 0 ? d * 36 + 6 : d * 36 - 6; // % offset
            const z = -abs * 150; // depth
            const rot = d === 0 ? 0 : d > 0 ? -28 : 34; // 3D Y-axis tilt
            const scale = d === 0 ? 1.05 : Math.max(0.72, 1 - abs * 0.14);

            return (
              <button
                key={bp.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${bp.title}${d === 0 ? " (focused)" : ""}`}
                className="bpc-card group absolute left-1/2 top-1/2 w-[min(84vw,440px)] sm:w-[min(72vw,500px)] md:w-[540px] cursor-pointer rounded-2xl md:rounded-3xl border text-left overflow-hidden bg-zinc-950/90 shadow-2xl transition-all"
                style={{
                  aspectRatio: "1.65 / 1",
                  transform: `translate(-50%, -50%) translate3d(${x}%, 0, ${z}px) rotateY(${rot}deg) scale(${scale})`,
                  opacity: visible ? (abs === 0 ? 1 : abs === 1 ? 0.78 : 0.35) : 0,
                  zIndex: 20 - abs,
                  pointerEvents: visible ? "auto" : "none",
                  borderColor:
                    d === 0 ? "rgba(244,63,94,0.6)" : "rgba(255,255,255,0.12)",
                  boxShadow:
                    d === 0
                      ? "0 0 0 1px rgba(244,63,94,0.6), 0 25px 70px -15px rgba(244,63,94,0.35)"
                      : "0 20px 50px -20px rgba(0,0,0,0.9)",
                }}
                tabIndex={-1}
              >
                {/* Inner Image Canvas */}
                <div className="relative w-full h-full overflow-hidden bg-black/80">
                  <Image
                    src={bp.image}
                    alt={bp.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 440px, 540px"
                    priority={i === 0}
                  />

                  {/* Glassmorphic Top Category Pill */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-rose-400 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                      {bp.category}
                    </span>
                  </div>

                  {/* Gradient Vignette for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Caption & Navigation Controls */}
        <div className="mt-8 flex flex-col items-center gap-5">
          
          {/* Active Blueprint Meta info with smooth CSS fade */}
          <div
            key={active}
            className="text-center max-w-xl mx-auto"
            style={{ animation: "bpcFade 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-rose-500">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="text-zinc-600 text-xs">/</span>
              <span className="text-xs font-mono text-zinc-400">
                {String(n).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1.5">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-3">
              {current.subtitle}
            </p>
            <Link
              href={current.href}
              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-rose-500 hover:text-rose-400 transition-colors group"
            >
              <span>Explore Architecture Blueprint</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Controls: Prev Button · Dot Indicators · Next Button */}
          <div className="flex items-center gap-4 mt-2">
            <button
              type="button"
              aria-label="Previous architecture blueprint"
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-950/60 text-zinc-300 transition-all hover:border-rose-500/60 hover:bg-rose-500/10 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Select blueprint">
              {ARCHITECTURE_BLUEPRINTS.map((bp, i) => (
                <button
                  key={bp.id}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={bp.title}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-7 bg-rose-600 shadow-[0_0_12px_rgba(225,29,72,0.6)]"
                      : "w-2 bg-zinc-800 hover:bg-zinc-600"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next architecture blueprint"
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-950/60 text-zinc-300 transition-all hover:border-rose-500/60 hover:bg-rose-500/10 hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BlueprintCoverflow;
