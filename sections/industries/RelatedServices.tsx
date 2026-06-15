"use client";

import React from "react";
import Link from "next/link";
import { Layers, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const relatedServices = [
  {
    title: "Platform Engineering",
    desc: "Automate delivery chains, design secure compute pools, and manage multi-region orchestrators.",
    path: "/services/devops-automation/platform-engineering"
  },
  {
    title: "DevOps & Release Automation",
    desc: "Accelerate release pipelines, enforce testing boundaries, and standardise infrastructure templates.",
    path: "/services/devops-automation"
  },
  {
    title: "Product Engineering",
    desc: "Design premium client dashboards, build low-latency server gateways, and construct responsive interfaces.",
    path: "/services/product-engineering"
  },
  {
    title: "Site Reliability Engineering",
    desc: "Enforce uptime compliance, scale cluster boundaries, and direct automated incident triage loops.",
    path: "/services/devops-automation/site-reliability-engineering"
  }
];

export function RelatedServices() {
  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              Practice Connectivity
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
            Explore related <span className="text-[#E11D48]">services</span>
          </h2>
        </Reveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedServices.map((srv, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <Link
                href={srv.path}
                className="group flex flex-col justify-between h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] p-6 hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer"
              >
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-center w-full">
                    <span className="w-8 h-8 rounded-[8px] bg-rose-950/15 border border-[#E11D48]/20 flex items-center justify-center text-[#E11D48] group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-300">
                      <Layers size={14} />
                    </span>
                    <span className="w-8 h-8 rounded-full bg-zinc-955/40 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:bg-[#E11D48] group-hover:border-[#E11D48]/20 transition-all duration-300">
                      <ArrowUpRight size={14} className="stroke-[2.5]" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#E11D48] transition-colors duration-300 mb-2 mt-6">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                      {srv.desc}
                    </p>
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
