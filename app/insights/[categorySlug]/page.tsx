"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Clock, Eye, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";
import { Reveal } from "@/components/ui/Reveal";

interface CategoryPageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

export default function CategoryLandingPage({ params }: CategoryPageProps) {
  const resolvedParams = React.use(params);
  const categorySlug = resolvedParams.categorySlug;

  const [posts, setPosts] = useState<TransformedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    async function loadCategoryData() {
      try {
        setLoading(true);
        const allPosts = await insightsApi.getAllPosts(100);
        
        // Filter posts by category
        const filtered = allPosts.filter(
          (p) => p.category && p.category.slug === categorySlug
        );
        setPosts(filtered);

        if (filtered.length > 0) {
          setCategoryName(filtered[0].category.name);
        } else {
          // Format category slug nicely as fallback name
          const fallback = categorySlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          setCategoryName(fallback);
        }
      } catch (err) {
        console.error("Failed to load category posts:", err);
      } finally {
        setLoading(false);
      }
    }
    loadCategoryData();
  }, [categorySlug]);

  // Find most viewed post as featured
  const featuredPost = posts.reduce<TransformedPost | null>((max, current) => {
    if (!max) return current;
    return (current.views || 0) > (max.views || 0) ? current : max;
  }, null);

  const adjacentPosts = featuredPost 
    ? posts.filter((p) => p.id !== featuredPost.id) 
    : posts;

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(206,36,83,0.04),transparent_70%)] pointer-events-none" />

      <section className="relative py-12 px-6">
        <div className="max-w-site mx-auto relative z-10 text-left">
          {/* Back Navigation Link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-550 hover:text-rose-500 transition-colors mb-8 group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> BACK TO INSIGHTS HUB
          </Link>

          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#ce2453] to-[#e79e57]"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase bg-gradient-to-r from-[#ce2453] to-[#e79e57] bg-clip-text text-transparent">
                Category Archive
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
              Category: <span className="font-semibold text-rose-500">{categoryName}</span>
            </h1>
            <p className="text-zinc-550 text-xs font-mono mb-12">
              Viewing all publications grouped under &apos;{categorySlug}&apos;
            </p>
          </Reveal>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
              <div className="w-8 h-8 rounded-full border-2 border-zinc-800 border-t-rose-600 animate-spin mb-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Loading Publications...</span>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-zinc-900 rounded-3xl">
              <BookOpen className="mx-auto text-zinc-700 mb-4" size={32} />
              <h3 className="text-sm font-semibold text-zinc-400 mb-1">No publications found</h3>
              <p className="text-xs text-zinc-550">We haven&apos;t published any articles in this category yet.</p>
            </div>
          ) : (
            <div className="space-y-16">
              {/* Highlight Hero card (Double column wide) */}
              {featuredPost && (
                <Reveal>
                  <Link
                    href={`/insights/${categorySlug}/${featuredPost.id}`}
                    className="group grid grid-cols-1 lg:grid-cols-2 bg-zinc-950/20 border border-zinc-900/80 rounded-3xl overflow-hidden hover:border-zinc-800 transition-all duration-300"
                  >
                    {/* Left image cover */}
                    <div className="h-64 lg:h-full min-h-[300px] relative bg-zinc-950 overflow-hidden border-r border-zinc-900/40">
                      {featuredPost.image ? (
                        <img
                          src={featuredPost.image}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#ce2453]/10 to-[#e79e57]/5 flex items-center justify-center">
                          <BookOpen size={36} className="text-rose-500/20" />
                        </div>
                      )}
                      <span className="absolute top-6 left-6 px-3 py-1 rounded text-[9px] font-bold bg-black/85 border border-zinc-800 text-zinc-450 uppercase tracking-widest">
                        Most Viewed
                      </span>
                    </div>

                    {/* Right details */}
                    <div className="p-8 lg:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-550 mb-6">
                          <span className="flex items-center gap-1"><Calendar size={11} /> {featuredPost.date}</span>
                          <span className="flex items-center gap-1"><Clock size={11} /> {featuredPost.readTime} min read</span>
                        </div>

                        <h2 className="text-xl lg:text-2xl font-semibold text-zinc-200 group-hover:text-rose-500 transition-colors mb-4 leading-snug">
                          {featuredPost.title}
                        </h2>

                        <p className="text-xs text-zinc-450 leading-relaxed font-light mb-8">
                          {featuredPost.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-zinc-900/60 pt-6 mt-auto">
                        <span className="text-[10px] text-zinc-500 font-mono">By {featuredPost.author}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Read full article <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              )}

              {/* Grid view of all other publications */}
              {adjacentPosts.length > 0 && (
                <div className="space-y-8">
                  <Reveal>
                    <h3 className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                      All Publications in this Category
                    </h3>
                  </Reveal>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {adjacentPosts.map((post, idx) => (
                      <Reveal key={post.id} delay={idx * 0.03}>
                        <Link
                          href={`/insights/${categorySlug}/${post.id}`}
                          className="group flex flex-col h-full bg-zinc-950/10 border border-zinc-900/80 rounded-2xl overflow-hidden hover:border-zinc-800 transition-all duration-300 text-left"
                        >
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
                          </div>

                          <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                              <div className="flex items-center gap-4 text-[10px] text-zinc-550 font-mono mb-4">
                                <span>{post.date}</span>
                                <span>{post.readTime} min read</span>
                              </div>

                              <h4 className="text-xs font-semibold text-zinc-200 group-hover:text-rose-500 transition-colors mb-3 leading-snug">
                                {post.title}
                              </h4>

                              <p className="text-[11px] text-zinc-450 leading-relaxed font-light mb-6 line-clamp-2">
                                {post.excerpt}
                              </p>
                            </div>

                            <div className="border-t border-zinc-900/60 pt-4 mt-auto flex items-center justify-between text-[10px] text-zinc-550">
                              <span>By {post.author}</span>
                              <span className="flex items-center gap-1 font-mono"><Eye size={10} /> {post.views}</span>
                            </div>
                          </div>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
