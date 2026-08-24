"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ChevronRight, ArrowRight, GraduationCap, Rocket, TrendingUp, Cpu, Users, Heart } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const careersNavigationItems = [
  { id: "overview", label: "Who We Are" },
  { id: "why-join", label: "Why Join Us" },
  { id: "culture", label: "Culture & Life" },
  { id: "values", label: "Core Values" },
  { id: "growth", label: "Growth & Learning" },
  { id: "perks", label: "Perks & Benefits" },
  { id: "open-positions", label: "Open Positions" },
  { id: "hiring-process", label: "Hiring Process" },
  { id: "talent-network", label: "Talent Network" }
];

export function WhyJoin() {
  const [activeSection, setActiveSection] = useState("why-join");

  useEffect(() => {
    const handleScroll = () => {
      let current = "why-join";
      for (const item of careersNavigationItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            current = item.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const features = [
    {
      title: "Learning & Development",
      desc: "Access continuous learning programs, mentorship from experts, and resources that help you stay ahead.",
      icon: GraduationCap,
      bgImage: "/assets/careers/why_join/cap_107.png",
    },
    {
      title: "Real-World Projects",
      desc: "Work on challenging, real-world projects that solve meaningful problems and create real impact.",
      icon: Rocket,
      bgImage: "/assets/careers/why_join/cap_108.png",
    },
    {
      title: "Career Growth",
      desc: "Clear career paths, regular feedback, and performance-driven growth opportunities.",
      icon: TrendingUp,
      bgImage: "/assets/careers/why_join/cap_110.png",
    },
    {
      title: "Modern Technologies",
      desc: "Work with cutting-edge technologies like AI, Cloud, DevOps, Data, and more to future-proof your skills.",
      icon: Cpu,
      bgImage: "/assets/careers/why_join/cap_111.png",
    },
    {
      title: "Collaborative Culture",
      desc: "Be part of a supportive, inclusive, and innovative culture where ideas are valued and teamwork drives success.",
      icon: Users,
      bgImage: "/assets/careers/why_join/cap_112.png",
    },
    {
      title: "Work-Life Balance",
      desc: "We believe in balance and well-being with flexible work options and a people-first approach.",
      icon: Heart,
      bgImage: "/assets/careers/why_join/cap_113.png",
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
    <section id="why-join" className="pt-16 pb-6 sm:pt-20 sm:pb-8 bg-black border-b border-zinc-900/60 relative overflow-visible">
      {/* Ambient background glows */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[10%] left-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">

        {/* ── Top Header & Floating Card (Card Only Moved Top Side) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 relative z-40">

          {/* Left Column: Features Title */}
          <div className="lg:col-span-7 flex flex-col justify-end text-left">
            <Reveal>
              <div className="relative">
                {/* Arrow image */}
                <div className="absolute -top-6 -left-10 pointer-events-none select-none hidden sm:block">
                  <img src="/assets/components/Carrow-right.png"
                    alt="Arrow indicator"
                    className="w-12 sm:w-16 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  loading="lazy" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight mb-4">
                  Everything You Need to<br />
                  <span className="bg-rose-500 text-white font-semibold px-4 py-1 mr-1 rounded-xl inline-block mt-2">
                    Build
                  </span>{" "}
                  a Successful Tech Career.
                </h2>
                <p className="text-zinc-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-semibold">
                  Join Devopstrio to learn from experienced professionals, work on impactful projects, master cutting-edge technologies, and grow your career in an environment that values innovation, collaboration, and continuous learning.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Poster Image (Floating Half Top / Half Inside) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full relative z-40 -mt-24 sm:-mt-36 lg:-mt-52 xl:-mt-64">
            <Reveal delay={0.2} className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.85)] border border-zinc-800/80 group">
                <img src="/assets/careers/team/gallarey-post-sermaraj-01.png"
                  alt="Devopstrio Career Poster"
                  className="w-full h-auto object-contain select-none transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy" />
              </div>
            </Reveal>
          </div>

        </div>

        {/* Family Quote Sub-Banner (Big & Centered) */}
        <Reveal className="mt-8 mb-4 text-center">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight italic">
              <span className="whitespace-nowrap">&ldquo;We&apos;re more than just a workplace.</span><br />
              <span className="text-rose-500 not-italic font-semibold inline-block mt-2">
                We&apos;re a family.&rdquo;
              </span>
            </h3>
          </div>
        </Reveal>

        {/* 6 Features Grid & PART 2 (Commented Out) */}
        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="group relative flex flex-col justify-between p-6 sm:p-7 h-full min-h-[220px] rounded-2xl border border-zinc-800/80 bg-zinc-950/90 hover:border-rose-500/50 transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(244,63,94,0.15)] hover:-translate-y-1">
                  
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-inner">
                        <Icon size={22} className="stroke-[2]" />
                      </div>

                      <button
                        onClick={handleScrollToRoles}
                        aria-label={feature.title}
                        className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-rose-500/50 text-zinc-400 group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                      >
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-zinc-400 text-sm font-semibold leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="flex justify-center mb-32">
          <button
            onClick={handleScrollToRoles}
            className="px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-500 transition-all duration-300 shadow-[0_4px_20px_rgba(225,29,72,0.4)] hover:scale-[1.03] flex items-center gap-2 group"
          >
            <span>Apply Now</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-14 lg:gap-20 items-center pt-12">

          <Reveal className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] group">
              <img src="/assets/careers/image2.png"
                alt="Devopstrio Career Success"
                className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] group-hover:-translate-y-2 transition-transform duration-700"
              loading="lazy" />
            </div>
          </Reveal>

          <div className="text-left">
            <Reveal>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-white tracking-tight leading-tight mb-4">
                Why people choose <span className="text-rose-500">Devopstrio</span>
              </h2>
              <p className="text-zinc-250 text-sm md:text-base mb-10 font-medium max-w-xl">
                We bridge the gap between education and employment. Learn more about our <Link href="/about/internship" className="text-rose-500 hover:underline font-bold">internship program</Link> details.
              </p>
            </Reveal>

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
        */}

      </div>
    </section>
  );
}
