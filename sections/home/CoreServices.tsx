"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    id: "ai-automation",
    tag: "Innovate",
    title: "Transform operations with AI-driven intelligence and automation.",
    desc: "Leverage Generative AI, machine learning, and intelligent automation to modernise business processes and unlock measurable value at scale.",
    bgImage: "/assets/Home-page/core-services/AIAutomation.png",
    href: "/services/ai-data-innovation",
    cta: "AI & Automation"
  },
  {
    id: "cloud-migration",
    tag: "Migrate",
    title: "Move, optimise, and scale confidently on any cloud platform.",
    desc: "Design and manage resilient cloud environments across AWS, Azure, and Google Cloud — built for performance, compliance, and cost efficiency.",
    bgImage: "/assets/Home-page/core-services/cloudengineering.png",
    href: "/services/cloud-services",
    cta: "Cloud Engineering"
  },
  {
    id: "devops-iac",
    tag: "Accelerate",
    title: "Ship faster with fully automated DevOps and IaC pipelines.",
    desc: "CI/CD automation, Kubernetes orchestration, Terraform, and platform engineering practices that eliminate friction and accelerate delivery.",
    bgImage: "/assets/Home-page/core-services/Devops.png",
    href: "/services/devops-automation",
    cta: "DevOps & IaC"
  },
  {
    id: "software-engineering",
    tag: "Build",
    title: "Create enterprise-grade software, apps, and SaaS platforms.",
    desc: "From complex web applications and mobile products to API ecosystems and SaaS platforms — engineered for reliability and business impact.",
    bgImage: "/assets/Home-page/core-services/software engineering.png",
    href: "/services/software-development",
    cta: "Software Engineering"
  },
  {
    id: "cybersecurity",
    tag: "Protect",
    title: "Embed security and compliance into every layer of your stack.",
    desc: "Proactive threat management, SOC services, vulnerability assessments, and zero-trust security frameworks for regulated industries.",
    bgImage: "/assets/Home-page/core-services/cybersecurity..png",
    href: "/services/cybersecurity",
    cta: "Cybersecurity"
  },
  {
    id: "enterprise-solutions",
    tag: "Scale",
    title: "Deliver scalable technology solutions across every sector.",
    desc: "Tailored solutions for government, healthcare, finance, and enterprise organisations — built for compliance, resilience, and long-term value.",
    bgImage: "/assets/Home-page/core-services/enterprisesolution.png",
    href: "/industries",
    cta: "Enterprise Solutions"
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

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">

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
              End-to-end services across Cloud, AI, DevOps, Security, and Software Engineering — built to deliver measurable outcomes.
            </p>
          </div>
        </Reveal>

        {/* Sliding Carousel Viewport */}
        <div className="relative overflow-hidden w-full pb-4">
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(-${xTranslation}% - ${startIndex * gap}px)` }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 group flex flex-col bg-zinc-950 border border-zinc-800/60 rounded-2xl overflow-hidden hover:border-rose-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(225,29,72,0.07)]"
              >
                {/* Cover Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-900">
                  <img
                    src={service.bgImage}
                    alt={service.cta}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <span className="text-rose-500 text-[11px] font-bold uppercase tracking-widest">
                    {service.tag}
                  </span>
                  <h3 className="text-white text-base md:text-[17px] font-bold leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                    {service.desc}
                  </p>

                  {/* CTA */}
                  <a
                    href={service.href}
                    className="mt-2 inline-flex items-center gap-2.5 bg-zinc-900 hover:bg-rose-600 border border-zinc-800 hover:border-rose-600 text-zinc-300 hover:text-white rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 w-fit group/btn"
                  >
                    <span className="w-5 h-5 rounded-sm bg-rose-600 group-hover/btn:bg-white flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <ArrowRight size={11} className="text-white group-hover/btn:text-rose-600 transition-colors duration-300" />
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
            <ArrowRight size={16} />
          </button>
          <a
            href="/services"
            className="ml-4 text-sm font-semibold text-zinc-400 hover:text-rose-400 transition-colors uppercase tracking-wider flex items-center gap-1.5"
          >
            All capabilities <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
