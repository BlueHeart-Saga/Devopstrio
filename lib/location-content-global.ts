import { globalCountries } from "@/data/locations/global-locations";
import { indiaStates, indiaLocations } from "@/data/locations/india-locations";
import { usStates, usLocations } from "@/data/locations/us-locations";
import {
  GlobalCountry,
  GlobalRegionOrState,
  GlobalLocation,
  LocationServiceMapping
} from "@/data/locations/types";
import { getIndiaPilotMapping, getPublishedIndiaCityServices } from "@/data/locations/india-service-matrix";
import { getUSPilotMapping, getPublishedUSCityServices } from "@/data/locations/us-service-matrix";
import { getAdaptedServiceBySlug } from "@/data/locations/service-adapter";
import { getLocationServiceUrl } from "@/lib/location-urls";
import { normalizeDisplayText } from "@/lib/text-utils";

export interface ResolvedGlobalLocationPath {
  type: "global-hub" | "country-hub" | "state-hub" | "city-hub" | "city-service";
  country?: GlobalCountry;
  stateOrRegion?: GlobalRegionOrState;
  location?: GlobalLocation;
  serviceMapping?: LocationServiceMapping;
  service?: any;
  canonicalPath: string;
}

// ==========================================
// INDIA ROUTE RESOLUTION
// ==========================================

export function resolveIndiaLocationRoute(segments: string[]): ResolvedGlobalLocationPath | null {
  const country = globalCountries.india;

  if (!segments || segments.length === 0) {
    return {
      type: "country-hub",
      country,
      canonicalPath: "/locations/india"
    };
  }

  // 1. Direct city check if segment[0] is a published city (e.g. /locations/india/bengaluru)
  const directCity = Object.values(indiaLocations).find(
    loc => loc.slug === segments[0] && loc.publicationStatus === "published"
  );

  if (directCity) {
    const stateOrRegion = indiaStates[directCity.stateOrRegionId];

    if (segments.length === 1) {
      return {
        type: "city-hub",
        country,
        stateOrRegion,
        location: directCity,
        canonicalPath: `/locations/india/${stateOrRegion?.slug || "karnataka"}/${directCity.slug}`
      };
    }

    if (segments.length === 2) {
      const serviceSlug = segments[1];
      const serviceMapping = getIndiaPilotMapping(directCity.slug, serviceSlug);
      if (serviceMapping && serviceMapping.publicationStatus === "published") {
        const service = getAdaptedServiceBySlug(serviceSlug);
        return {
          type: "city-service",
          country,
          stateOrRegion,
          location: directCity,
          serviceMapping,
          service,
          canonicalPath: getLocationServiceUrl("india", directCity.slug, serviceSlug)
        };
      }
    }
  }

  // 2. Direct single segment with city-service (e.g. /locations/india/bengaluru-cloud-managed-services)
  if (segments.length === 1) {
    const rawSlug = segments[0].replace(/^india-?/, "");
    for (const city of Object.values(indiaLocations).filter(l => l.publicationStatus === "published")) {
      if (rawSlug.startsWith(city.slug)) {
        const servicePart = rawSlug.slice(city.slug.length).replace(/^-/, "");
        const serviceMapping = getIndiaPilotMapping(city.slug, servicePart);
        if (serviceMapping && serviceMapping.publicationStatus === "published") {
          const stateOrRegion = indiaStates[city.stateOrRegionId];
          const service = getAdaptedServiceBySlug(servicePart);
          return {
            type: "city-service",
            country,
            stateOrRegion,
            location: city,
            serviceMapping,
            service,
            canonicalPath: getLocationServiceUrl("india", city.slug, servicePart)
          };
        }
      }
    }
  }

  // 3. Segment 1: State / Region (e.g. karnataka, tamil-nadu, telangana, etc.)
  const stateSlug = segments[0];
  const stateOrRegion = indiaStates[stateSlug];
  if (!stateOrRegion) return null;

  // Only allow published states to have public indexable pages
  if (stateOrRegion.publicationStatus !== "published") {
    return null;
  }

  if (segments.length === 1) {
    return {
      type: "state-hub",
      country,
      stateOrRegion,
      canonicalPath: `/locations/india/${stateSlug}`
    };
  }

  // Segment 2: City (e.g. bengaluru, chennai, hyderabad, etc.)
  const citySlug = segments[1];
  const location = Object.values(indiaLocations).find(
    loc => loc.slug === citySlug && loc.stateOrRegionId === stateOrRegion.id
  );
  if (!location) return null;

  // Only allow published cities to have public pages
  if (location.publicationStatus !== "published") {
    return null;
  }

  if (segments.length === 2) {
    return {
      type: "city-hub",
      country,
      stateOrRegion,
      location,
      canonicalPath: `/locations/india/${stateSlug}/${citySlug}`
    };
  }

  // Segment 3: Service (e.g. cloud-managed-services, generative-ai-solutions)
  if (segments.length === 3) {
    const serviceSlug = segments[2];
    const serviceMapping = getIndiaPilotMapping(location.slug, serviceSlug);
    if (!serviceMapping || serviceMapping.publicationStatus !== "published") {
      return null;
    }

    const service = getAdaptedServiceBySlug(serviceSlug);

    return {
      type: "city-service",
      country,
      stateOrRegion,
      location,
      serviceMapping,
      service,
      // Canonical points to preferred country-based URL structure: /locations/india/[location]-[service]
      canonicalPath: getLocationServiceUrl("india", location.slug, serviceSlug)
    };
  }

  return null;
}

