"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Layout, Brain, Cloud, Shield, ChevronRight } from "lucide-react";

interface MarketplaceCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  products: string[];
}

export function PlatformMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState<string>("saas");

  const categories: MarketplaceCategory[] = [
    {
      id: "saas",
      name: "SaaS Platforms",
      icon: <Layout size={18} />,
      products: ["Humanex", "Brio", "SafeSign", "Homela", "CareSuite", "Campix"]
    },
    {
      id: "ai",
      name: "AI Platforms",
      icon: <Brain size={18} />,
      products: ["AI Search", "AI Analytics", "AI Automation"]
    },
    {
      id: "cloud",
      name: "Cloud Platforms",
      icon: <Cloud size={18} />,
      products: ["DevOps Hub", "FinOps Center", "Cloud Portal"]
    },
    {
      id: "security",
      name: "Security Platforms",
      icon: <Shield size={18} />,
      products: ["SafeSign", "IAM Platform", "Compliance Hub"]
    }
  ];

  const currentCat = categories.find((c) => c.id === selectedCategory) || categories[0];

  return (
    <section id="marketplace" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            Ecosystem Tree
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Platform <span className="text-rose-500">Marketplace Map</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            An overview mapping of our proprietary product ecosystems, categorized by cloud operation and cognitive segments.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-4xl mx-auto">
          
          {/* Categories Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center justify-between p-5 rounded-2xl text-left border transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-rose-500/10 text-rose-500 border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.15)]"
                    : "bg-zinc-950/45 text-zinc-400 border-zinc-900/80 hover:text-zinc-350 hover:bg-zinc-900/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                    selectedCategory === cat.id ? "bg-rose-950/30 border-rose-500/30" : "bg-zinc-900 border-zinc-850"
                  }`}>
                    {cat.icon}
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{cat.name}</span>
                </div>
                <ChevronRight size={14} className="text-zinc-550" />
              </button>
            ))}
          </div>

          {/* Connected Products Display */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-950/40 border border-zinc-900/60 rounded-3xl p-8 min-h-[300px] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4 border-b border-zinc-900 pb-2">
                  CONNECTED PRODUCTS FOR: {currentCat.name}
                </span>
                <div className="flex flex-col gap-3">
                  {currentCat.products.map((prod) => (
                    <div
                      key={prod}
                      className="bg-zinc-900/40 border border-zinc-900 rounded-xl p-4 flex items-center justify-between hover:border-rose-500/15 transition-all duration-300"
                    >
                      <span className="text-xs font-bold text-white tracking-wider uppercase">{prod}</span>
                      <span className="text-[8px] bg-rose-500/10 text-rose-500 border border-rose-500/20 px-2 py-0.5 rounded-full font-mono font-bold">
                        ACTIVE ASSET
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-900/60">
                <span className="text-[10px] font-mono text-zinc-500">
                  Select a category on the left to see the products linked to it in the Devopstrio catalog.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
