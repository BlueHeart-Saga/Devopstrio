"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Shield, Cpu, TrendingUp, Zap, Activity } from "lucide-react";

interface CapabilityBenefitsProps {
  benefits: string[];
}

const icons = [
  <Shield size={16} key="shield" />,
  <Cpu size={16} key="cpu" />,
  <TrendingUp size={16} key="trending" />,
  <Zap size={16} key="zap" />,
  <Activity size={16} key="activity" />
];

const tags = [
  "BUSINESS VALUE",
  "OPERATIONAL OUTCOME",
  "TECHNICAL ADVANTAGE",
  "COMPLIANCE & SECURITY",
  "FINOPS OPTIMIZATION"
];

export function CapabilityBenefits({ benefits }: CapabilityBenefitsProps) {
  return (
    <section id="benefits" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Subtle Background Glow to tie in with theme */}
      <div className="absolute top-[20%] right-[-10%] w-[30%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Premium Title Block */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col items-start text-left z-20">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-950/40 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
                  TECHNICAL ADVANTAGE
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-[1.15] text-white mb-6">
                Key outcomes and
                <br />
                <span className="text-[#E11D48] whitespace-nowrap">technical benefits</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-zinc-450 text-xs sm:text-sm leading-relaxed font-semibold max-w-md mb-8">
                We measure our success by the stability, security, and cost efficiency we deliver. Through automated pipelines, continuous optimization, and strict SOC-2 compliance, our capabilities translate directly into quantified business advantage.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex items-center gap-3">
                <div className="h-12 w-[2px] bg-gradient-to-b from-[#E11D48] to-transparent" />
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                  ENTERPRISE GRADED / SLA BACKED
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Stack of Elegant Benefit Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            {benefits.map((benefit, idx) => {
              const icon = icons[idx % icons.length];
              const tag = tags[idx % tags.length];
              const numStr = (idx + 1).toString().padStart(2, "0");

              return (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="group relative flex items-start gap-6 p-6 border border-zinc-900/80 hover:border-zinc-800/80 bg-zinc-950/20 hover:bg-zinc-900/5 rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-md">
                    {/* Watermark Number */}
                    <div className="absolute right-4 top-4 font-mono text-zinc-900/25 text-5xl font-black select-none pointer-events-none transition-all duration-300 group-hover:scale-105 group-hover:text-zinc-900/40">
                      {numStr}
                    </div>

                    {/* Icon container */}
                    <div className="w-10 h-10 rounded-xl bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mt-1 flex-shrink-0 group-hover:bg-rose-950/30 group-hover:border-rose-500/30 transition-all duration-300">
                      {icon}
                    </div>

                    {/* Content */}
                    <div className="z-10 pr-12">
                      <span className="block text-[9px] font-mono tracking-widest text-rose-500 mb-2 font-semibold">
                        {tag}
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-semibold group-hover:text-white transition-colors duration-300">
                        {benefit}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}

