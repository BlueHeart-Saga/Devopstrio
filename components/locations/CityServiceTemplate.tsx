"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Building2,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  Clock,
  Sparkles
} from "lucide-react";
import { ServiceCategory } from "@/data/services";
import { LocationServiceMapping, OfficeStatus, VerifiedOfficeAddress } from "@/data/locations/types";
import { LocationHero } from "./LocationHero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { LocationDeliveryModel } from "./LocationDeliveryModel";
import { NearbyLocations } from "./NearbyLocations";
import { LocationFAQ } from "./LocationFAQ";
import { LocationCTA } from "./LocationCTA";
import { Reveal } from "@/components/ui/Reveal";
import BorderGlow from "@/components/ui/BorderGlow";
import { getEnrichedCityServiceFaqs, getExactServiceKeyword } from "@/lib/location-content";
import { normalizeDisplayText, getCityServiceHeroDescription } from "@/lib/text-utils";

export interface RelatedServiceItem {
  slug: string;
  title: string;
  subtitle: string;
  href: string;
}

export interface CityServiceTemplateProps {
  countryCode: "uk" | "india" | "us";
  countryName: string;
  stateOrRegionName: string;
  stateOrRegionSlug: string;
  nationSlug?: string;
  cityName: string;
  citySlug: string;
  officeStatus: OfficeStatus;
  verifiedAddress?: VerifiedOfficeAddress;
  canonicalUrl: string;
  breadcrumbs: { label: string; href?: string }[];
  service: any;
  serviceMapping: LocationServiceMapping;
  isPhysicalOffice: boolean;
  nearbyLocations?: any[];
  relatedServices?: RelatedServiceItem[];
}

