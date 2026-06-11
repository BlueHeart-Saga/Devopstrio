import { ServiceCategory, CapabilityDetail } from "./types";
import { aiDataService, aiDataCapabilities } from "./ai-data";
import { cloudService, cloudCapabilities } from "./cloud";
import { devopsService, devopsCapabilities } from "./devops";
import { cybersecurityService, cybersecurityCapabilities } from "./cybersecurity";
import { softwareService, softwareCapabilities } from "./software";
import { transformationService, transformationCapabilities } from "./transformation";
import { dataengineeringService, dataengineeringCapabilities } from "./dataengineering";
import { managedService, managedCapabilities } from "./managed";
import { testingService, testingCapabilities } from "./testing";
import { consultingService, consultingCapabilities } from "./consulting";

export * from "./types";

export const servicesData: Record<string, ServiceCategory> = {
  "ai-data-innovation": aiDataService,
  "cloud-services": cloudService,
  "devops-automation": devopsService,
  "cybersecurity": cybersecurityService,
  "software-development": softwareService,
  "digital-transformation": transformationService,
  "data-engineering": dataengineeringService,
  "managed-services": managedService,
  "qa-testing": testingService,
  "it-consulting": consultingService
};

export const capabilitiesData: Record<string, Record<string, CapabilityDetail>> = {
  "ai-data-innovation": aiDataCapabilities,
  "cloud-services": cloudCapabilities,
  "devops-automation": devopsCapabilities,
  "cybersecurity": cybersecurityCapabilities,
  "software-development": softwareCapabilities,
  "digital-transformation": transformationCapabilities,
  "data-engineering": dataengineeringCapabilities,
  "managed-services": managedCapabilities,
  "qa-testing": testingCapabilities,
  "it-consulting": consultingCapabilities
};

import { generateCapabilityDetail } from "./dynamic-capabilities";

export function getServiceByCategory(slug: string): ServiceCategory | undefined {
  return servicesData[slug];
}

export function getCapability(serviceSlug: string, capabilitySlug: string): CapabilityDetail | undefined {
  const explicitCap = capabilitiesData[serviceSlug]?.[capabilitySlug];
  if (explicitCap) return explicitCap;

  const service = servicesData[serviceSlug];
  if (!service) return undefined;

  return generateCapabilityDetail(serviceSlug, capabilitySlug, service);
}

