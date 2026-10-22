"use client";

import React from "react";
import Link from "next/link";
import { Star, ExternalLink, ShieldCheck } from "lucide-react";
import { TrustpilotReviewCollector } from "@/components/ui/TrustpilotReviewCollector";

export function TrustpilotHomeSection() {
  return (
    <section className="relative w-full border-t border-zinc-900 bg-gradient-to-b from-[#030303] via-[#080808] to-black py-16 sm:py-20 text-white overflow-hidden">
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[650px] bg-emerald-500/5 blur-[120px] rounded-full"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 mb-5">
          <Star className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400" />
          <span>Independent Client Verification</span>
        </div>

        {/* Heading & Subheading */}
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Verified Reviews on <span className="text-emerald-400">Trustpilot</span>
        </h2>
        <p className="max-w-2xl mx-auto text-sm text-zinc-400 mb-8 leading-relaxed">
          Devopstrio is committed to enterprise engineering excellence, zero-downtime migrations, and total delivery transparency.
          Read verified client reviews or review your engagement with our team.
        </p>

        {/* TrustBox Widget Container */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 sm:p-6 backdrop-blur-sm shadow-xl hover:border-emerald-500/30 transition-all duration-300">
          <TrustpilotReviewCollector />
        </div>

        {/* Trust Points */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" /> Official Registered Business
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-4 w-4 text-emerald-400 fill-emerald-400" /> Independent 3rd-Party Verification
          </span>
          <a
            href="https://www.trustpilot.com/review/devopstrio.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors underline-offset-4 hover:underline"
          >
            Visit Official Trustpilot Page <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
