import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Globe2, ShieldCheck, Clock, CheckCircle2, Building2 } from "lucide-react";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { LocationHero } from "@/components/locations/LocationHero";
import { LocationServiceGrid } from "@/components/locations/LocationServiceGrid";
import { LocationDeliveryModel } from "@/components/locations/LocationDeliveryModel";
import { LocationFAQ } from "@/components/locations/LocationFAQ";
import { LocationCTA } from "@/components/locations/LocationCTA";
import { globalCountries } from "@/data/locations/global-locations";
import { generateGlobalLocationMetadata } from "@/lib/location-seo-global";
import { Reveal } from "@/components/ui/Reveal";
import { InfiniteMenuItem } from "@/components/ui/InfiniteMenu";
import BorderGlow from "@/components/ui/BorderGlow";
import { GlobalHubsSection, CountryHubItem } from "@/components/locations/GlobalHubsSection";

export async function generateMetadata(): Promise<Metadata> {
  return generateGlobalLocationMetadata({
    type: "global-hub",
    canonicalPath: "/locations"
  });
}

const globalFaqs = [
  {
    q: "Where are Devopstrio's verified physical offices located globally?",
    a: "Devopstrio operates verified corporate and technology offices in three countries: our Global Corporate Headquarters at 128 City Road, London, EC1V 2NX (United Kingdom); our India Corporate Office at Embassy Golf Links Business Park, Bengaluru, Karnataka-560071; our Technology Operations Center at Guindy Industrial Estate, Chennai, Tamil Nadu; and our North American Sub-Regional Office at 522 Aventura Dr, Mt. Juliet, Tennessee 37122 (United States)."
  },
  {
    q: "How does Devopstrio's 24/7 follow-the-sun engineering delivery model work?",
    a: "We combine senior onshore solutions architects in London and Tennessee who lead strategic architecture audits, compliance scoping, and executive governance with follow-the-sun engineering delivery centers in India (Bengaluru, Chennai, Thoothukudi) that provide uninterrupted round-the-clock cluster monitoring, patching, and emergency incident containment."
  },
  {
    q: "Do you guarantee regional data residency in each operating country?",
    a: "Yes. All client workloads, databases, and operational logs are strictly provisioned in sovereign regional cloud availability zones: UK workloads in AWS London (eu-west-2) and Azure UK South; Indian workloads in AWS Mumbai (ap-south-1) and Azure Central India; and US workloads in AWS US East/West and Azure US Central/East, in strict compliance with UK GDPR, the Indian DPDP Act, and US HIPAA/SOC-2 standards."
  },
  {
    q: "What incident response SLAs do you provide for enterprise clients?",
    a: "All enterprise contracts are backed by formal Service Level Agreements (SLAs) guaranteeing a sub-15-minute response for critical P1 outages, 99.99% infrastructure availability, and continuous automated health telemetry."
  },
  {
    q: "What major cloud platforms does Devopstrio engineer and manage?",
    a: "We are certified multi-cloud specialists delivering production-grade architectures across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Our engineers deploy standardized Infrastructure as Code using Terraform and OpenTofu to eliminate vendor lock-in."
  },
  {
    q: "How does Devopstrio handle enterprise compliance and cybersecurity?",
    a: "Our delivery practices are certified under ISO 27001 and aligned with SOC-2 Type II standards. We embed Zero-Trust network policies, automated vulnerability scanning, immutable audit logging, and continuous compliance checks for PCI-DSS, HIPAA, and regional sovereign privacy frameworks."
  },
  {
    q: "Can Devopstrio migrate legacy on-premises infrastructure to cloud without downtime?",
    a: "Yes. We execute phased migration frameworks including automated database replication, dual-run canary deployments, and containerization using Kubernetes. This guarantees zero cutover downtime and zero business disruption for legacy systems."
  },
  {
    q: "How do your enterprise AI and Generative AI solutions protect proprietary data?",
    a: "We deploy private enterprise AI solutions strictly within client-owned Virtual Private Clouds (VPCs) or dedicated on-premises infrastructure. Proprietary data is never shared with public foundational model providers or used for third-party model training."
  },
  {
    q: "What engagement models does Devopstrio provide for global organizations?",
    a: "We offer three flexible models: Fully Managed 24/7 SRE and Cloud Operations, Dedicated Engineering Pods embedded within your sprint teams, and Fixed-Scope Architecture Consultations (Cloud Migrations, Kubernetes Modernization, and Security Audits)."
  },
  {
    q: "How does an enterprise begin an engagement with Devopstrio?",
    a: "Engagements typically begin with a confidential Architectural Scoping Assessment. Our principal architects analyze your current infrastructure, SLAs, compliance posture, and cost profile, delivering an actionable roadmap and PoC timeline within 5 business days."
  }
];

