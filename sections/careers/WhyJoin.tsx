"use client";

import React from "react";
import { Briefcase, Globe, BookOpen, Award } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function WhyJoin() {
  const cards = [
    {
      title: "Accelerate Growth",
      desc: "Work on enterprise-scale cloud, artificial intelligence, and digital transformation architectures.",
      icon: <Briefcase size={22} className="text-rose-500" />
    },
    {
      title: "Global Corridors",
      desc: "Collaborate on secure software frameworks across office sites in the UK, US, and India.",
      icon: <Globe size={22} className="text-rose-500" />
    },
    {
      title: "Continuous Learning",
      desc: "Access cloud exam sponsorships, structured study cohorts, and advanced R&D labs.",
      icon: <BookOpen size={22} className="text-rose-500" />
    },
    {
      title: "Meaningful Impact",
      desc: "Build platforms that secure data, optimize operations, and solve complex technology issues.",
      icon: <Award size={22} className="text-rose-500" />
    }
  ];

  return (
    <section className="py-24 bg-[#030303] border-b border-zinc-900/60">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl text-left mb-16">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Why Us</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Accelerate your path in <span className="font-semibold text-rose-500">digital engineering</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="group h-full bg-zinc-950/20 border border-zinc-900 rounded-3xl p-6 md:p-8 hover:border-rose-500/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.012),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-rose-950/20 border border-rose-500/10 flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-150 mb-3 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-zinc-450 leading-relaxed font-light">
                    {card.desc}
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
