"use client";

import React from "react";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";

export function LatestTimelineSection({
  onPreview,
}: {
  onPreview: (item: any) => void;
}) {
  const timelineItems = [
    { date: "July 18, 2026", title: "Devopstrio Corporate Profile 2026 Published", desc: "Updated global delivery metrics, CMMI Level 5 status, and 2026 enterprise strategy.", type: "PDF" },
    { date: "July 12, 2026", title: "Generative AI RAG Architectural Blueprint Released", desc: "Benchmark comparisons for Pinecone, Qdrant, and Azure AI Search for enterprise RAG.", type: "Whitepaper" },
    { date: "June 28, 2026", title: "Humanex Platform Datasheet v4.0", desc: "New candidate AI screening engine release and HR payroll integrations.", type: "Datasheet" },
    { date: "June 15, 2026", title: "Zero Trust DevSecOps Blueprint", desc: "Updated security compliance playbooks for ISO 27001 and SOC 2 Type II audit readiness.", type: "PDF" },
  ];

  return (
    <section id="latest-timeline" className="scroll-mt-36">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-rose-500" />
            Latest Resource Additions & Releases
          </h2>
          <p className="text-sm text-zinc-400 mt-1">Recent updates added to the Devopstrio Marketing & Sales enablement portal.</p>
        </div>
      </div>

      <div className="relative border-l-2 border-zinc-800 ml-4 space-y-6 pl-6">
        {timelineItems.map((item, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-rose-600 border-4 border-zinc-950 group-hover:scale-125 transition-transform" />
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-rose-500/40 transition-all">
              <div className="flex items-center gap-3">
                <span className="text-xs text-rose-400 font-medium flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {item.date}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-800 text-zinc-300">
                  {item.type}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mt-1 group-hover:text-rose-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-zinc-400 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
