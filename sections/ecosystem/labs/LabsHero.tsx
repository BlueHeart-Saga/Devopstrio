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
      src: "/assets/ecosystem/herocard/labs/Cybersecurity.png",
      alt: "Cybersecurity & Networks",
      heightClass: "h-[200px] md:h-[220px]",
      icon: <Maximize2 className="w-3.5 h-3.5" />
    },
    {
      id: 2,
      label: "AI Agents",
      src: "/assets/ecosystem/herocard/labs/AIAgentt.png",
      alt: "AI Robotic Agents",
      heightClass: "h-[240px] md:h-[270px]",
      icon: <Maximize2 className="w-3.5 h-3.5" />
    },
    {
      id: 3,
      label: "Neural Vision",
      src: "/assets/ecosystem/herocard/labs/Neuralvision.png",
      alt: "Cybernetic Interface Visor",
      heightClass: "h-[280px] md:h-[320px]",
      icon: <Globe className="w-3.5 h-3.5" />,
      highlight: true
    },
    {
      id: 4,
      label: "Quantum computing",
      src: "/assets/ecosystem/herocard/labs/quantumcomputing.png",
      alt: "AI & Neural Networks",
      heightClass: "h-[240px] md:h-[270px]",
      icon: <Maximize2 className="w-3.5 h-3.5" />
    },
    {
      id: 5,
      label: "Data Spheres",
      src: "/assets/ecosystem/herocard/labs/DataSpheres.png",
      alt: "Quantum Data Sphere",
      heightClass: "h-[200px] md:h-[220px]",
      icon: <Maximize2 className="w-3.5 h-3.5" />
    }
  ];

  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-16 border-b border-zinc-900/60">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center text-center">

        {/* Arched Height Row of Cards (Inspired by the Reference Screenshot) */}
        <div className="flex items-end justify-center gap-[8px] w-full max-w-[950px] mb-14 select-none overflow-visible">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col gap-2 flex-grow flex-shrink basis-0 max-w-[172px]">
              {/* Bulleted label printed above the card */}
              <span className="font-mono text-[8px] md:text-[9px] text-zinc-400 font-bold uppercase tracking-wider block text-left pl-1">
                ○ {card.label}
              </span>

              {/* Card wrapper */}
              <div
                className={`relative w-full ${card.heightClass} rounded-[22px] overflow-hidden bg-zinc-950 border transition-all duration-300 hover:scale-[1.04] group ${card.highlight
                    ? "border-rose-500/25 shadow-[0_20px_40px_rgba(244,63,94,0.08)]"
                    : "border-zinc-850"
                  }`}
              >
                {/* White Tab Badge in top right corner of image */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-white text-black rounded-bl-xl flex items-center justify-center z-20">
                  {card.icon}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />

                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  priority
                  sizes="(max-w-768px) 140px, 172px"
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Center Main Heading & Description */}
        <Reveal delay={0.2} className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5 text-white text-center">
            Where Enterprise Innovation Becomes Reality
          </h1>
        </Reveal>

        <Reveal delay={0.3} className="max-w-2xl">
          <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-normal max-w-3xl text-center mx-auto opacity-95 mb-10">
            Devopstrio Innovation Labs accelerate <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline font-bold">artificial intelligence</Link>, <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud services</Link>, <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">DevOps automation</Link>, <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-bold">enterprise cybersecurity</Link>, and <Link href="/services/data-engineering" className="text-rose-500 hover:underline font-bold">data engineering</Link> breakthroughs.
          </p>
        </Reveal>

        {/* Explorer Pill CTA Button */}
        <Reveal delay={0.4}>
          <Link
            href="#all-labs"
            className="inline-flex items-center gap-3.5 pl-6 pr-2 py-2 bg-white text-black font-semibold text-xs tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
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
