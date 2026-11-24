import React from "react";
import { EngagementType } from "@/data/accelerators/accelerators-registry";
import { ImplementationVariant } from "./variants/ImplementationVariant";
import { AssessmentVariant } from "./variants/AssessmentVariant";
import { AdoptionVariant } from "./variants/AdoptionVariant";
import { WorkshopVariant } from "./variants/WorkshopVariant";
import { AdvisoryVariant } from "./variants/AdvisoryVariant";
import { AcceleratorVariant } from "./variants/AcceleratorVariant";

interface TechnicalApproachProps {
  offeringCode: string;
  engagementType: EngagementType;
}

const DIAGRAM_MAP: Record<string, { src: string; title: string }> = {
  "007": {
    src: "/diagrams/offerings/007-implementation-topology.svg",
    title: "AI Landing Zone deployment topology"
  },
  "002": {
    src: "/diagrams/offerings/002-assessment-method.svg",
    title: "Microsoft 365 Copilot readiness assessment method"
  },
  "001": {
    src: "/diagrams/offerings/001-adoption-path.svg",
    title: "Copilot adoption and enablement path"
  },
  "009": {
    src: "/diagrams/offerings/009-workshop-flow.svg",
    title: "AI envisioning workshop flow"
  },
  "015": {
    src: "/diagrams/offerings/015-governance-model.svg",
    title: "Responsible AI governance operating model"
  },
  "067": {
    src: "/diagrams/offerings/067-accelerator-matrix.svg",
    title: "AI subscription vending architecture matrix"
  }
};

export function TechnicalApproach({ offeringCode, engagementType }: TechnicalApproachProps) {
  const diagram = DIAGRAM_MAP[offeringCode];

  const renderVariantDetails = () => {
    switch (engagementType) {
      case "Implementation":
        return <ImplementationVariant />;
      case "Assessment":
        return <AssessmentVariant />;
      case "Adoption":
        return <AdoptionVariant />;
      case "Workshop":
        return <WorkshopVariant />;
      case "Advisory":
        return <AdvisoryVariant />;
      case "Accelerator":
        return <AcceleratorVariant />;
      default:
        return <ImplementationVariant />;
    }
  };

  return (
    <div className="space-y-12">
      {/* Verified Technical Diagram */}
      {diagram && (
        <div className="bg-[#0A0A0A] rounded-[24px] p-6 lg:p-8 border border-zinc-800/80 shadow-lg hover-lift">
          <div className="text-xs uppercase tracking-wider text-rose-500 font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span>Technical Architecture & Methodology Flow</span>
          </div>
          {/* Responsive scroll container: scrolls inside container at 360px, never the page */}
          <div className="w-full overflow-x-auto pb-2">
            <div className="min-w-[640px] md:min-w-full">
              <img
                src={diagram.src}
                alt={diagram.title}
                className="w-full h-auto block rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      {/* Structured Text Matrix / Demarcation / Scored Breakdown */}
      {renderVariantDetails()}
    </div>
  );
}