export default function GlobalLocationsHubPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: "Global Locations" }
  ];

  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "countries", label: "Countries" },
    { id: "services", label: "Practices" },
    { id: "delivery-model", label: "Delivery Model" },
    { id: "faq", label: "FAQ" }
  ];

  const countriesList: CountryHubItem[] = [
    {
      country: globalCountries.uk,
      stats: "4 Nations · 12 Regions · 8 Pilot Cities",
      hqInfo: "128 City Road, London, EC1V 2NX",
      hubUrl: "/locations/uk",
      badge: "Global Headquarters",
      highlights: ["UK Sovereign Data Hosting", "FCA and NHS DTAC Readiness", "24/7 UK-Managed SRE"]
    },
    {
      country: globalCountries.india,
      stats: "6 Published States · 8 Pilot Cities",
      hqInfo: "Embassy Golf Links, Bengaluru and Guindy, Chennai",
      hubUrl: "/locations/india",
      badge: "Corporate and Delivery Centers",
      highlights: ["24/7 Global Follow-the-Sun SRE", "RBI and DPDP Act Aligned", "Bengaluru AI and Chennai SaaS Centers"]
    },
    {
      country: globalCountries.us,
      stats: "6 Published States · 8 Pilot Cities",
      hqInfo: "522 Aventura Dr, Mt. Juliet, TN 37122",
      hubUrl: "/locations/us",
      badge: "North America Technology Office",
      highlights: ["Mt. Juliet and Nashville Tech Corridor", "HIPAA Healthcare Cloud", "Silicon Valley and Austin AI Hubs"]
    }
  ];

  const globalHubMenuItems: InfiniteMenuItem[] = [
    {
      image: "/assets/About-page/building/webp/london.webp",
      title: "London Headquarters",
      description: "Global Corporate Headquarters (128 City Road). European FinTech and corporate multi-cloud engineering.",
      link: "/locations/uk/england/london"
    },
    {
      image: "/assets/About-page/building/webp/banagaluru.webp",
      title: "Bengaluru Corporate Office",
      description: "India Corporate Office at Embassy Golf Links. 24/7 SRE engineering, private LLMs, and enterprise AI delivery.",
      link: "/locations/india/karnataka/bengaluru"
    },
    {
      image: "/assets/About-page/building/webp/chennai.webp",
      title: "Chennai Operations Center",
      description: "Technology Operations Center at Guindy Industrial Estate. High-velocity cloud migrations and enterprise SaaS platforms.",
      link: "/locations/india/tamil-nadu/chennai"
    },
    {
      image: "/assets/About-page/building/webp/USA.webp",
      title: "Nashville and Mt. Juliet Office",
      description: "North America Technology Office (522 Aventura Dr). Healthcare cloud, HIPAA compliance, and platform reliability.",
      link: "/locations/us/tennessee/nashville"
    },
    {
      image: "/assets/About-page/building/webp/usa2.webp",
      title: "Austin Technology Hub",
      description: "Silicon Hills cloud architecture, autonomous DevOps automation, and scalable distributed system delivery.",
      link: "/locations/us/texas/austin"
    },
    {
      image: "/assets/About-page/building/webp/UK2.webp",
      title: "Edinburgh Innovation Hub",
      description: "Scottish FinTech corridor, secure multi-cloud architectures, and Turing-aligned data platform engineering.",
      link: "/locations/uk/scotland/edinburgh"
    },
    {
      image: "/assets/About-page/building/webp/ukbuilding.webp",
      title: "Manchester Tech Hub",
      description: "MediaCityUK digital transformation, enterprise Kubernetes modernization, and 24/7 managed cloud operations.",
      link: "/locations/uk/england/manchester"
    },
    {
      image: "/assets/About-page/building/webp/thoothukudi.webp",
      title: "Thoothukudi Operations Hub",
      description: "Follow-the-sun continuous cloud monitoring, automated incident containment, and SRE resilience engineering.",
      link: "/locations/india/tamil-nadu/thoothukudi"
    },
    {
      image: "/assets/About-page/building/webp/workspace.webp",
      title: "Silicon Valley Hub",
      description: "San Francisco and Silicon Valley enterprise AI, foundation model deployment, and cloud-native software acceleration.",
      link: "/locations/us/california/san-francisco"
    },
    {
      image: "/assets/About-page/building/webp/building.webp",
      title: "Birmingham Hub",
      description: "Silicon Canal industrial IoT, smart manufacturing platform automation, and enterprise cybersecurity.",
      link: "/locations/uk/england/birmingham"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "Locations", item: "/locations" }
      ]} />
      <FAQSchema faqs={globalFaqs} />

      {/* 1. Hero Block */}
      <LocationHero
        locationName="Worldwide"
        locationHighlightClass="bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent"
        nearMeConnector="Near Me"
        breadcrumbs={breadcrumbs}
      />

      {/* Sticky Section Sub-Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 2. Executive Overview */}
      <section id="overview" className="w-full py-16 md:py-24 bg-black text-white font-sans relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <Reveal className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-medium uppercase tracking-wider">
                Global Delivery Network
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                Engineering Across <span className="text-rose-500">Three Continents</span>
              </h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                Devopstrio delivers 24/7 enterprise cloud engineering, platform automation, and sovereign AI solutions across the UK, India, and the United States.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Certified onshore architects partner with global engineering delivery centers to guarantee zero-downtime reliability and rapid execution.
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
                  <span className="text-base font-semibold text-white block mb-1">Practice Areas</span>
                  <span className="text-xs text-zinc-400 leading-relaxed">End-to-end cloud, DevOps, and AI engineering.</span>
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
                  <span className="text-xs text-zinc-400 leading-relaxed">Rapid response for mission-critical systems.</span>
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
                  <span className="text-base font-semibold text-white block mb-1">Sovereign Data</span>
                  <span className="text-xs text-zinc-400 leading-relaxed">Hosted in sovereign UK, India, and US regions.</span>
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
                  <span className="text-xs text-zinc-400 leading-relaxed">Automated monitoring and threat containment.</span>
                </BorderGlow>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Global Operating Hubs: 3D Sphere and Grid Switcher */}
      <GlobalHubsSection
        countriesList={countriesList}
        globalHubMenuItems={globalHubMenuItems}
      />

      {/* 4. Global 12 Services Catalog Grid */}
      <LocationServiceGrid cityName="Our Global Operating Network" />

      {/* 5. Follow-the-Sun Delivery Architecture */}
      <LocationDeliveryModel locationName="Our Global Network" />

      {/* 6. Frequently Asked Questions */}
      <LocationFAQ locationName="Our Global Operations" faqs={globalFaqs} />

      {/* 7. Conversion CTA */}
      <LocationCTA locationName="Global Operations" />
    </main>
  );
}
