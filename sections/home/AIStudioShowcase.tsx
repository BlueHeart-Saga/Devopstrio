"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const aiWebsiteUrl = "https://ai.devopstrio.co.uk";

const aiServicesList = [
  {
    id: "solutions",
    title: "AI Solutions",
    subtitle: "Cognitive Enterprise Stacks",
    description: "Custom enterprise solutions built on top-tier cognitive stacks, incorporating semantic retrieval systems and customized LLMs.",
    image: "/assets/Home-page/Servicescard/AI/Ai solutions.png",
    link: `${aiWebsiteUrl}/#solutions`,
    icon: "/assets/icons/material.png",
    gradient: "from-rose-950/30 via-[#0d0d11]/90 to-[#030303]",
    border: "border-rose-500/40",
    glow: "shadow-[0_0_35px_rgba(244,63,94,0.12)]",
    iconBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    btnHover: "hover:border-rose-400 hover:bg-rose-500 hover:text-white",
    meshGlow: "bg-rose-500/15"
  },
  {
    id: "services",
    title: "AI Services",
    subtitle: "Modernization & Model Training",
    description: "End-to-end consulting, continuous modernization, custom model training, and integration pipelines built for modern businesses.",
    image: "/assets/Home-page/Servicescard/AI/AI Services.png",
    link: `${aiWebsiteUrl}/#services`,
    icon: "/assets/icons/nature.png",
    gradient: "from-rose-950/30 via-[#0d0d11]/90 to-[#030303]",
    border: "border-rose-500/40",
    glow: "shadow-[0_0_35px_rgba(244,63,94,0.12)]",
    iconBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    btnHover: "hover:border-rose-400 hover:bg-rose-500 hover:text-white",
    meshGlow: "bg-rose-500/15"
  },
  {
    id: "agents",
    title: "AI Agents",
    subtitle: "Autonomous Digital Workforce",
    description: "Deploy autonomous digital agents trained for IT support operations, sales pipeline execution, finance auditing, and HR operations.",
    image: "/assets/Home-page/Servicescard/AI/AI Agents.png",
    link: `${aiWebsiteUrl}/#agents`,
    icon: "/assets/icons/research.png",
    gradient: "from-rose-950/30 via-[#0d0d11]/90 to-[#030303]",
    border: "border-rose-500/40",
    glow: "shadow-[0_0_35px_rgba(244,63,94,0.12)]",
    iconBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    btnHover: "hover:border-rose-400 hover:bg-rose-500 hover:text-white",
    meshGlow: "bg-rose-500/15"
  },
  {
    id: "industry",
    title: "AI by Industry",
    subtitle: "Sector-Specific Engineering",
    description: "Engineered frameworks optimized specifically for Healthcare workflows, Banking security compliance, and Smart Retail recommendations.",
    image: "/assets/Home-page/Servicescard/AI/AI by industry.png",
    link: `${aiWebsiteUrl}/#industries`,
    icon: "/assets/icons/sum.png",
    gradient: "from-rose-950/30 via-[#0d0d11]/90 to-[#030303]",
    border: "border-rose-500/40",
    glow: "shadow-[0_0_35px_rgba(244,63,94,0.12)]",
    iconBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    btnHover: "hover:border-rose-400 hover:bg-rose-500 hover:text-white",
    meshGlow: "bg-rose-500/15"
  },
  {
    id: "ecosystem",
    title: "AI Technology Ecosystem",
    subtitle: "Leading-Edge Stack Integrations",
    description: "Harness standard-setting integrations with OpenAI, Anthropic, LangChain, vector datastores, and cloud environments.",
    image: "/assets/Home-page/Servicescard/AI/AI Technology eco system.png",
    link: `${aiWebsiteUrl}/#ecosystem`,
    icon: "/assets/icons/nigritude.png",
    gradient: "from-rose-950/30 via-[#0d0d11]/90 to-[#030303]",
    border: "border-rose-500/40",
    glow: "shadow-[0_0_35px_rgba(244,63,94,0.12)]",
    iconBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    btnHover: "hover:border-rose-400 hover:bg-rose-500 hover:text-white",
    meshGlow: "bg-rose-500/15"
  },
  {
    id: "governance",
    title: "AI Governance",
    subtitle: "Zero-Trust Security & Audit",
    description: "Establish model explainability benchmarks, human-in-the-loop oversight workflows, and zero-trust security audits.",
    image: "/assets/Home-page/Servicescard/AI/AI Covernance.png",
    link: `${aiWebsiteUrl}/#governance`,
    icon: "/assets/icons/tanned-hide.png",
    gradient: "from-rose-950/30 via-[#0d0d11]/90 to-[#030303]",
    border: "border-rose-500/40",
    glow: "shadow-[0_0_35px_rgba(244,63,94,0.12)]",
    iconBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    btnHover: "hover:border-rose-400 hover:bg-rose-500 hover:text-white",
    meshGlow: "bg-rose-500/15"
  },
  {
    id: "platforms",
    title: "AI Platforms & Products",
    subtitle: "Intelligent Search & Matching",
    description: "Activate AIHire matching platforms, cognitive search indexers, and automated academic document evaluation studios.",
    image: "/assets/Home-page/Servicescard/AI/AI Platforms & Products.png",
    link: `${aiWebsiteUrl}/#platforms`,
    icon: "/assets/icons/material (1).png",
    gradient: "from-rose-950/30 via-[#0d0d11]/90 to-[#030303]",
    border: "border-rose-500/40",
    glow: "shadow-[0_0_35px_rgba(244,63,94,0.12)]",
    iconBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    btnHover: "hover:border-rose-400 hover:bg-rose-500 hover:text-white",
    meshGlow: "bg-rose-500/15"
  }
];

