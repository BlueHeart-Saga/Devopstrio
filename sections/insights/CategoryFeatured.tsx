"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TransformedPost } from "@/lib/insightsApi";

interface CategoryFeaturedProps {
  featuredPost: TransformedPost | null;
  categorySlug: string;
}

export function CategoryFeatured({ featuredPost, categorySlug }: CategoryFeaturedProps) {
  if (!featuredPost) return null;

  return (
    <section className="px-6 py-4">
      <div className="max-w-site mx-auto">
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
                <span className="text-[10px] text-zinc-550 font-mono">By {featuredPost.author}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read full article <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
