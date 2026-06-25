import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Overview",
  description: "Devopstrio helps enterprises build, modernize and scale mission-critical AI platforms, cloud infrastructure and digital products.",
  alternates: {
    canonical: "/about/company-overview"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
