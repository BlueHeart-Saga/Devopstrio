"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Globe, LayoutGrid } from "lucide-react";
import { GlobalRegionOrState, GlobalLocation, CountryCode } from "@/data/locations/types";
import { Reveal } from "@/components/ui/Reveal";
import { InfiniteMenu, InfiniteMenuItem } from "@/components/ui/InfiniteMenu";
import { getLocationImage } from "@/lib/location-images";

interface CountryNavigationProps {
  countryCode: CountryCode;
  countryName: string;
  countrySlug: string;
  states: GlobalRegionOrState[];
  locations: Record<string, GlobalLocation>;
  currentStateId?: string;
  currentCityId?: string;
}

export function CountryNavigation({
  countryCode,
  countryName,
  countrySlug,
  states,
  locations,
  currentStateId,
  currentCityId
}: CountryNavigationProps) {
  const publishedStates = states.filter(s => s.publicationStatus === "published");
  const [selectedStateId, setSelectedStateId] = useState<string>(
    currentStateId || (publishedStates[0]?.id ?? "")
  );
  const [viewMode, setViewMode] = useState<"3d" | "grid">("3d");

  const activeState = states.find(s => s.id === selectedStateId) || publishedStates[0];
  const stateCities = activeState?.cityIds.map(cId => locations[cId]).filter(Boolean) || [];

  // All published cities across this country for the 3D sphere
  const publishedCitiesInCountry = Object.values(locations).filter(
    loc => loc.publicationStatus === "published"
  );

  const infiniteMenuItems: InfiniteMenuItem[] = publishedCitiesInCountry.map(city => {
    const stateObj = states.find(s => s.id === city.stateOrRegionId);
    const stateSlug = stateObj?.slug || city.stateOrRegionId;
    return {
      image: getLocationImage(city.slug, countryCode),
      title: city.displayName,
      description: city.shortDescription || `Enterprise cloud, DevOps and AI delivery in ${city.displayName}.`,
      link: `/locations/${countrySlug}/${stateSlug}/${city.slug}`
    };
  });

  return (
    <section id="coverage" className="w-full py-16 md:py-24 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
        
        {/* Section Header with View Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <Reveal className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Explore {countryName} States and <span className="text-rose-500">Technology Hubs</span>
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              Devopstrio provides principal-led cloud migrations, automated CI/CD pipelines, Zero-Trust compliance, and Generative AI across {countryName}. Select a state below to explore regional clusters.
            </p>
          </Reveal>

          {/* Toggle */}
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
              <span>State Grid</span>
            </button>
          </div>
        </div>

        {/* States Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8 pb-2">
          {publishedStates.map((st) => {
            const isSelected = selectedStateId === st.id;
            return (
              <button
                key={st.id}
                onClick={() => setSelectedStateId(st.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  isSelected
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-900/30"
                    : "bg-zinc-900/60 text-zinc-300 hover:text-white hover:bg-zinc-800/80"
                }`}
              >
                {st.name}
              </button>
            );
          })}
        </div>

        {/* 1. 3D InfiniteMenu Sphere Carousel */}
        {viewMode === "3d" && infiniteMenuItems.length > 0 && (
          <Reveal className="mb-14">
            <div className="w-full h-[520px] md:h-[600px] relative rounded-3xl overflow-hidden bg-zinc-950/70 border border-zinc-900 shadow-2xl">
              <InfiniteMenu
                items={infiniteMenuItems}
                count={Math.max(48, infiniteMenuItems.length * 3)}
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
              <span>{publishedCitiesInCountry.length} Published Hubs across {countryName}</span>
            </div>
          </Reveal>
        )}

        {/* 2. Selected State and Cities Display Card */}
        {activeState && (
          <Reveal>
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 hover:bg-zinc-900/40 border border-zinc-900/60 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold block mb-1">
                    {countryName} · State Hub
                  </span>
                  <h3 className="text-2xl font-semibold text-white">
                    <Link
                      href={`/locations/${countrySlug}/${activeState.slug}`}
                      className="hover:text-rose-400 transition-colors inline-flex items-center gap-2"
                    >
                      <span>{activeState.name}</span>
                      <ArrowUpRight size={18} className="text-zinc-500" />
                    </Link>
                  </h3>
                </div>

                <Link
                  href={`/locations/${countrySlug}/${activeState.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900/80 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all w-fit border border-zinc-800"
                >
                  <span>Explore Full {activeState.name} Hub</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 max-w-3xl">
                {activeState.description}
              </p>

              {/* Cities in this State */}
              <div className="pt-4 border-t border-zinc-900">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-3">
                  Metropolitan Hubs and Technology Corridors:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {stateCities.map((city) => {
                    const isPublished = city.publicationStatus === "published";
                    const isCurrent = currentCityId === city.id;

                    if (isPublished) {
                      return (
                        <Link
                          key={city.id}
                          href={`/locations/${countrySlug}/${activeState.slug}/${city.slug}`}
                          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-1.5 ${
                            isCurrent
                              ? "bg-rose-600 text-white"
                              : "bg-white/[0.04] text-zinc-200 hover:text-white hover:bg-zinc-800 border border-zinc-800/60"
                          }`}
                        >
                          <span>{city.displayName}</span>
                          {city.officeStatus === "corporate-office" || city.officeStatus === "operations-center" || city.officeStatus === "sub-regional-office" ? (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Verified Regional Office" />
                          ) : null}
                          <ArrowUpRight size={13} className="text-zinc-400" />
                        </Link>
                      );
                    }

                    return (
                      <span
                        key={city.id}
                        className="px-3.5 py-1.5 rounded-xl text-xs text-zinc-500 bg-white/[0.01]"
                        title="Regional service coverage area"
                      >
                        {city.displayName}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        )}

      </div>
    </section>
  );
}
