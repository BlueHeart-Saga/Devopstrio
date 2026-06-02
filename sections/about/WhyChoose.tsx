"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

const reasons = [
  { title: "Senior Engineering Cohorts", desc: "No junior developers. Our engineers bring a minimum of 7+ years of building and operating multi-tenant codebases and architectures." },
  { title: "Zero Lock-In Commitment", desc: "We build using open-source standards like Kubernetes, Terraform, and Docker. You own your repositories and configurations completely." },
  { title: "SRE-Managed Execution", desc: "Every project includes concrete Service Level Indicators (SLI), error budget design, and comprehensive telemetry integrations." },
  { title: "Transparent Handover Model", desc: "We train your internal teams to operate, debug, and expand the systems we design. We succeed when our handover is seamless." }
];

export function WhyChoose() {
  return (
    <section className="w-full py-20 bg-[#030303] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              07 / WHY DEVOPSTRIO
            </span>
          </div>
          <h2 className="text-3xl font-light tracking-tight leading-tight">
            Engineering standards that <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">drive permanent value</span>.
          </h2>
        </Reveal>

        <div className="flex flex-col border-t border-zinc-900">
          {reasons.map((item) => (
            <a 
              href="/contact" 
              key={item.title} 
              className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-zinc-900 hover:bg-zinc-950/40 hover:px-4 transition-all duration-300 group"
            >
              <div className="flex-1 max-w-sm mb-4 md:mb-0">
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-rose-500 transition-colors">
                  {item.title}
                </span>
              </div>
              <div className="flex-1 text-xs text-zinc-450 leading-relaxed font-light mb-4 md:mb-0 md:pr-12">
                {item.desc}
              </div>
              <div className="text-zinc-650 group-hover:text-rose-500 transition-colors self-start md:self-center">
                <ArrowUpRight size={16} />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
