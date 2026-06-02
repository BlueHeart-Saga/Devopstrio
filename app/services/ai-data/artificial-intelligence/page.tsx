"use client";

import React from "react";
import { ServiceDetailTemplate } from "@/components/ui/ServiceDetailTemplate";

export default function ArtificialIntelligencePage() {
  return (
    <ServiceDetailTemplate
      categoryName="AI & Data / Subservice"
      title="Next-generation Cognitive"
      highlightedWord="Intelligence"
      subtitle="Deploying conversational chatbots, automated recruitment screeners, self-assessment tools, and digital assistants."
      overviewHeading="Leverage enterprise cognitive interfaces that scale safely"
      overviewDesc1="We construct specialized chatbot interfaces, recruiter automation bots, and cognitive agents. These systems utilize semantic caching, context injection, and strict output parser safety frameworks to ensure full data isolation and auditability."
      overviewDesc2="Whether you want to automate candidate screening interviews, construct a self-assessment dashboard, or launch a real-time chatbot assistant on your company portal, our engineering workflows guarantee response validity under high traffic."
      heroImage="/assets/herocard/insightspage.png"
      benefits={[
        "Enterprise Chatbot interfaces",
        "Recruiter screening tools",
        "Self-assessment dashboards",
        "PII prompt masking filters"
      ]}
      capabilities={[
        {
          title: "AI Recruiter Bots",
          desc: "Automated screening filters, initial interview evaluations, and CV scoring pipelines."
        },
        {
          title: "Self-Assessment Dashboards",
          desc: "Automated cognitive trackers mapping client responses to custom benchmark matrices."
        },
        {
          title: "Conversational Chatbots",
          desc: "High-frequency contextual support agents with multi-turn memory caching."
        },
        {
          title: "Digital Assistants",
          desc: "Personal tasks automation adapters hooked into internal ERP APIs."
        }
      ]}
      techs={[
        {
          name: "OpenAI GPT-4o API",
          desc: "Primary model engine for reasoning, summary generation, and translation tasks."
        },
        {
          name: "Hugging Face Transformers",
          desc: "Local specialized model tuning (BERT/RoBERTa) for custom classification."
        },
        {
          name: "LangChain Orchestration",
          desc: "Context routing, prompt template chaining, and agent tool execution."
        },
        {
          name: "Redis Semantic Cache",
          desc: "Real-time query caching to reduce API costs and improve response latencies."
        }
      ]}
      process={[
        {
          step: "01",
          title: "Context Map",
          desc: "Define systemic bounds, data ingestion paths, and user access roles."
        },
        {
          step: "02",
          title: "Parser Engineering",
          desc: "Set up input sanitizers, systemic instructions, and output schema schemas."
        },
        {
          step: "03",
          title: "RAG Ingest",
          desc: "Index target knowledge bases, PDF guidelines, and legacy database caches."
        },
        {
          step: "04",
          title: "Benchmark Run",
          desc: "Run evaluation tests to measure hallucination rates and accuracy scores."
        },
        {
          step: "05",
          title: "Rolling Deploy",
          desc: "Release the endpoint inside secure Kubernetes nodes with real-time logging."
        }
      ]}
      metrics={[
        {
          value: "85%",
          label: "Recruitment time saved"
        },
        {
          value: "<1.5s",
          label: "Chatbot query latency"
        },
        {
          value: "99.2%",
          label: "Validation benchmark score"
        }
      ]}
      caseStudyTitle="Deploying cognitive recruiter screening bot for global outsourcing leader."
      caseStudyDesc="We developed and integrated a secure candidate assessment chatbot that evaluates applicant resumes, maps expertise metrics against custom skill sets, and conducts initial technical pre-screening chats. The tool processed 120k candidates in its first quarter."
      caseStudyHighlights={[
        "Decoupled CV parsers using HuggingFace classification models",
        "PII anonymization filters to ensure compliance",
        "Automated scheduler integration with Microsoft Outlook"
      ]}
      faqs={[
        {
          q: "How do you prevent AI model hallucinations?",
          a: "We employ a three-tier defense system: strict grounding prompts, LangGraph routing filters that query only local vector context databases, and deterministic JSON schemas to parse and validate every returned model response."
        },
        {
          q: "Are candidate resume details stored securely?",
          a: "Yes. All resume content undergoes automated sanitization where PII is replaced by temporary tokens. The raw files are encrypted at rest under private AWS S3 environments with automated lifecycle deletion policies."
        }
      ]}
      ctaTitle="Scale your workflow with custom"
      ctaHighlight="AI interfaces"
      ctaDesc="Book a dedicated workspace mapping session with our machine learning engineers to design chatbot, recruiter, or assessment workflows."
      ctaBtnText="Request AI Demo"
    />
  );
}
