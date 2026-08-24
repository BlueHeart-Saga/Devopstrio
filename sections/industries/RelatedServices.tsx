"use client";

import React from "react";
import Link from "next/link";
import { Layers, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface RelatedServiceItem {
  title: string;
  desc: React.ReactNode;
  path: string;
}

const relatedServices: RelatedServiceItem[] = [
  {
    title: "Platform Engineering",
    desc: <>Automate delivery chains, design secure compute pools, and manage <Link href="/services/cloud-services" className="text-rose-500 hover:underline">multi-region orchestrators</Link>.</>,
    path: "/services/devops-automation/platform-engineering"
  },
  {
    title: "DevOps & Release Automation",
    desc: <>Accelerate <Link href="/services/devops-automation" className="text-rose-500 hover:underline">release pipelines</Link>, enforce testing boundaries, and standardise infrastructure templates.</>,
    path: "/services/devops-automation"
  },
  {
    title: "Product Engineering",
    desc: <>Design premium client dashboards, build low-latency server gateways, and construct <Link href="/about" className="text-rose-500 hover:underline">responsive interfaces</Link>.</>,
    path: "/services/product-engineering"
  },
  {
    title: "Site Reliability Engineering",
    desc: <>Enforce <Link href="/ecosystem/global-delivery" className="text-rose-500 hover:underline">uptime compliance</Link>, scale cluster boundaries, and direct automated incident triage loops.</>,
    path: "/services/devops-automation/site-reliability-engineering"
  }
];

export function RelatedServices() {
  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <Reveal className="mb-14 w-full flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans text-center mx-auto">
            Explore related <span className="text-rose-500 font-semibold">services</span>
          </h2>
        </Reveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedServices.map((srv, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <Link
                href={srv.path}
                className="group flex flex-col justify-between h-full bg-zinc-950/20 border border-zinc-900 hover:border-rose-500/35 hover:bg-zinc-900/10 rounded-[24px] p-6 transition-all duration-300 overflow-hidden text-left cursor-pointer hover:scale-[1.01] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative"
              >
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-center w-full">
                    <span className="w-8 h-8 rounded-[8px] bg-rose-950/15 border border-rose-500/20 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                      <Layers size={14} />
                    </span>
                    <span className="w-8 h-8 rounded-full bg-zinc-950/40 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:bg-rose-500 group-hover:border-rose-500/20 transition-all duration-300">
                      <ArrowUpRight size={14} className="stroke-[2.5]" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-rose-500 transition-colors duration-300 mb-2 mt-6">
                      {srv.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
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
