"use client";

import React from "react";
import { IndustryDetailTemplate } from "@/components/ui/IndustryDetailTemplate";

export default function MediaEntertainmentPage() {
  return (
    <IndustryDetailTemplate
      industryName="Media & Entertainment"
      title="High-bandwidth streaming &"
      highlightedWord="Media Platforms"
      subtitle="Deploying content recommendation algorithms, low-overhead video stream CDNs, and digital rights ledger systems."
      overviewHeading="Fast content delivery and AI-driven personalization matrices"
      overviewDesc1="We construct low-latency streaming backends and user recommendation graphs. Our systems route media traffic through optimized CDN nodes, reducing stream startup lags and buffer occurrences."
      overviewDesc2="Our services connect user viewing patterns with cognitive classifiers, recommending media collections and optimizing video file transcoders to cut storage costs."
      heroImage="/assets/herocard/industriespage.png"
      challenges={[
        "High-concurrency stream spikes",
        "CDN caching node bottlenecks",
        "Video encoding conversion lags"
      ]}
      focusAreas={[
        {
          title: "Stream CDNs",
          desc: "Configuring secure caching headers and content delivery clusters to stream HD video with minimal latencies."
        },
        {
          title: "User Recommenders",
          desc: "Cognitive models that map viewing habits to custom classification tags, prompting longer app sessions."
        },
        {
          title: "Dynamic Transcoders",
          desc: "Automated media processors that compress and encode video files into adaptive bitrates based on viewer speeds."
        }
      ]}
      compliances={[
        "GDPR Personal Protections: Strict user profile database isolation and audit trails.",
        "DMCA & Rights Management: Secure metadata encryption and user subscription audits."
      ]}
      techs={[
        {
          name: "Next.js / TypeScript",
          desc: "Safe and highly interactive dashboard pages for media management."
        },
        {
          name: "Amazon CloudFront / CDNs",
          desc: "High-speed content caching nodes distributed across global network hubs."
        },
        {
          name: "Node.js / Express",
          desc: "Lightweight APIs built for processing thousands of metadata queries per minute."
        }
      ]}
      metrics={[
        {
          value: "40%",
          label: "Video buffering reduced"
        },
        {
          value: "<200ms",
          label: "Average stream startup lag"
        },
        {
          value: "1M+",
          label: "Concurrent stream viewers"
        }
      ]}
      caseStudyTitle="Adaptive bitrate video transcoding engine for subscription service."
      caseStudyDesc="We built a serverless transcoding pipeline that converts raw media files into multi-resolution stream chunks. The system utilizes AWS Lambda and CloudFront caching, lowering media server costs by 45%."
      caseStudyHighlights={[
        "Established automated video transcode loops",
        "Implemented global CDN caching profiles",
        "Reduced stream buffering failures by 40%"
      ]}
      faqs={[
        {
          q: "How do you handle high concurrent user traffic?",
          a: "We decouple the frontend from database layers using global CDNs. Content requests query cached edge files first, shielding primary databases from traffic spikes."
        },
        {
          q: "Do you support digital rights management (DRM)?",
          a: "Yes. We integrate secure URL token signatures and tokenized access gates with standard media decoders to prevent link compromises."
        }
      ]}
      ctaTitle="Optimize your media"
      ctaHighlight="Stream delivery"
      ctaDesc="Book a consultation with our media solutions engineer to review your CDN parameters and video encoder pipelines."
      ctaBtnText="Request Media Scoping"
    />
  );
}
