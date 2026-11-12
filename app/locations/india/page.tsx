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
import { indiaStates, indiaLocations } from "@/data/locations/india-locations";
import { generateGlobalLocationMetadata } from "@/lib/location-seo-global";
import { Reveal } from "@/components/ui/Reveal";
import BorderGlow from "@/components/ui/BorderGlow";

export async function generateMetadata(): Promise<Metadata> {
  return generateGlobalLocationMetadata({
    type: "country-hub",
    country: globalCountries.india,
    canonicalPath: "/locations/india"
  });
}

const indiaFaqs = [
  {
    q: "Where are Devopstrio's verified physical offices located in India?",
    a: "Devopstrio operates verified corporate and technology facilities in India: our Corporate Office at Embassy Golf Links Business Park, Off Intermediate Ring Road, Bengaluru, Karnataka-560071; our Technology Operations Center at Ground Floor, Primus Building, Door No. SP-7A, Guindy Industrial Estate, SIDCO Industrial Estate, Chennai, Tamil Nadu 600032; and our Operations Center at 4/367 Rajeev Colony, Pasuvanthanai 628718, Thoothukudi, Tamil Nadu."
  },
  {
    q: "How does Devopstrio support enterprise clients across other Indian cities?",
    a: "We provide comprehensive hybrid and remote engineering delivery across all major Indian commercial centers including Hyderabad, Mumbai, Pune, Delhi NCR, Coimbatore, and Kochi. Our principal architects in Bengaluru and Chennai oversee architecture governance, while our 24/7 follow-the-sun SRE teams provide round-the-clock cluster monitoring."
  },
  {
    q: "Do you guarantee in-country data residency for Indian cloud workloads?",
    a: "Yes. All client workloads, transactional databases, and operational logs are provisioned strictly inside sovereign Indian cloud regions (AWS Mumbai ap-south-1 and Hyderabad ap-south-2, Microsoft Azure Central India and South India, and Google Cloud asia-south1 and asia-south2) in full compliance with the Digital Personal Data Protection (DPDP) Act."
  },
  {
    q: "What regulatory frameworks do your Indian engineering practices satisfy?",
    a: "Our delivery teams operate in strict accordance with the Reserve Bank of India (RBI) cybersecurity guidelines for BFSI, SEBI cloud framework mandates, CERT-In incident reporting requirements, and international ISO 27001 and SOC-2 Type II standards."
  },
  {
    q: "What incident response SLAs do you guarantee for Indian enterprises?",
    a: "Our enterprise contracts feature guaranteed P1 critical incident response times under 15 minutes, 99.99% infrastructure uptime SLAs, and 24/7/365 active monitoring."
  },
  {
    q: "How does Devopstrio accelerate Global Capability Centers (GCCs) in India?",
    a: "We partner with multinational GCCs to establish standardized Cloud Centers of Excellence (CCoE), automate multi-region landing zones on AWS and Azure, and deliver shared internal developer platforms (IDP) that accelerate software releases across distributed global teams."
  },
  {
    q: "Can Devopstrio deploy enterprise Generative AI privately within India?",
    a: "Yes. We design and deploy private LLMs, vector retrieval (RAG) pipelines, and sovereign inference endpoints entirely inside your private VPCs in Mumbai or Hyderabad, ensuring enterprise IP and customer records are never exposed to public APIs."
  },
  {
    q: "What FinOps and cloud cost management capabilities do you provide in India?",
    a: "We conduct deep-dive cost architecture audits for Indian unicorns and high-growth enterprises, implementing automated rightsizing, RI/Savings Plan optimization, and continuous FinOps telemetry to eliminate cloud waste by up to 35%."
  },
  {
    q: "How does Devopstrio support CERT-In 6-hour cybersecurity reporting directives?",
    a: "We configure centralized SIEM integration, immutable cloud trail logging, automated intrusion detection, and synchronized NTP time sources to ensure full compliance with the Indian CERT-In cybersecurity reporting mandate."
  },
  {
    q: "How can Indian enterprises schedule an architectural audit or consultation?",
    a: "Enterprises can request an Architecture Review directly online. Our Bengaluru and Chennai solutions leadership team initiates engagement scoping and delivers an infrastructure analysis within 48 to 72 hours."
  }
];

export default function IndiaNationalHubPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: "India" }
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
        { name: "India", item: "/locations/india" }
      ]} />
      <GlobalLocationSchema
        countryCode="india"
        countryName="India"
        url="https://devopstrio.co.uk/locations/india"
        description="Devopstrio delivers 24/7 cloud engineering, automated DevOps pipelines, Zero-Trust security, and enterprise AI innovation across India."
      />
      <FAQSchema faqs={indiaFaqs} />

      {/* 1. Hero Block */}
      <LocationHero
        locationName="India"
        locationHighlightClass="bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent"
        nearMeConnector="Near Me in"
        breadcrumbs={breadcrumbs}
        officeStatus="corporate-office"
        verifiedAddress="Embassy Golf Links Business Park, Bengaluru and Guindy Industrial Estate, Chennai"
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
                India Operating Hub
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                Cloud and AI Solutions Across <span className="text-rose-500">India</span>
              </h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                Operating corporate centers in Bengaluru and technology hubs in Chennai and Thoothukudi, Devopstrio architects resilient multi-cloud platforms and sovereign AI pipelines for India&apos;s leading enterprises.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Certified principal engineers ensure full compliance with the Digital Personal Data Protection (DPDP) Act, RBI cyber regulations, and CERT-In mandates.
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
                  <span className="text-xs text-zinc-400 leading-relaxed">Full lifecycle from multi-cloud migrations to Gen AI agents.</span>
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
                  <span className="text-base font-semibold text-white block mb-1">Data Residency</span>
                  <span className="text-xs text-zinc-400 leading-relaxed">DPDP Act, RBI guidelines, and CERT-In compliance.</span>
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
                  <span className="text-xs text-zinc-400 leading-relaxed">Active monitoring, automated scaling, and DR drills.</span>
                </BorderGlow>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. States & Regional Tech Clusters Navigation */}
      <CountryNavigation
        countryCode="india"
        countryName="India"
        countrySlug="india"
        states={Object.values(indiaStates)}
        locations={indiaLocations}
        currentStateId="karnataka"
      />

      {/* 4. 12 Services Practice Areas Grid */}
      <LocationServiceGrid cityName="India" nationSlug="india" />

      {/* 5. Delivery Model */}
      <LocationDeliveryModel locationName="India" />

      {/* 6. Frequently Asked Questions */}
      <LocationFAQ locationName="India" faqs={indiaFaqs} />

      {/* 7. Contact CTA */}
      <LocationCTA locationName="India" />
    </main>
  );
}
