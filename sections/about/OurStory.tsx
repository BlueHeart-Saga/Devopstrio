"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const milestones = [
  {
    year: "2019",
    title: "Company Foundation",
    description:
      "Devopstrio began its journey in Bangalore, India, serving global clients through digital platforms and remote engineering services. This marked the foundation of our commitment to delivering reliable technology solutions worldwide."
  },
  {
    year: "2020",
    title: "London Headquarters Established",
    description:
      "During a period of global uncertainty, we expanded internationally by establishing our London headquarters. This milestone strengthened our presence in the United Kingdom and accelerated our focus on Cloud Transformation, Infrastructure Modernization, and Enterprise Technology Services."
  },
  {
    year: "2021",
    title: "Multi-Cloud & Industry Expansion",
    description:
      "We expanded our capabilities across Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP). At the same time, we entered Healthcare and Financial Services, delivering secure, scalable, and industry-focused digital solutions."
  },
  {
    year: "2022",
    title: "Enterprise Delivery Growth",
    description:
      "Our engineering teams scaled significantly, enabling us to support larger enterprise engagements across cloud platforms, automation initiatives, application modernization programs, and managed services."
  },
  {
    year: "2023",
    title: "Product Engineering & SaaS Innovation",
    description:
      "We launched industry-focused digital products and SaaS platforms for Healthcare, Banking, and Retail organizations. These solutions helped customers improve operational efficiency, customer experiences, and business performance."
  },
  {
    year: "2024",
    title: "United States Expansion",
    description:
      "Expanding into the United States strengthened our global delivery network and enabled us to support growing demand for Artificial Intelligence, Cloud Engineering, Data Platforms, and Enterprise Transformation services."
  },
  {
    year: "2025",
    title: "Global Delivery & Strategic Partnerships",
    description:
      "We expanded our operational footprint with new offices and delivery centers while investing in specialized Data, AI, and Cloud capabilities. Strategic partnerships and enhanced delivery models enabled us to provide faster, scalable, and innovation-driven outcomes for clients worldwide."
  },
  {
    year: "2026",
    title: "AI-Driven Global Evolution",
    description:
      "Today, Devopstrio continues to evolve as a global technology partner, helping enterprises accelerate innovation through Artificial Intelligence, Cloud Platforms, DevOps, Cybersecurity, Data Engineering, and Digital Product Development."
  }
];

