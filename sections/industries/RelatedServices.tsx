"use client";

import React from "react";
import Link from "next/link";
import { Layers, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface RelatedServiceItem {
  title: string;
  path: string;
}

const relatedServices: RelatedServiceItem[] = [
  {
    title: "Platform Engineering",
    path: "/services/devops-automation/platform-engineering"
  },
  {
    title: "DevOps & Release Automation",
    path: "/services/devops-automation"
  },
  {
    title: "Product Engineering",
    path: "/services/product-engineering"
  },
  {
    title: "Site Reliability Engineering",
    path: "/services/devops-automation/site-reliability-engineering"
  }
];

export function RelatedServices() {
  return (
    <section className="w-full pt-6 pb-14 md:pt-8 md:pb-18 bg-[#030303] relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <Reveal className="mb-12 w-full flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans text-center mx-auto">
            Explore related <span className="text-rose-500 font-semibold">services</span>
          </h2>
        </Reveal>

        {/* Premium Rectangle Smart Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {relatedServices.map((srv, idx) => (
            <Reveal key={idx} delay={idx * 0.08} className="h-full">
              <Link
                href={srv.path}
                className="group relative flex flex-col justify-between h-full min-h-[160px] sm:min-h-[180px] bg-gradient-to-br from-zinc-950/90 via-[#0d070a]/80 to-zinc-950/90 border border-white/10 hover:border-rose-500/50 rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-500 overflow-hidden text-left cursor-pointer hover:shadow-[0_12px_40px_rgba(244,63,94,0.15)] hover:-translate-y-1 backdrop-blur-md"
              >
                {/* Ambient Rose Light Backdrop Glow on Hover */}
                <div className="absolute -right-8 -top-8 w-44 h-44 bg-rose-500/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Top Row: Layers Icon + Arrow Action Button */}
                <div className="relative z-10 flex items-center justify-between w-full mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                    <Layers size={18} />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-rose-600 group-hover:border-rose-600 group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight size={16} className="stroke-[2.5]" />
                  </div>
                </div>

                {/* Bottom Row: Big Title without description */}
                <div className="relative z-10 mt-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-rose-400 transition-colors duration-300 leading-snug font-sans">
                    {srv.title}
                  </h3>
                </div>

              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
