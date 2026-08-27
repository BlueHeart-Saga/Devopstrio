import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Enterprise Cloud & AI Solutions | Devopstrio",
  description: "Tailored cloud-native, AI, and DevOps solutions for banking, healthcare, retail, government, media, and telecommunications.",
  alternates: {
    canonical: "https://devopstrio.co.uk/industries",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
