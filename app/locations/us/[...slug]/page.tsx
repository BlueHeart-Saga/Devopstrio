import React from "react";
import { notFound, permanentRedirect } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  resolveUSLocationRoute,
  getGlobalBreadcrumbs,
  getNearbyGlobalLocations,
  getPublishedUSCities,
  getPublishedUSStates,
  getGlobalStateFAQs,
  getGlobalCityFAQs
} from "@/lib/location-content-global";
import { generateGlobalLocationMetadata } from "@/lib/location-seo-global";
import { usStates, usLocations } from "@/data/locations/us-locations";
import { getPublishedUSCityServices, getPublishedUSMappingsForCity } from "@/data/locations/us-service-matrix";
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
  const resolved = resolveUSLocationRoute(slug);
  if (!resolved) {
    notFound();
  }
  return generateGlobalLocationMetadata(resolved);
}

export default async function USLocationCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const resolved = resolveUSLocationRoute(slug);

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
  // 1. STATE HUB TEMPLATE (e.g. /locations/us/tennessee, /locations/us/texas)
  // =========================================================================
  if (resolved.type === "state-hub" && resolved.stateOrRegion && resolved.country) {
    const state = resolved.stateOrRegion;
    const country = resolved.country;
    const subSections = [
      { id: "overview", label: "Overview" },
      { id: "coverage", label: "Metro Hubs" },
      { id: "services", label: "Practices" },
      { id: "delivery-model", label: "Delivery" },
      { id: "faq", label: "FAQ" }
    ];

    const stateFaqs = getGlobalStateFAQs(state, "us");

    return (
      <main className="min-h-screen bg-black text-white font-sans">
        <BreadcrumbSchema items={breadcrumbs.map(b => ({ name: b.label, item: b.href || resolved.canonicalPath }))} />
        <GlobalLocationSchema
          countryCode="us"
          countryName="United States"
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
                    Enterprise Cloud, SRE and Automation Across {state.name}
                  </h2>
                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                    {state.description}
                  </p>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    Supported by Devopstrio&apos;s verified North American technology office in Mt. Juliet, TN (Greater Nashville area), delivering follow-the-sun 24/7 SRE monitoring, HIPAA-compliant healthcare architectures, and FinOps cloud cost optimization.
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
                      North America Practice Hub
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Physical Sub-Regional Office Location
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      522 Aventura Dr, Mt. Juliet, TN 37122. Direct executive scoping, sprint workshops, and quarterly architecture governance for enterprises across {state.name}.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-900 space-y-2">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                      Key Industrial Verticals:
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

        {/* Metro Coverage */}
        <CountryNavigation
          countryCode="us"
          countryName="United States"
          countrySlug="us"
          states={Object.values(usStates)}
          locations={usLocations}
          currentStateId={state.id}
        />

        {/* 12 Practices Grid */}
        <LocationServiceGrid cityName={state.name} nationSlug={`us/${state.slug}`} countryCode="us" />

        {/* Delivery Model */}
        <LocationDeliveryModel locationName={state.name} />

        {/* State FAQs */}
        <LocationFAQ locationName={state.name} faqs={stateFaqs} />

        {/* State CTA */}
        <LocationCTA locationName={state.name} />
      </main>
    );
  }

  // =========================================================================
  // 2. CITY HUB TEMPLATE (e.g. /locations/us/tennessee/nashville)
  // =========================================================================
  if (resolved.type === "city-hub" && resolved.location && resolved.stateOrRegion && resolved.country) {
    const loc = resolved.location;
    const state = resolved.stateOrRegion;
    const country = resolved.country;
    const nearby = getNearbyGlobalLocations(loc);

    const isPhysicalOffice = loc.officeStatus === "sub-regional-office" || loc.officeStatus === "corporate-office" || loc.officeStatus === "operations-center" || loc.officeStatus === "headquarters";
    const subSections = [
      { id: "overview", label: "Overview" },
      { id: "services", label: "Practices" },
      { id: "nearby", label: "Nearby Areas" },
      { id: "delivery-model", label: "Delivery" },
      { id: "faq", label: "FAQ" }
    ];

    const cityFaqs = getGlobalCityFAQs(loc, state, "us");

    return (
      <main className="min-h-screen bg-black text-white font-sans">
        <BreadcrumbSchema items={breadcrumbs.map(b => ({ name: b.label, item: b.href || resolved.canonicalPath }))} />
        <GlobalLocationSchema
          countryCode="us"
          countryName="United States"
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
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                    Regional Delivery Hub • {loc.displayName}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                    Enterprise Cloud and DevOps Architecture in {loc.displayName}
                  </h2>
                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                    {loc.economicProfile?.techHubDescription || loc.shortDescription}
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
                  className="p-8 sm:p-10 flex flex-col justify-center"
                >
                  <blockquote className="text-base sm:text-lg md:text-xl text-zinc-100 font-medium leading-relaxed italic border-l-2 border-rose-500 pl-4 sm:pl-5 py-1">
                    &ldquo;Accelerating cloud modernization, Kubernetes orchestration, and 24/7 sovereign SRE operations for {loc.displayName} enterprises with guaranteed SLA reliability.&rdquo;
                  </blockquote>
                </BorderGlow>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Services in City */}
        <section id="services" className="w-full py-16 md:py-24 bg-black font-sans">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
            <Reveal className="mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">
                Cloud and DevOps Practices in {loc.displayName}
              </h2>
              <p className="text-zinc-400 text-base md:text-lg max-w-3xl">
                Tailored engineering architectures and dedicated operational pods aligned with {loc.displayName}&apos;s tech ecosystem.
              </p>
            </Reveal>

            <LocationServiceGrid
              cityName={loc.displayName}
              citySlug={loc.slug}
              nationSlug="us"
              regionSlug={state.slug}
              countryCode="us"
            />
          </div>
        </section>

        {/* Nearby Cities / Sub-Markets */}
        {nearby && nearby.length > 0 && (
          <NearbyLocations currentLocationName={loc.displayName} nearbyLocations={nearby} />
        )}

        {/* Global Delivery Model */}
        <LocationDeliveryModel locationName={loc.displayName} />

        {/* City FAQ */}
        <LocationFAQ locationName={loc.displayName} faqs={cityFaqs} />

        {/* Conversion CTA */}
        <LocationCTA
          locationName={`${loc.displayName}`}
          primaryBtnText="START ARCHITECTURE REVIEW"
          secondaryBtnText={`EXPLORE ${normalizeDisplayText(state.name).toUpperCase()} HUB`}
        />
      </main>
    );
  }

  // =========================================================================
  // 3. CITY-SERVICE TEMPLATE (e.g. /locations/us/nashville-cloud-managed-services)
  // =========================================================================
  if (
    resolved.type === "city-service" &&
    resolved.location &&
    resolved.stateOrRegion &&
    resolved.country &&
    resolved.serviceMapping
  ) {
    const loc = resolved.location;
    const state = resolved.stateOrRegion;
    const sm = resolved.serviceMapping;
    const service = resolved.service;
    const isPhysicalOffice = loc.officeStatus === "sub-regional-office" || loc.officeStatus === "corporate-office" || loc.officeStatus === "operations-center" || loc.officeStatus === "headquarters";

    const nearby = getNearbyGlobalLocations(loc);

    // Compute related services for this city
    const publishedForCity = getPublishedUSMappingsForCity(loc.slug).filter(m => m.serviceSlug !== sm.serviceSlug);
    const relatedServices = publishedForCity.map(m => {
      const s = servicesData[m.serviceSlug] || getAdaptedServiceBySlug(m.serviceSlug);
      const exactKeyword = getExactServiceKeyword(m.serviceSlug, s?.title || m.h1Title);
      return {
        slug: m.serviceSlug,
        title: normalizeDisplayText(`${exactKeyword} Near Me in ${loc.displayName}`),
        subtitle: normalizeDisplayText(s?.subtitle || m.metaDescription),
        href: getLocationServiceUrl("us", loc.slug, m.serviceSlug)
      };
    });

    return (
      <>
        <BreadcrumbSchema items={breadcrumbs.map(b => ({ name: b.label, item: b.href || resolved.canonicalPath }))} />
        <GlobalLocationSchema
          countryCode="us"
          countryName="United States"
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
        <FAQSchema faqs={getEnrichedCityServiceFaqs(sm, service, loc.displayName, "us", "United States")} />

        <CityServiceTemplate
          countryCode="us"
          countryName="United States"
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

// Generate static params for all published pilot routes for US
export async function generateStaticParams() {
  const paramsList: { slug: string[] }[] = [];

  // 1. Published States
  const publishedStates = getPublishedUSStates();
  publishedStates.forEach(st => {
    paramsList.push({ slug: [st.slug] });
  });

  // 2. Published Cities
  const publishedCities = getPublishedUSCities();
  publishedCities.forEach(city => {
    const st = usStates[city.stateOrRegionId];
    if (st) {
      paramsList.push({ slug: [st.slug, city.slug] });
    }
  });

  // 3. Published City + Service Combinations: Preferred Pattern /locations/us/[location]-[service]
  const publishedServices = getPublishedUSCityServices();
  publishedServices.forEach(mapping => {
    paramsList.push({ slug: [`${mapping.citySlug}-${mapping.serviceSlug}`] });
  });

  return paramsList;
}
