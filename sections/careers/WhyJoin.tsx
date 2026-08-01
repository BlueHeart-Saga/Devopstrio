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
    <section id="why-join" className="py-24 bg-black border-b border-zinc-900/60 relative overflow-visible">
      {/* Ambient background glows */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[10%] left-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">

        {/* ── Top Header & Floating Card (Card Only Moved Top Side) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 relative z-40">

          {/* Left Column: Features Title */}
          <div className="lg:col-span-7 flex flex-col justify-end text-left">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                Everything You Need to <span className="text-rose-500">Build a Successful Tech Career</span>
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                Join Devopstrio to learn from experienced professionals, work on impactful projects, master cutting-edge technologies, and grow your career in an environment that values innovation, collaboration, and continuous learning.
              </p>
            </Reveal>
          </div>

          {/* Right Column: CARD ONLY moved top side (Straddling Intro Banner & WhyJoin) */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end w-full relative z-40 -mt-28 sm:-mt-40 lg:-mt-64 xl:-mt-72">
            <Reveal delay={0.2} className="w-full max-w-[310px]">
              <div className="w-full bg-white text-zinc-900 border border-zinc-200/90 rounded-lg p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">

                {/* Title Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                    In this Section
                  </h3>
                </div>

                {/* Section Navigation Items List */}
                <nav className="flex flex-col gap-1 text-xs font-sans">
                  {careersNavigationItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={`flex items-center justify-between py-1.5 px-2.5 rounded transition-colors font-medium ${isActive
                            ? "bg-rose-50 text-rose-600 font-bold border-l-4 border-rose-600"
                            : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
                          }`}
                      >
                        <span className="flex items-center gap-2">
                          <ChevronRight
                            size={13}
                            className={isActive ? "text-rose-600 stroke-[2.5]" : "text-zinc-400"}
                          />
                          <span>{item.label}</span>
                        </span>
                      </a>
                    );
                  })}
                </nav>

              </div>
            </Reveal>
          </div>

        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="group relative flex flex-col justify-end p-6 sm:p-7 min-h-[260px] md:min-h-[285px] rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950/80 hover:border-rose-500/50 transition-all duration-300 shadow-xl hover:shadow-rose-950/30">
                  {/* Background Image with Bottom Half Gradient */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={feature.bgImage}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay: full image visible top, dark gradient bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent transition-opacity duration-300" />
                  </div>

                  {/* Bottom Content: Icon, Title & Button */}
                  <div className="relative z-10 w-full flex flex-col justify-end">
                    {/* Circular Icon Container */}
                    <div className="w-11 h-11 rounded-full bg-black/75 border border-zinc-700/80 flex items-center justify-center text-rose-500 mb-3.5 shadow-inner backdrop-blur-md group-hover:border-rose-500/60 group-hover:text-rose-400 group-hover:scale-105 transition-all duration-300">
                      <Icon size={20} className="stroke-[2]" />
                    </div>

                    {/* Title & Arrow Button Row */}
                    <div className="flex items-center justify-between gap-3 w-full">
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-rose-400 transition-colors duration-300">
                        {feature.title}
                      </h3>

                      <button
                        onClick={handleScrollToRoles}
                        aria-label={feature.title}
                        className="w-9 h-9 rounded-lg bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-[0_4px_12px_rgba(225,29,72,0.4)] group-hover:scale-110"
                      >
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Center button */}
        <Reveal className="flex justify-center mb-32">
          <button
            onClick={handleScrollToRoles}
            className="px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-500 transition-all duration-300 shadow-[0_4px_20px_rgba(225,29,72,0.4)] hover:scale-[1.03] flex items-center gap-2 group"
          >
            <span>Apply Now</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
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
                We bridge the gap between education and employment. Learn more about our <Link href="/about/internship" className="text-rose-500 hover:underline font-bold">internship program</Link> details.
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
