"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AcceleratorsHero() {
  const images = [
    { id: 0, title: "Cloud Infrastructure", src: "/assets/ecosystem/herocard/acc-frameworks/Group-23.png" },
    { id: 1, title: "AI Prompt Orchestration", src: "/assets/ecosystem/herocard/acc-frameworks/Group-24.png" },
    { id: 2, title: "DevSecOps Automation", src: "/assets/ecosystem/herocard/acc-frameworks/Group-25-1.png" },
    { id: 3, title: "Custom SaaS Boilerplate", src: "/assets/ecosystem/herocard/acc-frameworks/Group-26.png" },
    { id: 4, title: "Identity Integration", src: "/assets/ecosystem/herocard/acc-frameworks/Group-27-1.png" },
    { id: 5, title: "Serverless Blueprints", src: "/assets/ecosystem/herocard/acc-frameworks/Group-28.png" }
  ];

  // Duplicate the array to create a seamless infinite loop marquee effect
  const marqueeItems = [...images, ...images];

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-between bg-black overflow-hidden pt-28 pb-0 border-b border-zinc-900/60">
      {/* Inline styles for high-performance GPU-accelerated horizontal marquee */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 25s linear infinite;
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center text-center">

        {/* Title Header at the Top Side */}
        <Reveal delay={0.1} className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white text-center">
            Accelerating Innovation Through Reusable Engineering Assets
          </h1>
        </Reveal>

        <Reveal delay={0.2} className="max-w-3xl">
          <p className="text-zinc-350 text-xs md:text-sm lg:text-base leading-relaxed font-normal max-w-3xl text-center mx-auto opacity-95 mb-10">
            Leverage Devopstrio's proven frameworks, <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">DevOps automation accelerators</Link>, <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud services blueprints</Link>, and engineering toolkits to reduce delivery timelines, improve quality, and scale innovation faster.
          </p>
        </Reveal>

        {/* Explorer Pill CTA */}
        <Reveal delay={0.3} className="mb-20">
          <Link
            href="#overview"
            className="inline-flex items-center gap-3.5 pl-6 pr-2 py-2 bg-white text-black font-semibold text-xs tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore Accelerators
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </Reveal>
      </div>

      {/* Full-width, Margin 0, Infinite Horizontal Scroll Row at the Bottom */}
      <div className="marquee-container w-full overflow-hidden relative select-none px-0 py-8 bg-zinc-950/20 border-t border-zinc-900/40">
        <div className="marquee-track gap-6">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="relative w-64 h-40 md:w-72 md:h-44 rounded-[20px] overflow-hidden flex-shrink-0 group cursor-pointer shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-w-768px) 256px, 288px"
              />
              {/* Overlay hover title */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-white font-bold text-center">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </section>
  );
}
