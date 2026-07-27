import dynamic from "next/dynamic";
import { HeroSection } from "@/sections/home/HeroSection";
import { TrustBanner } from "@/sections/home/TrustBanner";
import { ImperativesBanner } from "@/sections/home/ImperativesBanner";
import { BusinessOverview } from "@/sections/home/BusinessOverview";
import { CoreServices } from "@/sections/home/CoreServices";
import { ServicesOverviewPillars } from "@/sections/home/ServicesOverviewPillars";
import { IndustriesSection } from "@/sections/home/IndustriesSection";
import { CaseStudies } from "@/sections/home/CaseStudies";
import { CTA } from "@/sections/home/CTA";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

// Dynamic import heavy sections for code-splitting and faster FCP/LCP
const AIStudioShowcase = dynamic(() => import("@/sections/home/AIStudioShowcase").then((mod) => mod.AIStudioShowcase));
const WeImagine = dynamic(() => import("@/sections/home/WeImagine").then((mod) => mod.WeImagine));
const OurProducts = dynamic(() => import("@/sections/home/OurProducts").then((mod) => mod.OurProducts));
const ExecutiveTestimonials = dynamic(() => import("@/sections/home/ExecutiveTestimonials").then((mod) => mod.ExecutiveTestimonials));
const PartnersSection = dynamic(() => import("@/sections/home/PartnersSection").then((mod) => mod.PartnersSection));
const Insights = dynamic(() => import("@/sections/home/Insights").then((mod) => mod.Insights));

const homeSections = [
  { id: "overview", label: "Overview" },
  { id: "ai-studio", label: "AI Studio" },
  { id: "capabilities", label: "Capabilities" },
  { id: "industries", label: "Industries" },
  { id: "innovation", label: "Innovation" },
  { id: "impact", label: "Impact" },
  { id: "partnerships", label: "Partnerships" },
  { id: "insights", label: "Insights" }
];

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main>
        <HeroSection />
        <TrustBanner />
        <SectionNavbar sections={homeSections} />
        
        <div id="overview">
          <BusinessOverview />
        </div>
        <div id="ai-studio">
          <AIStudioShowcase />
        </div>
        <div id="capabilities">
          <ServicesOverviewPillars />
          <CoreServices />
        </div>
        <div id="industries">
          <IndustriesSection />
        </div>
        <div id="innovation">
          <WeImagine />
          <OurProducts />
        </div>
        <div id="impact">
          <CaseStudies />
          <ExecutiveTestimonials />
        </div>
        <div id="partnerships">
          <PartnersSection />
        </div>
        <div id="insights">
          <Insights />
        </div>
        <ImperativesBanner />
        <CTA />
      </main>
    </SmoothScrollProvider>
  );
}
