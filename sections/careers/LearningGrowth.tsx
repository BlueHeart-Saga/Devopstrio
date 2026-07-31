"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const entryLevels = [
  {
    title: "Students",
    desc: "Gain experience during your studies and insights into real software solutions. Work on exciting projects, develop your skills, and benefit from our professional development programs, continuous learning, and global network.",
    img: "/assets/careers/banner/student.png",
  },
  {
    title: "Graduates",
    desc: "Step into the IT industry with challenging projects that build your skills and confidence. Join an inspiring team and take advantage of mentoring and training to accelerate your growth.",
    img: "/assets/careers/banner/gratuates.png",
  },
  {
    title: "Professionals",
    desc: "Expand your expertise, work on international projects, and take your career to the next level. Opportunities range from technical leadership to strategic project delivery — with the option to move into executive roles.",
    img: "/assets/careers/banner/professional.png",
  },
  {
    title: "Executive Leaders",
    desc: "Set the course for success through effective strategies, innovation, and collaboration. Our executive leadership team guides high-impact enterprise missions across global client domains.",
    img: "/assets/careers/banner/image.png",
  },
];

export function LearningGrowth() {
  return (
    <section id="growth" className="w-full py-24 sm:py-28 bg-[#030303] text-white border-b border-zinc-900/80 relative overflow-hidden">
      
      {/* Background Ambient Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="mb-16">
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              ENTRY LEVELS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight font-sans">
              Your Career at Devopstrio – Our Entry Levels_
            </h2>
          </div>
        </Reveal>

        {/* 4 Entry Levels Vertical List */}
        <div className="flex flex-col gap-16 sm:gap-20 mb-24">
          {entryLevels.map((level, idx) => (
            <div key={level.title} className="w-full">
              <Reveal delay={idx * 0.05}>
                <div className="max-w-4xl">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 font-sans">
                    {level.title}
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed font-medium mb-8">
                    {level.desc}
                  </p>
                </div>

                <div className="w-full overflow-hidden rounded-2xl border border-zinc-800/80 shadow-2xl bg-zinc-950 group">
                  <img
                    src={level.img}
                    alt={level.title}
                    className="w-full h-[260px] sm:h-[360px] md:h-[440px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Bottom Section: Working at Devopstrio */}
        <Reveal delay={0.2}>
          <div className="pt-12 border-t border-zinc-900/80 max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 font-sans">
              Working at Devopstrio
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              At Devopstrio, diversity, equality, and inclusion are at the core of who we are because we care. Our core values foster a workplace environment where all employees can be themselves and feel proud to share their unique backgrounds. We support growth and development, providing our team members with all the tools and resources they need to succeed, because when you succeed, we all succeed as one team. We&apos;re proud to be recognized as a Great Place to Work, and we&apos;re excited to welcome new talent who share our values and are ready to grow and thrive with us.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
