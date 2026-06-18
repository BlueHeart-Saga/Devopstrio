"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Search, PenTool, Terminal, Rocket, Activity, Globe } from "lucide-react";

const phases = [
  {
    step: "01",
    name: "Discover",
    desc: "Audit existing application codebases, infrastructure configurations, and security bottlenecks.",
    icon: Search
  },
  {
    step: "02",
    name: "Design",
    desc: "Strategize and architect secure multi-cloud landing zones, migration blueprints, and decoupling.",
    icon: PenTool
  },
  {
    step: "03",
    name: "Build",
    desc: "Write reproducible Infrastructure as Code templates and containerized developer portals.",
    icon: Terminal
  },
  {
    step: "04",
    name: "Deploy",
    desc: "Configure automated GitOps pipelines and scale orchestrators for zero-downtime releases.",
    icon: Rocket
  },
  {
    step: "05",
    name: "Optimize",
    desc: "Set up real-time telemetry dashboards, cost optimization tracking, and auto-scaling controls.",
    icon: Activity
  },
  {
    step: "06",
    name: "Scale",
    desc: "Replicate regional clusters, establish high-availability grids, and secure global endpoints.",
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
    <section className="w-full pt-24 pb-36 bg-[#030303] text-white border-b border-zinc-900 relative" id="delivery-framework">
      {/* Background glowing mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Header Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ENGAGEMENT LIFECYCLE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white uppercase">
              THE DEVOPSTRIO <span className="text-rose-500">DELIVERY MODEL</span>
            </h2>
            <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed">
              From initial consultation to operational optimization, we ensure full clarity, security alignment, and milestone check-ins.
            </p>
          </div>
        </Reveal>

        {/* 6-Step Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <Reveal key={phase.step} delay={idx * 0.05}>
                <div className={`relative overflow-hidden bg-zinc-950/35 border border-white/10 rounded-3xl p-8 min-h-[260px] h-full flex flex-col justify-between backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:bg-zinc-900/10 transition-all duration-300 ${staggerClasses[idx] || ""}`}>
                  
                  <div>
                    {/* Header: Large Styled Number & Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-6xl font-mono font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-rose-500/30 via-rose-500/15 to-transparent select-none drop-shadow-[0_4px_16px_rgba(225,29,72,0.25)]">
                        {phase.step}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-rose-600/10 text-rose-500 flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-white mb-3 hover:text-rose-400 transition-colors duration-300">
                      {phase.name}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-zinc-300 font-semibold leading-relaxed">
                      {phase.desc}
                    </p>
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
