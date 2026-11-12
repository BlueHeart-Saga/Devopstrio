import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema, UKLocationSchema, FAQSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { LocationHero } from "@/components/locations/LocationHero";
import { RegionNavigation } from "@/components/locations/RegionNavigation";
import { LocationServiceGrid } from "@/components/locations/LocationServiceGrid";
import { LocationDeliveryModel } from "@/components/locations/LocationDeliveryModel";
import { LocationFAQ } from "@/components/locations/LocationFAQ";
import { LocationCTA } from "@/components/locations/LocationCTA";
import { generateLocationMetadata } from "@/lib/location-seo";
import { Reveal } from "@/components/ui/Reveal";
import BorderGlow from "@/components/ui/BorderGlow";

export async function generateMetadata(): Promise<Metadata> {
  return generateLocationMetadata({
    type: "national-hub",
    canonicalPath: "/locations/uk"
  });
}

const nationalFaqs = [
  {
    q: "Where is Devopstrio headquartered in the UK?",
    a: "Devopstrio Limited is registered in England and Wales with Global Headquarters at 128 City Road, London, EC1V 2NX, and an additional London support facility at 167-169 Great Portland Street, W1W 5PF."
  },
  {
    q: "How does Devopstrio deliver services across different UK regions?",
    a: "We combine London-based principal solutions architects who lead executive scoping, governance, and architecture audits with round-the-clock follow-the-sun SRE operations. We support clients remotely and on-site across England, Scotland, Wales, and Northern Ireland."
  },
  {
    q: "Do you guarantee data residency within the United Kingdom?",
    a: "Yes. All client cloud workloads, database storage, and operational logs are strictly provisioned in sovereign UK cloud regions (AWS London eu-west-2, Microsoft Azure UK South, and GCP europe-west2) in full compliance with UK GDPR and the Data Protection Act 2018."
  },
  {
    q: "What industry sectors do you support in the UK?",
    a: "We support enterprises across 8 key verticals: Banking and Financial Services, Life Sciences and Healthcare (NHS DTAC/DSPT), Retail and E-Commerce, Smart Manufacturing and Industrial IoT, Telecommunications, Media and Broadcasting, EdTech, and Government/Public Sector."
  },
  {
    q: "What SLA response times do you guarantee for UK businesses?",
    a: "Our enterprise contracts feature guaranteed P1 critical incident response times under 15 minutes, 99.99% infrastructure uptime SLAs, and 24/7/365 active monitoring."
  },
  {
    q: "How does Devopstrio support UK Financial Services and FCA compliance?",
    a: "We architect multi-cloud landing zones with strict operational resilience aligned to the FCA operational resilience policy (PS21/3) and Bank of England supervisory statements, including immutable audit trails and disaster recovery failover."
  },
  {
    q: "Are your healthcare solutions compliant with NHS DTAC and DSPT standards?",
    a: "Yes. Our cloud architectures and medical data processing pipelines satisfy the NHS Digital Technology Assessment Criteria (DTAC) and the Data Security and Protection Toolkit (DSPT) requirements."
  },
  {
    q: "How do you help UK enterprises migrate legacy VMware estates to modern cloud?",
    a: "We assess legacy on-premises virtualization estates and re-platform workloads into containerized Kubernetes clusters (AWS EKS or Azure AKS) or serverless architectures, minimizing licensing liabilities and maximizing operational agility."
  },
  {
    q: "What FinOps capabilities do you provide for UK scaleups and enterprises?",
    a: "Our FinOps certified practitioners implement automated rightsizing, spot/graviton instance policies, anomalous spend alerts, and multi-tenant cost allocation tags, typically driving 25% to 40% reductions in annual cloud expenditure."
  },
  {
    q: "How can UK businesses schedule an architecture consultation?",
    a: "UK technology leaders can schedule an architectural scoping review directly through our website. Our London-based principal architects provide an initial infrastructure assessment within 48 to 72 hours."
  }
];

export default function UKNationalHubPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations/uk" },
    { label: "United Kingdom" }
  ];

  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "coverage", label: "Regional Coverage" },
    { id: "services", label: "Practices" },
    { id: "delivery-model", label: "Delivery Model" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "Locations", item: "/locations/uk" },
        { name: "United Kingdom", item: "/locations/uk" }
      ]} />
      <UKLocationSchema
        pageType="national-hub"
        nationName="United Kingdom"
        url="https://devopstrio.co.uk/locations/uk"
        description="Devopstrio delivers enterprise cloud-native architecture, 24/7 SRE automation, Zero-Trust cybersecurity, and production-grade Generative AI across the United Kingdom."
      />
      <FAQSchema faqs={nationalFaqs} />

      {/* 1. Hero Block */}
      <LocationHero
        locationName="the United Kingdom"
        locationHighlightClass="bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent"
        nearMeConnector="Near Me in"
        breadcrumbs={breadcrumbs}
        officeStatus="headquarters"
        verifiedAddress="128 City Road, London, EC1V 2NX"
      />

      {/* Sticky Section Sub-Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 2. Executive Overview Section */}
      <section id="overview" className="w-full py-16 md:py-24 bg-black text-white font-sans relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <Reveal className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                United Kingdom Delivery
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                Cloud and DevOps Across the <span className="text-rose-500">United Kingdom</span>
              </h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                Headquartered at 128 City Road in London, Devopstrio delivers sovereign cloud architecture, automated platform engineering, and 24/7 SRE operations for UK enterprises.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Our certified principal engineers deploy scalable, secure, and compliant systems with zero unauthorized cross-border transfer.
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
                  <span className="text-xs text-zinc-400 leading-relaxed">Lifecycle from Azure and AWS migrations to AI agents.</span>
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
                  <span className="text-3xl font-bold text-rose-500 block mb-1">&lt;15m</span>
                  <span className="text-base font-semibold text-white block mb-1">Guaranteed SLA</span>
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
                  <span className="text-3xl font-bold text-rose-500 block mb-1">100%</span>
                  <span className="text-base font-semibold text-white block mb-1">UK Sovereign Data</span>
                  <span className="text-xs text-zinc-400 leading-relaxed">Hosted in UK cloud regions under UK GDPR and ISO 27001.</span>
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
                  <span className="text-xs text-zinc-400 leading-relaxed">Continuous automated patching and threat response.</span>
                </BorderGlow>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Geographic Regional Coverage */}
      <RegionNavigation currentNationId="england" />

      {/* 4. 12 Services Practice Areas Grid */}
      <LocationServiceGrid cityName="the United Kingdom" />

      {/* 5. Delivery Model */}
      <LocationDeliveryModel locationName="the United Kingdom" />

      {/* 6. Frequently Asked Questions */}
      <LocationFAQ locationName="the United Kingdom" faqs={nationalFaqs} />

      {/* 7. Contact CTA */}
      <LocationCTA locationName="the United Kingdom" />
    </main>
  );
}
