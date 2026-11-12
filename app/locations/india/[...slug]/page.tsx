import React from "react";
import { notFound, permanentRedirect } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Building2, ExternalLink } from "lucide-react";
import {
  resolveIndiaLocationRoute,
  getGlobalBreadcrumbs,
  getNearbyGlobalLocations,
  getPublishedIndiaCities,
  getPublishedIndiaStates,
  getGlobalStateFAQs,
  getGlobalCityFAQs
} from "@/lib/location-content-global";
import { generateGlobalLocationMetadata } from "@/lib/location-seo-global";
import { indiaStates, indiaLocations } from "@/data/locations/india-locations";
import { getPublishedIndiaCityServices, getPublishedIndiaMappingsForCity } from "@/data/locations/india-service-matrix";
import { servicesData } from "@/data/services";
import { getAdaptedServiceBySlug } from "@/data/locations/service-adapter";
import { CityServiceTemplate } from "@/components/locations/CityServiceTemplate";
import { getEnrichedCityServiceFaqs, getExactServiceKeyword } from "@/lib/location-content";
import { BreadcrumbSchema, FAQSchema, GlobalLocationSchema, ServiceSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { LocationHero } from "@/components/locations/LocationHero";
import { CountryNavigation } from "@/components/locations/CountryNavigation";
import { LocationServiceGrid } from "@/components/locations/LocationServiceGrid";
import { NearbyLocations } from "@/components/locations/NearbyLocations";
import { LocationDeliveryModel } from "@/components/locations/LocationDeliveryModel";
import { LocationFAQ } from "@/components/locations/LocationFAQ";
import { LocationCTA } from "@/components/locations/LocationCTA";
import { getLocationServiceUrl } from "@/lib/location-urls";
import { normalizeDisplayText } from "@/lib/text-utils";
import { Reveal } from "@/components/ui/Reveal";
import BorderGlow from "@/components/ui/BorderGlow";

// Allow dynamic runtime generation for valid location routes while strictly 404ing unknown paths
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveIndiaLocationRoute(slug);
  if (!resolved) {
    notFound();
  }
  return generateGlobalLocationMetadata(resolved);
}

