import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-utils";
import { ResolvedGlobalLocationPath } from "@/lib/location-content-global";
import { normalizeDisplayText } from "@/lib/text-utils";

export function generateGlobalLocationMetadata(resolved: ResolvedGlobalLocationPath): Metadata {
  switch (resolved.type) {
    case "global-hub":
      return generatePageMetadata({
        title: "Global Enterprise Technology and Cloud Delivery Hubs | Devopstrio",
        description: "Devopstrio delivers 24/7 enterprise cloud engineering, automated DevOps, and Generative AI across the United Kingdom, India, and the United States.",
        path: "/locations",
        keywords: [
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
      return generatePageMetadata({
        title: normalizeDisplayText(resolved.country.metaTitle),
        description: normalizeDisplayText(resolved.country.metaDescription),
        path: resolved.canonicalPath,
        keywords: [
          `Enterprise Cloud ${resolved.country.name}`,
          `DevOps Consulting ${resolved.country.name}`,
          `Managed SRE ${resolved.country.name}`,
          `AI Solutions ${resolved.country.name}`,
          `Devopstrio ${resolved.country.name}`
        ]
      });

    case "state-hub":
      if (!resolved.stateOrRegion) break;
      return generatePageMetadata({
        title: normalizeDisplayText(resolved.stateOrRegion.metaTitle),
        description: normalizeDisplayText(resolved.stateOrRegion.metaDescription),
        path: resolved.canonicalPath,
        keywords: [
          `Cloud Services ${resolved.stateOrRegion.name}`,
          `DevOps ${resolved.stateOrRegion.name}`,
          `Managed IT ${resolved.stateOrRegion.name}`,
          ...resolved.stateOrRegion.keyIndustries.map(k => normalizeDisplayText(k))
        ]
      });

    case "city-hub":
      if (!resolved.location) break;
      return generatePageMetadata({
        title: normalizeDisplayText(
          resolved.location.metaTitle || `${resolved.location.displayName} Cloud, DevOps and AI Services | Devopstrio`
        ),
        description: normalizeDisplayText(
          resolved.location.metaDescription || resolved.location.shortDescription
        ),
        path: resolved.canonicalPath,
        keywords: [
          `DevOps ${resolved.location.displayName}`,
          `Cloud Services ${resolved.location.displayName}`,
          `Managed IT ${resolved.location.displayName}`,
          `AI Services ${resolved.location.displayName}`,
          ...(resolved.location.economicProfile?.dominantIndustries || []).map(d => normalizeDisplayText(d))
        ]
      });

    case "city-service":
      if (!resolved.serviceMapping || !resolved.location) break;
      return generatePageMetadata({
        title: normalizeDisplayText(resolved.serviceMapping.metaTitle),
        description: normalizeDisplayText(resolved.serviceMapping.metaDescription),
        path: resolved.canonicalPath,
        keywords: [
          normalizeDisplayText(resolved.serviceMapping.commercialIntentQuery),
          `${normalizeDisplayText(resolved.service?.title || "Cloud")} in ${resolved.location.displayName}`,
          `${normalizeDisplayText(resolved.service?.title || "DevOps")} ${resolved.location.displayName}`,
          `Enterprise ${normalizeDisplayText(resolved.service?.title || "IT")} ${resolved.location.displayName}`
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
