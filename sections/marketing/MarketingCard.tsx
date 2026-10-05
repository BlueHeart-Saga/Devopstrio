"use client";

import React, { memo } from "react";
import Image from "next/image";
import { Download, Eye, Sparkles, Play, FileText } from "lucide-react";
import { MarketingResourceItem } from "./config";
import { isVideo } from "./utils";

interface MarketingCardProps {
  item: MarketingResourceItem;
  onPreview?: (item: MarketingResourceItem) => void;
  onDownload: (item: MarketingResourceItem, e?: React.MouseEvent) => void;
  isHighlighted?: boolean;
  highlighted?: boolean;
  anchorId?: string;
  showPreview?: boolean;
}

const TYPE_DOT_COLORS: Record<string, string> = {
  PDF: "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]",
  PPT: "bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]",
  Word: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]",
  Video: "bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]",
  Brochure: "bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]",
  Whitepaper: "bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]",
  "Case Study": "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]",
  Datasheet: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]",
  Blueprint: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]",
};

export const MarketingCard = memo(function MarketingCard({
  item,
  onPreview,
  onDownload,
  isHighlighted = false,
  highlighted = false,
  anchorId,
  showPreview = true,
}: MarketingCardProps) {
  const isVideoItem = isVideo(item);
  const canOpen = showPreview && !!onPreview;
  const isCardHighlighted = isHighlighted || highlighted;

  const dotColor = TYPE_DOT_COLORS[item.type] || "bg-zinc-400 shadow-[0_0_8px_rgba(161,161,170,0.8)]";

  const imageSrc =
    item.thumbnailUrl && item.thumbnailUrl.trim().length > 0
      ? item.thumbnailUrl
      : "/webp/assets/common/09ff7846bc8c9998745688779c09f88d-1.webp";

  const handlePreviewClick = () => {
    if (canOpen && onPreview) {
      onPreview(item);
    }
  };

  return (
    <div
      id={anchorId}
      className={`group relative scroll-mt-36 rounded-2xl bg-zinc-900/50 border ${
        isCardHighlighted
          ? "border-rose-500 ring-2 ring-rose-500/50 shadow-[0_0_35px_rgba(244,63,94,0.4)] transition-all duration-300"
          : "border-zinc-800/80 hover:border-zinc-700/90 transition-colors duration-200"
      } backdrop-blur-sm flex flex-col justify-between overflow-hidden`}
    >
      {/* Card Content Area */}
      <div className="p-5 flex flex-col space-y-4">
        {/* Top: Title & Badges */}
        <div className="flex items-start justify-between gap-3 min-h-[44px]">
          <h3 className="text-base font-semibold text-white group-hover:text-zinc-100 transition-colors line-clamp-2 leading-snug">
            {item.title}
          </h3>
          {item.badge ? (
            <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-rose-500/15 text-rose-300 border border-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.25)]">
              <Sparkles className="w-2.5 h-2.5 text-rose-400" />
              {item.badge}
            </span>
          ) : null}
        </div>

        {/* Center: Image-Only Zoom Container */}
        <div
          onClick={handlePreviewClick}
          className={`relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/80 ${
            canOpen ? "cursor-pointer" : "cursor-default"
          } select-none group/img`}
        >
          {item.thumbnailUrl ? (
            <Image
              src={imageSrc}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover/img:scale-105 opacity-90 group-hover/img:opacity-100"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
              <FileText className="h-10 w-10 text-zinc-700" />
            </div>
          )}

          {/* Center Play Icon for Videos */}
          {isVideoItem && !canOpen && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black shadow-xl">
                <Play className="ml-0.5 h-5 w-5 fill-current" />
              </div>
            </div>
          )}

          {/* Hover Overlay with Rose Glass Pill */}
          {canOpen && (
            <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-rose-500/50 text-white text-xs font-semibold shadow-2xl shadow-black transition-transform duration-200 group-hover/img:scale-105">
                {isVideoItem ? <Play className="w-3.5 h-3.5 fill-current text-rose-400" /> : <Eye className="w-3.5 h-3.5 text-rose-400" />}
                {isVideoItem ? "Watch Video" : "Open Flipbook"}
              </span>
            </div>
          )}

          {/* Format Badge with Glowing Neon Micro-Dot on Image */}
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md border border-zinc-700/80 text-white shadow-md">
              <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} aria-hidden />
              {item.type || "PDF"}
            </span>
          </div>

          {/* File Size Badge on Image */}
          {item.fileSize && (
            <div className="absolute bottom-2.5 right-2.5 z-10">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-black/80 text-zinc-300 border border-zinc-700/80 backdrop-blur-md shadow-md">
                {item.fileSize}
              </span>
            </div>
          )}
        </div>

        {/* Optional Description */}
        {item.description && (
          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        )}
      </div>

      {/* Bottom Action Area: Symmetrical Balanced Buttons */}
      <div className="px-5 py-3.5 bg-zinc-950/80 border-t border-zinc-800/80">
        <div className="grid grid-cols-2 gap-2.5">
          {/* Left Action: Open Flipbook / Watch Video (Theme Rose Accent) */}
          <button
            type="button"
            onClick={handlePreviewClick}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white text-xs font-semibold transition-all duration-200 shadow-sm shadow-rose-950/40 cursor-pointer"
          >
            {isVideoItem ? <Play className="w-3.5 h-3.5 fill-current" /> : <Eye className="w-3.5 h-3.5" />}
            <span className="truncate">{isVideoItem ? "Watch Video" : "Open Flipbook"}</span>
          </button>

          {/* Right Action: Download (Dark Slate Pill) */}
          <button
            type="button"
            onClick={(e) => onDownload(item, e)}
            disabled={!item.fileUrl}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 hover:text-white text-zinc-200 text-xs font-semibold border border-zinc-700/80 transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            title="Download File"
          >
            <Download className="w-3.5 h-3.5 text-zinc-400" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
});
