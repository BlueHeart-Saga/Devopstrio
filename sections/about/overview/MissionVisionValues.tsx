"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function MissionVisionValues() {
  return (
    <section className="py-24 bg-[#030303] text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-24">

        {/* 1. Top Specialization Banner */}
        <Reveal>
          <div className="relative rounded-3xl p-8 md:p-10 bg-zinc-950/60 border border-zinc-900 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl text-left">
              <p className="text-lg md:text-xl font-bold tracking-tight text-zinc-100 leading-relaxed">
                We specialize in developing software solutions through the synergy of skilled professionals and efficient processes.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 shrink-0">
              {/* IAOP Badge */}
              <div className="flex items-center gap-4 border-r border-zinc-800 pr-8">
                <span className="text-zinc-500 text-xs font-mono tracking-widest uppercase">Member of</span>
                <span className="text-white font-black text-sm tracking-widest font-sans">IAOP</span>
              </div>

              {/* Clutch Review Badge */}
              <div className="text-left">
                <div className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mb-1">4.9 ON CLUTCH</div>
                <div className="flex items-center gap-0.5 text-amber-500 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <div className="text-[11px] font-bold text-zinc-400">100+ reviews</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2. Our Core Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 text-left space-y-8">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4">
                Our core values
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-semibold">
                As a leading strategic partner to companies around the world, we have leveraged technology to enable business transformation. We address the entire breadth of business needs, from strategy and design to managing operations. To do this, we draw on deep industry expertise and a command of the fast-evolving fields of <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud</Link>, <Link href="/services/data-engineering" className="text-rose-500 hover:underline">data</Link> <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">artificial intelligence</Link>, connectivity, <Link href="/services/software-development" className="text-rose-500 hover:underline">software engineering</Link>, digital engineering, and <Link href="/services/devops-automation" className="text-rose-500 hover:underline">DevOps platforms</Link>.
              </p>
            </Reveal>

            {/* Stats list */}
            <Reveal delay={0.05}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-zinc-900">
                <div>
                  <div className="text-3xl font-black text-white tracking-tight mb-1">3,500+</div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">in-house experts</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white tracking-tight mb-1">20</div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">office locations</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white tracking-tight mb-1">2,000+</div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">global clients</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white tracking-tight mb-1">19</div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">years of experience</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <Reveal delay={0.1} className="w-full max-w-[420px]">
              <div className="rounded-[2rem] overflow-hidden border border-zinc-900/60 bg-zinc-950 p-2 shadow-2xl">
                <img
                  src="/assets/About-page/mission/core-value.png"
                  alt="Our Core Values"
                  className="w-full aspect-square object-cover rounded-[1.5rem]"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3. Our Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
          {/* Left Image */}
          <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
            <Reveal delay={0.1} className="w-full max-w-[420px]">
              <div className="rounded-[2rem] overflow-hidden border border-zinc-900/60 bg-zinc-950 p-2 shadow-2xl">
                <img
                  src="/assets/About-page/mission/mission.png"
                  alt="Our Mission"
                  className="w-full aspect-square object-cover rounded-[1.5rem]"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 text-left space-y-6 order-1 lg:order-2">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block mb-2 font-mono">OUR PURPOSE</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4 flex items-center gap-1">
                OUR MISSION<span className="text-rose-500">.</span>
              </h2>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-semibold mb-4">
                To empower enterprises by <span className="text-rose-500 font-bold">simplifying the complex</span>. We deliver intelligent, <span className="text-rose-500 font-bold">AI-driven cloud ecosystems</span> that act as a seamless extension of your team, turning infrastructure into your <span className="text-white font-bold">greatest competitive advantage</span>.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed font-semibold">
                We deliver engineering <span className="text-rose-500 font-bold">excellence</span> by providing tools that are as intuitive as they are powerful.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 4. Our Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
          {/* Left Text */}
          <div className="lg:col-span-7 text-left space-y-6">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block mb-2 font-mono">OUR FUTURE</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4 flex items-center gap-1">
                OUR VISION<span className="text-rose-500">.</span>
              </h2>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-semibold mb-4">
                To architect a future where software never fails. We envision a world powered by the <span className="text-rose-500 font-bold">perfect synergy of AI intelligence</span> and human creativity.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed font-semibold">
                We strive to create <span className="text-rose-500 font-bold">resilient digital foundations</span> that allow innovation to flourish without limits, where every line of code is a step toward a more efficient, automated, and imaginative world.
              </p>
            </Reveal>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <Reveal delay={0.1} className="w-full max-w-[420px]">
              <div className="rounded-[2rem] overflow-hidden border border-zinc-900/60 bg-zinc-950 p-2 shadow-2xl">
                <img
                  src="/assets/About-page/mission/vision.png"
                  alt="Our Vision"
                  className="w-full aspect-square object-cover rounded-[1.5rem]"
                />
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
