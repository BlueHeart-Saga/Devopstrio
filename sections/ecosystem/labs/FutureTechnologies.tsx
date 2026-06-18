"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Cpu, Zap, Activity, ShieldCheck, HelpCircle } from "lucide-react";

interface TechRoadmapItem {
  year: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export function FutureTechnologies() {
  const items: TechRoadmapItem[] = [
    { year: "2026", title: "Autonomous AI Agents", desc: "Co-programming localized loop routines executing multi-system tasks independently.", icon: <Cpu size={16} className="text-rose-500" /> },
    { year: "2027", title: "Edge AI Networks", desc: "Deploying model inference tasks straight to client hardware clusters, minimizing bandwidth costs.", icon: <Zap size={16} className="text-rose-500" /> },
    { year: "2028", title: "Sustainable Computing", desc: "Formulating carbon calculators auditing resource usages and automatically shutting down idle CPU groups.", icon: <Activity size={16} className="text-rose-500" /> },
    { year: "2029", title: "Post-Quantum Cryptography", desc: "Transitioning database clusters and secrets vaults to quantum-resistant encryption algorithms.", icon: <ShieldCheck size={16} className="text-rose-500" /> }
  ];

  return (
    <section id="future-tech" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/[0.01] rounded-full blur-[130px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            R&D ROADMAP
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Future <span className="text-rose-500">Technologies</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Our strategic vision timeline, researching and prototyping technologies that will define enterprise architectures over the next decade.
          </p>
        </Reveal>

        {/* Roadmap Timeline */}
        <div className="relative border-l border-zinc-900 ml-4 pl-8 space-y-12">
          {items.map((item, idx) => (
            <div key={item.title} className="relative group">
              {/* Timeline circle */}
              <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center group-hover:border-rose-500/40 transition-all duration-300 z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-2">
                  <span className="text-sm font-mono font-bold text-rose-500">{item.year}</span>
                </div>
                <div className="md:col-span-10">
                  <div className="flex items-center gap-2.5 mb-2">
                    {item.icon}
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{item.title}</h4>
                  </div>
                  <p className="text-[11px] text-zinc-450 font-semibold leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
