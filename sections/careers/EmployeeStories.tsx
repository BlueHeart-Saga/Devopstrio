"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowUpRight, Star, ArrowUpRight as ArrowUpRightIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { employeeStories } from "./careersData";

import Link from "next/link";

export function EmployeeStories() {
  const testimonials = [
    {
      quote: "Amazing learning experience and supportive team. The UI/UX internship provided me high technical leverage.",
      name: "Ooviya",
      role: "UI/UX Design Intern",
      initials: "OV",
      color: "from-rose-500 to-indigo-600",
    },
    {
      quote: "The software engineering culture here encourages rapid experimentation, learning, and automated CI/CD releases.",
      name: "Punitha",
      role: "Backend Software Engineer",
      initials: "PN",
      color: "from-emerald-500 to-teal-600",
    },
    {
      quote: "The infrastructure automation tools we build are top-notch. It's a fantastic environment for mastering cloud architecture.",
      name: "Alex",
      role: "DevOps Engineer",
      initials: "AL",
      color: "from-blue-500 to-cyan-500",
    },
    {
      quote: "Building highly interactive frontend applications with modern frameworks here is deeply satisfying.",
      name: "Rahul",
      role: "Frontend Developer",
      initials: "RS",
      color: "from-amber-500 to-orange-600",
    },
    {
      quote: "Having access to massive datasets and cutting-edge GPU clusters empowers our AI models to push boundaries.",
      name: "Sarah",
      role: "Data Scientist",
      initials: "ST",
      color: "from-purple-500 to-fuchsia-600",
    },
    {
      quote: "We design systems that handle millions of requests gracefully. The engineering challenges are incredibly rewarding.",
      name: "David",
      role: "Cloud Architect",
      initials: "DL",
      color: "from-sky-400 to-indigo-500",
    },
    {
      quote: "Quality is never an afterthought. We're empowered to build robust test frameworks that ensure flawless deployments.",
      name: "Maria",
      role: "QA Automation Engineer",
      initials: "MG",
      color: "from-rose-400 to-pink-600",
    },
    {
      quote: "I love how cross-functional teams work in synergy to deliver measurable value to the user while maintaining excellence.",
      name: "James",
      role: "Product Manager",
      initials: "JK",
      color: "from-emerald-400 to-cyan-500",
    },
    {
      quote: "Our zero-trust architecture makes security a first-class citizen. It’s inspiring to work where data protection is taken so seriously.",
      name: "Anita",
      role: "Security Analyst",
      initials: "AP",
      color: "from-red-500 to-rose-700",
    },
    {
      quote: "From database optimization to pixel-perfect UIs, you get to touch every part of the stack. The mentorship is unmatched.",
      name: "Wei",
      role: "Full Stack Developer",
      initials: "WC",
      color: "from-violet-500 to-purple-700",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? Math.max(0, testimonials.length - 2) : prev - 2));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 2);
  const progressPercent = ((currentIndex + 2) / testimonials.length) * 100;

  const handleScrollToRoles = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("open-positions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[10%] right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* ── BLOCK 1: Previous Employee Stories Grid ────────────────────── */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              TESTIMONIALS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Meet the people behind <span className="text-rose-500">the innovation</span>
            </h2>
            <p className="text-white text-sm leading-relaxed font-semibold max-w-xl mx-auto">
              Hear directly from the engineers, designers, and leaders who shape Devopstrio's culture every day. Discover our <Link href="/about/life" className="text-rose-500 hover:underline font-bold">life at Devopstrio</Link> page.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-32">
          {employeeStories.map((story, idx) => (
            <Reveal key={idx} delay={idx * 0.06} className="h-full">
              <div className="group h-full flex flex-col relative rounded-[24px] border border-white/5 hover:border-rose-500/20 bg-zinc-950/40 backdrop-blur-sm p-8 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.5)] overflow-hidden text-left">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Large quote mark */}
                <span className="text-5xl font-serif text-rose-500/15 group-hover:text-rose-500/30 leading-none select-none block mb-6 transition-colors">
                  "
                </span>

                <p className="text-sm text-zinc-200 leading-relaxed font-medium mb-8 italic flex-1">
                  {story.story}
                </p>

                {/* Author row */}
                <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                  <div className={`w-10 h-10 rounded-full ${story.photoBg} flex items-center justify-center text-xs font-bold text-white shadow-lg ring-2 ring-white/5 group-hover:ring-rose-500/20 transition-all`}>
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">{story.name}</span>
                    <span className="text-xs text-zinc-400 font-medium block mt-0.5">{story.role}</span>
                  </div>
                  {/* Accent bar */}
                  <div className="ml-auto h-[2px] w-8 bg-gradient-to-r from-rose-500/60 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── BLOCK 2: What Our Team Is Saying (Reviews) ─────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-10 lg:gap-14 items-start mb-32 border-t border-zinc-900/60 pt-24">

          {/* Left Column: Heading and slider buttons */}
          <div className="flex flex-col text-left">
            <Reveal>
              {/* Giant quote mark */}
              <span className="text-6xl font-serif text-rose-500 leading-none select-none block mb-4">
                “ “
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-8">
                What Our Team<br />Is Saying
              </h2>

              {/* Pagination controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-rose-500/40 flex items-center justify-center text-white hover:text-rose-400 bg-zinc-950/40 hover:bg-rose-950/10 transition-all duration-300 cursor-pointer"
                >
                  <ArrowLeft size={16} />
                </button>
                {/* Progress line */}
                <div className="w-24 h-[2px] bg-zinc-800 rounded-full overflow-hidden relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-rose-500 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-rose-500/40 flex items-center justify-center text-white hover:text-rose-400 bg-zinc-950/40 hover:bg-rose-950/10 transition-all duration-300 cursor-pointer"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {visibleTestimonials.map((t, idx) => (
              <Reveal key={currentIndex + idx} delay={idx * 0.05}>
                <div className="flex flex-col gap-6 text-left group">
                  {/* Quote bubble card */}
                  <div className="relative bg-[#0d0d0d] border border-white/[0.06] hover:border-rose-500/20 p-6 md:p-8 rounded-[24px] shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[160px] group-hover:-translate-y-1">
                    <p className="text-zinc-200 text-sm md:text-base font-medium italic leading-relaxed mb-6">
                      "{t.quote}"
                    </p>

                    {/* Star rating */}
                    <div className="flex gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  {/* Profile details under the card */}
                  <div className="flex items-center gap-3.5 px-2">
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${t.color} flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-lg ring-1 ring-white/10`}>
                      {t.initials}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">
                        {t.name}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium block mt-0.5">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

        {/* ── BLOCK 3: Student Career CTA Banner ─────────────────────── */}
        <Reveal>
          <div className="relative mt-24 bg-gradient-to-b from-[#090909] to-black border border-white/[0.08] rounded-[32px] overflow-hidden p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 shadow-[0_30px_60px_rgba(0,0,0,0.8)] group">
            {/* Ambient glows inside card */}
            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none -z-10" />

            {/* Left Side: Large Portrait Image with custom asymmetrical corners */}
            <div className="relative w-64 md:w-80 aspect-[4/5] rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl overflow-hidden border border-white/5 shrink-0 bg-zinc-950">
              <img
                src="/assets/careers/CTA.png"
                alt="Student Career Devopstrio"
                className="w-full h-full object-cover object-center brightness-90 group-hover:scale-103 transition-transform duration-700 rounded-[inherit]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 rounded-[inherit]" />
            </div>

            {/* Right Side: Copy, Points List & Button */}
            <div className="flex-1 text-left space-y-6">
              <span className="inline-block border border-rose-500/30 bg-rose-950/20 px-3.5 py-1 rounded-full text-xs font-bold text-rose-400 tracking-wider uppercase">
                INTERNSHIP
              </span>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                <span className="text-rose-500">Students</span>, build a<br />career with purpose
              </h2>

              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-medium max-w-xl">
                Our student programs help you make a real impact from day one. Apply today to build skills and unlock possibilities through our dedicated <Link href="/about/internship" className="text-rose-500 hover:underline font-bold">internship program</Link>:
              </p>

              {/* Key points for premium look */}
              <ul className="space-y-3 pt-1">
                {[
                  "Work directly on production-grade global infrastructure projects",
                  "Receive 1-on-1 mentorship from seasoned industry specialists",
                  "Access dedicated placement assistance and exclusive network referrals",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-zinc-300 text-xs md:text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleScrollToRoles}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 transition-all duration-300 shadow-[0_4px_20px_rgba(225,29,72,0.3)] hover:scale-[1.03]"
              >
                <span>Get Started</span>
                <ArrowUpRightIcon size={14} />
              </button>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
