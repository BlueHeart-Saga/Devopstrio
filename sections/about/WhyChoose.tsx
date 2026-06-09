"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    num: "01",
    title: "Proven at Enterprise Scale",
    desc: "We've delivered 100+ transformation projects for organizations including BP, NHS, Deloitte, Asda, BT, GXO, and Metrobank. Not pilots. Not proofs-of-concept. Full-scale, production deployments handling millions of daily transactions.",
    badge: "✓ 50+ enterprise clients served globally"
  },
  {
    num: "02",
    title: "ROI is Our Metric, Not Effort",
    desc: "Every engagement is measured against real business outcomes — not hours billed or tickets closed. We track cost savings, deployment frequency, uptime improvement, and revenue impact. Our clients see it in their numbers.",
    badge: "✓ £56,000+ monthly savings for Asda · 42% cost reduction for financial cloud migration · 73% faster deployments"
  },
  {
    num: "03",
    title: "End-to-End, Not Piecemeal",
    desc: "Most vendors own one layer. We own the entire stack — strategy, architecture, engineering, security, operations, and ongoing management. No handoff gaps, no finger-pointing, no gaps in accountability.",
    badge: "Strategy · Build · Operate · Optimize"
  },
  {
    num: "04",
    title: "Security is Not Optional Here",
    desc: "ISO 27001, ISO 42001, GDPR, HIPAA, CCPA, SOC 2, Cyber Essentials — every project ships compliant by design. Our SecOps team is embedded in every delivery, not consulted at the end.",
    badge: "✓ 18 active certifications and compliance frameworks"
  },
  {
    num: "05",
    title: "Global Reach, Local Accountability",
    desc: "Six offices across four countries. 525+ professionals. One team, one standard of delivery. Whether you're in London, New York, Bangalore, or Chennai — you get the same quality, the same response time, the same commitment.",
    badge: "✓ <2 hour average response time · 24/7 global operations"
  },
  {
    num: "06",
    title: "We're Invested in Your Success",
    desc: "Our ODC model means we're a co-investor in your outcomes — not a time-and-materials vendor. The larger the engagement, the greater our investment in your team's success: dedicated L&D, productivity tooling, engineering review, and sustainability initiatives at no extra cost.",
    badge: "15–50% Direct Savings · CMMI Level 5 · Co-Investment Model"
  }
];

export function WhyChoose() {
  return (
    <section className="w-full py-16 md:py-20 bg-black text-white relative overflow-hidden">
      {/* Background ambient light glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10">

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-start mb-16">
          <Reveal>
            <div>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                Why Devopstrio
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white">
                There are many options. <br />
                Here's why <span className="text-rose-500">enterprises choose us.</span>
              </h2>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold lg:mt-9">
              Not because we're the loudest. Because when it matters — when migrations go live, when systems need to hold, when the business is watching — we deliver.
            </p>
          </Reveal>
        </div>

        {/* Reasons Grid (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((item) => (
            <Reveal key={item.num} className="w-full">
              <div className="bg-white/[0.02] border border-white/[0.06] backdrop-blur-[20px] rounded-[28px] p-8 md:p-10 hover:-translate-y-1.5 hover:border-rose-500/35 hover:shadow-[0_20px_50px_rgba(225,29,72,0.12)] transition-all duration-300 flex flex-col justify-between min-h-[320px] group relative overflow-hidden">
                
                {/* Giant Absolute Number in Top Right */}
                <span className="text-6xl font-black text-white/[0.02] select-none leading-none absolute right-8 top-8 group-hover:text-rose-500/5 transition-colors font-sans">
                  {item.num}
                </span>

                {/* Card Header & Body */}
                <div>
                  <span className="text-[9px] font-bold text-rose-500 uppercase tracking-[0.25em] block mb-3">
                    Reason {item.num}
                  </span>
                  
                  <h3 className="text-white text-base md:text-lg font-bold tracking-tight mb-3 group-hover:text-rose-350 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom glassmorphic badge */}
                <div className="p-4 bg-emerald-950/10 border border-emerald-900/30 rounded-2xl text-emerald-400 text-[10px] md:text-xs font-semibold leading-relaxed group-hover:border-emerald-500/20 group-hover:bg-emerald-950/20 transition-all duration-300">
                  {item.badge}
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;
