"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Users, Briefcase, Settings, Compass, ArrowRight } from "lucide-react";
import Link from "next/link";

const models = [
  {
    id: "dedicated-teams",
    name: "Dedicated Engineering Teams",
    icon: Users,
    desc: "Scale your capacity with fully integrated, self-organizing teams of elite developers, QA specialists, and certified DevOps engineers under agile coordination.",
    bullets: [
      "Flexible scaling within 2 weeks",
      "Direct integration with your toolchain",
      "SLA-backed performance milestones",
      "Full IP ownership & clear governance"
    ]
  },
  {
    id: "project-based",
    name: "Project-Based Delivery",
    icon: Briefcase,
    desc: "End-to-end execution of a defined scope of work. We handle the design, architecture, implementation, and launch with guaranteed timelines.",
    bullets: [
      "Fixed-price or time-and-materials",
      "Clearly documented requirements & scope",
      "Dedicated Project Manager alignment",
      "Comprehensive handover & training"
    ]
  },
  {
    id: "managed-services",
    name: "24/7 Managed Services",
    icon: Settings,
    desc: "Outsource SRE operations, multi-cloud infrastructure maintenance, and application support. Active monitoring and incident handling with guaranteed SLAs.",
    bullets: [
      "99.99% platform uptime guarantees",
      "<15 min triage for critical incidents",
      "Proactive FinOps & cost controls",
      "Continuous compliance monitoring"
    ]
  },
  {
    id: "strategic-consulting",
    name: "Strategic Consulting & Advisory",
    icon: Compass,
    desc: "Acquire specialized advisory on cloud migrations, zero-trust architectures, database scalability, GenAI readiness, and technical debt evaluations.",
    bullets: [
      "Principal architect workshops",
      "Comprehensive audits & blueprinting",
      "Technology evaluation reports",
      "FinOps & licensing optimizations"
    ]
  }
];

export function EngagementModels() {
  return (
    <section className="w-full py-24 bg-[#080808] text-white border-b border-zinc-900 relative" id="engagement-models">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.03),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Block */}
        <Reveal className="mb-16 text-left max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
              ENGAGEMENT MODELS
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight leading-snug">
            Tailored partnerships built for <span className="font-semibold text-rose-500">long-term value</span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mt-3 max-w-xl">
            Choose the model that best fits your organizational structure, roadmap velocity, and operational requirements.
          </p>
        </Reveal>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model, idx) => {
            const Icon = model.icon;
            return (
              <Reveal key={model.id} delay={idx * 0.05} className="h-full">
                <div className="group flex flex-col justify-between h-full bg-black border border-zinc-900 rounded-3xl p-8 hover:border-zinc-850 hover:bg-zinc-950/20 transition-all duration-300 relative overflow-hidden">
                  {/* Accent glow on hover */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div>
                    {/* Icon and Category Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 group-hover:bg-rose-950/20 group-hover:border-rose-900/40 transition-colors duration-300">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-zinc-100 group-hover:text-white transition-colors">
                        {model.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-zinc-400 leading-relaxed font-light mb-8">
                      {model.desc}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-3 border-t border-zinc-900/80 pt-6">
                      {model.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[11px] text-zinc-350 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70 mt-1.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-950 flex items-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-rose-500 transition-colors"
                    >
                      <span>Inquire about model</span>
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
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
