import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud & AI Accelerators & Landing Zone Modules | Devopstrio",
  description: "Accelerate enterprise deployments with Devopstrio's open-source IaC modules, Azure landing zones, GenAI starters, and platform blueprints.",
  alternates: {
    canonical: "https://devopstrio.co.uk/ecosystem/accelerators-frameworks",
  },
};

export default function AcceleratorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
