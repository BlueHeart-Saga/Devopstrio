"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function YourCareerAtDevopstrio() {
  const levels = [
    {
      title: "Students",
      description:
        "Gain real-world experience during your studies with hands-on cloud and software projects. Work on exciting client initiatives, develop your tech skillset, and benefit from structured mentorship and a global engineering network.",
      image: "/webp/assets/careers/banner/new/st.jpg",
    },
    {
      title: "Graduates",
      description:
        "Step into the technology industry with high-impact projects that accelerate your skills and confidence. Join an inspiring team and take advantage of 100% funded cloud certifications to fast-track your career.",
      image: "/webp/assets/careers/banner/new/Graduates.jpg",
    },
    {
      title: "Professionals",
      description:
        "Expand your engineering superpower, work on international cloud & AI architectures, and elevate your tech career. Opportunities range from principal technical leadership to strategic enterprise delivery.",
      image: "/webp/assets/careers/banner/new/Professionals.jpg",
    },
    {
      title: "Executive Leaders",
      description:
        "Set the course for enterprise success through effective strategies, technical innovation, and global collaboration. Our leadership board is committed to driving zero-downtime excellence while fostering a thriving engineering environment.",
      image: "/webp/assets/careers/banner/new/Executive Leaders.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#030303] text-white py-8 md:py-12 font-sans relative">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-12 relative z-10">
        
        {/* Main Section Heading */}
        <Reveal delay={0.1} className="mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Your Career at Devopstrio – Our Entry Levels
          </h2>
        </Reveal>

        {/* Vertical List of Career Pathways */}
        <div className="space-y-10 md:space-y-12">
          {levels.map((item, idx) => (
            <Reveal key={idx} delay={0.15 + idx * 0.05}>
              <div className="flex flex-col text-left space-y-5 group cursor-pointer">
                {/* Level Title */}
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-rose-400 transition-colors">
                  {item.title}
                </h3>

                {/* Subtitle Description */}
                <p className="text-zinc-300 text-base md:text-lg font-normal leading-relaxed max-w-4xl">
                  {item.description}
                </p>

                {/* Full Width Borderless Image Banner with Scroll-Zoom & Upward Motion Feel */}
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950 shadow-2xl mt-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-[center_20%] group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Working at Devopstrio Card below Entry Levels */}
        <Reveal delay={0.3} className="mt-10 sm:mt-12">
          <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-zinc-950 shadow-2xl space-y-6">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Working at Devopstrio
            </h3>
            <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-5xl">
              At Devopstrio, diversity, equality, and inclusion are at the core of who we are because we care. Our core values foster a workplace environment where all employees can be themselves and feel proud to share their unique backgrounds. We support growth and development, providing our team members with all the tools and resources they need to succeed, because when you succeed, we all succeed as one team. We&apos;re proud to be recognized as a Great Place to Work, and we&apos;re excited to welcome new talent who share our values and are ready to grow and thrive with us.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default YourCareerAtDevopstrio;

