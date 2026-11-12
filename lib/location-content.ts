import { ukNations, ukRegions, ukLocations } from "@/data/locations/uk-locations";
import { UKNation, UKRegion, UKLocation, LocationServiceMapping } from "@/data/locations/types";
import { pilotLocationServices, getPilotMapping } from "@/data/locations/location-service-matrix";
import { authoritativeServiceCatalog, getAdaptedServiceBySlug } from "@/data/locations/service-adapter";
import { getExactServiceKeyword, TARGET_SERVICE_SLUGS } from "@/lib/keyword-utils";
import { getLocationServiceUrl } from "@/lib/location-urls";
import { normalizeDisplayText } from "@/lib/text-utils";

export { getExactServiceKeyword, TARGET_SERVICE_SLUGS };

export interface ResolvedLocationPath {
  type: "national-hub" | "nation-hub" | "region-hub" | "city-hub" | "city-service";
  nation?: UKNation;
  region?: UKRegion;
  location?: UKLocation;
  serviceMapping?: LocationServiceMapping;
  service?: any;
  canonicalPath: string;
}

export function resolveLocationRoute(segments: string[]): ResolvedLocationPath | null {
  // Path under /locations/uk/...
  if (!segments || segments.length === 0) {
    return {
      type: "national-hub",
      canonicalPath: "/locations/uk"
    };
  }

  // Check 1: Direct city check if segment[0] is a published UK city (e.g. /locations/uk/london or /locations/uk/london/cloud-services)
  const directCity = Object.values(ukLocations).find(
    loc => loc.slug === segments[0] && loc.publicationStatus === "published"
  );

  if (directCity) {
    const nation = ukNations[directCity.nation];
    const region = ukRegions[directCity.region];

    if (segments.length === 1) {
      return {
        type: "city-hub",
        nation,
        region,
        location: directCity,
        canonicalPath: `/locations/uk/${nation?.slug || "england"}/${directCity.slug}`
      };
    }

    if (segments.length === 2) {
      const serviceSlug = segments[1];
      const serviceMapping = getPilotMapping(directCity.slug, serviceSlug);
      if (serviceMapping && serviceMapping.publicationStatus === "published") {
        const service = getAdaptedServiceBySlug(serviceSlug);
        return {
          type: "city-service",
          nation,
          region,
          location: directCity,
          serviceMapping,
          service,
          canonicalPath: getLocationServiceUrl("uk", directCity.slug, serviceSlug)
        };
      }
    }
  }

  // Check 2: Direct single segment with city-service (e.g. /locations/uk/london-cloud-services or /locations/uk/cambridge-cloud-services)
  if (segments.length === 1) {
    const rawSlug = segments[0].replace(/^uk-?/, "");
    for (const city of Object.values(ukLocations).filter(l => l.publicationStatus === "published")) {
      if (rawSlug.startsWith(city.slug)) {
        const servicePart = rawSlug.slice(city.slug.length).replace(/^-/, "");
        const serviceMapping = getPilotMapping(city.slug, servicePart);
        if (serviceMapping && serviceMapping.publicationStatus === "published") {
          const nation = ukNations[city.nation];
          const region = ukRegions[city.region];
          const service = getAdaptedServiceBySlug(servicePart);
          return {
            type: "city-service",
            nation,
            region,
            location: city,
            serviceMapping,
            service,
            canonicalPath: getLocationServiceUrl("uk", city.slug, servicePart)
          };
        }
      }
    }
  }

  // Segment 1: Nation (england, scotland, wales, northern-ireland)
  const nationSlug = segments[0];
  const nation = ukNations[nationSlug];
  if (!nation) return null;

  if (segments.length === 1) {
    return {
      type: "nation-hub",
      nation,
      canonicalPath: `/locations/uk/${nationSlug}`
    };
  }

  // Segment 2 check:
  // Is segments[1] a published city in this nation? (New 4-tier hierarchy: Country -> Nation -> City)
  const cityInNation = Object.values(ukLocations).find(
    loc => loc.slug === segments[1] && loc.nation === nation.id && loc.publicationStatus === "published"
  );

  // Or is segments[1] a region? (e.g. greater-london, east-of-england, etc.)
  const regionDirect = ukRegions[segments[1]];

  // -------------------------------------------------------------
  // LENGTH === 2: Either /locations/uk/[nation]/[city] (CANONICAL CITY HUB)
  // or /locations/uk/[nation]/[region] (REGION HUB)
  // -------------------------------------------------------------
  if (segments.length === 2) {
    if (cityInNation) {
      const region = ukRegions[cityInNation.region];
      return {
        type: "city-hub",
        nation,
        region,
        location: cityInNation,
        canonicalPath: `/locations/uk/${nationSlug}/${cityInNation.slug}`
      };
    }

    if (regionDirect && regionDirect.nation === nation.id) {
      return {
        type: "region-hub",
        nation,
        region: regionDirect,
        canonicalPath: `/locations/uk/${nationSlug}/${regionDirect.slug}`
      };
    }

    return null;
  }

  // -------------------------------------------------------------
  // LENGTH === 3:
  // Option A: /locations/uk/[nation]/[city]/[service] (Clean City+Service)
  // Option B: Legacy /locations/uk/[nation]/[region]/[city] (Legacy City Hub)
  // -------------------------------------------------------------
  if (segments.length === 3) {
    if (cityInNation) {
      const serviceSlug = segments[2];
      const serviceMapping = getPilotMapping(cityInNation.slug, serviceSlug);
      if (!serviceMapping || serviceMapping.publicationStatus !== "published") {
        return null;
      }
      const service = getAdaptedServiceBySlug(serviceSlug);
      const region = ukRegions[cityInNation.region];

      return {
        type: "city-service",
        nation,
        region,
        location: cityInNation,
        serviceMapping,
        service,
        canonicalPath: getLocationServiceUrl("uk", cityInNation.slug, serviceSlug)
      };
    }

    if (regionDirect && regionDirect.nation === nation.id) {
      // Legacy format: segments[2] is citySlug!
      const legacyCitySlug = segments[2];
      const legacyCity = Object.values(ukLocations).find(
        loc => loc.slug === legacyCitySlug && loc.region === regionDirect.id && loc.publicationStatus === "published"
      );
      if (!legacyCity) return null;

      return {
        type: "city-hub",
        nation,
        region: regionDirect,
        location: legacyCity,
        // Canonical points to clean city hub URL
        canonicalPath: `/locations/uk/${nationSlug}/${legacyCity.slug}`
      };
    }

    return null;
  }

  // -------------------------------------------------------------
  // LENGTH === 4: Legacy /locations/uk/[nation]/[region]/[city]/[service]
  // -------------------------------------------------------------
  if (segments.length === 4) {
    if (regionDirect && regionDirect.nation === nation.id) {
      const legacyCitySlug = segments[2];
      const legacyCity = Object.values(ukLocations).find(
        loc => loc.slug === legacyCitySlug && loc.region === regionDirect.id && loc.publicationStatus === "published"
      );
      if (!legacyCity) return null;

      const serviceSlug = segments[3];
      const serviceMapping = getPilotMapping(legacyCity.slug, serviceSlug);
      if (!serviceMapping || serviceMapping.publicationStatus !== "published") {
        return null;
      }
      const service = getAdaptedServiceBySlug(serviceSlug);

      return {
        type: "city-service",
        nation,
        region: regionDirect,
        location: legacyCity,
        serviceMapping,
        service,
        // Canonical points to the preferred country-based URL pattern: /locations/uk/[location]-[service]
        canonicalPath: getLocationServiceUrl("uk", legacyCity.slug, serviceSlug)
      };
    }

    return null;
  }

  return null;
}

