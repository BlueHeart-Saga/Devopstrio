"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function MissionVision() {
  return (
    <section className="w-full bg-[#030303] text-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">

        {/* Main Laptop/Card frame container */}
        <div className="relative w-full rounded-[2.5rem] bg-[#09090b] border border-zinc-800/40 p-1 sm:p-6 md:p-2">

          {/* Upper Part: The Main Image Banner */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-zinc-800/50">
            {/* Immersive background image */}
            <img
              src="/assets/About-page/mission/image1.png"
              alt="Devopstrio Tech Core Values Illustration"
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-90"
            />
            {/* Subtle corner gradient to protect button contrast without darkening the main image area */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent z-10 pointer-events-none" />

            {/* Mask to create the bottom-right cutout on desktop (lg screens) with a large sweeping curve */}
            <div className="hidden lg:block absolute bottom-0 right-0 w-[58%] h-[160px] bg-[#09090b] rounded-tl-[3.5rem] z-10">
              {/* Corner fillet (concave corner) at the intersection of the horizontal image bottom and vertical cutout edge */}
              <div
                className="absolute w-12 h-12 bg-transparent rounded-br-[2.5rem] -left-12 bottom-0 pointer-events-none"
                style={{ boxShadow: "24px 24px 0 24px #09090b" }}
              />
            </div>

            {/* Content inside the image banner */}
            <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-between">

              {/* Banner Top Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold tracking-tight text-white uppercase tracking-widest">
                    Devopstrio
                  </span>
                </div>
              </div>

              {/* Banner Bottom Area: Stacked left content and right sub-text */}
              <div className="grid lg:grid-cols-[42%_1fr] items-end gap-12 pb-2 md:pb-6">
                {/* Left Side: Stacked Title & Button */}
                <div className="flex flex-col gap-6 items-start">
                  <Reveal>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.15] max-w-[380px]">
                      Guided by a <span className="text-rose-500">clear purpose</span>.<br />
                      Driven by a <span className="text-rose-500">bold vision</span>.
                    </h2>
                  </Reveal>
                  <Reveal>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                    >
                      Discuss a project
                      <span className="ml-2">→</span>
                    </a>
                  </Reveal>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Part: Text (Left) & Cards (Right) */}
          {/* We align the grid columns exactly with the cutout boundaries: 42% for Left, remainder for Right */}
          <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-8 mt-8 relative z-20">

            {/* Bottom Left: Paragraph & Stats Grid */}
            <div className="lg:pr-8 flex flex-col gap-6 justify-end pb-2">
              <Reveal>
                <div>
                  <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-2">
                    Our Core Values
                  </span>
                  <p className="text-zinc-400 text-[11px] leading-relaxed font-bold">
                    As a leading strategic partner to companies around the world, we have leveraged technology to enable business transformation. We address the entire breadth of business needs, from strategy and design to managing operations. To do this, we draw on deep industry expertise and a command of the fast-evolving fields of cloud, data artificial intelligence, connectivity, software, digital engineering, and platforms.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Bottom Right 3-Cards Row (overlapped in L-shape layout) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:-mt-[128px] relative z-30">
              {/* Card 1: Mission */}
              <Reveal>
                <div id="mission" className="group relative rounded-2xl bg-white p-6 md:p-8 transition-all duration-500 hover:border-rose-500/40 flex flex-col justify-between min-h-[220px] overflow-hidden transform hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                  {/* Top-Right Cutout Mask (matches dark container background) */}
                  <div className="absolute -top-1 -right-1 w-14 h-14 bg-[#09090b] rounded-bl-[1.5rem] z-10 pointer-events-none" />

                  {/* Arrow Action Button inside cutout */}
                  <a
                    href="/services"
                    className="absolute top-2 right-2 w-9 h-9 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 z-20"
                  >
                    <ArrowUpRight size={14} />
                  </a>

                  <div>
                    <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-1">OUR PURPOSE</span>
                    <h4 className="text-sm font-black text-zinc-900 mb-2 uppercase tracking-wider">OUR MISSION</h4>
                    <p className="text-[11px] text-zinc-800 leading-relaxed font-bold mb-0">
                      To empower enterprises by simplifying the complex. We deliver intelligent, AI-driven cloud ecosystems that act as a seamless extension of your team, turning infrastructure into your greatest competitive advantage.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Card 2: Vision */}
              <Reveal>
                <div id="vision" className="group relative rounded-2xl bg-white p-6 md:p-8 transition-all duration-500 hover:border-rose-500/40 flex flex-col justify-between min-h-[220px] overflow-hidden transform hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                  {/* Top-Right Cutout Mask (matches dark container background) */}
                  <div className="absolute -top-1 -right-1 w-14 h-14 bg-[#09090b] rounded-bl-[1.5rem] z-10 pointer-events-none" />

                  {/* Arrow Action Button inside cutout */}
                  <a
                    href="/services"
                    className="absolute top-2 right-2 w-9 h-9 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 z-20"
                  >
                    <ArrowUpRight size={14} />
                  </a>

                  <div>
                    <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-1">OUR FUTURE</span>
                    <h4 className="text-sm font-black text-zinc-900 mb-2 uppercase tracking-wider">OUR VISION</h4>
                    <p className="text-[11px] text-zinc-800 leading-relaxed font-bold mb-0">
                      To architect a future where software never fails. We envision a world powered by the perfect synergy of AI intelligence and human creativity.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Card 3: Values */}
              <Reveal>
                <div id="values" className="group relative rounded-2xl bg-white p-6 md:p-8 transition-all duration-500 hover:border-rose-500/40 flex flex-col justify-between min-h-[220px] overflow-hidden transform hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                  {/* Top-Right Cutout Mask (matches dark container background) */}
                  <div className="absolute -top-1 -right-1 w-14 h-14 bg-[#09090b] rounded-bl-[1.5rem] z-10 pointer-events-none" />

                  {/* Arrow Action Button inside cutout */}
                  <a
                    href="/services"
                    className="absolute top-2 right-2 w-9 h-9 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 z-20"
                  >
                    <ArrowUpRight size={14} />
                  </a>

                  <div>
                    <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-1">OUR DRIVE</span>
                    <h4 className="text-sm font-black text-zinc-900 mb-2 uppercase tracking-wider">Core Values</h4>
                    <p className="text-[11px] text-zinc-800 leading-relaxed font-bold mb-0">
                      Engineering excellence, client success, and transparent collaboration drive every line of code we ship.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
