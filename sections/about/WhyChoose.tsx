"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    num: "01",
    title: "Proven at Enterprise Scale",
    desc: "We've delivered 100+ transformation projects for organisations including BP, NHS, Deloitte, Asda, BT, GXO, and Metrobank. Not pilots. Not proofs-of-concept. Full-scale, production deployments handling millions of daily transactions.",
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
    badge: "Strategy · Build · Operate · Optimise"
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
    <section className="w-full py-20 bg-black text-white relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">

        {/* Intro Grid */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-rose-500">
                Why Devopstrio
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              There are many options. <span className="font-bold block">Here's why enterprises choose us.</span>
            </h2>
          </div>
          <div className="text-zinc-400 text-base md:text-lg leading-relaxed font-bold">
            <p>
              Not because we're the loudest. Because when it matters — when migrations go live, when systems need to hold, when the business is watching — we deliver.
            </p>
          </div>
        </Reveal>

        {/* Reasons Grid (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item) => (
            <Reveal 
              key={item.num}
              className="bg-zinc-950/20 border border-zinc-900 p-8 rounded-xl flex flex-col justify-between hover:border-zinc-800 transition-colors"
            >
              <div>
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-2">
                  REASON {item.num}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold mb-6">
                  {item.desc}
                </p>
              </div>
              
              <div className="p-3 bg-emerald-950/20 border border-emerald-900/60 rounded text-emerald-400 text-[10px] md:text-[11px] font-semibold">
                {item.badge}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