export function getPublishedCities(): UKLocation[] {
  return Object.values(ukLocations).filter(loc => loc.publicationStatus === "published");
}

export function getAllCandidateLocations(): UKLocation[] {
  return Object.values(ukLocations);
}

export function getPublishedCityServices(): LocationServiceMapping[] {
  const publishedCities = Object.values(ukLocations).filter(loc => loc.publicationStatus === "published");
  const all: LocationServiceMapping[] = [];

  for (const city of publishedCities) {
    for (const serviceSlug of TARGET_SERVICE_SLUGS) {
      const mapping = getPilotMapping(city.slug, serviceSlug);
      if (mapping) all.push(mapping);
    }
  }

  return all;
}

export function getNearbyLocations(location: UKLocation): UKLocation[] {
  return (location.nearbyLocationIds || [])
    .map(id => ukLocations[id])
    .filter(Boolean)
    .slice(0, 6);
}

export function getBreadcrumbsForResolvedPath(resolved: ResolvedLocationPath): { label: string; href?: string }[] {
  const crumbs: { label: string; href?: string }[] = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: "United Kingdom", href: "/locations/uk" }
  ];

  if (resolved.nation) {
    crumbs.push({
      label: resolved.nation.name,
      href: `/locations/uk/${resolved.nation.slug}`
    });
  }

  if (resolved.location && resolved.nation) {
    crumbs.push({
      label: resolved.location.displayName,
      href: `/locations/uk/${resolved.nation.slug}/${resolved.location.slug}`
    });
  } else if (resolved.region && resolved.nation && resolved.type === "region-hub") {
    crumbs.push({
      label: resolved.region.name,
      href: `/locations/uk/${resolved.nation.slug}/${resolved.region.slug}`
    });
  }

  if (resolved.serviceMapping && resolved.service) {
    const rawExactKeyword = getExactServiceKeyword(resolved.serviceMapping.serviceSlug, resolved.service.title || resolved.serviceMapping.h1Title);
    crumbs.push({
      label: normalizeDisplayText(rawExactKeyword)
    });
  }

  return crumbs;
}

