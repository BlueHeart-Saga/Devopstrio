"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ExcellenceHero() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      title: "SRE & Reliability",
      category: "OPERATIONS",
      bgColor: "bg-rose-950/80 border-rose-500/40",
      glowColor: "rgba(244, 63, 94, 0.4)",
      img: "/assets/ecosystem/engineering-excellence-hero/1.png",
      style: {
        transform: "translateX(-440px) translateY(90px) scale(0.92)",
        baseZIndex: 10
      }
    },
    {
      id: 2,
      title: "Cloud-Native Design",
      category: "INFRASTRUCTURE",
      bgColor: "bg-amber-950/80 border-amber-500/40",
      glowColor: "rgba(245, 158, 11, 0.4)",
      img: "/assets/ecosystem/engineering-excellence-hero/2.png",
      style: {
        transform: "translateX(-330px) translateY(65px) scale(0.94)",
        baseZIndex: 15
      }
    },
    {
      id: 3,
      title: "DevSecOps & Security",
      category: "SECURITY",
      bgColor: "bg-fuchsia-950/80 border-fuchsia-500/40",
      glowColor: "rgba(217, 70, 239, 0.4)",
      img: "/assets/ecosystem/engineering-excellence-hero/3.png",
      style: {
        transform: "translateX(-220px) translateY(40px) scale(0.96)",
        baseZIndex: 20
      }
    },
    {
      id: 4,
      title: "Quality Engineering",
      category: "AUTOMATION",
      bgColor: "bg-violet-950/80 border-violet-500/40",
      glowColor: "rgba(139, 92, 246, 0.4)",
      img: "/assets/ecosystem/engineering-excellence-hero/4.png",
      style: {
        transform: "translateX(-110px) translateY(18px) scale(0.98)",
        baseZIndex: 25
      }
    },
    {
      id: 5,
      title: "Platform Engineering",
      category: "DEVELOPER XP",
      highlight: true,
      bgColor: "bg-emerald-950/90 border-rose-500/80",
      glowColor: "rgba(244, 63, 94, 0.55)",
      img: "/assets/ecosystem/engineering-excellence-hero/Main.png",
      style: {
        transform: "translateX(0px) translateY(-10px) scale(1.05)",
        baseZIndex: 35
      }
    },
    {
      id: 6,
      title: "Observability Stacks",
      category: "MONITORING",
      bgColor: "bg-sky-950/80 border-sky-500/40",
      glowColor: "rgba(14, 165, 233, 0.4)",
      img: "/assets/ecosystem/engineering-excellence-hero/4.png",
      style: {
        transform: "translateX(110px) translateY(18px) scale(0.98)",
        baseZIndex: 25
      }
    },
    {
      id: 7,
      title: "Cloud FinOps",
      category: "FINANCIALS",
      bgColor: "bg-lime-950/80 border-lime-500/40",
      glowColor: "rgba(132, 204, 22, 0.4)",
      img: "/assets/ecosystem/engineering-excellence-hero/3.png",
      style: {
        transform: "translateX(220px) translateY(40px) scale(0.96)",
        baseZIndex: 20
      }
    },
    {
      id: 8,
      title: "Chaos Engineering",
      category: "RESILIENCY",
      bgColor: "bg-orange-950/80 border-orange-500/40",
      glowColor: "rgba(249, 115, 22, 0.4)",
      img: "/assets/ecosystem/engineering-excellence-hero/2.png",
      style: {
        transform: "translateX(330px) translateY(65px) scale(0.94)",
        baseZIndex: 15
      }
    },
    {
      id: 9,
      title: "Security Governance",
      category: "COMPLIANCE",
      bgColor: "bg-purple-950/80 border-purple-500/40",
      glowColor: "rgba(168, 85, 247, 0.4)",
      img: "/assets/ecosystem/engineering-excellence-hero/1.png",
      style: {
        transform: "translateX(440px) translateY(90px) scale(0.92)",
        baseZIndex: 10
      }
    }
  ];

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-between bg-black overflow-hidden pt-20 pb-8 border-b border-zinc-900/60 animate-in fade-in duration-500">
      {/* Ambient Radial Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.06),transparent_50%)] pointer-events-none z-1" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none z-1" />

      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10 flex flex-col items-center text-center flex-grow justify-center pt-4">

        {/* Center Top Pill */}
        

        {/* Main Heading */}
        <Reveal delay={0.1} className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 text-white text-center">
            Engineering Excellence at Scale
          </h1>
        </Reveal>

        {/* Subtitle Description */}
        <Reveal delay={0.2} className="max-w-3xl">
          <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-normal max-w-3xl text-center mx-auto opacity-95 mb-6">
            Building resilient, secure systems using our <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-bold">cybersecurity solutions</Link>, aligned with modern <Link href="/services/cloud-services/cloud-architecture" className="text-rose-500 hover:underline font-bold">cloud architecture services</Link> and continuous deployment practices.
          </p>
        </Reveal>

        {/* Exploration Pill Buttons */}
        <Reveal delay={0.25} className="flex items-center justify-center gap-3">
          <Link
            href="#framework"
            className="inline-flex items-center gap-3 pl-6 pr-2.5 py-2 bg-white text-black font-semibold text-xs tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-rose-500/20"
          >
            <span>Explore Standards</span>
            <div className="w-6.5 h-6.5 rounded-full bg-black flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </Reveal>

        {/* Stepped Arch Card Deck Alignment (Matching Reference Image) */}
        <div className="relative w-full max-w-[1350px] h-[360px] md:h-[420px] flex items-end justify-center select-none overflow-visible mt-12 pb-2 px-2">
          <div className="flex items-end justify-center w-full relative h-full">
            {cards.map((card) => {
              const isHovered = hoveredId === card.id;
              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredId(card.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group absolute w-[170px] h-[260px] md:w-[230px] md:h-[340px] rounded-t-[2.2rem] rounded-b-2xl flex flex-col justify-between transition-all duration-500 hover:scale-[1.12] hover:-translate-y-12 cursor-pointer overflow-hidden backdrop-blur-2xl border ${
                    card.highlight
                      ? "border-rose-500/80 shadow-[0_20px_50px_rgba(244,63,94,0.45)] bg-zinc-950"
                      : isHovered
                      ? "border-rose-400/80 shadow-[0_25px_60px_rgba(244,63,94,0.35)] bg-zinc-950"
                      : `${card.bgColor} shadow-[0_12px_35px_rgba(0,0,0,0.8)]`
                  }`}
                  style={{
                    transform: card.style.transform,
                    zIndex: isHovered ? 100 : card.style.baseZIndex,
                    boxShadow: isHovered ? `0 30px 70px ${card.glowColor}` : undefined
                  }}
                >
                  {/* Top Glass Reflection Arc */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-20 pointer-events-none" />

                  {/* Card Background Image & Rich Overlay */}
                  {card.img && (
                    <div className="absolute inset-0 pointer-events-none z-0">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        sizes="230px"
                        className={`object-cover object-center transition-all duration-700 ${
                          card.highlight || isHovered
                            ? "brightness-110 contrast-105 opacity-95 group-hover:scale-105"
                            : "brightness-85 contrast-100 opacity-75 group-hover:brightness-110 group-hover:opacity-100 group-hover:scale-105"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 group-hover:from-black/90 group-hover:via-black/30 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                    </div>
                  )}

                  {/* Category Pill Tag at Top */}
                  {/* <div className="p-3.5 flex items-center justify-between relative z-10 w-full">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase border border-white/20 text-white/90 bg-black/50 backdrop-blur-md shadow-sm">
                      {card.category}
                    </span>
                  </div> */}

                  {/* Bottom Content Title */}
                  <div className="p-4 text-left relative z-10 mt-auto flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      {/* <div className={`w-1.5 h-1.5 rounded-full transition-transform duration-300 ${card.highlight ? "bg-rose-500 animate-pulse scale-125" : "bg-zinc-300 group-hover:bg-rose-400 group-hover:scale-125"}`} /> */}
                      <h3 className="text-xs md:text-sm lg:text-[15px] font-bold tracking-tight leading-snug text-white drop-shadow-md group-hover:text-rose-300 transition-colors">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Hover Sheen Light Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </section>
  );
}
