"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function PlatformsHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-between bg-black overflow-hidden pt-12 md:pt-16 border-b border-zinc-900/60">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 xl:px-8 relative z-10 flex flex-col items-center text-center flex-grow justify-center pt-2">

        {/* Center Main Heading */}
        <Reveal delay={0.1} className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-4 text-white text-center">
            Build, Launch & Scale Digital Products
          </h1>
        </Reveal>

        {/* Asymmetrical Bento Masonry Grid - Glassmorphism UI */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 w-full mt-4 select-none overflow-visible pb-10">

          {/* Column 1 (HCM Image + Availability Metric) */}
          <div className="flex flex-col gap-5 justify-end">
            <div className="relative h-44 md:h-52 rounded-[24px] overflow-hidden bg-zinc-900/40 backdrop-blur-2xl border-0 p-5 flex flex-col justify-end text-left group shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:bg-zinc-900/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 pointer-events-none" />
              <Image
                src="/webp/assets/ecosystem/herocard/platform/4.webp"
                alt="Humanex Workspace"
                fill
                className="object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <div className="relative z-20">
                {/* <span className="text-[10px] md:text-xs font-mono tracking-widest text-rose-500 uppercase block mb-1 font-semibold">Humanex</span> */}
                <h3 className="text-sm md:text-base font-semibold text-white tracking-tight leading-snug">
                  Next-Gen HCM workspace for agile teams.
                </h3>
              </div>
            </div>

            <div className="h-28 md:h-36 rounded-[24px] bg-rose-500/10 backdrop-blur-2xl border-0 p-5 flex flex-col justify-center text-left shadow-[0_8px_32px_0_rgba(244,63,94,0.08)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-transparent to-transparent opacity-40 pointer-events-none" />
              <span className="text-3xl md:text-4xl font-semibold text-rose-500 font-mono tracking-tighter leading-none relative z-10">
                99.9%
              </span>
            </div>
          </div>

          {/* Column 2 (Tall Analytics Dashboard Card) */}
          <div className="flex flex-col justify-end">
            <div className="relative h-76 md:h-[380px] rounded-[24px] overflow-hidden bg-zinc-900/40 backdrop-blur-2xl border-0 p-6 flex flex-col justify-between text-left group shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:bg-zinc-900/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 pointer-events-none" />
              <Image
                src="/webp/assets/ecosystem/herocard/platform/2.webp"
                alt="Brio Dashboard"
                fill
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

              <div className="relative z-20">
                <span className="text-3xl md:text-4xl font-semibold text-white font-mono tracking-tight block">
                  100K+
                </span>
              </div>

              <div className="relative z-20">
                {/* <span className="text-[10px] md:text-xs font-mono tracking-widest text-rose-500 uppercase block mb-1 font-semibold">Brio Platform</span> */}
                <h3 className="text-sm md:text-base font-semibold text-white tracking-tight leading-snug">
                  Advanced multi-tenant analytics dashboard.
                </h3>
              </div>
            </div>
          </div>

          {/* Column 3 (Platform Integrations Callout) */}
          <div className="flex flex-col justify-end">
            <div className="h-64 md:h-76 rounded-[24px] bg-gradient-to-br from-rose-950/30 via-zinc-950/80 to-zinc-950/90 backdrop-blur-2xl border-0 p-6 flex flex-col justify-center text-left relative overflow-hidden group shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.15),transparent_70%)] rounded-full pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-25 pointer-events-none" />

              <div className="relative z-10">
                {/* <span className="text-[10px] md:text-xs font-mono tracking-widest text-rose-500 uppercase block mb-2 font-semibold">INTEGRATIONS</span> */}
                <h3 className="text-base md:text-lg font-semibold text-white tracking-tight leading-snug">
                  Connect & Scale with 20+ SaaS Integrations
                </h3>
              </div>
            </div>
          </div>

          {/* Column 4 (Tall AI Platform Visor Card) */}
          <div className="flex flex-col justify-end">
            <div className="relative h-76 md:h-[380px] rounded-[24px] overflow-hidden bg-zinc-900/40 backdrop-blur-2xl border-0 p-6 flex flex-col justify-between text-left group shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:bg-zinc-900/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 pointer-events-none" />
              <Image
                src="/webp/assets/ecosystem/herocard/platform/3.webp"
                alt="SafeSign Verification"
                fill
                className="object-cover opacity-45 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

              <div className="relative z-20">
                <span className="text-2xl md:text-3xl font-semibold text-emerald-500 font-mono tracking-tight block">
                  AI-Powered
                </span>
              </div>

              <div className="relative z-20">
                <span className="text-[10px] md:text-xs font-mono tracking-widest text-rose-500 uppercase block mb-1 font-semibold">SafeSign</span>
                <h3 className="text-sm md:text-base font-semibold text-white tracking-tight leading-snug">
                  Electronic signature and biometric integrity.
                </h3>
              </div>
            </div>
          </div>

          {/* Column 5 (Ecosystem Badge + HealthTech operations) */}
          <div className="flex flex-col gap-5 justify-end">
            <div className="h-28 md:h-36 rounded-[24px] bg-emerald-500/10 backdrop-blur-2xl border-0 p-5 flex flex-col justify-center text-left shadow-[0_8px_32px_0_rgba(16,185,129,0.08)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-40 pointer-events-none" />
              <h3 className="text-base md:text-lg font-semibold text-emerald-500 tracking-tight leading-snug relative z-10">
                One Unified SaaS Ecosystem
              </h3>
            </div>

            <div className="relative h-44 md:h-52 rounded-[24px] overflow-hidden bg-zinc-900/40 backdrop-blur-2xl border-0 p-5 flex flex-col justify-end text-left group shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:bg-zinc-900/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 pointer-events-none" />
              <Image
                src="/webp/assets/ecosystem/herocard/platform/1.webp"
                alt="CareSuite Interface"
                fill
                className="object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <div className="relative z-20">
                {/* <span className="text-[10px] md:text-xs font-mono tracking-widest text-rose-500 uppercase block mb-1 font-semibold">CareSuite</span> */}
                <h3 className="text-sm md:text-base font-semibold text-white tracking-tight leading-snug">
                  Enterprise operations for clinical workflows.
                </h3>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom black blur fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-20" />
    </section>
  );
}
