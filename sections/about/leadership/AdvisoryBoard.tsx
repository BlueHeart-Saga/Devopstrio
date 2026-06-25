"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const advisors = [
  {
    initials: "EA",
    name: "Enterprise Strategy Advisor",
    background: "Former CTO — Global Technology Group",
    expertise: "Enterprise Strategy · Digital Transformation",
    experience: "20+ Years",
    color: "rose",
  },
  {
    initials: "CA",
    name: "Cloud Transformation Advisor",
    background: "Former VP Engineering — Cloud Platform Firm",
    expertise: "Cloud Architecture · Multi-cloud Strategy",
    experience: "18+ Years",
    color: "violet",
  },
  {
    initials: "AA",
    name: "AI & Data Advisor",
    background: "Chief Data Scientist — Fortune 100 Enterprise",
    expertise: "AI Innovation · Machine Learning · DataOps",
    experience: "15+ Years",
    color: "emerald",
  },
  {
    initials: "SA",
    name: "Cybersecurity Advisor",
    background: "Former CISO — Financial Services Group",
    expertise: "Cybersecurity Governance · Zero Trust",
    experience: "22+ Years",
    color: "amber",
  },
];

const colorMap: Record<string, { avatar: string; glow: string; border: string; text: string }> = {
  rose: { 
    avatar: "from-rose-500/20 via-rose-500/5 to-transparent border-rose-500/30 text-rose-400", 
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.08),transparent_60%)]",
    border: "hover:border-rose-500/30",
    text: "text-rose-400"
  },
  violet: { 
    avatar: "from-violet-500/20 via-violet-500/5 to-transparent border-violet-500/30 text-violet-400", 
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.08),transparent_60%)]",
    border: "hover:border-violet-500/30",
    text: "text-violet-400"
  },
  emerald: { 
    avatar: "from-emerald-500/20 via-emerald-500/5 to-transparent border-emerald-500/30 text-emerald-400", 
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_60%)]",
    border: "hover:border-emerald-500/30",
    text: "text-emerald-400"
  },
  amber: { 
    avatar: "from-amber-500/20 via-amber-500/5 to-transparent border-amber-500/30 text-amber-400", 
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.08),transparent_60%)]",
    border: "hover:border-amber-500/30",
    text: "text-amber-400"
  },
};

export const AdvisoryBoard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 380; // Approximate card width + gap
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-[#030303] border-t border-zinc-900 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -left-40 top-1/4 w-96 h-96 rounded-full bg-rose-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute -right-40 bottom-1/4 w-96 h-96 rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Navigation (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pr-0 lg:pr-8">
            <div>
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
                className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight"
              >
                Global Counsel.<br />
                <span className="text-[#FF1744]">Strategic Vision.</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-zinc-550 text-sm md:text-base leading-relaxed mb-8"
              >
                Our advisors bring decades of board-level experience across cloud systems, enterprise architecture, security governance, and cognitive AI computing to steer our technical path.
              </motion.p>
            </div>

            {/* Slider Controls (Mockup Style) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mt-4 lg:mt-8"
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

          {/* Right Column: Horizontal Cards Slider (lg:col-span-8) */}
          <div className="lg:col-span-8 relative">
            {/* Fade overlays on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#030303] to-transparent z-15 pointer-events-none hidden md:block" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#030303] to-transparent z-15 pointer-events-none hidden md:block" />

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
                    className={`w-[300px] md:w-[350px] shrink-0 snap-start bg-[#0B0B0D] border border-zinc-900 ${c.border} rounded-[2rem] p-5 pb-6 flex flex-col justify-between relative overflow-hidden group shadow-xl transition-all duration-300`}
                  >
                    {/* Radial glow background */}
                    <div className={`absolute inset-0 ${c.glow} pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div>
                      {/* Initials Badge */}
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.avatar} border flex items-center justify-center text-lg font-black tracking-wider shadow-inner mb-6 relative overflow-hidden`}>
                        {advisor.initials}
                      </div>

                      {/* Info */}
                      <h3 className="text-white font-bold text-lg tracking-tight mb-1.5 group-hover:text-[#FF1744] transition-colors duration-300">
                        {advisor.name}
                      </h3>
                      <p className="text-zinc-550 text-[12px] leading-relaxed mb-6 font-medium">
                        {advisor.background}
                      </p>
                    </div>

                    {/* Metadata Footer */}
                    <div className="pt-4 border-t border-zinc-900/50 flex justify-between items-center mt-auto">
                      <div className="flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        <span className="text-[11px] text-zinc-400 font-mono font-bold tracking-tight">{advisor.experience}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full border border-zinc-800 text-[9px] text-zinc-500 font-mono font-semibold uppercase tracking-wider bg-zinc-950/40">
                        {advisor.expertise.split(" · ")[0]}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
