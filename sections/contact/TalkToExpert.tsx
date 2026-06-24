"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Expert {
  id: string;
  name: string;
  role: string;
  year: string;
  image: string;
  social: string;
  link: string;
  headline: string;
  quote: string;
}

const experts: Expert[] = [
  {
    id: "alex",
    name: "Alexey Pyankov",
    role: "Design Director",
    year: "since 2020",
    image: "/assets/Contact-page/expert/pragmatica_man.png",
    social: "Telegram",
    link: "#",
    headline: "Devopstrio — crafting digital experiences that feel intuitively human.",
    quote: "The digital world is dynamically evolving. Everything that enters it is processed, scaled, and takes on new forms and meanings. To be a witness to change is magic!"
  },
  {
    id: "sarah",
    name: "Sarah Jenkins",
    role: "VP of Cloud Architecture",
    year: "since 2019",
    image: "/assets/Contact-page/expert/expert_woman_1.png",
    social: "LinkedIn",
    link: "#",
    headline: "Engineering scale  where your cloud ambitions become resilient reality.",
    quote: "True digital transformation isn't just about moving to the cloud. It's about rethinking your foundational architecture to be agile, secure, and infinitely scalable from day one."
  },
  {
    id: "michael",
    name: "Michael Chen",
    role: "Head of AI Innovation",
    year: "since 2021",
    image: "/assets/Contact-page/expert/expert_man_2.png",
    social: "Email",
    link: "#",
    headline: "Unlocking intelligence  turning complex data into autonomous action.",
    quote: "Artificial intelligence shouldn't be a black box. We engineer transparent, stateful AI agents that seamlessly integrate into your workflows and drive measurable enterprise growth."
  },
  {
    id: "elena",
    name: "Elena Rodriguez",
    role: "Lead Security Strategist",
    year: "since 2022",
    image: "/assets/Contact-page/expert/expert_woman_2.png",
    social: "Telegram",
    link: "#",
    headline: "Securing the future  building zero-trust perimeters for the modern web.",
    quote: "Security is no longer a final checklist—it is the bedrock of innovation. We design proactive, resilient systems that protect your data without compromising engineering velocity."
  }
];

export function TalkToExpert() {
  const [activeExpert, setActiveExpert] = useState(0);

  return (
    <section className="relative w-full h-[95vh] min-h-[850px] max-h-[1200px] bg-[#e6e6e6] overflow-hidden font-sans">
      
      {/* Background Image Container */}
      <AnimatePresence initial={false}>
        <motion.div
          key={activeExpert}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={experts[activeExpert].image}
            alt={experts[activeExpert].name}
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle gradient to ensure white text readability on light backgrounds */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Overlays / Content Container */}
      <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10 pointer-events-none">
        
        {/* Top Area */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.h2 
              key={`headline-${activeExpert}`}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              className="text-white text-3xl md:text-5xl lg:text-[56px] font-normal leading-[1.1] max-w-[30rem] drop-shadow-md pointer-events-auto tracking-tight"
            >
              {experts[activeExpert].headline}
            </motion.h2>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.p 
              key={`quote-${activeExpert}`}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-white/90 text-sm md:text-base font-normal max-w-sm drop-shadow-md pointer-events-auto leading-relaxed"
            >
              {experts[activeExpert].quote}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col gap-6 md:gap-8 w-full pointer-events-auto">
          
          {/* Avatar Selector */}
          <div className="flex items-end justify-between w-full">
            <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide max-w-[80%] md:max-w-full">
              {experts.map((expert, idx) => (
                <button
                  key={expert.id}
                  onClick={() => setActiveExpert(idx)}
                  className="relative flex flex-col items-center gap-2.5 group flex-shrink-0"
                >
                  {/* Active Dot */}
                  <div className={`w-1.5 h-1.5 rounded-full bg-white transition-opacity duration-300 ${activeExpert === idx ? 'opacity-100 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'opacity-0 group-hover:opacity-50'}`} />
                  
                  {/* Avatar */}
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border transition-all duration-500 ${activeExpert === idx ? 'border-white scale-110 shadow-xl' : 'border-transparent opacity-50 group-hover:opacity-100 grayscale hover:grayscale-0'}`}>
                    <img src={expert.image} alt={expert.name} className="w-full h-full object-cover object-top" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Info Row */}
          <div className="flex items-center justify-between border-t border-white/30 pt-4 md:pt-6 text-white text-[13px] md:text-sm font-medium tracking-wide">
            <div className="flex-1 text-left">
              <AnimatePresence mode="wait">
                <motion.div key={activeExpert + 'name'} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  {experts[activeExpert].name}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex-1 text-right text-white/80">
              <AnimatePresence mode="wait">
                <motion.div key={activeExpert + 'role'} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  {experts[activeExpert].role}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default TalkToExpert;
