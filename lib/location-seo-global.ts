import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-utils";
import { ResolvedGlobalLocationPath } from "@/lib/location-content-global";
import {
  normalizeDisplayText,
  getCityHubPrimaryService,
  getStateHubPrimaryService,
  getCityServiceHeroDescription
} from "@/lib/text-utils";
import { getExactServiceKeyword } from "@/lib/keyword-utils";

export function generateGlobalLocationMetadata(resolved: ResolvedGlobalLocationPath): Metadata {
  switch (resolved.type) {
    case "global-hub":
      return generatePageMetadata({
        title: "Managed Cloud Services Worldwide | Devopstrio",
        description: "Explore Devopstrio's worldwide cloud-native engineering, 24/7 managed SRE, and AI innovation directory across the United Kingdom, India, and the United States.",
        path: "/locations",
        keywords: [
          "Managed Cloud Services Worldwide",
          "Global DevOps Consulting",
          "Enterprise Cloud Management",
          "Devopstrio Locations",
          "UK Cloud SRE",
          "India Delivery Centers",
          "USA Cloud Consulting"
        ]
      });

    case "country-hub":
      if (!resolved.country) break;
      const isIndia = resolved.country.slug === "india";
      const svc = isIndia ? "Managed Cloud Services" : "Cloud Services";
      return generatePageMetadata({
        title: `${svc} ${normalizeDisplayText(resolved.country.name)} | Devopstrio`,
        description: `Explore ${svc.toLowerCase()} for businesses in ${normalizeDisplayText(resolved.country.name)}, including AWS, Azure, monitoring, cloud migration and DevOps engineering.`,
        path: resolved.canonicalPath,
        keywords: [
          `${svc} ${resolved.country.name}`,
          `Enterprise Cloud ${resolved.country.name}`,
          `DevOps Consulting ${resolved.country.name}`,
          `Managed SRE ${resolved.country.name}`,
          `Devopstrio ${resolved.country.name}`
        ]
      });

    case "state-hub":
      if (!resolved.stateOrRegion) break;
      const stateSvc = getStateHubPrimaryService(
        resolved.stateOrRegion.name,
        resolved.country?.slug as any
      );
      return generatePageMetadata({
        title: `${stateSvc} ${normalizeDisplayText(resolved.stateOrRegion.name)} | Devopstrio`,
        description: `Explore ${stateSvc.toLowerCase()} for businesses across ${normalizeDisplayText(resolved.stateOrRegion.name)}, including cloud migration, architecture, security and 24/7 managed IT solutions.`,
        path: resolved.canonicalPath,
        keywords: [
          `${stateSvc} ${resolved.stateOrRegion.name}`,
          `Cloud Services ${resolved.stateOrRegion.name}`,
          `DevOps ${resolved.stateOrRegion.name}`,
          `Managed IT ${resolved.stateOrRegion.name}`,
          ...resolved.stateOrRegion.keyIndustries.map(k => normalizeDisplayText(k))
        ]
      });

    case "city-hub":
      if (!resolved.location) break;
      const citySvc = getCityHubPrimaryService(
        resolved.location.displayName,
        resolved.country?.slug as any
      );
      return generatePageMetadata({
        title: `${citySvc} ${normalizeDisplayText(resolved.location.displayName)} | Devopstrio`,
        description: `Explore ${citySvc.toLowerCase()} for ${normalizeDisplayText(resolved.location.displayName)} businesses, covering cloud infrastructure, migration, monitoring and enterprise security solutions.`,
        path: resolved.canonicalPath,
        keywords: [
          `${citySvc} ${resolved.location.displayName}`,
          `DevOps ${resolved.location.displayName}`,
          `Cloud Services ${resolved.location.displayName}`,
          `Managed IT ${resolved.location.displayName}`,
          ...(resolved.location.economicProfile?.dominantIndustries || []).map(d => normalizeDisplayText(d))
        ]
      });

    case "city-service":
      if (!resolved.serviceMapping || !resolved.location) break;
      const exactService = normalizeDisplayText(
        getExactServiceKeyword(resolved.serviceMapping.serviceSlug, resolved.service?.title)
      );
      return generatePageMetadata({
        title: `${exactService} ${normalizeDisplayText(resolved.location.displayName)} | Devopstrio`,
        description: getCityServiceHeroDescription(
          resolved.serviceMapping.serviceSlug,
          resolved.location.displayName
        ),
        path: resolved.canonicalPath,
        keywords: [
          `${exactService} ${resolved.location.displayName}`,
          `${exactService} near me in ${resolved.location.displayName}`,
          `Enterprise ${exactService} ${resolved.location.displayName}`,
          `Cloud Consulting ${resolved.location.displayName}`
        ]
      });
  }

  // Fallback
  return generatePageMetadata({
    title: "Global Enterprise Cloud and IT Engineering | Devopstrio",
    description: "Explore Devopstrio's worldwide cloud-native engineering, 24/7 managed SRE, and AI innovation across the UK, India, and USA.",
    path: resolved.canonicalPath
  });
}
