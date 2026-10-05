"use client";

import { memo } from "react";
import Image from "next/image";
import { Download, FileText } from "lucide-react";
import { MarketingResourceItem } from "./config";

// Simple card for Downloads Library: title on top, normal cover in the middle (touch to open flipbook/video), centered Download at the bottom.
export const DownloadCard = memo(function DownloadCard({
  item,
  onDownload,
  onPreview,
}: {
  item: MarketingResourceItem;
  onDownload: (i: MarketingResourceItem) => void;
  onPreview: (i: MarketingResourceItem) => void;
}) {
  const hasFile = !!item.fileUrl;

  const cover = item.thumbnailUrl ? (
    <Image
      src={item.thumbnailUrl}
      alt={item.title}
      fill
      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      className="object-cover transition duration-500 hover:scale-[1.03]"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
      <FileText className="h-12 w-12 text-zinc-700" aria-hidden />
    </div>
  );

  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-zinc-800/90 bg-zinc-900/70 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-rose-500/40 hover:shadow-xl hover:shadow-black/60">
      <div>
        <h3 title={item.title} className="mb-5 line-clamp-1 text-xl font-medium text-white">
          {item.title}
        </h3>

        {/* Clean normal cover image - touching opens flipbook / video with zero blur/overlay button */}
        <button
          type="button"
          onClick={() => onPreview(item)}
          aria-label={`Open ${item.title}`}
          className="relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950 transition duration-300 hover:border-rose-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
        >
          {cover}
        </button>
      </div>

      <button
        type="button"
        onClick={() => onDownload(item)}
        disabled={!hasFile}
        className="mt-6 inline-flex w-full items-center justify-center gap-3 py-2 text-base font-light text-zinc-200 transition hover:text-rose-400 disabled:cursor-not-allowed disabled:text-zinc-600 cursor-pointer"
      >
        <Download className="h-5 w-5 text-zinc-400 group-hover:text-rose-400 transition-colors" aria-hidden />
        <span>{hasFile ? "Download" : "File unavailable"}</span>
      </button>
    </article>
  );
});
