"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const leftImages = [
  { 
    image: "/assets/careers/lifeat-devopstrio/IMAGE.png", 
    height: "h-[220px]", 
    radius: "rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl" 
  },
  { 
    image: "/assets/careers/lifeat-devopstrio/IMAGE-1.png", 
    height: "h-[340px]", 
    radius: "rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-2xl rounded-bl-2xl" 
  },
  { 
    image: "/assets/careers/lifeat-devopstrio/IMAGE-2.png", 
    height: "h-[240px]", 
    radius: "rounded-3xl" 
  },
  { 
    image: "/assets/careers/lifeat-devopstrio/IMAGEE7.png", 
    height: "h-[300px]", 
    radius: "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl" 
  },
];

const rightImages = [
  { 
    image: "/assets/careers/lifeat-devopstrio/IMAGE-3.png", 
    height: "h-[300px]", 
    radius: "rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-xl rounded-br-xl" 
  },
  { 
    image: "/assets/careers/lifeat-devopstrio/IMAGE-4.png", 
    height: "h-[220px]", 
    radius: "rounded-3xl" 
  },
  { 
    image: "/assets/careers/lifeat-devopstrio/IMAGE-5.png", 
    height: "h-[360px]", 
    radius: "rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-2xl rounded-bl-2xl" 
  },
  { 
    image: "/assets/careers/lifeat-devopstrio/IMAGE6.png", 
    height: "h-[240px]", 
    radius: "rounded-br-[2.5rem] rounded-tl-[2.5rem] rounded-tr-xl rounded-bl-xl" 
  },
];

export function LifeAtDevopstrio() {
  return (
    <section className="py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Top right ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-14 lg:gap-20 items-start">
          
          {/* Left Panel: Sticky Info */}
          <div className="lg:sticky lg:top-[100px]">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                LIFE AT DEVOPSTRIO
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-6 text-white">
                People first. <span className="text-rose-500">Innovation always.</span>
              </h2>
              <p className="text-zinc-200 text-sm md:text-base leading-relaxed mb-6 font-medium">
                At Devopstrio, we believe technology is built by people. We foster an inclusive, collaborative culture where curiosity, creativity, and continuous learning drive engineering excellence.
              </p>
              <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-8 font-medium">
                Whether contributing to open-source cloud plugins, sharing custom Python libraries in study circles, or resolving peak load alerts — we operate as one team with a shared focus.
              </p>

              {/* Stats pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Countries", value: "12+" },
                  { label: "Engineers", value: "200+" },
                  { label: "Culture Score", value: "4.8★" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col px-4 py-3 rounded-xl border border-white/[0.06] bg-zinc-950/40 text-left">
                    <span className="text-xl font-extrabold text-rose-500 leading-none">{stat.value}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Panel: Collage Grid scrolling naturally with page scroll */}
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {/* Left Collage Column */}
            <div className="flex flex-col gap-4 md:gap-5">
              {leftImages.map((img, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className={`group bg-[#0d0d0d] border border-white/[0.06] ${img.radius} p-2 hover:border-white/[0.14] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 overflow-hidden`}>
                    <div className={`relative w-full ${img.height} rounded-[inherit] overflow-hidden`}>
                      <img
                        src={img.image}
                        alt="Life at Devopstrio Collage Element"
                        className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500 rounded-[inherit]"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right Collage Column */}
            <div className="flex flex-col gap-4 md:gap-5 mt-10 md:mt-12">
              {rightImages.map((img, idx) => (
                <Reveal key={idx} delay={(idx + 4) * 0.05}>
                  <div className={`group bg-[#0d0d0d] border border-white/[0.06] ${img.radius} p-2 hover:border-white/[0.14] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 overflow-hidden`}>
                    <div className={`relative w-full ${img.height} rounded-[inherit] overflow-hidden`}>
                      <img
                        src={img.image}
                        alt="Life at Devopstrio Collage Element"
                        className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500 rounded-[inherit]"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
