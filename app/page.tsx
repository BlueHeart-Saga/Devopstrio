import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroSection } from "@/sections/home/HeroSection";

export const metadata: Metadata = {
  title: "Devopstrio | Enterprise Cloud, DevOps & AI Engineering Services",
  description: "Devopstrio delivers principal-led cloud-native transformation, SRE automation, Zero-Trust cybersecurity, and production-grade Generative AI solutions for global enterprises.",
  alternates: {
    canonical: "https://devopstrio.co.uk",
  },
  openGraph: {
    title: "Devopstrio | Enterprise Cloud, DevOps & AI Engineering Services",
    description: "Devopstrio delivers principal-led cloud-native transformation, SRE automation, Zero-Trust cybersecurity, and production-grade Generative AI solutions for global enterprises.",
    url: "https://devopstrio.co.uk",
  },
};

// Dynamic imports for heavier sections
const ServicesOverviewPillars = dynamic(() => import("@/sections/home/ServicesOverviewPillars").then((mod) => mod.ServicesOverviewPillars));
const CoreServices = dynamic(() => import("@/sections/home/CoreServices").then((mod) => mod.CoreServices));
const IndustryExpertise = dynamic(() => import("@/sections/home/IndustryExpertise").then((mod) => mod.IndustryExpertise));
const CaseStudies = dynamic(() => import("@/sections/home/CaseStudies").then((mod) => mod.CaseStudies));
const AIStudioShowcase = dynamic(() => import("@/sections/home/AIStudioShowcase").then((mod) => mod.AIStudioShowcase));
const ExecutiveTestimonials = dynamic(() => import("@/sections/home/ExecutiveTestimonials").then((mod) => mod.ExecutiveTestimonials));
const FounderQuoteSection = dynamic(() => import("@/sections/home/FounderQuoteSection").then((mod) => mod.FounderQuoteSection));
const CommunityJoinSection = dynamic(() => import("@/sections/home/CommunityJoinSection").then((mod) => mod.CommunityJoinSection));
const PartnersSection = dynamic(() => import("@/sections/home/PartnersSection").then((mod) => mod.PartnersSection));
const Insights = dynamic(() => import("@/sections/home/Insights").then((mod) => mod.Insights));
const ImperativesBanner = dynamic(() => import("@/sections/home/ImperativesBanner").then((mod) => mod.ImperativesBanner));

// Commented-out imports (available to re-enable)
import { TrustBanner } from "@/sections/home/TrustBanner";
// import { IndustriesSection } from "@/sections/home/IndustriesSection";
// import { BusinessOverview } from "@/sections/home/BusinessOverview";
// import { BusinessOverview } from "@/sections/home/BusinessOverview";
// import { CTA } from "@/sections/home/CTA";
// import { SectionNavbar } from "@/components/ui/SectionNavbar";
// import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
// const WeImagine = dynamic(() => import("@/sections/home/WeImagine").then((mod) => mod.WeImagine));
// const OurProducts = dynamic(() => import("@/sections/home/OurProducts").then((mod) => mod.OurProducts));

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden relative">
      {/* 1. Hero */}
      <HeroSection />

       {/* 3. Trusted Partners */}
      {/* <TrustBanner /> */}

      {/* 2. Services Overview Pillars */}
      <ServicesOverviewPillars />

      
      

      {/* 4. AI Studio Showcase */}
      <AIStudioShowcase />


     

      {/* 5. Core Services */}
      <CoreServices />

      {/* 6. Industries */}
      <IndustryExpertise />

      

      {/* 7. Testimonials */}
      {/* <ExecutiveTestimonials /> */}

      {/* 7.5. Community & Client Mosaic Wall */}
      <CommunityJoinSection />

      {/* 7.6. Founder & CEO Vision Quote */}
      {/* <FounderQuoteSection /> */}

      {/* 8. Partners */}
      <PartnersSection />

      {/* 10. Announcement Banner */}
      <ImperativesBanner />

      {/* Commented-out sections */}
      
      {/* <BusinessOverview /> */}
      {/* <WeImagine /> */}
      {/* <OurProducts /> */}
      {/* <CTA /> */}
    </main>
  );
}
