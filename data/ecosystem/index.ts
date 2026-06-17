import { EcosystemDomain, EcosystemSubpageDetail } from "./types";
import { partnershipsDomain, partnershipsSubpages } from "./partnerships";
import { innovationLabsDomain, innovationLabsSubpages } from "./innovationLabs";
import { platformsDomain, platformsSubpages } from "./platforms";
import { technologiesDomain, technologiesSubpages } from "./technologies";
import { deliveryDomain, deliverySubpages } from "./delivery";
import { engineeringDomain, engineeringSubpages } from "./engineering";
import { acceleratorsDomain, acceleratorsSubpages } from "./accelerators";
import { communityDomain, communitySubpages } from "./community";

export * from "./types";

export const ecosystemDomains: Record<string, EcosystemDomain> = {
  "partnerships": partnershipsDomain,
  "innovation-labs": innovationLabsDomain,
  "platforms-solutions": platformsDomain,
  "technology-stack": technologiesDomain,
  "global-delivery": deliveryDomain,
  "engineering-excellence": engineeringDomain,
  "accelerators-frameworks": acceleratorsDomain,
  "community-talent-network": communityDomain
};

export const ecosystemSubpages: Record<string, Record<string, EcosystemSubpageDetail>> = {
  "partnerships": partnershipsSubpages,
  "innovation-labs": innovationLabsSubpages,
  "platforms-solutions": platformsSubpages,
  "technology-stack": technologiesSubpages,
  "global-delivery": deliverySubpages,
  "engineering-excellence": engineeringSubpages,
  "accelerators-frameworks": acceleratorsSubpages,
  "community-talent-network": communitySubpages
};

import { getEnrichedDomainFaqs, generateFaqsForSubpage } from "./faq-generator";

// Enrich all ecosystemDomains with exactly 10 FAQs
Object.entries(ecosystemDomains).forEach(([slug, domain]) => {
  domain.faqs = getEnrichedDomainFaqs(slug);
});

// Enrich all ecosystemSubpages with exactly 10 FAQs
Object.entries(ecosystemSubpages).forEach(([domainSlug, subpages]) => {
  Object.entries(subpages).forEach(([subpageSlug, subpageDetail]) => {
    subpageDetail.faqs = generateFaqsForSubpage(domainSlug, subpageDetail.title);
  });
});

export function getEcosystemDomain(slug: string): EcosystemDomain | undefined {
  return ecosystemDomains[slug];
}

export function getEcosystemSubpage(domainSlug: string, subpageSlug: string): EcosystemSubpageDetail | undefined {
  return ecosystemSubpages[domainSlug]?.[subpageSlug];
}
