import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships & Certifications | Devopstrio",
  description: "Our industry certifications and co-engineering alliances with AWS, Microsoft Azure, Google Cloud, and Oracle.",
  alternates: {
    canonical: "/about/partnerships-certifications"
  }
};

export default function PartnershipsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
