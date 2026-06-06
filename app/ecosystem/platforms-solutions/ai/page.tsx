import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function AISolutionsPage() {
  return (
    <EcosystemPageLayout
      title="AI Solutions"
      category="Platforms & Solutions"
      categoryUrl="/ecosystem/platforms-solutions"
      badge="Solutions"
      subtitle="Deploying autonomous workflow execution agents, semantic company search tools, and live contact center sentiment analyzers."
      stats={[
        { value: "40+", label: "Active Deployments" },
        { value: "3+", label: "Core Products" },
        { value: "98%", label: "Accuracy Achieved" },
        { value: "10x", label: "Workflow Velocity" }
      ]}
      details={[
        {
          title: "Autonomous Enterprise Workers",
          description: "Configuring self-improving agents that coordinate tasks, use internal company APIs, and process unstructured communications.",
          items: [
            "Coordinated worker agents utilizing LangChain orchestration",
            "Automatic task validation and error loop checking",
            "Direct secure connectivity with internal database endpoints"
          ]
        },
        {
          title: "Semantic Assistant & Contact Center AI",
          description: "Enabling semantic document search across petabytes of files and analyzing live client interactions for real-time sentiment scoring.",
          items: [
            "Dense vector embeddings index databases (Pinecone/Milvus)",
            "Automatic document parsing, chunking, and index refreshes",
            "Live streaming voice transcripts with instant agent script suggestions"
          ]
        }
      ]}
      ctaText="Request an AI Demo"
    />
  );
}
