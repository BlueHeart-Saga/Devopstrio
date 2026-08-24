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
    <section className="w-full pt-2 pb-12 md:pb-16 bg-[#030303] text-white relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-rose-950/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-purple-950/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Top Header */}
        <Reveal className="mb-10 md:mb-14 text-left max-w-4xl pt-20 sm:pt-28">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white leading-[1.35] font-sans">
            Why You Should{" "}
            <span className="relative inline-block px-3.5 py-0.5 mx-1">
              {/* Top-to-bottom straight arrow PNG pointing directly down to 'Learn' */}
              <img
                src="/assets/components/streight-toptobuttm.png"
                alt="Top to bottom arrow"
                className="absolute -top-20 sm:-top-28 md:-top-32 left-1/2 -translate-x-1/2 w-16 sm:w-24 md:w-28 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(244,63,94,0.6)] pointer-events-none select-none z-20"
              />

              <span className="relative z-10 text-white font-bold">Learn</span>
              {/* Brand Rose hand-drawn oval circle loop */}
              <svg
                className="absolute -inset-x-3.5 -inset-y-2 w-[calc(100%+28px)] h-[calc(100%+16px)] text-rose-500 pointer-events-none"
                viewBox="0 0 220 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 30 C30 8, 195 5, 208 28 C218 42, 160 54, 70 55 C18 56, 5 45, 18 26"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-95 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]"
                />
              </svg>
            </span>{" "}
            With Our <span className="text-rose-500 font-semibold">Global Internship</span>
          </h2>
        </Reveal>

        {/* Clean 2-Column Simple List View (Titles Only + linearrow.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* Left Column: Why Our Global Internship */}
          <Reveal delay={0.1} className="lg:col-span-6 space-y-4">
            <div className="pb-3 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                   Our <span className="text-rose-500">Global Internship</span>
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
