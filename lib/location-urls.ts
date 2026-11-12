/**
 * Central Location URL Generator Utility for Devopstrio
 *
 * Enforces the required URL pattern:
 *   /locations/[country]/[location]-[service]
 *
 * Prevents string concatenation errors like 'indiabengaluru' and unifies
 * link creation across navigation, grids, nearby sections, breadcrumbs,
 * sitemaps, and structured data schemas.
 */

import { ALL_SUPPORTED_SERVICE_SLUGS, TARGET_SERVICE_SLUGS } from "@/lib/keyword-utils";

export type SupportedCountryCode = "uk" | "india" | "us";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://devopstrio.co.uk";

/**
 * Strips accidental country prefixes and cleans slug string
 */
export function cleanSlugSegment(segment: string): string {
  if (!segment) return "";
  return segment
    .toLowerCase()
    .trim()
    .replace(/^https?:\/\/[^/]+/i, "")
    .replace(/^\/+|\/+$/g, "");
}

/**
 * Generates the preferred canonical URL for a location-service page:
 * Required Pattern: /locations/[country]/[location]-[service]
 *
 * Examples:
 *   getLocationServiceUrl("india", "bengaluru", "cloud-managed-services")
 *   -> "/locations/india/bengaluru-cloud-managed-services"
 *
 *   getLocationServiceUrl("uk", "cambridge", "cloud-services")
 *   -> "/locations/uk/cambridge-cloud-services"
 *
 *   getLocationServiceUrl("us", "nashville", "cloud-managed-services")
 *   -> "/locations/us/nashville-cloud-managed-services"
 */
export function getLocationServiceUrl(
  countryCode: SupportedCountryCode | string,
  locationSlug: string,
  serviceSlug: string
): string {
  const country = cleanSlugSegment(countryCode) as SupportedCountryCode;
  
  // Clean location slug, removing any accidental 'india', 'uk', 'us' prefix
  let loc = cleanSlugSegment(locationSlug);
  if (country === "india") {
    loc = loc.replace(/^india-?/, "");
  } else if (country === "uk") {
    loc = loc.replace(/^uk-?/, "");
  } else if (country === "us") {
    loc = loc.replace(/^us-?/, "");
  }

  const srv = cleanSlugSegment(serviceSlug);

  return `/locations/${country}/${loc}-${srv}`;
}

/**
 * Returns absolute canonical URL for a location-service landing page
 */
export function getLocationServiceCanonicalUrl(
  countryCode: SupportedCountryCode | string,
  locationSlug: string,
  serviceSlug: string
): string {
  const relativePath = getLocationServiceUrl(countryCode, locationSlug, serviceSlug);
  return `${BASE_URL}${relativePath}`;
}

/**
 * Generates the canonical City Hub URL (3-4 tier hierarchy)
 * Examples:
 *   /locations/uk/england/london
 *   /locations/india/karnataka/bengaluru
 *   /locations/us/tennessee/nashville
 */
export function getCityHubUrl(
  countryCode: SupportedCountryCode | string,
  stateOrNationSlug: string | undefined,
  citySlug: string
): string {
  const country = cleanSlugSegment(countryCode);
  const city = cleanSlugSegment(citySlug);

  let regionOrNation = cleanSlugSegment(stateOrNationSlug || "");
  if (!regionOrNation) {
    if (country === "uk") regionOrNation = "england";
    else if (country === "india") regionOrNation = "karnataka";
    else if (country === "us") regionOrNation = "tennessee";
  }

  return `/locations/${country}/${regionOrNation}/${city}`;
}

/**
 * Generates the State or Nation Hub URL
 * Examples:
 *   /locations/uk/england
 *   /locations/india/karnataka
 *   /locations/us/tennessee
 */
export function getStateOrNationHubUrl(
  countryCode: SupportedCountryCode | string,
  stateOrNationSlug: string
): string {
  const country = cleanSlugSegment(countryCode);
  const regionOrNation = cleanSlugSegment(stateOrNationSlug);
  return `/locations/${country}/${regionOrNation}`;
}

/**
 * Generates the Country Hub URL
 * Examples:
 *   /locations/uk
 *   /locations/india
 *   /locations/us
 */
export function getCountryHubUrl(countryCode: SupportedCountryCode | string): string {
  const country = cleanSlugSegment(countryCode);
  return `/locations/${country}`;
}

/**
 * Generates the Main Global Locations Directory URL
 * -> /locations
 */
export function getMainLocationsUrl(): string {
  return "/locations";
}

/**
 * Returns absolute URL with proper protocol and host
 */
export function getAbsoluteLocationUrl(relativePath: string): string {
  const cleanPath = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
  return `${BASE_URL}${cleanPath}`;
}

/**
 * Parses a combined `[location]-[service]` slug under a country path
 * e.g. "bengaluru-cloud-managed-services" -> { locationSlug: "bengaluru", serviceSlug: "cloud-managed-services" }
 * e.g. "tennessee-cloud-managed-services" -> { locationSlug: "tennessee", serviceSlug: "cloud-managed-services" }
 */
export function parseLocationServiceSlug(
  slug: string
): { locationSlug: string; serviceSlug: string } | null {
  if (!slug) return null;

  const raw = cleanSlugSegment(slug);

  // Check known services in descending order of length so longer matches win
  const sortedServices = [...ALL_SUPPORTED_SERVICE_SLUGS].sort((a, b) => b.length - a.length);

  for (const sSlug of sortedServices) {
    if (raw.endsWith(`-${sSlug}`)) {
      const locSlug = raw.slice(0, -(sSlug.length + 1));
      if (locSlug) {
        return {
          locationSlug: locSlug,
          serviceSlug: sSlug
        };
      }
    }
  }

  return null;
}