// ==========================================
// USA ROUTE RESOLUTION
// ==========================================

export function resolveUSLocationRoute(segments: string[]): ResolvedGlobalLocationPath | null {
  const country = globalCountries.us;

  if (!segments || segments.length === 0) {
    return {
      type: "country-hub",
      country,
      canonicalPath: "/locations/us"
    };
  }

  // 1. Direct city check if segment[0] is a published city (e.g. /locations/us/nashville)
  const directCity = Object.values(usLocations).find(
    loc => loc.slug === segments[0] && loc.publicationStatus === "published"
  );

  if (directCity) {
    const stateOrRegion = usStates[directCity.stateOrRegionId];

    if (segments.length === 1) {
      return {
        type: "city-hub",
        country,
        stateOrRegion,
        location: directCity,
        canonicalPath: `/locations/us/${stateOrRegion?.slug || "tennessee"}/${directCity.slug}`
      };
    }

    if (segments.length === 2) {
      const serviceSlug = segments[1];
      const serviceMapping = getUSPilotMapping(directCity.slug, serviceSlug);
      if (serviceMapping && serviceMapping.publicationStatus === "published") {
        const service = getAdaptedServiceBySlug(serviceSlug);
        return {
          type: "city-service",
          country,
          stateOrRegion,
          location: directCity,
          serviceMapping,
          service,
          canonicalPath: getLocationServiceUrl("us", directCity.slug, serviceSlug)
        };
      }
    }
  }

  // 2. Direct single segment with city-service (e.g. /locations/us/nashville-cloud-managed-services)
  if (segments.length === 1) {
    const rawSlug = segments[0].replace(/^us-?/, "");
    // Check published cities
    for (const city of Object.values(usLocations).filter(l => l.publicationStatus === "published")) {
      if (rawSlug.startsWith(city.slug)) {
        const servicePart = rawSlug.slice(city.slug.length).replace(/^-/, "");
        const serviceMapping = getUSPilotMapping(city.slug, servicePart);
        if (serviceMapping && serviceMapping.publicationStatus === "published") {
          const stateOrRegion = usStates[city.stateOrRegionId];
          const service = getAdaptedServiceBySlug(servicePart);
          return {
            type: "city-service",
            country,
            stateOrRegion,
            location: city,
            serviceMapping,
            service,
            canonicalPath: getLocationServiceUrl("us", city.slug, servicePart)
          };
        }
      }
    }

    // Check published states (e.g. /locations/us/tennessee-cloud-managed-services)
    for (const state of Object.values(usStates).filter(s => s.publicationStatus === "published")) {
      if (rawSlug.startsWith(state.slug)) {
        const servicePart = rawSlug.slice(state.slug.length).replace(/^-/, "");
        // Map to primary published city in this state (e.g. nashville for tennessee)
        const primaryCity = Object.values(usLocations).find(
          l => l.stateOrRegionId === state.id && l.publicationStatus === "published"
        );
        if (primaryCity) {
          const serviceMapping = getUSPilotMapping(primaryCity.slug, servicePart);
          if (serviceMapping && serviceMapping.publicationStatus === "published") {
            const service = getAdaptedServiceBySlug(servicePart);
            return {
              type: "city-service",
              country,
              stateOrRegion: state,
              location: primaryCity,
              serviceMapping,
              service,
              canonicalPath: getLocationServiceUrl("us", state.slug, servicePart)
            };
          }
        }
      }
    }
  }

  // 3. Segment 1: State (e.g. tennessee, texas, new-york, california, etc.)
  const stateSlug = segments[0];
  const stateOrRegion = usStates[stateSlug];
  if (!stateOrRegion) return null;

  // Only allow published states to render public pages
  if (stateOrRegion.publicationStatus !== "published") {
    return null;
  }

  if (segments.length === 1) {
    return {
      type: "state-hub",
      country,
      stateOrRegion,
      canonicalPath: `/locations/us/${stateSlug}`
    };
  }

  // Segment 2: City (e.g. nashville, mt-juliet, austin, dallas, etc.)
  const citySlug = segments[1];
  const location = Object.values(usLocations).find(
    loc => loc.slug === citySlug && loc.stateOrRegionId === stateOrRegion.id
  );
  if (!location) return null;

  // Only allow published cities
  if (location.publicationStatus !== "published") {
    return null;
  }

  if (segments.length === 2) {
    return {
      type: "city-hub",
      country,
      stateOrRegion,
      location,
      canonicalPath: `/locations/us/${stateSlug}/${citySlug}`
    };
  }

  // Segment 3: Service (e.g. cloud-managed-services, cloud-migration)
  if (segments.length === 3) {
    const serviceSlug = segments[2];
    const serviceMapping = getUSPilotMapping(location.slug, serviceSlug);
    if (!serviceMapping || serviceMapping.publicationStatus !== "published") {
      return null;
    }

    const service = getAdaptedServiceBySlug(serviceSlug);

    return {
      type: "city-service",
      country,
      stateOrRegion,
      location,
      serviceMapping,
      service,
      // Canonical points to preferred country-based URL structure: /locations/us/[location]-[service]
      canonicalPath: getLocationServiceUrl("us", location.slug, serviceSlug)
    };
  }

  return null;
}

