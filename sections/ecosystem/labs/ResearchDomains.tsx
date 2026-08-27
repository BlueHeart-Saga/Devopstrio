"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DomainCard {
  id: string;
  title: string;
  desc: string;
  image: string;
  topics: string[];
}

export function ResearchDomains() {
  const domains: DomainCard[] = [
    {
      id: "ai",
      title: "Artificial Intelligence",
      desc: "Architecting intelligent agents, fine-tuned foundational models, and safe cognitive workflows.",
      image: "/webp/assets/ecosystem/innovation-labs-page_metrica-card_4/Image-Artificial-Intelligence.webp",
      topics: [
        "LLM Engineering & PEFT Tuning",
        "Autonomous Multi-Agent Systems",
        "Advanced Semantic RAG Architectures",
        "Cognitive Workflow Automation"
      ]
    },
    {
      id: "cloud",
      title: "Cloud Native Systems",
      desc: "Designing scalable Kubernetes environments, zero-downtime serverless platforms, and edge compute.",
      image: "/webp/assets/ecosystem/innovation-labs-page_metrica-card_4/cloud.webp",
      topics: [
        "Kubernetes Carpenter Optimization",
        "Internal Developer Portals (IDPs)",
        "Serverless GPU Scaling Models",
        "Infrastructure FinOps Dashboards"
      ]
    },
    {
      id: "cyber",
      title: "Cybersecurity & Trust",
      desc: "Implementing zero-trust perimeters, post-quantum cryptography, and autonomous threat defense.",
      image: "/webp/assets/ecosystem/innovation-labs-page_metrica-card_4/cyber.webp",
      topics: [
        "Zero Trust Microsegmentation",
        "Generative AI Prompt Firewalls",
        "Autonomous SRE Threat Hunting",
        "Post-Quantum TLS Encryption"
      ]
    },
    {
      id: "data",
      title: "Modern Data Platform",
      desc: "Building high-performance data mesh architectures and real-time streaming pipelines.",
      image: "/webp/assets/ecosystem/innovation-labs-page_metrica-card_4/data-platform.webp",
      topics: [
        "Enterprise Data Mesh Architectures",
        "Unified Lakehouse Storage Engines",
        "Real-Time Stream Processing",
        "Continuous MLOps Pipelines"
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(domains[0].id);
  const currentDomain = domains.find((dom) => dom.id === activeTab) || domains[0];

  return (
    <section id="research-domains" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
        
        {/* Header */}
        <Reveal className="mb-12 text-left max-w-3xl">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white">
            Core Research <span className="text-rose-500">Domains</span>
          </h2>
          {/* <p className="text-zinc-300 text-base md:text-lg font-normal max-w-2xl leading-relaxed mt-3">
            Broad architectural categories defining our SRE investigations, compliance frameworks, and intelligence products.
          </p> */}
        </Reveal>

        {/* Tabs Menu */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10 border-b border-zinc-900 pb-6">
          {domains.map((dom) => (
            <button
              key={dom.id}
              onClick={() => setActiveTab(dom.id)}
              className={`px-5 md:px-6 py-3 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 ${
                activeTab === dom.id
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                  : "bg-zinc-950/60 border border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/60"
              }`}
            >
              {dom.title}
            </button>
          ))}
        </div>

        {/* Main Grid: Details + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Domain details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-zinc-950/40 border border-white/5 relative overflow-hidden h-full min-h-[300px]">
            {/* Accent vertical line */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500" />
            
            <div className="space-y-6 relative z-10 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDomain.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-tight mb-3">
                    {currentDomain.title}
                  </h3>
                  <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed mb-6">
                    {currentDomain.desc}
                  </p>

                  <div className="space-y-4 border-t border-zinc-900 pt-6">
                    <span className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-rose-400 font-semibold block mb-4">
                      Core Investigations
                    </span>
                    {currentDomain.topics.map((topic, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <Check className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                        <p className="text-zinc-200 text-sm md:text-base font-medium leading-relaxed">
                          {topic}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Image showcase */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-900 overflow-hidden bg-zinc-950 relative min-h-[350px] lg:min-h-[420px] group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentDomain.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                src={currentDomain.image}
                alt={currentDomain.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
              />
            </AnimatePresence>
            
            {/* Cinematic shadows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] pointer-events-none" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
