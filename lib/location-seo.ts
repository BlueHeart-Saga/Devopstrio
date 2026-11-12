import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-utils";
import { ResolvedLocationPath } from "@/lib/location-content";
import { normalizeDisplayText } from "@/lib/text-utils";

export function generateLocationMetadata(resolved: ResolvedLocationPath): Metadata {
  switch (resolved.type) {
    case "national-hub":
      return generatePageMetadata({
        title: "UK Enterprise Cloud, DevOps and AI Engineering Hub | Devopstrio",
        description: "Devopstrio delivers 24/7 managed cloud, DevOps automation, and Generative AI across the UK. Headquartered in London with nationwide enterprise SRE delivery.",
        path: resolved.canonicalPath,
        keywords: [
          "DevOps UK",
          "Cloud Services UK",
          "Managed IT Services UK",
          "Generative AI UK",
          "Platform Engineering UK",
          "Devopstrio London"
        ]
      });

    case "nation-hub":
      if (!resolved.nation) break;
      return generatePageMetadata({
        title: normalizeDisplayText(resolved.nation.metaTitle),
        description: normalizeDisplayText(resolved.nation.metaDescription),
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
        title: normalizeDisplayText(resolved.region.metaTitle),
        description: normalizeDisplayText(resolved.region.metaDescription),
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
          `Kubernetes Consulting ${resolved.location.displayName}`,
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
    title: "UK Location and Regional Services | Devopstrio",
    description: "Explore Devopstrio's nationwide enterprise cloud, DevOps automation, and AI engineering services across the United Kingdom.",
    path: resolved.canonicalPath
  });
}
