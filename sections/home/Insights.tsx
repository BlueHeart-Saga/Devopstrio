"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";

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

  if (loading) return null;
  if (!posts || posts.length === 0) return null;

  const latestPost = posts[0];
  const displayPosts = posts.slice(1, 5);

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
              <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
          </Reveal>
        </div>

        {/* 2-Column Insights Layout matching the mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-14 items-start">

          {/* Left: Featured Post Card */}
          <Reveal className="w-full">
            <div className="relative group rounded-[2.5rem] border border-white/[0.06] bg-[#0c0c0c] hover:border-rose-500/20 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.6)] transition-all duration-500 overflow-hidden flex flex-col h-[520px]">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={latestPost.image ?? undefined}
                  alt={latestPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 brightness-[0.8]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              </div>

              {/* Bottom Content overlay */}
              <div className="mt-auto relative z-10 p-8 bg-black/40 backdrop-blur-md border-t border-white/10 text-left space-y-4 rounded-b-[2.5rem]">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/45 border border-white/15 text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">
                    {/* <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]" /> */}
                    {latestPost.category?.name || "Technology"}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-rose-100 transition-colors">
                  <a href={`/insights/${latestPost.category?.slug || "general"}/${latestPost.id}`}>
                    {latestPost.title}
                  </a>
                </h3>

                <div className="flex items-center gap-2 text-xs font-medium text-zinc-350">
                  <span>{latestPost.date}</span>
                  <span>•</span>
                  <span>{latestPost.readTime} min read</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: "Latest post" list */}
          <div className="flex flex-col gap-6 text-left">
            <Reveal>
              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Latest post
              </h3>
            </Reveal>

            <div className="flex flex-col gap-6">
              {displayPosts.map((insight, idx) => {
                const categorySlug = insight.category?.slug || "general";
                const insightHref = `/insights/${categorySlug}/${insight.id}`;
                return (
                  <Reveal key={insight.id || idx} delay={idx * 0.05}>
                    <a
                      href={insightHref}
                      className="flex gap-4 items-center group/item p-2 rounded-2xl hover:bg-zinc-900/20 transition-all duration-300"
                    >
                      {/* Left: Square/Rounded Image */}
                      <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-white/[0.06] bg-zinc-950">
                        <img
                          src={insight.image ?? undefined}
                          alt={insight.title}
                          className="w-full h-full object-cover brightness-90 group-hover/item:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Right: Title and Date */}
                      <div className="flex-1 min-w-0 space-y-2">
                        <h4 className="text-sm md:text-base font-bold text-zinc-200 group-hover/item:text-rose-400 transition-colors leading-snug line-clamp-2">
                          {insight.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
                          <span>{insight.date}</span>
                          <span>•</span>
                          <span>{insight.readTime} min read</span>
                        </div>
                      </div>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
