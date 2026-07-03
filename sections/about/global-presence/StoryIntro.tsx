"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function StoryIntro() {
  const storyItems = [
    { city: "London", desc: "Client Strategy & Leadership", badge: "Strategic HQ" },
    { city: "Tennessee", desc: "North America Support & Operations", badge: "US Support" },
    { city: "Bengaluru", desc: "Engineering & Architecture Centre", badge: "Engineering" },
    { city: "Chennai", desc: "Cloud & SecOps Operations", badge: "Ops Hub" },
    { city: "Thoothukudi", desc: "DevOps & Delivery Execution", badge: "Delivery Hub" }
  ];

  return (
    <section className="py-24 md:py-32 relative max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Content */}
        <div className="lg:col-span-6 space-y-6">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              Intro Story
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              A Global Delivery Model<br />
              <span className="text-rose-500">Built on Local Strength</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Devopstrio was built on a simple belief: world-class technology services do not need to come from one place to create global impact. By combining strong local engineering capabilities with a globally aligned delivery model, we help businesses across regions access the expertise, agility, and support they need to move faster.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              From cloud transformation and AI engineering to DevOps automation, cybersecurity, and software development, our teams work across time zones and functions to deliver consistent outcomes for clients in the United Kingdom, North America, India, and beyond.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              We may operate from focused delivery hubs, but the solutions we build, the standards we follow, and the businesses we support are global in ambition.
            </p>
          </Reveal>
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
                  {/* <span className="text-[11px] font-mono tracking-widest text-rose-500 group-hover:text-rose-600 transition-colors duration-300 font-bold">
                    0{idx + 1}
                  </span> */}
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter text-white group-hover:text-black transition-colors duration-300 uppercase">
                    {item.city}
                  </h4>
                </div>
                
                <div className="flex flex-col items-end text-right">
                  <span className="text-[9px] uppercase font-mono tracking-widest bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded group-hover:bg-zinc-200 group-hover:border-zinc-300 group-hover:text-zinc-900 transition-colors duration-300 mb-1 font-bold">
                    {item.badge}
                  </span>
                  <p className="text-xs text-zinc-500 group-hover:text-zinc-800 font-medium transition-colors duration-300 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
