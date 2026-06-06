import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function CiscoPartnershipPage() {
  return (
    <EcosystemPageLayout
      title="Cisco Partnership"
      category="Partnerships"
      categoryUrl="/ecosystem/partnerships"
      badge="Gold Integrator"
      subtitle="Gold Integrator status driving enterprise SD-WAN topologies, network segmentation, and Zero-Trust network integrations."
      stats={[
        { value: "150+", label: "Network Deployments" },
        { value: "30+", label: "CCIE Engineers" },
        { value: "Gold", label: "Integrator Level" },
        { value: "100%", label: "Zero-Trust Compliance" }
      ]}
      details={[
        {
          title: "SD-WAN Network Configurations",
          description: "Configuring high-bandwidth, redundant networks connecting remote offices, manufacturing plants, and datacenters.",
          items: [
            "Designing SD-WAN topologies with automated traffic routing rules",
            "Configuring Cisco Catalyst switches and ISR routers",
            "Setting up redundant network failovers with zero-packet-loss"
          ]
        },
        {
          title: "Zero-Trust Security & Access",
          description: "Deploying Identity Services Engine (ISE) and Duo multi-factor authentication systems across all connection endpoints.",
          items: [
            "ISE policy configurations for network segmentation and profiling",
            "Duo MFA integration across corporate networks and VPN clients",
            "Cisco Secure Firewall rule audit and tuning"
          ]
        }
      ]}
      ctaText="Connect with a Network Architect"
    />
  );
}
