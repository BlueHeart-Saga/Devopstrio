"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { 
  Phone, 
  Mail, 
  ShieldAlert, 
  Check,
  Copy,
  Sparkles
} from "lucide-react";

export function DepartmentContacts() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="department-contacts" className="w-full py-12 md:py-16 bg-[#030303] text-white relative overflow-hidden font-sans">
      
      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-rose-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">

        {/* ── Previous Header Design (Pill Badge + Section Title) ───────── */}
        <Reveal className="mb-12 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            {/* <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-zinc-500">
              Departmental Contact Directory
            </span> */}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white">
            Direct Access to Our <span className="text-rose-500">Specialized Teams.</span>
          </h2>
        </Reveal>

        {/* ── Contact Details Grid (2 Balanced Columns) ─────────────── */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto py-2">
            
            {/* 01. Direct Phone Desks */}
            <div className="space-y-5">
              <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-800 text-rose-500">
                <Phone size={18} />
                <h3 className="font-semibold text-white uppercase text-xs md:text-sm tracking-wider">
                  Direct Phone Lines
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 block mb-0.5">
                    United Kingdom Office
                  </span>
                  <a href="tel:+441784640216" className="text-lg md:text-xl font-semibold text-white hover:text-rose-400 transition-colors tracking-tight block">
                    +44 1784 640216
                  </a>
                </div>

                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 block mb-0.5">
                    India Delivery Center
                  </span>
                  <a href="tel:04612940062" className="text-lg md:text-xl font-semibold text-white hover:text-rose-400 transition-colors tracking-tight block">
                    0461 2940062
                  </a>
                </div>

                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-emerald-400 block mb-0.5">
                    WhatsApp Direct
                  </span>
                  <a href="https://wa.me/447471482903" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-semibold text-white hover:text-emerald-400 transition-colors tracking-tight block">
                    +44 7471 482903
                  </a>
                </div>
              </div>
            </div>

            {/* 02. Official Email Channels */}
            <div className="space-y-5">
              <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-800 text-rose-500">
                <Mail size={18} />
                <h3 className="font-semibold text-white uppercase text-xs md:text-sm tracking-wider">
                  Official Email Desks
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 block mb-0.5">
                    General Inquiries
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a href="mailto:info@devopstrioglobal.com" className="text-base md:text-lg font-semibold text-white hover:text-rose-400 transition-colors tracking-tight truncate">
                      info@devopstrioglobal.com
                    </a>
                    <button onClick={() => handleCopy("info@devopstrioglobal.com")} className="text-zinc-400 hover:text-white p-1 flex-shrink-0" title="Copy">
                      {copiedEmail === "info@devopstrioglobal.com" ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 block mb-0.5">
                    HR Operations
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a href="mailto:hr@devopstrioglobal.com" className="text-base md:text-lg font-semibold text-white hover:text-rose-400 transition-colors tracking-tight truncate">
                      hr@devopstrioglobal.com
                    </a>
                    <button onClick={() => handleCopy("hr@devopstrioglobal.com")} className="text-zinc-400 hover:text-white p-1 flex-shrink-0" title="Copy">
                      {copiedEmail === "hr@devopstrioglobal.com" ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 block mb-0.5">
                    Careers & Jobs
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a href="mailto:career@devopstrioglobal.com" className="text-base md:text-lg font-semibold text-white hover:text-rose-400 transition-colors tracking-tight truncate">
                      career@devopstrioglobal.com
                    </a>
                    <button onClick={() => handleCopy("career@devopstrioglobal.com")} className="text-zinc-400 hover:text-white p-1 flex-shrink-0" title="Copy">
                      {copiedEmail === "career@devopstrioglobal.com" ? <Check size={18} className="text-emerald-400" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
