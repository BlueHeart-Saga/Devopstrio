"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { 
  Server, 
  ShieldCheck, 
  Database, 
  BarChart3, 
  Compass, 
  Settings, 
  GitBranch, 
  Cpu, 
  Key, 
  AlertTriangle,
  ArrowRight
} from "lucide-react";
import { ArchitectureStep } from "@/lib/services-utils";

interface CapabilityArchitectureProps {
  steps: ArchitectureStep[];
}

const iconMap: Record<string, any> = {
  Server,
  ShieldCheck,
  Database,
  BarChart3,
  Compass,
  Settings,
  GitBranch,
  Cpu,
  Key,
  AlertTriangle
};

export function CapabilityArchitecture({ steps }: CapabilityArchitectureProps) {
  return (
    <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Architecture Blueprint
            </span>
          </div>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-6 text-white">
            System request <span className="text-rose-500">dataflow architecture</span>
          </h2>
          <p className="text-zinc-250 text-xs md:text-sm font-semibold leading-relaxed mt-2 max-w-xl">
            A detailed trace flow mapping request pipelines from edge routing to secure database states.
          </p>
        </Reveal>

        {/* Dynamic Interactive Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Flow Line Connector */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-rose-500/5 via-rose-500/20 to-rose-500/5 hidden md:block z-0 -translate-y-[85px]" />

          {steps.map((step, idx) => {
            const IconComponent = iconMap[step.icon] || Server;
            return (
              <Reveal key={idx} delay={idx * 0.03} className="h-full z-10">
                <div className="h-full bg-zinc-950/45 border border-white/10 hover:border-rose-500/30 rounded-[32px] p-5 flex flex-col justify-between hover:bg-zinc-900/40 transition-all duration-300 relative group backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  
                  {/* Padded Rounded Image Header */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 group/img border border-white/5 bg-zinc-900/10">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover opacity-90 group-hover/img:scale-[1.03] transition-transform duration-700 pointer-events-none select-none"
                    />
                    {/* Soft reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content & Action Button */}
                  <div className="flex flex-col flex-grow justify-between text-left">
                    <div>
                      {/* Step Badge & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="block text-[10px] font-mono tracking-widest text-rose-500 uppercase font-bold">
                          {step.step}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 group-hover:scale-105 transition-transform">
                          <IconComponent size={13} />
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-rose-500 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">
                        {step.desc}
                      </p>
                    </div>

                    {/* Circular Action Button Row */}
                    <div className="flex items-center gap-3 pt-4 mt-4 border-t border-white/5">
                      <span className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-450 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-500 transition-all duration-300">
                        <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-450 group-hover:text-white transition-colors">
                        Trace Pipeline
                      </span>
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
