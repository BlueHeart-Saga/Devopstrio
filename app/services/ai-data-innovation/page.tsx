import { ServicePageLayout } from "@/components/ServicePageLayout";

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
          title: "Generative AI & LLMs",
          description: "Building production-grade autonomous agents, integrating semantic routing protocols, and fine-tuning models on domain-specific datasets.",
          items: [
            "Autonomous multi-agent workflows using LangGraph and Autogen",
            "Custom LLM fine-tuning schedules with PEFT and LoRA",
            "Low-latency semantic caching models for fast prompt responses"
          ]
        },
        {
          title: "AI Strategy Consulting & Audits",
          description: "Evaluating feasibility, defining deployment roadmaps, auditing security configurations, and setting up strict governance panels.",
          items: [
            "Comprehensive security posture scores for AI networks",
            "Data compliance audits ensuring GDPR/HIPAA compliance",
            "Custom ROI metrics boards tracking agentic productivity"
          ]
        }
      ]}
      ctaText="Hire AI Engineers"
    />
  );
}
