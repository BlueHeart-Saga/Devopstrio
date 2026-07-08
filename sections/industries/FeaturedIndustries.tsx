"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface FeaturedIndustryItem {
  title: string;
  subtitle: string;
  desc: React.ReactNode;
  metrics: { value: string; label: string }[];
  slug: string;
}

const featuredIndustries: FeaturedIndustryItem[] = [
  {
    title: "Banking & Financial Services",
    subtitle: "High-Performance Fintech Systems",
    desc: <>We engineer <Link href="/services/cloud-services" className="text-rose-500 hover:underline">transaction processing databases</Link> handling over 20,000 requests per second. Our developers configure secure VPC partitions, write <Link href="/services/devops-automation" className="text-rose-500 hover:underline">automated fraud monitoring pipelines</Link>, and implement <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">SOC-2 audit logs</Link>.</>,
    metrics: [
      { value: "<15ms", label: "Transaction Latency" },
      { value: "SOC-2", label: "Compliance Certified" },
      { value: "99.999%", label: "Uptime Guarantees" }
    ],
    slug: "banking-finance"
  },
  {
    title: "Healthcare & Medical Technology",
    subtitle: "HIPAA-Aligned Platform Engineering",
    desc: <>Deploying secure patient record structures with full-disk data encryption. We build <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">automated data ingestion channels</Link>, model diagnostic assistants, and configure eBPF system call checkers for <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">runtime security</Link>.</>,
    metrics: [
      { value: "100%", label: "HIPAA Audited" },
      { value: "<500ms", label: "Threat Response" },
      { value: "3.4M", label: "Protected Patient Profiles" }
    ],
    slug: "healthcare-life-sciences"
  },
  {
    title: "Smart Manufacturing & Logistics",
    subtitle: "Predictive Telemetry & IoT Operations",
    desc: <>Optimizing supply chains with real-time <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">stream aggregation pipelines</Link>. Our platform engineers configure IoT gateways, deploy predictive machine failure models, and build low-latency dashboards.</>,
    metrics: [
      { value: "12 Days", label: "Early Failure Warning" },
      { value: "-35%", label: "Maintenance Expenses" },
      { value: "50k/sec", label: "Telemetry Message Rates" }
    ],
    slug: "manufacturing"
  }
];

export function FeaturedIndustries() {
  return (
    <section id="featured" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              Featured Domains
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
            Key specialized <span className="text-[#E11D48]">industry solutions</span>
          </h2>
        </Reveal>

        {/* Rows List */}
        <div className="space-y-12">
          {featuredIndustries.map((feat, idx) => (
            <Reveal key={idx} className="w-full">
              <Link
                href={`/industries/${feat.slug}`}
                className="group block bg-[#0b0b0c] border border-white/10 rounded-[32px] p-8 lg:p-12 hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer"
              >
                
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Left content block */}
                  <div className="lg:col-span-7 text-left">
                    <span className="text-[11px] font-semibold tracking-[0.15em] text-[#E11D48] uppercase block mb-2">
                      {feat.subtitle}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#E11D48] transition-colors duration-300">
                      {feat.title}
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold mb-6">
                      {feat.desc}
                    </p>
                    <span className="text-xs text-zinc-500 group-hover:text-white transition-colors duration-300 font-bold inline-flex items-center gap-1.5">
                      Explore Specialization <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-350" />
                    </span>
                  </div>

                  {/* Right metrics block */}
                  <div className="lg:col-span-5 grid grid-cols-3 gap-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-12">
                    {feat.metrics.map((met, mIdx) => (
                      <div key={mIdx} className="text-left">
                        <span className="block text-3xl md:text-4xl font-black text-white group-hover:text-[#E11D48] transition-colors duration-300 mb-1">
                          {met.value}
                        </span>
                        <span className="block text-[10px] font-bold tracking-widest text-zinc-500 uppercase leading-snug">
                          {met.label}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
