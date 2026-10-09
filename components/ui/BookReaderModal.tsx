"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

const BrochureFlipBook = dynamic(
  () => import("@/components/ui/BrochureFlipBook").then(m => m.BrochureFlipBook),
  {
    ssr: false,
    loading: () => <div className="flex h-full w-full items-center justify-center bg-black"><Loader2 className="h-8 w-8 animate-spin text-rose-500" /></div>,
  }
);

export interface AnnouncementReport {
  id?: string | number;
  titleHighlight?: string;
  titlePrefix?: string;
  titleSuffix?: string;
  coverTitleLine1?: string;
  coverTitleLine2?: string;
  coverBrand?: string;
  coverEdition?: string;
  reportType?: string;
  pdfUrl?: string;
  pdfName?: string;
  pdfSize?: number;
  [key: string]: any;
}

export interface BookReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  report: AnnouncementReport | null;
}

export function BookReaderModal({ isOpen, onClose, report }: BookReaderModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => { onCloseRef.current = onClose; }, [onClose]);

  useEffect(() => {
    if (!isOpen || !report) return;
    const oldOverflow = document.body.style.overflow;
    const focused = document.activeElement;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    const handleKeys = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
      if (e.key !== "Tab" || !dialogRef.current) return;
      const elements = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter(el => el.getClientRects().length > 0);
      if (!elements.length) { e.preventDefault(); dialogRef.current.focus(); return; }
      const first = elements[0], last = elements[elements.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", handleKeys);
    return () => {
      document.removeEventListener("keydown", handleKeys);
      document.body.style.overflow = oldOverflow;
      if (focused instanceof HTMLElement) focused.focus();
    };
  }, [isOpen, report]);

  if (!isOpen || !report) return null;
  const cover = [report.coverTitleLine1, report.coverTitleLine2].filter(Boolean).join(" ").trim();
  const fallback = [report.titlePrefix, report.titleHighlight, report.titleSuffix].filter(Boolean).join("").trim();
  const title = cover || fallback || "Document Preview";
  const pdfUrl = report.pdfUrl || "/uploads/pdf/1787301408362_Devopstrio_Carousal.pdf";

  return (
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-label={title} tabIndex={-1}
      className="fixed inset-0 z-[100] h-[100dvh] w-screen overflow-hidden bg-[#DDDDDD] outline-none">
      {/* Intentionally fullscreen: no inner max-w, max-h, border, padding or nested card. */}
      <BrochureFlipBook key={pdfUrl} pdfUrl={pdfUrl} pdfTitle={title}
        pdfBrand={report.coverBrand || "Devopstrio"}
        pdfEdition={report.coverEdition || "2026 EDITION"} onClose={onClose}/>
    </div>
  );
}

export default BookReaderModal;
