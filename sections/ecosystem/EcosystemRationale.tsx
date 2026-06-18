"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2, XCircle } from "lucide-react";

const comparisonPoints = [
  {
    num: "01",
    tabName: "Strategic Approach",
    traditionalTitle: "Traditional IT Vendor",
    traditionalDesc: "Transactional, project-based contracts with rigid scopes, high change-request fees, and limited long-term vision.",
    trioTitle: "Devopstrio Ecosystem",
    trioDesc: "Long-term strategic partnership focused on continuous innovation, shared risk, and quantifiable business outcomes."
  },
  {
    num: "02",
    tabName: "Technology Architecture",
    traditionalTitle: "Traditional IT Vendor",
    traditionalDesc: "Heavy reliance on proprietary, inflexible legacy systems resulting in vendor lock-in and high licensing costs.",
    trioTitle: "Devopstrio Ecosystem",
    trioDesc: "Open, cloud-native architecture leveraging best-in-class multi-cloud platforms (AWS, Azure, GCP) and open-source standards."
  },
  {
    num: "03",
    tabName: "Delivery Velocity",
    traditionalTitle: "Traditional IT Vendor",
    traditionalDesc: "Slow, siloed deployments with manual hand-offs, causing severe delays in time-to-market and high failure rates.",
    trioTitle: "Devopstrio Ecosystem",
    trioDesc: "High-velocity automated CI/CD pipelines utilizing our proprietary engineering accelerators for rapid, reliable releases."
  },
  {
    num: "04",
    tabName: "Team Integration",
    traditionalTitle: "Traditional IT Vendor",
    traditionalDesc: "Outsourced 'black box' teams with poor communication, cultural disconnects, and lack of domain knowledge.",
    trioTitle: "Devopstrio Ecosystem",
    trioDesc: "Seamless integration of our vetted, certified talent into your core engineering units, operating as a single unified team."
  },
  {
    num: "05",
    tabName: "Security & Compliance",
    traditionalTitle: "Traditional IT Vendor",
    traditionalDesc: "Reactive security added as an afterthought, leading to vulnerabilities and compliance audit failures.",
    trioTitle: "Devopstrio Ecosystem",
    trioDesc: "Proactive, 'shift-left' zero-trust security and automated compliance guardrails built directly into the delivery pipeline."
  },
  {
    num: "06",
    tabName: "Operations & Support",
    traditionalTitle: "Traditional IT Vendor",
    traditionalDesc: "Basic break-fix support during limited regional hours, resulting in prolonged downtime during critical incidents.",
    trioTitle: "Devopstrio Ecosystem",
    trioDesc: "24x7 Follow-the-Sun managed services with proactive monitoring, automated self-healing, and rapid incident response."
  }
];

export function EcosystemRationale() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % comparisonPoints.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const activePoint = comparisonPoints[activeIndex];

  return (
    <section id="rationale" className="w-full py-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900/60">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Subtle Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Top Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ECOSYSTEM RATIONALE
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              The Ecosystem Advantage: <span className="block md:inline text-rose-500">Why choose Devopstrio?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-2xl">
              Traditional outsourcing models are broken. We replaced transactional vendor relationships with a unified ecosystem designed to drive continuous transformation and measurable results.
            </p>
          </Reveal>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr] gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Large Tab Switcher */}
          <div className="flex flex-col gap-3 md:gap-4 select-none">
            {comparisonPoints.map((point, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={point.tabName}
                  onClick={() => setActiveIndex(idx)}
                  className="flex items-center gap-4 text-left group focus:outline-none py-2"
                >
                  {/* Left indicator vertical line */}
                  <span className={`w-1 h-8 bg-rose-500 transition-all duration-300 origin-center ${
                    isActive ? "opacity-100 scale-y-100 animate-pulse shadow-[0_0_12px_rgba(225,29,72,0.8)]" : "opacity-0 scale-y-0"
                  }`} />
                  
                  {/* Tab Name */}
                  <span className={`text-lg md:text-xl font-bold tracking-tight transition-all duration-300 ${
                    isActive 
                      ? "text-white scale-[1.02] origin-left" 
                      : "text-zinc-600 hover:text-zinc-400"
                  }`}>
                    {point.num}. {point.tabName}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT: VS Comparison Split Card */}
          <div className="flex flex-col relative lg:sticky lg:top-32 min-h-[400px]">
            
            {comparisonPoints.map((point, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div 
                  key={point.num}
                  className={`absolute inset-0 w-full flex flex-col gap-4 transition-all duration-700 ease-in-out ${
                    isActive ? "opacity-100 translate-x-0 z-10" : "opacity-0 translate-x-8 z-0 pointer-events-none"
                  }`}
                >
                  {/* TRADITIONAL VENDOR CARD (Negative/Muted) */}
                  <div className="w-full bg-zinc-950/40 border border-zinc-800/50 rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden backdrop-blur-sm">
                    {/* Visual styling */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800/10 rounded-bl-full blur-2xl" />
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
                        <XCircle size={16} />
                      </div>
                      <h3 className="text-base font-bold text-zinc-400 uppercase tracking-widest">
                        {point.traditionalTitle}
                      </h3>
                    </div>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium pl-11">
                      {point.traditionalDesc}
                    </p>
                  </div>

                  {/* VS Divider badge */}
                  <div className="absolute left-12 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-[#030303] border border-zinc-800 text-zinc-400 font-bold text-xs shadow-xl hidden sm:flex">
                    VS
                  </div>

                  {/* DEVOPSTRIO ECOSYSTEM CARD (Positive/Highlighted) */}
                  <div className="w-full bg-gradient-to-br from-rose-950/20 to-zinc-950 border border-rose-500/30 rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden shadow-[0_10px_40px_-10px_rgba(225,29,72,0.15)] group">
                    {/* Visual styling */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-rose-600/10 rounded-bl-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />
                    
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]">
                        <CheckCircle2 size={16} />
                      </div>
                      <h3 className="text-base font-bold text-white uppercase tracking-widest">
                        {point.trioTitle}
                      </h3>
                    </div>
                    <p className="text-zinc-200 text-sm md:text-base leading-relaxed font-bold pl-11 relative z-10">
                      {point.trioDesc}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
