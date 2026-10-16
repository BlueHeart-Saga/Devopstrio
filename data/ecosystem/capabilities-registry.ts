import { CapabilityPageData } from "./capabilities/types";
import { aiCapabilities } from "./capabilities/ai";
import { cloudCapabilities } from "./capabilities/cloud";
import { softwareCapabilities } from "./capabilities/software";
import { dataCapabilities } from "./capabilities/data";
import { devopsCapabilities } from "./capabilities/devops";
import { securityCapabilities } from "./capabilities/security";
import { platformCapabilities } from "./capabilities/platform";
import { qualityCapabilities } from "./capabilities/quality";
import { emergingCapabilities } from "./capabilities/emerging";

export * from "./capabilities/types";

// Combined dictionary keyed by capability slug
export const allCapabilities: Record<string, CapabilityPageData> = {
  ...aiCapabilities,
  ...cloudCapabilities,
  ...softwareCapabilities,
  ...dataCapabilities,
  ...devopsCapabilities,
  ...securityCapabilities,
  ...platformCapabilities,
  ...qualityCapabilities,
  ...emergingCapabilities
};

// Map pillar slug to its capabilities
export const pillarCapabilitiesMap: Record<string, Record<string, CapabilityPageData>> = {
  "artificial-intelligence": aiCapabilities,
  "cloud-native": cloudCapabilities,
  "software-engineering": softwareCapabilities,
  "data-engineering": dataCapabilities,
  "devops-toolchain": devopsCapabilities,
  "cybersecurity": securityCapabilities,
  "platform-engineering": platformCapabilities,
  "quality-engineering": qualityCapabilities,
  "emerging-technologies": emergingCapabilities
};

/**
 * Retrieve a specific capability data by its pillar and slug
 */
export function getCapabilityData(pillarSlug: string, capabilitySlug: string): CapabilityPageData | undefined {
  const pillarMap = pillarCapabilitiesMap[pillarSlug];
  if (pillarMap && pillarMap[capabilitySlug]) {
    return pillarMap[capabilitySlug];
  }
  // Fallback to global dictionary if pillar mismatch or alias
  return allCapabilities[capabilitySlug];
}

/**
 * Return all (pillar, capability) path pairs for static generation / route testing
 */
export function getAllCapabilityPaths(): { pillar: string; capability: string }[] {
  const paths: { pillar: string; capability: string }[] = [];
  for (const [pillarSlug, map] of Object.entries(pillarCapabilitiesMap)) {
    for (const capabilitySlug of Object.keys(map)) {
      paths.push({ pillar: pillarSlug, capability: capabilitySlug });
    }
  }
  return paths;
}

/**
 * Return all capabilities for a given pillar
 */
export function getAllCapabilitiesForPillar(pillarSlug: string): CapabilityPageData[] {
  const pillarMap = pillarCapabilitiesMap[pillarSlug];
  return pillarMap ? Object.values(pillarMap) : [];
}
