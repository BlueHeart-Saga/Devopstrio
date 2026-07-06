import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability & CSR | Devopstrio",
  description: "Our environmental pledge to green cloud hosting and community engineering initiatives.",
  alternates: {
    canonical: "/about/sustainability-csr"
  }
};

export default function SustainabilityLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
