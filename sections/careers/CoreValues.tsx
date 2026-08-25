"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbulb, Target, Users, Star, BookOpen, ShieldCheck } from "lucide-react";

const cultureValues = [
  {
    step: "01",
    title: "Innovation",
    desc: "Always exploring new ideas, frameworks, and next-gen technologies. We empower our teams to experiment boldly, solve complex challenges, and build scalable solutions that push the boundaries of modern IT.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Ownership",
    desc: "Empowered decision-making and accountability. We trust our engineers to take complete ownership of their projects, driving initiatives from architectural design to production deployment with confidence.",
    icon: Target,
  },
  {
    step: "03",
    title: "Collaboration",
    desc: "One global team united across borders. We break down operational silos to foster knowledge sharing, open communication, and cross-functional synergy between engineering, product, and leadership.",
    icon: Users,
  },
  {
    step: "04",
    title: "Excellence",
    desc: "Setting uncompromised engineering standards. We hold ourselves to the highest benchmark in code quality, security protocols, system reliability, and automated CI/CD deployment stability.",
    icon: Star,
  },
  {
    step: "05",
    title: "Continuous Learning",
    desc: "A continuous growth mindset embedded in our culture. We actively invest in our people through sponsored technical certifications, dedicated learning hours, workshops, and expert mentorship.",
    icon: BookOpen,
  },
  {
    step: "06",
    title: "Integrity & Transparency",
    desc: "Building authentic relationships anchored in trust. We prioritize open communication, ethical engineering practices, clear performance expectations, and complete honesty with our team and clients.",
    icon: ShieldCheck,
  },
];

export function CoreValues() {
  return (
    <section id="values" className="w-full py-24 sm:py-32 bg-[#030303] border-b border-zinc-900/80 relative font-sans">
      
      {/* Dark Ambient Glow Mesh */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-32 self-start z-20">
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white font-sans mb-5">
                The principles that <br className="hidden sm:inline" />
                <span className="text-rose-500 font-semibold">define us.</span>
              </h2>
            </Reveal>
          </div>

          {/* Right Column: Scrollable Cards (Description revealed ONLY on hover) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 w-full">
            {cultureValues.map((val) => {
              return (
                <div key={val.step} className="w-full">
                  <div className="bg-[#090C15] hover:bg-[#0E1322] border border-zinc-800/80 hover:border-rose-500/40 rounded-2xl p-6 sm:p-8 shadow-lg backdrop-blur-xl transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white group-hover:text-rose-400 font-sans tracking-tight transition-colors">
                        {val.title}
                      </h3>
                      <span className="font-sans font-bold text-2xl sm:text-3xl text-rose-500 group-hover:scale-110 transition-transform">
                        {val.step}
                      </span>
                    </div>

                    {/* Description revealed smoothly ONLY on hover */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-400 ease-in-out opacity-0 group-hover:opacity-100 mt-0 group-hover:mt-3.5">
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-base md:text-lg text-zinc-200 font-semibold leading-relaxed m-0 pt-1">
                          {val.desc}
                        </p>
                      </div>
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
