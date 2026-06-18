"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export function MissionVision() {
  return (
    <section className="w-full bg-[#030303] text-white py-16 md:py-20 border-b border-zinc-900 relative" id="purpose-section">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.01),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col gap-16 md:gap-24">
        
        {/* SECTION 1: CORE VALUES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="w-full max-w-[540px] lg:justify-self-start flex flex-col justify-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Our core values
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-zinc-100 text-xs md:text-sm font-medium leading-relaxed mb-8">
                As a leading strategic partner to companies around the world, we have leveraged technology to enable business transformation. We address the entire breadth of business needs, from strategy and design to managing operations. To do this, we draw on deep industry expertise and a command of the fast-evolving fields of cloud, data artificial intelligence, connectivity, software, digital engineering, and platforms.
              </p>
            </Reveal>

            {/* Stats Grid */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6 pt-6 border-t border-zinc-900">
                <div>
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-white font-mono">3,500+</span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-zinc-400 mt-1 block font-medium">
                    in-house experts
                  </span>
                </div>
                <div>
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-white font-mono">20</span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-zinc-400 mt-1 block font-medium">
                    office locations
                  </span>
                </div>
                <div>
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-white font-mono">2,000+</span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-zinc-400 mt-1 block font-medium">
                    global clients
                  </span>
                </div>
                <div>
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-white font-mono">19</span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-zinc-400 mt-1 block font-medium">
                    years of experience
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Image Column */}
          <div className="w-full max-w-[480px] lg:justify-self-end">
            <Reveal delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden aspect-square w-full border border-zinc-900 hover:border-rose-500/30 group shadow-2xl transition-colors duration-500">
                <motion.img
                  src="/assets/About-page/mission/core-value.png"
                  alt="Our Core Values"
                  initial={{ filter: "grayscale(100%) brightness(0.75) contrast(1.1)", scale: 1 }}
                  whileInView={{ filter: "grayscale(0%) brightness(1) contrast(1)", scale: 1.03 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full object-cover pointer-events-none select-none"
                />
                <motion.div
                  initial={{ opacity: 0.25 }}
                  whileInView={{ opacity: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-black pointer-events-none"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* SECTION 2: MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="w-full max-w-[480px] lg:justify-self-start order-last lg:order-first">
            <Reveal delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden aspect-square w-full border border-zinc-900 hover:border-rose-500/30 group shadow-2xl transition-colors duration-500">
                <motion.img
                  src="/assets/About-page/mission/mission.png"
                  alt="Our Mission"
                  initial={{ filter: "grayscale(100%) brightness(0.75) contrast(1.1)", scale: 1 }}
                  whileInView={{ filter: "grayscale(0%) brightness(1) contrast(1)", scale: 1.03 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full object-cover pointer-events-none select-none"
                />
                <motion.div
                  initial={{ opacity: 0.25 }}
                  whileInView={{ opacity: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-black pointer-events-none"
                />
              </div>
            </Reveal>
          </div>

          {/* Content Column */}
          <div className="w-full max-w-[540px] lg:justify-self-end flex flex-col justify-center relative">
            {/* Red dot pattern in the top-right of this container */}
            <div className="absolute top-0 right-0 flex gap-1 text-rose-500 font-bold select-none text-xs tracking-[0.2em]">
              ••••
            </div>
            
            <Reveal>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-2 block">
                OUR PURPOSE
              </span>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 uppercase">
                OUR MISSION<span className="inline-block w-2 h-2 rounded-full bg-rose-500 ml-1.5 align-baseline"></span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-zinc-100 text-xs md:text-sm font-semibold leading-relaxed mb-4">
                To empower enterprises by <span className="text-rose-500 underline decoration-rose-500/50 underline-offset-4 decoration-2">simplifying the complex</span>. We deliver intelligent, AI-driven cloud ecosystems that act as a seamless extension of your team, turning infrastructure into your greatest competitive advantage.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-zinc-200 text-xs md:text-sm font-medium leading-relaxed">
                We believe that technology should be an enabler, not a hurdle. Our mission is to bridge the gap between human ambition and <span className="text-rose-500 font-semibold">technical excellence</span> by providing tools that are as intuitive as they are powerful.
              </p>
            </Reveal>
          </div>
        </div>

        {/* SECTION 3: VISION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="w-full max-w-[540px] lg:justify-self-start flex flex-col justify-center relative">
            <Reveal>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-2 block">
                OUR FUTURE
              </span>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 uppercase">
                OUR VISION<span className="inline-block w-2 h-2 rounded-full bg-rose-500 ml-1.5 align-baseline"></span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-zinc-100 text-xs md:text-sm font-semibold leading-relaxed mb-4">
                To architect a future where software never fails. We envision a world powered by the <span className="text-rose-500 font-semibold">perfect synergy of AI intelligence</span> and human creativity.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-zinc-200 text-xs md:text-sm font-medium leading-relaxed">
                We strive to create <span className="text-rose-500 font-semibold">resilient digital foundations</span> that allow innovation to flourish without limits, where every line of code is a step toward a more efficient, automated, and imaginative world.
              </p>
            </Reveal>

            {/* Bottom-left dot pattern */}
            <Reveal delay={0.4}>
              <div className="flex gap-1 text-zinc-700 font-bold select-none text-xs tracking-[0.2em] mt-6">
                ••••
              </div>
            </Reveal>
          </div>

          {/* Image Column */}
          <div className="w-full max-w-[480px] lg:justify-self-end">
            <Reveal delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden aspect-square w-full border border-zinc-900 hover:border-rose-500/30 group shadow-2xl transition-colors duration-500">
                <motion.img
                  src="/assets/About-page/mission/vision.png"
                  alt="Our Vision"
                  initial={{ filter: "grayscale(100%) brightness(0.75) contrast(1.1)", scale: 1 }}
                  whileInView={{ filter: "grayscale(0%) brightness(1) contrast(1)", scale: 1.03 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full object-cover pointer-events-none select-none"
                />
                <motion.div
                  initial={{ opacity: 0.25 }}
                  whileInView={{ opacity: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-black pointer-events-none"
                />
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
