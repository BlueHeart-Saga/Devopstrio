"use client";

import React from "react";
import Link from "next/link";
import { Eye, BookOpen } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TransformedPost } from "@/lib/insightsApi";

interface CategoryListProps {
  posts: TransformedPost[];
  categorySlug: string;
}

export function CategoryList({ posts, categorySlug }: CategoryListProps) {
  if (posts.length === 0) return null;

  return (
    <section className="px-6 py-12">
      <div className="max-w-site mx-auto text-left space-y-8">
        <Reveal>
          <h3 className="text-xs font-mono tracking-widest text-zinc-550 uppercase">
            All Publications in this Category
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
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
                    <div className="flex items-center gap-4 text-[10px] text-zinc-555 font-mono mb-4">
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

                  <div className="border-t border-zinc-900/60 pt-4 mt-auto flex items-center justify-between text-[10px] text-zinc-555">
                    <span>By {post.author}</span>
                    <span className="flex items-center gap-1 font-mono"><Eye size={10} /> {post.views}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
