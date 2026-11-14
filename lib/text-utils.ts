/**
 * Text and Display Normalization Utilities for Devopstrio
 *
 * Mandatory Rule: NEVER use the ampersand symbol ('&') in visible user-facing content
 * or SEO metadata across UK, India, and USA location pages. Always use the word 'and'.
 */

/**
 * Normalizes visible display strings, SEO metadata, breadcrumbs, and schema text.
 * Strictly replaces ampersands ('&', '&amp;', ' & ') with ' and '.
 * Preserves URLs, query parameters, HTML tags, and technical slugs.
 */
export function normalizeDisplayText(text: string | null | undefined): string {
  if (!text) return "";
  
  // 1. Replace HTML entity &amp;
  let result = text.replace(/&amp;/gi, "and");

  // 2. Replace spaced ampersand ' & ' with ' and '
  result = result.replace(/\s+&\s+/g, " and ");

  // 3. Replace word-bounded ampersands like 'Cloud&DevOps' or 'R&D' with 'Cloud and DevOps', 'R and D'
  result = result.replace(/([a-zA-Z0-9])&([a-zA-Z0-9])/g, "$1 and $2");

  // 4. Replace any remaining ampersand not part of URL parameters
  result = result.replace(/&/g, " and ");

  // 5. Clean up any redundant multiple spaces
  result = result.replace(/\s{2,}/g, " ").trim();

  return result;
}

/**
 * Shorthand helper for normalizeDisplayText
 */
export function noAmp(text: string | null | undefined): string {
  return normalizeDisplayText(text);
}

/**
 * Returns the single primary service name for a geographic city hub.
 * Strictly uses ONE service category without combining.
 */
export function getCityHubPrimaryService(cityName: string, countryCode?: "uk" | "india" | "us"): string {
  const lower = cityName.trim().toLowerCase();

  // User-specified approved mappings:
  if (lower === "bengaluru" || lower === "bangalore") return "Managed Cloud Services";
  if (lower === "london") return "Cloud Services";
  if (lower === "cambridge") return "Cloud Migration Services";
  if (lower === "manchester") return "Cybersecurity Services";
  if (lower === "nashville") return "DevOps Services";
  if (lower === "chennai") return "Software Development Services";
  if (lower === "hyderabad") return "Azure Services";
  if (lower === "new-york-city" || lower === "new york" || lower === "new york city") return "Cybersecurity Services";
  if (lower === "san-francisco" || lower === "san francisco") return "DevOps Services";
  if (lower === "pune") return "Software Development Services";
  if (lower === "birmingham") return "Managed Cloud Services";
  if (lower === "delhi" || lower === "delhi-ncr" || lower === "delhi ncr") return "Managed Cloud Services";
  if (lower === "mt-juliet" || lower === "mt. juliet") return "Managed IT Services";

  // Default single service category for regional hubs
  if (countryCode === "india") return "Managed Cloud Services";
  return "Cloud Services";
}

/**
 * Returns the required hero H1 heading for a City Hub page:
 * [Single Service Name] Near Me in [Location Name]
 */
export function getCityHubHeading(cityName: string, countryCode: "uk" | "india" | "us"): string {
  const cName = cityName.trim();
  const service = getCityHubPrimaryService(cName, countryCode);
  return `${service} Near Me in ${cName}`;
}

/**
 * Returns the single primary service prefix before " in [City]" for custom JSX formatting in City Hub heroes.
 * Formats as: "[Single Service Name] Near Me"
 */
export function getCityHubHeadingPrefix(cityName: string, countryCode: "uk" | "india" | "us"): string {
  const service = getCityHubPrimaryService(cityName, countryCode);
  return `${service} Near Me`;
}

/**
 * Legacy alias for backwards compatibility
 */
export function getCityHubUmbrellaHeading(cityName: string, countryCode: "uk" | "india" | "us"): string {
  return getCityHubHeading(cityName, countryCode);
}

/**
 * Generates a concise hero description for a city hub directly relating to the selected service and location,
 * explaining the broader service directory without repeating 'near me'.
 */
