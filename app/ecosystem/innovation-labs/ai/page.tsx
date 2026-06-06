import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function AILabPage() {
  return (
    <EcosystemPageLayout
      title="AI Innovation Lab"
      category="Innovation Labs"
      categoryUrl="/ecosystem/innovation-labs"
      badge="Research Lab"
      subtitle="Engineering next-generation agentic workflows, multi-agent frameworks, semantic caching, and LLM fine-tuning schemas."
      stats={[
        { value: "15+", label: "GenAI Experts" },
        { value: "8+", label: "Agent Frameworks" },
        { value: "40%", label: "Latency Reduced" },
        { value: "12+", label: "Research Papers" }
      ]}
      details={[
        {
          title: "Agentic Workflows",
          description: "Creating autonomous agents capable of performing complex multi-step workflows, interacting with external APIs, and correcting their own errors.",
          items: [
            "Autonomous multi-agent systems using LangGraph and Autogen",
            "Task breakdown and execution pipelines for complex queries",
            "Tool-use and API integration schemas for LLMs"
          ]
        },
        {
          title: "Model Optimization & RAG",
          description: "Fine-tuning models on domain-specific datasets and designing hybrid Retrieval-Augmented Generation systems.",
          items: [
            "Parameter-Efficient Fine-Tuning (PEFT) and LoRA scripts",
            "Hybrid lexical and semantic vector databases search systems",
            "Low-latency semantic caching models for prompt responses"
          ]
        }
      ]}
      ctaText="Co-Innovate in AI Lab"
    />
  );
}
