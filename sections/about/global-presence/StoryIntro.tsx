"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollWordReveal } from "@/components/ui/ScrollWordReveal";

export function StoryIntro() {
  const storyItems = [
    { city: "London", desc: "Client Strategy & Leadership", badge: "Strategic HQ" },
    { city: "Tennessee", desc: "North America Support & Operations", badge: "US Support" },
    { city: "Bengaluru", desc: "Engineering & Architecture Centre", badge: "Engineering" },
    { city: "Chennai", desc: "Cloud & SecOps Operations", badge: "Ops Hub" },
    { city: "Thoothukudi", desc: "DevOps & Delivery Execution", badge: "Delivery Hub" }
  ];

  return (
    <section className="py-24 md:py-32 relative max-w-7xl mx-auto px-6 lg:px-12 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Content with Sequential Word-by-Word Scroll Reveal */}
        <div className="lg:col-span-6 space-y-8">
          <Reveal>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Story
            </span>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white mb-6 font-sans">
              A Global Delivery Model<br />
              <span className="text-rose-500">Built on Local Strength</span>
            </h2>
          </Reveal>

          {/* Sequential Paragraph Word-by-Word Scroll Text Reveal */}
          <ScrollWordReveal 
            paragraphs={[
              "Devopstrio was founded on a simple belief: world-class technology services know no boundaries. We unite local engineering excellence with a globally aligned delivery model to help ambition move faster.",
              "Operating across strategic delivery hubs, our solutions, standards, and impact remain truly global."
            ]}
          />
        </div>

        {/* Right: Premium Typography List Design */}
        <div className="lg:col-span-6 border-t border-zinc-800 divide-y divide-zinc-800 bg-[#080808]/90 relative overflow-hidden rounded-xl border border-zinc-900">
          {/* Subtle grid lines in background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          {storyItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden cursor-pointer py-6 px-6 transition-all duration-300"
            >
              {/* Solid White Hover Background Bar */}
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />

              {/* Content Area */}
              <div className="relative z-10 flex items-center justify-between gap-4 pointer-events-none">
                <div className="flex items-baseline gap-3">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-white group-hover:text-black transition-colors duration-300 uppercase font-sans">
                    {item.city}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
