import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema, GlobalLocationSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { LocationHero } from "@/components/locations/LocationHero";
import { CountryNavigation } from "@/components/locations/CountryNavigation";
import { LocationServiceGrid } from "@/components/locations/LocationServiceGrid";
import { LocationDeliveryModel } from "@/components/locations/LocationDeliveryModel";
import { LocationFAQ } from "@/components/locations/LocationFAQ";
import { LocationCTA } from "@/components/locations/LocationCTA";
import { globalCountries } from "@/data/locations/global-locations";
import { usStates, usLocations } from "@/data/locations/us-locations";
import { generateGlobalLocationMetadata } from "@/lib/location-seo-global";
import { Reveal } from "@/components/ui/Reveal";
import BorderGlow from "@/components/ui/BorderGlow";

export async function generateMetadata(): Promise<Metadata> {
  return generateGlobalLocationMetadata({
    type: "country-hub",
    country: globalCountries.us,
    canonicalPath: "/locations/us"
  });
}

const usFaqs = [
  {
    q: "Where is Devopstrio's physical office located in the United States?",
    a: "Devopstrio operates our North American Sub-Regional Technology Office at 522 Aventura Dr, Mt. Juliet, Tennessee 37122 (Greater Nashville Area). Our principal architects lead technical scoping, on-site architecture workshops, and compliance audits throughout North America."
  },
  {
    q: "How does Devopstrio deliver engineering services across other US states?",
    a: "We provide comprehensive hybrid and remote engineering delivery across major US innovation clusters including Nashville, Austin, Dallas, New York City, San Francisco, Seattle, and Atlanta. Our US-based solutions architects lead strategic governance, while our 24/7 follow-the-sun SRE operations provide uninterrupted round-the-clock cluster support."
  },
  {
    q: "Do you guarantee US data sovereignty and compliance?",
    a: "Yes. All client cloud workloads, database storage, and operational logs are strictly provisioned in sovereign US cloud regions (AWS us-east-1 N. Virginia, us-east-2 Ohio, and us-west-2 Oregon; Azure East US, Central US, and West US; Google Cloud us-central1) in full compliance with SOC-2 Type II, HIPAA, and CCPA."
  },
  {
    q: "What industry compliance frameworks do your US engineering teams support?",
    a: "We support enterprises across strict compliance verticals: Healthcare (HIPAA/HITECH), Financial Services (NYDFS Part 500, SEC, PCI-DSS v4.0), Federal Supply Chains (FedRAMP readiness, NIST SP 800-207 Zero Trust), and Privacy (CCPA/CPRA)."
  },
  {
    q: "What SLA response times do you guarantee for US enterprises?",
    a: "Our enterprise contracts feature contractual P1 incident triage targets, targeted high-availability infrastructure SLAs, and continuous telemetry monitoring."
  },
  {
    q: "How does Devopstrio engineer HIPAA-compliant cloud architectures for US health tech?",
    a: "We implement signed Business Associate Agreements (BAAs), end-to-end envelope encryption (KMS/CloudHSM), automated audit trails via AWS CloudTrail and Azure Monitor, and segregated VPC networking to satisfy all HIPAA Security and Privacy rules."
  },
  {
    q: "Can Devopstrio assist with FedRAMP and NIST SP 800-53 security controls?",
    a: "Yes. We design FedRAMP-ready landing zones on AWS GovCloud and Azure Government, implementing continuous vulnerability management, FIPS 140-2 validated cryptography, and automated compliance policy-as-code."
  },
  {
    q: "What multi-cloud Kubernetes platforms do you support in the United States?",
    a: "We engineer production-grade enterprise Kubernetes clusters using Amazon EKS, Azure AKS, Google Kubernetes Engine (GKE), and Red Hat OpenShift, fully automated with GitOps via ArgoCD and Flux."
  },
  {
    q: "How do you help US enterprise scaleups control AWS, Azure, and GCP expenditures?",
    a: "Through our FinOps framework, we deploy automated rightsizing routines, spot instance orchestration, Savings Plan lifecycle management, and real-time cost attribution by engineering team, lowering cloud bills by 20% to 38%."
  },
  {
    q: "How can US technology leaders schedule an architecture consultation?",
    a: "You can book a technical consultation directly through our website. Our North American architecture team in Tennessee will review your requirements and provide an initial engagement roadmap within 48 to 72 hours."
  }
];

