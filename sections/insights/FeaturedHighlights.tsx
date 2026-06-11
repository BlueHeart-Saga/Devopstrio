"use client";

import React from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TransformedPost } from "@/lib/insightsApi";

interface FeaturedHighlightsProps {
  posts: TransformedPost[];
}

export function FeaturedHighlights({ posts }: FeaturedHighlightsProps) {
  const featuredHighlight = posts.filter(p => p.featured).slice(0, 3);
  const displayFeatured = featuredHighlight.length > 0 ? featuredHighlight : posts.slice(0, 3);

  if (displayFeatured.length === 0) return null;

  return (
    <section className="py-16 bg-black border-b border-zinc-900/60">
      <div className="max-w-site mx-auto px-6 text-left">
        <Reveal className="mb-8">
          <span className="text-[10px] font-mono tracking-widest text-zinc-550 uppercase block mb-3 font-bold">
            Featured Highlights
          </span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayFeatured.map((post, idx) => (
            <Reveal key={post.id} delay={idx * 0.05} className="h-full">
              <Link
                href={`/insights/${post.category.slug}/${post.id}`}
                className="group flex flex-col justify-between h-full bg-zinc-950/20 border border-zinc-900 rounded-3xl p-6 hover:border-rose-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-semibold bg-zinc-900 border border-zinc-850 text-zinc-300 uppercase tracking-wider">
                      {post.category.name}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-zinc-550 font-mono">
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
                  <span className="text-[10px] text-zinc-550 font-mono">{post.date}</span>
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
  );
}
