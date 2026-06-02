"use client";

import React from "react";
import { ServiceDetailTemplate } from "@/components/ui/ServiceDetailTemplate";

export default function AIToolsPage() {
  return (
    <ServiceDetailTemplate
      categoryName="AI & Data / Subservice"
      title="Business Transformation"
      highlightedWord="AI Tools"
      subtitle="Integrating top-tier AI solutions including recruitment screeners, self-assessment matrices, and corporate chatbots."
      overviewHeading="Pre-configured cognitive tools designed for 2025 workflows"
      overviewDesc1="We build and customize specialized enterprise AI tools that replace repetitive operational steps. Our solutions include automated candidate screeners, customer feedback analyzers, and self-assessment dashboards."
      overviewDesc2="By deploying our modular AI templates directly inside your secure VPC, you avoid data leakage to public models while achieving immediate operational transformation in recruitment, sales compliance, and support."
      heroImage="/assets/herocard/insightspage.png"
      benefits={[
        "Ready-to-use AI components",
        "Custom recruitment filters",
        "Customer feedback dashboards",
        "Prompt template library"
      ]}
      capabilities={[
        {
          title: "Recruiter Assessments",
          desc: "Machine learning filters to summarize, rank, and score applications based on historical success models."
        },
        {
          title: "Feedback Analysis",
          desc: "Natural language processing engines to analyze user support tickets and group issues into actionable metrics."
        },
        {
          title: "Self-Assessment Tools",
          desc: "Conversational survey layers that adapt questions based on previous answers to generate complex reports."
        },
        {
          title: "Document Summarizers",
          desc: "Private text extraction and key metric reporting tools for PDF and Excel documents."
        }
      ]}
      techs={[
        {
          name: "LangGraph",
          desc: "Agent framework for designing complex multi-turn decision graphs and feedback loops."
        },
        {
          name: "Chroma DB",
          desc: "Lightweight vector store for localized document retrieval and semantic caching."
        },
        {
          name: "FastAPI / Python",
          desc: "Server routing framework for low-overhead model communication."
        },
        {
          name: "Next.js Frontend",
          desc: "Glassmorphism dashboard templates designed for administrative and agent review."
        }
      ]}
      process={[
        {
          step: "01",
          title: "Tool Selection",
          desc: "Choose from our pre-configured suite of recruitment, survey, or chat templates."
        },
        {
          step: "02",
          title: "Private VPC Host",
          desc: "Set up private cloud infrastructure to isolate company documents and user prompts."
        },
        {
          step: "03",
          title: "Integration Bind",
          desc: "Connect tool endpoints with your internal CRM, Slack, or HR management systems."
        },
        {
          step: "04",
          title: "Custom Tuning",
          desc: "Tailor system prompts, evaluation guidelines, and document indices to match your brand style."
        },
        {
          step: "05",
          title: "Launch & Track",
          desc: "Enable continuous metrics tracking for latency, API token consumption, and response validity."
        }
      ]}
      metrics={[
        {
          value: "75%",
          label: "Feedback processing speedup"
        },
        {
          value: "90%",
          label: "Recruiter triage time saved"
        },
        {
          value: "10k+",
          label: "Active automated assessments"
        }
      ]}
      caseStudyTitle="Deploying an automated customer feedback triage pipeline for retail SaaS."
      caseStudyDesc="We integrated our specialized feedback analysis tool into a retail SaaS support platform. The tool automatically reads incoming complaints, parses sentiment metrics, queries local manuals for solutions, and drafts agent responses."
      caseStudyHighlights={[
        "Achieved a 75% reduction in customer response waiting time",
        "Integrated with Zendesk and Slack for immediate notification routing",
        "Reduced support agent fatigue by pre-drafting repetitive help tickets"
      ]}
      faqs={[
        {
          q: "Are these tools compatible with our current cloud accounts?",
          a: "Yes. We package all of our AI tools inside standard Docker containers and deploy them using Terraform directly into your AWS, Azure, or GCP accounts."
        },
        {
          q: "Can we customize the tools' prompts?",
          a: "Yes. We provide an administrative portal where your managers can tweak system instructions, prompt weights, and document indexes without writing code."
        }
      ]}
      ctaTitle="Deploy pre-built"
      ctaHighlight="AI tools"
      ctaDesc="Scale your business operations using our validated templates for recruitment, customer support, and data indexing."
      ctaBtnText="Request Pre-Built Demo"
    />
  );
}
