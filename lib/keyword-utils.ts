// Standard 10 Commercial Intent Keywords and Service Slugs for Global & UK Locations

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

  // 1. Cloud Migration Service
  if (s.includes("migration") || t.includes("migration")) {
    return "Cloud Migration Service";
  }
  // 2. Managed Cloud Service
  if (
    (s.includes("cloud") && s.includes("managed")) ||
    (t.includes("cloud") && t.includes("managed")) ||
    s === "cloud-managed-services"
  ) {
    return "Managed Cloud Service";
  }
  // 3. Managed AI Service
  if (
    s.includes("ai-agents") ||
    s.includes("managed-ai") ||
    (s.includes("ai") && s.includes("managed")) ||
    (t.includes("ai") && t.includes("managed"))
  ) {
    return "Managed AI Service";
  }
  // 4. Managed IT Support Service
  if (
    (s.includes("support") && s.includes("managed")) ||
    s.includes("24-7-support") ||
    (t.includes("support") && t.includes("managed"))
  ) {
    return "Managed IT Support Service";
  }
  // 5. Managed DevOps Service
  if (
    s.includes("kubernetes") ||
    s.includes("cicd") ||
    s.includes("platform") ||
    s.includes("devops")
  ) {
    return "Managed DevOps Service";
  }
  // 6. Managed Cybersecurity Service
  if (
    s.includes("cybersecurity") ||
    s.includes("security") ||
    s.includes("penetration") ||
    s.includes("zero-trust")
  ) {
    return "Managed Cybersecurity Service";
  }
  // 7. IT Support Service
  if (
    s.includes("support") ||
    s.includes("helpdesk") ||
    s.includes("it-consulting") ||
    t.includes("support")
  ) {
    return "IT Support Service";
  }
  // 8. AI Service
  if (
    s.includes("generative") ||
    s.includes("ai-solutions") ||
    s.includes("ai-consulting") ||
    s.includes("data-lakes") ||
    s.includes("data-warehousing") ||
    s.includes("ai")
  ) {
    return "AI Service";
  }
  // 9. Software Development Service
  if (
    s.includes("software") ||
    s.includes("development") ||
    s.includes("saas") ||
    s.includes("app") ||
    t.includes("software")
  ) {
    return "Software Development Service";
  }
  // 10. Cloud Service (Default for cloud-services)
  return "Cloud Service";
}
