"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Cpu, Globe, Award, Shield } from "lucide-react";

import Link from "next/link";

export function EngineeringStory() {
  const highlights = [
    {
      title: "Onshore Governance",
      desc: "Local strategy and advisory close to client locations.",
      icon: <Shield className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Offshore Scale",
      desc: "Focused delivery centers providing engineering capacity.",
      icon: <Cpu className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Cost Efficiency",
      desc: "Balanced resource allocation without quality loss.",
      icon: <Award className="w-5 h-5 text-rose-500" />
    }
  ];

  return (
    <section className="py-24 md:py-32 relative bg-[#030303] max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Story copy */}
        <div className="lg:col-span-7 text-left space-y-6">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              Core Story
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Rooted in Engineering.<br />
              <span className="text-rose-500">Designed for Global Impact.</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-medium">
              Our strength comes from building deep technical capabilities close to where our teams operate, while aligning every engagement to the expectations of global businesses. This means clients gain the benefit of dedicated engineering delivery, modern <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud expertise</Link>, agile collaboration, and cost-efficient execution—without compromising on quality, governance, or long-term <Link href="/contact#contact-form" className="text-[#E11D48] hover:underline">partnership</Link>.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Whether supporting a fast-growing startup, a mid-sized business, or a large <Link href="/services/digital-transformation" className="text-[#E11D48] hover:underline">enterprise transformation</Link> initiative, Devopstrio brings together the right people, processes, and platforms to deliver across borders with confidence. Feel free to <Link href="/contact#contact-form" className="text-[#E11D48] hover:underline">reach out</Link> to our team.
            </p>
          </Reveal>
        </div>

        {/* Right Column: Mini Highlights list */}
        <div className="lg:col-span-5 space-y-6">
          {highlights.map((h, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-950/50 border border-zinc-900 flex items-start gap-4 hover:border-rose-500/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                {h.icon}
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">{h.title}</h4>
                <p className="text-xs text-zinc-450 leading-relaxed mt-1 font-medium">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default EngineeringStory;
