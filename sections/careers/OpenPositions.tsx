"use client";

import React, { useState } from "react";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useRouter } from "next/navigation";

import Link from "next/link";

export function OpenPositions() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to the dedicated jobs page with query params
    const query = new URLSearchParams();
    if (keyword) query.set('q', keyword);
    if (location) query.set('loc', location);
    
    router.push(`/careers/jobs?${query.toString()}`);
  };

  return (
    <section id="open-positions" className="py-32 bg-[#030303] relative overflow-hidden flex items-center justify-center border-b border-zinc-900/60">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full px-6 relative z-10 text-center">
        <Reveal>
          <div className="relative mb-6">
            {/* Top-to-bottom arrow PNG */}
            <div className="flex justify-center mb-3 pointer-events-none select-none">
              <img src="/webp/assets/components/streight-toptobuttm.webp"
                alt="Arrow indicator"
                className="w-8 sm:w-10 h-auto object-contain filter drop-shadow-[0_0_12px_rgba(244,63,94,0.4)]"
              loading="lazy" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">
              Find your{" "}
              <span className="bg-rose-500 text-white font-semibold px-4 sm:px-6 py-1 sm:py-1.5 rounded-xl inline-block mx-1">
                dream job
              </span>{" "}
              at Devopstrio.
            </h2>
          </div>
          
          {/* <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-12 font-medium">
            When you're searching for a role, start here to find the perfect team where you can build next-generation enterprise solutions. Explore our <Link href="/services" className="text-rose-500 hover:underline font-bold">digital services</Link> and read our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link>.
          </p> */}

          {/* Search Bar Form */}
          <form 
            onSubmit={handleSearch} 
            className="max-w-3xl mx-auto bg-[#0a0a0a] border border-zinc-800/80 p-2 md:p-2.5 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center gap-2 shadow-2xl transition-all duration-300 focus-within:border-rose-500/50 focus-within:shadow-[0_0_40px_rgba(225,29,72,0.15)] relative z-20"
          >
            
            {/* Keyword Input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 md:py-4 w-full md:w-auto border-b md:border-b-0 md:border-r border-zinc-800">
              <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0">
                <Search size={16} className="text-rose-500" />
              </div>
              <input 
                type="text"
                placeholder="Job title or keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="bg-transparent border-none outline-none text-white placeholder:text-zinc-500 w-full text-sm md:text-base font-semibold"
              />
            </div>

            {/* Location Input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 md:py-4 w-full md:w-auto">
              <MapPin size={18} className="text-zinc-500 shrink-0" />
              <input 
                type="text"
                placeholder="Any location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent border-none outline-none text-white placeholder:text-zinc-500 w-full text-sm md:text-base font-semibold"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full md:w-auto bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-xl md:rounded-full font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] flex items-center justify-center gap-2 shrink-0 hover:-translate-y-0.5"
            >
              Search <ArrowRight size={16} />
            </button>
          </form>
          
          {/* Popular Tags */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-semibold text-zinc-500">
            <span>Popular searches:</span>
            <div className="flex gap-2 flex-wrap justify-center">
              {['Cloud Architect', 'DevOps Engineer', 'AI Specialist'].map(tag => (
                <button 
                  key={tag} 
                  type="button"
                  onClick={() => {
                    setKeyword(tag);
                    document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:text-white hover:border-zinc-600 transition-all cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
