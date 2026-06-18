"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Play, BookOpen } from "lucide-react";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";

interface InsightItem {
  title: string;
  date: string;
  href: string;
}

export function Insights() {
  const [posts, setPosts] = useState<TransformedPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInsights() {
      try {
        setLoading(true);
        const data = await insightsApi.getAllPosts(6);
        setPosts(data || []);
      } catch (err) {
        console.error("Failed to load homepage insights:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchInsights();
  }, []);

  const fallbackInsights: InsightItem[] = [
    {
      title: "AI Agents: The Next Frontier in Enterprise Automation",
      date: "May 12, 2026",
      href: "/contact"
    },
    {
      title: "Cloud Cost Optimization Strategies for 2026",
      date: "May 08, 2026",
      href: "/contact"
    },
    {
      title: "Kubernetes Best Practices for High Availability",
      date: "May 05, 2026",
      href: "/contact"
    },
    {
      title: "Building Secure AI Systems: A Practical Guide",
      date: "May 01, 2026",
      href: "/contact"
    }
  ];

  // Helper mappings for dynamic data extraction
  const latestPost = posts[0] || null;
  const secondaryPost = posts[1] || null;
  const remainingPosts = posts.slice(2, 6);

  return (
    <section className="w-full pt-10 md:pt-14 pb-20 md:pb-32 bg-[#030303] text-white relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

        {/* Header Block with Standardized Eyebrow & Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-900/60">
          <div>
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
                NEWS &amp; INSIGHTS
              </span>
            </Reveal>
            <Reveal>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white">
                Latest Highlights &amp; Insights
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <a
              href="/insights"
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-rose-500 hover:text-rose-400 transition-colors mt-4 md:mt-0 group"
            >
              View all insights 
              <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
          </Reveal>
        </div>

        {/* 3-Column Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.8fr_1.1fr] gap-8">

          {/* Column 1: AI insights & case study */}
          <div className="flex flex-col gap-8">
            {/* Top Card: AI & Data Insights */}
            <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between aspect-square">
              {/* Background gradient waves */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(225,29,72,0.03),transparent_70%)] pointer-events-none" />

              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-[9px] font-bold tracking-wider text-rose-400 uppercase mb-4">
                  AI &amp; Data Insights
                </span>
                <h3 className="text-lg font-bold text-zinc-300 leading-relaxed group-hover:text-rose-100 transition-colors">
                  Trends, research, and expert industry perspectives.
                </h3>
              </div>

              <a
                href="/insights"
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-rose-500 hover:text-rose-400 transition-colors group/btn"
              >
                Explore Now 
                <ArrowRight size={12} className="transform group-hover/btn:translate-x-0.5 transition-transform duration-300" />
              </a>
            </div>

            {/* Bottom Card: Case Study: Retail AI Inventory */}
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 hover:bg-zinc-900/10 overflow-hidden group transition-all duration-300 flex flex-col justify-between h-full">
              <div className="relative h-28 md:h-32 w-full overflow-hidden border-b border-zinc-900">
                <img
                  src={secondaryPost?.image || "/assets/Home-page/cases/retail_inventory.png"}
                  alt={secondaryPost?.title || "Retail AI Inventory"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103 select-none"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-zinc-950/85 border border-zinc-800/85 text-[9px] font-bold tracking-wider text-zinc-400 uppercase">
                  {secondaryPost ? secondaryPost.category.name : "Case Study"}
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 gap-6">
                <h3 className="text-sm font-bold text-zinc-200 leading-snug group-hover:text-white transition-colors line-clamp-2">
                  {secondaryPost ? secondaryPost.title : "Retail AI Inventory Optimization"}
                </h3>
                <a
                  href={secondaryPost ? `/insights/${secondaryPost.category.slug}/${secondaryPost.id}` : "/insights"}
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-rose-500 hover:text-rose-400 transition-colors group/btn"
                >
                  Read More 
                  <ArrowRight size={12} className="transform group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Large event highlight */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 hover:bg-zinc-900/10 overflow-hidden group transition-all duration-300 flex flex-col h-full relative">
            <div className="relative h-36 md:h-40 w-full overflow-hidden border-b border-zinc-900">
              <img
                src={latestPost?.image || "/assets/Home-page/events/nasscom_keynote.png"}
                alt={latestPost?.title || "NASSCOM Forum"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102 select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-rose-500/15 border border-rose-500/25 text-[9px] font-bold tracking-wider text-rose-400 uppercase">
                {latestPost ? latestPost.category.name : "Event Highlight"}
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between flex-1 gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-rose-100 transition-colors line-clamp-2">
                  {latestPost ? latestPost.title : "Devopstrio at NASSCOM Technology & Leadership Forum 2026"}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed line-clamp-3">
                  {latestPost ? latestPost.excerpt : "Driving conversations on AI transformation, cloud innovation, and digital leadership across global enterprise networks."}
                </p>
              </div>

              <a
                href={latestPost ? `/insights/${latestPost.category.slug}/${latestPost.id}` : "/insights"}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-rose-500 hover:text-rose-400 transition-colors group/btn self-start"
              >
                Read Article
                <ArrowRight size={10} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Column 3: Stacked Insights list */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 transition-all duration-300 p-6 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6 divide-y divide-zinc-900/60">
              {posts.length > 2 ? (
                remainingPosts.map((insight, index) => (
                  <a
                    key={insight.id}
                    href={`/insights/${insight.category.slug}/${insight.id}`}
                    className={`flex flex-col gap-2 group block ${index > 0 ? "pt-5" : ""}`}
                  >
                    <h4 className="text-sm font-semibold text-zinc-300 group-hover:text-rose-400 transition-colors leading-snug line-clamp-2">
                      {insight.title}
                    </h4>
                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-550 mt-1">
                      <span>{insight.date}</span>
                      <span className="text-rose-500 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1">
                        Read Article 
                        <ArrowRight size={10} className="transform translate-x-[-2px] group-hover:translate-x-0 transition-transform duration-300" />
                      </span>
                    </div>
                  </a>
                ))
              ) : (
                fallbackInsights.map((insight, index) => (
                  <a
                    key={insight.title}
                    href={insight.href}
                    className={`flex flex-col gap-2 group block ${index > 0 ? "pt-5" : ""}`}
                  >
                    <h4 className="text-sm font-semibold text-zinc-300 group-hover:text-rose-400 transition-colors leading-snug">
                      {insight.title}
                    </h4>
                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-550 mt-1">
                      <span>{insight.date}</span>
                      <span className="text-rose-500 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1">
                        Read Article 
                        <ArrowRight size={10} className="transform translate-x-[-2px] group-hover:translate-x-0 transition-transform duration-300" />
                      </span>
                    </div>
                  </a>
                ))
              )}
            </div>

            <div className="pt-6 border-t border-zinc-900/60 flex items-center gap-3 text-zinc-550">
              <BookOpen size={16} className="text-rose-500" />
              <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-440">Research Publication Hub</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
