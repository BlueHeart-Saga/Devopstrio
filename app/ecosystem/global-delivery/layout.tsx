import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Delivery Network & Follow-the-Sun Support | Devopstrio",
  description: "Discover Devopstrio's global delivery network, regional engineering hubs across UK, Europe, and India, and 24/7 Follow-the-Sun support.",
  alternates: {
    canonical: "https://devopstrio.co.uk/ecosystem/global-delivery",
  },
};

export default function GlobalDeliveryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
