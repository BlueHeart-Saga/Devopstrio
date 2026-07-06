"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Cloud, Brain, Database, Shield, Layout, ArrowUpRight } from "lucide-react";
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
    <section id="categories" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-650/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Header Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              PRODUCT SEGMENTS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Platform <span className="text-rose-500">Categories</span>
            </h2>
            <p className="text-zinc-400 text-sm font-semibold leading-relaxed">
              Our software assets are divided into five specialized domains to support modern enterprise architectures.
            </p>
          </div>
        </Reveal>

        {/* Tab Pills Selector */}
        <div className="flex items-center justify-center gap-2 mb-12 pb-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 border-b border-zinc-900/60">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 ${activeCategory === cat.id
                ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.35)]"
                : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
                }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left Tall Card (Col 1) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[380px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Internal decorative glowing meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-violet-650/5 rounded-full blur-3xl pointer-events-none" />

              {/* Card top details */}
              <div className="relative z-10">
                <span className="text-[9px] font-mono text-rose-500 tracking-widest uppercase block mb-4">
                  CORE SEGMENT
                </span>
                <div className="flex items-center gap-3 text-white mb-4">
                  <div className="w-8 h-8 rounded-lg bg-rose-600/10 flex items-center justify-center text-rose-500">
                    {currentCat.icon}
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">
                    {currentCat.label}
                  </h3>
                </div>
                <p className="text-zinc-300 text-xs font-semibold leading-relaxed">
                  {currentCat.desc}
                </p>
              </div>

              {/* Card bottom details */}
              <div className="relative z-10 mt-8">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                  Status
                </div>
                <div className="text-xs text-white font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Production Ready
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Assets Grid (Col 2-4) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {currentCat.examples.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="h-full"
                >
                  <div className="group/card flex flex-col justify-between bg-zinc-950/30 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 min-h-[160px] h-full relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                    {/* Subtle color highlight glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 tracking-wider block mb-2">
                        ASSET 0{idx + 1}
                      </span>
                      <h4 className="text-base font-bold text-white group-hover/card:text-rose-400 transition-colors mb-2">
                        {item}
                      </h4>
                    </div>

                    <Link
                      href={`/contact?platform=${encodeURIComponent(item)}`}
                      className="inline-flex items-center gap-2.5 group/link mt-auto w-fit cursor-pointer"
                    >
                      <span className="w-7 h-7 rounded-full bg-rose-600/10 group-hover/link:bg-rose-600 text-rose-500 group-hover/link:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight
                          size={12}
                          className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </span>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-400 group-hover/link:text-zinc-200 transition-colors">
                        Launch System
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
