"use client";

import { useEffect } from "react";
import { HeroSection } from "@/sections/home/HeroSection";
import { TrustBanner } from "@/sections/home/TrustBanner";
import { ImperativesBanner } from "@/sections/home/ImperativesBanner";
import { BusinessOverview } from "@/sections/home/BusinessOverview";
import { Testimonials } from "@/sections/home/Testimonials";
import { CoreServices } from "@/sections/home/CoreServices";
import { IndustriesSection } from "@/sections/home/IndustriesSection";
import { CaseStudies } from "@/sections/home/CaseStudies";
import { ImpactSection } from "@/sections/home/ImpactSection";
import { WeImagine } from "@/sections/home/WeImagine";
import { WhyDevopstrio } from "@/sections/home/WhyDevOpsTrio";
import { OurAdvantage } from "@/sections/home/OurAdvantage";
import { TechnicalPartnerships } from "@/sections/home/TechnicalPartnerships";
import { DeliveryWorkflow } from "@/sections/home/DeliveryWorkflow";
import { OurProducts } from "@/sections/home/OurProducts";
import { PartnersSection } from "@/sections/home/PartnersSection";
import { GlobalPresence } from "@/sections/home/GlobalPresence";
import { Insights } from "@/sections/home/Insights";
import { HiringSection } from "@/sections/home/HiringSection";
import { CTA } from "@/sections/home/CTA";

import { SectionNavbar } from "@/components/ui/SectionNavbar";

const homeSections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "industries", label: "Industries" },
  { id: "innovation", label: "Innovation" },
  { id: "impact", label: "Impact" },
  { id: "why-Devopstrio", label: "Why Devopstrio" },
  { id: "partnerships", label: "Partnerships" },
  { id: "networks", label: "Networks" },
  { id: "insights", label: "Insights" },
  { id: "careers", label: "Careers" }
];

export default function Home() {
  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let raf = 0;
    let cleanupTriggers = () => { };
    let alive = true;

    const startMotion = async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);

      if (!alive) return;

      lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.85 });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, index) => {
        gsap.fromTo(
          step,
          { opacity: 0.3 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: step,
              start: "top 78%",
              end: "top 42%",
              scrub: true
            },
            delay: index * 0.02
          }
        );
      });

      cleanupTriggers = () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

    startMotion();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      lenis?.destroy();
      cleanupTriggers();
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <TrustBanner />
      <SectionNavbar sections={homeSections} />
      <div id="overview">
        <BusinessOverview />
        
      </div>
      <div id="capabilities">
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
        {/* <ImpactSection /> */}
        <CaseStudies />
        {/* <Testimonials /> */}
      </div>
      <div id="why-Devopstrio">
        <WhyDevopstrio />
        <OurAdvantage />
      </div>
      <div id="partnerships">
        <PartnersSection />
        <TechnicalPartnerships />
        
      </div>
      <div id="networks">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <GlobalPresence />
        </div>
      </div>
      <div id="insights">
        <Insights />
      </div>
      <div id="careers">
        <HiringSection />
      </div>
      <ImperativesBanner />
      <CTA />
    </main>
  );
}