export function AIStudioShowcase() {
  const [activeId, setActiveId] = useState<string>("agents");
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-play timer for smooth card expansion one-by-one
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveId((prevId) => {
        const currentIndex = aiServicesList.findIndex((s) => s.id === prevId);
        const nextIndex = (currentIndex + 1) % aiServicesList.length;
        return aiServicesList[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    const currentIndex = aiServicesList.findIndex((s) => s.id === activeId);
    const nextIndex = (currentIndex + 1) % aiServicesList.length;
    setActiveId(aiServicesList[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = aiServicesList.findIndex((s) => s.id === activeId);
    const prevIndex = (currentIndex - 1 + aiServicesList.length) % aiServicesList.length;
    setActiveId(aiServicesList[prevIndex].id);
  };

  return (
    <section className="w-full pt-16 pb-6 md:pt-20 md:pb-8 bg-[#030303] text-white relative overflow-hidden" id="ai-studio">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <Reveal>
            <div className="relative inline-block">
              {/* Arrow image on the left side (White color filter) */}
              <div className="absolute -top-6 sm:-top-8 md:-top-9 -left-6 sm:-left-10 md:-left-14 z-20 pointer-events-none select-none">
                <img
                  src="/assets/components/left-right.png"
                  alt="Left-Right Arrow indicator"
                  className="w-8 sm:w-11 md:w-14 h-auto object-contain filter brightness-0 invert opacity-75 drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
                />
              </div>

              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-4 font-sans leading-tight">
                Shaping the Future with Enterprise AI{" "}
                <span className="relative inline-block px-1">
                  <span className="text-rose-500 font-semibold">Innovation</span>
                  {/* Brand Rose hand-drawn single stroke underline */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-rose-500 pointer-events-none overflow-visible"
                    viewBox="0 0 220 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 5 6 Q 110 3, 215 7"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="opacity-95 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]"
                    />
                  </svg>
                </span>
              </h2>
            </div>
          </Reveal>
        </div>

        {/* Fey.com-Style Expanding Vertical Card Accordion Array */}
        <Reveal>
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex flex-col lg:flex-row items-stretch justify-center gap-3 sm:gap-4 h-auto lg:h-[500px] xl:h-[540px] w-full max-w-7xl mx-auto select-none"
          >
            {aiServicesList.map((service) => {
              const isActive = activeId === service.id;

              return (
                <motion.div
                  key={service.id}
                  layout
                  onClick={() => setActiveId(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between transition-all duration-500 ${
                    isActive
                      ? `lg:flex-[3.5] bg-gradient-to-b ${service.gradient} ${service.glow} p-6 sm:p-8 min-h-[360px] lg:min-h-0`
                      : "lg:flex-1 bg-[#08080a]/90 hover:bg-[#0d0d10] p-4 sm:p-5 min-h-[70px] lg:min-h-0"
                  }`}
                >
                  {/* Microsoft Fluent Ambient Mesh Light Glow & Image Layer (Active state only) */}
                  {isActive && (
                    <>
                      {/* Ambient Mesh Glow Orbs */}
                      <div className={`absolute -top-16 -right-16 w-72 h-72 rounded-full blur-3xl opacity-50 pointer-events-none ${service.meshGlow}`} />
                      <div className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none ${service.meshGlow}`} />

                      {/* Image Backdrop */}
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-25 filter blur-sm pointer-events-none transition-all duration-700"
                        style={{ backgroundImage: `url(${service.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-[#030408]/80 to-transparent pointer-events-none" />
                    </>
                  )}

                  {/* ── EXPANDED CARD LAYOUT (ACTIVE) ── */}
                  {isActive ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="relative z-10 flex flex-col justify-between h-full w-full"
                    >
                      {/* Top Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3.5">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-1">
                            <img
                              src={service.icon}
                              alt={`${service.title} icon`}
                              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(244,63,94,0.35)] transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Description & CTA Link */}
                      <div className="mt-8 lg:mt-auto pt-6">
                        <p className="text-zinc-200 text-sm sm:text-base leading-relaxed max-w-lg mb-6 font-normal drop-shadow-sm">
                          {service.description}
                        </p>

                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white bg-zinc-900/90 ${service.btnHover} px-5 py-2.5 rounded-lg transition-all duration-300 shadow-xl group/btn`}
                        >
                          <span>Explore {service.title}</span>
                          <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    /* ── COLLAPSED CARD LAYOUT (INACTIVE) ── */
                    <div className="h-full flex flex-row lg:flex-col items-center justify-between z-10 py-1 px-2 lg:py-4">
                      {/* Icon */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center p-1">
                        <img
                          src={service.icon}
                          alt={`${service.title} icon`}
                          className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                        />
                      </div>

                      {/* Vertical Rotated Title on Desktop */}
                      <span className="hidden lg:block text-base sm:text-lg md:text-xl font-semibold tracking-wide text-zinc-300 group-hover:text-white transition-colors [writing-mode:vertical-rl] rotate-180 py-4">
                        {service.title}
                      </span>

                      {/* Horizontal Title on Mobile */}
                      <span className="lg:hidden text-sm sm:text-base font-semibold text-zinc-300 group-hover:text-white transition-colors">
                        {service.title}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </Reveal>

        {/* Navigation Controls below the Accordion */}
        <div className="flex items-center justify-center gap-4 mt-4 sm:mt-6 z-20">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer text-zinc-400"
            aria-label="Previous card"
          >
            <ChevronLeft size={18} />
          </button>
          
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer text-zinc-400"
            aria-label="Next card"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}

/*
// ─────────────────────────────────────────────────────────────────────────────
// PREVIOUS AI STUDIO SHOWCASE IMPLEMENTATION (COMMENTED OUT AS REQUESTED)
// ─────────────────────────────────────────────────────────────────────────────

/*
const aiDifferenceItems = [
  {
    id: "philosophy",
    title: "Strategic GenAI & Enterprise AI Philosophy",
    description:
      "We believe AI is a core operational transformation engine. We design custom generative copilots, agentic automation frameworks, and enterprise LLM architectures tailored to your unique industry requirements, security standards, and growth goals.",
    image: "/assets/Services-Page/Our Enterprise AI Engineering Excellence/Strategic GenAI & Enterprise AI Philosophy.png"
  },
  {
    id: "system",
    title: "Autonomous AI Systems & MLOps Engineering",
    description:
      "Our battle-tested AI engineering framework automates intelligent code generation, continuous model evaluation, automated data pipelines, and zero-trust security compliance — accelerating time-to-value by up to 50% with enterprise reliability.",
    image: "/assets/Services-Page/Our Enterprise AI Engineering Excellence/Autonomous AI Systems & MLOps Engineering.png"
  },
  {
    id: "measurement",
    title: "Measurable Business ROI & AI Governance",
    description:
      "We measure every AI deployment across velocity, accuracy, security, and long-term scalability. With continuous real-time telemetry and strict AI governance, we guarantee transparent business impact and sustainable operational excellence.",
    image: "/assets/Services-Page/Our Enterprise AI Engineering Excellence/Measurable Business ROI & AI Governance.png"
  }
];

const azureUrl = "https://devopstrioaiservices-e6dnggh5gxehh9d0.southindia-01.azurewebsites.net/";

const aiTransformationCards = [
  {
    title: "Generative AI & Copilots",
    subtitle: "Custom Enterprise LLMs",
    description: "Architect bespoke GenAI engines, domain-tuned copilot assistants, and semantic RAG systems for intelligent workplace productivity.",
    image: "/assets/Services-Page/Comprehensive AI Services For Enterprises/Generative AI & Copilots.png",
    hoverImage: "/assets/Services-Page/Comprehensive AI Services For Enterprises_Hover/Generative AI & Copilots.png",
    link: "/services/ai-data-innovation",
    badge: "GenAI & LLMs"
  },
  {
    title: "Agentic Automation",
    subtitle: "Autonomous Digital Agents",
    description: "Deploy goal-driven autonomous AI agents that execute complex multi-step enterprise workflows, API orchestrations, and back-office operations.",
    image: "/assets/Services-Page/Comprehensive AI Services For Enterprises/Agentic Automation.png",
    hoverImage: "/assets/Services-Page/Comprehensive AI Services For Enterprises_Hover/Agentic Automation.png",
    link: "/services/ai-data-innovation",
    badge: "AI Agents"
  },
  {
    title: "Document & Workflow AI",
    subtitle: "Intelligent Process Automation",
    description: "Transform unstructured contracts, financial PDFs, and medical records into actionable insights with multi-modal Document AI and predictive telemetry.",
    image: "/assets/Services-Page/Comprehensive AI Services For Enterprises/Document & Workflow AI.png",
    hoverImage: "/assets/Services-Page/Comprehensive AI Services For Enterprises_Hover/Document & Workflow AI.png",
    link: "/services/ai-data-innovation",
    badge: "DocAI & Analytics"
  },
  {
    title: "Enterprise AI R&D Studio",
    subtitle: "Custom ML & Vision Engineering",
    description: "End-to-end Machine Learning model training, computer vision synthesis, vector search platforms, and rapid enterprise AI solution prototyping.",
    image: "/assets/Services-Page/Comprehensive AI Services For Enterprises/Enterprise AI R&D Studio.png",
    hoverImage: "/assets/Services-Page/Comprehensive AI Services For Enterprises_Hover/Enterprise AI R&D Studio.png",
    link: azureUrl,
    badge: "AI Lab & MLOps"
  }
];

export function OldAIStudioShowcase() {
  const aiWebsiteUrl = "https://ai.devopstrio.co.uk";
  const [activeCategory, setActiveCategory] = useState<string>("solutions");

  const categories = [
    {
      id: "solutions",
      title: "AI Solutions",
      description: "Custom enterprise solutions built on top-tier cognitive stacks, incorporating semantic retrieval systems and customized LLMs.",
      image: "/assets/Home-page/Servicescard/AI/Ai solutions.png",
      link: `${aiWebsiteUrl}/#solutions`
    },
    {
      id: "services",
      title: "AI Services",
      description: "End-to-end consulting, continuous modernization, custom model training, and integration pipelines built for modern businesses.",
      image: "/assets/Home-page/Servicescard/AI/AI Services.png",
      link: `${aiWebsiteUrl}/#services`
    },
    {
      id: "agents",
      title: "AI Agents",
      description: "Deploy autonomous digital agents trained for IT support operations, sales pipeline execution, finance auditing, and HR operations.",
      image: "/assets/Home-page/Servicescard/AI/AI Agents.png",
      link: `${aiWebsiteUrl}/#agents`
    },
    {
      id: "industry",
      title: "AI by Industry",
      description: "Engineered frameworks optimized specifically for Healthcare workflows, Banking security compliance, and Smart Retail recommendations.",
      image: "/assets/Home-page/Servicescard/AI/AI by industry.png",
      link: `${aiWebsiteUrl}/#industries`
    },
    {
      id: "ecosystem",
      title: "AI Technology Ecosystem",
      description: "Harness standard-setting integrations with OpenAI, Anthropic, LangChain, vector datastores, and cloud environments.",
      image: "/assets/Home-page/Servicescard/AI/AI Technology eco system.png",
      link: `${aiWebsiteUrl}/#ecosystem`
    },
    {
      id: "governance",
      title: "AI Governance",
      description: "Establish model explainability benchmarks, human-in-the-loop oversight workflows, and zero-trust security audits.",
      image: "/assets/Home-page/Servicescard/AI/AI Covernance.png",
      link: `${aiWebsiteUrl}/#governance`
    },
    {
      id: "platforms",
      title: "AI Platforms & Products",
      description: "Activate AIHire matching platforms, cognitive search indexers, and automated academic document evaluation studios.",
      image: "/assets/Home-page/Servicescard/AI/AI Platforms & Products.png",
      link: `${aiWebsiteUrl}/#platforms`
    }
  ];

  const activeCategoryItem = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section className="w-full pt-16 pb-16 md:pb-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <Reveal>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-4 font-sans leading-tight">
              Shaping the Future with Enterprise AI <span className="text-rose-500">Innovation</span>
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
*/
