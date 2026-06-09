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
  "Low-latency video encoding",
  "Peak event network saturation",
  "Digital media copyright security"
];

const focusAreas = [
  {
    title: "Media CDNs",
    desc: "Configuring edge cache systems that stream video files with minimal buffering delays."
  },
  {
    title: "Encoding Pipelines",
    desc: "Setting up automated serverless scripts to encode uploaded raw video files into web-friendly resolutions."
  },
  {
    title: "Recommend Algorithms",
    desc: "Deploying real-time models suggesting relevant shows based on user viewing histories."
  }
];

const compliances = [
  "DRM Safety Standards: Implementing Widevine and FairPlay systems protecting video files from piracy.",
  "GDPR Privacy Standards: Enforcing secure user search history encryption and cookie consent workflows."
];

const techs = [
  {
    name: "AWS Elemental MediaConvert",
    desc: "Serverless cloud engines encoding media files into streaming formats."
  },
  {
    name: "Redis Enterprise",
    desc: "Caching layer retrieving active user watchlists in under 10ms."
  },
  {
    name: "Next.js / TypeScript",
    desc: "Highly responsive web frontends designed for smooth video player controls."
  }
];

const metrics = [
  {
    value: "100M+",
    label: "Active watch streams"
  },
  {
    value: "<200ms",
    label: "Playback start latency"
  },
  {
    value: "98.6%",
    label: "Recommendation accuracy"
  }
];

const caseStudyHighlights = [
  "Migrated legacy transcoding systems to cloud-native convert engines",
  "Setup CloudFront CDN parameters for fast media deliveries",
  "Designed a real-time recommendation engine using vector indexes"
];

const faqs = [
  {
    q: "How do you prevent video piracy on web players?",
    a: "We integrate standard Digital Rights Management (DRM) keys like Google Widevine and Apple FairPlay, ensuring streams are decrypted only inside secure player decoders."
  },
  {
    q: "What video streaming protocols do you use?",
    a: "We implement HLS (HTTP Live Streaming) and MPEG-DASH protocols, ensuring adaptive bitrate adjustments for viewers with weak connections."
  }
];

export default function MediaEntertainmentPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <IndustryHero
        industryName="Media & Entertainment"
        title="High-throughput &"
        highlightedWord="Streaming Platforms"
        subtitle="Deploying content recommendation algorithms, low-overhead video stream CDNs, and digital rights ledger systems."
        bgImage="/assets/Home-page/industries/Media-Entertainment.png"
      />

      <SectionNavbar sections={subSections} />

      <IndustryOverview
        overviewHeading="Dynamic streaming infrastructure and asset management pipelines"
        overviewDesc1="We build video streaming backends, social media media engines, and digital asset managers. Our codebases handle high concurrent user counts, route media files to edge caches, and encode audio/video variables instantly."
        overviewDesc2="Our services connect content management databases with user apps, offering seamless video playback, real-time recommendation updates, and digital rights validation."
        challenges={challenges}
      />

      <IndustryFocusAreas focusAreas={focusAreas} />

      <IndustryCompliance compliances={compliances} />

      <IndustryTechStack techs={techs} />

      <IndustryCaseStudy
        caseStudyTitle="Rebuilding stream backend for regional video-on-demand service."
        caseStudyDesc="We re-architected a streaming server setup to run on serverless AWS transcoders. The update slashed media encoding costs by 45% while decreasing video buffering delays globally."
        metrics={metrics}
        caseStudyHighlights={caseStudyHighlights}
      />

      <IndustryFAQ faqs={faqs} />

      <IndustryCTA
        ctaTitle="Scale your video"
        ctaHighlight="Streaming network"
        ctaDesc="Consult with our principal media solutions architect to optimize your transcoding setups and CDN delivery paths."
        ctaBtnText="Consult Media Architect"
      />
    </main>
  );
}
