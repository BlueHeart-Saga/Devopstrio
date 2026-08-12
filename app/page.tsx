import dynamic from "next/dynamic";
import { HeroSection } from "@/sections/home/HeroSection";
import { CoreServices } from "@/sections/home/CoreServices";
import { ServicesOverviewPillars } from "@/sections/home/ServicesOverviewPillars";
import { IndustryExpertise } from "@/sections/home/IndustryExpertise";
import { CaseStudies } from "@/sections/home/CaseStudies";

// Dynamic imports for heavier sections
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
      <FounderQuoteSection />

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