export function CityServiceTemplate({
  countryCode,
  countryName,
  stateOrRegionName,
  stateOrRegionSlug,
  nationSlug,
  cityName,
  citySlug,
  officeStatus,
  verifiedAddress,
  canonicalUrl,
  breadcrumbs,
  service,
  serviceMapping,
  isPhysicalOffice,
  nearbyLocations = [],
  relatedServices = []
}: CityServiceTemplateProps) {
  const sm = serviceMapping;

  // 14-Section On-Page Sub-Navigation (Strictly NO ampersands)
  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "capabilities", label: "Capabilities" },
    { id: "challenges-solutions", label: "Challenges and Solutions" },
    { id: "delivery-model", label: "Delivery Model" },
    { id: "platforms", label: "Architecture" },
    { id: "industry-use-cases", label: "Industry Context" },
    { id: "trust-signals", label: "Trust and SLAs" },
    { id: "related-services", label: "Related Services" },
    { id: "nearby-areas", label: "Nearby Areas" },
    { id: "faq", label: "FAQ" }
  ];

  // Verified address display string
  const addressString = verifiedAddress?.streetAddress
    ? `${verifiedAddress.streetAddress}, ${verifiedAddress.locality}${verifiedAddress.postalCode ? `, ${verifiedAddress.postalCode}` : ""}`
    : undefined;

  const defaultCapabilities = [
    {
      title: "Enterprise Architecture and Discovery",
      description: `Comprehensive assessment of current technology baselines, cloud security postures, and deployment bottlenecks across ${cityName}.`,
      items: ["Current-state topology mapping", "Security and compliance audit", "Target-state cloud roadmap"]
    },
    {
      title: "Automated Deployment and CI/CD",
      description: `Infrastructure as code and zero-downtime continuous deployment pipelines engineered for high release velocity.`,
      items: ["Declarative IaC modules", "Automated regression testing", "GitOps continuous delivery"]
    },
    {
      title: "24/7 SRE and Incident Governance",
      description: `Follow-the-sun site reliability engineering with contractual SLA response targets for critical production incidents.`,
      items: ["Contractual Rapid P1 SLAs", "Proactive synthetic monitoring", "Automated self-healing scripts"]
    },
    {
      title: "Regulatory Compliance and Security",
      description: `Architectural controls enforcing strict data residency, encryption at rest and in transit, and continuous audit trails.`,
      items: ["Zero-Trust access policies", "Sovereign regional residency", "Automated posture reporting"]
    }
  ];

  const rawCapabilities = (service?.capabilities && service.capabilities.length > 0)
    ? service.capabilities
    : defaultCapabilities;

  const displayCapabilities = rawCapabilities.map((cap: any) => ({
    ...cap,
    title: normalizeDisplayText(cap.title),
    description: normalizeDisplayText(cap.description),
    items: cap.items?.map((it: string) => normalizeDisplayText(it)) || []
  }));

  const canonicalPracticeUrl = service?.canonicalServiceUrl || service?.canonicalPath || `/services/${service?.slug || sm.serviceSlug}`;

  // Ensure minimum 8-10 FAQs
  const displayFaqs = getEnrichedCityServiceFaqs(sm, service, cityName, countryCode, countryName);

  // Generate simple, high-impact SEO sentence for hero title using the single exact service keyword
  const serviceHeadingKeyword = normalizeDisplayText(getExactServiceKeyword(sm.serviceSlug, service?.title));

  const formatHeroTitle = () => {
    return (
      <>
        {serviceHeadingKeyword} Near Me in <span className="text-rose-500">{cityName}</span>
      </>
    );
  };

  const heroSubtitle = getCityServiceHeroDescription(sm.serviceSlug, cityName);
  const serviceTitleClean = normalizeDisplayText(service?.title || sm.h1Title);

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* =========================================================================
          SECTION 1 AND 2: BREADCRUMBS AND PREMIUM SEO HERO WITH ONE H1
          ========================================================================= */}
      <LocationHero
        title={formatHeroTitle()}
        subtitle={heroSubtitle}
        locationName={cityName}
        countryCode={countryCode}
        breadcrumbs={breadcrumbs}
        officeStatus={officeStatus}
        verifiedAddress={addressString}
      />

      {/* =========================================================================
          SECTION 3: SECTION NAVIGATION
          ========================================================================= */}
      <SectionNavbar sections={subSections} />

      {/* =========================================================================
          SECTION 4: SERVICE OVERVIEW AND CITY-SPECIFIC BUSINESS CONTEXT
          ========================================================================= */}
      <section id="overview" className="w-full py-16 md:py-24 bg-black font-sans relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <Reveal className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-medium uppercase tracking-wider">
                Local Service Overview
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                {serviceHeadingKeyword} in <span className="text-rose-500">{cityName}</span>
              </h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                Devopstrio delivers principal-led {serviceHeadingKeyword.toLowerCase()} for enterprise organizations and high-growth engineering teams across {cityName}.
              </p>
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2.5 text-sm text-zinc-300">
                  <CheckCircle2 size={16} className="text-rose-500 shrink-0" />
                  <span>Contractual P1 incident response with 24/7 follow-the-sun SRE operations</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-zinc-300">
                  <CheckCircle2 size={16} className="text-rose-500 shrink-0" />
                  <span>Sovereign multi-cloud architecture compliant with local regulatory standards</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6">
              <BorderGlow
                edgeSensitivity={35}
                glowColor="350 85 75"
                backgroundColor="#0c0a10"
                borderRadius={24}
                glowRadius={36}
                glowIntensity={1.0}
                coneSpread={30}
                colors={["#f43f5e", "#fb7185", "#38bdf8"]}
                className="p-6 sm:p-8"
              >
                <div className="space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-rose-400 block">
                      National Practice Integration
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Backed by Devopstrio&apos;s National {serviceTitleClean} Practice
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      This localized page outlines our specific delivery for {cityName}. For comprehensive architecture blueprints and enterprise capability specifications, explore our national practice.
                    </p>
                  </div>

                  <Link
                    href={canonicalPracticeUrl}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/80 hover:bg-rose-600 text-white text-xs font-semibold tracking-wider uppercase transition-all"
                  >
                    <span>Explore National Practice</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </BorderGlow>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: RELEVANT SERVICE CAPABILITIES
          ========================================================================= */}
      <section id="capabilities" className="w-full py-16 md:py-24 bg-black font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <Reveal className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Core Capabilities Delivered in <span className="text-rose-500">{cityName}</span>
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              Tailored architectural modules deployed by certified principal engineers to solve complex cloud, automation, and data challenges.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayCapabilities.slice(0, 6).map((cap: any, idx: number) => (
              <Reveal key={cap.slug || idx} delay={idx * 0.03} className="h-full">
                <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-zinc-950/60 hover:bg-zinc-900/40 transition-colors">
                  <div>
                    <span className="text-xs font-mono text-rose-500 font-semibold block mb-2">
                      Capability 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                      {cap.description}
                    </p>
                  </div>

                  {cap.items && cap.items.length > 0 && (
                    <div className="space-y-1.5 pt-3 border-t border-zinc-900/80">
                      {cap.items.slice(0, 3).map((item: string, iIdx: number) => (
                        <div key={iIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                          <CheckCircle2 size={12} className="text-rose-500 shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: BUSINESS CHALLENGES AND SOLUTIONS
          ========================================================================= */}
      <section id="challenges-solutions" className="w-full py-16 md:py-24 bg-black font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <Reveal className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Local Challenges and <span className="text-rose-500">Engineered Solutions</span>
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              Addressing the operational bottlenecks, regulatory mandates, and scalability hurdles specific to {cityName} enterprises.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Challenges Card */}
            <Reveal>
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 space-y-6">
                <div>
                  <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider block mb-1.5">
                    Critical Operational Bottlenecks
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {normalizeDisplayText(sm.localChallenge.title)}
                  </h3>
                </div>

                <div className="space-y-3">
                  {sm.localChallenge.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/40 text-sm sm:text-base text-zinc-300">
                      <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                      <span>{normalizeDisplayText(pt)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Solutions Card */}
            <Reveal delay={0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 space-y-6">
                <div>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1.5">
                    Our Architecture Strategy
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {normalizeDisplayText(sm.localSolution.title)}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {normalizeDisplayText(sm.localSolution.description)}
                </p>

                <div className="space-y-2.5 pt-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400 block">
                    Key Technical Deliverables:
                  </span>
                  {sm.localSolution.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/40 text-xs sm:text-sm text-zinc-200">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{normalizeDisplayText(deliv)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: VERIFIED DELIVERY MODEL
          ========================================================================= */}
      <div id="delivery-model">
        <LocationDeliveryModel locationName={cityName} />
      </div>

      {/* =========================================================================
          SECTION 8: TECHNOLOGY PLATFORMS AND ARCHITECTURE
          ========================================================================= */}
      <section id="platforms" className="w-full py-16 md:py-24 bg-black font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <Reveal className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Technology Platforms and <span className="text-rose-500">Architecture Standards</span>
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              We deploy resilient cloud-agnostic architectures across hyperscalers, leveraging automated infrastructure as code and Zero-Trust observability.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal delay={0.02}>
              <div className="p-6 rounded-2xl bg-zinc-950/60 hover:bg-zinc-900/40 transition-colors space-y-3">
                <Cpu size={24} className="text-rose-500" />
                <h3 className="text-base font-semibold text-white">Multi-Cloud Hyperscalers</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Certified AWS, Microsoft Azure, and Google Cloud environments provisioned with sovereign data residency.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <div className="p-6 rounded-2xl bg-zinc-950/60 hover:bg-zinc-900/40 transition-colors space-y-3">
                <Layers size={24} className="text-rose-500" />
                <h3 className="text-base font-semibold text-white">Kubernetes and Containers</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Automated cluster scaling on EKS, AKS, and GKE with GitOps continuous deployment and service meshes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="p-6 rounded-2xl bg-zinc-950/60 hover:bg-zinc-900/40 transition-colors space-y-3">
                <Sparkles size={24} className="text-rose-500" />
                <h3 className="text-base font-semibold text-white">Infrastructure as Code</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Deterministic, version-controlled cloud topologies created via Terraform, OpenTofu, and Ansible.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="p-6 rounded-2xl bg-zinc-950/60 hover:bg-zinc-900/40 transition-colors space-y-3">
                <Clock size={24} className="text-rose-500" />
                <h3 className="text-base font-semibold text-white">24/7 Observability and SRE</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Datadog, Prometheus, Grafana, and OpenTelemetry instrumentation with automated anomaly alerts.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: INDUSTRY-SPECIFIC USE CASES
          ========================================================================= */}
      <section id="industry-use-cases" className="w-full py-16 md:py-24 bg-black font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <Reveal className="p-8 sm:p-10 rounded-2xl bg-zinc-950/60 space-y-4">
            <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider block">
              Industry Focus in {cityName}
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              {normalizeDisplayText(sm.industryContext.industryTitle)}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-4xl">
              {normalizeDisplayText(sm.industryContext.description)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: GENUINE TRUST SIGNALS AND PROOF
          ========================================================================= */}
      <section id="trust-signals" className="w-full py-16 md:py-24 bg-black font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <Reveal className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Enterprise Trust Signals and <span className="text-rose-500">Verified Proof</span>
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              We operate under contractual SLAs, accredited compliance frameworks, and authenticated engineering facilities.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Reveal>
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 space-y-5">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                  <ShieldCheck size={18} />
                  <span>Compliance and Security Accreditations</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Our architectures in {cityName} are continuously audited against regional data protection and security mandates:
                </p>
                <div className="flex flex-wrap gap-2">
                  {sm.complianceHighlights.map((ch, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-xl bg-zinc-900/60 text-xs sm:text-sm font-semibold text-rose-400">
                      ✓ {normalizeDisplayText(ch)}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 space-y-5">
                {isPhysicalOffice && verifiedAddress ? (
                  <>
                    <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                      <Building2 size={18} />
                      <span>Verified Physical Office Location</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {addressString}
                    </p>
                    {verifiedAddress.googleMapsUrl && (
                      <a
                        href={verifiedAddress.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-white pt-1"
                      >
                        <span>Open Verified Pin on Google Maps</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </>
                ) : (
                  <>
                    <div className="text-sm font-semibold text-zinc-300">
                      Enterprise Regional Service Area
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Delivered through dedicated senior engineering pods with 24/7 continuous operations, contract-backed P1 incident response, and sovereign cloud architecture.
                    </p>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: RELATED SERVICES
          ========================================================================= */}
      {relatedServices && relatedServices.length > 0 && (
        <section id="related-services" className="w-full py-16 md:py-24 bg-black font-sans">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
            <Reveal className="max-w-3xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
                Related Practices in <span className="text-rose-500">{cityName}</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Complementary cloud modernization and security practices available for organizations in this area.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.slice(0, 3).map((rel, rIdx) => (
                <Reveal key={rIdx} delay={rIdx * 0.03} className="h-full">
                  <div className="flex flex-col justify-between h-full p-6 rounded-2xl bg-zinc-950/60 hover:bg-zinc-900/40 transition-colors group">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-rose-400 transition-colors mb-2">
                        {normalizeDisplayText(rel.title)}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 mb-4">
                        {normalizeDisplayText(rel.subtitle)}
                      </p>
                    </div>

                    <Link
                      href={rel.href}
                      className="text-xs font-semibold text-rose-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Explore Capability</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 12: NEARBY SERVICE AREAS
          ========================================================================= */}
      {nearbyLocations && nearbyLocations.length > 0 && (
        <div id="nearby-areas">
          <NearbyLocations currentLocationName={cityName} nearbyLocations={nearbyLocations} />
        </div>
      )}

      {/* =========================================================================
          SECTION 13: RELEVANT FAQS
          ========================================================================= */}
      {displayFaqs && displayFaqs.length > 0 && (
        <div id="faq">
          <LocationFAQ locationName={`${serviceTitleClean} in ${cityName}`} faqs={displayFaqs} />
        </div>
      )}

      {/* =========================================================================
          SECTION 14: STRONG FINAL CONTACT CTA
          ========================================================================= */}
      <LocationCTA
        locationName={cityName}
        serviceTitle={serviceTitleClean}
        primaryBtnText="CONSULT AN ARCHITECT"
        secondaryBtnText={`EXPLORE ${normalizeDisplayText(stateOrRegionName).toUpperCase()} HUB`}
      />
    </main>
  );
}
