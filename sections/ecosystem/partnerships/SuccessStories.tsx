"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Tag {
  label: string;
  style: string;
}

interface Story {
  id: string;
  title: string;
  desc: string;
  image: string;
  tags: Tag[];
  buttonStyle: string;
  href: string;
}

export function SuccessStories() {
  const stories: Story[] = [
    {
      id: "trust-co",
      title: "Trust & Co.",
      desc: "Fill out the form and the algorithm will offer the right team of experts for cloud scale.",
      image: "/assets/Home-page/arch-life.png",
      tags: [
        { label: "BRANDING", style: "bg-[#f5c697]/20 text-[#f5c697] border border-[#f5c697]/40" },
        { label: "PACKAGING", style: "bg-[#b8e6c4]/20 text-[#b8e6c4] border border-[#b8e6c4]/40" }
      ],
      buttonStyle: "bg-[#f5c697] text-zinc-950 hover:bg-[#e2b384]",
      href: "/contact"
    },
    {
      id: "urban-outfitter",
      title: "Urban Outfiter",
      desc: "Fill out the form and the algorithm will offer the right team of experts for modern data.",
      image: "/assets/Home-page/biz-life.png",
      tags: [
        { label: "BRANDING", style: "bg-[#f5c697]/20 text-[#f5c697] border border-[#f5c697]/40" },
        { label: "MARKETING", style: "bg-[#c6c4e9]/20 text-[#c6c4e9] border border-[#c6c4e9]/40" }
      ],
      buttonStyle: "bg-[#b8e6c4] text-zinc-950 hover:bg-[#a2d4b0]",
      href: "/contact"
    },
    {
      id: "tonic",
      title: "Tonic",
      desc: "Fill out the form and the algorithm will offer the right team of experts for AI native workflows.",
      image: "/assets/Home-page/rapid-life.png",
      tags: [
        { label: "BRANDING", style: "bg-[#f5c697]/20 text-[#f5c697] border border-[#f5c697]/40" },
        { label: "PACKAGING", style: "bg-[#b8e6c4]/20 text-[#b8e6c4] border border-[#b8e6c4]/40" },
        { label: "MARKETING", style: "bg-[#c6c4e9]/20 text-[#c6c4e9] border border-[#c6c4e9]/40" }
      ],
      buttonStyle: "bg-[#c6c4e9] text-zinc-950 hover:bg-[#b0aeaa]",
      href: "/contact"
    }
  ];

  return (
    <section id="success-stories" className="w-full py-24 bg-black text-white border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 xl:px-8 relative z-10">
        
        {/* Section Heading */}
        <Reveal className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-4 text-white">
            Partner-Powered <span className="text-rose-500">Success Stories</span>
          </h2>
          {/* <p className="text-zinc-300 text-base md:text-lg font-normal leading-relaxed">
            Real outcomes co-engineered with our technology partners to modernize global operations.
          </p> */}
        </Reveal>

        {/* 3 Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {stories.map((story, idx) => (
            <Reveal key={story.id} delay={idx * 0.1} className="h-full">
              <div className="group/card flex flex-col justify-between h-full bg-[#09090b] border border-zinc-900 hover:border-zinc-800 rounded-[32px] p-4 md:p-5 transition-all duration-300 shadow-2xl relative overflow-hidden">
                
                <div>
                  {/* Top Image Container with Concave Notched Corner & Floating Action Button */}
                  <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6 bg-zinc-900">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Concave Notched Corner Overlay & Floating Action Button */}
                    <div className="absolute bottom-0 right-0 flex items-center justify-center pointer-events-auto">
                      
                      {/* Top-Right Concave Arc Transition */}
                      <svg className="absolute -top-4 right-0 w-4 h-4 text-[#09090b] fill-current" viewBox="0 0 16 16">
                        <path d="M16 0 A 16 16 0 0 0 0 16 L 16 16 Z" />
                      </svg>
                      
                      {/* Bottom-Left Concave Arc Transition */}
                      <svg className="absolute bottom-0 -left-4 w-4 h-4 text-[#09090b] fill-current" viewBox="0 0 16 16">
                        <path d="M16 0 A 16 16 0 0 0 0 16 L 16 16 Z" />
                      </svg>

                      {/* Cutout Corner Patch & Action Button */}
                      <div className="bg-[#09090b] pt-2 pl-2 rounded-tl-[20px]">
                        <Link
                          href={story.href}
                          className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover/card:scale-110 shadow-xl ${story.buttonStyle}`}
                        >
                          <ArrowUpRight size={22} className="stroke-[2.5]" />
                        </Link>
                      </div>

                    </div>
                  </div>

                  {/* Card Content: Title & Description */}
                  <div className="px-2">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2.5 group-hover/card:text-rose-400 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-300 font-normal leading-relaxed mb-6">
                      {story.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Pill Tags */}
                <div className="px-2 pt-2 flex flex-wrap items-center gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-3.5 py-1.5 rounded-lg text-[11px] md:text-xs font-semibold uppercase tracking-wider ${tag.style}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Centered Bottom CTA Button */}
        <Reveal className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-zinc-950 border border-zinc-800 hover:bg-rose-600 hover:border-rose-500 text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base tracking-wider uppercase transition-all duration-300 shadow-xl group/btn"
          >
            <span>View all cases</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Link>
        </Reveal>

      </div>
    </section>
  );
}
