"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, BookOpen, ChevronRight, X, Download, Share2, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TransformedPost } from "@/lib/insightsApi";
import { motion, AnimatePresence } from "framer-motion";

interface CategoryListProps {
  posts: TransformedPost[];
  categorySlug: string;
}

export function CategoryList({ posts, categorySlug }: CategoryListProps) {
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string; postId: string } | null>(null);
  const isPdfCategory = categorySlug === "white-paper" || categorySlug === "our-offerings";

  if (posts.length === 0) return null;

  return (
    <>
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

          <div
            className={
              isPdfCategory
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            }
          >
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

              // Check for PDF document block
              const docBlock = post.rawBlocks?.find(b => b.type === "document");
              const hasPdf = !!docBlock;
              const docUrl = docBlock?.data?.file_id
                ? `/api/insights-proxy/api/documents/${docBlock.data.file_id}`
                : docBlock?.data?.url || "";

              return (
                <Reveal key={post.id} delay={idx * 0.03} className="h-full">
                  <Link
                    href={`/insights/${categorySlug}/${post.id}`}
                    className={
                      isPdfCategory
                        ? "flex flex-col bg-zinc-950/60 border border-zinc-850 p-4 group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-rose-500/40 hover:shadow-[0_0_30px_rgba(225,29,72,0.15)] text-left h-full rounded-none relative overflow-hidden"
                        : "flex flex-col bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-3 group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-[0_20px_40px_rgba(225,29,72,0.08)] text-left h-full"
                    }
                  >
                    {/* Inset Image */}
                    <div
                      className={
                        isPdfCategory
                          ? "w-full h-40 md:h-44 overflow-hidden rounded-none mb-5 bg-zinc-950 border border-zinc-900"
                          : "w-full h-48 md:h-56 overflow-hidden rounded-2xl mb-5 bg-zinc-900"
                      }
                    >
                      <img 
                        src={imageSrc} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                      />
                    </div>
                    
                    {/* Content Area */}
                    <div className="px-3 pb-3 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold tracking-widest text-rose-500 uppercase block">
                          {post.category.name}
                        </span>
                        {isPdfCategory && hasPdf && (
                          <span className="text-[9px] font-mono font-bold tracking-widest text-rose-500/90 border border-rose-500/30 px-2 py-0.5 rounded-none uppercase bg-rose-950/20">
                            Premium Doc
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-white font-bold text-lg md:text-xl leading-snug group-hover:text-rose-400 transition-colors mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-zinc-400 text-sm leading-relaxed font-medium line-clamp-3 mb-6 flex-1">
                        {post.excerpt}
                      </p>
                      
                      {/* Footer CTA */}
                      <div className="flex items-center justify-between mt-auto pt-2">
                        <div className="flex items-center gap-3">
                          <div
                            className={
                              isPdfCategory
                                ? "w-8 h-8 bg-zinc-900 border border-zinc-800 group-hover:bg-rose-600 group-hover:border-rose-500 flex items-center justify-center transition-all duration-300 rounded-none shadow-md"
                                : "w-8 h-8 rounded-lg bg-rose-950 border border-rose-900 group-hover:bg-rose-600 group-hover:border-rose-500 flex items-center justify-center transition-all duration-300 shadow-md"
                            }
                          >
                            <ChevronRight size={14} className="text-rose-500 group-hover:text-white transition-colors" />
                          </div>
                          <span className="text-xs font-bold text-zinc-300 group-hover:text-rose-400 tracking-wide transition-colors">
                            Read article
                          </span>
                        </div>

                        {isPdfCategory && hasPdf && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setSelectedPdf({ url: docUrl, title: post.title, postId: post.id });
                            }}
                            className={
                              isPdfCategory
                                ? "flex items-center gap-1.5 px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 hover:bg-rose-600 hover:border-rose-500 text-[10px] font-bold uppercase tracking-wider text-rose-500 hover:text-white transition-all rounded-none"
                                : "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-rose-900 text-[10px] font-bold uppercase tracking-wider text-rose-500 transition-all hover:scale-105"
                            }
                          >
                            <Eye size={12} />
                            <span>Open Doc</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PDF Modal Reader Overlay */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 md:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`relative w-full max-w-3xl h-[60vh] bg-zinc-950 border border-zinc-850 flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] ${
                isPdfCategory ? "rounded-none" : "rounded-2xl"
              }`}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-zinc-950 border-b border-zinc-900 text-white">
                <h4 className="text-sm md:text-base font-semibold text-zinc-200 line-clamp-1 pr-4">
                  {selectedPdf.title}
                </h4>
                
                <div className="flex items-center gap-3">
                  <Link
                    href={`/insights/${categorySlug}/${selectedPdf.postId}`}
                    className={`px-3 py-1.5 border border-rose-500/30 hover:border-rose-500 bg-rose-950/20 hover:bg-rose-600 text-rose-400 hover:text-white transition-all text-[10px] font-bold uppercase tracking-wider ${
                      isPdfCategory ? "rounded-none" : "rounded-lg"
                    }`}
                  >
                    Read Article
                  </Link>

                  <a
                    href={selectedPdf.url}
                    download
                    className={`p-2 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors ${
                      isPdfCategory ? "rounded-none" : "rounded-lg"
                    }`}
                    title="Download PDF"
                  >
                    <Download size={18} />
                  </a>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.origin + selectedPdf.url);
                      alert("Document link copied to clipboard!");
                    }}
                    className={`p-2 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors ${
                      isPdfCategory ? "rounded-none" : "rounded-lg"
                    }`}
                    title="Share Document"
                  >
                    <Share2 size={18} />
                  </button>

                  <a
                    href={selectedPdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors ${
                      isPdfCategory ? "rounded-none" : "rounded-lg"
                    }`}
                    title="Open in new tab"
                  >
                    <ExternalLink size={18} />
                  </a>
                  
                  <span className="text-zinc-800 px-1">|</span>
                  
                  <button
                    onClick={() => setSelectedPdf(null)}
                    className={`p-2 bg-rose-950/30 hover:bg-rose-900/50 text-rose-500 hover:text-rose-450 transition-colors ${
                      isPdfCategory ? "rounded-none" : "rounded-lg"
                    }`}
                    title="Close Reader"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              
              {/* Modal PDF Viewer Body */}
              <div className="flex-1 bg-zinc-950 relative">
                <iframe
                  src={`${selectedPdf.url}#toolbar=0`}
                  className="w-full h-full border-0 bg-zinc-950"
                  title={selectedPdf.title}
                />
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
