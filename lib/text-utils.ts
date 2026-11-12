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
 * Generates concise, professional umbrella headings for City Hub pages
 * strictly avoiding ampersands and keeping titles under 55 characters.
 */
export function getCityHubUmbrellaHeading(cityName: string, countryCode: "uk" | "india" | "us"): string {
  const cName = cityName.trim();
  const lower = cName.toLowerCase();

  if (lower === "bengaluru" || lower === "bangalore") {
    return `IT and Cloud Services in ${cName}`;
  }
  if (lower === "chennai") {
    return `Cloud and AI Services in ${cName}`;
  }
  if (lower === "manchester") {
    return `Managed IT and Cloud Services in ${cName}`;
  }
  if (lower === "london") {
    return `IT Consulting and Managed Services in ${cName}`;
  }
  if (lower === "nashville") {
    return `IT and Cloud Services in ${cName}`;
  }
  if (lower === "cambridge") {
    return `Cloud and DevOps Consulting Services in ${cName}`;
  }
  if (lower === "austin") {
    return `IT and Cloud Services in ${cName}`;
  }
  if (lower === "edinburgh") {
    return `Enterprise Cloud and DevOps in ${cName}`;
  }
  if (lower === "birmingham") {
    return `Managed IT and Cloud Services in ${cName}`;
  }
  if (lower === "leeds") {
    return `Cloud and Managed IT Services in ${cName}`;
  }

  // Default umbrella heading pattern
  return `IT and Cloud Services in ${cName}`;
}
