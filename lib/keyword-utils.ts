// Standard 10 Commercial Intent Keywords and Service Slugs for Global and UK Locations

export const TARGET_SERVICE_SLUGS = [
  "cloud-services",
  "cloud-migration",
  "ai-services",
  "it-support-services",
  "cloud-managed-services",
  "managed-ai-services",
  "managed-it-support-services",
  "kubernetes-services",
  "penetration-testing",
  "software-development"
];

export const ALL_SUPPORTED_SERVICE_SLUGS = [
  ...TARGET_SERVICE_SLUGS,
  "managed-cloud-services",
  "ai-agents-automation",
  "24-7-support-services",
  "managed-devops-services",
  "managed-cybersecurity-services",
  "generative-ai-solutions",
  "cicd-implementation",
  "ai-data-innovation",
  "ai-consulting",
  "ai-modernization",
  "devops-automation",
  "cybersecurity",
  "digital-transformation",
  "data-engineering",
  "managed-services",
  "qa-testing",
  "it-consulting"
];

// Map service mapping or slug to the 10 exact user-defined SEO keywords
export function getExactServiceKeyword(slug: string, rawTitle?: string): string {
  const s = slug.toLowerCase();
  const t = (rawTitle || "").toLowerCase();

  // 1. Cloud Migration Services
  if (s.includes("migration") || t.includes("migration")) {
    return "Cloud Migration Services";
  }
  // 2. Managed Cloud Services
  if (
    (s.includes("cloud") && s.includes("managed")) ||
    (t.includes("cloud") && t.includes("managed")) ||
    s === "cloud-managed-services"
  ) {
    return "Managed Cloud Services";
  }
  // 3. Managed AI Services
  if (
    s.includes("ai-agents") ||
    s.includes("managed-ai") ||
    (s.includes("ai") && s.includes("managed")) ||
    (t.includes("ai") && t.includes("managed"))
  ) {
    return "Managed AI Services";
  }
  // 4. Managed IT Support Services
  if (
    (s.includes("support") && s.includes("managed")) ||
    s.includes("24-7-support") ||
    (t.includes("support") && t.includes("managed"))
  ) {
    return "Managed IT Support Services";
  }
  // 5. Kubernetes and Managed DevOps Services
  if (s.includes("kubernetes")) {
    return "Kubernetes Services";
  }
  if (
    s.includes("cicd") ||
    s.includes("platform") ||
    s.includes("devops")
  ) {
    return "DevOps Consulting Services";
  }
  // 6. Penetration Testing and Cybersecurity Services
  if (s.includes("penetration")) {
    return "Penetration Testing Services";
  }
  if (
    s.includes("cybersecurity") ||
    s.includes("security") ||
    s.includes("zero-trust")
  ) {
    return "Cybersecurity Services";
  }
  // 7. IT Support Services
  if (
    s.includes("support") ||
    s.includes("helpdesk") ||
    s.includes("it-consulting") ||
    t.includes("support")
  ) {
    return "IT Support Services";
  }
  // 8. AI Services
  if (
    s.includes("generative") ||
    s.includes("ai-solutions") ||
    s.includes("ai-consulting") ||
    s.includes("data-lakes") ||
    s.includes("data-warehousing") ||
    s.includes("ai")
  ) {
    return "AI Services";
  }
  // 9. Software Development Services
  if (
    s.includes("software") ||
    s.includes("development") ||
    s.includes("saas") ||
    s.includes("app") ||
    t.includes("software")
  ) {
    return "Software Development Services";
  }
  // 10. Cloud Services (Default for cloud-services)
  return "Cloud Services";
}