export function getUKNationOrRegionFAQs(name: string): { q: string; a: string }[] {
  return [
    {
      q: `How do you guarantee UK data residency and regulatory compliance for ${name} organizations?`,
      a: `All workloads, data stores, and telemetry are provisioned strictly within sovereign UK cloud regions (AWS London eu-west-2, Microsoft Azure UK South, and Google Cloud europe-west2). We guarantee 100% adherence to UK GDPR, the Data Protection Act 2018, and relevant UK public and financial sector standards.`
    },
    {
      q: `What incident response SLAs do you provide for enterprises in ${name}?`,
      a: "Our enterprise contracts feature contractually binding Service Level Agreements (SLAs) including a sub-15-minute response for P1 critical outages, 99.99% infrastructure uptime guarantees, and 24/7/365 active monitoring."
    },
    {
      q: `Which industry sectors does Devopstrio support within ${name}?`,
      a: `We support organizations across the dominant regional sectors of ${name}, including Financial Services (FCA aligned), Healthcare and Life Sciences (NHS DTAC/DSPT), Advanced Manufacturing, Retail and E-Commerce, and Public Sector modernization.`
    },
    {
      q: `Can Devopstrio manage multi-cloud Kubernetes clusters across AWS and Azure in ${name}?`,
      a: "Yes. We design and operate enterprise-grade Kubernetes platforms using Amazon EKS and Azure AKS, fully automated with GitOps workflows, automated scaling, and Zero-Trust pod security policies."
    },
    {
      q: `How does Devopstrio help ${name} businesses reduce escalating cloud bills?`,
      a: "Our certified FinOps specialists conduct comprehensive architecture rightsizing, spot instance lifecycle automation, and Savings Plan audits, consistently achieving 20% to 35% in direct cloud cost reductions."
    },
    {
      q: `How do you handle legacy infrastructure migrations to the cloud in ${name}?`,
      a: "We execute zero-downtime migrations from on-premises data centers or legacy private hosting to modern cloud landing zones, utilizing phased canary traffic routing and real-time database replication."
    },
    {
      q: `What cybersecurity standards and certifications govern your delivery in ${name}?`,
      a: "Our engineering operations adhere strictly to ISO 27001, SOC-2 Type II, Cyber Essentials Plus, and the National Cyber Security Centre (NCSC) cloud security principles."
    },
    {
      q: `How does Devopstrio's 24/7 follow-the-sun SRE model benefit engineering teams in ${name}?`,
      a: `Onshore UK principal architects lead day-to-day strategic roadmaps and design governance, while our follow-the-sun SRE pods manage continuous cluster patching, automated alert remediation, and night-shift on-call duties.`
    },
    {
      q: `How can organizations in ${name} get started with an infrastructure audit?`,
      a: "Engineering leaders can schedule a consultation directly online. Our team conducts an initial architectural review and provides an actionable findings report within 3 to 5 business days."
    }
  ].map(f => ({
    q: normalizeDisplayText(f.q),
    a: normalizeDisplayText(f.a)
  }));
}

