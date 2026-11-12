import { servicesData } from "@/data/services";
import { capabilityRegistry } from "@/data/services/dynamic-capabilities";

export interface AdaptedServiceRecord {
  serviceId: string;
  slug: string;
  categoryId: string;
  categoryTitle: string;
  title: string;
  canonicalServiceUrl: string;
  shortDescription: string;
  keywordCluster: string[];
  searchIntent: "commercial" | "transactional" | "informational";
  relatedServiceIds: string[];
  relevantIndustries: string[];
  eligibleForLocationPilot: boolean;
}

// Helper to determine commercial keyword clusters and search intent
function generateKeywordCluster(serviceTitle: string, categoryTitle: string): string[] {
  const base = [
    `${serviceTitle} UK`,
    `${serviceTitle} Services`,
    `${serviceTitle} Consulting`,
    `Enterprise ${serviceTitle}`,
    `${categoryTitle} Specialists`
  ];
  return base;
}

// Build the complete adapted registry by inspecting authoritative existing data
function buildServiceCatalog(): AdaptedServiceRecord[] {
  const records: AdaptedServiceRecord[] = [];

  // 1. Process all 12 Main Service Categories
  Object.entries(servicesData).forEach(([catSlug, category]) => {
    // Add Category Root Service Record
    const isPilotCategory = [
      "cloud-services",
      "devops-automation",
      "cybersecurity",
      "managed-services",
      "ai-data-innovation",
      "ai-consulting",
      "software-development",
      "data-engineering"
    ].includes(catSlug);

    records.push({
      serviceId: catSlug,
      slug: catSlug,
      categoryId: catSlug,
      categoryTitle: category.title,
      title: category.title,
      canonicalServiceUrl: `/services/${catSlug}`,
      shortDescription: category.subtitle || category.overviewHeading || `Enterprise ${category.title} solutions and engineering advisory.`,
      keywordCluster: generateKeywordCluster(category.title, category.title),
      searchIntent: "commercial",
      relatedServiceIds: Object.keys(servicesData).filter(s => s !== catSlug).slice(0, 3),
      relevantIndustries: category.industries || [],
      eligibleForLocationPilot: isPilotCategory
    });

    // 2. Process all Registered Capabilities for this Category
    const capabilities = capabilityRegistry[catSlug] || {};
    Object.entries(capabilities).forEach(([capSlug, capDetail]) => {
      // Determine pilot eligibility for high-commercial-intent capabilities
      const isPilotCap = [
        "cloud-managed-services",
        "cloud-migration",
        "azure-services",
        "aws-services",
        "cicd-implementation",
        "cicd-pipeline-automation",
        "kubernetes-services",
        "platform-engineering",
        "security-assessment",
        "penetration-testing",
        "zero-trust-architecture",
        "generative-ai-solutions",
        "ai-agents-automation",
        "enterprise-application-development",
        "saas-product-development",
        "data-warehousing",
        "data-lakes-lakehouse-architecture",
        "msp-uk",
        "24-7-support-services",
        "cloud-consulting",
        "ai-strategy-advisory"
      ].includes(capSlug);

      records.push({
        serviceId: `${catSlug}--${capSlug}`,
        slug: capSlug,
        categoryId: catSlug,
        categoryTitle: category.title,
        title: capDetail.title,
        canonicalServiceUrl: `/services/${catSlug}/${capSlug}`,
        shortDescription: capDetail.desc || `Enterprise ${capDetail.title} architectures and delivery support.`,
        keywordCluster: generateKeywordCluster(capDetail.title, category.title),
        searchIntent: "transactional",
        relatedServiceIds: [catSlug],
        relevantIndustries: category.industries || [],
        eligibleForLocationPilot: isPilotCap
      });
    });
  });

  return records;
}

export const authoritativeServiceCatalog: AdaptedServiceRecord[] = buildServiceCatalog();

const serviceAliases: Record<string, string> = {
  "ai-services": "generative-ai-solutions",
  "managed-ai-services": "ai-agents-automation",
  "it-support-services": "24-7-support-services",
  "managed-it-support-services": "24-7-support-services",
  "managed-cloud-services": "cloud-managed-services",
  "managed-devops-services": "kubernetes-services",
  "managed-cybersecurity-services": "penetration-testing"
};

export function getAdaptedServiceBySlug(slug: string): AdaptedServiceRecord | undefined {
  const targetSlug = serviceAliases[slug] || slug;
  const found = authoritativeServiceCatalog.find(s => s.slug === targetSlug || s.serviceId === targetSlug);
  if (!found) return undefined;
  if (slug === "ai-services") {
    return { ...found, slug: "ai-services", title: "AI Services" };
  }
  if (slug === "it-support-services") {
    return { ...found, slug: "it-support-services", title: "IT Support Services" };
  }
  if (serviceAliases[slug]) {
    return { ...found, slug };
  }
  return found;
}

export function getEligiblePilotServices(): AdaptedServiceRecord[] {
  return authoritativeServiceCatalog.filter(s => s.eligibleForLocationPilot);
}

export function getServicesByCategory(categoryId: string): AdaptedServiceRecord[] {
  return authoritativeServiceCatalog.filter(s => s.categoryId === categoryId);
}
