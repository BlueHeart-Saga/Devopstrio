"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function WhyJoin() {
  const features = [
    {
      title: "Expert Mentorship",
      desc: "Weekly sessions with senior DevOps and development professionals. Real guidance, feedback, and code reviews from engineers who've worked at global scale.",
      iconPath: "/assets/careers/icons/icons8-expert-100.png",
    },
    {
      title: "Global Community",
      desc: "Collaborate with peers across India, UK, Singapore, Malaysia and the Middle East. Build an international professional network from day one — no matter where you are.",
      iconPath: "/assets/careers/icons/icons8-earth-planet-100.png",
    },
    {
      title: "Real-World Projects",
      desc: "Actual industry-grade assignments in Cloud, DevOps, Development and Digital Marketing. Not toy exercises. Not simulations. Real deliverables you can show to employers.",
      iconPath: "/assets/careers/icons/icons8-crowd-100.png",
    },
    {
      title: "LOR + Certification",
      desc: "Internship Completion Certificate and Letter of Recommendation from a UK-registered global company trusted by Microsoft, Airbnb, BP and GoDaddy.",
      iconPath: "/assets/careers/icons/icons8-certificate-100.png",
    },
    {
      title: "Job Opportunities",
      desc: "Top performers are considered for Devopstrio employment offer letters and referrals into our global client network. Your internship could be the start of your career.",
      iconPath: "/assets/careers/icons/icons8-administrator-male-100.png",
    },
    {
      title: "Flexible Schedule",
      desc: "Evening sessions and weekend tasks built around your existing life — college, part-time work, job hunting, or family. 100% remote. Zero commute.",
      iconPath: "/assets/careers/icons/icons8-attach-100.png",
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
      {/* Ambient background glows */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[10%] left-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* ── PART 1: Features Grid ────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-white tracking-tight leading-tight mb-5">
              Everything you need to <span className="text-rose-500">launch your tech career</span>
            </h2>
            <p className="text-zinc-200 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              Beyond certificates every element is built to develop real industry skills and open real global doors.
            </p>
          </Reveal>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
          {features.map((feature, idx) => {
            return (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="group flex flex-col items-center text-center p-4">
                  {/* Free-floating Icon */}
                  <img 
                    src={feature.iconPath} 
                    alt={feature.title} 
                    className="w-24 h-24 mb-5 object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 drop-shadow-md group-hover:drop-shadow-[0_4px_12px_rgba(244,63,94,0.3)]" 
                  />

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-rose-400 transition-colors duration-300 leading-snug">
                    {feature.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-xs md:text-sm text-zinc-350 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Center button */}
        <Reveal className="flex justify-center mb-32">
          <button
            onClick={handleScrollToRoles}
            className="px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 transition-all duration-300 shadow-[0_4px_20px_rgba(225,29,72,0.3)] hover:scale-[1.03]"
          >
            Apply Now
          </button>
        </Reveal>


        {/* ── PART 2: Why People Choose Devopstrio ───────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-14 lg:gap-20 items-center pt-12">

          {/* Left Visual: Girl with Laptop Mockup */}
          <Reveal className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] group">
              <img
                src="/assets/careers/image2.png"
                alt="Devopstrio Career Success"
                className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] group-hover:-translate-y-2 transition-transform duration-700"
              />
            </div>
          </Reveal>

          {/* Right Info: Why people choose */}
          <div className="text-left">
            <Reveal>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-white tracking-tight leading-tight mb-4">
                Why people choose <span className="text-rose-500">Devopstrio</span>
              </h2>
              <p className="text-zinc-250 text-sm md:text-base mb-10 font-medium max-w-xl">
                We bridge the gap between education and employment.
              </p>
            </Reveal>

            {/* 3 bullet points */}
            <div className="space-y-8 mb-10">
              {[
                {
                  title: "Strengthen your CV in a fast-paced field",
                  desc: "Add real project experience to your resume that stands out in the competitive tech market.",
                },
                {
                  title: "Gain real-world, global experience",
                  desc: "Work on international projects and collaborate with teams across different time zones.",
                },
                {
                  title: "Earn flexible rewards",
                  desc: "Top performers receive bonuses, recommendations, and exclusive job opportunities.",
                },
              ].map((point, idx) => (
                <Reveal key={idx} delay={idx * 0.05} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                  <div>
                    <h4 className="text-base font-bold text-white mb-1.5 leading-snug">
                      {point.title}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Explore button */}
            <Reveal>
              <button
                onClick={handleScrollToRoles}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 transition-all duration-300 shadow-[0_4px_20px_rgba(225,29,72,0.3)] hover:scale-[1.02]"
              >
                <span>Explore the Programs</span>
                <ArrowUpRight size={14} />
              </button>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
