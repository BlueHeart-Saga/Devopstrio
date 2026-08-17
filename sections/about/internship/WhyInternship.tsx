"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export const WhyInternship = () => {
  const whyReasons = [
    "Real-world projects",
    "Global team exposure",
    "Mentorship from professionals",
    "Hands-on technology experience",
    "Certificate & career recognition",
  ];

  const experiences = [
    "Work on Real Projects",
    "Collaborate Globally",
    "Learn Modern Technologies",
    "Build Your Portfolio",
    "Develop Professional Skills",
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-[#030303] text-white relative overflow-hidden font-sans border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-rose-950/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-purple-950/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Top Header */}
        <Reveal className="mb-10 md:mb-14 text-left max-w-3xl">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white leading-tight font-sans">
            Why Our <span className="text-rose-500">Global Internship</span>
          </h2>
        </Reveal>

        {/* Clean 2-Column Simple List View (Titles Only + linearrow.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* Left Column: Why Our Global Internship */}
          <Reveal delay={0.1} className="lg:col-span-6 space-y-4">
            <div className="pb-3 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Why Our <span className="text-rose-500">Global Internship</span>
                </h3>
              </div>
              {/* <span className="text-xs font-mono text-zinc-500">
                0{whyReasons.length}
              </span> */}
            </div>

            {/* List View with linearrow.png bullet points */}
            <div className="flex flex-col divide-y divide-white/5 pt-1">
              {whyReasons.map((title, idx) => (
                <div
                  key={idx}
                  className="py-3 sm:py-3.5 flex items-center gap-3.5 group transition-colors hover:bg-white/[0.02] rounded-lg px-2 -mx-2 cursor-default"
                >
                  {/* linearrow.png bullet icon */}
                  <img
                    src="/assets/components/linearrow.png"
                    alt="Bullet arrow"
                    className="w-3.5 h-3.5 object-contain rotate-0 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.6)] group-hover:translate-x-1.5 transition-transform duration-300 shrink-0"
                  />

                  {/* Title Only */}
                  <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-rose-400 transition-colors leading-snug">
                    {title}
                  </h4>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Column: What You'll Experience */}
          <Reveal delay={0.2} className="lg:col-span-6 space-y-4">
            <div className="pb-3 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  What You'll <span className="text-rose-500">Experience</span>
                </h3>
              </div>
              {/* <span className="text-xs font-mono text-zinc-500">
                0{experiences.length}
              </span> */}
            </div>

            {/* List View with linearrow.png bullet points */}
            <div className="flex flex-col divide-y divide-white/5 pt-1">
              {experiences.map((title, idx) => (
                <div
                  key={idx}
                  className="py-3 sm:py-3.5 flex items-center gap-3.5 group transition-colors hover:bg-white/[0.02] rounded-lg px-2 -mx-2 cursor-default"
                >
                  {/* linearrow.png bullet icon */}
                  <img
                    src="/assets/components/linearrow.png"
                    alt="Bullet arrow"
                    className="w-3.5 h-3.5 object-contain rotate-10 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.6)] group-hover:translate-x-1.5 transition-transform duration-300 shrink-0"
                  />

                  {/* Title Only */}
                  <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-rose-400 transition-colors leading-snug">
                    {title}
                  </h4>
                </div>
              ))}
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
