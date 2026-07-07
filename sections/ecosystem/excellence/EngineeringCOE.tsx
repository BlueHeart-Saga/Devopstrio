"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface CoeItem {
  id: string;
  name: string;
  focus: string;
  desc: string;
}

export function EngineeringCOE() {
  const centers: CoeItem[] = [
    { id: "01", name: "Cloud Excellence", focus: "Azure, AWS, OCI", desc: "Deploying multi-region systems, load balancers, and cost optimization structures." },
    { id: "02", name: "AI Excellence", focus: "LLMs, Agents, Automation", desc: "Connecting secure inference loops, agent routers, and vector pipelines." },
    { id: "03", name: "DevOps Excellence", focus: "CI/CD, IaC, GitOps", desc: "Configuring Kubernetes clusters, Terraform scripts, and git workflow steps." },
    { id: "04", name: "Security Excellence", focus: "DevSecOps, Compliance", desc: "Setting up SAST scanning gates, compliance reviews, and least-privilege policies." },
    { id: "05", name: "Data Excellence", focus: "Analytics, Warehousing", desc: "Designing lakehouse database grids, stream processing, and SQL views." }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.01] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            VERIFIED PILLARS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Centers of <span className="text-rose-500">Excellence</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Specialized engineering capability practices designed to accelerate execution and secure software integrations.
          </p>
        </Reveal>

        {/* 5-Column Clean Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {centers.map((center, idx) => (
            <Reveal key={center.name} delay={idx * 0.05} className="h-full">
              <div
                className="bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 hover:bg-zinc-900/10 hover:-translate-y-1 transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between min-h-[230px] h-full group"
              >
                <div>
                  {/* Watermarked Step Number in place of Icon */}
                  <span className="text-xl md:text-2xl font-bold font-mono text-rose-500/80 mb-5 block transition-colors group-hover:text-rose-400">
                    {center.id}
                  </span>

                  {/* Title & Capability Focus */}
                  <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-1">
                    {center.name}
                  </h4>
                  
                  <span className="block text-[9px] font-mono text-rose-500/90 uppercase tracking-widest font-bold mb-4">
                    {center.focus}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 font-semibold leading-relaxed">
                    {center.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
