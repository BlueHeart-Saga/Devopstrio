import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function InnovationLabsPage() {
  return (
    <EcosystemPageLayout
      title="Innovation Labs"
      category="Overview"
      badge="Research"
      subtitle="Devopstrio engineering labs dedicated to next-generation experimentation, open source contribution, and pioneering client prototypes."
      stats={[
        { value: "6+", label: "R&D Labs" },
        { value: "45+", label: "Active Researchers" },
        { value: "30+", label: "Prototypes Produced" },
        { value: "50+", label: "OSS Contributions" }
      ]}
      details={[
        {
          title: "Artificial Intelligence Lab",
          description: "Focusing on agentic workflows, fine-tuning foundational models, establishing MLOps pipelines, and semantic routing structures.",
          items: [
            "Autonomous workflow agents using LangChain and CrewAI",
            "Fine-tuning techniques for custom enterprise LLMs",
            "Low-latency semantic caches for search queries"
          ]
        },
        {
          title: "Cloud Innovation Lab",
          description: "Pioneering green computing metrics, optimizing serverless runtimes, and designing edge virtualization grids.",
          items: [
            "Carbon-aware cloud infrastructure scheduler scripts",
            "Serverless cold start reduction and memory scaling systems",
            "Decentralized edge computing containers"
          ]
        },
        {
          title: "Cybersecurity & Cryptography Lab",
          description: "Simulating zero-trust environments, automating compliance posture checks, and testing homomorphic encryption models.",
          items: [
            "Zero-trust network simulator frameworks",
            "Continuous security posture scoring scripts",
            "Homomorphic encryption prototypes for database records"
          ]
        },
        {
          title: "Data Mesh & Analytics Lab",
          description: "Building low-latency real-time data streaming structures and decentralized data mesh architectures.",
          items: [
            "Decentralized data product registry architectures",
            "Real-time event processing using Apache Kafka and Flink",
            "Distributed ledger databases for tracking supply chains"
          ]
        }
      ]}
      ctaText="Co-Innovate in Our Labs"
    />
  );
}
