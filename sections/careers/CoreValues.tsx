"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbulb, Target, Users, Star, BookOpen, ShieldCheck } from "lucide-react";

const cultureValues = [
  {
    step: "01",
    title: "Innovation",
    desc: "Always exploring new ideas, frameworks, and next-gen technologies to solve complex problems at scale.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Ownership",
    desc: "Empowered decision-making. We trust our engineers to take the lead and deliver their best work.",
    icon: Target,
  },
  {
    step: "03",
    title: "Collaboration",
    desc: "One global team. We break down silos to co-engineer unified architectures across oceans.",
    icon: Users,
  },
  {
    step: "04",
    title: "Excellence",
    desc: "Setting high engineering standards in code quality, security audits, and deployment stability.",
    icon: Star,
  },
  {
    step: "05",
    title: "Learning",
    desc: "Continuous growth mindset. We sponsor certificates, run study groups, and celebrate curiosity.",
    icon: BookOpen,
  },
  {
    step: "06",
    title: "Integrity",
    desc: "Total trust and transparency with our team members and clients in every engagement.",
    icon: ShieldCheck,
  },
];

const staggerClasses = [
  "translate-y-0",
  "md:translate-y-8 lg:translate-y-8",
  "lg:translate-y-16",
  "md:translate-y-8 lg:translate-y-0",
  "lg:translate-y-8",
  "md:translate-y-8 lg:translate-y-16",
];

export function CoreValues() {
  return (
    <section className="w-full pt-24 pb-36 bg-[#030303] border-b border-zinc-900 relative overflow-hidden">
      {/* Background glow mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CORE VALUES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white uppercase">
              The principles that <span className="text-rose-500">define us</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Every decision, product, and partnership at Devopstrio is anchored by a core set of principles our teams live by every day.
            </p>
          </div>
        </Reveal>

        {/* 6-Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cultureValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <Reveal key={val.step} delay={idx * 0.05}>
                <div
                  className={`relative overflow-hidden bg-zinc-950/35 border border-white/10 rounded-3xl p-8 min-h-[260px] h-full flex flex-col justify-between backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:bg-zinc-900/10 hover:border-rose-500/25 hover:-translate-y-1.5 transition-all duration-300 ${staggerClasses[idx] || ""}`}
                >
                  <div>
                    {/* Large step number + icon row */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-6xl font-mono font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-rose-500/30 via-rose-500/15 to-transparent select-none drop-shadow-[0_4px_16px_rgba(225,29,72,0.25)]">
                        {val.step}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-rose-600/10 border border-rose-500/15 text-rose-500 flex items-center justify-center group-hover:border-rose-500/35 transition-colors">
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Value title */}
                    <h3 className="text-lg font-bold text-white mb-3 hover:text-rose-400 transition-colors duration-300">
                      {val.title}
                    </h3>

                    {/* Value description */}
                    <p className="text-sm text-zinc-400 leading-relaxed font-light">
                      {val.desc}
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
