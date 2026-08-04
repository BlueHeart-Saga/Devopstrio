"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ArrowUpRight, Play, Pause } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CapabilitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const services = [
    {
      tag: "Innovate",
      title: "AI & Data Innovation",
      desc: "Leverage Generative AI, machine learning, and intelligent automation to modernise business processes and unlock measurable value at scale.",
      link: "/services/ai-data-innovation",
      image: "/assets/Home-page/core-services/1.png"
    },
    {
      tag: "Migrate",
      title: "Cloud Services",
      desc: "Design and manage resilient cloud environments across AWS, Azure, and Google Cloud — built for performance, compliance, and cost efficiency.",
      link: "/services/cloud-services",
      image: "/assets/Home-page/core-services/2.png"
    },
    {
      tag: "Accelerate",
      title: "DevOps & Automation",
      desc: "CI/CD automation, Kubernetes orchestration, Terraform, and platform engineering practices that eliminate friction and accelerate delivery.",
      link: "/services/devops-automation",
      image: "/assets/Home-page/core-services/3.png"
    },
    {
      tag: "Protect",
      title: "Cybersecurity",
      desc: "Embed security and compliance into every layer of your stack. Proactive threat management, SOC services, and zero-trust security frameworks.",
      link: "/services/cybersecurity",
      image: "/assets/Home-page/core-services/4.png"
    },
    {
      tag: "Build",
      title: "Software Development",
      desc: "Create enterprise-grade software, apps, and SaaS platforms. Engineered for reliability, API ecosystems, and business impact.",
      link: "/services/software-development",
      image: "/assets/Home-page/core-services/5.png"
    },
    {
      tag: "Transform",
      title: "Digital Transformation",
      desc: "Modernise business models and legacy systems. IT roadmaps, cloud readiness audits, process automation, and intelligent workflows.",
      link: "/services/digital-transformation",
      image: "/assets/Home-page/core-services/6.png"
    },
    {
      tag: "Analyze",
      title: "Data Engineering",
      desc: "Unlock actionable insights with robust data platforms. Design columnar databases, unified lakehouses, and real-time streaming pipelines.",
      link: "/services/data-engineering",
      image: "/assets/Home-page/core-services/7.png"
    },
    {
      tag: "Manage",
      title: "Managed Services",
      desc: "Ensure uninterrupted operations with 24/7 proactive monitoring. Multi-account cloud administration, SLA bug resolutions, and incident containment.",
      link: "/services/managed-services",
      image: "/assets/Home-page/core-services/8.png"
    },
    {
      tag: "Ensure",
      title: "QA & Testing",
      desc: "Deliver flawless digital experiences with quality engineering. Automated end-to-end client scripts, load testing, and shift-left methodologies.",
      link: "/services/qa-testing",
      image: "/assets/Home-page/core-services/9.png"
    },
    {
      tag: "Consult",
      title: "IT Consulting",
      desc: "Align technology investments with strategic business objectives. Cost-benefit analyses, compliance alignment, and digital roadmaps.",
      link: "/services/it-consulting",
      image: "/assets/Home-page/core-services/10.png"
    }
  ];

  // Auto-play horizontal scroll
  useEffect(() => {
    if (isHovered || !isPlaying) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = window.innerWidth < 768 ? 300 + 24 : 370 + 24;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, isPlaying]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth < 768 ? 300 + 24 : 370 + 24;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#030303] text-white relative overflow-hidden">
      {/* Dynamic inline styles for responsive card sizing & scrollbar hiding */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .capabilities-track {
          --card-w: 300px;
        }
        @media (min-width: 768px) {
          .capabilities-track {
            --card-w: 370px;
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.05),transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(225,29,72,0.04),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header with Title & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <Reveal className="max-w-xl">
            <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] uppercase text-rose-500 mb-2 block font-mono">
              WHAT WE DO
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white">
              Solutions that Drive <span className="text-rose-500">Real Impact</span>
            </h2>
          </Reveal>

          {/* Right Navigation Controls */}
          <Reveal delay={0.1} className="flex items-center gap-4 shrink-0">
            <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 hover:text-rose-400 transition-colors mr-2">
              <span>Explore All</span>
              <ArrowRight size={14} />
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 rounded-full border border-zinc-800 bg-zinc-950/80 hover:border-zinc-700 hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
              >
                {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              </button>
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-full border border-zinc-800 bg-zinc-950/80 hover:border-zinc-700 hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                aria-label="Scroll Left"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-full border border-zinc-800 bg-zinc-950/80 hover:border-zinc-700 hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                aria-label="Scroll Right"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Horizontal CapabilityGrid-Style Card Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="capabilities-track no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 gap-6 cursor-grab active:cursor-grabbing"
        >
          {services.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.04} className="shrink-0 snap-start snap-always">
              <div className="w-[var(--card-w)] h-[410px] md:h-[430px] flex-shrink-0 group flex flex-col bg-zinc-950 border border-zinc-800/60 rounded-2xl overflow-hidden hover:border-rose-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(225,29,72,0.08)] text-left select-none cursor-pointer">
                
                {/* Cover Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-6 gap-3 text-left">
                  <span className="text-rose-500 text-xs md:text-sm font-extrabold uppercase tracking-widest font-mono">
                    {item.tag}
                  </span>

                  <h3 className="text-white text-base md:text-[18px] font-bold leading-snug group-hover:text-rose-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mb-0 group-hover:mb-2">
                    {item.desc}
                  </p>

                  {/* CapabilityGrid-Style CTA Button */}
                  <Link
                    href={item.link}
                    className="mt-auto inline-flex items-center gap-2.5 bg-zinc-900 hover:bg-rose-600 border border-zinc-800 hover:border-rose-600 text-zinc-300 hover:text-white rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 w-fit group/btn"
                  >
                    <span className="w-5 h-5 rounded-sm bg-rose-600 group-hover/btn:bg-white flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <ArrowUpRight size={11} className="text-white group-hover/btn:text-rose-600 transition-colors duration-300" />
                    </span>
                    <span>Explore Details</span>
                  </Link>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
