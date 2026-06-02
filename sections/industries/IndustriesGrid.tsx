"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const industries = [
  {
    slug: "financial-services",
    name: "Financial Services",
    desc: "Scale high-frequency ledger processing, fraud-detection pipelines, and secure payment pathways under SOC-2 guidelines.",
    href: "/industries/financial-services"
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    desc: "Build medical information portals, sensor data collectors, and predictive health trackers fully aligned with HIPAA.",
    href: "/industries/healthcare"
  },
  {
    slug: "logistics",
    name: "Logistics",
    desc: "Deploy geographic routing models, autonomous fleet tracking systems, and supply-chain warehouse calculators.",
    href: "/industries/logistics"
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    desc: "Manage high-traffic booking engines, custom package recommender filters, and real-time support chatbots.",
    href: "/industries/travel-hospitality"
  },
  {
    slug: "automotive",
    name: "Automotive",
    desc: "Configure hardware firmware communication channels, sensor telemetry ingestion pipelines, and driver navigation systems.",
    href: "/industries/automotive"
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    desc: "Deploy content recommendation algorithms, low-overhead video stream CDNs, and digital rights ledger systems.",
    href: "/industries/media-entertainment"
  },
  {
    slug: "telecom",
    name: "Telecom",
    desc: "Manage high-bandwidth network monitors, automated customer billing databases, and 5G edge telemetry nodes.",
    href: "/industries/telecom"
  },
  {
    slug: "manufacturing-retail",
    name: "Manufacturing & Retail",
    desc: "Implement predictive machine maintenance metrics, automated inventory logs, and supply-chain forecasting filters.",
    href: "/industries/manufacturing-retail"
  }
];

export function IndustriesGrid() {
  return (
    <section className="w-full py-24 bg-[#050505] text-white border-b border-zinc-900">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              CORE DOMAINS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Specialized solutions for <span className="font-semibold text-rose-500">global industries</span>
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl">
            Choose an industry to see our specialized software capabilities, case studies, and compliance alignments.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <Reveal key={ind.slug} delay={idx * 0.05} className="h-full">
              <Link 
                href={ind.href}
                className="group flex flex-col justify-between h-full bg-[#080808] border border-zinc-900/60 rounded-2xl p-6 hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-zinc-650 tracking-wider">
                      {(idx + 1).toString().padStart(2, "0")} / SECTOR
                    </span>
                    <span className="w-8 h-8 rounded-full bg-zinc-900/50 flex items-center justify-center text-zinc-500 group-hover:text-rose-500 group-hover:bg-rose-950/20 transition-all duration-300">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors mb-3">
                    {ind.name}
                  </h3>
                  
                  <p className="text-[11px] text-zinc-450 leading-relaxed font-light mb-6">
                    {ind.desc}
                  </p>
                </div>

                <div className="border-t border-zinc-900/80 pt-4 mt-auto">
                  <span className="text-[10px] text-rose-500 font-medium group-hover:pl-1 transition-all duration-200 inline-flex items-center gap-1">
                    View sector detail <span>→</span>
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
