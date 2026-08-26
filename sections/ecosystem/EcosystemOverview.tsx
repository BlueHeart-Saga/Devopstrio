"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function EcosystemOverview() {
  return (
    <section id="overview" className="w-full pt-4 pb-12 bg-[#030303] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 xl:px-8 relative z-10">

        <Reveal>
          <div className="group relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-950/30 backdrop-blur-xl">

            {/* Background Glow */}
            <div className="absolute inset-0">
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-rose-600/10 blur-[120px]" />
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px]" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-0">

              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">

               

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-8">
                  Connecting Global Technology,
                  <span className="block text-[#E11D48] mt-1">
                    Talent &amp; Strategic Alliances
                  </span>
                </h2>

                <a
                  href="#architecture"
                  className="inline-flex items-center gap-2 text-white font-semibold group/link w-fit"
                >
                  Explore Architecture Stack
                  <span className="w-9 h-9 rounded-full bg-[#E11D48] flex items-center justify-center transition-transform duration-300 group-hover/link:translate-x-1">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </div>

              {/* RIGHT IMAGE */}
              <div className="p-2 md:p-3 flex items-center justify-center bg-zinc-950/20 border-t lg:border-t-0 lg:border-l border-zinc-900/60">
                <div className="relative w-full aspect-[16/8.5] rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl group/img">
                  <img src="/webp/assets/ecosystem/card/ecosystem-main-page_overview-card.webp"
                    alt="Devopstrio Digital Ecosystem"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-[1.02]"
                  loading="lazy" />
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
