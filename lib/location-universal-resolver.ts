import { globalCountries } from "@/data/locations/global-locations";
import { indiaStates, indiaLocations } from "@/data/locations/india-locations";
import { usStates, usLocations } from "@/data/locations/us-locations";
import { ukNations, ukRegions, ukLocations } from "@/data/locations/uk-locations";
import { getIndiaPilotMapping, getPublishedIndiaMappingsForCity } from "@/data/locations/india-service-matrix";
import { getUSPilotMapping, getPublishedUSMappingsForCity } from "@/data/locations/us-service-matrix";
import { getPilotMapping, getPublishedMappingsForCity } from "@/data/locations/location-service-matrix";
import { getAdaptedServiceBySlug } from "@/data/locations/service-adapter";
import { TARGET_SERVICE_SLUGS, ALL_SUPPORTED_SERVICE_SLUGS, getExactServiceKeyword } from "@/lib/keyword-utils";
import { getNearbyLocations } from "@/lib/location-content";
import { getNearbyGlobalLocations } from "@/lib/location-content-global";
import { servicesData } from "@/data/services";
import { getLocationServiceUrl, getLocationServiceCanonicalUrl } from "@/lib/location-urls";
import { normalizeDisplayText } from "@/lib/text-utils";
import {
  GlobalCountry,
  GlobalRegionOrState,
  GlobalLocation,
  UKNation,
  UKRegion,
  UKLocation,
  LocationServiceMapping,
  OfficeStatus
} from "@/data/locations/types";

export interface ResolvedUniversalServicePath {
  countryCode: "india" | "uk" | "us";
  countryName: string;
  stateOrRegionName: string;
  stateOrRegionSlug: string;
  nationSlug?: string;
  cityName: string;
  citySlug: string;
  officeStatus: OfficeStatus;
  verifiedAddress?: any;
  canonicalUrl: string;
  breadcrumbs: { label: string; href?: string }[];
  service: any;
  serviceMapping: LocationServiceMapping;
  isPhysicalOffice: boolean;
  nearbyLocations: any[];
  relatedServices: any[];
}

