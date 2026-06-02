"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const keyLeaders = [
  { name: "Marcus Vance", role: "Principal Cloud Architect", expertise: "Ex-AWS staff engineer specializing in high-concurrency multi-region landing zones." },
  { name: "Elena Rostova", role: "Director of AI Practice", expertise: "Specialist in enterprise agentic networks, neural orchestration, and MLOps tooling." },
  { name: "David Chen", role: "Head of Platform & SRE", expertise: "Kubernetes core contributor with extensive experience in automated CI/CD security controls." },
  { name: "Sarah Jenkins", role: "VP of Cyber Governance", expertise: "Expert in SOC-2, HIPAA compliance, zero-trust routing networks, and risk posture." }
];

export function Leadership() {
  return (
    <section className="w-full py-20 bg-[#030303] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              05 / EXPERT LEADERSHIP
            </span>
          </div>
          <h2 className="text-3xl font-light tracking-tight leading-tight">
            Led by engineering operators across <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">cloud, AI, and security</span>.
          </h2>
        </Reveal>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyLeaders.map((leader) => (
            <div 
              key={leader.name}
              className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-mono text-rose-500 tracking-wider uppercase block mb-1">PARTNER // PRACTICIAN</span>
                <h3 className="text-sm font-semibold tracking-wide text-zinc-200 mb-1 group-hover:text-white transition-colors">
                  {leader.name}
                </h3>
                <span className="block text-[11px] text-zinc-450 font-normal uppercase tracking-wider mb-4">
                  {leader.role}
                </span>
                <p className="text-xs text-zinc-450 leading-relaxed font-light">
                  {leader.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
