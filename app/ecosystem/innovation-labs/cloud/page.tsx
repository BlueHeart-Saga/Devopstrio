import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function CloudLabPage() {
  return (
    <EcosystemPageLayout
      title="Cloud Innovation Lab"
      category="Innovation Labs"
      categoryUrl="/ecosystem/innovation-labs"
      badge="Research Lab"
      subtitle="Pioneering green computing metrics, carbon-aware cluster schedulers, serverless optimization, and edge computing grids."
      stats={[
        { value: "10+", label: "Cloud Researchers" },
        { value: "15%", label: "Carbon Emitted Less" },
        { value: "3+", label: "OSS Schedulers" },
        { value: "50ms", label: "Serverless Response" }
      ]}
      details={[
        {
          title: "Green Computing Initiatives",
          description: "Engineering carbon-aware resource schedulers that shift workloads dynamically to regions with lower grid carbon intensity.",
          items: [
            "Integration with real-time carbon intensity APIs (e.g., ElectricityMaps)",
            "Dynamic Kubernetes pod scheduling based on grid carbon intensity",
            "Auto-scaling adjustments during peak grid strain periods"
          ]
        },
        {
          title: "Serverless & Edge Compute",
          description: "Optimizing WebAssembly (Wasm) runtimes, reducing container startup times, and building distributed edge grids.",
          items: [
            "Wasm edge container orchestration using K3s structures",
            "Serverless function lifecycle caching and snapshotting",
            "Distributed CDN edge function execution networks"
          ]
        }
      ]}
      ctaText="Co-Innovate in Cloud Lab"
    />
  );
}
