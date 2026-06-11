/**
 * Utility mapper to associate service slugs and capability slugs
 * with their corresponding premium background images.
 */

const serviceBgMap: Record<string, string> = {
  "ai-data-innovation": "/assets/Services-Page/services-hero/h1.png",
  "cloud-services": "/assets/Services-Page/services-hero/h2.png",
  "devops-automation": "/assets/Services-Page/services-hero/h3.png",
  "cybersecurity": "/assets/Services-Page/services-hero/h4.png",
  "software-development": "/assets/Services-Page/services-hero/h5.png",
  "digital-transformation": "/assets/Services-Page/services-hero/h6.png",
  "data-engineering": "/assets/Services-Page/services-hero/h7.png",
  "managed-services": "/assets/Services-Page/services-hero/h8.png",
  "qa-testing": "/assets/Services-Page/services-hero/h9.png",
  "it-consulting": "/assets/Services-Page/services-hero/h10.png",
};

/**
 * Returns the corresponding image asset URL path for a service,
 * or capability within a service.
 */
export function getHeroBgImage(serviceSlug: string, capabilitySlug?: string): string {
  // Always return the main service image to avoid loading too many separate images
  return serviceBgMap[serviceSlug] || "/assets/Services-Page/services-hero/h1.png";
}
