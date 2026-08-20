"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, ArrowUpRight, FileText, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { BookReaderModal } from "@/components/ui/BookReaderModal";

type Announcement = {
  id: string | number;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  formTitle: string;
  reportType?: string;
  coverTitleLine1?: string;
  coverTitleLine2?: string;
  coverEdition?: string;
  coverBrand?: string;
  status: string;
  pdfUrl?: string;
  pdfName?: string;
  pdfSize?: number;
};

export function ImperativesBanner() {
  const [email, setEmail] = useState("");
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch("/api/announcements")
      .then(res => res.json())
      .then(data => {
        const list = Array.isArray(data) ? data : [];
        const activeList = list.filter((item: Announcement) => item.status === "active");
        setAnnouncements(activeList.length > 0 ? activeList : list);
      })
      .catch(err => console.error("Failed to load announcements", err))
      .finally(() => setLoading(false));
  }, []);

  const goToNext = useCallback(() => {
    if (announcements.length <= 1) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
      setIsFading(false);
    }, 250);
  }, [announcements.length]);

  const goToPrev = useCallback(() => {
    if (announcements.length <= 1) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
      setIsFading(false);
    }, 250);
  }, [announcements.length]);

  // Auto-cycle announcements every 6 seconds if multiple announcements are present (pauses on hover)
  useEffect(() => {
    if (announcements.length <= 1 || isHovered || isReaderOpen) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      goToNext();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [announcements.length, isHovered, isReaderOpen, goToNext]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! ${email} has been registered.`);
      setEmail("");
    }
  };

  if (loading || announcements.length === 0) return null;

  const current = announcements[currentIndex];

  return (
    <section 
      className="w-full py-12 bg-[#030303] text-white relative overflow-hidden font-sans"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* ── HIGH-LEVEL 3D PDF PAGEFLIP MODAL ── */}
      <BookReaderModal
        isOpen={isReaderOpen}
        onClose={() => setIsReaderOpen(false)}
        report={current}
      />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 xl:px-8">
        <Reveal>
          <div className="relative w-full rounded-2xl border border-zinc-800 bg-[#08080a] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 group/card">
            
            {/* Left Content Side with smooth transition */}
            <div className={`flex-1 z-10 w-full transition-opacity duration-300 ${isFading ? "opacity-30 translate-y-1" : "opacity-100 translate-y-0"}`}>
              <div className="pb-6 mb-6 border-b border-zinc-800/80">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2 leading-tight font-sans">
                  {current.titlePrefix} {current.titleHighlight}{current.titleSuffix ? `, ${current.titleSuffix}` : ""}
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-xl leading-relaxed mt-2 font-sans">
                  {current.description}
                </p>
              </div>

              {/* Newsletter Sub-Form */}
              <div>
                <span className="block text-xs font-medium text-zinc-400 mb-2.5 font-sans">
                  {current.formTitle || "Stay ahead with our latest Updates"}
                </span>
                <form onSubmit={handleSubmit} className="flex max-w-md items-center relative">
                  <div className="absolute left-3.5 text-zinc-500 pointer-events-none">
                    <Mail size={16} />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#101114] border border-zinc-800 rounded-xl pl-10 pr-12 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-600 transition-colors font-sans"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 w-8 h-8 rounded-lg bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Subscribe"
                    title="Subscribe"
                  >
                    <ArrowUpRight size={15} />
                  </button>
                </form>
              </div>

              {/* Multi-Announcement Dot Indicators & Controls (shown when > 1 active) */}
              {announcements.length > 1 && (
                <div className="flex items-center gap-3 mt-6 pt-2">
                  <div className="flex items-center gap-1.5">
                    {announcements.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setIsFading(true);
                          setTimeout(() => {
                            setCurrentIndex(idx);
                            setIsFading(false);
                          }, 250);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          currentIndex === idx 
                            ? "w-7 bg-rose-600" 
                            : "w-2 bg-zinc-700 hover:bg-zinc-500"
                        }`}
                        title={`Announcement ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 ml-2 text-zinc-500 text-xs">
                    <button
                      onClick={goToPrev}
                      className="p-1 rounded-md hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
                      title="Previous Announcement"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="text-[11px] font-mono text-zinc-400 px-1">
                      {currentIndex + 1}/{announcements.length}
                    </span>
                    <button
                      onClick={goToNext}
                      className="p-1 rounded-md hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
                      title="Next Announcement"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Report Cover Visual with smooth transition (Click to Open Interactive 3D PDF PageFlip) */}
            <div 
              onClick={() => setIsReaderOpen(true)}
              className={`relative w-full max-w-[210px] aspect-[3/4] rounded-2xl p-6 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden mx-auto transition-all duration-300 bg-[#0E0F14] border border-zinc-800 hover:border-zinc-700 hover:scale-105 cursor-pointer group select-none flex-shrink-0 ${
                isFading ? "opacity-30 scale-95" : "opacity-100 scale-100"
              }`}
              title="Click to Open PDF Document"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.25),transparent_70%)] pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(225,29,72,0.1),transparent)] pointer-events-none" />
              
              <div className="flex justify-between items-start relative z-10">
                <span className="text-[10px] font-bold text-rose-400 tracking-wider uppercase font-sans">
                  {current.reportType || "RESEARCH REPORT"}
                </span>
                <FileText size={18} className="text-rose-500" />
              </div>

              <div className="my-auto relative z-10">
                <h3 className="text-base font-bold tracking-tight text-white leading-snug font-sans uppercase">
                  {current.coverTitleLine1 || "AI IMPACT"}<br />
                  <span className="text-rose-400">{current.coverTitleLine2 || "IMPERATIVES"}</span>
                </h3>
                <div className="h-[3px] w-10 bg-rose-600 mt-2.5 rounded-full" />
              </div>

              <div className="flex justify-between items-center text-xs font-semibold text-zinc-400 mt-4 relative z-10 font-sans">
                <span>{current.coverBrand || "Devopstrio"}</span>
                <span className="text-white font-bold">{current.coverEdition || "2026 EDITION"}</span>
              </div>
              
              {/* Click to open badge */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-2 transition-opacity z-20">
                <BookOpen size={28} className="text-white animate-bounce" />
                <span className="text-xs font-bold text-white uppercase tracking-wider font-sans">Click to Read</span>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
