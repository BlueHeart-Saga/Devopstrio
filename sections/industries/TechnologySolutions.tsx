"use client";

import React from "react";
import { Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface TechSolutionItem {
  title: string;
  desc: React.ReactNode;
}

const techSolutions: TechSolutionItem[] = [
  {
    title: "Zero-Trust Mesh Networks",
    desc: <>Enforcing microsegmentation policies at the network kernel level using eBPF and <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">Cilium frameworks</Link>.</>
  },
  {
    title: "Automated Canary Deployments",
    desc: <>Integrating <Link href="/services/devops-automation" className="text-rose-500 hover:underline">ArgoCD triggers</Link> that gradually shift user traffic and automatically roll back on error spikes.</>
  },
  {
    title: "Cognitive Retrieval Engines",
    desc: <>Deploying private <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">vector database</Link> indexes connected to LLMs to answer complex client policy queries.</>
  }
];

export function TechnologySolutions() {
  return (
    <section id="solutions" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              Co-Engineered Platforms
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
            Technology solutions <span className="text-[#E11D48]">ready to launch</span>
          </h2>
        </Reveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {techSolutions.map((sol, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="group h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] p-8 flex flex-col justify-between min-h-[220px] hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer">
                
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-[12px] bg-rose-950/15 border border-[#E11D48]/20 flex items-center justify-center text-[#E11D48] group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-300 mb-6">
                    <Zap size={16} />
                  </div>
                  
                  <h4 className="text-base font-bold text-white mb-2 tracking-tight transition-colors duration-300">
                    {sol.title}
                  </h4>
                  
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                    {sol.desc}
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
