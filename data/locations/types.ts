export type UKNationId = "england" | "scotland" | "wales" | "northern-ireland";

export type UKRegionId =
  | "greater-london"
  | "east-of-england"
  | "south-east"
  | "south-west"
  | "west-midlands"
  | "east-midlands"
  | "north-west"
  | "yorkshire-and-humber"
  | "north-east"
  | "scotland"
  | "wales"
  | "northern-ireland";

export type CountryCode = "uk" | "india" | "us";

export type LocationType =
  | "capital"
  | "major-city"
  | "tech-hub"
  | "city"
  | "town"
  | "metro-area"
  | "borough";

export type OfficeStatus =
  | "headquarters"
  | "corporate-office"
  | "operations-center"
  | "sub-regional-office"
  | "support-office"
  | "remote-delivery"
  | "service-area";

export type CoverageStatus =
  | "active"
  | "scheduled"
  | "on-demand";

export type PublicationStatus =
  | "research"
  | "draft"
  | "needs-review"
  | "approved"
  | "published"
  | "archived";

export interface VerifiedOfficeAddress {
  buildingName?: string;
  streetAddress: string;
  locality: string;
  regionOrState?: string;
  postalCode: string;
  country: string;
  telephone: string;
  email?: string;
  googleMapsUrl?: string;
}

// ==========================================
// UK SPECIFIC INTERFACES (PRESERVED)
// ==========================================

export interface UKNation {
  id: UKNationId;
  slug: string;
  name: string;
  capitalCityId: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  regions: UKRegionId[];
}

export interface UKRegion {
  id: UKRegionId;
  slug: string;
  name: string;
  nation: UKNationId;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keyIndustries: string[];
  techCorridors?: string[];
  cityIds: string[];
}

export interface UKLocation {
  id: string;
  slug: string;
  displayName: string;
  nation: UKNationId;
  region: UKRegionId;
  parentLocationId?: string;
  nearbyLocationIds: string[];
  locationType: LocationType;
  coverageStatus: CoverageStatus;
  officeStatus: OfficeStatus;
  verifiedAddress?: VerifiedOfficeAddress;
  verifiedCoordinates: {
    latitude: number;
    longitude: number;
  };
  servicesAvailable: string[];
  publicationStatus: PublicationStatus;
  shortDescription: string;
  metaTitle?: string;
  metaDescription?: string;
  economicProfile?: {
    dominantIndustries: string[];
    techHubDescription: string;
    keyClusters: string[];
  };
  deliveryHighlights?: string[];
}

// ==========================================
// GLOBAL / COUNTRY-AGNOSTIC INTERFACES
// ==========================================

export interface GlobalCountry {
  code: CountryCode;
  slug: string;
  name: string;
  formalName: string;
  capital: string;
  primaryTimezone: string;
  primaryLanguage: string;
  currency: string;
  overviewHeading: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  stats: { value: string; label: string }[];
  verifiedOffices: {
    city: string;
    type: OfficeStatus;
    address: VerifiedOfficeAddress;
  }[];
}

export interface GlobalRegionOrState {
  id: string;
  countryCode: CountryCode;
  slug: string;
  name: string;
  abbreviation?: string;
  capital?: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keyIndustries: string[];
  techCorridors?: string[];
  cityIds: string[];
  publicationStatus: PublicationStatus;
}

export interface GlobalLocation {
  id: string;
  countryCode: CountryCode;
  slug: string;
  displayName: string;
  stateOrRegionId: string;
  metroArea?: string;
  parentLocationId?: string;
  nearbyLocationIds: string[];
  locationType: LocationType;
  coverageStatus: CoverageStatus;
  officeStatus: OfficeStatus;
  verifiedAddress?: VerifiedOfficeAddress;
  verifiedCoordinates?: {
    latitude: number;
    longitude: number;
  };
  servicesAvailable: string[];
  publicationStatus: PublicationStatus;
  shortDescription: string;
  metaTitle?: string;
  metaDescription?: string;
  economicProfile?: {
    dominantIndustries: string[];
    techHubDescription: string;
    keyClusters: string[];
  };
  deliveryHighlights?: string[];
}

export interface LocationServiceMapping {
  countryCode?: CountryCode;
  citySlug: string;
  serviceSlug: string;
  publicationStatus: PublicationStatus;
  h1Title: string;
  metaTitle: string;
  metaDescription: string;
  commercialIntentQuery: string;
  localChallenge: {
    title: string;
    points: string[];
  };
  localSolution: {
    title: string;
    description: string;
    deliverables: string[];
  };
  industryContext: {
    industryTitle: string;
    description: string;
  };
  complianceHighlights: string[];
  faqs: {
    q: string;
    a: string;
  }[];
}
