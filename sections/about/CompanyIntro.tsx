"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function CompanyIntro() {
  return (
    <section className="w-full py-10 md:py-16 bg-black text-white relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-950/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-rose-900/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">

        {/* ========================================================================= */}
        {/* SECTION 1: Philosophy & Curved Image Row (Microsoft Style About Intro)   */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <Reveal>
            <span className="inline-block px-3.5 py-1.5 text-rose-500 rounded-full text-[10px] font-extrabold tracking-widest uppercase mb-6">
              Company Overview
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-4">
              We build the intelligent <br />
              <span className="text-rose-500">digital foundations</span> that scale global innovation.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-bold max-w-3xl mx-auto">
              Devopstrio is a London-headquartered global technology company specialising in Cloud, AI, DevOps, and Enterprise Software. We partner with forward-thinking enterprises to modernise infrastructure, unlock new value, and accelerate digital success — quietly, precisely, and at scale.
            </p>
          </Reveal>
        </div>

        {/* Team Group Image */}
        <Reveal delay={0.3}>
          <div className="max-w-5xl mx-auto mb-8 px-4">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-900 shadow-2xl shadow-rose-950/20 group">
              <img
                src="/assets/About-page/team/Group_image.png"
                alt="Devopstrio Team"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-rose-500 font-bold text-sm tracking-wider uppercase transition-colors group"
            >
              Connect with our architects
              <span className="h-8 w-8 rounded-full border border-zinc-800 group-hover:border-rose-500/50 flex items-center justify-center text-zinc-400 group-hover:text-rose-500 transition-colors">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
