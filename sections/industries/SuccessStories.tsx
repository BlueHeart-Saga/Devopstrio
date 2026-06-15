"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const successStories = [
  {
    company: "Apex Clearing Bank",
    achievement: "Mainframe Modernization",
    desc: "Migrated Apex's core transaction ledger to a multi-cloud Kubernetes setup, cutting monthly infrastructure expenditures by 45%.",
    metric: "-45% Costs"
  },
  {
    company: "Novis Diagnostics",
    achievement: "Secure Medical Ingest",
    desc: "Configured an encrypted patient log ingest channel handling 10 million telemetry signals daily with full HIPAA alignment.",
    metric: "10M Signals/Day"
  },
  {
    company: "Horizon Retailers",
    achievement: "Black Friday Scaling",
    desc: "Automated container scaling thresholds to support 4.5x visitor peaks during high-volume promotional sales events.",
    metric: "99.999% Uptime"
  },
  {
    company: "Global Telecom",
    achievement: "Zero-Downtime Migration",
    desc: "Shifted 85TB of active billing records to a distributed multi-region database structure with zero operational delays.",
    metric: "85TB Migrated"
  },
  {
    company: "Aerotech Logistics",
    achievement: "Autonomous Scheduling",
    desc: "Automated edge logistics routes using distributed broker queues, cutting delivery dispatch times by 30%.",
    metric: "30% Faster Route"
  },
  {
    company: "EduLearn Portal",
    achievement: "Virtual Class Scaling",
    desc: "Scaled interactive video streaming servers to handle 200,000 active remote learners simultaneously.",
    metric: "200K Active Users"
  },
  {
    company: "Public Safety Net",
    achievement: "High-Availability Gateway",
    desc: "Upgraded citizen data gates to handle high-frequency requests under strict government compliance codes.",
    metric: "180ms Latency"
  },
  {
    company: "MediaFlow CDN",
    achievement: "Edge Content Cache",
    desc: "Optimized live video stream delivery networks across 12 edge points, slashing buffering issues by 65%.",
    metric: "-65% Buffering"
  },
  {
    company: "SmartForge IoT",
    achievement: "Predictive Machine Care",
    desc: "Configured event-driven alert triggers on 1,250 factory floor machinery systems to automate repair tickets.",
    metric: "92% Auto-Detect"
  },
  {
    company: "PaySafe Integrations",
    achievement: "Fraud Filtering Pipeline",
    desc: "Built an AI-driven transaction checking pipeline that flags suspicious bank ledger anomalies under 12ms.",
    metric: "<12ms Check"
  }
];

export function SuccessStories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 374; // Card width (350px) + gap (24px)
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="success" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      {/* Hide Scrollbar Style Block */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .hide-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}} />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-left">
        
        {/* Section Header with Navigation Arrow Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-4 block">
              Case Histories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white">
              Featured client <span className="text-[#E11D48]">success stories</span>
            </h2>
          </Reveal>

          {/* Navigation controls */}
          <Reveal className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full border border-white/5 bg-[#0b0b0c] hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full border border-white/5 bg-[#0b0b0c] hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <ArrowRight size={16} />
            </button>
          </Reveal>
        </div>

        {/* Horizontal Slider List */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 pt-4 snap-x snap-mandatory relative"
        >
          {successStories.map((story, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="flex-shrink-0 snap-start">
              <div className="group block w-[320px] sm:w-[350px] aspect-[4/3] bg-[#0b0b0c] border border-white/10 rounded-[28px] p-6 hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer">
                
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="flex flex-col h-full justify-between relative z-10">
                  
                  <div>
                    {/* Header: Company & Metric Tag */}
                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                      <span className="text-sm font-bold text-white group-hover:text-[#E11D48] transition-colors duration-300">
                        {story.company}
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full bg-rose-950/20 text-[#E11D48] text-[10px] font-mono border border-rose-500/20 group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-300">
                        {story.metric}
                      </span>
                    </div>

                    {/* Achievement Title */}
                    <h4 className="text-base font-bold text-white mt-4 mb-2 tracking-tight group-hover:text-[#E11D48] transition-colors duration-300">
                      {story.achievement}
                    </h4>
                  </div>

                  <div>
                    {/* Description */}
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                      {story.desc}
                    </p>

                    {/* Action Footer */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-zinc-500 group-hover:text-white transition-colors duration-300">
                      <span className="text-[10px] uppercase font-mono tracking-wider font-bold">
                        Client Success
                      </span>
                      <span className="text-[10px] font-bold flex items-center gap-1">
                        Read Story <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
