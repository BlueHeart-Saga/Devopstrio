import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability, Green Cloud & CSR | Devopstrio",
  description: "Devopstrio's commitment to sustainable cloud computing, zero-carbon infrastructure, community empowerment, and environmental responsibility.",
  alternates: {
    canonical: "https://devopstrio.co.uk/about/sustainability-csr",
  },
};

export default function CSRLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
