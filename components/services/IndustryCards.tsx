"use client";

import React from "react";
import { Landmark, Briefcase, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export interface IndustryCardsProps {
  industries: string[];
}

export function IndustryCards({ industries }: IndustryCardsProps) {
  // Simple icon mapping helper
  const getIcon = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes("bank") || lower.includes("financ")) {
      return <Landmark className="text-rose-500" size={20} />;
    }
    if (lower.includes("retail") || lower.includes("commerce") || lower.includes("store")) {
      return <ShoppingBag className="text-rose-500" size={20} />;
    }
    return <Briefcase className="text-rose-500" size={20} />;
  };

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-16 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Industries
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Strategic sector <span className="font-semibold text-rose-500">applications</span>
          </h2>
        </Reveal>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((item, idx) => {
            const parts = item.split(":");
            const title = parts[0] || "Sector Specialization";
            const desc = parts.slice(1).join(":") || "";
            return (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 hover:scale-[1.02] group text-left relative overflow-hidden cursor-pointer">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div>
                    <div className="mb-6 w-11 h-11 rounded-xl bg-rose-950/15 border border-rose-900/20 flex items-center justify-center group-hover:border-rose-500/30 transition-colors">
                      {getIcon(title)}
                    </div>
                    <h3 className="text-xs font-semibold text-zinc-100 mb-3 tracking-wide group-hover:text-white transition-colors">
                      {title}
                    </h3>
                    {desc && (
                      <p className="text-[11px] text-zinc-450 leading-relaxed font-light group-hover:text-zinc-350 transition-colors">
                        {desc.trim()}
                      </p>
                    )}
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
