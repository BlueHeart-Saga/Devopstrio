"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const subServices = [
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    desc: "Deploy chatbot interfaces, recruitment automation tools, self-assessment trackers, and cognitive assistance models.",
    href: "/services/ai-data/artificial-intelligence"
  },
  {
    slug: "ai-consulting",
    name: "AI Consulting Services",
    desc: "AI strategy development, safety alignment audits, architectural design, deployment execution, and maintenance.",
    href: "/services/ai-data/ai-consulting"
  },
  {
    slug: "ai-tools",
    name: "AI Tools for Business Transformation",
    desc: "Accelerate your digital channels with our customized AI tooling catalog tuned for the 2025 corporate landscape.",
    href: "/services/ai-data/ai-tools"
  },
  {
    slug: "data-science",
    name: "Data Science",
    desc: "Incorporate customer feedback analysis algorithms, telemetry metric aggregations, and business process automation.",
    href: "/services/ai-data/data-science"
  },
  {
    slug: "database-management",
    name: "Database Creation and Management",
    desc: "Construct secure, transactional database architectures utilizing advanced scaling and performance practices.",
    href: "/services/ai-data/database-management"
  },
  {
    slug: "hire-ai-engineers",
    name: "Hire AI Engineers",
    desc: "Onboard certified AI specialists, NLP practitioners, and MLOps architects directly into your engineering workflows.",
    href: "/services/ai-data/hire-ai-engineers"
  },
  {
    slug: "robotic-integration",
    name: "AI Powered Robotic Integration",
    desc: "Harmonize hardware devices with software pipelines to run neural network evaluations directly on the edge.",
    href: "/services/ai-data/robotic-integration"
  }
];

export function AIDataSubServices() {
  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">

        <Reveal className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              AI PRACTICE CAPABILITIES
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Specialized solutions in <span className="font-semibold text-rose-500">AI & Data Engineering</span>
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl">
            Choose an area of interest to view specific frameworks, case studies, and engineering resources.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subServices.map((sub, idx) => (
            <Reveal key={sub.slug} delay={idx * 0.05} className="h-full">
              <Link
                href={sub.href}
                className="group flex flex-col justify-between h-full bg-[#080808] border border-zinc-900/60 rounded-2xl p-6 hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-zinc-650 tracking-wider">
                      {(idx + 1).toString().padStart(2, "0")} / CAPABILITY
                    </span>
                    <span className="w-8 h-8 rounded-full bg-zinc-900/50 flex items-center justify-center text-zinc-500 group-hover:text-rose-500 group-hover:bg-rose-950/20 transition-all duration-300">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors mb-3">
                    {sub.name}
                  </h3>

                  <p className="text-[11px] text-zinc-450 leading-relaxed font-light mb-6">
                    {sub.desc}
                  </p>
                </div>

                <div className="border-t border-zinc-900/80 pt-4 mt-auto">
                  <span className="text-[10px] text-rose-500 font-medium group-hover:pl-1 transition-all duration-200 inline-flex items-center gap-1">
                    Explore practice details <span>→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
