"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Users, Briefcase, Settings, Compass, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const models = [
  {
    id: "dedicated-teams",
    name: "Dedicated Expert Teams",
    icon: Users,
    image: "/assets/Services-Page/engagement-model/1.png",
    desc: "Accelerate delivery with fully integrated teams of elite engineers, product builders, and certified DevOps experts working as a natural extension of your tech organization.",
    bullets: [
      "Rapid mobilization within 10 days",
      "Seamless integration with your daily workflows",
      "High-performance execution guarantees",
      "Full IP ownership and transparent governance"
    ]
  },
  {
    id: "project-based",
    name: "Strategic Project Delivery",
    icon: Briefcase,
    image: "/assets/Services-Page/engagement-model/2.png",
    desc: "Complete end-to-end execution of your technical roadmap. From solution design and cloud architecture to implementation and final deployment.",
    bullets: [
      "Predictable outcome-based budgets",
      "Transparent scope and detailed roadmaps",
      "Dedicated senior delivery management",
      "Thorough handoffs and continuous training"
    ]
  },
  {
    id: "managed-services",
    name: "24/7 Managed SRE Operations",
    icon: Settings,
    image: "/assets/Services-Page/engagement-model/3.png",
    desc: "Proactive management of your multi-cloud infrastructure, security compliance, and application health with certified 24/7 site reliability engineering.",
    bullets: [
      "99.99% system uptime guarantees",
      "Rapid response for high-priority incidents",
      "Proactive cloud cost optimization",
      "Continuous security compliance monitoring"
    ]
  },
  {
    id: "strategic-consulting",
    name: "Strategic Advisory & Architecture",
    icon: Compass,
    image: "/assets/Services-Page/engagement-model/4.png",
    desc: "High-impact guidance on digital transformation, zero-trust security postures, cloud-native scalability, and generative AI readiness assessments.",
    bullets: [
      "Principal-led architecture design sessions",
      "Detailed infrastructure blueprints and audits",
      "Unbiased technology selection recommendations",
      "Optimized cloud and license spend reports"
    ]
  }
];

export function EngagementModels() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeModel = models[activeIdx];

  // Auto-cycle tabs every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prevIdx) => (prevIdx + 1) % models.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIdx]); // Resetting the interval on change ensures manual clicks reset the timer

  return (
    <section className="w-full py-24 bg-[#080808] text-white border-b border-zinc-900 relative" id="engagement-models">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.02),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header Block */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ENGAGEMENT MODELS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white uppercase">
              Tailored partnerships built for <span className="text-rose-500">long-term value</span>
            </h2>
            <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed">
              Choose the model that best fits your organizational structure, roadmap velocity, and operational requirements.
            </p>
          </div>
        </Reveal>

        {/* Dynamic Accordion/Tab Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Panel: Overlapping Interactive Card displaying active model illustration */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal key={activeIdx} className="h-full">
              <div className="h-full bg-zinc-950/40 border border-white/10 hover:border-rose-500/30 rounded-3xl overflow-hidden relative min-h-[420px] group backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all duration-500">
                {/* Full Card Image: Premium Tech-Art Graphic */}
                <img
                  src={activeModel.image}
                  alt={activeModel.name}
                  className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 pointer-events-none select-none"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Panel: Accordion List */}
          <div className="lg:col-span-7 flex flex-col gap-4 justify-center text-left">
            {models.map((model, idx) => {
              const isSelected = activeIdx === idx;
              const Icon = model.icon;
              return (
                <div
                  key={model.id}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.25)] ${
                    isSelected ? "bg-zinc-950/50 border-white/10 hover:border-rose-500/20" : "bg-transparent hover:bg-zinc-950/30 border-white/5"
                  }`}
                  onClick={() => setActiveIdx(idx)}
                >
                  {/* Accordion Trigger Header */}
                  <div className="flex items-center justify-between p-6 select-none">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                        isSelected ? "bg-rose-950/30 text-rose-500" : "bg-zinc-900 text-zinc-400"
                      }`}>
                        <Icon size={16} />
                      </div>
                      <span className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
                        isSelected ? "text-white" : "text-zinc-300 hover:text-zinc-200"
                      }`}>
                        {model.name}
                      </span>
                    </div>
                    <span className="text-zinc-500">
                      {isSelected ? <ChevronUp size={16} className="text-rose-500" /> : <ChevronDown size={16} />}
                    </span>
                  </div>

                  {/* Accordion Content */}
                  <div
                    className={`transition-all duration-350 ease-in-out ${
                      isSelected
                        ? "max-h-[160px] opacity-100 border-t border-zinc-900/50 p-6 pt-4"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="flex gap-4">
                      {/* Left vertical Accent Line */}
                      <div className="w-0.5 bg-rose-500 flex-shrink-0" />
                      <p className="text-xs text-zinc-200 leading-relaxed font-semibold">
                        {model.desc}
                      </p>
                    </div>
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
