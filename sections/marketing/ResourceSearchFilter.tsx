"use client";

import React from "react";
import { Search, X, Sparkles } from "lucide-react";

interface ResourceSearchFilterProps {
  searchQuery: string;
  setSearchQuery?: (query: string) => void;
  onSearchChange?: (query: string) => void;
  selectedType?: string;
  setSelectedType?: (type: string) => void;
  onTypeChange?: (type: string) => void;
  typeFilters?: string[];
  quickChips?: string[];
}

export function ResourceSearchFilter({
  searchQuery,
  setSearchQuery,
  onSearchChange,
  selectedType,
  setSelectedType,
  onTypeChange,
}: ResourceSearchFilterProps) {
  const handleSearchChange = (q: string) => {
    if (setSearchQuery) setSearchQuery(q);
    if (onSearchChange) onSearchChange(q);
  };
  return (
    <div className="relative w-full max-w-3xl mx-auto px-4 my-8 z-30">
      
      {/* Top Devopstrio Red / Rose Ambient Radial Glow */}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl h-28 bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.35),rgba(244,63,94,0.25),rgba(249,115,22,0.15),transparent_70%)] blur-2xl pointer-events-none rounded-full" />
      
      {/* Red Theme Light Reflection Dots */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-80 pointer-events-none">
        <div className="w-2.5 h-2.5 rounded-full bg-red-600 blur-[2px] shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
        <div className="w-2.5 h-2.5 rounded-full bg-rose-500 blur-[2px] shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
        <div className="w-2.5 h-2.5 rounded-full bg-orange-500 blur-[2px] shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
        <div className="w-2.5 h-2.5 rounded-full bg-rose-400 blur-[2px] shadow-[0_0_8px_rgba(251,113,133,0.8)]" />
        <div className="w-2.5 h-2.5 rounded-full bg-red-700 blur-[2px] shadow-[0_0_8px_rgba(185,28,28,0.8)]" />
      </div>

      {/* Floating Pill Search Bar Container with Devopstrio Red Glass Theme */}
      <div className="relative flex items-center w-full rounded-full bg-[#0a0608]/90 backdrop-blur-2xl border border-rose-500/40 hover:border-rose-500/70 focus-within:border-red-500 shadow-[0_0_35px_rgba(225,29,72,0.25),0_15px_35px_rgba(0,0,0,0.9)] transition-all duration-500 group p-1.5">
        
        {/* Search Icon */}
        <Search className="w-6 h-6 text-zinc-300 ml-4 shrink-0 group-focus-within:text-rose-400 transition-colors" />

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search resources..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full bg-transparent text-white pl-3 pr-4 py-2.5 sm:py-3 text-base sm:text-lg focus:outline-none placeholder:text-zinc-400 font-medium"
        />

        {/* Right Action Box */}
        {searchQuery ? (
          <button
            onClick={() => handleSearchChange("")}
            className="w-10 h-10 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-rose-500/30 flex items-center justify-center text-zinc-400 hover:text-white transition-all shrink-0 mr-1 shadow-md"
            aria-label="Clear Search"
          >
            <X className="w-4 h-4 text-rose-400" />
          </button>
        ) : (
          <div className="w-10 h-10 rounded-2xl bg-zinc-900/90 border border-rose-500/20 flex items-center justify-center text-zinc-500 shrink-0 mr-1 shadow-sm">
            <Sparkles className="w-4 h-4 text-rose-500" />
          </div>
        )}

      </div>
    </div>
  );
}