export default async function IndiaLocationCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const resolved = resolveIndiaLocationRoute(slug);

  if (!resolved) {
    notFound();
  }

  // Canonical permanent 301/308 redirect for legacy multi-segment service paths
  if (resolved.type === "city-service" && slug.length > 1) {
    permanentRedirect(resolved.canonicalPath);
  }

  const breadcrumbs = getGlobalBreadcrumbs(resolved);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devopstrio.co.uk";
  const canonicalUrl = `${siteUrl}${resolved.canonicalPath}`;

  // =========================================================================
  // 1. STATE HUB TEMPLATE (e.g. /locations/india/karnataka)
  // =========================================================================
  if (resolved.type === "state-hub" && resolved.stateOrRegion && resolved.country) {
    const state = resolved.stateOrRegion;
    const country = resolved.country;
    const subSections = [
      { id: "overview", label: "Overview" },
      { id: "coverage", label: "Cities and Hubs" },
      { id: "services", label: "Practices" },
      { id: "delivery-model", label: "Delivery" },
      { id: "faq", label: "FAQ" }
    ];

    const stateFaqs = getGlobalStateFAQs(state, "india");

    return (
      <main className="min-h-screen bg-black text-white font-sans">
        <BreadcrumbSchema items={breadcrumbs.map(b => ({ name: b.label, item: b.href || resolved.canonicalPath }))} />
        <GlobalLocationSchema
          countryCode="india"
          countryName="India"
          stateOrRegionName={normalizeDisplayText(state.name)}
          url={canonicalUrl}
          description={normalizeDisplayText(state.description)}
        />
        <FAQSchema faqs={stateFaqs} />

        <LocationHero
          locationName={normalizeDisplayText(state.name)}
          nearMeConnector="Near Me in"
          breadcrumbs={breadcrumbs}
        />

        <SectionNavbar sections={subSections} />

        {/* State Overview and Tech Corridors */}
        <section id="overview" className="w-full py-16 md:py-24 bg-black font-sans">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div className="space-y-5">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                    Powering High-Growth Technology Infrastructure Across {state.name}
                  </h2>
                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                    {state.description}
                  </p>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    From enterprise Kubernetes clusters to sovereign cloud architectures compliant with India&apos;s Digital Personal Data Protection Act, our principal architects deliver resilient engineering across {state.name}.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <BorderGlow
                  edgeSensitivity={35}
                  glowColor="350 85 75"
                  backgroundColor="#0c0a10"
                  borderRadius={24}
                  glowRadius={36}
                  glowIntensity={1.0}
                  coneSpread={30}
                  colors={["#f43f5e", "#fb7185", "#38bdf8"]}
                  className="p-6 sm:p-8 space-y-6"
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-rose-400 block">
                      Regional Practice Leadership
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Corporate and Operations Delivery Centers
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      Supported directly by Devopstrio&apos;s verified corporate center in Bengaluru and 24/7 operations center in Thoothukudi, ensuring sub-15-minute P1 incident response SLAs.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-900 space-y-2">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                      Prominent Industry Corridors:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {state.keyIndustries.map((ind, i) => (
                        <span key={i} className="px-3.5 py-1.5 rounded-xl bg-zinc-900/60 text-xs sm:text-sm font-medium text-zinc-200">
                          {normalizeDisplayText(ind)}
                        </span>
                      ))}
                    </div>
                  </div>
                </BorderGlow>
              </Reveal>
            </div>
          </div>
        </section>

        <CountryNavigation
          countryCode="india"
          countryName="India"
          countrySlug="india"
          states={Object.values(indiaStates)}
          locations={indiaLocations}
          currentStateId={state.id}
        />
        <LocationServiceGrid cityName={state.name} nationSlug={`india/${state.slug}`} countryCode="india" />
        <LocationDeliveryModel locationName={state.name} />
        <LocationFAQ locationName={state.name} faqs={stateFaqs} />
        <LocationCTA locationName={state.name} />
      </main>
    );
  }

  // =========================================================================
  // 2. CITY HUB TEMPLATE (e.g. /locations/india/karnataka/bengaluru)
  // =========================================================================
  if (resolved.type === "city-hub" && resolved.location && resolved.stateOrRegion && resolved.country) {
    const loc = resolved.location;
    const state = resolved.stateOrRegion;
    const country = resolved.country;
    const nearby = getNearbyGlobalLocations(loc);

    const isPhysicalOffice = loc.officeStatus === "corporate-office" || loc.officeStatus === "operations-center";
    const subSections = [
      { id: "overview", label: "Overview" },
      { id: "services", label: "Practices" },
      { id: "nearby", label: "Nearby Areas" },
      { id: "delivery-model", label: "Delivery" },
      { id: "faq", label: "FAQ" }
    ];

    const cityFaqs = getGlobalCityFAQs(loc, state, "india");

    return (
      <main className="min-h-screen bg-black text-white font-sans">
        <BreadcrumbSchema items={breadcrumbs.map(b => ({ name: b.label, item: b.href || resolved.canonicalPath }))} />
        <GlobalLocationSchema
          countryCode="india"
          countryName="India"
          stateOrRegionName={normalizeDisplayText(state.name)}
          cityName={normalizeDisplayText(loc.displayName)}
          url={canonicalUrl}
          description={normalizeDisplayText(loc.shortDescription)}
          isPhysicalOffice={isPhysicalOffice}
        />
        <FAQSchema faqs={cityFaqs} />

        <LocationHero
          locationName={normalizeDisplayText(loc.displayName)}
          nearMeConnector="Near Me in"
          breadcrumbs={breadcrumbs}
          officeStatus={loc.officeStatus}
          verifiedAddress={loc.verifiedAddress?.streetAddress ? `${loc.verifiedAddress.streetAddress}, ${loc.verifiedAddress.locality}` : undefined}
        />

        <SectionNavbar sections={subSections} />

        {/* City Overview and Tech Profile */}
        <section id="overview" className="w-full py-16 md:py-24 bg-black font-sans">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div className="space-y-5">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                    Engineering Resilient Digital Systems in {loc.displayName}
                  </h2>
                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                    {loc.economicProfile?.techHubDescription || loc.shortDescription}
                  </p>

                  {loc.deliveryHighlights && (
                    <div className="space-y-2.5 pt-2">
                      {loc.deliveryHighlights.map((dh, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-300">
                          <CheckCircle2 size={16} className="text-rose-500 shrink-0 mt-1" />
                          <span>{normalizeDisplayText(dh)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <BorderGlow
                  edgeSensitivity={35}
                  glowColor="350 85 75"
                  backgroundColor="#0c0a10"
                  borderRadius={24}
                  glowRadius={36}
                  glowIntensity={1.0}
                  coneSpread={30}
                  colors={["#f43f5e", "#fb7185", "#38bdf8"]}
                  className="p-6 sm:p-8 space-y-6"
                >
                  {isPhysicalOffice && loc.verifiedAddress ? (
                    <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 space-y-2">
                      <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                        <Building2 size={16} />
                        <span>Verified Regional Facility ({loc.officeStatus === "corporate-office" ? "Corporate Office" : "Operations Center"})</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {loc.verifiedAddress.streetAddress}, {loc.verifiedAddress.locality}, {loc.verifiedAddress.regionOrState} {loc.verifiedAddress.postalCode}
                      </p>
                      {loc.verifiedAddress.googleMapsUrl && (
                        <a
                          href={loc.verifiedAddress.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-white pt-1"
                        >
                          <span>View on Google Maps</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  ) : null}

                  {loc.economicProfile?.dominantIndustries && (
                    <div>
                      <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2.5">
                        Leading Industry Sectors in {loc.displayName}:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {loc.economicProfile.dominantIndustries.map((ind, i) => (
                          <span key={i} className="px-3.5 py-1.5 rounded-xl bg-zinc-900/60 text-xs sm:text-sm font-medium text-zinc-200">
                            {normalizeDisplayText(ind)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {loc.economicProfile?.keyClusters && (
                    <div>
                      <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2.5">
                        Regional Tech Clusters:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {loc.economicProfile.keyClusters.map((kc, i) => (
                          <span key={i} className="px-3.5 py-1.5 rounded-xl bg-zinc-900/40 text-xs sm:text-sm text-rose-400 font-semibold">
                            {normalizeDisplayText(kc)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </BorderGlow>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 12 Practices Grid */}
        <LocationServiceGrid
          cityName={loc.displayName}
          citySlug={loc.slug}
          nationSlug="india"
          regionSlug={state.slug}
          countryCode="india"
        />

        {/* Nearby Areas */}
        {nearby && nearby.length > 0 && (
          <NearbyLocations currentLocationName={loc.displayName} nearbyLocations={nearby} />
        )}

        {/* Delivery Model */}
        <LocationDeliveryModel locationName={loc.displayName} />

        {/* City FAQs */}
        <LocationFAQ locationName={loc.displayName} faqs={cityFaqs} />

        {/* City CTA */}
        <LocationCTA locationName={loc.displayName} />
      </main>
    );
  }

  // =========================================================================
  // 3. CITY + SERVICE LANDING PAGE (e.g. /locations/india/bengaluru-cloud-managed-services)
  // =========================================================================
  if (resolved.type === "city-service" && resolved.serviceMapping && resolved.location && resolved.stateOrRegion && resolved.country) {
    const sm = resolved.serviceMapping;
    const loc = resolved.location;
    const state = resolved.stateOrRegion;
    const service = resolved.service;

    const isPhysicalOffice = loc.officeStatus === "corporate-office" || loc.officeStatus === "operations-center";
    const nearby = getNearbyGlobalLocations(loc);

    // Compute related services for this city
    const publishedForCity = getPublishedIndiaMappingsForCity(loc.slug).filter(m => m.serviceSlug !== sm.serviceSlug);
    const relatedServices = publishedForCity.map(m => {
      const s = servicesData[m.serviceSlug] || getAdaptedServiceBySlug(m.serviceSlug);
      const exactKeyword = getExactServiceKeyword(m.serviceSlug, s?.title || m.h1Title);
      return {
        slug: m.serviceSlug,
        title: normalizeDisplayText(`${exactKeyword} Near Me in ${loc.displayName}`),
        subtitle: normalizeDisplayText(s?.subtitle || m.metaDescription),
        href: getLocationServiceUrl("india", loc.slug, m.serviceSlug)
      };
    });

    return (
      <>
        <BreadcrumbSchema items={breadcrumbs.map(b => ({ name: b.label, item: b.href || resolved.canonicalPath }))} />
        <GlobalLocationSchema
          countryCode="india"
          countryName="India"
          stateOrRegionName={normalizeDisplayText(state.name)}
          cityName={normalizeDisplayText(loc.displayName)}
          serviceName={normalizeDisplayText(service?.title || sm.h1Title)}
          url={canonicalUrl}
          description={normalizeDisplayText(sm.metaDescription)}
          isPhysicalOffice={isPhysicalOffice}
        />
        <ServiceSchema
          name={`${normalizeDisplayText(service?.title || "Cloud Engineering")} - ${loc.displayName}`}
          description={normalizeDisplayText(sm.metaDescription)}
          offers={sm.localSolution.deliverables.map(d => normalizeDisplayText(d))}
        />
        <FAQSchema faqs={getEnrichedCityServiceFaqs(sm, service, loc.displayName, "india", "India")} />

        <CityServiceTemplate
          countryCode="india"
          countryName="India"
          stateOrRegionName={state.name}
          stateOrRegionSlug={state.slug}
          cityName={loc.displayName}
          citySlug={loc.slug}
          officeStatus={loc.officeStatus}
          verifiedAddress={loc.verifiedAddress}
          canonicalUrl={canonicalUrl}
          breadcrumbs={breadcrumbs}
          service={service}
          serviceMapping={sm}
          isPhysicalOffice={isPhysicalOffice}
          nearbyLocations={nearby}
          relatedServices={relatedServices}
        />
      </>
    );
  }

  // Fallback
  notFound();
}

// Generate static params for all published pilot routes for India
export async function generateStaticParams() {
  const paramsList: { slug: string[] }[] = [];

  // 1. Published States
  const publishedStates = getPublishedIndiaStates();
  publishedStates.forEach(st => {
    paramsList.push({ slug: [st.slug] });
  });

  // 2. Published Cities
  const publishedCities = getPublishedIndiaCities();
  publishedCities.forEach(city => {
    const st = indiaStates[city.stateOrRegionId];
    if (st) {
      paramsList.push({ slug: [st.slug, city.slug] });
    }
  });

  // 3. Published City + Service Combinations: Preferred Pattern /locations/india/[location]-[service]
  const publishedServices = getPublishedIndiaCityServices();
  publishedServices.forEach(mapping => {
    paramsList.push({ slug: [`${mapping.citySlug}-${mapping.serviceSlug}`] });
  });

  return paramsList;
}
