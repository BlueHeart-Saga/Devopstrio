"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { lifeImages } from "./careersData";

export function LifeAtDevopstrio() {
  return (
    <section className="py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
          {/* Storytelling Content */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Life at Devopstrio</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug mb-6">
                People first. <span className="block font-semibold text-rose-500">Innovation always.</span>
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                At Devopstrio, we believe technology is built by people. We foster an inclusive, collaborative culture where curiosity, creativity, and continuous learning drive engineering excellence.
              </p>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Whether contributing to open-source cloud plugins, sharing custom Python libraries in study circles, or resolving peak load alerts, we operate as one team with a shared focus.
              </p>
            </Reveal>
          </div>

          {/* Visual Grid: 7 Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lifeImages.map((img, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className={`h-full ${idx === 0 ? "sm:col-span-2" : ""}`}>
                <div className="group relative rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950/40 p-6 flex flex-col justify-end aspect-[1.8/1] hover:border-zinc-800 transition-all duration-300">
                  {/* Glowing corner indicator */}
                  <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-rose-500 opacity-40 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 text-left">
                    <span className="block text-xs font-semibold text-white mb-1">{img.title}</span>
                    <span className="block text-[10px] text-zinc-400 leading-relaxed font-light">{img.desc}</span>
                  </div>
                  {/* Background glass shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent opacity-90 group-hover:opacity-75 transition-opacity pointer-events-none" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
