"use client";

import React from "react";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

// Component imports
import { IndustryHero } from "@/sections/industries/detail/IndustryHero";
import { IndustryOverview } from "@/sections/industries/detail/IndustryOverview";
import { IndustryChallenges } from "@/sections/industries/detail/IndustryChallenges";
import { IndustrySolutions } from "@/sections/industries/detail/IndustrySolutions";
import { IndustryFocusAreas } from "@/sections/industries/detail/IndustryFocusAreas";
import { IndustryUseCases } from "@/sections/industries/detail/IndustryUseCases";
import { IndustryTechStack } from "@/sections/industries/detail/IndustryTechStack";
import { IndustryOutcomes } from "@/sections/industries/detail/IndustryOutcomes";
import { IndustryCaseStudy } from "@/sections/industries/detail/IndustryCaseStudy";
import { IndustryCompliance } from "@/sections/industries/detail/IndustryCompliance";
import { IndustryWhyChoose } from "@/sections/industries/detail/IndustryWhyChoose";
import { IndustryRelatedServices } from "@/sections/industries/detail/IndustryRelatedServices";
import { IndustryInsights } from "@/sections/industries/detail/IndustryInsights";
import { IndustryFAQ } from "@/sections/industries/detail/IndustryFAQ";
import { IndustryCTA } from "@/sections/industries/detail/IndustryCTA";

const subSections = [
  { id: "overview", label: "Overview" },
  { id: "challenges", label: "Challenges" },
  { id: "solutions", label: "Solutions" },
  { id: "capabilities", label: "Capabilities" },
  { id: "use-cases", label: "Use Cases" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "outcomes", label: "Outcomes" },
  { id: "case-study", label: "Case Study" },
  { id: "compliance", label: "Compliance" },
  { id: "why-choose", label: "Why Choose Us" },
  { id: "faq", label: "FAQ" }
];

const data = {
  hero: {
    title: "High-throughput &",
    highlightedWord: "Streaming Platforms",
    subtitle: "Deploying content recommendation algorithms, low-overhead video stream CDNs, and digital rights ledger systems.",
    bgImage: "/assets/Industries-page/herocard/media.png"
  },
  overview: {
    heading: "Dynamic streaming infrastructure and asset management pipelines",
    desc1: "We build video streaming backends, social media media engines, and digital asset managers. Our codebases handle high concurrent user counts, route media files to edge caches, and encode audio/video variables instantly.",
    desc2: "Our services connect content management databases with user apps, offering seamless video playback, real-time recommendation updates, and digital rights validation."
  },
  challenges: [
    {
      title: "Low-Latency Video Encoding",
      desc: "Transcoding raw video uploads into adaptive stream resolutions without high server runtime delays."
    },
    {
      title: "Peak Event Network Saturation",
      desc: "Preventing platform downtime during massive live events and sudden viewership spikes."
    },
    {
      title: "Digital Media Copyright Security",
      desc: "Enforcing digital copyright systems (DRM) to prevent unauthorized distribution and piracy of premium assets."
    }
  ],
  solutions: [
    {
      title: "Serverless Transcoding Grids",
      desc: "Using AWS Elemental MediaConvert triggers to automatically encode uploads in parallel channels."
    },
    {
      title: "Multi-CDN Edge Architectures",
      desc: "Deploying intelligent traffic router algorithms that switch streams between Akamai and CloudFront to avoid outages."
    },
    {
      title: "Widevine & FairPlay DRM",
      desc: "Integrating decryption key managers inside HTML5 video player containers to secure streaming rights."
    }
  ],
  capabilities: [
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
  ],
  useCases: [
    {
      title: "VOD Transcoding Shift",
      result: "Reduced video transcoding processing bills by 45% using serverless Lambda triggers."
    },
    {
      title: "Live Sport Streaming",
      result: "Maintained stable playback for 2 million concurrent viewers with zero buffer delays."
    }
  ],
  techs: [
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
  ],
  outcomes: [
    {
      value: "100M+",
      label: "Active Streams",
      desc: "Reliable stream routing and delivery."
    },
    {
      value: "<200ms",
      label: "Playback Delay",
      desc: "Time to first video frame."
    },
    {
      value: "98.6%",
      label: "Recommendation Accuracy",
      desc: "AI match ratings from user viewing metrics."
    }
  ],
  caseStudy: {
    title: "Rebuilding stream backend for regional video-on-demand service.",
    desc: "We re-architected a streaming server setup to run on serverless AWS transcoders. The update slashed media encoding costs by 45% while decreasing video buffering delays globally.",
    metrics: [
      { value: "45% Cut", label: "Transcode Bills" },
      { value: "<200ms", label: "Buffering Delay" },
      { value: "98.6%", label: "Model Matches" }
    ],
    highlights: [
      "Migrated legacy transcoding systems to cloud-native convert engines",
      "Setup CloudFront CDN parameters for fast media deliveries",
      "Designed a real-time recommendation engine using vector indexes"
    ]
  },
  compliance: [
    {
      title: "DRM Protection Alignment",
      desc: "Configuring Widevine, FairPlay, and PlayReady licenses to satisfy studio copyright rules."
    },
    {
      title: "GDPR Consent Registries",
      desc: "Encrypting consumer tracking data and storing watch profiles under regional privacy standards."
    }
  ],
  whyChoose: [
    {
      title: "High-Concurrency Streaming",
      desc: "Our platforms sustain millions of concurrent video streams with minimum lag."
    },
    {
      title: "Integrated DRM Frameworks",
      desc: "We deploy industry-grade decryption tools to prevent video asset replication."
    },
    {
      title: "Automated Bitrate Adaptability",
      desc: "Our HLS setups dynamically scale resolution down to ensure playback on weak networks."
    }
  ],
  relatedServices: [
    { title: "Cloud Platform Engineering", href: "/services/cloud-platform-engineering" },
    { title: "DevOps & Release Automation", href: "/services/devops-automation" },
    { title: "Product Engineering", href: "/services/product-engineering" },
    { title: "Site Reliability Engineering", href: "/services/sre-operations" }
  ],
  insights: [
    {
      title: "Optimizing Video Players for DRM",
      desc: "A technical setup guide to config Widevine decryption licenses inside video controllers.",
      link: "/insights"
    },
    {
      title: "Automating HLS Video Transcoding",
      desc: "How we configure serverless tasks to convert raw MP4 clips into adaptive stream indexes.",
      link: "/insights"
    }
  ],
  cta: {
    ctaTitle: "Scale your video",
    ctaHighlight: "Streaming network",
    ctaDesc: "Consult with our principal media solutions architect to optimize your transcoding setups and CDN delivery paths.",
    ctaBtnText: "Consult Media Architect"
  },
  faqs: [
    {
      q: "How do you prevent video piracy on web players?",
      a: "We integrate standard Digital Rights Management (DRM) keys like Google Widevine and Apple FairPlay, ensuring streams are decrypted only inside secure player decoders."
    },
    {
      q: "What video streaming protocols do you use?",
      a: "We implement HLS (HTTP Live Streaming) and MPEG-DASH protocols, ensuring adaptive bitrate adjustments for viewers with weak connections."
    }
  ]
};

