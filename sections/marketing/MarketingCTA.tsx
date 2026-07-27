"use client";

import React from "react";
import Link from "next/link";
import { Handshake, FileText } from "lucide-react";

export function MarketingCTA({ onRequestCustom }: { onRequestCustom: () => void }) {
  return (
    <section className="relative rounded-3xl bg-gradient-to-r from-rose-950/40 via-zinc-900 to-zinc-950 border border-rose-500/20 p-8 sm:p-12 text-center space-y-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Need a Customized Presentation or Solution Deck?
        </h2>
        <p className="text-sm text-zinc-300 leading-relaxed">
          Our marketing and solution architecture teams can create co-branded decks, custom industry blueprints, or tailored ROI models for your client proposals.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onRequestCustom}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-rose-900/50 flex items-center gap-2"
          >
            <FileText className="w-4 h-4" /> Request Custom Materials
          </button>

          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <Handshake className="w-4 h-4 text-rose-500" /> Contact Sales Team
          </Link>
        </div>
      </div>
    </section>
  );
}
