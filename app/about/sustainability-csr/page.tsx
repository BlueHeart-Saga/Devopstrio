"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { Globe, Leaf, Cpu, Award } from "lucide-react";

export default function SustainabilityCsrPage() {
  const csrPillars = [
    {
      icon: <Cpu className="text-emerald-500 w-8 h-8" />,
      title: "Green Cloud Engineering",
      desc: "We practice carbon-aware software scheduling, consolidate computing runtimes, and optimize server utilization to keep digital infrastructure footprint minimal."
    },
    {
      icon: <Leaf className="text-emerald-500 w-8 h-8" />,
      title: "Carbon-Efficient Code",
      desc: "Our architects write low-power execution loops, configure efficient caching layers, and use lightweight compilers like Go and Rust to decrease CPU draw."
    },
    {
      icon: <Globe className="text-emerald-500 w-8 h-8" />,
      title: "Environmental Projects",
      desc: "We offset our administrative footprint by sponsoring vetted global reforestation initiatives and community clean-energy installations."
    },
    {
      icon: <Award className="text-emerald-500 w-8 h-8" />,
      title: "Community Education",
      desc: "Our team sponsors open-source green-IT utilities, hosts free university cloud architecture workshops, and supports developer upskilling."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      {/* Ambient emerald/green glow in corner */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none" />

      {/* Page Header */}
      <section className="pt-20 pb-16 text-center relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.04),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <span className="text-[10px] font-mono tracking-widest text-emerald-500 uppercase block mb-3 font-bold">Social Impact & Green IT</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-white leading-tight">
              Sustainability & <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">CSR</span>
            </h1>
            <p className="text-zinc-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              We believe in building technology that advances business goals without taxing the planet. Discover our commitment to sustainable software and active community support.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-black">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <Reveal>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-500 mb-3 block">Our Philosophy</span>
              <h2 className="text-2xl md:text-3xl font-light leading-snug">
                Co-Engineering a <span className="font-semibold text-emerald-400">cleaner digital footprint.</span>
              </h2>
              <p className="text-zinc-450 text-xs md:text-sm leading-relaxed mt-4 font-semibold">
                Every API call, database write, and pipeline build consumes energy. We work closely with client engineering leads to optimize their cloud resources, resulting in both cost savings and reduced environmental impact.
              </p>
            </Reveal>

            <Reveal className="p-8 bg-zinc-950/60 border border-zinc-900 border-l-4 border-l-emerald-500">
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest block mb-2">Key Metric</span>
              <div className="text-4xl font-extrabold font-mono text-white mb-2">565 tons</div>
              <p className="text-xs text-zinc-400 font-medium">Estimated metric tons of CO₂ emissions prevented annually through optimized enterprise client infrastructure and resource consolidation.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {csrPillars.map((pillar, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="mb-6">{pillar.icon}</div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-semibold">{pillar.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AboutCTA />
    </main>
  );
}
