import type { ReactElement } from "react";

export type EngagementType =
  | "Implementation"
  | "Assessment"
  | "Adoption"
  | "Advisory"
  | "Workshop"
  | "Accelerator";

/*
  Usage (the hero must be position: relative; overflow: hidden):

    <header className="relative overflow-hidden">
      <OfferingHeroBackground engagementType={offering.engagementType} />
      <div className="relative z-10"> ...title, description... </div>
    </header>

  Import styles/hero-backgrounds.css once (globally or in the layout).
  Decorative only: aria-hidden, no focusable elements.
*/

function Grid(): ReactElement {
  const verticals = Array.from({ length: 21 }, (_, i) => i * 60);
  const horizontals = Array.from({ length: 11 }, (_, i) => i * 60);
  return (
    <g className="hero-bg__grid">
      {verticals.map((x) => (
        <line key={`v${x}`} x1={x} y1={0} x2={x} y2={600} />
      ))}
      {horizontals.map((y) => (
        <line key={`h${y}`} x1={0} y1={y} x2={1200} y2={y} />
      ))}
    </g>
  );
}

function Implementation(): ReactElement {
  const nodes: [number, number][] = [[120, 300], [480, 300], [480, 180], [480, 460], [900, 180], [900, 460]];
  return (
    <>
      <path className="hero-bg__line" d="M120 300 H480 V180 H900" />
      <path className="hero-bg__line" d="M480 300 V460 H900" />
      <path className="hero-bg__line" d="M900 180 V460" />
      {nodes.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={5} className="hero-bg__node" />
      ))}
      <g className="hero-bg__motion">
        <circle r={3} className="hero-bg__accent">
          <animateMotion dur="9s" repeatCount="indefinite" path="M120 300 H480 V180 H900" />
        </circle>
        <circle r={3} className="hero-bg__accent">
          <animateMotion dur="11s" begin="2s" repeatCount="indefinite" path="M480 300 V460 H900" />
        </circle>
      </g>
    </>
  );
}

function Assessment(): ReactElement {
  const points: ReactElement[] = [];
  for (let c = 0; c < 20; c++) {
    for (let r = 0; r < 9; r++) {
      points.push(
        <circle key={`${c}-${r}`} cx={60 + c * 60} cy={60 + r * 60} r={2} className="hero-bg__checkpoint" />
      );
    }
  }
  return (
    <>
      {points}
      <rect className="hero-bg__scan" x={0} y={0} width={2} height={600} />
    </>
  );
}

function Adoption(): ReactElement {
  const nodes: [number, number, number][] = [
    [160, 420, 0], [340, 300, 1], [520, 380, 2], [700, 220, 3], [880, 320, 4], [1040, 180, 5],
  ];
  return (
    <>
      <path className="hero-bg__line hero-bg__draw" pathLength={1} d="M160 420 L340 300 L520 380 L700 220 L880 320 L1040 180" />
      <path className="hero-bg__line hero-bg__draw" pathLength={1} d="M340 300 L700 220 L1040 180" />
      {nodes.map(([x, y, i]) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={6}
          className="hero-bg__node"
          style={{ ["--d" as string]: `${i * 0.4}s` }}
        />
      ))}
    </>
  );
}

function Advisory(): ReactElement {
  return (
    <>
      <line className="hero-bg__line" x1={0} y1={300} x2={1200} y2={300} />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} className="hero-bg__ring" cx={900} cy={300} r={160} style={{ ["--d" as string]: `${i * 4}s` }} />
      ))}
    </>
  );
}

function Workshop(): ReactElement {
  const dots: ReactElement[] = [];
  for (let c = 0; c < 24; c++) {
    for (let r = 0; r < 10; r++) {
      const delay = ((c * 7 + r * 3) % 9) * 0.5;
      dots.push(
        <circle
          key={`${c}-${r}`}
          cx={50 + c * 50}
          cy={50 + r * 55}
          r={1.6}
          className="hero-bg__dot"
          style={{ ["--d" as string]: `${delay}s` }}
        />
      );
    }
  }
  return <>{dots}</>;
}

function Accelerator(): ReactElement {
  return (
    <>
      <line className="hero-bg__line" x1={0} y1={300} x2={1200} y2={300} />
      {Array.from({ length: 6 }, (_, i) => (
        <rect
          key={i}
          className="hero-bg__block"
          x={80 + i * 180}
          y={250}
          width={150}
          height={100}
          rx={2}
          style={{ ["--d" as string]: `${i * 1.2}s` }}
        />
      ))}
    </>
  );
}

const VARIANTS: Record<EngagementType, { className: string; render: () => ReactElement }> = {
  Implementation: { className: "hero-bg--implementation", render: Implementation },
  Assessment: { className: "hero-bg--assessment", render: Assessment },
  Adoption: { className: "hero-bg--adoption", render: Adoption },
  Advisory: { className: "hero-bg--advisory", render: Advisory },
  Workshop: { className: "hero-bg--workshop", render: Workshop },
  Accelerator: { className: "hero-bg--accelerator", render: Accelerator },
};

export function OfferingHeroBackground({ engagementType }: { engagementType: EngagementType }) {
  const variant = VARIANTS[engagementType];
  return (
    <div aria-hidden="true" className={`hero-bg ${variant.className}`}>
      <svg className="hero-bg__svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" focusable="false">
        <Grid />
        {variant.render()}
      </svg>
    </div>
  );
}
