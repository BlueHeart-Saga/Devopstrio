"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Shield, Cpu, TrendingUp, Zap, Activity } from "lucide-react";

interface CapabilityBenefitsProps {
  benefits: string[];
  overrideTitle?: string;
  overrideSubtitle?: string;
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

export function CapabilityBenefits({ 
  benefits,
  overrideTitle,
  overrideSubtitle
}: CapabilityBenefitsProps) {
  return (
    <section id="benefits" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Subtle Background Glow to tie in with theme */}
      <div className="absolute top-[20%] right-[-10%] w-[30%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title Block AND Stack of Elegant Benefit Cards */}
          <div className="lg:col-span-7 flex flex-col gap-10 w-full text-left">
            {/* Title Block */}
            <div className="flex flex-col items-start z-20">
              <Reveal>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                    TECHNICAL ADVANTAGE
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-6 text-white uppercase">
                  {overrideTitle || <>Key outcomes &amp; <span className="text-rose-500">technical benefits</span></>}
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-zinc-450 text-xs sm:text-sm leading-relaxed font-semibold max-w-2xl mb-8">
                  {overrideSubtitle || "We measure our success by the stability, security, and cost efficiency we deliver. Through automated pipelines, continuous optimization, and strict SOC-2 compliance, our capabilities translate directly into quantified business advantage."}
                </p>
              </Reveal>
            </div>

            {/* Stack of Elegant Benefit Cards */}
            <div className="flex flex-col gap-6 w-full mt-4">
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
                      <div className="z-10 pr-12 text-left">
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

          {/* Right Column: Premium Sticky Benefit Image (No borders or boxing) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 w-full z-20">
            <Reveal delay={0.2} className="w-full">
              <img
                src="/assets/Services-Page/capability/benifit1.png"
                alt="Capability Technical Benefits"
                className="w-full h-auto object-contain pointer-events-none select-none"
              />
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
