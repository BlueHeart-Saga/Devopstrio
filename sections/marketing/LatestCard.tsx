"use client";

import { memo } from "react";
import Image from "next/image";
import { ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { MarketingResourceItem, SECTIONS } from "./config";

// Matches exact card style from "Industries Using Our Platforms" (/ecosystem/platforms-solutions)
export const LatestCard = memo(function LatestCard({
  item,
  categoryLabel,
  onLocate,
}: {
  item: MarketingResourceItem;
  categoryLabel: string;
  onLocate: (i: MarketingResourceItem) => void;
}) {
  const label = `Go to ${item.title} in ${categoryLabel}`;
  const sectionObj = SECTIONS.find((s) => s.category === item.category && !s.derived);
  const SectionIcon = sectionObj?.icon || Sparkles;

  return (
    <article className="group flex flex-col bg-zinc-950/60 border border-white/[0.04] hover:border-rose-500/25 rounded-[24px] overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(244,63,94,0.06)] p-3 h-full">
      {/* Image Wrapper */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[18px] bg-zinc-900 border border-white/[0.03] mb-4">
        {item.thumbnailUrl ? (
          <Image
            src={item.thumbnailUrl}
            alt={item.title}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
            <FileText className="h-10 w-10 text-zinc-700" aria-hidden />
          </div>
        )}

        {/* Left: Section Icon */}
        <div
          title={`Category: ${categoryLabel}`}
          className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 text-rose-500 shadow-md"
        >
          <SectionIcon size={14} />
        </div>

        {/* Right: Navigation Arrow */}
        <button
          type="button"
          onClick={() => onLocate(item)}
          aria-label={label}
          title={label}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 text-rose-500 hover:bg-rose-600 hover:text-white transition-all duration-300 cursor-pointer shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
        >
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Details */}
      <div className="px-3 pb-3 flex flex-col flex-1">
        <h3 className="font-semibold text-lg md:text-xl uppercase tracking-wider text-white mb-2 group-hover:text-rose-400 transition-colors duration-300 line-clamp-2">
          {item.title}
        </h3>
      </div>
    </article>
  );
});
