"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Cloud, Brain, Database, Shield, Layout, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CategoryDetail {
  id: string;
  label: string;
  icon: React.ReactNode;
  desc: string;
  examples: string[];
}

export function PlatformCategories() {
  const [activeCategory, setActiveCategory] = useState("saas");

  const categories: CategoryDetail[] = [
    {
      id: "saas",
      label: "SaaS Platforms",
      icon: <Layout size={16} />,
      desc: "Multi-tenant software products built for scalability, subscription management, user onboarding, and business automation.",
      examples: ["Humanex", "Brio", "SafeSign", "CareSuite", "Homela", "Campix"]
    },
    {
      id: "ai",
      label: "AI Platforms",
      icon: <Brain size={16} />,
      desc: "AI-powered systems for automation, analytics, intelligent search, content generation, and decision support.",
      examples: ["AI Search Engine", "AI Content Studio", "AI Recruitment Intelligence", "AI Analytics Platform", "AI Document Processing"]
    },
    {
      id: "cloud",
      label: "Cloud Platforms",
      icon: <Cloud size={16} />,
      desc: "Cloud-native systems for infrastructure management, monitoring, deployment automation, and operations.",
      examples: ["Cloud Operations Center", "FinOps Dashboard", "DevOps Automation Hub", "Infrastructure Portal", "Monitoring Platform"]
    },
    {
      id: "data",
      label: "Data Platforms",
      icon: <Database size={16} />,
      desc: "Enterprise data ecosystems for analytics, reporting, warehousing, governance, and business intelligence.",
      examples: ["Data Lake Platform", "Business Intelligence Hub", "Analytics Workspace", "Customer Data Platform"]
    },
    {
      id: "security",
      label: "Security Platforms",
      icon: <Shield size={16} />,
      desc: "Solutions focused on digital trust, compliance, identity, and governance.",
      examples: ["SafeSign", "Identity Platform", "Compliance Dashboard", "Security Operations Portal"]
    }
  ];

  const currentCat = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <section id="categories" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            PRODUCT SEGMENTS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Platform <span className="text-rose-500">Categories</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Our software assets are divided into five specialized domains to support modern enterprise architectures.
          </p>
        </Reveal>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-zinc-900 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-rose-500/10 text-rose-500 border border-rose-500/20"
                  : "bg-zinc-950/45 text-zinc-500 border border-zinc-900/80 hover:text-zinc-350 hover:bg-zinc-900/40"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tab content panel */}
        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-950/40 border border-zinc-900/60 rounded-3xl p-8 max-w-4xl"
            >
              <div className="mb-6">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                  CATEGORY DIRECTIVE
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{currentCat.label}</h3>
                <p className="text-xs text-zinc-400 font-semibold leading-relaxed max-w-2xl">
                  {currentCat.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-900/60">
                <span className="block text-[10px] font-mono font-bold text-rose-500 uppercase tracking-wider mb-4">
                  CORE ASSETS & EXAMPLES
                </span>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {currentCat.examples.map((item) => (
                    <div
                      key={item}
                      className="bg-zinc-900/45 border border-zinc-900 rounded-xl p-4 flex items-center justify-between hover:border-rose-500/10 transition-all duration-300 group"
                    >
                      <span className="text-xs font-bold text-white tracking-wider group-hover:text-rose-500 transition-colors">
                        {item}
                      </span>
                      <ArrowRight size={12} className="text-zinc-650 group-hover:translate-x-1 group-hover:text-rose-500 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
