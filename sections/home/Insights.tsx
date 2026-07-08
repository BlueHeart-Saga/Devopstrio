"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";
import Link from "next/link";

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
    <section className="w-full pt-10 md:pt-14 pb-12 md:pb-16 bg-[#030303] text-white relative">
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
          <Reveal className="w-full h-full">
            <div className="group rounded-[2.5rem] border border-zinc-800/80 bg-[#0A0A0A] p-2 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.6)] transition-all duration-500 flex flex-col h-full min-h-[520px]">
              
              {/* Padded Inset Image */}
              <div className="relative w-full h-[280px] md:h-[320px] rounded-[2rem] overflow-hidden shrink-0">
                <img
                  src={latestPost.image ?? undefined}
                  alt={latestPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Bottom Content Area */}
              <div className="flex flex-col flex-1 p-4 md:p-6 mt-2 justify-end">
                <div className="mb-5">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold text-rose-400 uppercase tracking-wider">
                    {latestPost.category?.name || "Technology"}
                  </span>
                </div>

                <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-rose-400 transition-colors line-clamp-3 mb-8">
                  <a href={`/insights/${latestPost.category?.slug || "general"}/${latestPost.id}`}>
                    {latestPost.title}
                  </a>
                </h3>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-800/60">
                  <div className="flex items-center gap-3 text-sm font-medium text-zinc-400">
                    <span>{latestPost.date}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span>{latestPost.readTime} min read</span>
                  </div>
                  
                  <div className="w-10 h-10 shrink-0 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:bg-rose-500 group-hover:border-rose-500 group-hover:text-white transition-all duration-300">
                     <ArrowUpRight size={18} />
                  </div>
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

        {/* Premium Single Line Quote */}
        <Reveal>
          <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/[0.04] text-center w-full">
            <p className="text-base md:text-lg font-light text-zinc-400 tracking-wide">
              <span className="text-rose-500 font-serif text-xl leading-none align-middle mr-1">"</span>
              Knowledge shared is the foundation of <Link href="/about" className="text-zinc-300 hover:text-rose-500 hover:underline">digital excellence</Link> and <Link href="/insights" className="font-medium text-zinc-200 hover:text-rose-500 hover:underline">continuous innovation.</Link>
              <span className="text-rose-500 font-serif text-xl leading-none align-middle ml-1">"</span>
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
