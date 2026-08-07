"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const services = [
  {
    id: "ai-data-innovation",
    tag: "Innovate",
    title: "Transform operations with AI-driven intelligence and data.",
    desc: "Leverage Generative AI, machine learning, and intelligent automation to modernise business processes and unlock measurable value at scale.",
    bgImage: "/assets/Home-page/Servicescard/Innovate.png",
    href: "/services/ai-data-innovation",
    cta: "AI & Data Innovation"
  },
  {
    id: "cloud-services",
    tag: "Migrate",
    title: "Move, optimise, and scale confidently on any cloud platform.",
    desc: "Design and manage resilient cloud environments across AWS, Azure, and Google Cloud — built for performance, compliance, and cost efficiency.",
    bgImage: "/assets/Home-page/Servicescard/Migrate.png",
    href: "/services/cloud-services",
    cta: "Cloud Services"
  },
  {
    id: "devops-automation",
    tag: "Accelerate",
    title: "Ship faster with fully automated DevOps and IaC pipelines.",
    desc: "CI/CD automation, Kubernetes orchestration, Terraform, and platform engineering practices that eliminate friction and accelerate delivery.",
    bgImage: "/assets/Home-page/Servicescard/Accelerate.png",
    href: "/services/devops-automation",
    cta: "DevOps & Automation"
  },
  {
    id: "cybersecurity",
    tag: "Protect",
    title: "Embed security and compliance into every layer of your stack.",
    desc: "Proactive threat management, SOC services, vulnerability assessments, and zero-trust security frameworks for regulated industries.",
    bgImage: "/assets/Home-page/Servicescard/Protect.png",
    href: "/services/cybersecurity",
    cta: "Cybersecurity"
  },
  {
    id: "software-development",
    tag: "Build",
    title: "Create enterprise-grade software, apps, and SaaS platforms.",
    desc: "From complex web applications and mobile products to API ecosystems and SaaS platforms — engineered for reliability and business impact.",
    bgImage: "/assets/Home-page/Servicescard/Built.png",
    href: "/services/software-development",
    cta: "Software Development"
  },
  {
    id: "digital-transformation",
    tag: "Transform",
    title: "Modernise business models and legacy systems for the digital age.",
    desc: "IT roadmaps, cloud readiness audits, process automation, and intelligent workflows to future-proof your enterprise architecture.",
    bgImage: "/assets/Home-page/Servicescard/Transform.png",
    href: "/services/digital-transformation",
    cta: "Digital Transformation"
  },
  {
    id: "data-engineering",
    tag: "Analyze",
    title: "Unlock actionable insights with robust enterprise data platforms.",
    desc: "Design columnar databases, unified lakehouses, real-time streaming pipelines, and ETL/ELT workflows using modern data stacks.",
    bgImage: "/assets/Home-page/Servicescard/Analyze.png",
    href: "/services/data-engineering",
    cta: "Data Engineering"
  },
  {
    id: "managed-services",
    tag: "Manage",
    title: "Ensure uninterrupted operations with 24/7 proactive monitoring.",
    desc: "Multi-account cloud administration, SLA bug resolutions, infrastructure management, and continuous incident containment.",
    bgImage: "/assets/Home-page/Servicescard/Manage.png",
    href: "/services/managed-services",
    cta: "Managed Services"
  },
  {
    id: "qa-testing",
    tag: "Ensure",
    title: "Deliver flawless digital experiences with quality engineering.",
    desc: "Automated end-to-end client scripts, performance load testing, API validation, and shift-left methodologies for zero defect escapes.",
    bgImage: "/assets/Home-page/Servicescard/Ensure.png",
    href: "/services/qa-testing",
    cta: "QA & Testing"
  },
  {
    id: "it-consulting",
    tag: "Consult",
    title: "Align technology investments with strategic business objectives.",
    desc: "Cost-benefit analyses, distributed architecture planning, compliance alignment, and long-term digital transformation roadmaps.",
    bgImage: "/assets/Home-page/Servicescard/Consult.png",
    href: "/services/it-consulting",
    cta: "IT Consulting"
  }
];

