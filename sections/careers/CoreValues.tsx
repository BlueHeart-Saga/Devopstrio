"use client";

import React from "react";
import Link from "next/link";
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
    <section id="values" className="w-full py-24 sm:py-28 bg-[#030303] border-b border-zinc-900/80 relative">
      
      {/* Dark Ambient Glow Mesh */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Title & Description (Previous Header Text Style Restored) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-28">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                CORE VALUES
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white uppercase font-sans">
                The principles that <span className="text-rose-500">define us</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium mb-8">
                Every decision, product, and partnership at Devopstrio is anchored by a core set of principles our teams live by every day. Read our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link> or discover our <Link href="/services" className="text-rose-500 hover:underline font-bold">digital services</Link>.
              </p>
            </Reveal>
          </div>

          {/* Right Column: One-by-One Sticky Stacking Cards (Simple Plain Box - No Icons) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 w-full relative pb-16">
            {cultureValues.map((val, idx) => {
              return (
                <div
                  key={val.step}
                  className="sticky transition-all duration-300"
                  style={{
                    top: `${100 + idx * 28}px`,
                    zIndex: 10 + idx,
                  }}
                >
                  <div className="bg-[#090C15] hover:bg-[#0E1322] border border-zinc-800/80 hover:border-zinc-700 rounded-xl p-6 sm:p-7 shadow-lg backdrop-blur-xl transition-all duration-300">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 font-sans">
                      {val.title}
                    </h3>
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-medium">
                      {val.desc}
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
