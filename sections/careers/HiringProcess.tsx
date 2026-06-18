"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function HiringProcess() {
  const steps = [
    {
      num: "01",
      title: "Apply Online",
      desc: "Submit your application along with your portfolio, GitHub, or resume. We look for passion, unique projects, and alignment with our tech stack.",
      tags: ["Resume Review", "Portfolio Check"],
    },
    {
      num: "02",
      title: "Screening Call",
      desc: "A quick 15-20 minute conversational call to understand your professional goals, background, expectations, and cultural alignment.",
      tags: ["Culture Fit", "15 Mins Call"],
    },
    {
      num: "03",
      title: "Technical Evaluation",
      desc: "A hands-on coding task or architecture review with our experts to gauge core engineering skills.",
      tags: ["Practical Assessment", "Architecture Talk"],
    },
    {
      num: "04",
      title: "Final Interview",
      desc: "Meet key leadership team members to discuss high-level engineering challenges, team dynamics, vision, and how you can make a global impact.",
      tags: ["Meet Leadership", "Q&A Session"],
    },
    {
      num: "05",
      title: "Offer & Onboarding",
      desc: "We extend a formal offer letter with a competitive package. Upon acceptance, we kickstart a smooth integration process with equipment delivery and team introductions.",
      tags: ["Welcome Pack", "Mentorship Start"],
    },
  ];

  const handleScrollToRoles = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("open-positions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-[20%] left-1/4 w-[600px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">
          
          {/* Left Column: Sticky Description & Header */}
          <div className="lg:sticky lg:top-[100px]">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                ROADMAP
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Hiring Process
              </h2>
              <p className="text-white text-sm leading-relaxed mb-8 font-semibold max-w-md">
                Our structured and transparent path is designed to discover your true potential and welcome you into our elite team.
              </p>
              
              <button
                onClick={handleScrollToRoles}
                className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 transition-all duration-300 shadow-[0_4px_20px_rgba(225,29,72,0.3)] hover:scale-[1.02]"
              >
                View Open Roles
              </button>
            </Reveal>
          </div>

          {/* Right Column: Vertical Timeline Steps */}
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="flex items-start gap-6 border-b border-zinc-900 pb-10 last:border-0 last:pb-0">
                  {/* Huge Step Number */}
                  <span className="font-sans font-black text-5xl md:text-6xl text-zinc-900 leading-none select-none shrink-0">
                    {step.num}
                  </span>
                  
                  {/* Step Details */}
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-white leading-relaxed font-semibold mb-4">
                      {step.desc}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-[9px] font-bold text-zinc-400 border border-zinc-800 rounded-full px-3 py-1 bg-zinc-950/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
