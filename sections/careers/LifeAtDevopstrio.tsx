"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const leftImages = [
  { image: "/assets/Home-page/events/nasscom_keynote.png", height: "h-[220px]" },
  { image: "/assets/About-page/team/Group_image.png", height: "h-[320px]" },
  { image: "/assets/About-page/operations_room.png", height: "h-[240px]" },
  { image: "/assets/About-page/careers_girl.png", height: "h-[280px]" },
];

const rightImages = [
  { image: "/assets/careers/careers_collage.png", height: "h-[280px]" },
  { image: "/assets/About-page/consulting_team.png", height: "h-[220px]" },
  { image: "/assets/About-page/team/image.png", height: "h-[320px]" },
  { image: "/assets/About-page/why-choose/banner.png", height: "h-[240px]" },
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
              <p className="text-white text-sm leading-relaxed mb-6 font-semibold">
                At Devopstrio, we believe technology is built by people. We foster an inclusive, collaborative culture where curiosity, creativity, and continuous learning drive engineering excellence.
              </p>
              <p className="text-white text-xs leading-relaxed mb-8 font-semibold">
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
                    <span className="text-lg font-extrabold text-rose-500 leading-none">{stat.value}</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white mt-1">{stat.label}</span>
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
                  <div className="group bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-2 hover:border-white/[0.14] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 overflow-hidden">
                    <div className={`relative w-full ${img.height} rounded-xl overflow-hidden`}>
                      <img
                        src={img.image}
                        alt="Life at Devopstrio Collage Element"
                        className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                      />
                      {/* Subtle red gradient top line */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-500 to-rose-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right Collage Column */}
            <div className="flex flex-col gap-4 md:gap-5 mt-10 md:mt-12">
              {rightImages.map((img, idx) => (
                <Reveal key={idx} delay={(idx + 4) * 0.05}>
                  <div className="group bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-2 hover:border-white/[0.14] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 overflow-hidden">
                    <div className={`relative w-full ${img.height} rounded-xl overflow-hidden`}>
                      <img
                        src={img.image}
                        alt="Life at Devopstrio Collage Element"
                        className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                      />
                      {/* Subtle red gradient top line */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-500 to-rose-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
