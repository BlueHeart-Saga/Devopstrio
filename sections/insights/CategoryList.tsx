"use client";

import React from "react";
import Link from "next/link";
import { Eye, BookOpen, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TransformedPost } from "@/lib/insightsApi";

interface CategoryListProps {
  posts: TransformedPost[];
  categorySlug: string;
}

export function CategoryList({ posts, categorySlug }: CategoryListProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left space-y-12">
        <Reveal>
          <div className="border-b border-zinc-900/60 pb-8">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-2 block drop-shadow-md">
              Collection
            </span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-md">
              All Publications in this Category
            </h3>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, idx) => {
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
              <Reveal key={post.id} delay={idx * 0.03} className="h-full">
                <Link
                  href={`/insights/${categorySlug}/${post.id}`}
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
      </div>
    </section>
  );
}