export function getUKCityFAQs(location: UKLocation): { q: string; a: string }[] {
  const isLondonHQ = location.slug === "london";
  const cityName = location.displayName;

  return [
    {
      q: `Does Devopstrio have a physical presence or on-site engineering team in ${cityName}?`,
      a: isLondonHQ
        ? "Yes. Our global headquarters is located in London at 128 City Road, EC1V 2NX, with an additional support office at 167-169 Great Portland Street, W1W 5PF. Our senior architects and engineering leads conduct face-to-face scoping, sprint planning, and architecture audits throughout London."
        : `We provide comprehensive remote and onshore hybrid engineering across ${cityName}. Our London-based principal architects oversee design and compliance, conducting on-site technical workshops when required, while our 24/7 SRE teams provide round-the-clock cluster support.`
    },
    {
      q: `What cloud platforms and regions does Devopstrio support for ${cityName} businesses?`,
      a: `We deliver certified multi-cloud engineering across Amazon Web Services (AWS eu-west-2 London region), Microsoft Azure (UK South and UK West), and Google Cloud Platform (europe-west2 London).`
    },
    {
      q: `What incident response SLAs are guaranteed for ${cityName} clients?`,
      a: "We guarantee a P1 incident response time of under 15 minutes, 99.99% infrastructure uptime SLAs, and 24/7/365 active monitoring backed by financial penalties."
    },
    {
      q: `How do you support ${cityName}'s key industry sectors and regulatory demands?`,
      a: `We tailor cloud landing zones and compliance controls to ${cityName}'s prominent sectors, including ${location.economicProfile?.dominantIndustries?.join(", ") || "enterprise tech and financial services"}, ensuring full alignment with UK GDPR and industry standards.`
    },
    {
      q: `Can Devopstrio modernize our legacy on-premises servers or VMware stacks in ${cityName}?`,
      a: "Yes. We re-architect legacy virtualization environments into containerized Kubernetes platforms or serverless microservices with automated CI/CD and zero cutover downtime."
    },
    {
      q: `How does Devopstrio handle 24/7 on-call alerting and out-of-hours coverage in ${cityName}?`,
      a: "Our follow-the-sun SRE team eliminates developer on-call fatigue by handling overnight P1-P4 alerts, automated runbook executions, and incident triage with continuous telemetry."
    },
    {
      q: `How do you ensure UK GDPR compliance and data sovereignty in ${cityName}?`,
      a: "All data architectures enforce encryption at rest (KMS) and in transit (TLS 1.3), automated backup retention policies, and sovereign in-UK storage boundaries."
    },
    {
      q: `What FinOps cloud cost optimization services do you deliver in ${cityName}?`,
      a: "We audit idle resources, over-provisioned compute, unattached storage volumes, and underutilized licenses to optimize monthly cloud expenditure by up to 35%."
    },
    {
      q: `Can Devopstrio integrate with our existing engineering and DevOps team in ${cityName}?`,
      a: "Yes. We work in co-delivery pods embedded directly into your Jira/GitHub workflows or provide autonomous managed platform engineering."
    },
    {
      q: `How can engineering leaders in ${cityName} request an initial technical review?`,
      a: "You can book a technical consultation online. Our UK solutions team will arrange an architecture scoping session within 48 hours."
    }
  ].map(f => ({
    q: normalizeDisplayText(f.q),
    a: normalizeDisplayText(f.a)
  }));
}

