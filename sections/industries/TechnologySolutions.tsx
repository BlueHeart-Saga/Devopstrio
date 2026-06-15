"use client";

import React from "react";
import { Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const techSolutions = [
  {
    title: "Zero-Trust Mesh Networks",
    desc: "Enforcing microsegmentation policies at the network kernel level using eBPF and Cilium frameworks."
  },
  {
    title: "Automated Canary Deployments",
    desc: "Integrating ArgoCD triggers that gradually shift user traffic and automatically roll back on error spikes."
  },
  {
    title: "Cognitive Retrieval Engines",
    desc: "Deploying private vector database indexes connected to LLMs to answer complex client policy queries."
  }
];

export function TechnologySolutions() {
  return (
    <section id="solutions" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">

            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              CO-ENGINEERED PLATFORMS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Technology solutions <span className="font-semibold text-rose-500">ready to launch</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techSolutions.map((sol, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-zinc-955/15 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-6">
                  <Zap size={14} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">{sol.title}</h4>
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light">{sol.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