// Helper query functions
export function getPublishedIndiaCities(): GlobalLocation[] {
  return Object.values(indiaLocations).filter(loc => loc.publicationStatus === "published");
}

export function getPublishedUSCities(): GlobalLocation[] {
  return Object.values(usLocations).filter(loc => loc.publicationStatus === "published");
}

export function getPublishedIndiaStates(): GlobalRegionOrState[] {
  return Object.values(indiaStates).filter(s => s.publicationStatus === "published");
}

export function getPublishedUSStates(): GlobalRegionOrState[] {
  return Object.values(usStates).filter(s => s.publicationStatus === "published");
}

export function getGlobalBreadcrumbs(resolved: ResolvedGlobalLocationPath): { label: string; href?: string }[] {
  const crumbs: { label: string; href?: string }[] = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" }
  ];

  if (resolved.country) {
    crumbs.push({ label: resolved.country.name, href: resolved.country.canonicalPath });
  }

  if (resolved.stateOrRegion && resolved.country) {
    crumbs.push({
      label: normalizeDisplayText(resolved.stateOrRegion.name),
      href: `${resolved.country.canonicalPath}/${resolved.stateOrRegion.slug}`
    });
  }

  if (resolved.location && resolved.stateOrRegion && resolved.country) {
    crumbs.push({
      label: normalizeDisplayText(resolved.location.displayName),
      href: `${resolved.country.canonicalPath}/${resolved.stateOrRegion.slug}/${resolved.location.slug}`
    });
  }

  if (resolved.type === "city-service" && resolved.serviceMapping) {
    crumbs.push({
      label: normalizeDisplayText(resolved.service?.title || resolved.serviceMapping.h1Title)
    });
  }

  return crumbs;
}

