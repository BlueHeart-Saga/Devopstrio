"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { servicesData } from "@/data/services";
import { getPublishedMappingsForCity } from "@/data/locations/location-service-matrix";
import { getPublishedIndiaCityServices } from "@/data/locations/india-service-matrix";
import { getPublishedUSCityServices } from "@/data/locations/us-service-matrix";
import { getExactServiceKeyword } from "@/lib/location-content";
import { getLocationServiceUrl, SupportedCountryCode } from "@/lib/location-urls";
import { normalizeDisplayText } from "@/lib/text-utils";
import { Reveal } from "@/components/ui/Reveal";

interface LocationServiceGridProps {
  cityName?: string;
  citySlug?: string;
  nationSlug?: string;
  regionSlug?: string;
  countryCode?: SupportedCountryCode | "uk" | "india" | "us";
}

export function LocationServiceGrid({
  cityName = "United Kingdom",
  citySlug,
  nationSlug = "england",
  regionSlug = "greater-london",
  countryCode = "uk"
}: LocationServiceGridProps) {
  let publishedServiceSlugs = new Set<string>();

  if (citySlug) {
    if (countryCode === "india") {
      const indiaServices = getPublishedIndiaCityServices().filter(m => m.citySlug === citySlug);
      publishedServiceSlugs = new Set(indiaServices.map(m => m.serviceSlug));
    } else if (countryCode === "us") {
      const usServices = getPublishedUSCityServices().filter(m => m.citySlug === citySlug);
      publishedServiceSlugs = new Set(usServices.map(m => m.serviceSlug));
    } else {
      const ukServices = getPublishedMappingsForCity(citySlug);
      publishedServiceSlugs = new Set(ukServices.map(m => m.serviceSlug));
    }
  }

  const allServices = Object.values(servicesData);

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Enterprise Technology Services for <span className="text-rose-500">{cityName}</span>
          </h2>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            All 12 Devopstrio engineering practice areas are supported across {cityName} through our enterprise delivery architecture, 24/7 SRE monitoring, and certified principal engineers.
          </p>
        </Reveal>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, idx) => {
            const hasDedicatedCityPage = Boolean(citySlug);
            let dedicatedUrl: string | null = null;

            if (citySlug) {
              dedicatedUrl = getLocationServiceUrl(countryCode, citySlug, service.slug);
            }

            return (
              <Reveal key={service.slug} delay={idx * 0.02} className="h-full">
                <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-zinc-950/60 hover:bg-zinc-900/40 transition-all duration-300 group">
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                        Practice 0{idx + 1}
                      </span>
                      {hasDedicatedCityPage && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-950/40 text-rose-400">
                          Dedicated City Page
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-white group-hover:text-rose-400 transition-colors mb-2">
                      {normalizeDisplayText(service.title)}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                      {normalizeDisplayText(service.subtitle)}
                    </p>

                    {/* Capabilities list */}
                    <div className="space-y-1.5 mb-6">
                      {service.capabilities?.slice(0, 3).map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                          <CheckCircle size={13} className="text-rose-500 shrink-0" />
                          <span className="line-clamp-1">{normalizeDisplayText(cap.title)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-zinc-900/80 flex items-center justify-between text-xs font-semibold">
                    {hasDedicatedCityPage && dedicatedUrl ? (
                      <Link
                        href={dedicatedUrl}
                        className="text-rose-400 hover:text-white transition-colors inline-flex items-center gap-1 font-semibold"
                      >
                        <span className="line-clamp-1">{normalizeDisplayText(getExactServiceKeyword(service.slug, service.title))} Near Me in {cityName}</span>
                        <ArrowUpRight size={13} className="shrink-0" />
                      </Link>
                    ) : (
                      <span className="text-zinc-600">Regional Capability</span>
                    )}

                    <Link
                      href={`/services/${service.slug}`}
                      className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      <span>National Practice</span>
                      <ArrowUpRight size={13} />
                    </Link>
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
