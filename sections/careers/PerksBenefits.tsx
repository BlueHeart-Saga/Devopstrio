"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  {
    name: "Health & Wellness",
    desc: "Comprehensive medical cover and mental health support for you and your family.",
    image: "/assets/Industries-page/industriescard/Healthcare & Life Sciences.png",
  },
  {
    name: "Learning Budget",
    desc: "Sponsored cloud certifications, study guides, and global conference access.",
    image: "/assets/Industries-page/industriescard/Education.png",
  },
  {
    name: "Hybrid Working",
    desc: "Flexible schedules blending home office and modern premium workspaces.",
    image: "/assets/Industries-page/industriescard/Government & Public Sector.png",
  },
  {
    name: "Global Mobility",
    desc: "Opportunities to work across our UK, US, and India office locations.",
    image: "/assets/Industries-page/industriescard/Telecommunications.png",
  },
  {
    name: "Flexible Leave",
    desc: "Generous time off to rest, recharge, travel, and enjoy life fully.",
    image: "/assets/Industries-page/industriescard/Media & Entertainment.png",
  },
  {
    name: "Recognition Programs",
    desc: "Performance rewards, spot bonuses, and team achievement milestones.",
    image: "/assets/Industries-page/industriescard/Manufacturing.png",
  },
  {
    name: "Competitive Salary",
    desc: "Premium payouts, annual bonuses, stock options, and equity grants.",
    image: "/assets/Industries-page/industriescard/Banking and finance.png",
  },
  {
    name: "Career Advancement",
    desc: "Structured progression tracks, architecture mentoring, and leadership paths.",
    image: "/assets/Industries-page/industriescard/Retail & E-Commerce.png",
  },
];

export function PerksBenefits() {
  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-rose-600/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              PERKS & REWARDS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white uppercase">
              Benefits built for your <span className="text-rose-500">wellbeing & growth</span>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              We go beyond compensation — investing in the health, career, and quality of life of every team member.
            </p>
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((ben, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div className="group flex flex-col h-full bg-[#0d0d0d] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.14] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300">

                {/* Image — 8px padding inset, inner rounded corners */}
                <div className="p-2">
                  <div className="relative w-full h-44 rounded-xl overflow-hidden">
                    <img
                      src={ben.image}
                      alt={ben.name}
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                    />
                    {/* Subtle rose accent top line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-500 to-rose-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Text content */}
                <div className="px-4 pt-3 pb-5 flex flex-col gap-1.5">
                  <h4 className="text-[13px] font-bold text-white group-hover:text-rose-400 transition-colors duration-300 leading-snug">
                    {ben.name}
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                    {ben.desc}
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
