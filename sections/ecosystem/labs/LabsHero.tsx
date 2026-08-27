"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Maximize2, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function LabsHero() {
  const cards = [
    {
      id: 1,
      label: "Cybersecurity",
      src: "/webp/assets/ecosystem/herocard/labs/Cybersecurity.webp",
      alt: "Cybersecurity & Networks",
      heightClass: "h-[250px] md:h-[280px]",
      icon: <Maximize2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
    },
    {
      id: 2,
      label: "AI Agents",
      src: "/webp/assets/ecosystem/herocard/labs/AIAgentt.webp",
      alt: "AI Robotic Agents",
      heightClass: "h-[300px] md:h-[340px]",
      icon: <Maximize2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
    },
    {
      id: 3,
      label: "Neural Vision",
      src: "/webp/assets/ecosystem/herocard/labs/Neuralvision.webp",
      alt: "Cybernetic Interface Visor",
      heightClass: "h-[350px] md:h-[400px]",
      icon: <Globe className="w-3.5 h-3.5 md:w-4 md:h-4" />,
      highlight: true
    },
    {
      id: 4,
      label: "Quantum computing",
      src: "/webp/assets/ecosystem/herocard/labs/quantumcomputing.webp",
      alt: "AI & Neural Networks",
      heightClass: "h-[300px] md:h-[340px]",
      icon: <Maximize2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
    },
    {
      id: 5,
      label: "Data Spheres",
      src: "/webp/assets/ecosystem/herocard/labs/DataSpheres.webp",
      alt: "Quantum Data Sphere",
      heightClass: "h-[250px] md:h-[280px]",
      icon: <Maximize2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
    }
  ];

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-14 md:pt-18 pb-14 border-b border-zinc-900/60">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 xl:px-8 relative z-10 flex flex-col items-center text-center">

        {/* Arched Height Row of Cards */}
        <div className="flex items-end justify-center gap-2.5 md:gap-3.5 w-full max-w-[1100px] mb-12 select-none overflow-visible">
          {cards.map((card) => (
            <div key={card.id} className="group flex flex-col gap-2 flex-grow flex-shrink basis-0 max-w-[200px]">
              {/* Top tag name label printed above card - hidden by default, visible on hover */}
              <span className="font-mono text-xs md:text-sm text-zinc-200 font-bold uppercase tracking-wider block text-left pl-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
                ○ {card.alt}
              </span>

              {/* Card wrapper */}
              <div
                className={`relative w-full ${card.heightClass} rounded-[22px] overflow-hidden bg-zinc-950 border transition-all duration-300 group-hover:scale-[1.04] ${card.highlight
                    ? "border-rose-500/35 shadow-[0_20px_40px_rgba(244,63,94,0.12)]"
                    : "border-zinc-850 hover:border-zinc-700"
                  }`}
              >
                {/* White Tab Badge in top right corner of image */}
                <div className="absolute top-0 right-0 w-8 h-8 md:w-9 md:h-9 bg-white text-black rounded-bl-xl flex items-center justify-center z-20 shadow-md">
                  {card.icon}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10" />

                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 160px, 200px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom title text overlay inside card */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-3.5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <p className="text-xs md:text-sm font-semibold text-white drop-shadow-md leading-tight text-left">
                    {card.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Main Heading */}
        <Reveal delay={0.2} className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] mb-6 text-white text-center">
            Where Enterprise Innovation Becomes Reality
          </h1>
        </Reveal>

        {/* Explorer Pill CTA Button */}
        <Reveal delay={0.4}>
          <Link
            href="#all-labs"
            className="inline-flex items-center gap-4 pl-7 pr-2.5 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore Labs & Initiatives
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </Reveal>

      </div>

      {/* Bottom black blur fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none z-20" />
    </section>
  );
}
