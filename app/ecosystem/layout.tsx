import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Ecosystem & Cloud Architecture Hub | Devopstrio",
  description: "Devopstrio's comprehensive engineering ecosystem integrating technology stack, global delivery, accelerators, and innovation labs.",
  alternates: {
    canonical: "https://devopstrio.co.uk/ecosystem",
  },
};

export default function EcosystemLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
