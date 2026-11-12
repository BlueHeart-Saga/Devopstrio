"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ukNations, ukRegions, ukLocations } from "@/data/locations/uk-locations";
import { UKNationId } from "@/data/locations/types";
import { ArrowUpRight, CheckCircle2, Globe, LayoutGrid } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { InfiniteMenu, InfiniteMenuItem } from "@/components/ui/InfiniteMenu";
import { getLocationImage } from "@/lib/location-images";

interface RegionNavigationProps {
  currentNationId?: string;
  currentRegionId?: string;
  currentCityId?: string;
}

export function RegionNavigation({
  currentNationId = "england",
  currentRegionId,
  currentCityId
}: RegionNavigationProps) {
  const [selectedNation, setSelectedNation] = useState<UKNationId>(
    (currentNationId as UKNationId) || "england"
  );
  const [viewMode, setViewMode] = useState<"3d" | "grid">("3d");

  const activeNation = ukNations[selectedNation] || ukNations.england;
  const nationRegions = activeNation.regions.map(rId => ukRegions[rId]).filter(Boolean);

  // All published target cities for this nation
  const publishedCitiesInNation = Object.values(ukLocations).filter(
    loc => loc.nation === selectedNation && loc.publicationStatus === "published"
  );

  // Build items for the 3D InfiniteMenu
  const infiniteMenuItems: InfiniteMenuItem[] = publishedCitiesInNation.map(city => ({
    image: getLocationImage(city.slug, city.nation),
    title: city.displayName,
    description: city.shortDescription || `Enterprise cloud, DevOps, SRE and AI delivery for ${city.displayName} organizations.`,
    link: `/locations/uk/${activeNation.slug}/${city.slug}`
  }));

  return (
    <section id="coverage" className="w-full py-16 md:py-24 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <Reveal className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Explore UK Nations and <span className="text-rose-500">Regional Tech Hubs</span>
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              Devopstrio provides principal-led cloud, DevOps, SRE, and Generative AI engineering across all four UK nations. Select a nation below to discover regional innovation clusters.
            </p>
          </Reveal>

          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800 self-start md:self-auto">
            <button
              onClick={() => setViewMode("3d")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === "3d"
                  ? "bg-rose-600 text-white shadow-md shadow-rose-950/40"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Globe size={14} />
              <span>3D Sphere</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-rose-600 text-white shadow-md shadow-rose-950/40"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <LayoutGrid size={14} />
              <span>Grid View</span>
            </button>
          </div>
        </div>

        {/* 4 Nations Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8 pb-2">
          {Object.values(ukNations).map((nat) => {
            const isSelected = selectedNation === nat.id;
            return (
              <button
                key={nat.id}
                onClick={() => setSelectedNation(nat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  isSelected
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-900/30"
                    : "bg-zinc-900/60 text-zinc-300 hover:text-white hover:bg-zinc-800/80"
                }`}
              >
                {nat.name}
              </button>
            );
          })}
        </div>

        {/* 1. 3D InfiniteMenu Spherical Carousel */}
        {viewMode === "3d" && infiniteMenuItems.length > 0 && (
          <Reveal className="mb-14">
            <div className="w-full h-[520px] md:h-[600px] relative rounded-3xl overflow-hidden bg-zinc-950/70 border border-zinc-900 shadow-2xl">
              <InfiniteMenu
                items={infiniteMenuItems}
                count={Math.max(50, infiniteMenuItems.length * 3)}
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
              />
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-500 px-2 mt-2">
              <span>Interactive 3D Sphere · Drag to rotate · Tap or click active city to explore</span>
              <span>{publishedCitiesInNation.length} Target Cities in {activeNation.name}</span>
            </div>
          </Reveal>
        )}

        {/* 2. Structured Regional Tech Clusters Cards (Accessible & Semantic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nationRegions.map((region) => {
            const isCurrentRegion = currentRegionId === region.id;
            const regionCities = region.cityIds.map(cId => ukLocations[cId]).filter(Boolean);
            const publishedCities = regionCities.filter(c => c.publicationStatus === "published");

            return (
              <Reveal key={region.id} className="h-full">
                <div className={`flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-zinc-950/60 hover:bg-zinc-900/40 transition-all duration-300 border border-zinc-900/60 ${
                  isCurrentRegion ? "ring-1 ring-rose-500/60 shadow-[0_0_30px_rgba(225,29,72,0.12)]" : ""
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                        {activeNation.name}
                      </span>
                      {publishedCities.length > 0 && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/40 text-emerald-400">
                          <CheckCircle2 size={12} /> Active Delivery
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">
                      <Link
                        href={`/locations/uk/${activeNation.slug}/${region.slug}`}
                        className="hover:text-rose-400 transition-colors inline-flex items-center gap-1.5"
                      >
                        {region.name}
                        <ArrowUpRight size={15} className="text-zinc-500" />
                      </Link>
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                      {region.description}
                    </p>

                    {/* Cities in Region */}
                    <div className="pt-3 mt-3 border-t border-zinc-900">
                      <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block mb-2.5">
                        Target Cities and Tech Hubs:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {regionCities.map((city) => {
                          const isPublished = city.publicationStatus === "published";
                          const isCurrentCity = currentCityId === city.id;

                          if (isPublished) {
                            return (
                              <Link
                                key={city.id}
                                href={`/locations/uk/${activeNation.slug}/${city.slug}`}
                                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all inline-flex items-center gap-1 ${
                                  isCurrentCity
                                    ? "bg-rose-600 text-white"
                                    : "bg-white/[0.04] text-zinc-200 hover:text-white hover:bg-zinc-800"
                                }`}
                              >
                                <span>{city.displayName}</span>
                                <ArrowUpRight size={11} className="text-zinc-400" />
                              </Link>
                            );
                          }

                          return (
                            <span
                              key={city.id}
                              className="px-2.5 py-1 rounded-lg text-xs text-zinc-500 bg-white/[0.01]"
                              title="Regional service coverage area"
                            >
                              {city.displayName}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
