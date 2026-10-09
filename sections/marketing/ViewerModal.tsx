"use client";

import React from "react";
import { X, Video } from "lucide-react";
import { MarketingResourceItem } from "./config";
import { isVideo } from "./utils";
import { useModal } from "./hooks";
import dynamic from "next/dynamic";

const BrochureFlipBook = dynamic(
  () => import("@/components/ui/BrochureFlipBook").then((m) => m.BrochureFlipBook),
  { ssr: false }
);

const DEFAULT_BROCHURE_PDF = "/uploads/pdf/1787301408362_Devopstrio_Carousal.pdf";

export function ViewerModal({ item, onClose }: { item: MarketingResourceItem; onClose: () => void }) {
  useModal(true, onClose);

  const isVideoItem = isVideo(item);
  const fileUrl = item.fileUrl || DEFAULT_BROCHURE_PDF;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[100] h-[100dvh] w-screen overflow-hidden bg-[#080808] outline-none"
    >
      {isVideoItem && item.fileUrl ? (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center">
          <button
            onClick={onClose}
            aria-label="Close preview (Esc)"
            className="absolute right-4 top-4 z-50 rounded-full border border-zinc-700 bg-zinc-900/90 p-2.5 text-zinc-300 transition hover:bg-rose-600 hover:text-white cursor-pointer shadow-lg"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 text-xs font-semibold text-rose-400">
            <Video className="h-3.5 w-3.5" /> Video Preview
          </div>
          <h3 className="max-w-2xl text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
          {item.description && (
            <p className="max-w-xl text-xs text-zinc-400">{item.description}</p>
          )}
          <div className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-black shadow-2xl">
            <video src={fileUrl} controls autoPlay className="h-full w-full object-contain" />
          </div>
        </div>
      ) : (
        <BrochureFlipBook
          key={fileUrl}
          pdfUrl={fileUrl}
          pdfTitle={item.title}
          pdfBrand="Devopstrio Global"
          pdfEdition={item.category}
          onClose={onClose}
        />
      )}
    </div>
  );
}
