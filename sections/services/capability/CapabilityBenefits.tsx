"use client";

import { getSubpageContent } from "@/data/services/subpage-content-registry";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Shield, Cpu, TrendingUp, Zap, Activity } from "lucide-react";

interface CapabilityBenefitsProps {
  capabilitySlug?: string;
  serviceSlug?: string;
  benefits: string[];
  overrideTitle?: React.ReactNode;
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
  capabilitySlug,
  serviceSlug,
  overrideTitle,
  overrideSubtitle
}: CapabilityBenefitsProps) {
  const subpage = capabilitySlug ? getSubpageContent(serviceSlug || "", capabilitySlug) : undefined;
  const activeBenefits = subpage?.benefits || [
    {
      id: "01",
      title: "Improved Code Maintainability",
      desc: "Automated AST parsing and architectural dependency mapping systematically decouple monolithic entanglements and dead execution paths, substantially lowering cyclomatic complexity and accelerating future developer velocity."
    },
    {
      id: "02",
      title: "Reduced Technical Debt & Risk",
      desc: "Systematic cataloguing of legacy dependencies and obsolete frameworks enables non-breaking refactoring iterations that eliminate compounding maintenance overhead and enhance security posture."
    },
    {
      id: "03",
      title: "Safer Application Modernisation",
      desc: "Multi-tier automated regression suites, static analysis guardrails, and cryptographic dependency scanning guarantee functional parity with zero unplanned business disruption throughout deployment."
    }
  ];
  return (
    <section id="benefits" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Subtle Background Glow to tie in with theme */}
      <div className="absolute top-[20%] right-[-10%] w-[30%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title Block AND Neat Editorial Benefit Blocks */}
          <div className="lg:col-span-7 flex flex-col gap-10 w-full text-left">
            {/* Title Block */}
            <div className="flex flex-col items-start z-20">
              <Reveal>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
                  {overrideTitle || <>Key outcomes &amp; <span className="text-rose-500 font-semibold">technical benefits</span></>}
                </h2>
              </Reveal>
            </div>

            {/* Editorial Content Blocks (Replaces bulky 3 card boxes with neat concise editorial feed) */}
            {/* PREVIOUS 3-CARD CODE COMMENTED OUT:
            <div className="flex flex-col gap-6 w-full mt-4">
              {benefits.map((benefit, idx) => {
                const icon = icons[idx % icons.length];
                const tag = tags[idx % tags.length];
                const numStr = (idx + 1).toString().padStart(2, "0");

                return (
                  <Reveal key={idx} delay={idx * 0.05}>
                    <div className="group relative flex items-start gap-6 p-6 border border-zinc-900/80 hover:border-zinc-800/80 bg-zinc-950/20 hover:bg-zinc-900/5 rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-md">
                      <div className="absolute right-4 top-4 font-mono text-zinc-900/25 text-5xl font-black select-none pointer-events-none">
                        {numStr}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mt-1 flex-shrink-0">
                        {icon}
                      </div>
                      <div className="z-10 pr-12 text-left">
                        <p className="text-base sm:text-lg text-zinc-100 leading-relaxed font-semibold">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            */}

            <div className="flex flex-col divide-y divide-zinc-800/80 border-t border-b border-zinc-800/80 w-full mt-4">
              {activeBenefits.map((benefit, idx) => (
                <Reveal key={idx} delay={(idx + 1) * 0.05}>
                  <div className="py-6 flex items-start gap-5 text-left">
                    <span className="text-2xl font-semibold text-rose-500 font-mono tracking-tight flex-shrink-0">
                      {benefit.id || `0${idx + 1}`}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Sticky Benefit Image */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 w-full z-20">
            <Reveal delay={0.2} className="w-full">
              <img
                src="/webp/assets/Services-Page/capability/benifit1.webp"
                alt="Capability Technical Benefits"
                className="w-full h-auto object-contain pointer-events-none select-none"
                loading="lazy"
              />
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
