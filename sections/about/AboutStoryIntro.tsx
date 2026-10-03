"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function AboutStoryIntro() {
  return (
    <section className="bg-black text-white relative overflow-hidden pt-8 sm:pt-12 pb-4 sm:pb-6">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(225,29,72,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Large standalone main heading */}
        <Reveal>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-10">
            The Story of{" "}
            <span className="relative inline-block">
              <span className="text-rose-500">Devopstrio</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-2.5 text-rose-500/45 pointer-events-none"
                viewBox="0 0 300 10"
                fill="none"
              >
                <path
                  d="M 2 6 Q 75 2, 150 6 T 298 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </Reveal>

        {/* Body paragraphs — indented, max-width constrained */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal delay={0.08} className="lg:col-start-5 lg:col-span-8">
            <div className="space-y-5">
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                Devopstrio was founded with a single purpose: to empower businesses by turning complex technology into simple, scalable, and high-impact digital solutions. Today, we partner with enterprise leaders worldwide to accelerate innovation across AI, Cloud, DevOps, and modern software engineering.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutStoryIntro;
