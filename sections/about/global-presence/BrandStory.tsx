"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function BrandStory() {
  return (
    <section className="w-full pt-8 pb-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
        <Reveal>
          <div className="group relative overflow-hidden rounded-[32px] border border-zinc-800/60 bg-zinc-950/30 backdrop-blur-xl">
            {/* Background Glow */}
            <div className="absolute inset-0">
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-rose-600/10 blur-[120px]" />
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px]" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-0">
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-8">
                  Our Core Philosophy
                </span>

                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold leading-tight tracking-tight mb-6">
                  Global in Reach.
                  <span className="block text-[#E11D48] mt-1">
                    Grounded in Purpose.
                  </span>
                </h2>

                <div className="space-y-4 text-zinc-400 text-sm leading-relaxed max-w-xl mb-8 font-medium">
                  <p className="text-zinc-200 font-medium text-base">
                    Great technology companies are not defined only by where they are headquartered, but by the value they create, the problems they solve, and the trust they build across markets.
                  </p>
                  <p className="text-zinc-400 text-sm">
                    At Devopstrio, our journey is shaped by that mindset. We are building a company where strong local engineering talent powers global technology delivery—where businesses can access cloud, AI, software, DevOps, and cybersecurity expertise through a team that is agile, committed, and deeply invested in outcomes.
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Our teams may work from focused delivery centres, but our thinking, execution, and ambition are global. Every platform we build, every migration we deliver, and every solution we support is designed to help organizations operate with more speed, resilience, intelligence, and scale.
                  </p>
                </div>

                <a
                  href="/about"
                  className="inline-flex items-center gap-2 text-white font-semibold group/link w-fit"
                >
                  Our Leadership Team
                  <span className="w-9 h-9 rounded-full bg-[#E11D48] flex items-center justify-center transition-transform duration-300 group-hover/link:translate-x-1">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </div>

              {/* RIGHT IMAGE */}
              <div className="p-2.5 md:p-3.5 flex items-stretch bg-zinc-950/20 border-t lg:border-t-0 lg:border-l border-zinc-900/60">
                <div className="relative w-full min-h-[320px] lg:min-h-0 rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl group/img flex-grow">
                  <img
                    src="/assets/About-page/global-presence-story.png"
                    alt="Devopstrio Global Collaboration"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-[1.02]"
                  />
                  {/* Subtle glow/reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default BrandStory;