export function getCityHubHeroDescription(cityName: string, countryCode: "uk" | "india" | "us"): string {
  const cName = cityName.trim();
  const service = getCityHubPrimaryService(cName, countryCode);

  if (cName.toLowerCase() === "bengaluru") {
    return "Devopstrio provides managed cloud infrastructure support for businesses in Bengaluru, covering Azure, AWS, monitoring, migration and security services.";
  }
  if (cName.toLowerCase() === "london") {
    return "Explore cloud services for London businesses, including Azure, AWS, cloud migration, infrastructure management and security solutions across our complete national practice directory.";
  }

  return `Devopstrio provides ${service.toLowerCase()} support for businesses in ${cName}, covering multi-cloud architecture, DevOps automation, 24/7 infrastructure monitoring and cybersecurity solutions across our full practice directory.`;
}

/**
 * Returns the single primary service name for a State / Nation / Region hub.
 */
export function getStateHubPrimaryService(stateName: string, countryCode?: "uk" | "india" | "us"): string {
  const lower = stateName.trim().toLowerCase();
  if (lower === "tennessee") return "Managed IT Services";
  if (countryCode === "india") return "Managed Cloud Services";
  return "Cloud Services";
}

/**
 * Returns the required hero H1 heading for a State Hub page:
 * [Single Service Name] Near Me in [State Name]
 */
export function getStateHubHeading(stateName: string, countryCode?: "uk" | "india" | "us"): string {
  const sName = stateName.trim();
  const service = getStateHubPrimaryService(sName, countryCode);
  return `${service} Near Me in ${sName}`;
}

/**
 * Generates a concise hero description for a state/nation hub without repeating 'near me'.
 */
export function getStateHubHeroDescription(stateName: string, countryCode?: "uk" | "india" | "us"): string {
  const sName = stateName.trim();
  const service = getStateHubPrimaryService(sName, countryCode);
  return `Devopstrio provides ${service.toLowerCase()} and enterprise technology solutions for organizations across ${sName}, covering cloud architecture, infrastructure modernization and 24/7 managed support across our practice directory.`;
}

/**
 * Generates a concise hero description for a city-service page directly relating to the selected service and location,
 * without repeating 'near me'.
 */
export function getCityServiceHeroDescription(serviceSlug: string, cityName: string): string {
  const s = serviceSlug.toLowerCase();
  const c = cityName.trim();

  if (s.includes("managed") && s.includes("cloud")) {
    return `Devopstrio provides managed cloud infrastructure support for businesses in ${c}, covering Azure, AWS, monitoring, migration and security services.`;
  }
  if (s.includes("migration")) {
    return `Devopstrio provides enterprise cloud migration services for businesses in ${c}, ensuring zero-downtime database cutovers, cloud readiness assessments and architecture modernization.`;
  }
  if (s.includes("managed-ai")) {
    return `Devopstrio provides managed AI operations and model observability for companies in ${c}, covering drift detection, inference latency monitoring and secure production deployments.`;
  }
  if (s.includes("ai")) {
    return `Devopstrio delivers enterprise AI engineering solutions for organizations in ${c}, covering custom LLM integrations, RAG pipelines, Vertex AI and intelligent workflow automation.`;
  }
  if (s.includes("managed-it") || s.includes("24-7-support")) {
    return `Devopstrio delivers 24/7 managed IT support for enterprises in ${c}, covering proactive endpoint management, network observability, automated patching and SLA response desks.`;
  }
  if (s.includes("support")) {
    return `Devopstrio provides responsive IT support services for businesses in ${c}, delivering L1 to L3 service desk operations, systems troubleshooting and enterprise hardware lifecycle support.`;
  }
  if (s.includes("kubernetes")) {
    return `Devopstrio delivers enterprise Kubernetes services for engineering teams in ${c}, covering multi-cluster orchestration, GitOps deployment automation and container security.`;
  }
  if (s.includes("penetration") || s.includes("cybersecurity")) {
    return `Devopstrio provides CREST-aligned penetration testing and security assessments for organizations in ${c}, identifying infrastructure vulnerabilities and validating compliance standards.`;
  }
  if (s.includes("software") || s.includes("development")) {
    return `Devopstrio engineers custom full-stack software and cloud-native applications for businesses in ${c}, delivering scalable architectures, modern APIs and automated CI/CD pipelines.`;
  }
  return `Devopstrio delivers enterprise cloud services for organizations in ${c}, covering AWS, Azure, Google Cloud architecture, infrastructure management and security solutions.`;
}
