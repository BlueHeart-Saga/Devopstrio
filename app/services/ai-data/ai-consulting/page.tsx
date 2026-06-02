"use client";

import React from "react";
import { ServiceDetailTemplate } from "@/components/ui/ServiceDetailTemplate";

export default function AIConsultingPage() {
  return (
    <ServiceDetailTemplate
      categoryName="AI & Data / Subservice"
      title="Strategic AI & Machine Learning"
      highlightedWord="Consulting"
      subtitle="Formulating roadmap strategies, conducting safety alignment audits, integrating model systems, and setting up support protocols."
      overviewHeading="Consultancy-grade AI strategies tuned for corporate goals"
      overviewDesc1="We provide senior architectural advisory services for companies wanting to integrate AI safely. We analyze current workflows, security bottlenecks, and cost metrics to craft a custom multi-phase implementation roadmap."
      overviewDesc2="Our services cover safety audit checks, model governance, cost-reduction (semantic caching), and complete deployment support for Amazon SageMaker, Azure AI Studio, or Google Vertex."
      heroImage="/assets/herocard/insightspage.png"
      benefits={[
        "Comprehensive AI Roadmaps",
        "Safety & Alignment Audits",
        "Model Host comparison studies",
        "Cost-reduction plans"
      ]}
      capabilities={[
        {
          title: "AI Strategy Roadmaps",
          desc: "Mapping organizational processes to feasible machine learning applications and computing metrics."
        },
        {
          title: "Safety & Alignment Audits",
          desc: "Evaluating bias matrices, prompt boundaries, compliance guidelines, and threat vectors."
        },
        {
          title: "Deployment Architecture",
          desc: "Custom blueprint design for multi-model scaling, failovers, and backup nodes."
        },
        {
          title: "Model Fine-Tuning Study",
          desc: "Deciding between open-source models (Llama) and closed APIs based on data density."
        }
      ]}
      techs={[
        {
          name: "Amazon SageMaker",
          desc: "Primary orchestration tool for model training, validation, and container registry."
        },
        {
          name: "Azure AI Studio",
          desc: "Cloud development playground for testing semantic embeddings and safety boundaries."
        },
        {
          name: "Google Vertex AI",
          desc: "Serverless model fine-tuning and batch prediction pipelines."
        },
        {
          name: "TruLens / MLflow",
          desc: "Continuous monitoring frameworks for evaluating model outputs and tracking prompt experiments."
        }
      ]}
      process={[
        {
          step: "01",
          title: "Discovery Audit",
          desc: "Analyze current databases, workflows, and developer skills."
        },
        {
          step: "02",
          title: "Feasibility Matrix",
          desc: "Score business priorities based on engineering complexity and implementation cost."
        },
        {
          step: "03",
          title: "Architecture Blueprint",
          desc: "Design target cloud environments, caching layers, and token safety firewalls."
        },
        {
          step: "04",
          title: "TCO Comparison",
          desc: "Draft cost comparisons between OpenAI APIs and open-source models hosting."
        },
        {
          step: "05",
          title: "Handoff & Support",
          desc: "Deliver standard operational books, training schedules, and support contracts."
        }
      ]}
      metrics={[
        {
          value: "60%",
          label: "Model hosting cost saved"
        },
        {
          value: "2-Weeks",
          label: "Average PoC turnaround"
        },
        {
          value: "100%",
          label: "SOC-2 audit alignment score"
        }
      ]}
      caseStudyTitle="Designing a multi-model enterprise strategy for global insurance provider."
      caseStudyDesc="We consulted a leading insurance firm on modernizing their claim review workflow. We designed a multi-model hybrid RAG structure that routes general queries to lightweight local models and reserves advanced API calls for complex case claims."
      caseStudyHighlights={[
        "Completed a comprehensive security audit on client cloud accounts",
        "Created Terraform configuration templates for secure model gateways",
        "Achieved a 60% reduction in target operational token costs"
      ]}
      faqs={[
        {
          q: "What is the output of your AI consulting engagement?",
          a: "You receive a production-ready architectural blueprint, a detailed Total Cost of Ownership (TCO) spreadsheet, a security compliance report aligned with SOC-2, and a functioning sandbox code repository."
        },
        {
          q: "Do you help with model hosting migrations?",
          a: "Yes. We provide complete migration support to transfer model workloads from expensive third-party APIs to private virtual private clouds (VPCs) running open-source models."
        }
      ]}
      ctaTitle="Define your enterprise"
      ctaHighlight="AI strategy"
      ctaDesc="Book a scoping consultation session with our principal AI consultant to evaluate your project needs."
      ctaBtnText="Book Consulting Scoping"
    />
  );
}
