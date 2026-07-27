"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Zap, Cloud, Shield, BarChart3, Quote } from "lucide-react";
import Link from "next/link";

interface Metric {
  value: string;
  label: string;
}

interface Outcome {
  value: string;
  label: string;
  desc: string;
  icon: React.ComponentType<any>;
  color: string;
}

const kpiMetrics: Metric[] = [
  { value: "2500+", label: "Projects Delivered" },
  { value: "525+", label: "Technology Experts" },
  { value: "25+", label: "Industry Domains" },
  { value: "98%", label: "Client Satisfaction" },
];

const outcomes: Outcome[] = [
  {
    value: "60% Faster Delivery",
    label: "Speed",
    desc: "Accelerating time-to-market through automation.",
    icon: Zap,
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20"
  },
  {
    value: "40% Reduced Infrastructure",
    label: "Costs",
    desc: "Optimized cloud and platform operations.",
    icon: Cloud,
    color: "text-sky-500 bg-sky-500/10 border-sky-500/20"
  },
  {
    value: "99.99% Availability",
    label: "Platform",
    desc: "Reliable, resilient enterprise systems.",
    icon: Shield,
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
  },
  {
    value: "300% Increase",
    label: "Efficiency",
    desc: "Driving productivity through innovation.",
    icon: BarChart3,
    color: "text-rose-500 bg-rose-500/10 border-rose-500/20"
  },
];

export function ImpactSection() {
  return (
    <section className="w-full bg-[#030303] text-white relative overflow-hidden">

      {/* Top Full-Bleed Poster Area */}
      <div
        className="w-full min-h-[85vh] lg:min-h-screen relative flex flex-col justify-between bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/Home-page/impact/meet.png')" }}
      >
        {/* Soft edge-blending gradients to merge poster into dark page and optimize text contrast */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#030303] via-[#030303]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 bg-gradient-to-l from-[#030303] via-[#030303]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex-grow flex flex-col justify-between py-12 md:py-20 lg:py-24">

          {/* Top Header Row: Logo Branding */}
          <div className="flex justify-between items-center w-full border-b border-zinc-900/60 pb-6 mb-12">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-400">
                DEVOPSTRIO IMPACT REPORT
              </span>
            </div>
            <div className="text-zinc-600 text-[10px] tracking-widest uppercase font-semibold">
              EST. 2021
            </div>
          </div>

          {/* Asymmetric Poster Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch flex-grow min-h-[400px]">

            {/* Left Side: Quote (top-aligned) */}
            <div className="lg:col-span-5 flex flex-col justify-start pr-4 pt-4">
              <Reveal>
                <div className="mb-4 text-rose-600">
                  <Quote size={48} className="opacity-90 stroke-[1.5]" />
                </div>
                <div className="space-y-3">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-light text-zinc-100 tracking-tight leading-snug">
                    Innovation creates <br />
                    <span className="font-bold text-white">possibilities.</span>
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-light text-rose-500 tracking-tight leading-snug">
                    Impact creates <br />
                    <span className="font-bold text-rose-500">measurable business outcomes.</span>
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Center Area: empty spacing to let full-bleed background handshake design show */}
            <div className="hidden lg:block lg:col-span-3 pointer-events-none" />

            {/* Right Side: Heading (bottom-aligned) */}
            <div className="lg:col-span-4 flex flex-col justify-end text-left lg:text-right lg:items-end pl-4 pb-4">
              <Reveal>
                <span className="text-[10px] font-black tracking-[0.25em] text-rose-500 uppercase block mb-4">
                  ENTERPRISE VALUE CREATION
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
                  Transforming <br />
                  Innovation <br />
                  Into <span className="text-rose-500">Impact</span>
                </h2>
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-medium max-w-xs">
                  Every solution we deliver is designed to create lasting business value through technology, <Link href="/services/devops-automation" className="text-rose-500 hover:underline">automation</Link>, <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud</Link>, <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">AI</Link>, and <Link href="/services/software-development" className="text-rose-500 hover:underline">engineering excellence</Link>.
                </p>
              </Reveal>
            </div>

          </div>

        </div>
      </div>

      {/* Metrics Section: KPI Cards & Success Outcomes */}
      <div className="w-full bg-[#030303] relative z-10 border-t border-zinc-900/60 py-16">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

          {/* Mid-Section: KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-b border-zinc-900/60 pb-16 mb-16">
            {kpiMetrics.map((kpi, idx) => (
              <Reveal key={kpi.label} delay={idx * 0.05}>
                <div className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-rose-500 tracking-tight mb-1">
                    {kpi.value}
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    {kpi.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Section: Success Outcome Metrics */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <span className="text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase">
                Proven Outcomes
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {outcomes.map((outcome, idx) => (
                <Reveal key={outcome.value} delay={idx * 0.05}>
                  <div className="bg-zinc-950/30 border border-zinc-900/50 rounded-2xl p-6 hover:border-zinc-800/60 transition-all duration-300 flex flex-col h-full shadow-lg">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${outcome.color}`}>
                      <outcome.icon size={20} className="stroke-[2]" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                      {outcome.value}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                      {outcome.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Bottom Center Premium Tagline */}
          <div className="flex justify-center items-center mt-12">
            <div className="relative flex items-center justify-center w-full max-w-lg">
              <div className="absolute inset-x-0 h-[1px] bg-zinc-900/60" />
              <span className="relative z-10 px-6 bg-[#030303] text-[10px] font-black tracking-[0.3em] text-rose-500 uppercase text-center">
                VALUE DELIVERED WORLDWIDE
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
