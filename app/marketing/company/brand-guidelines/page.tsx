"use client";

import React from "react";
import Link from "next/link";
import { FileText, Download, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function BrandGuidelinesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
        
        <Link href="/marketing/company" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
          <ArrowLeft className="w-4 h-4" /> Back to Company Resources
        </Link>

        <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-full">
              PDF & Assets • 18.6 MB
            </span>
            <span className="text-xs text-neutral-400">Version 3.2</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Devopstrio Brand Guidelines & Identity Kit</h1>
          
          <p className="text-neutral-300 text-sm leading-relaxed">
            Official Devopstrio brand kit for marketing teams, partners, and media publishers. Includes high-resolution vector logos, typography specifications, primary and secondary color palettes, icon sets, and presentation slide templates.
          </p>

          <div className="space-y-3 pt-4 border-t border-neutral-800">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Asset Kit Includes:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Vector Logo Files (SVG, PNG, EPS)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Dark & Light Mode Logo Variants</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Typography Standards & Web Fonts</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Color Hex, RGB & HSL Tokens</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Co-Branding & Partner Placement Rules</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Social Media Banners & Templates</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-neutral-800 flex items-center gap-4">
            <button className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm flex items-center gap-2 transition-colors">
              <Download className="w-4 h-4" /> Download Brand Kit (18.6 MB)
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
