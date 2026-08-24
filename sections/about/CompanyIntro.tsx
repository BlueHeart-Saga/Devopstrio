"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function CompanyIntro() {
  return (
    <section className="w-full pt-0 pb-12 md:pb-20 bg-black text-white relative overflow-hidden font-sans">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-950/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-rose-900/10 rounded-full blur-[150px] pointer-events-none" />

      {/* 100% FULL SCREEN EDGE-TO-EDGE BANNER IMAGE */}
      <Reveal delay={0.1}>
        <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] overflow-hidden shadow-2xl">
          <img
            src="/assets/About-page/team/image.png"
            alt="Devopstrio Engineering Team"
            className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
            loading="lazy"
          />
          {/* Overlays for Readability & Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
        </div>
      </Reveal>

      {/* OVERLAPPING BOX & HEADER GRID (HALF INSIDE BANNER, HALF OUTSIDE BANNER) */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 relative z-20">
        <div className="-mt-32 sm:-mt-44 md:-mt-56 lg:-mt-64 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Overlapping Premium Highlight Card (Half Inside, Half Outside) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="w-full bg-[#09090b]/95 backdrop-blur-xl border border-zinc-800/90 rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.95)] flex flex-col justify-between space-y-6">
                {/* <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-rose-500">
                  OUR GLOBAL TEAM
                </span> */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                  Transforming The Digital World With
                </h3>
                <div className="pt-1">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 tracking-tight block drop-shadow-[0_2px_10px_rgba(244,63,94,0.3)]">
                    100+ YOUNG TECHIES &amp; ARCHITECTS
                  </span>
                </div>
                {/* Feel-Good Inspiring Quote */}
                <blockquote className="pt-4 border-t border-zinc-800/80 border-l-4 border-rose-500 pl-4 py-1">
                  <p className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-rose-100/90 leading-relaxed max-w-xl lg:ml-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.95)]">
                    &ldquo;Where passion meets precision, we empower bold visionaries to shape the digital future with confidence, trust, and unlimited potential.&rdquo;
                  </p>
                </blockquote>
              </div>
            </Reveal>
          </div>

          {/* Overlapping Header Text Block (Moved Down: Half Inside, Half Outside Banner) */}
          <div className="lg:col-span-7 pt-12 sm:pt-20 md:pt-28 lg:pt-48 flex flex-col items-start lg:items-end text-left lg:text-right space-y-4">
            <Reveal delay={0.25}>
              <div className="space-y-3">
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]">
                  Where Innovation Meets Engineering Excellence
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-rose-100/90 leading-relaxed max-w-xl lg:ml-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.95)]">
                  We build the intelligent digital foundations that scale global innovation.
                </p>
              </div>
            </Reveal>
          </div>

        </div>

        {/* BELOW BANNER DESCRIPTION SECTION */}
        <div className="mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto text-left sm:text-center space-y-6 pt-8 border-t border-zinc-800/60">
          <Reveal delay={0.3}>
            <div className="space-y-4">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-zinc-400 font-semibold">
                We are not just developers — we are a collective of visionaries and solution architects dedicated to modernizing infrastructure, simplifying complexity, and driving measurable impact with agility and trust.
              </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}