export function getNearbyGlobalLocations(location: GlobalLocation): GlobalLocation[] {
  const isIndia = location.countryCode === "india";
  const pool = isIndia ? indiaLocations : usLocations;
  const publishedInCountry = Object.values(pool).filter(
    loc => loc.publicationStatus === "published" && loc.slug !== location.slug
  );

  // 1. Gather explicitly mapped nearby locations that are published
  const explicitPublished = (location.nearbyLocationIds || [])
    .map(id => pool[id])
    .filter((loc): loc is GlobalLocation => Boolean(loc && loc.publicationStatus === "published"));

  if (explicitPublished.length >= 4) {
    return explicitPublished.slice(0, 6);
  }

  // 2. Supplement with published cities in the same state
  const sameState = publishedInCountry.filter(
    loc => loc.stateOrRegionId === location.stateOrRegionId && !explicitPublished.some(e => e.id === loc.id)
  );

  // 3. Fallback to other published cities in this country
  const others = publishedInCountry.filter(
    loc => !explicitPublished.some(e => e.id === loc.id) && !sameState.some(s => s.id === loc.id)
  );

  return [...explicitPublished, ...sameState, ...others].slice(0, 6);
}

export function getGlobalStateFAQs(state: GlobalRegionOrState, countryCode: "india" | "us"): { q: string; a: string }[] {
  const isIndia = countryCode === "india";
  const stateName = state.name;

  if (isIndia) {
    return [
      {
        q: `Does Devopstrio provide on-site architecture workshops across ${stateName}?`,
        a: `Yes. From our corporate and technology centers in Bengaluru and Chennai, our principal solutions architects conduct on-site discovery workshops, technical sprint planning, and architecture audits across ${stateName}.`
      },
      {
        q: `How do you ensure data sovereignty under India's DPDP Act in ${stateName}?`,
        a: `All workloads, customer databases, and operational logs are provisioned strictly inside sovereign Indian cloud availability zones (AWS Mumbai ap-south-1 and Hyderabad ap-south-2, Azure Central India, GCP asia-south1), guaranteeing full compliance with the Digital Personal Data Protection Act.`
      },
      {
        q: `What incident response SLAs do you guarantee for ${stateName} enterprises?`,
        a: "We guarantee a sub-15-minute response SLA for critical P1 incidents, backed by 99.99% infrastructure availability and round-the-clock monitoring by our 24/7/365 follow-the-sun SRE team."
      },
      {
        q: `Which industrial sectors does Devopstrio support in ${stateName}?`,
        a: `We support ${stateName}'s leading technology clusters across ${state.keyIndustries.join(", ")}, tailoring cloud landing zones to meet sector-specific security and operational requirements.`
      },
      {
        q: `How does Devopstrio help ${stateName} organizations meet RBI and CERT-In mandates?`,
        a: "Our architectures integrate continuous compliance automation, NTP time synchronization, immutable security audit trails, and automated vulnerability scanning to satisfy RBI cybersecurity frameworks and CERT-In reporting rules."
      },
      {
        q: `Can Devopstrio manage enterprise Kubernetes clusters for ${stateName} scaleups?`,
        a: "Yes. We engineer production-grade Kubernetes platforms using Amazon EKS, Azure AKS, and Google Cloud GKE, deploying GitOps pipelines with automated autoscaling and Zero-Trust service meshes."
      },
      {
        q: `What FinOps cost optimization results do you deliver for ${stateName} tech firms?`,
        a: "Our FinOps specialists analyze cloud spending, rightsize over-provisioned instances, configure spot/savings policies, and eliminate zombie resources, regularly generating 20% to 35% in direct cost savings."
      },
      {
        q: `Can you deploy private Generative AI models within ${stateName}'s enterprise cloud?`,
        a: "Yes. We deploy sovereign LLMs, custom embeddings, and retrieval-augmented generation (RAG) pipelines strictly within your private VPC, ensuring proprietary data never leaves your infrastructure."
      },
      {
        q: `How do you support Global Capability Centers (GCCs) established in ${stateName}?`,
        a: "We partner with multinational GCCs to build standardized Cloud Centers of Excellence (CCoE), automate landing zone provisioning, and enable self-service platform engineering across distributed development teams."
      },
      {
        q: `How can engineering teams in ${stateName} book an architecture audit?`,
        a: "You can schedule an architecture scoping review directly online. Our senior solutions architects will connect with your team within 48 to 72 hours."
      }
    ].map(f => ({
      q: normalizeDisplayText(f.q),
      a: normalizeDisplayText(f.a)
    }));
  } else {
    // USA State FAQs
    return [
      {
        q: `Does Devopstrio provide on-site technical consulting in ${stateName}?`,
        a: `Yes. Devopstrio operates our North American Sub-Regional Technology Office at 522 Aventura Dr, Mt. Juliet, TN (Greater Nashville area). Our principal architects provide on-site architecture reviews, sprint design sessions, and enterprise consulting throughout ${stateName}.`
      },
      {
        q: `How do you guarantee US data sovereignty and compliance in ${stateName}?`,
        a: `All client workloads and storage volumes are hosted strictly inside sovereign US cloud availability zones (AWS us-east-1, us-east-2, us-west-2; Azure East US, Central US; Google Cloud us-central1) in full compliance with SOC-2 Type II, HIPAA, and CCPA.`
      },
      {
        q: `What SLA response times do you guarantee for ${stateName} enterprises?`,
        a: "Our enterprise contracts feature guaranteed P1 critical incident response times under 15 minutes, 99.99% infrastructure uptime SLAs, and 24/7/365 active monitoring."
      },
      {
        q: `Which industry verticals does Devopstrio support in ${stateName}?`,
        a: `We engineer mission-critical cloud solutions across ${stateName}'s dominant sectors including ${state.keyIndustries.join(", ")}, with dedicated governance for highly regulated workloads.`
      },
      {
        q: `How does Devopstrio engineer HIPAA-compliant cloud architectures in ${stateName}?`,
        a: "We execute signed Business Associate Agreements (BAAs), implement envelope encryption with customer-managed keys (KMS/HSM), and automate audit trails to satisfy all HIPAA Security and Privacy requirements."
      },
      {
        q: `Can Devopstrio migrate on-premises workloads to AWS or Azure in ${stateName}?`,
        a: "Yes. We execute phased zero-downtime migrations using automated database CDC replication, canary deployments, and containerization, minimizing disruption for enterprise applications."
      },
      {
        q: `What Kubernetes orchestration capabilities do you offer for ${stateName} clients?`,
        a: "We architect multi-tenant, production-ready clusters on Amazon EKS, Azure AKS, and GKE with automated GitOps deployment (ArgoCD), Prometheus/Grafana observability, and Istio service mesh."
      },
      {
        q: `How does Devopstrio help ${stateName} companies reduce AWS and Azure bills?`,
        a: "Through FinOps automation, instance rightsizing, spot fleet orchestration, and Savings Plan optimization, we routinely cut cloud infrastructure costs by 20% to 40%."
      },
      {
        q: `How does Devopstrio's follow-the-sun SRE model eliminate out-of-hours alert fatigue?`,
        a: "Our US architects lead daytime strategic delivery, while our follow-the-sun global SRE pods cover nighttime shifts, resolving incident alerts and executing runbooks with zero delay."
      },
      {
        q: `How can organizations in ${stateName} initiate an enterprise consultation?`,
        a: "Technology leaders can book a technical consultation online. Our US solutions team will review your environment and schedule a discovery session within 48 hours."
      }
    ].map(f => ({
      q: normalizeDisplayText(f.q),
      a: normalizeDisplayText(f.a)
    }));
  }
}

