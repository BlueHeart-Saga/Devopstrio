"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const advisors = [
  {
    name: "Enterprise Strategy Advisor",
    background: "Former CTO — Global Technology Group",
    expertise: "Enterprise Strategy",
    experience: "20+ Years",
    photo: "/assets/About-page/advisor_strategy.png",
    color: "rose",
  },
  {
    name: "Cloud Transformation Advisor",
    background: "Former VP Engineering — Cloud Platform",
    expertise: "Cloud Architecture",
    experience: "18+ Years",
    photo: "/assets/About-page/advisor_cloud.png",
    color: "violet",
  },
  {
    name: "AI & Data Advisor",
    background: "Chief Data Scientist — Fortune 100",
    expertise: "AI & Machine Learning",
    experience: "15+ Years",
    photo: "/assets/About-page/advisor_ai.png",
    color: "emerald",
  },
  {
    name: "Cybersecurity Advisor",
    background: "Former CISO — Financial Services Group",
    expertise: "Zero Trust Security",
    experience: "22+ Years",
    photo: "/assets/About-page/advisor_security.png",
    color: "amber",
  },
];

const colorMap: Record<string, { tag: string; glow: string; border: string }> = {
  rose: { 
    tag: "bg-rose-500/10 border-rose-500/20 text-rose-400", 
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.06),transparent_60%)]",
    border: "hover:border-rose-500/30"
  },
  violet: { 
    tag: "bg-violet-500/10 border-violet-500/20 text-violet-400", 
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.06),transparent_60%)]",
    border: "hover:border-violet-500/30"
  },
  emerald: { 
    tag: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400", 
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.06),transparent_60%)]",
    border: "hover:border-emerald-500/30"
  },
  amber: { 
    tag: "bg-amber-500/10 border-amber-500/20 text-amber-400", 
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.06),transparent_60%)]",
    border: "hover:border-amber-500/30"
  },
};

export const AdvisoryBoard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 380; // Card width + gap
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-[#030303] border-t border-zinc-900 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -left-40 top-1/4 w-96 h-96 rounded-full bg-rose-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute -right-40 bottom-1/4 w-96 h-96 rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Row 1: Header (Mockup inspired layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-4"
            >
              Governance &amp; Insights
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2 leading-tight"
            >
              Global Counsel.<br />
              <span className="text-[#FF1744]">Strategic Vision.</span>
            </motion.h2>
          </div>
          
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-500 text-sm md:text-base leading-relaxed mb-6"
            >
              Our advisors bring decades of board-level experience across cloud systems, enterprise architecture, security governance, and cognitive AI computing to steer our technical path.
            </motion.p>
            
            {/* Navigation Slider Controls */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <button
                onClick={() => handleScroll("left")}
                className="w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-white flex items-center justify-center transition-all hover:bg-zinc-800 active:scale-95 shadow-lg"
                aria-label="Scroll left"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="w-12 h-12 rounded-full bg-[#FF1744] hover:bg-[#D8113A] text-white flex items-center justify-center transition-all hover:shadow-[0_0_20px_rgba(255,23,68,0.4)] active:scale-95 shadow-lg"
                aria-label="Scroll right"
              >
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Row 2: Widescreen Boardroom Banner Image (Mockup-inspired) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[21/9] overflow-hidden rounded-[2rem] border border-zinc-900 bg-zinc-950 mb-16 group shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/60 via-transparent to-[#030303]/20 z-10 pointer-events-none" />
          <img
            src="/assets/About-page/advisory_board_banner.png"
            alt="Advisory Board Boardroom Collaboration"
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
          />
        </motion.div>

        {/* Row 3: Horizontal Cards Slider */}
        <div className="relative">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#030303] to-transparent z-15 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#030303] to-transparent z-15 pointer-events-none hidden md:block" />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 px-1"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {advisors.map((advisor, idx) => {
              const c = colorMap[advisor.color];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                  className={`w-[280px] md:w-[320px] shrink-0 snap-start bg-[#0B0B0D] border border-zinc-900 ${c.border} rounded-[2rem] p-3 pb-4 flex flex-col justify-between relative overflow-hidden group shadow-xl transition-all duration-300`}
                >
                  {/* Color Glow Overlay */}
                  <div className={`absolute inset-0 ${c.glow} pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div>
                    {/* Concentric Image Wrapper with Padding */}
                    <div className="relative w-full aspect-[4/5] bg-zinc-950 overflow-hidden rounded-[1.5rem] block">
                      <img
                        src={advisor.photo}
                        alt={advisor.name}
                        className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    {/* Name & Designation Badge below photo */}
                    <div className="pt-4 px-2 flex justify-between items-center bg-[#0B0B0D] relative z-10">
                      <div>
                        <p className="text-white text-sm font-bold tracking-tight mb-0.5 group-hover:text-[#FF1744] transition-colors duration-300">{advisor.name}</p>
                        <p className="text-zinc-550 text-[10px] font-mono leading-none">{advisor.background.split(" — ")[0]}</p>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-mono font-semibold uppercase tracking-wider bg-zinc-950/40 shrink-0 ${c.tag}`}>
                        {advisor.experience}
                      </span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
