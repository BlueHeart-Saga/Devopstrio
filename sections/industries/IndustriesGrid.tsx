"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const industries = [
  {
    slug: "banking-finance",
    name: "Banking & Finance",
    desc: "Scale high-frequency ledger processing, fraud-detection pipelines, and secure payment pathways under SOC-2 guidelines.",
    href: "/industries/banking-finance"
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    desc: "Build medical information portals, sensor data collectors, and predictive health trackers fully aligned with HIPAA.",
    href: "/industries/healthcare-life-sciences"
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    desc: "Implement omni-channel purchase engines, automated inventory tracking logs, and personalized commerce recommendations.",
    href: "/industries/retail-ecommerce"
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    desc: "Deploy predictive machine maintenance metrics, automated supply chain forecasting filters, and industrial IoT monitoring systems.",
    href: "/industries/manufacturing"
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    desc: "Manage high-bandwidth network monitors, automated customer billing databases, and 5G edge telemetry nodes.",
    href: "/industries/telecommunications"
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    desc: "Deploy content recommendation algorithms, low-overhead video stream CDNs, and digital rights ledger systems.",
    href: "/industries/media-entertainment"
  },
  {
    slug: "education",
    name: "Education",
    desc: "Develop secure learning management systems (LMS), digital collaboration workspaces, and scalable interactive class portals.",
    href: "/industries/education"
  },
  {
    slug: "government-public-sector",
    name: "Government & Public Sector",
    desc: "Migrate public services to secure cloud infrastructures, build citizen access portals, and align with federal safety parameters.",
    href: "/industries/government-public-sector"
  }
];

export function IndustriesGrid() {
  return (
    <section className="w-full py-24 bg-black text-white border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Section Header */}
        <Reveal className="mb-16 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Core Domains
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Specialized solutions for <span className="font-semibold text-rose-500">global industries</span>
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl">
            Choose an industry to see our specialized software capabilities, case studies, and compliance alignments.
          </p>
        </Reveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <Reveal key={ind.slug} delay={idx * 0.05} className="h-full">
              <Link
                href={ind.href}
                className="group flex flex-col justify-between h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer"
              >
                {/* Radial Glow on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[9px] font-mono text-zinc-550 tracking-wider">
                      {(idx + 1).toString().padStart(2, "0")} / SECTOR
                    </span>
                    <span className="w-8 h-8 rounded-full bg-zinc-900/40 border border-zinc-800/60 flex items-center justify-center text-zinc-500 group-hover:text-rose-500 group-hover:bg-rose-950/20 group-hover:border-rose-500/20 transition-all duration-300">
                      <ArrowUpRight size={13} className="stroke-[2.5]" />
                    </span>
                  </div>

                  <h3 className="text-xs font-semibold text-zinc-100 group-hover:text-white transition-colors mb-3 text-left">
                    {ind.name}
                  </h3>

                  <p className="text-[11px] text-zinc-450 leading-relaxed font-light mb-6 text-left group-hover:text-zinc-350 transition-colors">
                    {ind.desc}
                  </p>
                </div>

                <div className="border-t border-zinc-900/60 pt-4 mt-auto text-left">
                  <span className="text-[10px] text-rose-500 font-semibold group-hover:translate-x-1 transition-transform duration-250 inline-flex items-center gap-1">
                    View sector detail <span className="transition-transform group-hover:translate-x-0.5">→</span>
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
