"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UKLocation, GlobalLocation } from "@/data/locations/types";
import { ukNations, ukRegions } from "@/data/locations/uk-locations";
import { indiaStates } from "@/data/locations/india-locations";
import { usStates } from "@/data/locations/us-locations";
import { ArrowUpRight, Globe, LayoutGrid } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { InfiniteMenu, InfiniteMenuItem } from "@/components/ui/InfiniteMenu";
import { getLocationImage } from "@/lib/location-images";

interface SimpleNearbyItem {
  name: string;
  href: string;
  distance?: string;
  description?: string;
}

interface NearbyLocationsProps {
  currentLocationName?: string;
  currentLocation?: UKLocation | GlobalLocation;
  nearbyLocations: (UKLocation | GlobalLocation | SimpleNearbyItem | any)[];
}

export function NearbyLocations({
  currentLocationName,
  currentLocation,
  nearbyLocations
}: NearbyLocationsProps) {
  const [viewMode, setViewMode] = useState<"3d" | "grid">("3d");

  if (!nearbyLocations || nearbyLocations.length === 0) return null;

  const locName = currentLocationName || currentLocation?.displayName || "this hub";

  // Build items for the 3D InfiniteMenu
  const infiniteMenuItems: InfiniteMenuItem[] = nearbyLocations.map((item) => {
    // Case 1: Simple explicit item with href
    if ("href" in item && "name" in item) {
      return {
        image: getLocationImage(item.name),
        title: item.name,
        description: item.description || "Adjacent regional technology corridor.",
        link: item.href
      };
    }

    // Case 2: UK Location
    if ("nation" in item && "region" in item) {
      const loc = item as UKLocation;
      if (loc.publicationStatus !== "published") return null;
      const locNation = ukNations[loc.nation];
      const locRegion = ukRegions[loc.region];
      if (!locNation || !locRegion) return null;
      return {
        image: getLocationImage(loc.slug, loc.nation),
        title: loc.displayName,
        description: loc.shortDescription || `${locRegion.name || "UK"} Technology Innovation Corridor.`,
        link: `/locations/uk/${locNation.slug}/${loc.slug}`
      };
    }

    // Case 3: Global Location (India or US)
    if ("countryCode" in item && "stateOrRegionId" in item) {
      const loc = item as GlobalLocation;
      if (loc.publicationStatus !== "published") return null;
      let stateSlug = loc.stateOrRegionId;
      if (loc.countryCode === "india") {
        stateSlug = indiaStates[loc.stateOrRegionId]?.slug || loc.stateOrRegionId;
      } else if (loc.countryCode === "us") {
        stateSlug = usStates[loc.stateOrRegionId]?.slug || loc.stateOrRegionId;
      }
      if (!stateSlug) return null;
      return {
        image: getLocationImage(loc.slug, loc.countryCode),
        title: loc.displayName,
        description: loc.shortDescription || `${loc.countryCode.toUpperCase()} Commercial Delivery Node.`,
        link: `/locations/${loc.countryCode}/${stateSlug}/${loc.slug}`
      };
    }

    return null;
  }).filter(Boolean) as InfiniteMenuItem[];

  return (
    <section id="nearby" className="w-full py-16 md:py-20 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
        
        {/* Header with View Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <Reveal className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
              Nearby Technology Corridors around <span className="text-rose-500">{locName}</span>
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Devopstrio coordinates enterprise multi-cloud engineering and SRE operations across neighboring municipal and innovation districts.
            </p>
          </Reveal>

          {/* Toggle */}
          {infiniteMenuItems.length > 2 && (
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
          )}
        </div>

        {/* 1. 3D InfiniteMenu Sphere */}
        {viewMode === "3d" && infiniteMenuItems.length > 0 && (
          <Reveal className="mb-10">
            <div className="w-full h-[460px] md:h-[540px] relative rounded-3xl overflow-hidden bg-zinc-950/70 border border-zinc-900 shadow-2xl">
              <InfiniteMenu
                items={infiniteMenuItems}
                count={Math.max(40, infiniteMenuItems.length * 4)}
                tileSize={0.65}
                roundness={0.25}
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
              <span>Interactive 3D Sphere · Drag to explore neighboring innovation districts</span>
              <span>{infiniteMenuItems.length} Connected Corridors</span>
            </div>
          </Reveal>
        )}

        {/* 2. Structured Quick Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {nearbyLocations.map((item, idx) => {
            // Case 1: Simple explicit item with href
            if ("href" in item && "name" in item) {
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex flex-col p-4 rounded-xl bg-zinc-950/60 hover:bg-zinc-900/50 border border-zinc-900/60 transition-all group cursor-pointer"
                >
                  <span className="text-sm font-semibold text-white group-hover:text-rose-400 transition-colors flex items-center justify-between mb-1.5">
                    {item.name}
                    <ArrowUpRight size={13} className="text-zinc-500 group-hover:text-rose-400 transition-colors" />
                  </span>
                  {item.distance && (
                    <span className="text-xs text-zinc-400 uppercase tracking-wider">
                      {item.distance}
                    </span>
                  )}
                </Link>
              );
            }

            // Case 2: UK Location
            if ("nation" in item && "region" in item) {
              const loc = item as UKLocation;
              const isPublished = loc.publicationStatus === "published";
              const locRegion = ukRegions[loc.region];
              const locNation = ukNations[loc.nation];

              if (isPublished && locNation && locRegion) {
                return (
                  <Link
                    key={loc.id}
                    href={`/locations/uk/${locNation.slug}/${loc.slug}`}
                    className="flex flex-col p-4 rounded-xl bg-zinc-950/60 hover:bg-zinc-900/50 border border-zinc-900/60 transition-all group cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-rose-400 transition-colors flex items-center justify-between mb-1.5">
                      {loc.displayName}
                      <ArrowUpRight size={13} className="text-zinc-500 group-hover:text-rose-400 transition-colors" />
                    </span>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider">
                      {locRegion.name}
                    </span>
                  </Link>
                );
              }
            }

            // Case 3: Global Location (India or US)
            if ("countryCode" in item && "stateOrRegionId" in item) {
              const loc = item as GlobalLocation;
              const isPublished = loc.publicationStatus === "published";
              let stateSlug = "";

              if (loc.countryCode === "india") {
                stateSlug = indiaStates[loc.stateOrRegionId]?.slug || loc.stateOrRegionId;
              } else if (loc.countryCode === "us") {
                stateSlug = usStates[loc.stateOrRegionId]?.slug || loc.stateOrRegionId;
              }

              if (isPublished && stateSlug) {
                return (
                  <Link
                    key={loc.id}
                    href={`/locations/${loc.countryCode}/${stateSlug}/${loc.slug}`}
                    className="flex flex-col p-4 rounded-xl bg-zinc-950/60 hover:bg-zinc-900/50 border border-zinc-900/60 transition-all group cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-rose-400 transition-colors flex items-center justify-between mb-1.5">
                      {loc.displayName}
                      <ArrowUpRight size={13} className="text-zinc-500 group-hover:text-rose-400 transition-colors" />
                    </span>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider">
                      {stateSlug}
                    </span>
                  </Link>
                );
              }
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}
