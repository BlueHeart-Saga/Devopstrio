"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function CompanyOverviewSection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brief Story Intro & Stats */}
          <div className="lg:col-span-7 text-left space-y-8">
            <Reveal>
              <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] uppercase text-rose-500 mb-3 block font-mono">
                ABOUT DEVOPSTRIO
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
                Engineering Digital Transformation <br />
                <span className="text-rose-500">Through Innovation</span>
              </h2>
            </Reveal>

            {/* Brief & Punchy Story Intro */}
            <Reveal delay={0.05}>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-medium">
                Devopstrio was founded with a single purpose: to empower businesses by turning complex technology into simple, scalable, and high-impact digital solutions. Today, we partner with enterprise leaders worldwide to accelerate innovation across AI, Cloud, DevOps, and modern software engineering.
              </p>
            </Reveal>

            {/* Stats list */}
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-zinc-900 mt-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">2,500+</div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider font-mono">projects delivered</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">525+</div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider font-mono">technology experts</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">7+</div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider font-mono">years experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">4+</div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider font-mono">global regions</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Office Graphic with Badge Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center w-full sticky top-28">
            <Reveal delay={0.1} className="w-full max-w-[480px] relative">
              {/* Unwrapped Full Image (Commented Out) */}
              {/* <div className="relative w-full">
                <img 
                  src="/assets/About-page/overview/about-devopstrio.png" 
                  alt="Devopstrio Co-Engineering Center"
                  className="w-full h-auto object-contain select-none rounded-xl shadow-2xl"
                />
              </div> */}

              {/* Floating "7+ Years" badge */}
              <div className="absolute -bottom-6 -right-2 md:-right-6 p-5 max-w-[210px] bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.7)] text-left z-20">
                <div className="text-3xl font-black text-rose-500 tracking-tight leading-none mb-1">
                  7+
                </div>
                <div className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-1.5 font-mono">
                  YEARS OF EXPERIENCE
                </div>
                <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                  Delivering value and building lasting enterprise partnerships worldwide.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
