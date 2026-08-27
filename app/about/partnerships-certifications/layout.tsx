import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships & Enterprise Certifications | Devopstrio",
  description: "Devopstrio's strategic cloud partnerships with AWS, Azure, GCP, and ISO certifications driving enterprise engineering assurance.",
  alternates: {
    canonical: "https://devopstrio.co.uk/about/partnerships-certifications",
  },
};

export default function PartnershipsCertificationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
