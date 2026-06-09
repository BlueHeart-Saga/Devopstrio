"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Compass, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <section className="w-full py-20 bg-[#030303] text-white relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">

        {/* Header Block */}
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-rose-500">
              Our Purpose
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">
            Guided by a <span className="text-rose-500">clear purpose</span>. <span className="font-bold block">Driven by a <span className="text-rose-500">bold vision</span>.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-4 font-bold">
            Everything we build, every decision we make, and every partnership we form is anchored in two deeply held beliefs about what technology should do for people.
          </p>
        </Reveal>

        {/* Content Split: Left Quotes, Right Mission/Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 pt-4">

          {/* Left Column: Quotes/Core Beliefs */}
          <Reveal className="flex flex-col gap-6">
            <div className="p-6 bg-zinc-950/20 border border-zinc-900 rounded-xl border-l-4 border-l-rose-600">
              <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-2">
                Our Core Belief
              </span>
              <p className="text-sm italic text-zinc-300 leading-relaxed font-bold">
                "Technology should be an enabler, not a hurdle. We bridge the gap between human ambition and technical excellence."
              </p>
            </div>

            <div className="p-6 bg-zinc-950/20 border border-zinc-900 rounded-xl border-l-4 border-l-rose-600">
              <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-2">
                Our Promise
              </span>
              <p className="text-sm italic text-zinc-300 leading-relaxed font-bold">
                "Every line of code we write is a step toward a more efficient, automated, and imaginative world."
              </p>
            </div>
          </Reveal>

          {/* Right Column: Mission and Vision Cards */}
          <Reveal className="flex flex-col gap-8">

            {/* Card 1: Mission */}
            <div className="bg-zinc-950/20 border border-zinc-900 p-8 rounded-xl relative hover:border-zinc-800 transition-colors">
              <div className="absolute top-8 right-8 text-rose-500 bg-rose-950/30 p-2.5 rounded-lg">
                <Compass size={22} strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-2">
                MISSION
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                To empower enterprises by turning complexity into competitive advantage.
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold mb-4">
                We believe the best technology disappears into the background — making everything faster, smarter, and more reliable without demanding constant attention. Our mission is to deliver intelligent, AI-driven cloud ecosystems that become a seamless extension of your team.
              </p>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">
                We don't just manage infrastructure. We make it your greatest competitive advantage — reducing friction, accelerating delivery, and freeing your people to focus on what truly matters: innovation and growth.
              </p>
            </div>

            {/* Card 2: Vision */}
            <div className="bg-zinc-950/20 border border-zinc-900 p-8 rounded-xl relative hover:border-zinc-800 transition-colors">
              <div className="absolute top-8 right-8 text-rose-500 bg-rose-950/30 p-2.5 rounded-lg">
                <Eye size={22} strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-2">
                VISION
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                To architect a world where enterprise software never fails.
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold mb-4">
                We envision a future where the boundary between human ambition and technical reality simply ceases to exist. Where AI and engineering work in perfect harmony — self-healing, self-optimising, always on.
              </p>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">
                We're building toward a world where every enterprise, regardless of size or sector, can harness the full power of multi-cloud environments, intelligent automation, and data-driven decision-making — staying competitive and resilient in an always-changing digital landscape.
              </p>
            </div>

          </Reveal>

        </div>

      </div>
    </section>
  );
}