export default function USNationalHubPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: "United States" }
  ];

  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "coverage", label: "States and Hubs" },
    { id: "services", label: "Practices" },
    { id: "delivery-model", label: "Delivery Model" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "Locations", item: "/locations" },
        { name: "United States", item: "/locations/us" }
      ]} />
      <GlobalLocationSchema
        countryCode="us"
        countryName="United States"
        url="https://devopstrio.co.uk/locations/us"
        description="Devopstrio provides enterprise cloud modernization, 24/7 follow-the-sun managed SRE, Zero-Trust compliance, and AI solutions across North America."
      />
      <FAQSchema faqs={usFaqs} />

      {/* 1. Hero Block */}
      <LocationHero
        title={<>Cloud Services Near Me in <span className="bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">the United States</span></>}
        subtitle="Explore cloud services for US enterprises, including multi-cloud architecture, cloud migration, security and managed infrastructure solutions across our complete practice directory."
        locationName="United States"
        countryCode="us"
        breadcrumbs={breadcrumbs}
        officeStatus="sub-regional-office"
        verifiedAddress="522 Aventura Dr, Mt. Juliet, TN 37122"
      />

      {/* Sticky Section Sub-Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 2. Executive Overview Section */}
      <section id="overview" className="w-full py-16 md:py-24 bg-black text-white font-sans relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <Reveal className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-medium uppercase tracking-wider">
                United States Delivery
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                Cloud and DevOps Across the <span className="text-rose-500">United States</span>
              </h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                From our North American technology office in Mt. Juliet, Tennessee, Devopstrio provides principal-led cloud consulting, Kubernetes platform engineering, and 24/7 SRE for North American enterprises.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Workloads are architected strictly within sovereign US cloud availability zones with SOC-2, HIPAA, and PCI-DSS compliance.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BorderGlow
                  edgeSensitivity={35}
                  glowColor="350 85 75"
                  backgroundColor="#0c0a10"
                  borderRadius={20}
                  glowRadius={30}
                  glowIntensity={1.0}
                  coneSpread={30}
                  colors={["#f43f5e", "#fb7185", "#38bdf8"]}
                  className="p-6 transition-transform hover:-translate-y-1 duration-300"
                >
                  <span className="text-3xl font-bold text-rose-500 block mb-1">12</span>
                  <span className="text-base font-semibold text-white block mb-1">Core Practices</span>
                  <span className="text-xs text-zinc-400 leading-relaxed">Complete lifecycle from cloud migrations to Gen AI agents.</span>
                </BorderGlow>

                <BorderGlow
                  edgeSensitivity={35}
                  glowColor="350 85 75"
                  backgroundColor="#0c0a10"
                  borderRadius={20}
                  glowRadius={30}
                  glowIntensity={1.0}
                  coneSpread={30}
                  colors={["#f43f5e", "#fb7185", "#38bdf8"]}
                  className="p-6 transition-transform hover:-translate-y-1 duration-300"
                >
                  <span className="text-3xl font-bold text-rose-500 block mb-1">Rapid</span>
                  <span className="text-base font-semibold text-white block mb-1">Response SLA</span>
                  <span className="text-xs text-zinc-400 leading-relaxed">Rapid response for P1 production incidents.</span>
                </BorderGlow>

                <BorderGlow
                  edgeSensitivity={35}
                  glowColor="350 85 75"
                  backgroundColor="#0c0a10"
                  borderRadius={20}
                  glowRadius={30}
                  glowIntensity={1.0}
                  coneSpread={30}
                  colors={["#f43f5e", "#fb7185", "#38bdf8"]}
                  className="p-6 transition-transform hover:-translate-y-1 duration-300"
                >
                  <span className="text-3xl font-bold text-rose-500 block mb-1">Sovereign</span>
                  <span className="text-base font-semibold text-white block mb-1">US Cloud Data</span>
                  <span className="text-xs text-zinc-400 leading-relaxed">Hosted in US cloud availability zones with SOC-2 governance.</span>
                </BorderGlow>

                <BorderGlow
                  edgeSensitivity={35}
                  glowColor="350 85 75"
                  backgroundColor="#0c0a10"
                  borderRadius={20}
                  glowRadius={30}
                  glowIntensity={1.0}
                  coneSpread={30}
                  colors={["#f43f5e", "#fb7185", "#38bdf8"]}
                  className="p-6 transition-transform hover:-translate-y-1 duration-300"
                >
                  <span className="text-3xl font-bold text-rose-500 block mb-1">24/7/365</span>
                  <span className="text-base font-semibold text-white block mb-1">Follow-the-Sun SRE</span>
                  <span className="text-xs text-zinc-400 leading-relaxed">Continuous monitoring, automated self-healing, and threat response.</span>
                </BorderGlow>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. States Navigation */}
      <CountryNavigation
        countryCode="us"
        countryName="United States"
        countrySlug="us"
        states={Object.values(usStates)}
        locations={usLocations}
        currentStateId="tennessee"
      />

      {/* 4. 12 Services Practice Areas Grid */}
      <LocationServiceGrid cityName="the United States" nationSlug="us" />

      {/* 5. Delivery Model */}
      <LocationDeliveryModel locationName="the United States" />

      {/* 6. Frequently Asked Questions */}
      <LocationFAQ locationName="the United States" faqs={usFaqs} />

      {/* 7. Contact CTA */}
      <LocationCTA locationName="the United States" />
    </main>
  );
}
