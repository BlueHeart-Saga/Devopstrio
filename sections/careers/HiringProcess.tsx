"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Activity } from "lucide-react";

import Link from "next/link";

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
    <section className="py-24 bg-black border-b border-zinc-900/60 relative overflow-x-clip">
      {/* Background ambient glows */}
      <div className="absolute top-[20%] left-1/4 w-[600px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">
          
          {/* Left Column: Sticky Description & Header */}
          <div className="lg:sticky lg:top-[120px] pr-0 lg:pr-5">
            <Reveal>
              <span className="text-[12px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 flex items-center gap-2">
                <Activity size={14} /> ROADMAP
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight my-4">
                Hiring Process
              </h2>
              <p className="text-base text-zinc-400 leading-relaxed mb-9 max-w-md">
                Our structured and transparent path is designed to discover your true potential and welcome you into our elite team. Explore our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link> to understand our core mission.
              </p>
              
              <button
                onClick={handleScrollToRoles}
                className="px-8 py-3.5 rounded-full text-[0.95rem] font-bold text-white bg-rose-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(244,63,94,0.4)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_10px_30px_rgba(244,63,94,0.3)] border-none"
              >
                View Open Roles
              </button>
            </Reveal>
          </div>

          {/* Right Column: Vertical Timeline Steps */}
          <div className="flex flex-col">
            {steps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-10 py-9 sm:py-12 border-b border-white/[0.08] last:border-0 hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)]">
                  {/* Huge Step Number */}
                  <div className="shrink-0 w-auto sm:w-16 mt-1">
                    <span className="font-sans font-extrabold text-[2.2rem] sm:text-[2.8rem] text-white/10 leading-none select-none inline-block transition-all duration-400 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-rose-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]">
                      {step.num}
                    </span>
                  </div>
                  
                  {/* Step Details */}
                  <div className="flex-1 flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-white m-0 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed m-0">
                      {step.desc}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2.5 mt-1.5">
                      {step.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-[0.72rem] font-semibold text-white/55 bg-white/[0.02] border border-white/[0.08] px-3 py-1 rounded-full tracking-[0.5px] transition-all duration-300 group-hover:border-rose-500/30 group-hover:bg-rose-500/10 group-hover:text-white"
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
