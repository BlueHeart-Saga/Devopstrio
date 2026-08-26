"use client";

import React from "react";
import { Globe, Trophy, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function WhatMakesUsUnique() {
  const items = [
    {
      icon: <Globe size={24} />,
      iconBg: "bg-amber-500/10 text-amber-400",
      title: "20+ Countries",
      description:
        "We are a global team with diverse backgrounds working together across numerous locations worldwide. With top-notch professionals, we are a powerhouse of creativity and engineering innovation.",
    },
    {
      icon: <Trophy size={24} />,
      iconBg: "bg-rose-500/10 text-rose-400",
      title: "Growth Opportunities",
      description:
        "We work on meaningful projects and make a real impact, allowing you to collaborate with principal architects in our industry. This perfect blend of skill and opportunity fuels rapid professional growth.",
    },
    {
      icon: <Users size={24} />,
      iconBg: "bg-emerald-500/10 text-emerald-400",
      title: "1 Team & Culture",
      description:
        "As a global company, Devopstrio fosters a culture of innovation, collaboration, and zero-ego engineering. We aim to ensure all employees thrive and reach their full potential working with state-of-the-art technologies.",
    },
  ];

  return (
    <section className="w-full bg-[#030303] text-white py-8 md:py-12 font-sans relative">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-12 relative z-10">
        
        {/* Header */}
        <Reveal delay={0.1} className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            What Makes Us Unique
          </h2>
        </Reveal>

        {/* 3 Column Cards Grid - Clean, Simple & Without Border Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={0.15 + idx * 0.05}>
              <div className="h-full p-8 sm:p-10 rounded-2xl bg-zinc-950 hover:bg-zinc-900/80 transition-colors duration-300 flex flex-col justify-between group shadow-xl">
                <div>
                  {/* Top Right Icon Container */}
                  <div className="flex justify-end mb-8">
                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Card Body Description */}
                  <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhatMakesUsUnique;
