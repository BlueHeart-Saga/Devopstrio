"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, Eye, Heart, ArrowRight, BookOpen, ChevronRight, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";
import { Reveal } from "@/components/ui/Reveal";

const milestoneJourney = [
  { year: "2019", title: "Corporate Inception", desc: "Started as a cloud scaling advisory firm in London with 5 SRE specialists.", detail: "Established original frameworks for database replication loops." },
  { year: "2021", title: "Enterprise Scaling", desc: "Onboarded first Fortune-500 client and set up dedicated DevOps pipelines.", detail: "Passed SOC-2 compliance checkouts with 100% success rate." },
  { year: "2023", title: "Platform Engineering", desc: "Launched Devopstrio Core Accelerator and automated Terraform templates.", detail: "Reduced average client environment provision times by 80%." },
  { year: "2025", title: "AI-Agents Launch", desc: "Developed first autonomous AI workflow agent for cloud-resource healing.", detail: "Deployed 20+ LLM fine-tuning schedules with Azure OpenAI." },
  { year: "2026", title: "Global Delivery Network", desc: "Established follow-the-sun operations across UK, US, and India hubs.", detail: "Serving 100+ global enterprises with zero downtime SLAs." }
];

export default function InsightsLandingPage() {
  const [posts, setPosts] = useState<TransformedPost[]>([]);
  const [categories, setCategories] = useState<{ slug: string; name: string }[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);

  // Load initial data
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        // Load all posts
        const allPosts = await insightsApi.getAllPosts(100);
        setPosts(allPosts || []);

        // Derive unique categories from posts
        const uniqueCats: { slug: string; name: string }[] = [];
        const seen = new Set<string>();
        allPosts.forEach((post) => {
          if (post.category && post.category.slug && !seen.has(post.category.slug)) {
            seen.add(post.category.slug);
            uniqueCats.push({
              slug: post.category.slug,
              name: post.category.name
            });
          }
        });
        setCategories(uniqueCats);
      } catch (err) {
        console.error("Failed to load insights publications:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category.slug === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredHighlight = posts.filter(p => p.featured).slice(0, 3);
  const displayFeatured = featuredHighlight.length > 0 ? featuredHighlight : posts.slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16">
      {/* Dynamic ambient glowing backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(206,36,83,0.045),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(231,158,87,0.03),transparent_70%)] pointer-events-none" />

      {/* 1. Hero Block */}
      <section className="relative overflow-hidden pt-12 pb-16 px-6">
        <div className="max-w-site mx-auto relative z-10 text-left">
          <nav className="flex items-center gap-2 text-xs font-mono text-zinc-550 mb-8">
            <Link href="/" className="hover:text-rose-500 transition-colors">HOME</Link>
            <ChevronRight size={10} className="text-zinc-700" />
            <span className="text-rose-500 font-bold uppercase">INSIGHTS</span>
          </nav>

          <div className="max-w-4xl">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#ce2453] to-[#e79e57]"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase bg-gradient-to-r from-[#ce2453] to-[#e79e57] bg-clip-text text-transparent">
                  Thought Leadership & Tech Trends
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-6 text-white">
                Our thoughts on <span className="font-semibold bg-gradient-to-r from-[#ce2453] to-[#e79e57] bg-clip-text text-transparent">scaling systems</span> & cloud culture
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light max-w-3xl">
                Explore engineering blueprints, security assessments, platform configurations, and corporate growth narratives written by Devopstrio SRE and platform specialists.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Featured Highlights Carousel */}
      {displayFeatured.length > 0 && (
        <section className="py-8 bg-black">
          <div className="max-w-site mx-auto px-6 text-left">
            <Reveal className="mb-8">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
                Featured Highlights
              </span>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {displayFeatured.map((post, idx) => (
                <Reveal key={post.id} delay={idx * 0.05} className="h-full">
                  <Link
                    href={`/insights/${post.category.slug}/${post.id}`}
                    className="group flex flex-col justify-between h-full bg-zinc-950/30 border border-zinc-900 rounded-3xl p-6 hover:border-zinc-800 hover:bg-zinc-950/60 transition-all duration-300 relative overflow-hidden"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-2.5 py-1 rounded-full text-[9px] font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300 uppercase tracking-wider">
                          {post.category.name}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-zinc-500 font-mono">
                          <Clock size={11} /> {post.readTime} min read
                        </span>
                      </div>

                      <h3 className="text-base font-semibold text-white group-hover:text-rose-500 transition-colors mb-3 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs text-zinc-450 leading-relaxed font-light mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-zinc-900/60 pt-4 mt-auto">
                      <span className="text-[10px] text-zinc-500 font-mono">{post.date}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read post <ArrowRight size={11} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Our Journey Timeline */}
      <section className="py-24 bg-black border-t border-b border-zinc-900/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(231,158,87,0.015),transparent_70%)] pointer-events-none" />
        <div className="max-w-site mx-auto px-6 text-left">
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#ce2453] to-[#e79e57]"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Our Journey
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Narrating our <span className="font-semibold text-rose-500">milestones</span>
            </h2>
          </Reveal>

          {/* Timeline slider grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Connecting line */}
            <div className="absolute top-[38px] left-[5%] right-[5%] h-[1px] bg-zinc-900 hidden md:block" />

            {milestoneJourney.map((m, idx) => (
              <div
                key={m.year}
                className="relative flex flex-col items-start bg-zinc-950/20 border border-zinc-900/60 rounded-2xl p-5 hover:border-zinc-800 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setActiveMilestone(idx)}
                onMouseLeave={() => setActiveMilestone(null)}
              >
                <div className="flex items-center justify-between w-full mb-4 relative z-10">
                  <span className="text-xl font-bold font-mono text-white bg-black border border-zinc-900 px-3 py-1 rounded-full group-hover:border-rose-500/40 transition-colors">
                    {m.year}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 ring-4 ring-rose-950/20" />
                </div>

                <h4 className="text-xs font-semibold text-zinc-200 mb-2">{m.title}</h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-light">{m.desc}</p>

                {/* Tooltip detail block */}
                <AnimatePresence>
                  {activeMilestone === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute z-20 left-4 right-4 bottom-full mb-3 bg-zinc-950 border border-rose-500/30 rounded-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-left"
                    >
                      <span className="text-[9px] font-mono tracking-widest text-rose-500 uppercase block mb-1">
                        Journey Detail
                      </span>
                      <p className="text-[11px] text-zinc-350 leading-relaxed font-light">
                        {m.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Filtering & Search Engine */}
      <section className="py-16 bg-black">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 border-b border-zinc-900/60 pb-8 mb-12">
            
            {/* Categories filters */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => { setActiveCategory("all"); setVisibleCount(6); }}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
                  activeCategory === "all"
                    ? "border-rose-500 bg-rose-600/5 text-white"
                    : "border-zinc-900 bg-zinc-950/20 text-zinc-400 hover:text-white hover:border-zinc-800"
                }`}
              >
                All Articles
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => { setActiveCategory(cat.slug); setVisibleCount(6); }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
                    activeCategory === cat.slug
                      ? "border-rose-500 bg-rose-600/5 text-white"
                      : "border-zinc-900 bg-zinc-950/20 text-zinc-400 hover:text-white hover:border-zinc-800"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input bar */}
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-550" size={14} />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950/30 border border-zinc-900/80 rounded-full pl-10 pr-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-550 focus:outline-none focus:border-rose-500/50 transition-colors"
              />
            </div>

          </div>

          {/* Loader or grid rendering */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
              <div className="w-8 h-8 rounded-full border-2 border-zinc-800 border-t-rose-600 animate-spin mb-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Fetching Publications...</span>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-zinc-900 rounded-3xl">
              <HelpCircle className="mx-auto text-zinc-700 mb-4" size={36} />
              <h3 className="text-sm font-semibold text-zinc-400 mb-1">No publications matched</h3>
              <p className="text-xs text-zinc-550">Try adjusting your filters or search terms.</p>
            </div>
          ) : (
            <div>
              {/* Library Post Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(0, visibleCount).map((post, idx) => (
                  <Reveal key={post.id} delay={idx * 0.03} className="h-full">
                    <Link
                      href={`/insights/${post.category.slug}/${post.id}`}
                      className="group flex flex-col h-full bg-zinc-950/10 border border-zinc-900/80 rounded-2xl overflow-hidden hover:border-zinc-800 transition-all duration-300 text-left"
                    >
                      {/* Image cover placeholder or API visual */}
                      <div className="h-44 relative bg-zinc-950 overflow-hidden border-b border-zinc-900/60">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#ce2453]/10 to-[#e79e57]/5 flex items-center justify-center">
                            <BookOpen size={24} className="text-rose-500/20" />
                          </div>
                        )}
                        <span className="absolute top-4 left-4 px-2 py-0.5 rounded text-[8px] font-bold bg-black/80 border border-zinc-800 text-zinc-400 uppercase tracking-widest">
                          {post.category.name}
                        </span>
                      </div>

                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex items-center gap-4 text-[10px] text-zinc-550 font-mono mb-4">
                            <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                            <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime} min read</span>
                          </div>

                          <h3 className="text-xs font-semibold text-zinc-200 group-hover:text-rose-500 transition-colors mb-3 leading-snug">
                            {post.title}
                          </h3>

                          <p className="text-[11px] text-zinc-450 leading-relaxed font-light mb-6 line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="border-t border-zinc-900/60 pt-4 mt-auto flex items-center justify-between text-[10px] text-zinc-550">
                          <span className="font-light">By {post.author}</span>
                          <span className="flex items-center gap-1 font-mono"><Eye size={10} /> {post.views}</span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>

              {/* Load More Trigger */}
              {visibleCount < filteredPosts.length && (
                <Reveal className="mt-12 text-center">
                  <button
                    onClick={() => setVisibleCount(visibleCount + 6)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-300 border border-zinc-800 bg-transparent hover:border-zinc-700 hover:text-white transition-all duration-300"
                  >
                    Load More Publications
                  </button>
                </Reveal>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
