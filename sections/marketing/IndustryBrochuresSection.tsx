"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Factory, Eye, Download, ChevronRight } from "lucide-react";

export function IndustryBrochuresSection({
  industries = [],
  getTypeBadge,
  onPreview,
  onDownload,
  onShare,
}: {
  industries?: any[];
  getTypeBadge?: (type: string) => React.ReactNode;
  onPreview?: (item: any) => void;
  onDownload?: (item: any, e?: React.MouseEvent) => void;
  onShare?: (item: any) => void;
}) {
  return (
    <section id="industry-brochures" className="scroll-mt-36">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Factory className="w-6 h-6 text-rose-500" />
            Industry Solution Papers
          </h2>
          <p className="text-sm text-zinc-400 mt-1">Domain-specific solution briefs for Financial Services, Healthcare, Retail, and Manufacturing.</p>
        </div>
        <Link href="/marketing/industries" className="text-xs font-semibold text-rose-500 hover:text-rose-400 flex items-center gap-1">
          Explore Industries <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {industries.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-rose-500/40 transition-all flex flex-col justify-between group space-y-4"
          >
            <div className="space-y-3">
              <div className="relative h-36 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
                <Image
                  src={item.image || "/webp/assets/common/09ff7846bc8c9998745688779c09f88d-1.webp"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute top-2 left-2">{getTypeBadge ? getTypeBadge(item.type) : <span className="px-2 py-0.5 text-[10px] font-bold bg-zinc-800 text-zinc-300 rounded">{item.type || "PDF"}</span>}</div>
                <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-zinc-300">
                  {item.size}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
              <button
                onClick={() => onPreview && onPreview(item)}
                className="text-xs text-zinc-400 hover:text-white font-medium flex items-center gap-1"
              >
                <Eye className="w-3.5 h-3.5" /> Preview
              </button>
              <button
                onClick={(e) => onDownload && onDownload(item, e)}
                className="px-3 py-1.5 rounded-lg bg-rose-600/20 hover:bg-rose-600 text-rose-400 hover:text-white font-bold text-xs transition-colors flex items-center gap-1 border border-rose-500/30"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
