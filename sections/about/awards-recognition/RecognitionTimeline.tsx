"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const timeline = [
  {
    year: "2026",
    title: "Global Enterprise Leadership & AI Frontiers",
    quote: "“Excellence is not an act, but a habit of putting our clients' success at the heart of every system we architect.”",
  },
  {
    year: "2025",
    title: "Security Distinction & DevSecOps Mastery",
    quote: "“Trust is built when robust security meets seamless performance — safeguarding enterprise futures with care.”",
  },
  {
    year: "2024",
    title: "Multi-Cloud Frameworks & Scalable Growth",
    quote: "“Innovation flourishes when technology empowers teams to build without boundaries or friction.”",
  },
  {
    year: "2023",
    title: "Engineering Culture & Continuous Delivery",
    quote: "“Empowering brilliant engineers across borders created a culture where every milestone became a shared victory.”",
  },
  {
    year: "2022",
    title: "Pioneering Foundation & Strategic Alliances",
    quote: "“Every enduring journey begins with a simple promise: to solve real client challenges with speed, passion, and humility.”",
  }
];

function QuoteWordReveal({ text, isEven }: { text: string; isEven: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.4"],
  });

  const words = text.split(" ").filter(Boolean);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap ${isEven ? 'md:justify-start' : 'md:justify-end'} justify-start py-1`}
    >
      {words.map((word, idx) => {
        const start = idx / words.length;
        const end = Math.min((idx + 1) / words.length, 1);

        return (
          <WordSpan key={idx} progress={scrollYProgress} range={[start, end]}>
            {word}
          </WordSpan>
        );
      })}
    </div>
  );
}

function WordSpan({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ["rgba(244, 63, 94, 0.2)", "rgba(251, 113, 133, 1)"]);

  return (
    <span className="relative mr-2 my-0.5 inline-block">
      <motion.span style={{ opacity, color }} className="text-lg sm:text-xl md:text-2xl font-semibold italic leading-relaxed font-sans">
        {children}
      </motion.span>
    </span>
  );
}

export function RecognitionTimeline() {
  return (
    <section className="py-16 sm:py-24 bg-black relative border-t border-zinc-900 overflow-hidden font-sans">
      <div className="absolute top-0 right-[20%] w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <Reveal>
          <div className="mb-14 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              A Growing Journey of <span className="text-rose-600 font-semibold">Progress and Recognition</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="space-y-14 relative z-10">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center justify-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Content Half */}
                    <div className="w-full md:w-1/2 md:px-8 relative">
                      <div className={`flex flex-col ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                        <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-300 to-zinc-500 mb-2 font-mono drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
                          {item.year}
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 font-sans tracking-tight">
                          {item.title}
                        </h3>
                        <QuoteWordReveal text={item.quote} isEven={isEven} />
                      </div>
                    </div>

                    {/* Empty Half */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