export function OurStory() {
  const [activeIdx, setActiveIdx] = useState(2); // Start at 2021
  const [isPaused, setIsPaused] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % milestones.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Throttled mouse wheel scroll navigation
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollTime < 800) return; // Throttle scroll inputs to 800ms
    setLastScrollTime(now);

    if (e.deltaY > 0) {
      setActiveIdx((prev) => (prev + 1) % milestones.length);
    } else {
      setActiveIdx((prev) => (prev - 1 + milestones.length) % milestones.length);
    }
  };

  const activeEvent = milestones[activeIdx];

  return (
    <section className="w-full py-24 bg-[#030303] text-white relative overflow-hidden" id="our-story">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Redesigned Intro Card Container (BusinessOverview Style) */}
        <Reveal className="mb-20">
          <div className="group relative overflow-hidden rounded-[32px] border border-zinc-800/60 bg-zinc-950/30 backdrop-blur-xl">

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-rose-600/10 blur-[120px]" />
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px]" />
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0">

              {/* LEFT CONTENT */}
              <div className="lg:col-span-7 flex flex-col justify-center p-6 md:p-10 lg:p-12">
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-rose-500 mb-6 block">
                  Our Story
                </span>

                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight tracking-tight mb-6">
                  From a Bangalore startup
                  <span className="block text-rose-500 mt-1">
                    to a global engineering force.
                  </span>
                </h2>

                <div className="space-y-6 text-zinc-400 text-sm leading-relaxed font-bold">
                  <p>
                    Founded in 2019 with a simple idea — that cloud infrastructure could be smarter, faster, and more human — Devopstrio has grown into a trusted partner for enterprises across four continents.
                  </p>
                  <p>
                    Devopstrio was born from a clear-eyed frustration: traditional cloud management was too slow for the AI era. Our founders — a team of cloud architects and ML engineers — saw that enterprises were drowning in complexity, held back by brittle infrastructure and disconnected toolchains.
                  </p>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="lg:col-span-5 p-6 md:p-10 lg:p-12 flex flex-col justify-between bg-zinc-950/20 border-t lg:border-t-0 lg:border-l border-zinc-900/60">
                <div className="space-y-6 text-zinc-400 text-sm leading-relaxed font-bold">
                  <p>
                    We opened our first small office in Bangalore, India, in 2019 — reaching early clients through platforms like Upwork. The work was precise, the delivery exceptional, and the reputation grew quickly. What started as a specialist DevOps team became something far larger: a full-spectrum digital transformation partner.
                  </p>

                  <div className="p-5 bg-zinc-950/60 border border-zinc-800/80 rounded-none border-r-4 border-r-rose-600">
                    <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-1">
                      Our Story in One Line
                    </span>
                    <p className="text-sm italic text-zinc-200 font-bold leading-relaxed">
                      "We didn't set out to build a company. We set out to fix a problem — and the problem turned out to be everywhere."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* Circular Scroll Timeline Interface */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-6 items-center min-h-[450px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onWheel={handleWheel}
        >
          {/* LEFT: Half-Circle Dial (Center is pinned to the left edge of this container) */}
          <div className="relative w-full h-[320px] md:h-[480px] flex items-center overflow-hidden select-none">
            {/* The actual circle positioned half off-screen left */}
            <div className="absolute w-[360px] h-[360px] md:w-[500px] md:h-[500px] left-[-180px] md:left-[-250px] top-1/2 -translate-y-1/2 flex items-center justify-center shrink-0">
              {/* Dashed circular timeline track */}
              <svg className="absolute inset-0 w-full h-full text-zinc-800/40 pointer-events-none" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  strokeDasharray="1.5 2"
                />
              </svg>

              {/* Rotating dial years */}
              {milestones.map((event, idx) => {
                let diff = idx - activeIdx;
                const half = milestones.length / 2;
                if (diff > half) diff -= milestones.length;
                if (diff <= -half) diff += milestones.length;

                const theta = diff * 22; // 22 degrees gap
                const rad = (theta * Math.PI) / 180;
                const x = 50 + 40 * Math.cos(rad);
                const y = 50 + 40 * Math.sin(rad);

                const isActive = idx === activeIdx;
                const distance = Math.abs(diff);
                const opacity = Math.max(0.12, 1 - distance * 0.28); // Dynamic opacity based on proximity

                return (
                  <button
                    key={event.year}
                    onClick={() => setActiveIdx(idx)}
                    className={`absolute w-20 h-10 flex items-center justify-center rounded-full transition-all duration-700 focus:outline-none ${isActive
                        ? "text-[#ebd0be] scale-125 font-black z-20 text-xl md:text-2xl drop-shadow-[0_0_15px_rgba(235,208,190,0.5)]"
                        : "text-zinc-600 hover:text-[#ebd0be]/70 scale-95 font-medium z-10 text-xs md:text-sm"
                      }`}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: `translate(-50%, -50%) rotate(${theta}deg)`,
                      opacity: opacity
                    }}
                  >
                    <span className="font-sans font-bold tracking-tight">{event.year}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Active Details Content */}
          <div className="flex flex-col justify-center pl-0 lg:pl-10 min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col"
              >
                {/* Large Year Display */}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ebd0be] to-[#b39580] text-7xl md:text-[8rem] xl:text-[10rem] font-black tracking-tighter leading-none mb-2 select-none font-sans block drop-shadow-[0_10px_20px_rgba(235,208,190,0.1)]">
                  {activeEvent.year}
                </span>

                {/* Event Title */}
                <h4 className="text-2xl md:text-3xl xl:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                  {activeEvent.title}
                </h4>

                {/* Event Description */}
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                  {activeEvent.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            {/* <div className="flex items-center gap-3 mt-8 relative z-20">
              <button
                onClick={() => setActiveIdx((prev) => (prev - 1 + milestones.length) % milestones.length)}
                className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950/20 hover:border-rose-500 hover:text-rose-400 text-zinc-400 flex items-center justify-center transition-all duration-300"
                aria-label="Previous story event"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => setActiveIdx((prev) => (prev + 1) % milestones.length)}
                className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950/20 hover:border-rose-500 hover:text-rose-400 text-zinc-400 flex items-center justify-center transition-all duration-300"
                aria-label="Next story event"
              >
                <ArrowUpRight size={16} />
              </button>
            </div> */}
          </div>

        </div>

      </div>
    </section>
  );
}
