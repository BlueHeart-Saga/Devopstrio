import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function CybersecurityLabPage() {
  return (
    <EcosystemPageLayout
      title="Cybersecurity Lab"
      category="Innovation Labs"
      categoryUrl="/ecosystem/innovation-labs"
      badge="Research Lab"
      subtitle="Testing zero-trust models, homomorphic encryption algorithms, dynamic firewall segmentations, and automated security scanning."
      stats={[
        { value: "8+", label: "Security Experts" },
        { value: "0", label: "Zero-Day Vulnerability" },
        { value: "100%", label: "SOC2 Compliance" },
        { value: "5+", label: "Hardened Blueprints" }
      ]}
      details={[
        {
          title: "Zero-Trust Infrastructure Testing",
          description: "Simulating attacks within ephemeral environments to test dynamic boundary segmentations and token authentication methods.",
          items: [
            "Ephemeral sandbox testnets with automated chaos network injection",
            "Dynamic identity credential mapping utilizing HashiCorp Vault",
            "Real-time access token revocation and security posture scoring"
          ]
        },
        {
          title: "Advanced Cryptography & Homomorphic Encryption",
          description: "Testing homomorphic encryption models that enable analytical pipelines to run queries on encrypted database records.",
          items: [
            "Encrypted query processing frameworks using Microsoft SEAL",
            "Hardened Key management and envelope encryption setups",
            "Post-quantum cryptographic algorithm compatibility audits"
          ]
        }
      ]}
      ctaText="Co-Innovate in Security Lab"
    />
  );
}
