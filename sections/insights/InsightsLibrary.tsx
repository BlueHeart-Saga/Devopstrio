"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, Eye, BookOpen, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TransformedPost } from "@/lib/insightsApi";

interface InsightsLibraryProps {
  posts: TransformedPost[];
  loading: boolean;
}

export function InsightsLibrary({ posts, loading }: InsightsLibraryProps) {
  const [categories, setCategories] = useState<{ slug: string; name: string }[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  // Derive categories from posts
  useEffect(() => {
    if (posts && posts.length > 0) {
      const uniqueCats: { slug: string; name: string }[] = [];
      const seen = new Set<string>();
      posts.forEach((post) => {
        if (post.category && post.category.slug && !seen.has(post.category.slug)) {
          seen.add(post.category.slug);
          uniqueCats.push({
            slug: post.category.slug,
            name: post.category.name
          });
        }
      });
      setCategories(uniqueCats);
    }
  }, [posts]);

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category.slug === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
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
            <div className="w-8 h-8 rounded-full border-2 border-zinc-880 border-t-rose-600 animate-spin mb-4" />
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
                  className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Load More Publications
                </button>
              </Reveal>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
