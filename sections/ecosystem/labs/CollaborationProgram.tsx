"use client";

import React, { useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface Program {
  title: string;
  category: string;
  filter: string;
  desc: string;
  image: string;
  cta: string;
}

export function CollaborationProgram() {
  const [activeFilter, setActiveFilter] = useState("featured");
  const carouselRef = useRef<HTMLDivElement>(null);

  const programs: Program[] = [
    {
      title: "Enterprise Innovation Accelerators",
      category: "Co-Investment",
      filter: "featured",
      desc: "Co-invest and design custom accelerators tailored to solve specific scaling and automation issues inside your business.",
      image: "/assets/services/bg-cloud.png",
      cta: "Explore Enterprise"
    },
    {
      title: "Startup Sandbox Collaboration",
      category: "Early Stage",
      filter: "featured",
      desc: "For pre-seed software builders seeking engineering reviews, sandbox accounts, and integration pathways to our catalog.",
      image: "/assets/services/bg-devops.png",
      cta: "Join Sandbox"
    },
    {
      title: "University & Academic Partnerships",
      category: "Academic",
      filter: "academic",
      desc: "Sponsoring student research theses, internship programs, and academic investigation into post-quantum models.",
      image: "/assets/services/bg-data.png",
      cta: "View Programs"
    },
    {
      title: "Technology Vendor Alliances",
      category: "Alliance",
      filter: "featured",
      desc: "Collaborative testing of upcoming features with AWS, Microsoft Azure, and GCP alpha/beta developer units.",
      image: "/assets/services/bg-cybersecurity.png",
      cta: "Partner With Us"
    },
    {
      title: "Open Source Research Community",
      category: "Community",
      filter: "academic",
      desc: "Open-source codebase contributions, monthly tech meetups, and hosting community labs prototyping sessions.",
      image: "/assets/services/bg-ai.png",
      cta: "Join Community"
    }
  ];

  const filteredPrograms = activeFilter === "all" 
    ? programs 
    : programs.filter(p => p.filter === activeFilter);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="collaboration" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        
        {/* Header Section */}
        <Reveal className="mb-10 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4 block">
            PARTICIPATION OPTIONS
          </span>
          <h2 className="text-xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight mb-8 text-white max-w-3xl">
            Build smarter with insights from technical leaders
          </h2>
          
          {/* Pill Tabs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveFilter("featured")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeFilter === "featured"
                  ? "bg-rose-600 text-white"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setActiveFilter("academic")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeFilter === "academic"
                  ? "bg-rose-600 text-white"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              Academic & Community
            </button>
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-rose-600 text-white"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              View All
            </button>
          </div>
        </Reveal>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredPrograms.map((prog) => (
            <div
              key={prog.title}
              className="group min-w-[320px] md:min-w-[400px] w-[320px] md:w-[400px] flex flex-col bg-zinc-950/60 border border-zinc-900 hover:border-zinc-700 rounded-3xl transition-all duration-300 snap-start shrink-0 overflow-hidden"
            >
              {/* Image Section */}
              <div className="w-full h-48 md:h-56 overflow-hidden relative">
                <img 
                  src={prog.image} 
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
              </div>
              
              {/* Content Section */}
              <div className="p-8 flex flex-col flex-1 bg-zinc-950/80">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500 mb-3 block">
                  {prog.category}
                </span>
                
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-snug mb-4 group-hover:text-rose-400 transition-colors">
                  {prog.title}
                </h3>
                
                <p className="text-sm text-zinc-400 font-medium leading-relaxed mb-8 flex-1">
                  {prog.desc}
                </p>

                {/* Microsoft-style CTA Button */}
                <Link
                  href="/contact"
                  className="flex items-center gap-4 group/btn"
                >
                  <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white group-hover/btn:bg-rose-500 transition-colors shadow-lg">
                    <ChevronRight size={16} strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold text-rose-500 group-hover/btn:text-rose-400 transition-colors">
                    {prog.cta}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Arrows */}
        <div className="flex items-center gap-4 mt-2">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-300 focus:outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-300 focus:outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>

      {/* Global styles to hide scrollbar for this component */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
