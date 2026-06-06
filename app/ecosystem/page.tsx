import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function EcosystemLandingPage() {
  return (
    <EcosystemPageLayout
      title="Ecosystem"
      category="Overview"
      badge="Enterprise Core"
      subtitle="Integrated strategic technology alliances, research innovation labs, scalable platforms, and global delivery channels co-engineered to scale secure digital operations."
      stats={[
        { value: "525+", label: "Ecosystem Experts" },
        { value: "7+", label: "Strategic Alliances" },
        { value: "6+", label: "R&D Innovation Labs" },
        { value: "2500+", label: "Projects Delivered" }
      ]}
      details={[
        {
          title: "Technology Partnerships",
          description: "Co-engineering with cloud and enterprise platform leaders to build compliant, high-performing integration templates.",
          items: [
            "Premier status with AWS, Azure, Google Cloud",
            "Specialized integration playbooks for ServiceNow, Oracle, SAP, and Cisco",
            "Over 500+ certified architects and platform administrators globally"
          ]
        },
        {
          title: "Innovation & Research Labs",
          description: "Prototyping next-generation infrastructures, autonomous agents, and green cloud resource schedulers.",
          items: [
            "AI & GenAI Lab focusing on semantic router pipelines and LLMs fine-tuning",
            "Cloud Innovation Lab engineering green serverless computing virtualizations",
            "Cybersecurity Lab modeling zero-trust edge network vulnerabilities"
          ]
        },
        {
          title: "Hardened Platforms & Solutions",
          description: "Proprietary frameworks and DevOps accelerators built to reduce infrastructure setup times by up to 90%.",
          items: [
            "FinOps cost intelligence engines and compliance auditing dashboards",
            "Multi-tenant SaaS boilerplate networks with integrated tenant isolation",
            "Hardened Kubernetes blueprints pre-configured for regulatory frameworks"
          ]
        },
        {
          title: "Global SRE Delivery Corridor",
          description: "Distributed execution network aligning with stringent region-based security and uptime parameters.",
          items: [
            "24/7/365 follow-the-sun monitoring and automated database failovers",
            "Local compliance advisory hubs in the UK, Europe, Middle East, and APAC",
            "Seamless talent networks sourcing senior SRE, backend, and cloud engineers"
          ]
        }
      ]}
      ctaText="Explore Our Ecosystem Pillars"
    />
  );
}