export function getGlobalCityFAQs(location: GlobalLocation, state: GlobalRegionOrState, countryCode: "india" | "us"): { q: string; a: string }[] {
  const isIndia = countryCode === "india";
  const cityName = location.displayName;
  const isPhysicalOffice =
    location.officeStatus === "headquarters" ||
    location.officeStatus === "corporate-office" ||
    location.officeStatus === "operations-center" ||
    location.officeStatus === "sub-regional-office";

  if (isIndia) {
    return [
      {
        q: `Does Devopstrio have a verified physical office or on-site engineering team in ${cityName}?`,
        a: isPhysicalOffice
          ? `Yes. Devopstrio operates our verified ${location.officeStatus === "corporate-office" ? "Corporate Office" : "Operations Center"} in ${cityName} (${location.verifiedAddress?.streetAddress || "Embassy Golf Links / Guindy"}). Our senior architects conduct face-to-face technical discovery, sprint planning, and architecture audits throughout ${cityName}.`
          : `We provide comprehensive remote and hybrid engineering delivery across ${cityName}. Our principal architects in Bengaluru and Chennai oversee architecture governance, while our 24/7 follow-the-sun SRE teams provide round-the-clock cluster support.`
      },
      {
        q: `What cloud platforms and regions does Devopstrio support for ${cityName} businesses?`,
        a: `We provide certified multi-cloud engineering across Amazon Web Services (AWS Mumbai ap-south-1 and Hyderabad ap-south-2), Microsoft Azure (Central India and South India), and Google Cloud (asia-south1 and asia-south2).`
      },
      {
        q: `What incident response SLAs are available for enterprises in ${cityName}?`,
        a: "We contractually commit to rapid response times for critical P1 incidents, backed by robust high-availability targets and continuous active monitoring."
      },
      {
        q: `How do you support ${cityName}'s dominant industry sectors and regulatory demands?`,
        a: `We tailor cloud architectures to ${cityName}'s prominent industries, including ${location.economicProfile?.dominantIndustries?.join(", ") || "software, financial services, and digital enterprises"}, ensuring full compliance with the DPDP Act and RBI regulations.`
      },
      {
        q: `Can Devopstrio modernize our legacy monolithic systems into cloud-native architectures in ${cityName}?`,
        a: "Yes. We decouple legacy applications into containerized microservices running on Kubernetes (EKS/AKS), with automated CI/CD pipelines and infrastructure as code."
      },
      {
        q: `How does Devopstrio handle 24/7 SRE on-call alerting and out-of-hours coverage for ${cityName} teams?`,
        a: "Our follow-the-sun SRE team eliminates developer burnout by taking full ownership of 24/7 incident response, alert triage, automated healing scripts, and escalation management."
      },
      {
        q: `How do you ensure data protection under India's Digital Personal Data Protection Act in ${cityName}?`,
        a: "All cloud architectures enforce customer-managed encryption keys, role-based access control, data anonymization, and sovereign in-India database residency."
      },
      {
        q: `What FinOps cloud cost optimization services do you deliver in ${cityName}?`,
        a: "We identify idle cloud resources, rightsize over-provisioned compute, negotiate commitment discounts, and establish automated budget guardrails, typically reducing monthly spend by 20% to 35%."
      },
      {
        q: `Can Devopstrio integrate directly with our internal development squads in ${cityName}?`,
        a: "Yes. Our senior cloud engineers work as embedded co-delivery pods alongside your internal developers, adhering to your Jira, GitHub, and agile sprint cadences."
      },
      {
        q: `How can technology leaders in ${cityName} schedule an initial technical review?`,
        a: "You can book a technical consultation online. Our India solutions team will schedule an architecture discovery session within 48 to 72 hours."
      }
    ].map(f => ({
      q: normalizeDisplayText(f.q),
      a: normalizeDisplayText(f.a)
    }));
  } else {
    // USA City FAQs
    return [
      {
        q: `Does Devopstrio have a verified physical office or on-site engineering presence in ${cityName}?`,
        a: isPhysicalOffice
          ? `Yes. Devopstrio operates our verified North American Sub-Regional Technology Office at 522 Aventura Dr, Mt. Juliet, TN 37122 (Greater Nashville area). Our principal architects provide on-site architecture workshops, executive briefings, and engineering reviews throughout ${cityName}.`
          : `We provide comprehensive hybrid and remote engineering delivery across ${cityName}. Our North America solutions architects lead strategic governance, while our 24/7 follow-the-sun SRE operations provide uninterrupted round-the-clock cluster support.`
      },
      {
        q: `What cloud platforms and regions does Devopstrio support for ${cityName} businesses?`,
        a: `We engineer enterprise architectures across Amazon Web Services (AWS us-east-1, us-east-2, us-west-2), Microsoft Azure (East US, Central US, West US), and Google Cloud (us-central1).`
      },
      {
        q: `What incident response SLAs are available for ${cityName} clients?`,
        a: "We provide contractual P1 critical incident response targets, high-availability infrastructure uptime commitments, and continuous telemetry monitoring backed by formal enterprise agreements."
      },
      {
        q: `How do you support ${cityName}'s key industry sectors and regulatory demands?`,
        a: `We engineer secure cloud landing zones tailored to ${cityName}'s leading sectors including ${location.economicProfile?.dominantIndustries?.join(", ") || "technology, finance, and healthcare"}, ensuring full compliance with SOC-2, HIPAA, and CCPA.`
      },
      {
        q: `Can Devopstrio migrate our on-premises VMware or private data center workloads in ${cityName}?`,
        a: "Yes. We execute automated, zero-downtime migrations to AWS or Azure using continuous data replication, canary traffic shifts, and modern container platforms."
      },
      {
        q: `How does Devopstrio handle 24/7 on-call coverage and alert fatigue in ${cityName}?`,
        a: "Our follow-the-sun SRE model relieves your internal developers from out-of-hours firefighting by handling overnight P1-P4 alerts and automated runbook remediations."
      },
      {
        q: `How do you ensure HIPAA and SOC-2 compliance for cloud workloads in ${cityName}?`,
        a: "We implement signed BAAs, automated encryption at rest and in transit, continuous security posture management (CSPM), and immutable audit trails across all environments."
      },
      {
        q: `What FinOps cloud cost optimization services do you deliver in ${cityName}?`,
        a: "We conduct detailed architectural cost reviews, implement automated rightsizing and spot fleets, and optimize Savings Plans, consistently saving clients 20% to 40% on cloud bills."
      },
      {
        q: `Can Devopstrio collaborate with our existing engineering and platform teams in ${cityName}?`,
        a: "Yes. We embed senior engineers into your sprint teams via co-delivery pods or provide autonomous managed platform operations governed by weekly architecture reviews."
      },
      {
        q: `How can engineering leaders in ${cityName} schedule an architectural review?`,
        a: "You can schedule a consultation directly on our website. Our North American architecture team will connect with you within 48 hours."
      }
    ].map(f => ({
      q: normalizeDisplayText(f.q),
      a: normalizeDisplayText(f.a)
    }));
  }
}
