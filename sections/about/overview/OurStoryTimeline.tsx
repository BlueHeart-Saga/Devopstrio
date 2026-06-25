"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Play, Pause } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function OurStoryTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const milestones = [
    {
      year: "2026",
      shortTitle: "Future Ready",
      title: "Future Ready Systems",
      formattedDesc: "Co-engineering resilient, secure, and <span class='text-rose-500 border-b border-rose-500/30 pb-0.5'>autonomous platforms</span> that power the next generation of <span class='text-rose-500 border-b border-rose-500/30 pb-0.5'>enterprise automation</span>.",
      tags: ["Autonomous", "Future"]
    },
    {
      year: "2025",
      shortTitle: "Global Hub",
      title: "Global Hub Expansion",
      formattedDesc: "Opened consulting and delivery hubs in the <span class='text-rose-500 border-b border-rose-500/30 pb-0.5'>United Kingdom, Europe, and India</span> to support <span class='text-rose-500 border-b border-rose-500/30 pb-0.5'>round-the-clock</span> enterprise needs.",
      tags: ["UK", "India", "24/7"]
    },
    {
      year: "2024",
      shortTitle: "AI Innovation",
      title: "AI Innovation Lab Launch",
      formattedDesc: "Launched a specialized AI lab to build custom <span class='text-rose-500 border-b border-rose-500/30 pb-0.5'>LLM workflows</span>, autonomous agent networks, and <span class='text-rose-500 border-b border-rose-500/30 pb-0.5'>vector search systems</span>.",
      tags: ["GenAI", "Agents"]
    },
    {
      year: "2022",
      shortTitle: "Cloud Partners",
      title: "Cloud Transformation Partnerships",
      formattedDesc: "Established strategic alliances with <span class='text-rose-500 border-b border-rose-500/30 pb-0.5'>AWS, Microsoft Azure, and Google Cloud</span>, building secure and cost-efficient <span class='text-rose-500 border-b border-rose-500/30 pb-0.5'>landing zones</span>.",
      tags: ["Hyperscalers", "IaC"]
    },
    {
      year: "2020",
      shortTitle: "Services Scale",
      title: "Engineering Services Expansion",
      formattedDesc: "Expanded into <span class='text-rose-500 border-b border-rose-500/30 pb-0.5'>software engineering</span> and <span class='text-rose-500 border-b border-rose-500/30 pb-0.5'>application modernization</span>, supporting clients with complete product delivery.",
      tags: ["Full-Stack", "Scale"]
    },
    {
      year: "2019",
      shortTitle: "Founding",
      title: "Company Founded & Vision Set",
      formattedDesc: "Devopstrio is established with a clear mission: simplify complex <span class='text-rose-500 border-b border-rose-500/30 pb-0.5'>infrastructure automation</span> and help companies adopt <span class='text-rose-500 border-b border-rose-500/30 pb-0.5'>DevOps culture</span>.",
      tags: ["Founding", "Automation"]
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev < milestones.length - 1 ? prev + 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, activeIdx, milestones.length]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : milestones.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < milestones.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Keyframe Styles for progress bar */}
      <style>{`
        @keyframes progress-timer {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_65%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              OUR STORY
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white max-w-2xl mx-auto">
              7+ years of building expertise and growing with our clients
            </h2>
          </Reveal>
        </div>

        {/* Interactive Timeline Ruler Axis */}
        <div className="relative w-full overflow-x-auto no-scrollbar py-6 mb-16 border-y border-zinc-900 bg-zinc-950/20">
          <div className="min-w-[800px] max-w-5xl mx-auto px-4 relative h-24">
            
            {/* Grounding baseline */}
            <div className="absolute bottom-[1px] left-[8.33%] right-[8.33%] h-[1px] bg-zinc-800" />
            
            {/* Grounding baseline red fill (timer progress animation between years) */}
            {isPlaying && activeIdx < milestones.length - 1 && (
              <div 
                key={activeIdx}
                className="absolute bottom-[0px] h-[3px] bg-rose-500 shadow-[0_0_10px_rgba(225,29,72,0.8)] origin-left z-20"
                style={{
                  left: `${8.33 + activeIdx * 16.67}%`,
                  width: '16.67%',
                  animation: 'progress-timer 6000ms linear forwards'
                }}
              />
            )}

            {/* Grid container for Years, ticks, and subtitles */}
            <div className="grid grid-cols-6 h-full items-end relative z-10 w-full">
              {milestones.map((m, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <div key={m.year} className="flex flex-col items-center justify-end h-full relative">
                    
                    {/* Year Selector Button */}
                    <button
                      onClick={() => setActiveIdx(idx)}
                      className="flex flex-col justify-end items-center group focus:outline-none relative h-full w-full pb-1 z-30"
                    >
                      {/* Year Label */}
                      <span className={`transition-all duration-300 font-sans tracking-tight ${isActive ? 'text-lg md:text-xl font-extrabold text-white scale-105' : 'text-sm md:text-base font-bold text-zinc-550 group-hover:text-zinc-350'}`}>
                        {m.year}
                      </span>
                      
                      {/* Short Subtitle */}
                      <span className={`text-[9px] font-bold uppercase tracking-wider text-center mt-1 block truncate w-24 transition-colors duration-300 ${isActive ? 'text-rose-500' : 'text-zinc-500 group-hover:text-zinc-400'}`}>
                        {m.shortTitle}
                      </span>

                      {/* Active long line or inactive short line */}
                      <div className="mt-4 flex flex-col items-center">
                        <div className={`w-[2px] transition-all duration-500 ${isActive ? 'h-8 bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.6)]' : 'h-3 bg-zinc-700 group-hover:bg-zinc-500'}`} />
                      </div>
                    </button>

                    {/* Scale Ticks (render to the right of each element except the last) */}
                    {idx < milestones.length - 1 && (
                      <div 
                        className="absolute bottom-0 h-4 flex justify-between items-end px-2 opacity-80 select-none pointer-events-none"
                        style={{
                          left: '50%',
                          right: '-50%',
                        }}
                      >
                        {Array.from({ length: 9 }).map((_, tickIdx) => {
                          const isMedium = tickIdx === 4;
                          return (
                            <div 
                              key={tickIdx}
                              className={`w-[1px] transition-all duration-300 ${
                                isMedium ? 'h-4 bg-zinc-500' : 'h-2 bg-zinc-700'
                              }`}
                            />
                          );
                        })}
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Selected Milestone Details Panel (Premium full-width design matching mockup) */}
        <div className="max-w-4xl mx-auto text-left space-y-6 relative pt-4">

          <Reveal key={`year-big-${activeIdx}`}>
            {/* Giant Bold Year in cream color */}
            <div className="text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] font-black text-[#F5E6D3] tracking-tighter leading-none select-none font-sans">
              {milestones[activeIdx].year}
            </div>
          </Reveal>

          <Reveal key={`title-${activeIdx}`} delay={0.05}>
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white tracking-tight leading-tight">
              {milestones[activeIdx].title}
            </h3>
          </Reveal>
          
          <Reveal key={`desc-${activeIdx}`} delay={0.1}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-4xl" 
               dangerouslySetInnerHTML={{ __html: milestones[activeIdx].formattedDesc }} 
            />
          </Reveal>

          {/* Navigation Controls & Tags */}
          <Reveal delay={0.15} className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-zinc-900 mt-10">
            {/* Pill Tags */}
            <div className="flex flex-wrap gap-2">
              {milestones[activeIdx].tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-[9px] font-black tracking-wider uppercase bg-rose-500/10 text-rose-450 border border-rose-500/20 font-mono select-none"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Prev/Next arrows & Play/Pause */}
            <div className="flex items-center gap-3 shrink-0">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full border border-zinc-900 hover:border-rose-500/40 text-zinc-500 hover:text-white flex items-center justify-center transition-all bg-zinc-950/20 active:scale-95"
                aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
              >
                {isPlaying ? <Pause size={15} /> : <Play size={15} />}
              </button>

              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-zinc-900 hover:border-rose-500/40 text-zinc-500 hover:text-white flex items-center justify-center transition-all bg-zinc-950/20 active:scale-95"
                aria-label="Previous milestone"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-zinc-900 hover:border-rose-500/40 text-zinc-500 hover:text-white flex items-center justify-center transition-all bg-zinc-950/20 active:scale-95"
                aria-label="Next milestone"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