export function resolveUniversalLocationSlug(slug: string): ResolvedUniversalServicePath | null {
  if (!slug) return null;

  const raw = slug.toLowerCase().trim();

  // Check known services in descending length order so longer matches win
  const sortedServices = [...ALL_SUPPORTED_SERVICE_SLUGS].sort((a, b) => b.length - a.length);

  let matchedServiceSlug: string | null = null;
  let prefixWithoutService = raw;

  for (const sSlug of sortedServices) {
    if (raw.endsWith(`-${sSlug}`)) {
      matchedServiceSlug = sSlug;
      prefixWithoutService = raw.slice(0, -(sSlug.length + 1));
      break;
    } else if (raw.endsWith(sSlug)) {
      matchedServiceSlug = sSlug;
      prefixWithoutService = raw.slice(0, -sSlug.length);
      break;
    }
  }

  if (!matchedServiceSlug || !prefixWithoutService) {
    return null;
  }

  // Determine Country & City
  let countryCandidate: "india" | "uk" | "us" | null = null;
  let cityCandidateSlug = prefixWithoutService;

  if (prefixWithoutService.startsWith("india-")) {
    countryCandidate = "india";
    cityCandidateSlug = prefixWithoutService.replace(/^india-/, "");
  } else if (prefixWithoutService.startsWith("india")) {
    countryCandidate = "india";
    cityCandidateSlug = prefixWithoutService.replace(/^india/, "");
  } else if (prefixWithoutService.startsWith("uk-")) {
    countryCandidate = "uk";
    cityCandidateSlug = prefixWithoutService.replace(/^uk-/, "");
  } else if (prefixWithoutService.startsWith("uk")) {
    countryCandidate = "uk";
    cityCandidateSlug = prefixWithoutService.replace(/^uk/, "");
  } else if (prefixWithoutService.startsWith("us-")) {
    countryCandidate = "us";
    cityCandidateSlug = prefixWithoutService.replace(/^us-/, "");
  } else if (prefixWithoutService.startsWith("us")) {
    countryCandidate = "us";
    cityCandidateSlug = prefixWithoutService.replace(/^us/, "");
  }

  // 1. Try India matching
  if (!countryCandidate || countryCandidate === "india") {
    const indiaCity = Object.values(indiaLocations).find(
      l => l.slug === cityCandidateSlug && l.publicationStatus === "published"
    );

    if (indiaCity) {
      const state = indiaStates[indiaCity.stateOrRegionId];
      const sm = getIndiaPilotMapping(indiaCity.slug, matchedServiceSlug);
      const service = getAdaptedServiceBySlug(matchedServiceSlug);

      if (sm && service) {
        const canonicalUrl = getLocationServiceCanonicalUrl("india", indiaCity.slug, matchedServiceSlug);
        const nearby = getNearbyGlobalLocations(indiaCity);
        const publishedForCity = getPublishedIndiaMappingsForCity(indiaCity.slug).filter(m => m.serviceSlug !== sm.serviceSlug);
        const relatedServices = publishedForCity.map(m => {
          const s = servicesData[m.serviceSlug] || getAdaptedServiceBySlug(m.serviceSlug);
          const exactKeyword = getExactServiceKeyword(m.serviceSlug, s?.title || m.h1Title);
          return {
            slug: m.serviceSlug,
            title: normalizeDisplayText(`${exactKeyword} Near Me in ${indiaCity.displayName}`),
            subtitle: normalizeDisplayText(s?.subtitle || m.metaDescription),
            href: getLocationServiceUrl("india", indiaCity.slug, m.serviceSlug)
          };
        });

        return {
          countryCode: "india",
          countryName: "India",
          stateOrRegionName: normalizeDisplayText(state?.name || "Karnataka"),
          stateOrRegionSlug: state?.slug || "karnataka",
          cityName: normalizeDisplayText(indiaCity.displayName),
          citySlug: indiaCity.slug,
          officeStatus: indiaCity.officeStatus,
          verifiedAddress: indiaCity.verifiedAddress,
          canonicalUrl,
          breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
            { label: "India", href: "/locations/india" },
            { label: normalizeDisplayText(indiaCity.displayName), href: `/locations/india/${state?.slug || "karnataka"}/${indiaCity.slug}` },
            { label: normalizeDisplayText(sm.h1Title) }
          ],
          service,
          serviceMapping: sm,
          isPhysicalOffice: indiaCity.officeStatus === "corporate-office" || indiaCity.officeStatus === "operations-center",
          nearbyLocations: nearby || [],
          relatedServices
        };
      }
    }
  }

  // 2. Try UK matching
  if (!countryCandidate || countryCandidate === "uk") {
    const ukCity = Object.values(ukLocations).find(
      l => l.slug === cityCandidateSlug && l.publicationStatus === "published"
    );

    if (ukCity) {
      const nation = ukNations[ukCity.nation];
      const region = ukRegions[ukCity.region];
      const sm = getPilotMapping(ukCity.slug, matchedServiceSlug);
      const service = getAdaptedServiceBySlug(matchedServiceSlug);

      if (sm && service) {
        const canonicalUrl = getLocationServiceCanonicalUrl("uk", ukCity.slug, matchedServiceSlug);
        const nearby = getNearbyLocations(ukCity);
        const publishedForCity = getPublishedMappingsForCity(ukCity.slug).filter(m => m.serviceSlug !== sm.serviceSlug);
        const relatedServices = publishedForCity.map(m => {
          const s = servicesData[m.serviceSlug] || getAdaptedServiceBySlug(m.serviceSlug);
          const exactKeyword = getExactServiceKeyword(m.serviceSlug, s?.title || m.h1Title);
          return {
            slug: m.serviceSlug,
            title: normalizeDisplayText(`${exactKeyword} Near Me in ${ukCity.displayName}`),
            subtitle: normalizeDisplayText(s?.subtitle || m.metaDescription),
            href: getLocationServiceUrl("uk", ukCity.slug, m.serviceSlug)
          };
        });

        return {
          countryCode: "uk",
          countryName: "United Kingdom",
          stateOrRegionName: normalizeDisplayText(region?.name || nation?.name || "England"),
          stateOrRegionSlug: region?.slug || nation?.slug || "england",
          nationSlug: nation?.slug || "england",
          cityName: normalizeDisplayText(ukCity.displayName),
          citySlug: ukCity.slug,
          officeStatus: ukCity.officeStatus,
          verifiedAddress: ukCity.verifiedAddress,
          canonicalUrl,
          breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
            { label: "United Kingdom", href: "/locations/uk" },
            { label: normalizeDisplayText(ukCity.displayName), href: `/locations/uk/${nation?.slug || "england"}/${ukCity.slug}` },
            { label: normalizeDisplayText(sm.h1Title) }
          ],
          service,
          serviceMapping: sm,
          isPhysicalOffice: ukCity.slug === "london",
          nearbyLocations: nearby || [],
          relatedServices
        };
      }
    }
  }

  // 3. Try US matching
  if (!countryCandidate || countryCandidate === "us") {
    const usCity = Object.values(usLocations).find(
      l => l.slug === cityCandidateSlug && l.publicationStatus === "published"
    );

    if (usCity) {
      const state = usStates[usCity.stateOrRegionId];
      const sm = getUSPilotMapping(usCity.slug, matchedServiceSlug);
      const service = getAdaptedServiceBySlug(matchedServiceSlug);

      if (sm && service) {
        const canonicalUrl = getLocationServiceCanonicalUrl("us", usCity.slug, matchedServiceSlug);
        const nearby = getNearbyGlobalLocations(usCity);
        const publishedForCity = getPublishedUSMappingsForCity(usCity.slug).filter(m => m.serviceSlug !== sm.serviceSlug);
        const relatedServices = publishedForCity.map(m => {
          const s = servicesData[m.serviceSlug] || getAdaptedServiceBySlug(m.serviceSlug);
          const exactKeyword = getExactServiceKeyword(m.serviceSlug, s?.title || m.h1Title);
          return {
            slug: m.serviceSlug,
            title: normalizeDisplayText(`${exactKeyword} Near Me in ${usCity.displayName}`),
            subtitle: normalizeDisplayText(s?.subtitle || m.metaDescription),
            href: getLocationServiceUrl("us", usCity.slug, m.serviceSlug)
          };
        });

        return {
          countryCode: "us",
          countryName: "United States",
          stateOrRegionName: normalizeDisplayText(state?.name || "Tennessee"),
          stateOrRegionSlug: state?.slug || "tennessee",
          cityName: normalizeDisplayText(usCity.displayName),
          citySlug: usCity.slug,
          officeStatus: usCity.officeStatus,
          verifiedAddress: usCity.verifiedAddress,
          canonicalUrl,
          breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
            { label: "United States", href: "/locations/us" },
            { label: normalizeDisplayText(usCity.displayName), href: `/locations/us/${state?.slug || "tennessee"}/${usCity.slug}` },
            { label: normalizeDisplayText(sm.h1Title) }
          ],
          service,
          serviceMapping: sm,
          isPhysicalOffice: usCity.officeStatus === "sub-regional-office" || usCity.officeStatus === "corporate-office",
          nearbyLocations: nearby || [],
          relatedServices
        };
      }
    }
  }

  return null;
}
