"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Plus, Minus, Sparkles, Bot, LayoutGrid, Cpu, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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

export function AIStudioShowcase() {
  const aiWebsiteUrl = "https://ai.devopstrio.co.uk";
  const [activeCategory, setActiveCategory] = useState<string>("solutions");

  const categories = [
    {
      id: "solutions",
      title: "AI Solutions",
      description: "Custom enterprise solutions built on top-tier cognitive stacks, incorporating semantic retrieval systems and customized LLMs.",
      link: `${aiWebsiteUrl}/#solutions`
    },
    {
      id: "services",
      title: "AI Services",
      description: "End-to-end consulting, continuous modernization, custom model training, and integration pipelines built for modern businesses.",
      link: `${aiWebsiteUrl}/#services`
    },
    {
      id: "agents",
      title: "AI Agents",
      description: "Deploy autonomous digital agents trained for IT support operations, sales pipeline execution, finance auditing, and HR operations.",
      link: `${aiWebsiteUrl}/#agents`
    },
    {
      id: "industry",
      title: "AI by Industry",
      description: "Engineered frameworks optimized specifically for Healthcare workflows, Banking security compliance, and Smart Retail recommendations.",
      link: `${aiWebsiteUrl}/#industries`
    },
    {
      id: "ecosystem",
      title: "AI Technology Ecosystem",
      description: "Harness standard-setting integrations with OpenAI, Anthropic, LangChain, vector datastores, and cloud environments.",
      link: `${aiWebsiteUrl}/#ecosystem`
    },
    {
      id: "governance",
      title: "AI Governance",
      description: "Establish model explainability benchmarks, human-in-the-loop oversight workflows, and zero-trust security audits.",
      link: `${aiWebsiteUrl}/#governance`
    },
    
    {
      id: "platforms",
      title: "AI Platforms & Products",
      description: "Activate AIHire matching platforms, cognitive search indexers, and automated academic document evaluation studios.",
      link: `${aiWebsiteUrl}/#platforms`
    }
  ];

  return (
    <section className="w-full pt-16 pb-16 md:pb-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900">
      {/* Background Ambient Curved Light Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1250px] h-[400px] md:h-[550px] bg-gradient-to-r from-red-600/10 via-rose-500/15 to-red-600/10 rounded-[100%] blur-[140px] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <Reveal>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-4 font-sans leading-tight">
              Shaping the Future with Enterprise AI <span className="text-rose-500">Innovation</span>
            </h2>
          </Reveal>
         
          
        </div>

        {/* Original Accordion Layout with updated directory content */}
        <Reveal>
          <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md p-4 md:p-6 mb-16 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8 items-stretch">
              
              {/* Accordion Left Side (30% Width Ratio) */}
              <div className="lg:col-span-3 flex flex-col divide-y divide-zinc-800/80 border-t border-b border-zinc-800/80">
                {categories.map((item) => {
                  const isOpen = activeCategory === item.id;

                  return (
                    <div 
                      key={item.id} 
                      className="py-2 transition-colors"
                      onMouseEnter={() => setActiveCategory(item.id)}
                    >
                      <div className="w-full flex items-center justify-between text-left group">
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`text-lg md:text-xl font-semibold tracking-tight transition-colors ${isOpen ? "text-rose-500" : "text-zinc-300 group-hover:text-rose-500"}`}
                        >
                          {item.title}
                        </a>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm md:text-[15px] font-semibold text-zinc-100 pt-2 pb-1.5 leading-relaxed">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Right Panel (70% Width Ratio): Dynamic Image Display matching active accordion category */}
              <div className="lg:col-span-7 flex flex-col justify-stretch">
                <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md overflow-hidden shadow-2xl h-full min-h-[160px] md:min-h-[220px] flex items-center justify-center relative group/img">
                  {/* Category Image Map */}
                  <img 
                    src={
                      activeCategory === "agents" 
                        ? "/assets/ecosystem/innovation-labs page_metrica card_4/Agentic Automation.png"
                        : activeCategory === "platforms"
                        ? "/assets/ecosystem/innovation-labs page_metrica card_4/Enterprise AI R&D Studio.png"
                        : activeCategory === "solutions" || activeCategory === "services"
                        ? "/assets/ecosystem/innovation-labs page_metrica card_4/Generative AI & Copilots.png"
                        : "/assets/ecosystem/innovation-labs page_metrica card_4/Document & Workflow AI.png"
                    } 
                    alt="Enterprise AI Feature Preview" 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* In the Spotlight Cards Section */}
        <div className="mb-8">
          <Reveal>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                In the spotlight
              </h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Card 1 - Transform with AI (Red) */}
            <Reveal delay={0.05}>
              <div className="rounded-2xl bg-zinc-900/40 p-6 flex flex-col justify-between h-[250px] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F25022]/10 blur-3xl rounded-full pointer-events-none" />
                <div>
                  <Bot className="w-8 h-8 text-[#F25022] mb-4 opacity-90" />
                  <h4 className="text-white text-lg font-semibold leading-snug mb-3">
                    Transform with AI
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed line-clamp-3 font-medium">
                    Deploy autonomous digital agents and generative frameworks to accelerate performance and redefine core customer journeys.
                  </p>
                </div>
                <a 
                  href={`${aiWebsiteUrl}/#agents`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#F25022] hover:text-[#ff7853] uppercase tracking-wider flex items-center gap-1 mt-4 group/btn"
                >
                  Learn More <span className="transform group-hover/btn:translate-x-1 transition-transform">&gt;</span>
                </a>
              </div>
            </Reveal>

            {/* Card 2 - Modernize Your Cloud (Green) */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-zinc-900/40 p-6 flex flex-col justify-between h-[250px] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7FBA00]/10 blur-3xl rounded-full pointer-events-none" />
                <div>
                  <LayoutGrid className="w-8 h-8 text-[#7FBA00] mb-4 opacity-90" />
                  <h4 className="text-white text-lg font-semibold leading-snug mb-3">
                    Modernize Your Cloud
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed line-clamp-3 font-medium">
                    Migrate legacy systems into elastic serverless architectures to reduce operational overhead.
                  </p>
                </div>
                <a 
                  href={`${aiWebsiteUrl}/#platforms`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#7FBA00] hover:text-[#a0e41b] uppercase tracking-wider flex items-center gap-1 mt-4 group/btn"
                >
                  Learn More <span className="transform group-hover/btn:translate-x-1 transition-transform">&gt;</span>
                </a>
              </div>
            </Reveal>

            {/* Card 3 - Build Digital Products (Blue) */}
            <Reveal delay={0.15}>
              <div className="rounded-2xl bg-zinc-900/40 p-6 flex flex-col justify-between h-[250px] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A4EF]/10 blur-3xl rounded-full pointer-events-none" />
                <div>
                  <Cpu className="w-8 h-8 text-[#00A4EF] mb-4 opacity-90" />
                  <h4 className="text-white text-lg font-semibold leading-snug mb-3">
                    Build Digital Products
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed line-clamp-3 font-medium">
                    Create beautiful, cloud-native applications backed by cognitive intelligence search channels.
                  </p>
                </div>
                <a 
                  href={`${aiWebsiteUrl}/#capabilities`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#00A4EF] hover:text-[#4cc1ff] uppercase tracking-wider flex items-center gap-1 mt-4 group/btn"
                >
                  Learn More <span className="transform group-hover/btn:translate-x-1 transition-transform">&gt;</span>
                </a>
              </div>
            </Reveal>

            {/* Card 4 - Secure Your Enterprise (Yellow/Orange) */}
            <Reveal delay={0.2}>
              <div className="rounded-2xl bg-zinc-900/40 p-6 flex flex-col justify-between h-[250px] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB900]/10 blur-3xl rounded-full pointer-events-none" />
                <div>
                  <Building2 className="w-8 h-8 text-[#FFB900] mb-4 opacity-90" />
                  <h4 className="text-white text-lg font-semibold leading-snug mb-3">
                    Secure Your Enterprise
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed line-clamp-3 font-medium">
                    Implement automated security guardrails and deep compliance models tailored for regulated industries.
                  </p>
                </div>
                <a 
                  href={`${aiWebsiteUrl}/#industries`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#FFB900] hover:text-[#ffd154] uppercase tracking-wider flex items-center gap-1 mt-4 group/btn"
                >
                  Learn More <span className="transform group-hover/btn:translate-x-1 transition-transform">&gt;</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Action Button Centered below Spotlight Grid */}
          <Reveal className="w-full flex justify-center mt-4">
            <a 
              href={aiWebsiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-rose-500/30 bg-zinc-950/80 hover:bg-rose-600 hover:border-rose-600 text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] rounded-[24px]"
            >
              <span>Launch Enterprise Studio</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

       

      </div>
    </section>
  );
}

