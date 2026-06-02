"use client";

import React from "react";
import { ServiceDetailTemplate } from "@/components/ui/ServiceDetailTemplate";

export default function DataSciencePage() {
  return (
    <ServiceDetailTemplate
      categoryName="AI & Data / Subservice"
      title="Mathematical modeling &"
      highlightedWord="Data Science"
      subtitle="Implementing customer sentiment analyzers, telemetry metric monitors, and automated workflow orchestrations."
      overviewHeading="Transform unstructured datasets into actionable business engines"
      overviewDesc1="We construct predictive analytics pipelines, customer feedback classifiers, and automated metric decoders. Our data science workflows are designed to ingest gigabytes of logs and spit out clear predictive signals."
      overviewDesc2="By leveraging advanced statistical packages and local Python runtimes, we help your business build custom forecasting engines, detect security anomalies early, and automate complex decisions."
      heroImage="/assets/herocard/insightspage.png"
      benefits={[
        "Predictive modeling engines",
        "Customer sentiment pipelines",
        "Telemetry metrics analysis",
        "Time-series forecasting models"
      ]}
      capabilities={[
        {
          title: "Customer Sentiment Analysis",
          desc: "Natural language classifiers mapping customer reviews and chats to emotional matrices."
        },
        {
          title: "Telemetry & Metric Monitors",
          desc: "Running high-speed anomaly detectors on cloud access and application logs."
        },
        {
          title: "Predictive Forecasting",
          desc: "Mathematical time-series modeling to project resource demands and sales signals."
        },
        {
          title: "Process Automation",
          desc: "Coupling automated data cleansers with internal reporting pipelines."
        }
      ]}
      techs={[
        {
          name: "Python / NumPy / Pandas",
          desc: "Core mathematical frameworks for filtering and scaling raw multi-column arrays."
        },
        {
          name: "Scikit-Learn",
          desc: "Primary library for clustering, regressions, and feature engineering."
        },
        {
          name: "TensorFlow / PyTorch",
          desc: "Advanced libraries for running custom classification networks."
        },
        {
          name: "Apache Spark",
          desc: "Distributed data processing engines for handling large file repositories."
        }
      ]}
      process={[
        {
          step: "01",
          title: "Data Profiling",
          desc: "Audit database fields, evaluate null densities, and design data cleansing logic."
        },
        {
          step: "02",
          title: "Feature Selection",
          desc: "Extract predictive signals and normalize variables."
        },
        {
          step: "03",
          title: "Model Training",
          desc: "Train multiple mathematical algorithms to compare accuracy and resource usage."
        },
        {
          step: "04",
          title: "Endpoint Creation",
          desc: "Package the chosen model inside a fast API endpoint container."
        },
        {
          step: "05",
          title: "Performance Loop",
          desc: "Setup logs tracking input drift and prediction validation."
        }
      ]}
      metrics={[
        {
          value: "92%",
          label: "Model classification accuracy"
        },
        {
          value: "10M+",
          label: "Telemetry logs parsed daily"
        },
        {
          value: "50%",
          label: "Audit report time saved"
        }
      ]}
      caseStudyTitle="Automated predictive maintenance metrics for manufacturing giant."
      caseStudyDesc="We developed a predictive forecasting system that ingests sensor telemetry metrics from 2k+ assembly line machines. The model identifies anomalies in temperature and vibration patterns to schedule preventative repairs, reducing downtime."
      caseStudyHighlights={[
        "Engineered real-time Kafka data ingestion streams",
        "Trained specialized Random Forest classifiers on historical failure logs",
        "Prevented major equipment failures with a 92% classification accuracy"
      ]}
      faqs={[
        {
          q: "How do you handle unstructured data?",
          a: "We construct pre-processing modules using Python's advanced natural language toolkits. We parse HTML, PDFs, and system logs, converting them into structured database columns and vector embeddings."
        },
        {
          q: "Do you support distributed data systems like Hadoop?",
          a: "Yes. We integrate our data science models directly into large Apache Spark, Snowflake, or Hadoop environments to run calculations in parallel."
        }
      ]}
      ctaTitle="Activate your database with"
      ctaHighlight="Data Science"
      ctaDesc="Collaborate with our data scientists to design mathematical forecasting models and anomaly detection pipelines."
      ctaBtnText="Request Data Science Consult"
    />
  );
}
