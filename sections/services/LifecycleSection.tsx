"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Search, PenTool, Terminal, Rocket, Activity, Globe } from "lucide-react";
import Link from "next/link";

interface PhaseItem {
  step: string;
  name: string;
  desc: React.ReactNode;
  icon: React.ComponentType<{ size?: number | string }>;
}

const phases: PhaseItem[] = [
  {
    step: "01",
    name: "Discover",
    desc: <>Audit existing application codebases, infrastructure configurations, and <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">security bottlenecks</Link>.</>,
    icon: Search
  },
  {
    step: "02",
    name: "Design",
    desc: <>Strategize and architect secure <Link href="/services/cloud-services" className="text-rose-500 hover:underline">multi-cloud landing zones</Link>, migration blueprints, and system decoupling.</>,
    icon: PenTool
  },
  {
    step: "03",
    name: "Build",
    desc: <>Write reproducible <Link href="/services/devops-automation" className="text-rose-500 hover:underline">Infrastructure as Code</Link> templates and containerized developer portals.</>,
    icon: Terminal
  },
  {
    step: "04",
    name: "Deploy",
    desc: <>Configure automated <Link href="/services/devops-automation" className="text-rose-500 hover:underline">GitOps pipelines</Link> and scale orchestrators for zero-downtime releases.</>,
    icon: Rocket
  },
  {
    step: "05",
    name: "Optimize",
    desc: <>Set up real-time telemetry dashboards, <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cost optimization</Link> tracking, and auto-scaling controls.</>,
    icon: Activity
  },
  {
    step: "06",
    name: "Scale",
    desc: <>Replicate regional clusters, establish high-availability grids, and secure <Link href="/ecosystem/global-delivery" className="text-rose-500 hover:underline">global endpoints</Link>.</>,
    icon: Globe
  }
];

export function LifecycleSection() {
  const staggerClasses = [
    "translate-y-0",                      // Card 1
    "md:translate-y-8 lg:translate-y-8",  // Card 2
    "lg:translate-y-16",                  // Card 3
    "md:translate-y-8 lg:translate-y-0",  // Card 4
    "lg:translate-y-8",                   // Card 5
    "md:translate-y-8 lg:translate-y-16", // Card 6
  ];

  return (
    <section className="w-full py-10 md:py-14 bg-[#030303] text-white relative" id="delivery-framework">
      {/* Background glowing mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Header Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            {/* <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ENGAGEMENT LIFECYCLE
            </span> */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white font-sans">
              The Devopstrio <span className="text-rose-500 font-semibold">Delivery Framework</span>
            </h2>
            {/* <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed">
              From initial consultation to operational optimization, we ensure full clarity, security alignment, and milestone check-ins.
            </p> */}
          </div>
        </Reveal>

        {/* 6-Step Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <Reveal key={phase.step} delay={idx * 0.05}>
                <div className={`group relative overflow-hidden rounded-3xl p-8 min-h-[180px] h-full flex flex-col justify-between bg-gradient-to-br from-[#1a060a]/90 via-[#0d0406]/95 to-[#080808]/95 hover:from-[#2c0910] hover:via-[#140508] hover:to-[#0a0a0a] border border-white/10 hover:border-white/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all duration-500 ${staggerClasses[idx] || ""}`}>
                  
                  {/* Internal ambient glowing mesh */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-rose-600/15 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    {/* Header: Large Styled Number & Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-6xl font-mono font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-rose-400/50 via-rose-500/20 to-transparent select-none drop-shadow-[0_4px_16px_rgba(225,29,72,0.25)]">
                        {phase.step}
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shadow-[0_0_15px_rgba(225,29,72,0.15)] group-hover:scale-105 transition-transform duration-300">
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-rose-400 transition-colors duration-300 font-sans">
                      {phase.name}
                    </h3>

                    {/* Step Description */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed pt-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                          {phase.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
