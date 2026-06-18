"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2 } from "lucide-react";

const corePoints = [
  {
    num: "01",
    tabName: "Global Presence, Local Expertise",
    title: "Global Presence, Local Expertise",
    desc: "Access world-class engineering expertise locally with global delivery teams designed to scale seamlessly under flexible engagement models.",
    gradient: "from-rose-950/40 via-purple-950/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/globalpresence.png"
  },
  {
    num: "02",
    tabName: "Cloud, Data & AI Excellence",
    title: "Cloud, Data & AI Excellence",
    desc: "Leverage intelligence-driven automation, GenAI, and cloud platforms (Azure, AWS, GCP) to unlock next-generation product engineering.",
    gradient: "from-blue-950/40 via-indigo-950/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/cloudai.png"
  },
  {
    num: "03",
    tabName: "Outcome-Driven Transformation",
    title: "Outcome-Driven Transformation",
    desc: "We align every project outcome with direct business value, performance milestones, cost-efficiency metrics, and operational goals.",
    gradient: "from-teal-950/40 via-emerald-950/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/outcome.png"
  },
  {
    num: "04",
    tabName: "End-to-End Technology Delivery",
    title: "End-to-End Technology Delivery",
    desc: "From conceptualization, design, architecture, implementation to managed operations and continuous delivery—all managed under one strategic partner.",
    gradient: "from-emerald-950/40 via-zinc-900/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/technology.png"
  },
  {
    num: "05",
    tabName: "Multi-Cloud Engineering Leadership",
    title: "Multi-Cloud Engineering Leadership",
    desc: "Our certified cloud experts build resilient infrastructures on AWS, Azure, Google Cloud, and complex hybrid environments.",
    gradient: "from-indigo-950/40 via-pink-950/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/multicloud.png"
  },
  {
    num: "06",
    tabName: "Enterprise-Grade Security & Reliability",
    title: "Enterprise-Grade Security & Reliability",
    desc: "Zero-trust environments, compliance guardrails, automated threat-detection, and highly reliable Site Reliability Engineering built into every delivery.",
    gradient: "from-violet-950/40 via-fuchsia-950/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/gradesecurity.png"
  },
  {
    num: "07",
    tabName: "Scalable Global Delivery Model",
    title: "Scalable Global Delivery Model",
    desc: "Scale teams dynamically with elite developers, DevOps engineers, and cloud architects operating under our optimized global framework.",
    gradient: "from-fuchsia-950/40 via-rose-950/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/globaldeliver.png"
  },
  {
    num: "08",
    tabName: "Long-Term Strategic Partnership",
    title: "Long-Term Strategic Partnership",
    desc: "We focus on long-term relationships, strategic consulting, knowledge-sharing, and continuous value creation beyond transactional contracts.",
    gradient: "from-rose-950/40 via-orange-950/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/partnership.png"
  }
];

const checklist = [
  "AI & Cloud Specialists",
  "Enterprise-Grade Security",
  "Infrastructure Automation Experts",
  "Modern Software Engineering",
  "Industry-Specific Expertise",
  "Scalable Global Delivery",
  "24×7 Managed Operations",
  "Long-Term Technology Partnership"
];

export function WhyDevopstrio() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % corePoints.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const activePoint = corePoints[activeIndex];

  return (
    <section className="w-full py-24 bg-[#030303] text-white relative overflow-hidden">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Top Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Why Devopstrio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              Engineering Innovation. <span className="block md:inline">Delivering <span className="text-rose-500">Business Outcomes.</span></span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-2xl mx-auto">
              We combine deep technical expertise, industry knowledge, and modern engineering practices to help organizations innovate faster, operate securely, and scale confidently in an increasingly digital world.
            </p>
          </Reveal>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Large Tab Switcher */}
          <div className="flex flex-col gap-3 md:gap-4 select-none">
            {corePoints.map((point, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={point.title}
                  onClick={() => setActiveIndex(idx)}
                  className="flex items-center gap-4 text-left group focus:outline-none py-1"
                >
                  {/* Left indicator vertical line */}
                  <span className={`w-1 h-8 bg-rose-500 transition-all duration-300 origin-center ${
                    isActive ? "opacity-100 scale-y-100 animate-pulse" : "opacity-0 scale-y-0"
                  }`} />
                  
                  {/* Tab Name */}
                  <span className={`text-lg md:text-xl xl:text-2xl font-bold tracking-tight transition-all duration-300 ${
                    isActive 
                      ? "text-white scale-[1.01] origin-left" 
                      : "text-zinc-600 hover:text-zinc-400"
                  }`}>
                    {point.tabName}.
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Visual Card & Description */}
          <div className="flex flex-col lg:sticky lg:top-28">
            
            {/* Elegant visual card */}
            <div className="relative w-full aspect-[16/10] rounded-[32px] overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-[0_20px_40px_rgba(0,0,0,0.6)] mb-8 select-none">
              {corePoints.map((point, idx) => (
                <div
                  key={point.num}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    idx === activeIndex ? "opacity-90 scale-100 z-10" : "opacity-0 scale-105 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={point.image}
                    alt={point.title}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Premium overlay gradients for readability and style blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-25 mix-blend-color-dodge`} />
                </div>
              ))}

              {/* Foreground content: Number & top-left indicator */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 pointer-events-none">
                {/* Subtle top-left indicator dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-white/60" />

                {/* Sparkle star matrix grid */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 grid grid-cols-5 gap-4 opacity-40 pointer-events-none">
                  {Array.from({ length: 25 }).map((_, i) => {
                    const isSpecial = i === 12 || i === 18 || i === 7;
                    return (
                      <svg
                        key={i}
                        className={`w-3.5 h-3.5 transition-all duration-700 ${
                          isSpecial ? "text-rose-500 scale-125 animate-pulse" : "text-white/10"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                      </svg>
                    );
                  })}
                </div>

                {/* Giant bottom-left number */}
                <span className="text-6xl md:text-7xl font-black text-white/90 leading-none select-none font-sans drop-shadow-md">
                  {activePoint.num}
                </span>
              </div>
            </div>

            {/* Active Content description */}
            <div className="min-h-[140px] flex flex-col justify-start">
              <h3 className="text-lg md:text-xl font-extrabold text-white mb-3 tracking-tight">
                {activePoint.title}
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold max-w-lg">
                {activePoint.desc}
              </p>
            </div>

          </div>

        </div>

        {/* Checklist & Closing Statement Block */}
        {/*
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start pt-12 border-t border-zinc-900/60">
          
          <Reveal className="border border-zinc-850 bg-zinc-950/40 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_70%)] blur-3xl pointer-events-none" />

            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 relative z-10">
              Why Organizations Choose <span className="font-bold text-rose-500">Devopstrio</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 relative z-10">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-rose-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-350 font-bold text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="py-8 border-r-4 border-r-rose-600 pr-8 pl-4 bg-gradient-to-l from-rose-950/10 to-transparent flex items-center h-full">
            <p className="text-base md:text-lg font-light leading-relaxed text-zinc-300">
              Devopstrio is more than a technology provider—we are a <span className="font-bold text-white">strategic partner</span> helping organizations build secure, scalable, and intelligent digital ecosystems for the future.
            </p>
          </Reveal>

        </div>
        */}

      </div>
    </section>
  );
}
export { WhyDevopstrio as default };
