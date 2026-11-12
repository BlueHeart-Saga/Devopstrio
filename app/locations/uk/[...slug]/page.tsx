import React from "react";
import { notFound, permanentRedirect } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  resolveLocationRoute,
  getBreadcrumbsForResolvedPath,
  getNearbyLocations,
  getPublishedCities,
  getPublishedCityServices,
  getUKNationOrRegionFAQs,
  getUKCityFAQs,
  getEnrichedCityServiceFaqs,
  getExactServiceKeyword
} from "@/lib/location-content";
import { generateLocationMetadata } from "@/lib/location-seo";
import { ukNations, ukRegions, ukLocations } from "@/data/locations/uk-locations";
import { BreadcrumbSchema, UKLocationSchema, FAQSchema, ServiceSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { LocationHero } from "@/components/locations/LocationHero";
import { RegionNavigation } from "@/components/locations/RegionNavigation";
import { LocationServiceGrid } from "@/components/locations/LocationServiceGrid";
import { NearbyLocations } from "@/components/locations/NearbyLocations";
import { LocationDeliveryModel } from "@/components/locations/LocationDeliveryModel";
import { LocationFAQ } from "@/components/locations/LocationFAQ";
import { LocationCTA } from "@/components/locations/LocationCTA";
import { CityServiceTemplate } from "@/components/locations/CityServiceTemplate";
import { getPublishedMappingsForCity } from "@/data/locations/location-service-matrix";
import { servicesData } from "@/data/services";
import { getAdaptedServiceBySlug } from "@/data/locations/service-adapter";
import { getLocationServiceUrl } from "@/lib/location-urls";
import { normalizeDisplayText } from "@/lib/text-utils";
import { Reveal } from "@/components/ui/Reveal";
import BorderGlow from "@/components/ui/BorderGlow";

// Allow dynamic rendering for valid legacy paths and mapped aliases while strictly 404ing invalid routes
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveLocationRoute(slug);
  if (!resolved) {
    notFound();
  }
  return generateLocationMetadata(resolved);
}

