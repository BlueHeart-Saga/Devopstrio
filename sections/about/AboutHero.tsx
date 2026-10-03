"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { FlowerRadialGraphic } from "@/components/ui/FlowerRadialGraphic";

export function AboutHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#030303] text-white pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-8 sm:pb-12 lg:pb-14 flex flex-col justify-center overflow-hidden font-sans">

      {/* Right Side Premium Flower Radial Graphic Background */}
      <div className="absolute -right-12 sm:right-0 md:right-8 lg:right-16 top-10 sm:top-14 md:top-16 bottom-0 w-full lg:w-[55%] h-[85vh] pointer-events-none z-0">
        <FlowerRadialGraphic className="w-full h-full" />
      </div>

      {/* Ambient Red Glow Spotlight */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.08),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-12 relative z-10 my-auto">

        {/* Main Grid Content - Left Title & Offset Right Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[50vh]">

          <div className="lg:col-span-12 flex flex-col text-left">
            {/* Header: About Devopstrio */}
            <Reveal delay={0.05} className="mb-8 sm:mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12] font-sans max-w-4xl">
                About Devopstrio
                <span className="text-rose-500 font-semibold animate-pulse">_</span>
              </h1>
            </Reveal>

            {/* Quote Block - Indented / Offset Right Under Heading */}
            <div className="ml-0 sm:ml-16 md:ml-36 lg:ml-52 max-w-2xl">
              <Reveal delay={0.15}>
                <blockquote className="relative pl-6 border-l-2 border-rose-500 mb-8 sm:mb-10">
                  <p className="text-zinc-200 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed italic">
                    &ldquo;We build intelligent digital foundations that empower bold visionaries, uniting technical mastery with transparent global delivery.&rdquo;
                  </p>
                  <footer className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-rose-500">
                    — Devopstrio Corporate Purpose
                  </footer>
                </blockquote>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={0.25}>
                <div className="flex flex-wrap items-center gap-4">
                  {/* Primary Split Button */}
                  <a
                    href="#our-story"
                    className="inline-flex items-center bg-zinc-950 hover:bg-rose-600 border border-zinc-700/90 hover:border-rose-500 rounded-md overflow-hidden transition-all duration-300 group cursor-pointer shadow-2xl hover:shadow-[0_0_30px_rgba(225,29,72,0.4)]"
                  >
                    {/* Left Text */}
                    <span className="px-7 py-4 text-sm md:text-base font-semibold text-white tracking-wide border-r border-zinc-800 group-hover:border-rose-500/60 transition-colors">
                      Explore Our Story
                    </span>

                    {/* Right Arrow Box */}
                    <span className="px-4 py-4 text-white bg-zinc-900 group-hover:bg-rose-700 transition-colors flex items-center justify-center">
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>

                  {/* Secondary Button */}
                  <Link
                    href="/about/leadership-team"
                    className="inline-flex items-center px-6 py-4 text-sm md:text-base font-semibold text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-md bg-zinc-950/60 hover:bg-zinc-900 transition-all duration-300"
                  >
                    Meet Our Leadership
                  </Link>
                </div>
              </Reveal>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutHero;
