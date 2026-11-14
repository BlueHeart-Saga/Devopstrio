import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-utils";
import { ResolvedLocationPath } from "@/lib/location-content";
import { normalizeDisplayText, getCityHubPrimaryService, getCityServiceHeroDescription } from "@/lib/text-utils";
import { getExactServiceKeyword } from "@/lib/keyword-utils";

export function generateLocationMetadata(resolved: ResolvedLocationPath): Metadata {
  switch (resolved.type) {
    case "national-hub":
      return generatePageMetadata({
        title: "Cloud Services UK | Devopstrio",
        description: "Explore cloud services for UK businesses, including Azure, AWS, cloud migration, infrastructure management and security solutions across our complete national practice directory.",
        path: resolved.canonicalPath,
        keywords: [
          "Cloud Services UK",
          "DevOps UK",
          "Managed IT Services UK",
          "Cybersecurity UK",
          "Devopstrio London"
        ]
      });

    case "nation-hub":
      if (!resolved.nation) break;
      return generatePageMetadata({
        title: `Cloud Services ${normalizeDisplayText(resolved.nation.name)} | Devopstrio`,
        description: `Explore cloud services for ${normalizeDisplayText(resolved.nation.name)} businesses, including Azure, AWS, cloud migration, infrastructure management and security solutions.`,
        path: resolved.canonicalPath,
        keywords: [
          `Cloud Services ${resolved.nation.name}`,
          `DevOps ${resolved.nation.name}`,
          `Managed Services ${resolved.nation.name}`,
          `SRE Consulting ${resolved.nation.name}`
        ]
      });

    case "region-hub":
      if (!resolved.region) break;
      return generatePageMetadata({
        title: `Cloud Services ${normalizeDisplayText(resolved.region.name)} | Devopstrio`,
        description: `Explore cloud services for ${normalizeDisplayText(resolved.region.name)} businesses, including Azure, AWS, cloud migration, infrastructure management and security solutions.`,
        path: resolved.canonicalPath,
        keywords: [
          `Cloud Services ${resolved.region.name}`,
          `DevOps ${resolved.region.name}`,
          `IT Infrastructure ${resolved.region.name}`,
          ...resolved.region.keyIndustries.map(k => normalizeDisplayText(k))
        ]
      });

    case "city-hub":
      if (!resolved.location) break;
      const primaryService = getCityHubPrimaryService(resolved.location.displayName, "uk");
      return generatePageMetadata({
        title: `${primaryService} ${normalizeDisplayText(resolved.location.displayName)} | Devopstrio`,
        description: `Explore ${primaryService.toLowerCase()} for ${normalizeDisplayText(resolved.location.displayName)} businesses, including Azure, AWS, cloud migration, infrastructure management and security solutions.`,
        path: resolved.canonicalPath,
        keywords: [
          `${primaryService} ${resolved.location.displayName}`,
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
    title: "Cloud Services UK | Devopstrio",
    description: "Explore Devopstrio's nationwide enterprise cloud, DevOps automation, and AI engineering services across the United Kingdom.",
    path: resolved.canonicalPath
  });
}
