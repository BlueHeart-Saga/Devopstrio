"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Clock, ArrowUpRight, ArrowRight, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TransformedPost } from "@/lib/insightsApi";
import { motion, useScroll, useTransform } from "framer-motion";

interface FeaturedHighlightsProps {
  posts: TransformedPost[];
}

export function FeaturedHighlights({ posts }: FeaturedHighlightsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If reached the end, scroll back to start, else scroll right by roughly one card width
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const featuredHighlights = posts.filter(p => p.featured);
  // We need at least 1 main post and a few scroll posts
  const mainPost = featuredHighlights.length > 0 ? featuredHighlights[0] : posts[0];
  const scrollPosts = featuredHighlights.length > 1 ? featuredHighlights.slice(1, 6) : posts.slice(1, 6);

  if (!mainPost) return null;

  const getFallbackImage = (index: number) => {
    const images = [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    ];
    return images[index % images.length];
  };

  return (
    <section className="py-24 bg-[#030303] border-b border-zinc-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-center mb-12">
        <Reveal>
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-4 font-bold border border-zinc-800 rounded-full px-3 py-1 w-max mx-auto bg-zinc-950">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            At Devopstrio, we move beyond "quick fixes." We believe <span className="text-zinc-500 font-medium">true innovation is found at the intersection of deep engineering, strategic foresight, and sustainable technology.</span>
          </h2>
        </Reveal>
      </div>

      {/* Top Carousel Scroll */}
      <div className="w-full relative mb-12 pb-6">
        <div ref={scrollRef} className="flex overflow-x-auto gap-6 px-12 xl:px-8 snap-x snap-mandatory scrollbar-hide pb-8 pt-4" style={{ scrollBehavior: 'smooth' }}>
          {scrollPosts.map((post, idx) => {
            const imageSrc = (post as any).image || getFallbackImage(idx);
            return (
              <Link
                key={post.id}
                href={`/insights/${post.category.slug}/${post.id}`}
                className="snap-center shrink-0 w-[280px] sm:w-[320px] md:w-[380px] flex flex-col bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-3 group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-[0_20px_40px_rgba(225,29,72,0.08)]"
              >
                {/* Inset Image */}
                <div className="w-full h-48 md:h-52 overflow-hidden rounded-2xl mb-5">
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
                  
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium line-clamp-3 mb-6 flex-1">
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
            );
          })}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-4">
          <Link 
            href="/insights" 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 transition-colors hover:border-rose-500/50"
          >
            Explore all insights <div className="w-5 h-5 rounded-full bg-rose-600 flex items-center justify-center"><ArrowRight size={12} className="text-white"/></div>
          </Link>
        </div>
      </div>

      {/* Main Big Card */}
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 mt-20">
        <Reveal delay={0.2}>
          <Link 
            href={`/insights/${mainPost.category.slug}/${mainPost.id}`}
            className="group relative w-full rounded-[40px] overflow-hidden bg-zinc-950 border border-zinc-800 flex flex-col md:block shadow-2xl transition-all duration-700 hover:shadow-[0_30px_60px_rgba(225,29,72,0.15)] hover:border-zinc-700"
          >
            
            {/* Left Content Inset Card */}
            <div className="relative w-full md:w-[60%] p-8 md:p-12 lg:p-14 flex flex-col justify-center bg-[#0a0a0a] transition-all duration-700 ease-in-out group-hover:bg-transparent group-hover:backdrop-blur-none z-10 min-h-[350px] md:min-h-[400px] rounded-[40px] md:rounded-none md:rounded-r-[60px] group-hover:md:rounded-r-none border-b md:border-b-0 md:border-r border-zinc-800/80 group-hover:border-transparent">
              
              {/* Text Wrapper (Fades out on hover but keeps layout space) */}
              <div className="flex flex-col transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:-translate-y-8 group-hover:pointer-events-none">
                <span className="inline-block px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-bold tracking-widest text-zinc-400 uppercase w-max mb-8">
                  Featured Highlight
                </span>
                
                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-6 leading-[1.1] tracking-tight">
                  {mainPost.title}
                </h2>
                
                <div className="space-y-6 mb-10">
                  <div className="border-l-2 border-rose-500 pl-4">
                    <h4 className="text-sm font-bold text-white mb-1">Strategic Depth</h4>
                    <p className="text-xs font-medium text-zinc-500 leading-relaxed">{mainPost.excerpt}</p>
                  </div>
                  <div className="border-l-2 border-zinc-800 pl-4">
                    <h4 className="text-sm font-bold text-white mb-1">Expert Perspectives</h4>
                    <p className="text-xs font-medium text-zinc-500 leading-relaxed">Read actionable insights curated by Devopstrio principal architects and industry leaders.</p>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-black group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 w-max shadow-lg group-hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]">
                Read Full Article <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center"><ArrowUpRight size={14} className="text-white"/></div>
              </div>
            </div>

            {/* Right Image (Expands on Hover) */}
            <div className="relative md:absolute right-0 top-0 bottom-0 w-full md:w-[50%] h-[300px] md:h-auto z-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:md:w-full">
              <img 
                src={(mainPost as any).image || getFallbackImage(0)} 
                alt={mainPost.title} 
                className="w-full h-full object-cover object-center mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100" 
              />
              {/* Dark gradient to blend the edge into the left card (fades out on hover) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700 hidden md:block w-48" />
              {/* Subtle dark overlay to ensure text is always readable when expanded */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
            
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
