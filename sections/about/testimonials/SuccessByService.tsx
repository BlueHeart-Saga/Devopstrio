"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";
import Link from "next/link";

export const SuccessByService = () => {
  const [posts, setPosts] = useState<TransformedPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInsights() {
      try {
        setLoading(true);
        const data = await insightsApi.getAllPosts(6);
        setPosts(data || []);
      } catch (err) {
        console.error("Failed to load insights:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchInsights();
  }, []);

  if (loading) {
    return (
      <section className="py-16 sm:py-24 bg-black relative overflow-hidden min-h-[40vh] flex items-center justify-center font-sans">
        <div className="text-zinc-400 font-mono animate-pulse">Loading insights...</div>
      </section>
    );
  }

  if (!posts || posts.length === 0) return null;

  const featured = posts[0];
  const rest = posts.slice(1, 4);

  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden font-sans border-t border-zinc-900">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Semibold Header, Subtitle Removed */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans"
          >
            Insights & <span className="text-rose-600 font-semibold">Success Stories</span>
          </motion.h2>
        </div>

        {/* Featured Large Card */}
        {featured && (
          <motion.a 
            href={`/insights/${featured.category?.slug || "general"}/${featured.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-950/90 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col md:flex-row mb-8 group hover:border-rose-500/40 transition-all duration-300 shadow-2xl block"
          >
            <div className="w-full md:w-[55%] relative h-[300px] md:h-auto overflow-hidden bg-zinc-950 shrink-0">
              <img 
                src={featured.image || "/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.png"} 
                alt={featured.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-950 md:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950 md:hidden block" />
            </div>
            
            <div className="w-full md:w-[45%] p-8 sm:p-12 flex flex-col justify-center relative z-10 bg-zinc-950">
              <div className="mb-4 self-start">
                <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs font-bold font-mono tracking-wider uppercase text-rose-400 border border-zinc-800">
                  {featured.category?.name || "Technology"}
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 tracking-tight leading-snug group-hover:text-rose-400 transition-colors font-sans">
                {featured.title}
              </h3>
              
              <p className="text-zinc-200 text-base leading-relaxed mb-8 line-clamp-3 font-normal font-sans">
                {featured.excerpt}
              </p>
              
              <div className="mt-auto flex items-center justify-between border-t border-zinc-800/80 pt-4">
                <div className="flex items-center gap-3">
                   <span className="text-rose-500 font-bold text-sm font-mono">{featured.date}</span>
                   <span className="text-zinc-400 text-xs font-sans">
                     {featured.readTime} min read
                   </span>
                </div>
              </div>
            </div>
          </motion.a>
        )}

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rest.map((area, idx) => (
            <motion.a 
              key={area.id || idx}
              href={`/insights/${area.category?.slug || "general"}/${area.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-950/80 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col group hover:border-rose-500/40 transition-all duration-300 shadow-xl block"
            >
              <div className="relative h-[220px] w-full overflow-hidden bg-zinc-950 shrink-0">
                <img 
                  src={area.image || "/assets/common/90361fed0bb781d7c86e451995b4dbce-1.png"} 
                  alt={area.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950" />
                
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-xs font-bold font-mono tracking-wider uppercase text-emerald-400 border border-zinc-800">
                    {area.category?.name || "Technology"}
                  </span>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 leading-snug group-hover:text-rose-400 transition-colors tracking-tight line-clamp-2 font-sans">
                  {area.title}
                </h3>
                {/* <p className="text-zinc-200 text-base leading-relaxed mb-6 flex-1 line-clamp-3 font-normal font-sans">
                  {area.excerpt}
                </p> */}
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-800/80">
                  <span className="text-rose-500 font-bold text-sm font-mono">{area.date}</span>
                  <span className="text-zinc-400 text-xs font-sans">{area.readTime} min read</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-lg font-sans"
          >
            View All Insights &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};
