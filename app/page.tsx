"use client";

import { useEffect } from "react";
import { HeroSection } from "@/sections/home/HeroSection";
import { ImperativesBanner } from "@/sections/home/ImperativesBanner";
import { BusinessOverview } from "@/sections/home/BusinessOverview";
import { Testimonials } from "@/sections/home/Testimonials";
import { CoreServices } from "@/sections/home/CoreServices";
import { IndustriesSection } from "@/sections/home/IndustriesSection";
import { CaseStudies } from "@/sections/home/CaseStudies";
import { Whydevopstrio } from "@/sections/home/WhyDevOpsTrio";
import { OurAdvantage } from "@/sections/home/OurAdvantage";
import { TechnicalPartnerships } from "@/sections/home/TechnicalPartnerships";
import { GlobalNetworks } from "@/sections/home/GlobalNetworks";
import { Insights } from "@/sections/home/Insights";
import { HiringSection } from "@/sections/home/HiringSection";
import { CTA } from "@/sections/home/CTA";

import { SectionNavbar } from "@/components/ui/SectionNavbar";

const homeSections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "industries", label: "Industries" },
  { id: "impact", label: "Impact" },
  { id: "why-devopstrio", label: "Why Devopstrio" },
  { id: "partnerships", label: "Partnerships" },
  { id: "networks", label: "Networks" },
  { id: "insights", label: "Insights" },
  { id: "careers", label: "Careers" }
];

export default function Home() {
  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let raf = 0;
    let cleanupTriggers = () => {};
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
      <SectionNavbar sections={homeSections} />
      <div id="overview">
        <BusinessOverview />
        <Testimonials />
      </div>
      <div id="capabilities">
        <CoreServices />
      </div>
      <div id="industries">
        <IndustriesSection />
      </div>
      <div id="impact">
        <CaseStudies />
      </div>
      <div id="why-devopstrio">
        <Whydevopstrio />
        <OurAdvantage />
      </div>
      <div id="partnerships">
        <TechnicalPartnerships />
      </div>
      <div id="networks">
        <GlobalNetworks />
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
