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
    <section id="future-tech" className="w-full py-24 md:py-32 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-600/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10">
        
        <Reveal className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            R&D ROADMAP
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Future <span className="text-rose-500">Technologies</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Our strategic vision timeline, researching and prototyping technologies that will define enterprise architectures over the next decade.
          </p>
        </Reveal>

        {/* Premium Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main glowing timeline bar */}
          <div className="absolute left-[27px] md:left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-rose-500/50 via-rose-500/10 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {items.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.1}>
                <div className="relative flex items-start gap-6 md:gap-10 group">
                  
                  {/* Glowing Node */}
                  <div className="relative z-10 shrink-0 mt-4 md:mt-6">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-lg group-hover:border-rose-500/50 group-hover:shadow-[0_0_30px_rgba(225,29,72,0.2)] transition-all duration-500">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 group-hover:scale-110 group-hover:bg-rose-500/20 transition-all duration-500">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Glassmorphic Content Card */}
                  <div className="flex-1 relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:-translate-y-1">
                    
                    {/* Massive Background Year */}
                    <div className="absolute -bottom-6 -right-4 text-[120px] md:text-[160px] font-black italic leading-none text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.05] transition-colors duration-500">
                      {item.year}
                    </div>

                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold font-mono mb-5 group-hover:bg-rose-500/20 transition-colors">
                        {item.year} Objective
                      </span>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-rose-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
