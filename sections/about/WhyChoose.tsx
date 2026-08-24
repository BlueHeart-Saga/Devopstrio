"use client";

import React, { useState, useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "Enterprise-Ready Technology Expertise",
    desc: "We combine Artificial Intelligence, Cloud Engineering, DevOps, Cybersecurity, and Modern Software Development under one roof—giving organizations access to a complete technology partner capable of delivering complex digital transformation initiatives from strategy to execution.",
    badge: "✓ AI, Cloud, Security & Software Engineering Specialists",
    image: "/assets/About-page/tech_architecture.png"
  },
  {
    num: "02",
    title: "Business Outcomes Over Deliverables",
    desc: "Technology is only valuable when it creates measurable impact. We focus on reducing costs, improving operational efficiency, accelerating delivery cycles, and unlocking new revenue opportunities through practical, results-driven solutions.",
    badge: "✓ Built to Improve Performance, Efficiency & Growth",
    image: "/assets/About-page/ai_dashboard.png"
  },
  {
    num: "03",
    title: "End-to-End Technology Partnership",
    desc: "From consulting and architecture to development, deployment, monitoring, and ongoing support, we manage the entire technology lifecycle. One partner. One team. Complete accountability.",
    badge: "✓ Strategy → Build → Deploy → Manage",
    image: "/assets/About-page/consulting_team.png"
  },
  {
    num: "04",
    title: "Cloud & Infrastructure Excellence",
    desc: "Our engineers design, migrate, modernize, and optimize cloud environments across Azure, AWS, Google Cloud, and hybrid infrastructures—ensuring secure, scalable, and future-ready platforms.",
    badge: "✓ Cloud Migration • DevOps • Infrastructure as Code",
    image: "/assets/About-page/cloud_servers.png"
  },
  {
    num: "05",
    title: "Security Embedded by Design",
    desc: "Security, compliance, governance, and monitoring are integrated into every solution we build. We help organizations protect critical systems, maintain compliance, and operate with confidence.",
    badge: "✓ Security-First Engineering Approach",
    image: "/assets/About-page/cyber_security.png"
  },
  {
    num: "06",
    title: "Global Delivery. Local Commitment.",
    desc: "With global delivery capabilities and round-the-clock support, we provide the agility of a modern technology partner while maintaining the responsiveness and accountability businesses expect.",
    badge: "✓ 24×7 Operations • Multi-Region Delivery",
    image: "/assets/About-page/global_network.png"
  },
  {
    num: "07",
    title: "Industry-Focused Innovation",
    desc: "We understand the unique challenges of Financial Services, Healthcare, Telecommunications, Logistics, Retail, Manufacturing, and Public Sector organizations, allowing us to deliver solutions aligned with real-world business needs.",
    badge: "✓ Deep Domain Knowledge Across Key Industries",
    image: "/assets/About-page/operations_room.png"
  },
  {
    num: "08",
    title: "Built for Long-Term Success",
    desc: "We don't just deliver projects—we build lasting partnerships. Our focus is helping organizations continuously innovate, adapt, and scale through evolving technologies and changing market demands.",
    badge: "✓ Trusted Technology Partner for Sustainable Growth",
    image: "/assets/About-page/mission/image.png"
  }
];

const AUTOPLAY_INTERVAL = 6000;

export function WhyChoose() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressAnimRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPaused) {
      if (progressAnimRef.current) {
        cancelAnimationFrame(progressAnimRef.current);
        progressAnimRef.current = null;
      }
      return;
    }

    let startTime = Date.now();
    let duration = AUTOPLAY_INTERVAL;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);

      if (elapsed >= duration) {
        setActiveIdx((prev) => (prev + 1) % reasons.length);
        setProgress(0);
        startTime = Date.now();
      }
      progressAnimRef.current = requestAnimationFrame(tick);
    };

    progressAnimRef.current = requestAnimationFrame(tick);

    return () => {
      if (progressAnimRef.current) {
        cancelAnimationFrame(progressAnimRef.current);
      }
    };
  }, [isPaused, activeIdx]);

  const handleTabClick = (idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
  };



  return (
    <section 
      className="w-full pt-16 md:pt-20 pb-4 md:pb-6 bg-[#030303] text-white relative overflow-hidden" 
      id="why-choose"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.012),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <div className="mb-12 text-center flex justify-center">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                Why Devopstrio
              </span>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white">
                There are many options. Here's why enterprises choose us.
              </h2>
            </div>
          </Reveal>
        </div>

        {/* Optimized Grid - Commented Out
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 flex flex-col gap-1">
            {reasons.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={item.num}
                  onClick={() => handleTabClick(idx)}
                  className={`w-full text-left relative pl-5 py-2.5 focus:outline-none transition-all duration-300 rounded-lg group ${
                    isActive ? "bg-zinc-950/40" : "hover:bg-zinc-950/20"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-1 bottom-1 w-[2px] bg-rose-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <h3 
                      className={`text-xs md:text-sm font-bold tracking-tight transition-colors duration-300 ${
                        isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-350"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500/80 animate-pulse shrink-0" />
                    )}
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-zinc-400 text-[11px] leading-relaxed font-medium mt-2 pr-2">
                          {item.desc}
                        </p>
                        <div className="mt-2.5">
                          <span className="inline-block text-[8px] font-bold text-rose-400 bg-rose-950/20 border border-rose-900/20 rounded px-2 py-0.5 uppercase tracking-wide">
                            {item.badge}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="w-full rounded-2xl border border-zinc-900/60 bg-zinc-950/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md relative overflow-hidden aspect-[16/10]">
              {reasons.map((item, idx) => {
                const active = idx === activeIdx;
                return (
                  <div
                    key={item.num}
                    className={`absolute inset-0 w-full h-full transition-all duration-500 ease-out ${
                      active 
                        ? "opacity-100 scale-100 z-10" 
                        : "opacity-0 scale-[1.03] pointer-events-none z-0"
                    }`}
                  >
                    <img src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 select-none pointer-events-none"
                    loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
        */}

        {/* Banner Image */}
        <Reveal className="mt-8 w-full max-w-5xl mx-auto">
          <div className="w-full relative overflow-hidden">
            <img src="/assets/About-page/why-choose/banner.png" 
              alt="Corporate Advantage Banner" 
              className="w-full h-auto select-none pointer-events-none"
            loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default WhyChoose;