export function CoreServices() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Handle responsive visible card counts
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = services.length - visibleCards;

  // Auto-scroll loop one-by-one
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 4500);

    return () => clearInterval(timer);
  }, [maxIndex, isPaused]);

  const prev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const next = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const gap = 24; // gap-6
  const xTranslation = startIndex * (100 / visibleCards);
  const gapTranslation = startIndex * (gap / visibleCards);

  return (
    <section
      className="w-full py-8 bg-[#030303] text-white relative overflow-hidden"
      id="capabilities"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.05),transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(225,29,72,0.04),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 xl:px-8 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-8 flex flex-col items-center">
            {/* Top-to-bottom straight arrow PNG (cleanly spaced above header) */}
            <div className="mb-2 sm:mb-3 flex justify-center pointer-events-none select-none">
              <img
                src="/assets/components/streight-toptobuttm.png"
                alt="Top to bottom arrow"
                className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(244,63,94,0.5)]"
              />
            </div>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-[1.35] mb-5 text-white">
              Technology{" "}
              <span className="relative inline-block px-2.5 py-0.5 mx-1">
                <span className="relative z-10 text-white font-bold">delivery</span>
                {/* Brand Rose hand-drawn oval circle loop */}
                <svg
                  className="absolute -inset-x-3.5 -inset-y-2 w-[calc(100%+28px)] h-[calc(100%+16px)] text-rose-500 pointer-events-none"
                  viewBox="0 0 220 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 30 C30 8, 195 5, 208 28 C218 42, 160 54, 70 55 C18 56, 5 45, 18 26"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-95 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]"
                  />
                </svg>
              </span>{" "}
              at the core of every business{" "}
              <span className="relative inline-block px-1 mx-1">
                <span className="text-white font-bold relative z-10">breakthrough</span>
                {/* Brand Rose hand-drawn stroke underline */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3.5 text-rose-500 pointer-events-none overflow-visible"
                  viewBox="0 0 220 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 7 Q 55 4, 110 6 T 217 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-95 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.7)]"
                  />
                </svg>
              </span>
            </h2>
            {/* <p className="text-zinc-100 text-base md:text-lg leading-relaxed">
              End-to-end services across <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-medium">Cloud</Link>, <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline font-medium">AI</Link>, <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-medium">DevOps</Link>, <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-medium">Security</Link>, and <Link href="/services/software-development" className="text-rose-500 hover:underline font-medium">Software Engineering</Link> — built to deliver measurable outcomes.
            </p> */}
          </div>
        </Reveal>

        {/* Sliding Carousel Viewport */}
        <div className="relative overflow-hidden w-full pb-4">
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(-${xTranslation}% - ${gapTranslation}px)` }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 group flex flex-col bg-[#0A0A0A] rounded-[24px] p-3 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              >
                {/* Cover Image */}
                <div className="relative w-full aspect-[2/1] overflow-hidden rounded-[16px] bg-zinc-900 border border-zinc-800/50">
                  <img
                    src={service.bgImage}
                    alt={service.cta}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 px-4 pt-5 pb-3 gap-2.5">
                  <span className="text-rose-400 text-xs font-semibold uppercase tracking-widest">
                    {service.tag}
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-semibold leading-snug">
                    {service.title}
                  </h3>
                  {/* <p className="text-zinc-100 text-base md:text-[17px] leading-relaxed flex-1 mt-1 font-normal">
                    {service.desc}
                  </p> */}

                  {/* CTA - Modern Transparent Glassy Premium Link Button */}
                  <Link
                    href={service.href}
                    className="mt-4 pt-3.5 border-t border-zinc-800/80 hover:border-rose-500/30 inline-flex items-center justify-between w-full text-white hover:text-rose-400 text-sm md:text-base font-semibold tracking-wide transition-all duration-300 group/btn"
                  >
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                      {service.cta}
                    </span>
                    <span className="w-8.5 h-8.5 rounded-full bg-rose-500/10 border border-rose-500/30 group-hover/btn:bg-rose-600 group-hover/btn:border-rose-600 flex items-center justify-center text-rose-500 group-hover/btn:text-white transition-all duration-300 shadow-[0_0_15px_rgba(225,29,72,0.2)] group-hover/btn:shadow-[0_0_20px_rgba(225,29,72,0.6)]">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-3 mt-8">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-zinc-700 hover:border-rose-500 hover:bg-rose-500/10 text-white flex items-center justify-center transition-all duration-300 active:scale-95"
            aria-label="Previous services"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-zinc-700 hover:border-rose-500 hover:bg-rose-500/10 text-white flex items-center justify-center transition-all duration-300 active:scale-95"
            aria-label="Next services"
          >
            <ArrowUpRight size={16} />
          </button>
          <Link
            href="/services"
            className="ml-4 text-base font-semibold text-rose-500 hover:text-rose-400 transition-colors uppercase tracking-wider flex items-center gap-1.5"
          >
            All capabilities <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
