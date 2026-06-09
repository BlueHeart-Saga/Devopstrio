"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const timelineEvents = [
  {
    year: "2019",
    title: "Origins in Bangalore, India",
    desc: "Founded as a specialist DevOps team. First clients onboarded via Upwork. Rapid growth driven by exceptional delivery quality."
  },
  {
    year: "2020",
    title: "Multi-Cloud Expansion",
    desc: "Expanded service offerings to Azure, AWS, and GCP migrations. First enterprise clients onboarded. ISO certifications initiated."
  },
  {
    year: "2021",
    title: "London Headquarters Established",
    desc: "Opened UK head office at 128 City Road, London. Became a registered UK limited company. Microsoft Partner status achieved."
  },
  {
    year: "2023",
    title: "AI-First Engineering Pivot",
    desc: "Integrated Generative AI and ML into core DevOps delivery. Launched AI consulting practice. NHS and BP engagements delivered."
  },
  {
    year: "2024",
    title: "Global Delivery Network",
    desc: "Opened Tennessee and Chennai offices. Grew to 525+ professionals. Delivered £56k/month savings for Asda via Azure Virtual Desktop."
  },
  {
    year: "2025",
    title: "Top Cloud Employer Recognition",
    desc: "Named Top Cloud Employer 2025. HashiCorp Specialized Partner. AWS Advanced Tier Partner. 100% carbon-neutral operations."
  },
  {
    year: "2026",
    title: "Eco-Cloud Excellence Award",
    desc: "Won 2026 Eco-Cloud Excellence Award. 36,000+ trees planted globally. 565 tonnes CO₂ saved annually. 6 offices across 4+ countries."
  }
];

export function OurStory() {
  return (
    <section className="w-full py-20 bg-black text-white relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">

        {/* Intro Split */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-rose-500">
                Our Story
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              From a Bangalore startup <span className="font-bold block">to a <span className="text-rose-500">global engineering force</span>.</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-6 leading-relaxed font-bold">
              Founded in 2019 with a simple idea — that cloud infrastructure could be smarter, faster, and more human — Devopstrio has grown into a trusted partner for enterprises across four continents.
            </p>
          </div>

          <div className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold flex flex-col gap-6 lg:pl-6">
            <p>
              Devopstrio was born from a clear-eyed frustration: traditional cloud management was too slow for the AI era. Our founders — a team of cloud architects and ML engineers — saw that enterprises were drowning in complexity, held back by brittle infrastructure and disconnected toolchains.
            </p>
            <p>
              We opened our first small office in Bangalore, India, in 2019 — reaching early clients through platforms like Upwork. The work was precise, the delivery exceptional, and the reputation grew quickly. What started as a specialist DevOps team became something far larger: a full-spectrum digital transformation partner.
            </p>
            <div className="p-5 bg-zinc-950/20 border border-zinc-900 rounded-lg border-l-4 border-l-rose-600 mt-2">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">
                Our Story in One Line
              </span>
              <p className="text-sm italic text-zinc-300 font-bold leading-relaxed">
                "We didn't set out to build a company. We set out to fix a problem — and the problem turned out to be everywhere."
              </p>
            </div>
          </div>
        </Reveal>

        {/* Timeline Path Grid */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {timelineEvents.map((event, idx) => (
            <Reveal key={event.year} className="relative group">
              {/* Chronological Indicator Dot */}
              <span className="absolute -left-[41px] md:-left-[49px] top-1.5 w-5 h-5 rounded-full border-4 border-black bg-rose-600 shadow-sm flex items-center justify-center transition-transform group-hover:scale-110" />

              <div className="bg-zinc-950/20 border border-zinc-900 p-6 rounded-xl max-w-4xl hover:border-zinc-800 transition-colors">
                <span className="text-lg font-bold text-rose-500 font-mono block mb-1">
                  {event.year}
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">
                  {event.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
