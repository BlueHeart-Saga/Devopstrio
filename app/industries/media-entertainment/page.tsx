"use client";

import React from "react";
import { IndustryDetailTemplate } from "@/components/ui/IndustryDetailTemplate";

export default function MediaEntertainmentPage() {
  return (
    <IndustryDetailTemplate
      industryName="Media & Entertainment"
      title="High-throughput &"
      highlightedWord="Streaming Platforms"
      subtitle="Deploying content recommendation algorithms, low-overhead video stream CDNs, and digital rights ledger systems."
      overviewHeading="Dynamic streaming infrastructure and asset management pipelines"
      overviewDesc1="We build video streaming backends, social media media engines, and digital asset managers. Our codebases handle high concurrent user counts, route media files to edge caches, and encode audio/video variables instantly."
      overviewDesc2="Our services connect content management databases with user apps, offering seamless video playback, real-time recommendation updates, and digital rights validation."
      heroImage="/assets/Home-page/industries/Media-Entertainment.png"
      challenges={[
        "Low-latency video encoding",
        "Peak event network saturation",
        "Digital media copyright security"
      ]}
      focusAreas={[
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
      ]}
      compliances={[
        "DRM Safety Standards: Implementing Widevine and FairPlay systems protecting video files from piracy.",
        "GDPR Privacy Standards: Enforcing secure user search history encryption and cookie consent workflows."
      ]}
      techs={[
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
      ]}
      metrics={[
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
      ]}
      caseStudyTitle="Rebuilding stream backend for regional video-on-demand service."
      caseStudyDesc="We re-architected a streaming server setup to run on serverless AWS transcoders. The update slashed media encoding costs by 45% while decreasing video buffering delays globally."
      caseStudyHighlights={[
        "Migrated legacy transcoding systems to cloud-native convert engines",
        "Setup CloudFront CDN parameters for fast media deliveries",
        "Designed a real-time recommendation engine using vector indexes"
      ]}
      faqs={[
        {
          q: "How do you prevent video piracy on web players?",
          a: "We integrate standard Digital Rights Management (DRM) keys like Google Widevine and Apple FairPlay, ensuring streams are decrypted only inside secure player decoders."
        },
        {
          q: "What video streaming protocols do you use?",
          a: "We implement HLS (HTTP Live Streaming) and MPEG-DASH protocols, ensuring adaptive bitrate adjustments for viewers with weak connections."
        }
      ]}
      ctaTitle="Scale your video"
      ctaHighlight="Streaming network"
      ctaDesc="Consult with our principal media solutions architect to optimize your transcoding setups and CDN delivery paths."
      ctaBtnText="Consult Media Architect"
    />
  );
}
