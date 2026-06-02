"use client";

import React from "react";
import { IndustryDetailTemplate } from "@/components/ui/IndustryDetailTemplate";

export default function AutomotivePage() {
  return (
    <IndustryDetailTemplate
      industryName="Automotive"
      title="Embedded firmware &"
      highlightedWord="Automotive Systems"
      subtitle="Integrating device hardware firmware, sensory telemetry data ingestion pipelines, and driver navigation maps."
      overviewHeading="Hardware-accelerated neural networks and secure device telemetry"
      overviewDesc1="We build embedded firmware controllers and high-volume telemetry receivers. Our software handles sensor signals, compiles lightweight model files, and coordinates steering joint operations."
      overviewDesc2="Our services connect device hardware platforms with safe cloud microservices, facilitating over-the-air (OTA) updates, continuous log diagnostics, and real-time navigation trackers."
      heroImage="/assets/herocard/industriespage.png"
      challenges={[
        "Quantized model size fits",
        "Inference speed limitations",
        "Secure hardware updates"
      ]}
      focusAreas={[
        {
          title: "Embedded Firmware",
          desc: "Constructing secure C++ drivers that bridge hardware processor layers with network interfaces."
        },
        {
          title: "Telemetry Pipelines",
          desc: "Processing hundreds of diagnostic logs per second from vehicle controllers."
        },
        {
          title: "Edge ML Compilation",
          desc: "Structuring TensorRT networks to run classification models directly on edge boards."
        }
      ]}
      compliances={[
        "ISO 26262 Safety Standard: Rigorous firmware code checks, automated stress testing, and functional rollbacks.",
        "SOC-2 Security Checks: Secure encrypted update servers and tokenized network authentication."
      ]}
      techs={[
        {
          name: "C++ / CUDA",
          desc: "High-efficiency low-level compilation languages for graphic processors."
        },
        {
          name: "NVIDIA TensorRT",
          desc: "Optimized neural network runtime engine for fast inference calculations."
        },
        {
          name: "ROS (Robot Operating System)",
          desc: "Modular middleware platform connecting hardware node signals."
        }
      ]}
      metrics={[
        {
          value: "12ms",
          label: "Average edge model latency"
        },
        {
          value: "95%",
          label: "Hardware test success rates"
        },
        {
          value: "200k",
          label: "OTA updates deployed weekly"
        }
      ]}
      caseStudyTitle="Autonomous pilot camera systems for commercial vehicle fleet."
      caseStudyDesc="We quantized and deployed a custom lane-tracking neural network onto NVIDIA Jetson boards. The system reads 30fps camera feeds, processes lane geometry coordinates inside 12ms, and alerts drivers of drift anomalies."
      caseStudyHighlights={[
        "Reduced model file footprint size by 80%",
        "Integrated with hardware CAN bus communications",
        "Passed strict vehicle safety road tests"
      ]}
      faqs={[
        {
          q: "How do you update firmware on deployed vehicles?",
          a: "We construct secure over-the-air (OTA) update servers. Vehicles download encrypted binary packages, run safety validations, and apply updates during engine-off phases."
        },
        {
          q: "What edge boards do you regularly write for?",
          a: "We compile models and write drivers for NVIDIA Jetson platforms, specialized ARM Cortex boards, and industrial controllers."
        }
      ]}
      ctaTitle="Accelerate your embedded"
      ctaHighlight="Edge automotive"
      ctaDesc="Get in touch with our automotive engineers to discuss hardware specs, model size limitations, and functional safety audits."
      ctaBtnText="Request Automotive Scoping"
    />
  );
}
