"use client";

import React from "react";
import Link from "next/link";
import { Presentation, Download, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function CorporatePresentationPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
        
        <Link href="/marketing/company" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
          <ArrowLeft className="w-4 h-4" /> Back to Company Resources
        </Link>

        <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full">
              PowerPoint Deck • 32.1 MB
            </span>
            <span className="text-xs text-neutral-400">Updated July 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Devopstrio Master Corporate Presentation</h1>
          
          <p className="text-neutral-300 text-sm leading-relaxed">
            The full 45-slide executive presentation for enterprise pitches, client introductory meetings, and business partner presentations. Includes custom graphics, architecture diagrams, and value propositions.
          </p>

          <div className="space-y-3 pt-4 border-t border-neutral-800">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Slide Contents:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Executive Overview & Value Proposition</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Cloud Migration & DevOps Engineering</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Generative AI & Data Platforms</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Enterprise Engagement Models & Rates</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Industry Case Studies & ROI Metrics</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Security & 24/7 Managed Operations</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-neutral-800 flex items-center gap-4">
            <button className="px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm flex items-center gap-2 transition-colors">
              <Download className="w-4 h-4" /> Download PPT (32.1 MB)
            </button>
            <Link href="/marketing" className="px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-bold text-sm transition-colors">
              Return to Hub
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