export function getEnrichedCityServiceFaqs(
  sm: LocationServiceMapping,
  service: any,
  cityName: string,
  countryCode: "uk" | "india" | "us",
  countryName: string
): { q: string; a: string }[] {
  const existingFaqs = (sm.faqs || []).map(f => ({
    q: normalizeDisplayText(f.q),
    a: normalizeDisplayText(f.a)
  }));
  const existingQuestions = new Set(existingFaqs.map(f => f.q.toLowerCase()));

  const serviceTitle = normalizeDisplayText(service?.title || sm.h1Title);

  const countryCompliance =
    countryCode === "uk"
      ? "UK GDPR, the Data Protection Act 2018, and relevant FCA / NHS guidelines"
      : countryCode === "india"
      ? "the Digital Personal Data Protection (DPDP) Act, RBI cybersecurity mandates, and CERT-In directions"
      : "SOC-2 Type II, HIPAA/HITECH, NYDFS Part 500, and CCPA privacy standards";

  const sovereignRegions =
    countryCode === "uk"
      ? "AWS London (eu-west-2), Azure UK South, and GCP europe-west2"
      : countryCode === "india"
      ? "AWS Mumbai (ap-south-1) and Hyderabad (ap-south-2), Azure Central and South India, and GCP asia-south1"
      : "AWS US East/West, Azure US East/Central, and Google Cloud us-central1";

  const potentialFaqs: { q: string; a: string }[] = [
    {
      q: `What multi-cloud platforms and architecture tooling does Devopstrio support for ${serviceTitle} in ${cityName}?`,
      a: `We provide certified architecture and continuous delivery across AWS, Microsoft Azure, and Google Cloud Platform (GCP). Our engineers automate infrastructure as code using Terraform and OpenTofu, configure GitOps pipelines, and implement containerized workloads with Kubernetes.`
    },
    {
      q: `What incident response and uptime SLAs do you guarantee for ${serviceTitle} in ${cityName}?`,
      a: `All enterprise contracts feature guaranteed sub-15-minute response times for critical P1 outages, 99.99% infrastructure availability SLAs, and continuous telemetry monitoring by our 24/7/365 follow-the-sun SRE operations.`
    },
    {
      q: `How does Devopstrio ensure data residency and compliance for ${serviceTitle} in ${cityName}?`,
      a: `All workloads, customer databases, and telemetry logs are provisioned strictly inside sovereign cloud regions (${sovereignRegions}) in full compliance with ${countryCompliance}.`
    },
    {
      q: `What is your migration and modernization roadmap for ${serviceTitle} in ${cityName}?`,
      a: `We follow a phased migration framework: starting with an Architectural Discovery and Dependency Audit, followed by Infrastructure-as-Code provisioning, database replication, canary traffic validation, and seamless zero-downtime production cutover.`
    },
    {
      q: `How does ${serviceTitle} resolve operational bottlenecks specific to ${cityName}?`,
      a: `Our solutions directly eliminate the challenges experienced by ${cityName} engineering teams—such as legacy technical debt, cloud cost sprawl, and out-of-hours alert fatigue—by delivering automated infrastructure, rightsized resources, and 24/7 SRE coverage.`
    },
    {
      q: `What observability and automated telemetry standards are implemented with ${serviceTitle} in ${cityName}?`,
      a: `We instrument full-stack observability using Datadog, Prometheus, Grafana, and OpenTelemetry. We configure automated synthetic monitoring, distributed tracing, error-budget tracking (SLI/SLO), and self-healing automation runbooks.`
    },
    {
      q: `How does Devopstrio deliver FinOps and cloud cost governance alongside ${serviceTitle} in ${cityName}?`,
      a: `Our FinOps certified specialists conduct deep-dive rightsizing audits, spot and savings plan lifecycle automation, and real-time cost attribution, routinely saving our clients 20% to 35% on their monthly cloud infrastructure bills.`
    },
    {
      q: `Can Devopstrio embed cloud engineers directly into our internal engineering team in ${cityName}?`,
      a: `Yes. We provide flexible engagement models including embedded co-delivery pods that integrate directly into your sprint cadences (Jira, GitHub, Slack) as well as autonomous managed platform engineering.`
    },
    {
      q: `How do engineering leaders in ${cityName} schedule a technical scoping consultation for ${serviceTitle}?`,
      a: `You can schedule an architecture scoping consultation directly on our website. Our solutions leadership team will review your infrastructure specifications and deliver an initial assessment within 48 to 72 hours.`
    }
  ].map(f => ({
    q: normalizeDisplayText(f.q),
    a: normalizeDisplayText(f.a)
  }));

  const combined = [...existingFaqs];
  for (const pf of potentialFaqs) {
    if (combined.length >= 10) break;
    if (!existingQuestions.has(pf.q.toLowerCase())) {
      combined.push(pf);
      existingQuestions.add(pf.q.toLowerCase());
    }
  }

  return combined;
}
