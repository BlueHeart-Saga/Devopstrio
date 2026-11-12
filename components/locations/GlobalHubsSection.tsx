'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Building2, CheckCircle2, Globe2, LayoutGrid } from 'lucide-react';
import { InfiniteMenu, InfiniteMenuItem } from '@/components/ui/InfiniteMenu';
import BorderGlow from '@/components/ui/BorderGlow';
import { Reveal } from '@/components/ui/Reveal';
import { GlobalCountry } from '@/data/locations/types';

export interface CountryHubItem {
  country: GlobalCountry;
  stats: string;
  hqInfo: string;
  hubUrl: string;
  badge: string;
  highlights: string[];
}

export interface GlobalHubsSectionProps {
  countriesList: CountryHubItem[];
  globalHubMenuItems: InfiniteMenuItem[];
}

export const GlobalHubsSection: React.FC<GlobalHubsSectionProps> = ({
  countriesList,
  globalHubMenuItems
}) => {
  const [viewMode, setViewMode] = useState<'sphere' | 'grid'>('sphere');

  return (
    <section id="countries" className="w-full py-16 md:py-24 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
        {/* Header with Title and View Switcher */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <Reveal className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-medium uppercase tracking-wider mb-3">
              Global Operating Hubs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">
              Explore Our <span className="text-rose-500">Global Operating Hubs</span>
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              Explore our regional delivery hubs, certified offices, technology corridors, and local service specifications.
            </p>
          </Reveal>

          {/* View Switcher Toggle */}
          <div className="flex items-center p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 backdrop-blur-md self-start md:self-auto shrink-0 shadow-lg">
            <button
              type="button"
              onClick={() => setViewMode('sphere')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                viewMode === 'sphere'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
              aria-label="3D Sphere View"
              aria-pressed={viewMode === 'sphere'}
            >
              <Globe2 size={16} className={viewMode === 'sphere' ? 'text-white' : 'text-zinc-400'} />
              <span>3D Sphere</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
              aria-label="Grid View"
              aria-pressed={viewMode === 'grid'}
            >
              <LayoutGrid size={16} className={viewMode === 'grid' ? 'text-white' : 'text-zinc-400'} />
              <span>Grid View</span>
            </button>
          </div>
        </div>

        {/* 1. 3D Sphere View (Visible ONLY when viewMode === 'sphere') */}
        {viewMode === 'sphere' && (
          <Reveal className="w-full">
            <div className="w-full h-[540px] md:h-[620px] relative overflow-hidden bg-black border-0 outline-none">
              <InfiniteMenu
                items={globalHubMenuItems}
                count={60}
                tileSize={0.64}
                roundness={0.24}
                zoom={1.65}
                pullBack={1}
                stretch={0.6}
                inertia={0.65}
                autoplay={3}
                grayscale={true}
                dim={0.48}
                intro={true}
                showInfo={true}
                theme="dark"
                accentColor="#e11d48"
                backgroundColor="#000000"
                className="w-full h-full bg-black border-0 outline-none"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-zinc-500 px-2 mt-3 gap-1">
              <span>Interactive 3D Sphere · Drag to rotate · Tap or click active hub to explore city practices</span>
              <span>10 Global Technology Hubs</span>
            </div>
          </Reveal>
        )}

        {/* 2. Grid View (Visible ONLY when viewMode === 'grid') */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {countriesList.map((c, idx) => (
              <Reveal key={c.country.code} delay={idx * 0.05} className="h-full">
                <BorderGlow
                  edgeSensitivity={35}
                  glowColor="350 85 75"
                  backgroundColor="#0c0a10"
                  borderRadius={24}
                  glowRadius={35}
                  glowIntensity={1.0}
                  coneSpread={30}
                  colors={['#f43f5e', '#fb7185', '#38bdf8']}
                  className="h-full transition-transform hover:-translate-y-1 duration-300"
                >
                  <div className="flex flex-col justify-between h-full p-7 sm:p-8 group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                          {c.badge}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>

                      <h3 className="text-2xl font-semibold text-white group-hover:text-rose-400 transition-colors mb-2">
                        <Link href={c.hubUrl} className="inline-flex items-center gap-2">
                          <span>{c.country.name}</span>
                          <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-rose-400" />
                        </Link>
                      </h3>

                      <p className="text-xs font-semibold text-rose-400 mb-4">
                        {c.stats}
                      </p>

                      <p className="text-sm text-zinc-300 leading-relaxed mb-6 line-clamp-3">
                        {c.country.description}
                      </p>

                      {/* Verified Office Pill */}
                      <div className="p-3.5 rounded-xl bg-zinc-900/60 mb-6 space-y-1 border border-zinc-800/40">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200">
                          <Building2 size={13} className="text-rose-500" />
                          <span>Verified Facility:</span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {c.hqInfo}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2 mb-6">
                        {c.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                            <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={c.hubUrl}
                      className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-rose-600/15 hover:bg-rose-600 text-rose-300 hover:text-white text-xs font-semibold tracking-wide transition-all"
                    >
                      <span>Explore {c.country.name} Hub</span>
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </BorderGlow>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GlobalHubsSection;
