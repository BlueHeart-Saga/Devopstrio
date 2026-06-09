import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata = {
  title: "IT Consulting Services | Devopstrio",
  description: "Leverage expert advisory on enterprise architecture, cloud strategy, cybersecurity posture, AI implementation, and technology assessments. Build your 3-to-5 year IT roadmap with Devopstrio.",
};

export default function ITConsultingPage() {
  return (
    <ServicePageLayout
      title="IT Consulting"
      badge="Technical Advisory"
      subtitle="Auditing existing infrastructures, drafting digital transformation roadmaps, evaluating software stack alternatives, and advising on security policies."
      stats={[
        { value: "150+", label: "Architectures Audited" },
        { value: "100%", label: "Custom Roadmaps" },
        { value: "$20M+", label: "IT Budget Optimized" },
        { value: "15+", label: "Years Lead Experience" }
      ]}
      capabilities={[
        {
          id: "technology-consulting",
          title: "Technology Consulting",
          description: "Tailored tech stacks recommendations and legacy modernization roadmap drafts.",
          items: [
            "Cost-benefit analysis comparing SaaS integrations vs. custom development",
            "Staged technology transition diagrams minimizing business friction",
            "Hardware/software lifecycle evaluations and replacement suggestions"
          ]
        },
        {
          id: "enterprise-architecture",
          title: "Enterprise Architecture",
          description: "Designing high-level system diagrams that are scalable, reliable, and compliant.",
          items: [
            "Distributed system component layouts and interaction diagrams",
            "Enterprise service bus and event broker configurations",
            "System resilience blueprints with multi-region failover and active sync"
          ]
        },
        {
          id: "cloud-consulting",
          title: "Cloud Consulting",
          description: "Strategizing cloud adoption, cost estimation, and container adoption paths.",
          items: [
            "Public cloud cost modeling and budget forecasts",
            "Migration strategy selections (Rehost, Replatform, Refactor)",
            "Multi-account landing zone specifications and access hierarchies"
          ]
        },
        {
          id: "ai-consulting",
          title: "AI Consulting",
          description: "Analyzing business processes to locate automation and generative AI opportunities.",
          items: [
            "AI feasibility audits and project scoping workshops",
            "Data availability and preparation requirements analyses",
            "AI safety, alignment, and security policy drafts"
          ]
        },
        {
          id: "cybersecurity-consulting",
          title: "Cybersecurity Consulting",
          description: "Designing corporate security programs and conducting cyber risk assessments.",
          items: [
            "Business impact analysis (BIA) and risk register creation",
            "Custom incident response planning and tabletop exercises",
            "Security policy manual creation and compliance mapping"
          ]
        },
        {
          id: "digital-transformation-consulting",
          title: "Digital Transformation Consulting",
          description: "Advising on culture shift, digital customer acquisition, and workflow automation.",
          items: [
            "Corporate design thinking workshops and technical coaching",
            "Agile organization restructuring roadmaps",
            "Digital capability assessments and maturity index scoring"
          ]
        },
        {
          id: "it-strategy-roadmap",
          title: "IT Strategy & Roadmap",
          description: "Aligning corporate IT budgets and projects with long-term business goals.",
          items: [
            "3-to-5-year IT capabilities roadmap creation",
            "Capital expenditure (CapEx) vs. Operating expenditure (OpEx) strategies",
            "Skill gap analyses within internal IT departments"
          ]
        },
        {
          id: "technology-assessment",
          title: "Technology Assessment",
          description: "Comprehensive code reviews, architecture reviews, and scalability audits.",
          items: [
            "Static code analysis reports checking formatting and security patterns",
            "Infrastructure deployment drift evaluations and configuration audits",
            "Performance audit reports detailing slow query logs and API responses"
          ]
        }
      ]}
      ctaText="Request a Technical Assessment"
    />
  );
}
