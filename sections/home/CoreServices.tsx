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
    bgImage: "/assets/Home-page/core-services/1.png",
    href: "/services/ai-data-innovation",
    cta: "AI & Data Innovation"
  },
  {
    id: "cloud-services",
    tag: "Migrate",
    title: "Move, optimise, and scale confidently on any cloud platform.",
    desc: "Design and manage resilient cloud environments across AWS, Azure, and Google Cloud — built for performance, compliance, and cost efficiency.",
    bgImage: "/assets/Home-page/core-services/2.png",
    href: "/services/cloud-services",
    cta: "Cloud Services"
  },
  {
    id: "devops-automation",
    tag: "Accelerate",
    title: "Ship faster with fully automated DevOps and IaC pipelines.",
    desc: "CI/CD automation, Kubernetes orchestration, Terraform, and platform engineering practices that eliminate friction and accelerate delivery.",
    bgImage: "/assets/Home-page/core-services/3.png",
    href: "/services/devops-automation",
    cta: "DevOps & Automation"
  },
  {
    id: "cybersecurity",
    tag: "Protect",
    title: "Embed security and compliance into every layer of your stack.",
    desc: "Proactive threat management, SOC services, vulnerability assessments, and zero-trust security frameworks for regulated industries.",
    bgImage: "/assets/Home-page/core-services/4.png",
    href: "/services/cybersecurity",
    cta: "Cybersecurity"
  },
  {
    id: "software-development",
    tag: "Build",
    title: "Create enterprise-grade software, apps, and SaaS platforms.",
    desc: "From complex web applications and mobile products to API ecosystems and SaaS platforms — engineered for reliability and business impact.",
    bgImage: "/assets/Home-page/core-services/5.png",
    href: "/services/software-development",
    cta: "Software Development"
  },
  {
    id: "digital-transformation",
    tag: "Transform",
    title: "Modernise business models and legacy systems for the digital age.",
    desc: "IT roadmaps, cloud readiness audits, process automation, and intelligent workflows to future-proof your enterprise architecture.",
    bgImage: "/assets/Home-page/core-services/6.png",
    href: "/services/digital-transformation",
    cta: "Digital Transformation"
  },
  {
    id: "data-engineering",
    tag: "Analyze",
    title: "Unlock actionable insights with robust enterprise data platforms.",
    desc: "Design columnar databases, unified lakehouses, real-time streaming pipelines, and ETL/ELT workflows using modern data stacks.",
    bgImage: "/assets/Home-page/core-services/7.png",
    href: "/services/data-engineering",
    cta: "Data Engineering"
  },
  {
    id: "managed-services",
    tag: "Manage",
    title: "Ensure uninterrupted operations with 24/7 proactive monitoring.",
    desc: "Multi-account cloud administration, SLA bug resolutions, infrastructure management, and continuous incident containment.",
    bgImage: "/assets/Home-page/core-services/8.png",
    href: "/services/managed-services",
    cta: "Managed Services"
  },
  {
    id: "qa-testing",
    tag: "Ensure",
    title: "Deliver flawless digital experiences with quality engineering.",
    desc: "Automated end-to-end client scripts, performance load testing, API validation, and shift-left methodologies for zero defect escapes.",
    bgImage: "/assets/Home-page/core-services/9.png",
    href: "/services/qa-testing",
    cta: "QA & Testing"
  },
  {
    id: "it-consulting",
    tag: "Consult",
    title: "Align technology investments with strategic business objectives.",
    desc: "Cost-benefit analyses, distributed architecture planning, compliance alignment, and long-term digital transformation roadmaps.",
    bgImage: "/assets/Home-page/core-services/10.png",
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
      className="w-full pt-14 md:pt-20 pb-16 md:pb-24 bg-[#030303] text-white relative overflow-hidden"
      id="capabilities"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.05),transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(225,29,72,0.04),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CAPABILITIES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Technology at the core of every business breakthrough
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              End-to-end services across <Link href="/services/cloud-services" className="text-rose-500 hover:underline">Cloud</Link>, <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">AI</Link>, <Link href="/services/devops-automation" className="text-rose-500 hover:underline">DevOps</Link>, <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">Security</Link>, and <Link href="/services/software-development" className="text-rose-500 hover:underline">Software Engineering</Link> — built to deliver measurable outcomes.
            </p>
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
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 group flex flex-col bg-[#0A0A0A] rounded-[24px] p-2.5 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
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
                  <span className="text-[#E11D48] text-[10px] font-bold uppercase tracking-widest">
                    {service.tag}
                  </span>
                  <h3 className="text-zinc-100 text-[15px] md:text-base font-bold leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-[13px] leading-relaxed flex-1 mt-1">
                    {service.desc}
                  </p>

                  {/* CTA */}
                  <a
                    href={service.href}
                    className="mt-4 inline-flex items-center gap-3 text-zinc-300 hover:text-white text-xs font-semibold tracking-wide transition-all duration-300 w-fit group/btn"
                  >
                    <span className="w-8 h-8 rounded-lg bg-zinc-800 group-hover/btn:bg-[#E11D48] flex items-center justify-center flex-shrink-0 transition-colors duration-300 border border-zinc-700 group-hover/btn:border-[#E11D48]">
                      <ArrowUpRight size={14} className="text-white" />
                    </span>
                    {service.cta}
                  </a>
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
          <a
            href="/services"
            className="ml-4 text-sm font-semibold text-zinc-400 hover:text-rose-400 transition-colors uppercase tracking-wider flex items-center gap-1.5"
          >
            All capabilities <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
