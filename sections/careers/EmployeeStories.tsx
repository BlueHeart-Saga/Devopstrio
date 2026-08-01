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
      image: "/assets/careers/careers_testimonial people/Ooviya.png",
    },
    {
      quote: "The software engineering culture here encourages rapid experimentation, learning, and automated CI/CD releases.",
      name: "Punitha",
      role: "Backend Software Engineer",
      initials: "PN",
      color: "from-emerald-500 to-teal-600",
      image: "/assets/careers/careers_testimonial people/Punitha.png",
    },
    {
      quote: "The infrastructure automation tools we build are top-notch. It's a fantastic environment for mastering cloud architecture.",
      name: "Alex",
      role: "DevOps Engineer",
      initials: "AL",
      color: "from-blue-500 to-cyan-500",
      image: "/assets/careers/careers_testimonial people/Alex.png",
    },
    {
      quote: "Building highly interactive frontend applications with modern frameworks here is deeply satisfying.",
      name: "Rahul",
      role: "Frontend Developer",
      initials: "RS",
      color: "from-amber-500 to-orange-600",
      image: "/assets/careers/careers_testimonial people/Rahul.png",
    },
    {
      quote: "Having access to massive datasets and cutting-edge GPU clusters empowers our AI models to push boundaries.",
      name: "Sarah",
      role: "Data Scientist",
      initials: "ST",
      color: "from-purple-500 to-fuchsia-600",
      image: "/assets/careers/careers_testimonial people/Sarah.png",
    },
    {
      quote: "We design systems that handle millions of requests gracefully. The engineering challenges are incredibly rewarding.",
      name: "David",
      role: "Cloud Architect",
      initials: "DL",
      color: "from-sky-400 to-indigo-500",
      image: "/assets/careers/careers_testimonial people/David.png",
    },
    {
      quote: "Quality is never an afterthought. We're empowered to build robust test frameworks that ensure flawless deployments.",
      name: "Maria",
      role: "QA Automation Engineer",
      initials: "MG",
      color: "from-rose-400 to-pink-600",
      image: "/assets/careers/careers_testimonial people/Maria.png",
    },
    {
      quote: "I love how cross-functional teams work in synergy to deliver measurable value to the user while maintaining excellence.",
      name: "James",
      role: "Product Manager",
      initials: "JK",
      color: "from-emerald-400 to-cyan-500",
      image: "/assets/careers/careers_testimonial people/James.png",
    },
    {
      quote: "Our zero-trust architecture makes security a first-class citizen. It’s inspiring to work where data protection is taken so seriously.",
      name: "Anita",
      role: "Security Analyst",
      initials: "AP",
      color: "from-red-500 to-rose-700",
      image: "/assets/careers/careers_testimonial people/Anita.png",
    },
    {
      quote: "From database optimization to pixel-perfect UIs, you get to touch every part of the stack. The mentorship is unmatched.",
      name: "Wei",
      role: "Full Stack Developer",
      initials: "WC",
      color: "from-violet-500 to-purple-700",
      image: "/assets/careers/careers_testimonial people/Wei.png",
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
                  <div className={`w-10 h-10 rounded-full ${story.photoBg} flex items-center justify-center text-xs font-bold text-white shadow-lg ring-2 ring-white/5 group-hover:ring-rose-500/20 transition-all overflow-hidden`}>
                    {(story as any).image ? (
                      <img src={(story as any).image} alt={story.name} className="w-full h-full object-cover" />
                    ) : (
                      story.name.charAt(0)
                    )}
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
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${t.color} flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-lg ring-1 ring-white/10 overflow-hidden`}>
                      {t.image ? (
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      ) : (
                        t.initials
                      )}
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

        {/* ── BLOCK 3: Feel-Good Words Masonry Wall (Exact Reference Replica) ─── */}
        <div className="border-t border-zinc-900/60 pt-24 mb-32">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              {/* <span className="text-[11px] font-mono font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                GLOBAL COMMUNITY FEEDBACK
              </span> */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-4 text-white font-sans uppercase">
                Feel-Good Words <span className="text-rose-500">From Our Team</span>
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Hear directly from our engineers, designers, and strategic leads across the globe.
              </p>
            </div>
          </Reveal>

          {/* Grid Layout mimicking the reference layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto text-zinc-900">
            
            {/* ── COLUMN 1 (Left: 4 Cols) ─────────────────────────────── */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              
              {/* Card 1A: Quote mark top-left + Right Avatar */}
              <Reveal delay={0.05}>
                <div className="bg-white text-zinc-900 p-6 rounded-2xl shadow-2xl relative flex items-center justify-between gap-4">
                  <div className="flex-1 text-left">
                    <span className="text-3xl font-serif text-rose-600 block mb-1 font-bold leading-none">“</span>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium mb-3">
                      "Devopstrio gives us complete engineering freedom to automate multi-cloud infrastructure and accelerate enterprise continuous delivery pipelines flawlessly."
                    </p>
                    <span className="text-xs font-bold text-zinc-900 block">Suryaprakash S</span>
                    <span className="text-[10px] text-zinc-500 font-medium block">Lead DevOps Engineer • @Devopstrio</span>
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 bg-zinc-100">
                    <img src="/assets/Home-page/client-reviews/client_164.png" alt="Suryaprakash" className="w-full h-full object-cover" />
                  </div>
                </div>
              </Reveal>

              {/* Card 1B: Paragraph + Bottom Right Avatar */}
              <Reveal delay={0.1}>
                <div className="bg-white text-zinc-900 p-6 rounded-2xl shadow-2xl relative text-left">
                  <p className="text-xs text-zinc-700 leading-relaxed font-medium mb-6">
                    "The supportive culture of precision and rapid experimentation here empowers us to build production-ready software solutions with confidence every single day."
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span className="text-xs font-bold text-zinc-900 block">Ananthalakshmi</span>
                      <span className="text-[10px] text-rose-600 font-semibold block">Software Engineering Lead</span>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 bg-zinc-100">
                      <img src="/assets/Home-page/client-reviews/client_165.png" alt="Ananthalakshmi" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Card 1C: Wide Card + Bottom Speech Avatars */}
              <Reveal delay={0.15}>
                <div className="bg-white text-zinc-900 p-6 rounded-2xl shadow-2xl text-center relative">
                  <h3 className="text-sm font-bold text-zinc-900 mb-2">I was very impressed!</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-medium mb-3">
                    "The scale of cloud architectures and high-performance data platforms we design here is world class. Truly a great place to grow your technical leverage."
                  </p>
                  <span className="text-[11px] font-bold text-zinc-800 block mb-4">Umamaheswari R — Data & Cloud Architect</span>
                  
                  {/* Floating speech bubble avatars sticking out below */}
                  <div className="flex justify-center items-center gap-2 -mb-10 pt-2">
                    <div className="w-9 h-9 rounded-full border-2 border-white shadow-md overflow-hidden bg-zinc-200">
                      <img src="/assets/Home-page/client-reviews/client_166.png" alt="Team 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-11 h-11 rounded-full border-2 border-white shadow-lg overflow-hidden bg-zinc-200">
                      <img src="/assets/Home-page/client-reviews/client_167.png" alt="Team 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-9 h-9 rounded-full border-2 border-white shadow-md overflow-hidden bg-zinc-200">
                      <img src="/assets/Home-page/client-reviews/client_168.png" alt="Team 3" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* ── COLUMN 2 (Middle Left: 3 Cols) ──────────────────────── */}
            <div className="lg:col-span-3 flex flex-col gap-8">
              
              {/* Card 2A: Top Avatar Cutout + Stars + Bottom Quote Badge */}
              <Reveal delay={0.1}>
                <div className="bg-white text-zinc-900 p-6 pt-10 rounded-2xl shadow-2xl text-center relative mt-4">
                  {/* Top Avatar Notch */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white shadow-xl overflow-hidden bg-zinc-100">
                    <img src="/assets/Home-page/client-reviews/client_169.png" alt="Ooviya" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex justify-center gap-1 text-amber-400 mb-2 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-2">I really appreciate!!</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-medium mb-6">
                    "Designing intuitive digital experiences for enterprise users alongside brilliant software engineers makes every single day rewarding!"
                  </p>
                  <div className="text-left pb-2">
                    <span className="text-xs font-bold text-zinc-900 block">Ooviya</span>
                    <span className="text-[10px] text-rose-600 font-semibold block">UI/UX Design Specialist</span>
                  </div>

                  {/* Black Quote Badge hanging off bottom right */}
                  <div className="absolute -bottom-4 -right-2 bg-zinc-900 text-white w-10 h-10 rounded-xl shadow-xl flex items-center justify-center font-serif text-2xl font-bold">
                    ”
                  </div>
                </div>
              </Reveal>

              {/* Card 2B: Speech Pointer Card */}
              <Reveal delay={0.2}>
                <div className="bg-white text-zinc-900 p-6 pt-8 rounded-2xl shadow-2xl text-center relative mt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mx-auto -mt-12 border-2 border-white shadow-lg mb-3 bg-zinc-100">
                    <img src="/assets/Home-page/client-reviews/client_170.png" alt="Punitha" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex justify-center gap-1 text-amber-400 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-medium italic mb-4">
                    "Building high-throughput microservices in a zero-silo, collaborative team atmosphere is the best milestone of my tech career."
                  </p>
                  <span className="text-xs font-bold text-zinc-900 block italic font-serif">Punitha — Backend Engineer</span>

                  {/* Bottom Speech Triangle Pointer */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white" />
                </div>
              </Reveal>

            </div>

            {/* ── COLUMN 3 (Middle Right: 2.5 Cols) ────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              
              {/* Card 3A: Tall Photo Card */}
              <Reveal delay={0.15}>
                <div className="bg-white text-zinc-900 p-4 rounded-2xl shadow-2xl text-left">
                  <div className="w-full h-56 rounded-xl overflow-hidden mb-4 bg-zinc-100">
                    <img src="/assets/Home-page/client-reviews/client_171.png" alt="Saravanakumar" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs text-zinc-700 leading-relaxed font-medium mb-3">
                    From global client missions to 1-on-1 mentorship, Devopstrio invests deeply in every engineer's potential.
                  </p>
                  <span className="text-xs font-bold text-zinc-900 block italic font-serif">Saravanakumar S</span>
                </div>
              </Reveal>

            </div>

            {/* ── COLUMN 4 (Right: 3 Cols) ────────────────────────────── */}
            <div className="lg:col-span-3 flex flex-col gap-8">
              
              {/* Card 4A: Top Avatar Notch + Good Job */}
              <Reveal delay={0.1}>
                <div className="bg-white text-zinc-900 p-6 pt-10 rounded-2xl shadow-2xl text-center relative mt-4">
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white shadow-xl overflow-hidden bg-zinc-100">
                    <img src="/assets/Home-page/client-reviews/client_172.png" alt="Sermaraja" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-1 mt-1">Good Job!</h3>
                  <div className="flex justify-center gap-1 text-amber-400 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                    Our 24/7 Site Reliability Engineering teams operate with total trust, rapid feedback loops, and sponsored cloud certification pathways.
                  </p>
                  <span className="text-[11px] font-bold text-zinc-800 block mt-3">Sermaraja V — SRE Lead</span>
                </div>
              </Reveal>

              {/* Card 4B: Split Photo Left / Text Right */}
              <Reveal delay={0.2}>
                <div className="bg-white text-zinc-900 p-4 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center gap-4 text-left">
                  <div className="w-full sm:w-28 h-28 rounded-xl overflow-hidden shrink-0 bg-zinc-100">
                    <img src="/assets/Home-page/client-reviews/client_173.png" alt="Sudalairajan" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-zinc-900 block mb-1 font-serif">“ Security & zero-trust engineering are embedded in all we build. ”</span>
                    <p className="text-[11px] text-zinc-600 leading-tight mb-2">
                      We protect enterprise landing zones while enabling fast-moving deployments.
                    </p>
                    <span className="text-[11px] font-bold text-rose-600 block">Sudalairajan A • Security Lead</span>
                  </div>
                </div>
              </Reveal>

              {/* Card 4C: Text Left / Round Avatar Right */}
              <Reveal delay={0.25}>
                <div className="bg-white text-zinc-900 p-5 rounded-2xl shadow-2xl flex items-center justify-between gap-4 text-left">
                  <div className="flex-1">
                    <p className="text-xs text-zinc-600 leading-relaxed font-medium mb-3">
                      "Empowering engineering teams with continuous learning, clear promotion tracks, and international project exposure is our daily commitment."
                    </p>
                    <span className="text-xs font-bold text-zinc-900 block">Sagadevan S</span>
                    <span className="text-[10px] text-rose-600 font-semibold block">Global Technology Lead</span>
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 bg-zinc-100">
                    <img src="/assets/Home-page/client-reviews/client_174.png" alt="Sagadevan" className="w-full h-full object-cover" />
                  </div>
                </div>
              </Reveal>

            </div>

          </div>
        </div>

        {/* ── BLOCK 3: Student Career CTA Banner ─────────────────────── */}
        <Reveal>
          <div className="relative mt-24 bg-gradient-to-b from-[#090909] to-black border border-white/[0.08] rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-[0_30px_60px_rgba(0,0,0,0.8)] group overflow-visible">
            {/* Ambient glows inside card */}
            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none -z-10" />

            {/* Left Side: Student Boy Image popping half outside top of box */}
            <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 shrink-0 self-end -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 -mb-6 md:-mb-10 z-20 pointer-events-none">
              <img
                src="/assets/careers/CTA.png"
                alt="Student Career Devopstrio"
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Right Side: Copy, Points List & Button */}
            <div className="flex-1 text-left space-y-4 relative z-10 py-2">
              <span className="inline-block border border-rose-500/30 bg-rose-950/20 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold text-rose-400 tracking-wider uppercase">
                INTERNSHIP
              </span>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                <span className="text-rose-500">Students</span>, build a<br className="hidden sm:block" /> career with purpose
              </h2>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-medium max-w-xl">
                Our student programs help you make a real impact from day one. Apply today to build skills and unlock possibilities through our dedicated <Link href="/about/internship" className="text-rose-500 hover:underline font-bold">internship program</Link>:
              </p>

              {/* Key points for premium look */}
              <ul className="space-y-2.5 pt-1">
                {[
                  "Work directly on production-grade global infrastructure projects",
                  "Receive 1-on-1 mentorship from seasoned industry specialists",
                  "Access dedicated placement assistance and exclusive network referrals",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={handleScrollToRoles}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 transition-all duration-300 shadow-[0_4px_20px_rgba(225,29,72,0.3)] hover:scale-[1.03]"
                >
                  <span>Get Started</span>
                  <ArrowUpRightIcon size={14} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
