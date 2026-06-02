"use client";

import React from "react";
import { ServiceDetailTemplate } from "@/components/ui/ServiceDetailTemplate";

export default function HireAIEngineersPage() {
  return (
    <ServiceDetailTemplate
      categoryName="AI & Data / Subservice"
      title="Onboard Specialized"
      highlightedWord="AI Engineers"
      subtitle="Hiring senior machine learning specialists, MLOps architects, and NLP practitioners directly into your delivery team."
      overviewHeading="Access senior AI specialists with active project backgrounds"
      overviewDesc1="We provide vetted machine learning specialists, neural network engineers, and data engineers. All of our professionals have years of practical experience building LLM pipelines, scaling model runtimes, and securing data databases."
      overviewDesc2="By leveraging our staff augmentation model, you avoid the time-consuming recruiter filters and onboarding bottlenecks, adding certified MLOps practitioners to your workflows in under 48 hours."
      heroImage="/assets/herocard/insightspage.png"
      benefits={[
        "Pre-screened senior engineers",
        "Flexible contract terms",
        "No recruiter placement fees",
        "Rapid 48-hour team scale"
      ]}
      capabilities={[
        {
          title: "Machine Learning Specialists",
          desc: "Developers who specialize in training custom deep learning classifiers and clustering models."
        },
        {
          title: "MLOps Platform Architects",
          desc: "Engineers who build secure SageMaker/Kubernetes compilation pipelines."
        },
        {
          title: "NLP & Vector Practitioners",
          desc: "Specialists who configure advanced semantic chunking and search indexing parameters."
        },
        {
          title: "Data Pipeline Engineers",
          desc: "Specialists who build robust Kafka streaming ingest pipes."
        }
      ]}
      techs={[
        {
          name: "AWS SageMaker / MLflow",
          desc: "Platforms used to manage model metrics, training jobs, and artifact models."
        },
        {
          name: "LangChain / LangGraph",
          desc: "Orchestration tools used to link models with data databases."
        },
        {
          name: "Python / PyTorch",
          desc: "Code frameworks used to structure neural layers and clean training data."
        },
        {
          name: "Kubernetes / Docker",
          desc: "Container setups used to host model runtimes."
        }
      ]}
      process={[
        {
          step: "01",
          title: "Demand Profiling",
          desc: "We analyze your project stacks, compliance requirements, and developer positions."
        },
        {
          step: "02",
          title: "Candidate Match",
          desc: "We search our active consulting roster for engineers matching your requirements."
        },
        {
          step: "03",
          title: "Technical Review",
          desc: "You conduct direct pre-interviews to validate expertise alignments."
        },
        {
          step: "04",
          title: "Secure Onboard",
          desc: "We configure secure workspace VPNs, compliance profiles, and code permissions."
        },
        {
          step: "05",
          title: "Continuous Performance",
          desc: "We schedule monthly review checkins to track sprint metrics and deliveries."
        }
      ]}
      metrics={[
        {
          value: "48 Hrs",
          label: "Average developer matching time"
        },
        {
          value: "95%",
          label: "Developer retention rating"
        },
        {
          value: "50+",
          label: "Active deployed AI experts"
        }
      ]}
      caseStudyTitle="Augmenting AI engineering squad for digital health application."
      caseStudyDesc="We provided 4 senior MLOps and NLP engineers to a digital health client within 5 days. The augmented squad successfully built a private vector database and fine-tuned a custom medical record classification model, meeting HIPAA standards."
      caseStudyHighlights={[
        "Provided vetted NLP practitioners under tight timelines",
        "Successfully established private RDS database pipelines",
        "Achieved a 95% rating in sprint task completion"
      ]}
      faqs={[
        {
          q: "How quickly can you supply developers?",
          a: "We keep a bench of pre-vetted senior machine learning consultants. Depending on your stack, we can typically match and onboard engineers within 48 to 72 hours."
        },
        {
          q: "Are augmented engineers fully dedicated to our project?",
          a: "Yes. Engineers contract 40 hours a week directly for your managers, participating in daily standups and committing to your repositories."
        }
      ]}
      ctaTitle="Augment your squad with senior"
      ctaHighlight="AI developers"
      ctaDesc="Book a developer demand call to identify the skill profiles your machine learning projects need."
      ctaBtnText="Request Candidate Profiles"
    />
  );
}