export default async function LocationCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const resolved = resolveLocationRoute(slug);

  if (!resolved) {
    notFound();
  }

  // Canonical permanent 301/308 redirect for legacy multi-segment service paths
  if (resolved.type === "city-service" && slug.length > 1) {
    permanentRedirect(resolved.canonicalPath);
  }

  const breadcrumbs = getBreadcrumbsForResolvedPath(resolved);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devopstrio.co.uk";
  const canonicalUrl = `${siteUrl}${resolved.canonicalPath}`;

  // =========================================================================
  // 1. NATION HUB TEMPLATE (e.g. /locations/uk/england, /locations/uk/scotland)
  // =========================================================================
  if (resolved.type === "nation-hub" && resolved.nation) {
    const nation = resolved.nation;
    const subSections = [
      { id: "overview", label: "Overview" },
      { id: "coverage", label: "Regions" },
      { id: "services", label: "Practices" },
      { id: "delivery-model", label: "Delivery" },
      { id: "faq", label: "FAQ" }
    ];

    const nationFaqs = getUKNationOrRegionFAQs(nation.name);

    return (
      <main className="min-h-screen bg-black text-white font-sans">
        <BreadcrumbSchema items={breadcrumbs.map(b => ({ name: b.label, item: b.href || resolved.canonicalPath }))} />
        <UKLocationSchema
          pageType="nation-hub"
          nationName={normalizeDisplayText(nation.name)}
          url={canonicalUrl}
          description={normalizeDisplayText(nation.description)}
        />
        <FAQSchema faqs={nationFaqs} />

        <LocationHero
          locationName={normalizeDisplayText(nation.name)}
          nearMeConnector="Near Me in"
          breadcrumbs={breadcrumbs}
        />

        <SectionNavbar sections={subSections} />

        <div id="overview" className="w-full py-16 md:py-20 bg-black font-sans">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
            <Reveal className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Scalable Cloud Infrastructure Across {nation.name}
              </h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                Devopstrio partners with enterprises, public bodies, and fast-growth tech companies across {nation.name}. Our principal architects oversee multi-account landing zones, Kubernetes automation, and Zero-Trust security compliance.
              </p>
            </Reveal>
          </div>
        </div>

        <RegionNavigation currentNationId={nation.id} />
        <LocationServiceGrid cityName={nation.name} nationSlug={nation.slug} countryCode="uk" />
        <LocationDeliveryModel locationName={nation.name} />
        <LocationFAQ locationName={nation.name} faqs={nationFaqs} />
        <LocationCTA locationName={nation.name} />
      </main>
    );
  }

  // =========================================================================
  // 2. REGION HUB TEMPLATE (e.g. /locations/uk/england/east-of-england)
  // =========================================================================
  if (resolved.type === "region-hub" && resolved.region && resolved.nation) {
    const region = resolved.region;
    const nation = resolved.nation;
    const subSections = [
      { id: "overview", label: "Overview" },
      { id: "coverage", label: "Cities" },
      { id: "services", label: "Practices" },
      { id: "delivery-model", label: "Delivery" },
      { id: "faq", label: "FAQ" }
    ];

    const regionFaqs = getUKNationOrRegionFAQs(region.name);

    return (
      <main className="min-h-screen bg-black text-white font-sans">
        <BreadcrumbSchema items={breadcrumbs.map(b => ({ name: b.label, item: b.href || resolved.canonicalPath }))} />
        <UKLocationSchema
          pageType="region-hub"
          regionName={normalizeDisplayText(region.name)}
          nationName={normalizeDisplayText(nation.name)}
          url={canonicalUrl}
          description={normalizeDisplayText(region.description)}
        />
        <FAQSchema faqs={regionFaqs} />

        <LocationHero
          locationName={normalizeDisplayText(region.name)}
          nearMeConnector="Near Me in"
          breadcrumbs={breadcrumbs}
        />

        <SectionNavbar sections={subSections} />

        {/* Region Overview */}
        <section id="overview" className="w-full py-16 md:py-24 bg-black font-sans">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div className="space-y-5">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                    Driving Digital Engineering in {region.name}
                  </h2>
                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                    {region.description}
                  </p>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    Our London-based consulting practice and 24/7 SRE pods deploy modern cloud infrastructure across {region.name}, ensuring resilient operations, ISO 27001 security, and UK GDPR data residency.
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
                      Regional Industry Alignment
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Focused Sector Capabilities
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      Custom architectures designed around {region.name}&apos;s key economic sectors.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {region.keyIndustries.map((ind, i) => (
                      <span key={i} className="px-3.5 py-1.5 rounded-xl bg-zinc-900/60 text-xs sm:text-sm font-medium text-zinc-200">
                        {normalizeDisplayText(ind)}
                      </span>
                    ))}
                  </div>
                </BorderGlow>
              </Reveal>
            </div>
          </div>
        </section>

        <RegionNavigation currentNationId={nation.id} currentRegionId={region.id} />
        <LocationServiceGrid cityName={region.name} nationSlug={nation.slug} regionSlug={region.slug} countryCode="uk" />
        <LocationDeliveryModel locationName={region.name} />
        <LocationFAQ locationName={region.name} faqs={regionFaqs} />
        <LocationCTA locationName={region.name} />
      </main>
    );
  }

  // =========================================================================
  // 3. CITY HUB TEMPLATE (e.g. /locations/uk/england/greater-london/london or /locations/uk/england/london)
  // =========================================================================
  if (resolved.type === "city-hub" && resolved.location && resolved.nation && resolved.region) {
    const loc = resolved.location;
    const nation = resolved.nation;
    const region = resolved.region;
    const nearby = getNearbyLocations(loc);

    const isLondonHQ = loc.slug === "london";
    const subSections = [
      { id: "overview", label: "Overview" },
      { id: "services", label: "Practices" },
      { id: "nearby", label: "Nearby Areas" },
      { id: "delivery-model", label: "Delivery" },
      { id: "faq", label: "FAQ" }
    ];

    const cityFaqs = getUKCityFAQs(loc);

    return (
      <main className="min-h-screen bg-black text-white font-sans">
        <BreadcrumbSchema items={breadcrumbs.map(b => ({ name: b.label, item: b.href || resolved.canonicalPath }))} />
        <UKLocationSchema
          pageType="city-hub"
          cityName={normalizeDisplayText(loc.displayName)}
          regionName={normalizeDisplayText(region.name)}
          nationName={normalizeDisplayText(nation.name)}
          url={canonicalUrl}
          description={normalizeDisplayText(loc.shortDescription)}
          isPhysicalOffice={isLondonHQ}
        />
        <FAQSchema faqs={cityFaqs} />

        <LocationHero
          locationName={normalizeDisplayText(loc.displayName)}
          nearMeConnector="Near Me in"
          breadcrumbs={breadcrumbs}
          officeStatus={loc.officeStatus}
          verifiedAddress={loc.verifiedAddress?.streetAddress ? `${loc.verifiedAddress.streetAddress}, ${loc.verifiedAddress.locality}, ${loc.verifiedAddress.postalCode}` : undefined}
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
                    Engineering Resilient Digital Systems in {loc.displayName}
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
                    &ldquo;Accelerating digital transformation and production reliability for {loc.displayName} organizations with principal-led cloud migrations, GitOps pipelines, and 24/7 sovereign SRE operations.&rdquo;
                  </blockquote>
                </BorderGlow>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 12 Practices Grid */}
        <LocationServiceGrid
          cityName={loc.displayName}
          citySlug={loc.slug}
          nationSlug={nation.slug}
          regionSlug={region.slug}
          countryCode="uk"
        />

        {/* Nearby Cities */}
        {nearby && nearby.length > 0 && (
          <NearbyLocations currentLocationName={loc.displayName} nearbyLocations={nearby} />
        )}

        {/* UK Delivery Model */}
        <LocationDeliveryModel locationName={loc.displayName} />

        {/* City FAQ */}
        <LocationFAQ locationName={loc.displayName} faqs={cityFaqs} />

        {/* Conversion CTA */}
        <LocationCTA locationName={loc.displayName} />
      </main>
    );
  }

  // =========================================================================
  // 4. CITY + SERVICE LANDING PAGE (e.g. /locations/uk/cambridge-cloud-services)
  // =========================================================================
  if (resolved.type === "city-service" && resolved.location && resolved.nation && resolved.serviceMapping) {
    const loc = resolved.location;
    const nation = resolved.nation;
    const sm = resolved.serviceMapping;
    const region = resolved.region;
    const service = resolved.service;

    const isLondonHQ = loc.slug === "london";
    const nearby = getNearbyLocations(loc);

    // Compute related services for this city
    const publishedForCity = getPublishedMappingsForCity(loc.slug).filter(m => m.serviceSlug !== sm.serviceSlug);
    const relatedServices = publishedForCity.map(m => {
      const s = servicesData[m.serviceSlug] || getAdaptedServiceBySlug(m.serviceSlug);
      const exactKeyword = getExactServiceKeyword(m.serviceSlug, s?.title || m.h1Title);
      return {
        slug: m.serviceSlug,
        title: normalizeDisplayText(`${exactKeyword} Near Me in ${loc.displayName}`),
        subtitle: normalizeDisplayText(s?.subtitle || m.metaDescription),
        href: getLocationServiceUrl("uk", loc.slug, m.serviceSlug)
      };
    });

    return (
      <>
        <BreadcrumbSchema items={breadcrumbs.map(b => ({ name: b.label, item: b.href || resolved.canonicalPath }))} />
        <UKLocationSchema
          pageType="city-service"
          cityName={normalizeDisplayText(loc.displayName)}
          regionName={normalizeDisplayText(region?.name || "England")}
          nationName={normalizeDisplayText(nation.name)}
          serviceName={normalizeDisplayText(service?.title || sm.h1Title)}
          url={canonicalUrl}
          description={normalizeDisplayText(sm.metaDescription)}
          isPhysicalOffice={isLondonHQ}
        />
        <ServiceSchema
          name={`${normalizeDisplayText(service?.title || "Cloud Engineering")} - ${loc.displayName}`}
          description={normalizeDisplayText(sm.metaDescription)}
          offers={sm.localSolution.deliverables.map(d => normalizeDisplayText(d))}
        />
        <FAQSchema faqs={getEnrichedCityServiceFaqs(sm, service, loc.displayName, "uk", "United Kingdom")} />

        <CityServiceTemplate
          countryCode="uk"
          countryName="United Kingdom"
          stateOrRegionName={region?.name || "England"}
          stateOrRegionSlug={region?.slug || "england"}
          nationSlug={nation.slug}
          cityName={loc.displayName}
          citySlug={loc.slug}
          officeStatus={loc.officeStatus}
          verifiedAddress={loc.verifiedAddress}
          canonicalUrl={canonicalUrl}
          breadcrumbs={breadcrumbs}
          service={service}
          serviceMapping={sm}
          isPhysicalOffice={isLondonHQ}
          nearbyLocations={nearby}
          relatedServices={relatedServices}
        />
      </>
    );
  }

  // Fallback if resolved state is incomplete
  notFound();
}

// Generate static params for all published pilot routes for maximum build performance and SEO indexability
export async function generateStaticParams() {
  const paramsList: { slug: string[] }[] = [];

  // 1. All 4 Nations
  Object.keys(ukNations).forEach(nSlug => {
    paramsList.push({ slug: [nSlug] });
  });

  // 2. All Published Cities (Clean Hierarchy: Country -> Nation -> City)
  const publishedCities = getPublishedCities();
  publishedCities.forEach(city => {
    paramsList.push({ slug: [city.nation, city.slug] });
  });

  // 3. All Published City + Service Combinations: Preferred Pattern /locations/uk/[location]-[service]
  const publishedServices = getPublishedCityServices();
  publishedServices.forEach(mapping => {
    paramsList.push({ slug: [`${mapping.citySlug}-${mapping.serviceSlug}`] });
  });

  // 4. Backward Compatibility: All 12 Regions
  Object.values(ukRegions).forEach(reg => {
    paramsList.push({ slug: [reg.nation, reg.slug] });
  });

  return paramsList;
}