export default function MediaEntertainmentPage() {
  const mappedOverviewChallenges = data.challenges.map(c => c.title);
  const mappedCompliance = data.compliance.map(c => `${c.title}: ${c.desc}`);

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 1. Hero */}
      <IndustryHero
        industryName="Media & Entertainment"
        title={data.hero.title}
        highlightedWord={data.hero.highlightedWord}
        subtitle={data.hero.subtitle}
        bgImage={data.hero.bgImage}
      />

      {/* Sticky Secondary Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 2. Overview */}
      <IndustryOverview
        overviewHeading={data.overview.heading}
        overviewDesc1={data.overview.desc1}
        overviewDesc2={data.overview.desc2}
        challenges={mappedOverviewChallenges}
        image={data.hero.bgImage}
      />

      {/* 3. Challenges We Solve */}
      <IndustryChallenges challenges={data.challenges} />

      {/* 4. Solutions We Deliver */}
      <IndustrySolutions solutions={data.solutions} />

      {/* 5. Core Capabilities */}
      <IndustryFocusAreas focusAreas={data.capabilities} />

      {/* 6. Use Cases */}
      <IndustryUseCases useCases={data.useCases} />

      {/* 7. Technology Stack */}
      <IndustryTechStack techs={data.techs} />

      {/* 8. Business Outcomes */}
      <IndustryOutcomes outcomes={[
        { value: data.outcomes[0].value, label: data.outcomes[0].label, desc: data.outcomes[0].desc },
        { value: data.outcomes[1].value, label: data.outcomes[1].label, desc: data.outcomes[1].desc },
        { value: data.outcomes[2].value, label: data.outcomes[2].label, desc: data.outcomes[2].desc }
      ]} />

      {/* 9. Success Stories */}
      <IndustryCaseStudy
        caseStudyTitle={data.caseStudy.title}
        caseStudyDesc={data.caseStudy.desc}
        metrics={data.caseStudy.metrics}
        caseStudyHighlights={data.caseStudy.highlights}
      />

      {/* 10. Compliance & Security */}
      <IndustryCompliance compliances={mappedCompliance} />

      {/* 11. Why Devopstrio */}
      <IndustryWhyChoose whyChoose={data.whyChoose} />

      {/* 12. Insights */}
      <IndustryInsights insights={data.insights} />

      {/* 13. Related Services */}
      <IndustryRelatedServices relatedServices={data.relatedServices} />

      {/* 14. FAQ */}
      <IndustryFAQ faqs={data.faqs} />

      {/* 15. CTA */}
      <IndustryCTA
        ctaTitle={data.cta.ctaTitle}
        ctaHighlight={data.cta.ctaHighlight}
        ctaDesc={data.cta.ctaDesc}
        ctaBtnText={data.cta.ctaBtnText}
      />

    </main>
  );
}
