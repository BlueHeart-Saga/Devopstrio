import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata = {
  title: "AI & Data Innovation Services | Devopstrio",
  description: "Co-engineer next-generation Generative AI, autonomous agents, and enterprise machine learning engineering. Implement hardened MLOps and robust data pipelines with Devopstrio.",
};

export default function AIDataInnovationPage() {
  return (
    <ServicePageLayout
      title="AI & Data Innovation"
      badge="Artificial Intelligence"
      subtitle="Co-engineering next-generation generative AI agents, multi-agent frameworks, semantic query routers, and custom fine-tuning to accelerate business insights."
      stats={[
        { value: "45+", label: "GenAI Projects" },
        { value: "98.5%", label: "Model Accuracy" },
        { value: "3.5x", label: "Speed Improvement" },
        { value: "24/7", label: "Agent Audits" }
      ]}
      capabilities={[
        {
          id: "generative-ai-solutions",
          title: "Generative AI Solutions",
          description: "Building production-grade autonomous agents, integrating semantic routing protocols, and fine-tuning models on domain-specific datasets.",
          items: [
            "Autonomous multi-agent workflows using LangGraph and Autogen",
            "Custom LLM fine-tuning schedules with PEFT and LoRA",
            "Low-latency semantic caching models for fast prompt responses"
          ]
        },
        {
          id: "ai-agents-automation",
          title: "AI Agents & Automation",
          description: "Architecting autonomous multi-agent workflows that execute complex business processes and self-correct based on feedback.",
          items: [
            "Stateful agent coordination using LangGraph orchestration",
            "Custom tool calling layers for internet searching and database execution",
            "Human-in-the-loop validation checkpoints for sensitive workflows"
          ]
        },
        {
          id: "machine-learning-engineering",
          title: "Machine Learning Engineering",
          description: "Training, validating, and deploying deep learning and machine learning models at scale with high performance.",
          items: [
            "Deep learning network construction using PyTorch and TensorFlow",
            "High-throughput model serving optimization (vLLM, TensorRT)",
            "Hyperparameter tuning sweeps using Optuna and Ray Tune"
          ]
        },
        {
          id: "data-engineering",
          title: "Data Engineering",
          description: "Designing high-throughput, low-latency data pipelines and unified analytics grids to feed ML and BI platforms.",
          items: [
            "Real-time streaming pipelines utilizing Apache Kafka and Flink",
            "Data lakehouse engineering with Apache Iceberg and Delta Lake",
            "ETL/ELT transformations built with dbt and Apache Airflow"
          ]
        },
        {
          id: "business-intelligence-analytics",
          title: "Business Intelligence & Analytics",
          description: "Designing interactive dashboards and telemetry panels for data-driven enterprise choices.",
          items: [
            "Enterprise telemetry consolidation dashboards (PowerBI, Tableau)",
            "Clickstream tracking and behavioral user funnel analysis",
            "Automated reporting engines with Slack and email push alerts"
          ]
        },
        {
          id: "predictive-analytics",
          title: "Predictive Analytics",
          description: "Utilizing historical datasets to forecast market trends, customer behaviors, demand patterns, and risk factors.",
          items: [
            "Time-series forecasting models using Prophet and DeepAR",
            "Customer churn and lifetime value (LTV) predictive pipelines",
            "Real-time fraud and anomaly detection algorithms for financial safety"
          ]
        },
        {
          id: "data-governance",
          title: "Data Governance",
          description: "Enforcing data compliance, cataloging, lineage tracking, and security controls across all sources.",
          items: [
            "Automated data cataloging and metadata mapping (Apache Atlas)",
            "End-to-end data lineage tracking for audit transparency",
            "Granular role-based access control (RBAC) and dynamic data masking"
          ]
        },
        {
          id: "mlops-ai-operations",
          title: "MLOps & AI Operations",
          description: "Automating the complete lifecycle of ML models from training to production monitoring.",
          items: [
            "Continuous training (CT) loops using Kubeflow and MLflow",
            "Centralized model registries and deployment version audits",
            "Real-time drift detection and automated fallback routing"
          ]
        }
      ]}
      ctaText="Hire AI Engineers"
    />
  );
}
