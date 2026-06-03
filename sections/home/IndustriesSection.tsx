"use client";

import React from "react";
import { Landmark, HeartPulse, Truck, Film, Radio, Car, ShoppingCart, Cpu, ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const industries = [
  {
    name: "Financial Services",
    icon: Landmark,
    desc: "Secure software architectures built for modern banking, insurance, investing, lending, and high-frequency cryptographic transactions."
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    desc: "Compliant digital systems for TeleHealth, EMR/EHR records management, clinical hospital runtimes, and remote patient monitoring."
  },
  {
    name: "Logistics & Supply Chain",
    icon: Truck,
    desc: "Intelligent warehousing automation, real-time transportation routing, inventory tracking, and integrated global supply chains."
  },
  {
    name: "Media & Entertainment",
    icon: Film,
    desc: "High-throughput solutions configured for live streaming, Video On Demand (VOD), social apps, and digital asset management."
  },
  {
    name: "Telecommunications",
    icon: Radio,
    desc: "Scalable telecom software supporting omni-channel customer support, OSS/BSS alignment, and cloud-native network virtualization."
  },
  {
    name: "Automotive",
    icon: Car,
    desc: "Automotive IVI (In-Vehicle Infotainment) platforms, vehicle connectivity architectures, ADAS/AD, and powertrain management."
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    desc: "High-conversion commerce engines, real-time shopper personalization pipelines, and intelligent retail inventory analytics."
  },
  {
    name: "SaaS Applications",
    icon: Cpu,
    desc: "Multi-tenant SaaS architectures, complex billing integrations, dynamic analytics dashboards, and custom subscription runtimes."
  }
];

export function IndustriesSection() {
  return (
    <section className="w-full py-6 md:py-8 bg-[#030303] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">

        <Reveal className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <div className="mb-6">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block">
              GLOBAL INDUSTRY EXPERIENCE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8 text-white">
            Empowering businesses across <span className="font-bold">every sector</span>.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-bold leading-relaxed max-w-3xl mx-auto">
            From AI-powered automation and cloud modernization to secure digital platforms and enterprise applications, we help organizations transform operations and achieve sustainable growth.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="/services" className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-400 font-bold uppercase tracking-wider text-sm transition-colors border-b border-transparent hover:border-rose-400 pb-1">
              Explore Our Services <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>

        {/* Bento/Grid style for Industries */}
        <div className="relative w-full">
          {/* Soft Wave-like Ambient Background (Red & Blue on Black) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[140%] pointer-events-none -z-10 opacity-60">
            <div className="absolute top-1/4 left-1/4 w-[60%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.12),transparent_70%)] blur-[100px] rounded-[100%] -rotate-12" />
            <div className="absolute bottom-1/4 right-1/4 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.1),transparent_70%)] blur-[120px] rounded-[100%] rotate-12" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[30%] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.08),transparent_70%)] blur-[90px] rounded-[100%] -rotate-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className="group relative border border-zinc-900 bg-zinc-950/20 hover:border-rose-900/40 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(225,29,72,0.05)] overflow-hidden"
              >
                {/* Micro-glow effect on hover */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-rose-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-400 group-hover:text-rose-500 transition-colors duration-300 mb-6">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-sm font-semibold tracking-wide text-zinc-200 group-hover:text-white transition-colors duration-300 mb-3">
                    {ind.name}
                  </h3>
                  <p className="text-[11px] text-zinc-450 leading-relaxed font-bold mb-6">
                    {ind.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-mono tracking-widest text-zinc-500 group-hover:text-rose-500 uppercase transition-colors duration-300">
                  <span>Explore domain</span>
                  <ArrowUpRight size={10} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
          </div>
        </div>

      </div>
    </section>
  );
}
