"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, Eye, BookOpen, HelpCircle, ChevronRight } from "lucide-react";
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
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20 pt-8">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
              Knowledge Base
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
              Insights & <span className="text-rose-500">Articles</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-2xl mx-auto drop-shadow-md">
              Explore our latest thinking, strategies, and industry perspectives to accelerate your digital transformation. Read about our <Link href="/services" className="text-rose-550 hover:underline">managed services</Link> and <Link href="/about/overview" className="text-rose-550 hover:underline">company overview</Link>.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 mb-12">
          
          {/* Categories filters */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => { setActiveCategory("all"); setVisibleCount(6); }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === "all"
                  ? "border-rose-600 bg-rose-600 text-white shadow-[0_4px_14px_0_rgba(225,29,72,0.39)]"
                  : "border-zinc-800 bg-[#0a0a0a] text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-[#111]"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => { setActiveCategory(cat.slug); setVisibleCount(6); }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat.slug
                    ? "border-rose-600 bg-rose-600 text-white shadow-[0_4px_14px_0_rgba(225,29,72,0.39)]"
                    : "border-zinc-800 bg-[#0a0a0a] text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-[#111]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input bar */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-full pl-12 pr-6 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all shadow-inner"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPosts.slice(0, visibleCount).map((post, idx) => {
                const getFallbackImage = (i: number) => {
                  const images = [
                    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
                  ];
                  return images[i % images.length];
                };
                const imageSrc = post.image || getFallbackImage(idx);

                return (
                  <Reveal key={post.id} delay={idx * 0.05} className="h-full">
                    <Link
                      href={`/insights/${post.category.slug}/${post.id}`}
                      className="flex flex-col bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-3 group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-[0_20px_40px_rgba(225,29,72,0.08)] text-left h-full"
                    >
                      {/* Inset Image */}
                      <div className="w-full h-48 md:h-56 overflow-hidden rounded-2xl mb-5 bg-zinc-900">
                        <img 
                          src={imageSrc} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                        />
                      </div>
                      
                      {/* Content Area */}
                      <div className="px-3 pb-3 flex flex-col flex-1">
                        <span className="text-[10px] font-bold tracking-widest text-rose-500 uppercase mb-3 block">
                          {post.category.name}
                        </span>
                        
                        <h3 className="text-white font-bold text-lg md:text-xl leading-snug group-hover:text-rose-400 transition-colors mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-zinc-400 text-sm leading-relaxed font-medium line-clamp-3 mb-6 flex-1">
                          {post.excerpt}
                        </p>
                        
                        {/* Footer CTA */}
                        <div className="flex items-center gap-3 mt-auto pt-2">
                          <div className="w-8 h-8 rounded-lg bg-rose-950 border border-rose-900 group-hover:bg-rose-600 group-hover:border-rose-500 flex items-center justify-center transition-all duration-300 shadow-md">
                            <ChevronRight size={14} className="text-rose-500 group-hover:text-white transition-colors" />
                          </div>
                          <span className="text-xs font-bold text-zinc-300 group-hover:text-rose-400 tracking-wide transition-colors">
                            Read article
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
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
