"use client";

import React from "react";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { IndustryHero } from "@/sections/industries/detail/IndustryHero";
import { IndustryOverview } from "@/sections/industries/detail/IndustryOverview";
import { IndustryFocusAreas } from "@/sections/industries/detail/IndustryFocusAreas";
import { IndustryCompliance } from "@/sections/industries/detail/IndustryCompliance";
import { IndustryTechStack } from "@/sections/industries/detail/IndustryTechStack";
import { IndustryCaseStudy } from "@/sections/industries/detail/IndustryCaseStudy";
import { IndustryFAQ } from "@/sections/industries/detail/IndustryFAQ";
import { IndustryCTA } from "@/sections/industries/detail/IndustryCTA";

const subSections = [
  { id: "overview", label: "Overview" },
  { id: "focus-areas", label: "Focus Areas" },
  { id: "compliance", label: "Compliance" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "case-study", label: "Case Study" },
  { id: "faq", label: "FAQ" },
  { id: "engage", label: "Engage" }
];

const challenges = [
  "Simultaneous classroom load peaks",
  "FERPA student record privacy",
  "Large file homework upload paths"
];

const focusAreas = [
  {
    title: "Learning Platforms",
    desc: "Constructing responsive student hubs hosting quizzes, grades, and calendar agendas."
  },
  {
    title: "Live Virtual Classes",
    desc: "Integrating low-latency video feeds and real-time whiteboard drawing states."
  },
  {
    title: "Grade Record Safety",
    desc: "Isolating grade databases inside secure subnets, logging every administrative database edit."
  }
];

const compliances = [
  "FERPA Compliance: Enforcing strict access controls on student record databases and masking PII data fields.",
  "COPPA Privacy Standards: Ensuring parental consent checks and data safety filters for minor users."
];

const techs = [
  {
    name: "WebRTC Video",
    desc: "Low-latency browser video connection libraries for live virtual lectures."
  },
  {
    name: "Node.js / Express",
    desc: "Fast, modular API endpoints handling quiz submissions and user log checks."
  },
  {
    name: "Amazon S3 Encrypted",
    desc: "Secure cloud storage bucket arrays hosting homework PDF and video files."
  }
];

const metrics = [
  {
    value: "99.9%",
    label: "Uptime during peak class periods"
  },
  {
    value: "<150ms",
    label: "Whiteboard sync delay"
  },
  {
    value: "10M+",
    label: "Quizzes graded annually"
  }
];

const caseStudyHighlights = [
  "Built serverless file upload pathways for raw homework files",
  "Sustained 4x morning traffic spikes without server drops",
  "Implemented encrypted database tables logging teacher grades"
];

const faqs = [
  {
    q: "How do you secure children's data under COPPA?",
    a: "We build our apps to never store unauthorized personal info of kids, implementing age-gates and encrypted cookies that clear automatically."
  },
  {
    q: "What video library do you use for virtual classrooms?",
    a: "We integrate custom WebRTC channels via Twilio or open-source MediaSoup servers depending on budget and participant volume."
  }
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <IndustryHero
        industryName="Education"
        title="Virtual classrooms &"
        highlightedWord="Learning Hubs"
        subtitle="Developing secure learning management systems (LMS), digital collaboration workspaces, and scalable interactive class portals."
        bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
      />

      <SectionNavbar sections={subSections} />

      <IndustryOverview
        overviewHeading="Secure educational databases and real-time class interfaces"
        overviewDesc1="We build modern school administration platforms, learning trackers, and live study dashboards. Our codebases manage homework uploads, class scheduler changes, and student record databases safely."
        overviewDesc2="Our services connect student portals with teacher dashboards, facilitating grade entry pipelines, secure virtual classrooms, and interactive test scoring engines."
        challenges={challenges}
      />

      <IndustryFocusAreas focusAreas={focusAreas} />

      <IndustryCompliance compliances={compliances} />

      <IndustryTechStack techs={techs} />

      <IndustryCaseStudy
        caseStudyTitle="Autoscaling virtual classroom setup for state school district."
        caseStudyDesc="We engineered a secure virtual classroom system that connects 120k students. The platform coordinates live video streams, quiz entries, and file sharing under FERPA guidelines with zero lag."
        metrics={metrics}
        caseStudyHighlights={caseStudyHighlights}
      />

      <IndustryFAQ faqs={faqs} />

      <IndustryCTA
        ctaTitle="Build your secure"
        ctaHighlight="Learning platform"
        ctaDesc="Consult with our principal education tech architect to design virtual classroom tools and student grade databases."
        ctaBtnText="Consult EdTech Architect"
      />
    </main>
  );
}
