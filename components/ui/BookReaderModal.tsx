"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamically import BrochureFlipBook with SSR disabled
const BrochureFlipBook = dynamic(() => import("./BrochureFlipBook").then((mod) => mod.default || mod), { 
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center p-12 gap-3 text-zinc-300 font-sans my-auto">
      <Loader2 size={40} className="text-rose-500 animate-spin" />
      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
        Loading Interactive PDF Brochure...
      </span>
    </div>
  )
});

export type AnnouncementReport = {
  id?: number | string;
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  description?: string;
  reportType?: string;
  coverTitleLine1?: string;
  coverTitleLine2?: string;
  coverEdition?: string;
  coverBrand?: string;
  pdfUrl?: string;
  pdfName?: string;
  pdfSize?: number;
  coverImage?: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  report?: AnnouncementReport | null;
};

export const BookReaderModal: React.FC<Props> = ({ isOpen, onClose, report }) => {
  const pdfUrl = report?.pdfUrl || "";
  const pdfTitle = (
    report?.pdfName || 
    `${report?.coverTitleLine1 || ""} ${report?.coverTitleLine2 || ""}`.trim() || 
    "Document"
  ).replace(/\.pdf$/i, "");
  const pdfEdition = report?.coverEdition || "";
  const pdfBrand = report?.coverBrand || "Devopstrio";

  // Keyboard close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#030305]/98 backdrop-blur-2xl flex flex-col items-center justify-center font-sans select-none overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full h-full max-w-7xl flex flex-col items-center justify-between relative overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <BrochureFlipBook 
          pdfUrl={pdfUrl} 
          pdfTitle={pdfTitle} 
          pdfEdition={pdfEdition}
          pdfBrand={pdfBrand}
          onClose={onClose}
        />
      </div>
    </div>
  );
};
