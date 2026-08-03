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
import { aiConsultingService, aiConsultingCapabilities } from "./aiconsulting";
import { aiModernizationService, aiModernizationCapabilities } from "./aimodernization";
import { getEnrichedServiceFaqs, generateFaqsForCapability } from "./faq-generator";
import { enrichServiceCategory, enrichCapabilityDetail } from "./premium-enhancer";

export * from "./types";

export const servicesData: Record<string, ServiceCategory> = {
  "ai-data-innovation": aiDataService,
  "ai-consulting": aiConsultingService,
  "ai-modernization": aiModernizationService,
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
  "ai-consulting": aiConsultingCapabilities,
  "ai-modernization": aiModernizationCapabilities,
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

// Enrich and apply premium copywriting to all servicesData
Object.entries(servicesData).forEach(([slug, service]) => {
  service.faqs = getEnrichedServiceFaqs(slug);
  servicesData[slug] = enrichServiceCategory(service);
});

// Enrich and apply premium copywriting to all explicit capabilitiesData
Object.entries(capabilitiesData).forEach(([serviceSlug, capabilities]) => {
  Object.entries(capabilities).forEach(([capSlug, capDetail]) => {
    capDetail.faqs = generateFaqsForCapability(serviceSlug, capDetail.title);
    capDetail.deliveryApproach = generate6PhaseDeliveryApproach(serviceSlug, capDetail.title);
    capabilities[capSlug] = enrichCapabilityDetail(capDetail, serviceSlug);
  });
});

import { generateCapabilityDetail, generate6PhaseDeliveryApproach } from "./dynamic-capabilities";


export function getServiceByCategory(slug: string): ServiceCategory | undefined {
  const service = servicesData[slug];
  if (!service) return undefined;
  return enrichServiceCategory(service);
}

export function getCapability(serviceSlug: string, capabilitySlug: string): CapabilityDetail | undefined {
  const explicitCap = capabilitiesData[serviceSlug]?.[capabilitySlug];
  if (explicitCap) return enrichCapabilityDetail(explicitCap, serviceSlug);

  const service = servicesData[serviceSlug];
  if (!service) return undefined;

  const dynamicCap = generateCapabilityDetail(serviceSlug, capabilitySlug, service);
  if (dynamicCap) {
    dynamicCap.faqs = generateFaqsForCapability(serviceSlug, dynamicCap.title);
    return enrichCapabilityDetail(dynamicCap, serviceSlug);
  }
  return undefined;
}


