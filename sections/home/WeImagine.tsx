"use client";

import React from "react";
import { Lightbulb, Code2, Cloud, Cog } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const DATA = [
  {
    id: "ideas",
    title: "We imagine",
    subtitle: "We Design Intelligent Digital Solutions",
    desc: "We develop <a href='/services/artificial-intelligence' class='about-inline-link'>AI-powered systems</a>, automation frameworks, and data-driven platforms that open up new revenue streams and operational efficiency.",
    points: [
      "Integrated Multi-Cloud Design",
      "Practical DevOps and Operational Knowledge",
      "Secure, High-Performance Data Systems",
    ],
    icon: <Lightbulb size={28} />,
    image: "/assets/Home-page/our-solutions/humanex_das.png",
  },
  {
    id: "develop",
    title: "We develop",
    subtitle: "We Build High-Performance Software",
    desc: "To increase release velocity, fortify <a href='/services/security' class='about-inline-link'>security posture</a>, and guarantee enterprise-grade scalability, we optimise <a href='/services/devops-enablement' class='about-inline-link'>development workflows</a>.",
    points: [
      "Scalability at the Enterprise Level",
      "Architecture that is Secure and Compliant",
      "Observability & Real-Time Monitoring",
    ],
    icon: <Code2 size={28} />,
    image: "/assets/Home-page/our-solutions/homela-banner.png",
  },
  {
    id: "modernize",
    title: "We modernize",
    subtitle: "We Modernize Infrastructure & Applications",
    desc: "We use scalable <a href='/services/explore' class='about-inline-link'>DevOps techniques</a>, automation, and AI-driven workflows to convert legacy systems into agile, <a href='/services/cloud-architecture' class='about-inline-link'>cloud-native environments</a>.",
    points: [
      "Automation of Processes Driven by AI",
      "Cloud-Native Development",
      "Re-Architecting Legacy Systems",
    ],
    icon: <Cloud size={28} />,
    image: "/assets/Home-page/our-solutions/influencer_chages.png",
  },
  {
    id: "manage",
    title: "We manage",
    subtitle: "Optimize operations",
    desc: "We transform and <a href='/services/ai-consulting-services' class='about-inline-link'>optimize operations</a> to reduce costs, enhance efficiency, and enable sustainable growth.",
    points: [
      "24/7 Proactive Monitoring",
      "Predictive Maintenance",
      "Cost Optimization Strategies",
    ],
    icon: <Cog size={28} />,
    image: "/assets/Home-page/our-solutions/Prestivo-banner.png",
  },
];

export function WeImagine() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#030303] text-white overflow-visible">
      {/* Header section (aligned with homepage design) */}
      <div className="mb-16 max-w-4xl">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-5 block">
            OUR INNOVATIONS
          </span>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            How we engineer <span className="text-[#E11D48]">innovation.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-zinc-400 text-lg md:text-xl font-bold leading-relaxed max-w-3xl">
            We design, build, and optimize bleeding-edge digital solutions that turn visionary ideas into enterprise-grade realities.
          </p>
        </Reveal>
      </div>

      {/* Cards list using native sticky stacking */}
      <div className="flex flex-col relative w-full">
        {DATA.map((section, idx) => (
          <div
            key={section.id}
            className="sticky top-28 bg-[#0b0b0c]/90 backdrop-blur-xl border border-zinc-900/80 rounded-2xl p-8 md:p-12 lg:p-16 mb-12 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center shadow-[0_24px_80px_rgba(0,0,0,0.5)] hover:border-zinc-800/80 transition-all duration-300"
            style={{ zIndex: 10 + idx }}
          >
            {/* Left Column: Copywriting */}
            <div className="flex-1 flex flex-col items-start w-full">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 shadow-md flex-shrink-0">
                  {section.icon}
                </div>

                <div className="flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white leading-none">
                    {section.title.split(" ").map((word, wIdx) => (
                      <span key={wIdx} className={wIdx === 0 ? "font-bold mr-1.5" : "mr-1.5"}>
                        {word}
                      </span>
                    ))}
                  </h3>
                  <p className="text-xs md:text-sm font-bold text-rose-500 tracking-[0.2em] uppercase mt-2">
                    {section.subtitle}
                  </p>
                </div>
              </div>

              <div className="w-full">
                <p
                  className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl font-bold"
                  dangerouslySetInnerHTML={{ __html: section.desc }}
                />

                <ul className="list-none p-0 mt-8 space-y-4">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3.5 text-zinc-300 text-sm md:text-base font-bold">
                      <span className="w-5 h-5 rounded-full border border-rose-500/40 text-rose-500 flex items-center justify-center font-bold flex-shrink-0 bg-rose-500/5 text-[10px]">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Visual Device/Product Graphic */}
            <div className="flex-1 flex justify-center lg:justify-end items-center pointer-events-none w-full lg:w-auto">
              <img
                src={section.image}
                alt={section.title}
                className="w-full max-w-[420px] lg:max-w-[460px] h-auto object-contain rounded-xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
