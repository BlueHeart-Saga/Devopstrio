"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, ArrowUpRight, FileText, BookOpen } from "lucide-react";
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
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [loading, setLoading] = useState(true);
  const [isReaderOpen, setIsReaderOpen] = useState(false);

  useEffect(() => {
    fetch("/api/announcements")
      .then(res => res.json())
      .then(data => {
        const list = Array.isArray(data) ? data : [];
        const active = list.find((item: Announcement) => item.status === "active") || list[0];
        if (active) setAnnouncement(active);
      })
      .catch(err => console.error("Failed to load announcements", err))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! ${email} has been registered.`);
      setEmail("");
    }
  };

  if (loading || !announcement) return null;

  return (
    <section className="w-full py-12 bg-[#030303] text-white relative overflow-hidden font-sans">
      
      {/* ── HIGH-LEVEL 3D PDF PAGEFLIP MODAL ── */}
      <BookReaderModal
        isOpen={isReaderOpen}
        onClose={() => setIsReaderOpen(false)}
        report={announcement}
      />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 xl:px-8">
        <Reveal>
          <div className="relative w-full rounded-2xl border border-zinc-800 bg-[#08080a] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
            
            {/* Left Content Side */}
            <div className="flex-1 z-10 w-full">
              <div className="pb-6 mb-6 border-b border-zinc-800/80">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2 leading-tight font-sans">
                  {announcement.titlePrefix} {announcement.titleHighlight}{announcement.titleSuffix ? `, ${announcement.titleSuffix}` : ""}
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-xl leading-relaxed mt-2 font-sans">
                  {announcement.description}
                </p>
              </div>

              {/* Newsletter Sub-Form */}
              <div>
                <span className="block text-xs font-medium text-zinc-400 mb-2.5 font-sans">
                  {announcement.formTitle || "Stay ahead with our latest Updates"}
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
            </div>

            {/* Right Report Cover Visual (Click to Open Interactive 3D PDF PageFlip) */}
            <div 
              onClick={() => setIsReaderOpen(true)}
              className="relative w-full max-w-[210px] aspect-[3/4] rounded-2xl p-6 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden mx-auto transition-all duration-300 bg-[#0E0F14] border border-zinc-800 hover:border-zinc-700 hover:scale-105 cursor-pointer group select-none flex-shrink-0"
              title="Click to Open PDF Document"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.25),transparent_70%)] pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(225,29,72,0.1),transparent)] pointer-events-none" />
              
              <div className="flex justify-between items-start relative z-10">
                <span className="text-[10px] font-bold text-rose-400 tracking-wider uppercase font-sans">
                  {announcement.reportType || "RESEARCH REPORT"}
                </span>
                <FileText size={18} className="text-rose-500" />
              </div>

              <div className="my-auto relative z-10">
                <h3 className="text-base font-bold tracking-tight text-white leading-snug font-sans uppercase">
                  {announcement.coverTitleLine1 || "AI IMPACT"}<br />
                  <span className="text-rose-400">{announcement.coverTitleLine2 || "IMPERATIVES"}</span>
                </h3>
                <div className="h-[3px] w-10 bg-rose-600 mt-2.5 rounded-full" />
              </div>

              <div className="flex justify-between items-center text-xs font-semibold text-zinc-400 mt-4 relative z-10 font-sans">
                <span>{announcement.coverBrand || "Devopstrio"}</span>
                <span className="text-white font-bold">{announcement.coverEdition || "2026 EDITION"}</span>
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
