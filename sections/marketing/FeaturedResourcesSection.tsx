"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ChevronLeft, ChevronRight, Calendar, Eye, Download } from "lucide-react";

export function FeaturedResourcesSection({
  resources,
  getTypeBadge,
  onPreview,
  onDownload,
}: {
  resources: any[];
  getTypeBadge: (type: string) => React.ReactNode;
  onPreview: (item: any) => void;
  onDownload: (item: any, e?: React.MouseEvent) => void;
}) {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

  return (
    <section id="featured-resources" className="scroll-mt-36">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-rose-500" />
            Featured Resources & Spotlight
          </h2>
          <p className="text-sm text-zinc-400 mt-1">High-impact corporate decks, GenAI framework papers, and global capabilities.</p>
        </div>

        {/* Carousel Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveCarouselIndex((prev) => (prev === 0 ? resources.length - 1 : prev - 1))}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveCarouselIndex((prev) => (prev + 1) % resources.length)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Active Featured Slide */}
      {resources.map((item, idx) => {
        if (idx !== activeCarouselIndex) return null;
        return (
          <div
            key={item.id}
            className="p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-rose-950/30 border border-zinc-800 hover:border-rose-500/30 transition-all shadow-2xl relative overflow-hidden group grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            {/* Left details */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-600 text-white tracking-wide">
                  {item.badge}
                </span>
                {getTypeBadge(item.type)}
                <span className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Updated {item.updated}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onPreview(item)}
                  className="px-5 py-2.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" /> Preview Document
                </button>
                <button
                  onClick={(e) => onDownload(item, e)}
                  className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download ({item.size})
                </button>
              </div>
            </div>

            {/* Right visual preview */}
            <div className="md:col-span-5 relative h-56 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <Image
                src={item.image || "/assets/common/09ff7846bc8c9998745688779c09f88d 1.png"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-300">
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  {item.downloads} Downloads
                </span>
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  {item.category}
                </span>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {resources.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCarouselIndex(idx)}
            className={`h-2 rounded-full transition-all ${idx === activeCarouselIndex ? "w-8 bg-rose-600" : "w-2 bg-zinc-800 hover:bg-zinc-700"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
