"use client";

import React from "react";
import { Landmark, HeartPulse, Truck, Film, Radio, Car, ShoppingCart, Cpu, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const industries = [
  {
    name: "Financial Services",
    icon: Landmark,
    desc: "Secure software architectures built for modern banking, insurance, investing, lending, and high-frequency cryptographic transactions.",
    gridClass: "lg:col-span-1 lg:row-span-2",
    iconSize: 220,
    iconPos: "-top-10 -right-10"
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    desc: "Compliant digital systems for TeleHealth, EMR/EHR records management, clinical hospital runtimes, and remote patient monitoring.",
    gridClass: "lg:col-span-2 lg:row-span-1",
    iconSize: 180,
    iconPos: "-bottom-6 -right-6"
  },
  {
    name: "Logistics & Supply Chain",
    icon: Truck,
    desc: "Intelligent warehousing automation, real-time transportation routing, inventory tracking, and integrated global supply chains.",
    gridClass: "lg:col-span-1 lg:row-span-1",
    iconSize: 140,
    iconPos: "-bottom-4 -right-4"
  },
  {
    name: "Media & Entertainment",
    icon: Film,
    desc: "High-throughput solutions configured for live streaming, Video On Demand (VOD), social apps, and digital asset management.",
    gridClass: "lg:col-span-1 lg:row-span-1",
    iconSize: 140,
    iconPos: "-bottom-4 -right-4"
  },
  {
    name: "Telecommunications",
    icon: Radio,
    desc: "Scalable telecom software supporting omni-channel customer support, OSS/BSS alignment, and cloud-native network virtualization.",
    gridClass: "lg:col-span-2 lg:row-span-1",
    iconSize: 180,
    iconPos: "-bottom-6 -right-6"
  },
  {
    name: "Automotive",
    icon: Car,
    desc: "Automotive IVI (In-Vehicle Infotainment) platforms, vehicle connectivity architectures, ADAS/AD, and powertrain management.",
    gridClass: "lg:col-span-1 lg:row-span-1",
    iconSize: 140,
    iconPos: "-bottom-4 -right-4"
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    desc: "High-conversion commerce engines, real-time shopper personalization pipelines, and intelligent retail inventory analytics.",
    gridClass: "lg:col-span-1 lg:row-span-2",
    iconSize: 220,
    iconPos: "-bottom-10 -right-10"
  },
  {
    name: "SaaS Applications",
    icon: Cpu,
    desc: "Multi-tenant SaaS architectures, complex billing integrations, dynamic analytics dashboards, and custom subscription runtimes.",
    gridClass: "lg:col-span-2 lg:row-span-2",
    iconSize: 240,
    iconPos: "-bottom-8 -right-8"
  }
];

export function IndustriesSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#050505] text-white border-b border-zinc-900 relative overflow-hidden">
      
      {/* Background ambient red wave */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img 
          src="/assets/wavebg/red_wave_2.png" 
          alt="Background Wave" 
          className="w-full h-full object-cover opacity-80 mix-blend-screen"
        />
      </div>

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">

        <Reveal className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <div className="mb-6">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-rose-500 block mb-3">
              GLOBAL INDUSTRY EXPERIENCE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8 text-white">
            Empowering businesses across <span className="font-bold">every sector</span>.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-bold leading-relaxed max-w-3xl mx-auto">
            From strategy to execution, our services are built to elevate your brand, engage your audience, and drive measurable growth.
          </p>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            // For tall cards, we align text to the bottom. For wide/small cards, we align to center or start.
            const isTall = ind.gridClass.includes("row-span-2");

            return (
              <Reveal 
                key={ind.name}
                delay={idx * 0.05}
                className={`group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 p-6 hover:bg-black/60 hover:border-white/10 transition-all duration-500 flex flex-col ${isTall ? "justify-end min-h-[300px]" : "justify-center min-h-[180px]"} ${ind.gridClass}`}
              >
                
                {/* 3D-Style Matte Dark PNG Placeholder Background */}
                {/* To swap to an actual PNG image later, replace this div block with an <img src="..." /> */}
                <div className={`absolute ${ind.iconPos} pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110 z-0`}>
                  <Icon 
                    size={ind.iconSize} 
                    strokeWidth={1.5} 
                    className="text-[#151515] drop-shadow-[0_15px_15px_rgba(0,0,0,0.9)] fill-[#111111]" 
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-[85%] lg:max-w-[75%]">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-3">
                    {ind.name}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
                
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
