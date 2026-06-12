"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const featuredIndustries = [
  {
    title: "Banking & Financial Services",
    subtitle: "High-Performance Fintech Systems",
    desc: "We engineer transaction processing databases handling over 20,000 requests per second. Our developers configure secure VPC partitions, write automated fraud monitoring pipelines, and implement SOC-2 audit logs.",
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
    desc: "Deploying secure patient record structures with full-disk data encryption. We build automated data ingestion channels, model diagnostic assistants, and configure eBPF system call checkers for runtime security.",
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
    desc: "Optimizing supply chains with real-time stream aggregation pipelines. Our platform engineers configure IoT gateways, deploy predictive machine failure models, and build low-latency dashboards.",
    metrics: [
      { value: "12 Days", label: "Early Failure Warning" },
      { value: "-35%", label: "Maintenance Expenses" },
      { value: "50k/sec", label: "Telemetry Message Rates" }
    ],
    slug: "manufacturing-iot"
  }
];

export function FeaturedIndustries() {
  return (
    <section id="featured" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              FEATURED DOMAINS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Key specialized <span className="font-semibold text-rose-500">industry solutions</span>
          </h2>
        </Reveal>

        <div className="space-y-12">
          {featuredIndustries.map((feat, idx) => (
            <Reveal key={idx} className="w-full">
              <div className="bg-zinc-955/10 border border-zinc-900 rounded-3xl p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-zinc-800 transition-colors">
                <div className="lg:col-span-7">
                  <span className="text-[9px] font-mono tracking-widest text-rose-500 uppercase block mb-2">{feat.subtitle}</span>
                  <h3 className="text-sm font-semibold text-zinc-200 mb-4">{feat.title}</h3>
                  <p className="text-xs text-zinc-450 leading-relaxed font-light mb-6">{feat.desc}</p>
                  <span className="text-[10px] text-rose-500 font-semibold inline-flex items-center gap-1 group cursor-pointer">
                    Explore Specialization <ArrowUpRight size={12} />
                  </span>
                </div>

                <div className="lg:col-span-5 grid grid-cols-3 gap-4 border-t lg:border-t-0 lg:border-l border-zinc-900 pt-6 lg:pt-0 lg:pl-8">
                  {feat.metrics.map((met, mIdx) => (
                    <div key={mIdx} className="text-left">
                      <span className="block text-2xl font-bold font-mono text-rose-500 mb-1">{met.value}</span>
                      <span className="block text-[9px] font-mono text-zinc-550 uppercase leading-snug">{met.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
