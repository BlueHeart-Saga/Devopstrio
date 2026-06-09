"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const concreteAchievements = [
  {
    title: "HashiCorp & AWS Certifications",
    desc: "Our entire engineering staff holds advanced certifications across AWS, Azure, and HashiCorp suites — ensuring every project follows industry best practices."
  },
  {
    title: "Eco-Cloud Excellence Award",
    desc: "Recognised for our carbon-neutral delivery model, planting 36,000+ trees and saving 565 tonnes of CO₂ annually through green coding standards."
  },
  {
    title: "FTSE 100 Trusted Partner",
    desc: "Successfully delivered £56k/month savings for Asda via AVD and deployed low-latency AI architectures for national healthcare operations."
  }
];

export function Achievements() {
  return (
    <section className="w-full py-20 bg-black text-white relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">

        {/* Intro Grid */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-rose-500">
                Innovation & Achievements
              </span>
            </div>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white">
              Recognised for <span className="font-bold block"><span className="text-rose-500">engineering excellence</span>.</span>
            </h2>
          </div>
          <div className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
            <p>
              We don't just build client platforms. We contribute actively to the open-source community, standardise cloud security protocols, and publish research on AI performance.
            </p>
          </div>
        </Reveal>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {concreteAchievements.map((item) => (
            <Reveal
              key={item.title}
              className="p-6 bg-zinc-950/20 border border-zinc-900 rounded-xl hover:border-zinc-800 transition-colors"
            >
              <span className="block text-[10px] font-bold text-rose-500 uppercase tracking-widest mb-2">RECOGNITION</span>
              <h3 className="text-base font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
