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
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden min-h-[60vh] flex items-center justify-center">
        <div className="text-zinc-500 animate-pulse">Loading insights...</div>
      </section>
    );
  }

  if (!posts || posts.length === 0) return null;

  const featured = posts[0];
  const rest = posts.slice(1, 4);

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block"
          >
            Insights & Success
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white"
          >
            Practical reads to help you move <span className="italic font-serif font-medium">faster.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium"
          >
            Deep dives and case studies highlighting how we engineer robust, scalable solutions for leading enterprises. Learn how our <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud services</Link> and <Link href="/services/software-development" className="text-rose-500 hover:underline font-bold">software engineering</Link> teams drive success.
          </motion.p>
        </div>

        {/* Featured Large Card */}
        {featured && (
          <motion.a 
            href={`/insights/${featured.category?.slug || "general"}/${featured.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/60 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col md:flex-row mb-6 lg:mb-8 group hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors shadow-2xl block"
          >
            {/* Image Side with gradient fade */}
            <div className="w-full md:w-[55%] relative h-[300px] md:h-auto overflow-hidden bg-zinc-950 shrink-0">
              <img 
                src={featured.image || "/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca 1.png"} 
                alt={featured.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-900/90 md:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 md:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900/90 md:hidden block" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900 md:hidden block" />
            </div>
            
            {/* Content Side */}
            <div className="w-full md:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 -mt-10 md:mt-0 bg-gradient-to-t from-zinc-900 via-zinc-900 to-transparent md:bg-none">
              <div className="mb-6 self-start">
                <span className="px-3 py-1 bg-zinc-800/80 backdrop-blur-md rounded-full text-[11px] font-bold tracking-wider uppercase text-zinc-300 border border-zinc-700">
                  {featured.category?.name || "Technology"}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-[34px] font-semibold text-white mb-6 tracking-tight leading-[1.2] group-hover:text-rose-400 transition-colors">
                {featured.title}
              </h3>
              
              <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed mb-12 line-clamp-3">
                {featured.excerpt}
              </p>
              
              <div className="mt-auto flex items-center justify-between border-t border-zinc-800/60 pt-6">
                <div className="flex items-center gap-2.5">
                   <span className="text-white font-bold text-sm">{featured.date}</span>
                   <span className="text-zinc-500 text-xs flex items-center gap-1.5">
                     <span className="w-1 h-1 rounded-full bg-zinc-700" /> 
                     {featured.readTime} min read
                   </span>
                </div>
                <div className="text-zinc-500 font-serif italic text-sm tracking-wide">
                  by {featured.author || "Devopstrio"}
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
              className="bg-zinc-900/60 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col group hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors shadow-xl block"
            >
              {/* Image Header with Bottom Gradient */}
              <div className="relative h-[220px] w-full overflow-hidden bg-zinc-950 shrink-0">
                <img 
                  src={area.image || "/assets/common/90361fed0bb781d7c86e451995b4dbce 1.png"} 
                  alt={area.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/20 to-zinc-900/90" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900" />
                
                <div className="absolute top-5 right-5">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider uppercase text-white border border-white/10 shadow-lg">
                    {area.category?.name || "Technology"}
                  </span>
                </div>
              </div>
              
              {/* Content Body */}
              <div className="p-8 pt-2 flex flex-col flex-1 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4 leading-snug group-hover:text-rose-400 transition-colors tracking-tight line-clamp-2">
                  {area.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                  {area.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-zinc-800/60">
                  <div className="flex items-center gap-2">
                     <span className="text-rose-500 font-bold text-sm">{area.date}</span>
                     <span className="text-zinc-500 text-xs flex items-center gap-1.5">
                       <span className="w-1 h-1 rounded-full bg-zinc-700" /> 
                       {area.readTime} min read
                     </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded-full font-semibold transition-all duration-300 shadow-lg group hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:-translate-y-0.5"
          >
            View all insights
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
