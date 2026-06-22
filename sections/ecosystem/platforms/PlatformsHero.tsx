"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function PlatformsHero() {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-between bg-black overflow-hidden pt-28 border-b border-zinc-900/60">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center text-center flex-grow justify-center pt-8">

        {/* Center Main Heading & Description */}
        <Reveal delay={0.1} className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white text-center">
            Build, Launch & Scale Digital Products
          </h1>
        </Reveal>

        <Reveal delay={0.2} className="max-w-3xl">
          <p className="text-zinc-300 text-xs md:text-sm lg:text-base leading-relaxed font-normal max-w-3xl text-center mx-auto opacity-95 mb-10">
            Transform ideas into enterprise-grade SaaS products, AI-powered platforms, cloud-native applications, and digital ecosystems.
          </p>
        </Reveal>

        {/* Action Pill Buttons */}
        <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4 mb-16">
          <Link
            href="#categories"
            className="inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-white text-black font-semibold text-xs tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore Platforms
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact"
            className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Request Demo
          </Link>
        </Reveal>

        {/* Asymmetrical Bento Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 w-full mt-4 select-none overflow-visible pb-10">

          {/* Column 1 (HCM Image + Availability Metric) */}
          <div className="flex flex-col gap-5 justify-end">
            <div className="relative h-44 md:h-52 rounded-[24px] overflow-hidden bg-zinc-950 border border-zinc-850 p-5 flex flex-col justify-end text-left group">
              <Image
                src="/assets/ecosystem/herocard/platform/4.png"
                alt="Humanex Workspace"
                fill
                className="object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <div className="relative z-20">
                <span className="text-[8px] font-mono tracking-widest text-rose-500 uppercase block mb-1">Humanex</span>
                <h3 className="text-[11px] md:text-[13px] font-bold text-white tracking-tight leading-snug">
                  Next-Gen HCM workspace for agile teams.
                </h3>
              </div>
            </div>

            <div className="h-28 md:h-36 rounded-[24px] bg-rose-500/10 border border-rose-500/20 p-5 flex flex-col justify-between text-left">
              <span className="text-[24px] md:text-[32px] font-black text-rose-500 font-mono tracking-tighter leading-none">
                99.9%
              </span>
              <p className="text-[9px] md:text-[10px] font-mono tracking-wider text-zinc-400 uppercase leading-snug">
                Platform availability across all custom build assets.
              </p>
            </div>
          </div>

          {/* Column 2 (Tall Analytics Dashboard Card) */}
          <div className="flex flex-col justify-end">
            <div className="relative h-76 md:h-[380px] rounded-[24px] overflow-hidden bg-zinc-950 border border-zinc-850 p-6 flex flex-col justify-between text-left group">
              <Image
                src="/assets/ecosystem/herocard/platform/2.png"
                alt="Brio Dashboard"
                fill
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

              <div className="relative z-20">
                <span className="text-[20px] md:text-[28px] font-black text-white font-mono tracking-tight block">
                  100K+
                </span>
                <span className="text-[8px] font-mono tracking-wider text-zinc-550 uppercase">ACTIVE USERS DAILY</span>
              </div>

              <div className="relative z-20">
                <span className="text-[8px] font-mono tracking-widest text-rose-500 uppercase block mb-1">Brio Platform</span>
                <h3 className="text-[12px] md:text-[14px] font-bold text-white tracking-tight leading-snug">
                  Advanced multi-tenant analytics dashboard.
                </h3>
              </div>
            </div>
          </div>

          {/* Column 3 (Platform Integrations Callout) */}
          <div className="flex flex-col justify-end">
            <div className="h-64 md:h-76 rounded-[24px] bg-gradient-to-b from-[#1c1214] to-[#0c0c0e] border border-rose-500/15 p-6 flex flex-col justify-between text-left relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1),transparent_70%)] rounded-full pointer-events-none" />

              <div>
                <span className="text-[8px] font-mono tracking-widest text-zinc-550 uppercase block mb-3">INTEGRATIONS</span>
                <h3 className="text-[13px] md:text-[15px] font-bold text-white tracking-tight leading-snug mb-2">
                  Connect & Scale with 20+ SaaS Integrations
                </h3>
                <p className="text-[9px] md:text-[10px] text-zinc-400 leading-relaxed font-normal">
                  Out-of-the-box connectors for identity, billing, CRM, and cloud platforms.
                </p>
              </div>

              <button className="w-fit inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5">
                Explore API
              </button>
            </div>
          </div>

          {/* Column 4 (Tall AI Platform Visor Card) */}
          <div className="flex flex-col justify-end">
            <div className="relative h-76 md:h-[380px] rounded-[24px] overflow-hidden bg-zinc-950 border border-zinc-850 p-6 flex flex-col justify-between text-left group">
              <Image
                src="/assets/ecosystem/herocard/platform/3.png"
                alt="SafeSign Verification"
                fill
                className="object-cover opacity-45 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

              <div className="relative z-20">
                <span className="text-[20px] md:text-[28px] font-black text-emerald-500 font-mono tracking-tight block">
                  AI-Powered
                </span>
                <span className="text-[8px] font-mono tracking-wider text-zinc-550 uppercase">VERIFICATION ENGINE</span>
              </div>

              <div className="relative z-20">
                <span className="text-[8px] font-mono tracking-widest text-rose-500 uppercase block mb-1">SafeSign</span>
                <h3 className="text-[12px] md:text-[14px] font-bold text-white tracking-tight leading-snug">
                  Electronic signature and biometric integrity.
                </h3>
              </div>
            </div>
          </div>

          {/* Column 5 (Ecosystem Badge + HealthTech operations) */}
          <div className="flex flex-col gap-5 justify-end">
            <div className="h-28 md:h-36 rounded-[24px] bg-[#0c1a16] border border-emerald-500/10 p-5 flex flex-col justify-between text-left">
              <h3 className="text-[13px] md:text-[14px] font-black text-emerald-500 tracking-tight leading-snug">
                One Unified SaaS Ecosystem
              </h3>
              <p className="text-[9px] md:text-[10px] font-normal text-zinc-400 leading-snug">
                Shared auth models, global billing schemas, and integrated data.
              </p>
            </div>

            <div className="relative h-44 md:h-52 rounded-[24px] overflow-hidden bg-zinc-950 border border-zinc-850 p-5 flex flex-col justify-end text-left group">
              <Image
                src="/assets/ecosystem/herocard/platform/1.png"
                alt="CareSuite Interface"
                fill
                className="object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <div className="relative z-20">
                <span className="text-[8px] font-mono tracking-widest text-rose-500 uppercase block mb-1">CareSuite</span>
                <h3 className="text-[11px] md:text-[13px] font-bold text-white tracking-tight leading-snug">
                  Enterprise operations for modern clinical workflows.
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
