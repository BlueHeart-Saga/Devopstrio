import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function OpenInnovationPage() {
  return (
    <EcosystemPageLayout
      title="Open Innovation & Startup Hub"
      category="Overview"
      badge="Open Innovation"
      subtitle="Co-engineering with leading startups, participating in industrial-academic research alliances, and establishing university talent pipelines."
      stats={[
        { value: "15+", label: "Startup Partners" },
        { value: "4+", label: "Research Projects" },
        { value: "5+", label: "Academic Labs" },
        { value: "100+", label: "Talent Recruits" }
      ]}
      details={[
        {
          title: "Startup & Co-Innovation Programs",
          description: "Providing architecture advisory, cloud credits support, and integration pipelines for early-stage B2B SaaS startups.",
          items: [
            "Co-innovation programs delivering joint go-to-market solutions",
            "Technical scaling advisory and cloud cost optimization reviews",
            "Direct API integration templates connecting to major platforms"
          ]
        },
        {
          title: "Academic & Research Collaborations",
          description: "Partnering with universities and scientific research labs to model decentralized networks and machine learning security.",
          items: [
            "Joint academic research projects focusing on zero-trust models",
            "Student internship programs in our AI and Cloud R&D Labs",
            "Open source contribution and technical review standards"
          ]
        }
      ]}
      ctaText="Partner with our Innovation Hub"
    />
  );
}
