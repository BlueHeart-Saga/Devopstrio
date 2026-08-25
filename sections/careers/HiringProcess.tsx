"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export function HiringProcess() {
  const steps = [
    {
      num: "01",
      title: "Apply Online",
      desc: "Submit your application along with your portfolio, GitHub, or resume. We look for passion, unique projects, and alignment with our tech stack.",
    },
    {
      num: "02",
      title: "Screening Call",
      desc: "A quick 15-20 minute conversational call to understand your professional goals, background, expectations, and cultural alignment.",
    },
    {
      num: "03",
      title: "Technical Evaluation",
      desc: "A hands-on coding task or architecture review with our experts to gauge core engineering skills.",
    },
    {
      num: "04",
      title: "Final Interview",
      desc: "Meet key leadership team members to discuss high-level engineering challenges, team dynamics, vision, and how you can make a global impact.",
    },
    {
      num: "05",
      title: "Offer & Onboarding",
      desc: "We extend a formal offer letter with a competitive package. Upon acceptance, we kickstart a smooth integration process with equipment delivery and team introductions.",
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
    <section id="hiring-process" className="py-24 sm:py-32 bg-black border-b border-zinc-900/60 relative overflow-x-clip font-sans">
      {/* Background ambient glows */}
      <div className="absolute top-[20%] left-1/4 w-[600px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">

          {/* Left Column: Sticky Header & Quote Card */}
          <div className="lg:sticky lg:top-[120px] pr-0 lg:pr-5">
            <Reveal>
              <div className="relative my-4">
                {/* Arrow image (Moved left) */}
                <div className="absolute -top-7 -left-12 sm:-left-16 pointer-events-none select-none hidden sm:block">
                  <img
                    src="/webp/assets/components/lefttoright.webp"
                    alt="Arrow indicator"
                    className="w-12 sm:w-14 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                    loading="lazy"
                  />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                  Our Transparent{" "}
                  <span className="text-rose-500 font-semibold ">
                    Hiring Process.
                  </span>
                </h2>
              </div>

              {/* Styled Quote Box */}
              {/* <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 sm:p-7 shadow-xl relative overflow-hidden my-8">
                <span className="text-4xl font-serif text-rose-500 block mb-1 font-bold leading-none">“</span>
                <p className="text-zinc-200 text-sm sm:text-base font-semibold italic leading-relaxed mb-3">
                  &ldquo;Our hiring process is designed to discover your passion, evaluate practical engineering skills, and set you up for global success from day one.&rdquo;
                </p>
                <span className="text-xs font-semibold text-rose-400 block tracking-wider uppercase">
                  — Devopstrio Talent Team
                </span>
              </div> */}

              {/* <button
                onClick={handleScrollToRoles}
                className="inline-flex items-center bg-[#0B0F17] hover:bg-rose-600 text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-xl border border-zinc-800 hover:border-rose-500 rounded-xl group overflow-hidden"
              >
                <span className="px-6 py-3.5">View Open Roles</span>
                <span className="border-l border-zinc-800 group-hover:border-rose-500 px-4 py-3.5 flex items-center justify-center bg-black/40 group-hover:bg-rose-700/40 transition-colors">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-rose-500 group-hover:text-white" />
                </span>
              </button> */}
            </Reveal>
          </div>

          {/* Right Column: Vertical Timeline Steps (Description revealed ONLY on hover) */}
          <div className="flex flex-col">
            {steps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group flex flex-col sm:flex-row items-start gap-5 sm:gap-10 py-7 sm:py-9 border-b border-white/[0.08] last:border-0 hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] cursor-pointer">
                  
                  {/* Step Number */}
                  <div className="shrink-0 w-auto sm:w-16 mt-1">
                    <span className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-rose-500 leading-none select-none inline-block transition-all duration-400 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                      {step.num}
                    </span>
                  </div>

                  {/* Step Details */}
                  <div className="flex-1 flex flex-col justify-center text-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight m-0 transition-colors duration-300 group-hover:text-rose-400">
                      {step.title}
                    </h3>
                    
                    {/* Description revealed smoothly ONLY on step hover */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-400 ease-in-out opacity-0 group-hover:opacity-100 mt-0 group-hover:mt-2.5">
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-base md:text-lg text-zinc-200 font-semibold leading-relaxed m-0 pt-0.5">
                          {step.desc}
                        </p>
                      </div>
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
