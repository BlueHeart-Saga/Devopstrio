// Mapping of cities, regions, and countries to verified building assets in public/assets/About-page/building/webp/

export function getLocationImage(slug: string, countryOrNation?: string): string {
  const s = slug.toLowerCase();
  const c = (countryOrNation || "").toLowerCase();

  // Explicit city mappings
  if (s.includes("london")) return "/assets/About-page/building/webp/london.webp";
  if (s.includes("bengaluru") || s.includes("bangalore")) return "/assets/About-page/building/webp/banagaluru.webp";
  if (s.includes("chennai")) return "/assets/About-page/building/webp/chennai.webp";
  if (s.includes("thoothukudi") || s.includes("tuticorin")) return "/assets/About-page/building/webp/thoothukudi.webp";
  if (s.includes("coimbatore")) return "/assets/About-page/building/webp/chennai2.webp";
  if (s.includes("edinburgh")) return "/assets/About-page/building/webp/UK2.webp";
  if (s.includes("glasgow")) return "/assets/About-page/building/webp/workspace.webp";
  if (s.includes("cardiff") || s.includes("swansea") || s.includes("newport") || s.includes("wrexham")) {
    return "/assets/About-page/building/webp/officeroom.webp";
  }
  if (s.includes("belfast") || s.includes("derry") || s.includes("lisburn") || s.includes("newry")) {
    return "/assets/About-page/building/webp/waitingarea.webp";
  }
  if (s.includes("manchester") || s.includes("leeds") || s.includes("sheffield") || s.includes("newcastle")) {
    return "/assets/About-page/building/webp/ukbuilding.webp";
  }
  if (s.includes("birmingham") || s.includes("coventry") || s.includes("nottingham") || s.includes("leicester")) {
    return "/assets/About-page/building/webp/building.webp";
  }
  if (s.includes("oxford") || s.includes("cambridge") || s.includes("reading") || s.includes("milton-keynes")) {
    return "/assets/About-page/building/webp/building2.webp";
  }
  if (s.includes("bristol") || s.includes("southampton") || s.includes("portsmouth") || s.includes("brighton")) {
    return "/assets/About-page/building/webp/buildingtopangle.webp";
  }
  if (s.includes("liverpool") || s.includes("york") || s.includes("bradford")) {
    return "/assets/About-page/building/webp/buildingsteps.webp";
  }

  // India regions
  if (c === "india" || s.includes("mumbai") || s.includes("pune") || s.includes("maharashtra")) {
    return "/assets/About-page/building/webp/india.webp";
  }
  if (s.includes("delhi") || s.includes("noida") || s.includes("gurgaon") || s.includes("hyderabad")) {
    return "/assets/About-page/building/webp/indiamainhall.webp";
  }

  // US regions
  if (s.includes("nashville") || s.includes("juliet") || s.includes("tennessee")) {
    return "/assets/About-page/building/webp/USA.webp";
  }
  if (s.includes("austin") || s.includes("dallas") || s.includes("houston") || s.includes("texas")) {
    return "/assets/About-page/building/webp/usa2.webp";
  }
  if (c === "us" || s.includes("francisco") || s.includes("jose") || s.includes("california") || s.includes("york")) {
    return "/assets/About-page/building/webp/workspace.webp";
  }

  // Country defaults
  if (c === "uk" || c === "england" || c === "scotland" || c === "wales" || c === "northern-ireland") {
    return "/assets/About-page/building/webp/ukbuilding.webp";
  }
  if (c === "india") return "/assets/About-page/building/webp/india.webp";
  if (c === "us") return "/assets/About-page/building/webp/USA.webp";

  return "/assets/About-page/building/webp/building.webp";
}
