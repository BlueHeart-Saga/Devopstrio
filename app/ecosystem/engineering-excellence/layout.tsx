import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Excellence & SRE Automation Practices | Devopstrio",
  description: "Devopstrio drives engineering excellence through SRE automation, DevSecOps integration, quality engineering, and continuous deployment.",
  alternates: {
    canonical: "https://devopstrio.co.uk/ecosystem/engineering-excellence",
  },
};

export default function EngineeringExcellenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
