"use client";

import React, { useEffect, useRef } from "react";

/* =========================================================================
 * 3D GLOBE HORIZON CANVAS
 * An ultra-high-performance 3D illuminated digital Earth horizon
 * with glowing particle continents, constellation network mesh,
 * transatlantic/intercontinental light beams, and atmospheric aurora bloom.
 * Matches Devopstrio's cyber-aesthetic and the user's reference image 1:1.
 * ========================================================================= */

interface Point3D {
  x: number;
  y: number;
  z: number;
  baseLat: number;
  baseLon: number;
  alpha: number;
  size: number;
  isHub?: boolean;
  hubName?: string;
}

interface ArcConnection {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
}

export function GlobeHorizonCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let rotation = -0.6; // initial longitude angle focusing on UK / Europe / India / Americas
    let targetTiltX = 0.22;
    let tiltX = 0.22;
    let mouseX = 0;
    let mouseY = 0;

    // High DPI scaling
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / width - 0.5;
      mouseY = (e.clientY - rect.top) / height - 0.5;
      targetTiltX = 0.22 - mouseY * 0.15;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Generate Continent Clusters (Lat in radians [-pi/2, pi/2], Lon in radians [-pi, pi])
    const landClusters = [
      // Europe & UK
      { minLat: 36, maxLat: 62, minLon: -10, maxLon: 35, count: 280 },
      // North America (US / Canada)
      { minLat: 25, maxLat: 58, minLon: -125, maxLon: -65, count: 340 },
      // South America
      { minLat: -35, maxLat: 10, minLon: -75, maxLon: -38, count: 200 },
      // Africa
      { minLat: -32, maxLat: 34, minLon: -15, maxLon: 48, count: 320 },
      // India & South Asia
      { minLat: 8, maxLat: 34, minLon: 68, maxLon: 92, count: 260 },
      // East Asia / Japan
      { minLat: 20, maxLat: 50, minLon: 100, maxLon: 142, count: 260 },
      // Australia
      { minLat: -38, maxLat: -12, minLon: 115, maxLon: 152, count: 140 },
      // Random ocean telemetry dots
      { minLat: -60, maxLat: 70, minLon: -180, maxLon: 180, count: 220 }
    ];

    const toRad = (deg: number) => (deg * Math.PI) / 180;

    const points: Point3D[] = [];

    landClusters.forEach((cluster) => {
      for (let i = 0; i < cluster.count; i++) {
        const latDeg = cluster.minLat + Math.random() * (cluster.maxLat - cluster.minLat);
        const lonDeg = cluster.minLon + Math.random() * (cluster.maxLon - cluster.minLon);
        points.push({
          x: 0,
          y: 0,
          z: 0,
          baseLat: toRad(latDeg),
          baseLon: toRad(lonDeg),
          alpha: 0.25 + Math.random() * 0.75,
          size: 0.8 + Math.random() * 1.6
        });
      }
    });

    // Strategic Devopstrio Global Delivery Hubs
    const hubs = [
      { name: "London (UK Hub)", lat: 51.5, lon: -0.12 },
      { name: "New York (US Hub)", lat: 40.71, lon: -74.0 },
      { name: "Frankfurt (EU Hub)", lat: 50.11, lon: 8.68 },
      { name: "India (24×7 Operations)", lat: 13.08, lon: 80.27 },
      { name: "Singapore (APAC Node)", lat: 1.35, lon: 103.82 }
    ];

    const hubIndices: number[] = [];
    hubs.forEach((h) => {
      const idx = points.length;
      hubIndices.push(idx);
      points.push({
        x: 0,
        y: 0,
        z: 0,
        baseLat: toRad(h.lat),
        baseLon: toRad(h.lon),
        alpha: 1,
        size: 3.5,
        isHub: true,
        hubName: h.name
      });
    });

    // Intercontinental Network Arcs (Connecting UK, US, EU, India, APAC)
    const arcPairs = [
      [0, 1], // London <-> New York
      [0, 2], // London <-> Frankfurt
      [2, 3], // Frankfurt <-> India
      [0, 3], // London <-> India
      [3, 4], // India <-> Singapore
      [1, 3]  // New York <-> India
    ];

    const arcs: ArcConnection[] = arcPairs.map(([fromHub, toHub]) => ({
      fromIndex: hubIndices[fromHub],
      toIndex: hubIndices[toHub],
      progress: Math.random(),
      speed: 0.004 + Math.random() * 0.004
    }));

    // Floating Constellation Network Nodes in Upper Atmosphere
    const constellationNodes: { lat: number; lon: number; alt: number; phase: number }[] = [];
    for (let i = 0; i < 45; i++) {
      const lat = toRad(-30 + Math.random() * 90);
      const lon = toRad(-180 + Math.random() * 360);
      const alt = 1.06 + Math.random() * 0.08;
      const phase = Math.random() * Math.PI * 2;
      constellationNodes.push({ lat, lon, alt, phase });
    }

    let frame = 0;

    const render = () => {
      frame++;
      rotation += 0.0018 + mouseX * 0.002;
      tiltX += (targetTiltX - tiltX) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Globe center & radius setup
      // Center placed in the lower portion so the upper curvature dominates the hero
      const cx = width * 0.5;
      const cy = height * 0.95;
      const R = Math.max(width * 0.58, height * 0.82);

      // 1. Cosmic Atmosphere Radial Bloom behind Earth Horizon
      const auraGradient = ctx.createRadialGradient(cx, cy - R * 0.7, R * 0.2, cx, cy, R * 1.45);
      auraGradient.addColorStop(0, "rgba(56, 189, 248, 0.25)"); // bright cyan core
      auraGradient.addColorStop(0.3, "rgba(99, 102, 241, 0.18)"); // electric indigo
      auraGradient.addColorStop(0.6, "rgba(244, 63, 94, 0.10)"); // subtle rose accent
      auraGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = auraGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.45, 0, Math.PI * 2);
      ctx.fill();

      // 2. Earth Horizon Base Disc (Dark Ocean Shadow)
      const oceanGrad = ctx.createRadialGradient(cx, cy - R * 0.9, R * 0.1, cx, cy, R);
      oceanGrad.addColorStop(0, "rgba(7, 14, 30, 0.95)");
      oceanGrad.addColorStop(0.6, "rgba(3, 7, 18, 0.98)");
      oceanGrad.addColorStop(1, "rgba(0, 0, 0, 1)");

      ctx.fillStyle = oceanGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // 3. Project and draw continent landmass particles
      const cosTilt = Math.cos(tiltX);
      const sinTilt = Math.sin(tiltX);

      const projectedPoints: {
        sx: number;
        sy: number;
        sz: number;
        visible: boolean;
        alpha: number;
        size: number;
        isHub?: boolean;
        hubName?: string;
      }[] = [];

      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        const lon = pt.baseLon + rotation;
        const lat = pt.baseLat;

        // 3D Cartesian coordinates on sphere
        const x0 = R * Math.cos(lat) * Math.sin(lon);
        const y0 = -R * Math.sin(lat);
        const z0 = R * Math.cos(lat) * Math.cos(lon);

        // Tilt around X-axis
        const y1 = y0 * cosTilt - z0 * sinTilt;
        const z1 = y0 * sinTilt + z0 * cosTilt;

        // Perspective projection
        const scale = 1200 / (1200 + z1);
        const sx = cx + x0 * scale;
        const sy = cy + y1 * scale;

        // Only visible on the front-facing hemisphere
        const visible = z1 > -R * 0.15;
        projectedPoints.push({
          sx,
          sy,
          sz: z1,
          visible,
          alpha: pt.alpha * Math.max(0, (z1 + R * 0.2) / (R * 1.2)),
          size: pt.size * scale,
          isHub: pt.isHub,
          hubName: pt.hubName
        });
      }

      // Draw normal particles
      for (let i = 0; i < projectedPoints.length; i++) {
        const p = projectedPoints[i];
        if (!p.visible || p.isHub) continue;

        const pulse = 0.85 + 0.15 * Math.sin(frame * 0.05 + i);
        ctx.fillStyle = `rgba(147, 197, 253, ${Math.min(1, p.alpha * pulse * 0.85)})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Floating Upper-Atmosphere Constellation Network (Matching 2nd image)
      const constellationProjected: { sx: number; sy: number; visible: boolean; sz: number }[] = [];

      for (let i = 0; i < constellationNodes.length; i++) {
        const node = constellationNodes[i];
        const lon = node.lon + rotation * 1.1;
        const lat = node.lat;
        const rNode = R * node.alt;

        const x0 = rNode * Math.cos(lat) * Math.sin(lon);
        const y0 = -rNode * Math.sin(lat);
        const z0 = rNode * Math.cos(lat) * Math.cos(lon);

        const y1 = y0 * cosTilt - z0 * sinTilt;
        const z1 = y0 * sinTilt + z0 * cosTilt;

        const scale = 1200 / (1200 + z1);
        const sx = cx + x0 * scale;
        const sy = cy + y1 * scale;
        const visible = z1 > 0;

        constellationProjected.push({ sx, sy, visible, sz: z1 });
      }

      // Draw constellation network lines
      ctx.lineWidth = 0.75;
      for (let i = 0; i < constellationProjected.length; i++) {
        const a = constellationProjected[i];
        if (!a.visible) continue;

        for (let j = i + 1; j < constellationProjected.length; j++) {
          const b = constellationProjected[j];
          if (!b.visible) continue;

          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const lineAlpha = (1 - dist / 85) * 0.35 * Math.min(1, a.sz / R);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }

        // Draw node dot
        ctx.fillStyle = `rgba(186, 230, 253, ${0.4 + 0.4 * Math.sin(frame * 0.08 + i)})`;
        ctx.beginPath();
        ctx.arc(a.sx, a.sy, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Intercontinental Flight-Path Arcs & Traveling Photons
      for (let i = 0; i < arcs.length; i++) {
        const arc = arcs[i];
        const p1 = projectedPoints[arc.fromIndex];
        const p2 = projectedPoints[arc.toIndex];

        if (!p1 || !p2 || !p1.visible || !p2.visible) continue;

        // Quadratic bezier arc lifting above earth
        const midX = (p1.sx + p2.sx) * 0.5;
        const midY = (p1.sy + p2.sy) * 0.5 - Math.min(65, Math.hypot(p1.sx - p2.sx, p1.sy - p2.sy) * 0.22);

        // Arc trace
        ctx.strokeStyle = "rgba(244, 63, 94, 0.30)";
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.moveTo(p1.sx, p1.sy);
        ctx.quadraticCurveTo(midX, midY, p2.sx, p2.sy);
        ctx.stroke();
        ctx.setLineDash([]);

        // Traveling light photon
        arc.progress = (arc.progress + arc.speed) % 1;
        const t = arc.progress;
        const px = (1 - t) * (1 - t) * p1.sx + 2 * (1 - t) * t * midX + t * t * p2.sx;
        const py = (1 - t) * (1 - t) * p1.sy + 2 * (1 - t) * t * midY + t * t * p2.sy;

        // Glowing photon head
        ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
        ctx.beginPath();
        ctx.arc(px, py, 2.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(244, 63, 94, 0.6)";
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // 6. Strategic Hub Beacons & Concentric Waves
      for (let i = 0; i < hubIndices.length; i++) {
        const idx = hubIndices[i];
        const p = projectedPoints[idx];
        if (!p || !p.visible) continue;

        // Pulsing outer ripple
        const ripplePhase = (frame * 0.04 + i * 1.5) % Math.PI;
        const rippleRadius = 8 + ripplePhase * 8;
        const rippleAlpha = Math.max(0, 1 - ripplePhase / Math.PI) * 0.6;

        ctx.strokeStyle = `rgba(244, 63, 94, ${rippleAlpha})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, rippleRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Hub beacon core
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, 3.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(244, 63, 94, 0.95)";
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, 5.5, 0, Math.PI * 2);
        ctx.fill();

        // Hub Label Pill
        if (p.sz > R * 0.25) {
          ctx.font = "bold 10px monospace";
          ctx.textAlign = "center";
          ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
          ctx.fillText(p.hubName || "", p.sx, p.sy - 12);
        }
      }

      // 7. Signature Illuminated Atmosphere Rim (Atmospheric Limb Arc)
      // Creates the glowing blue edge curvature from Image 2
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, Math.PI * 1.05, Math.PI * 1.95);
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = "rgba(56, 189, 248, 0.85)";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 24;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, R + 1.5, Math.PI * 1.1, Math.PI * 1.9);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
      ctx.shadowColor = "#ffffff";
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden select-none"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full block"
        style={{ width: "100%", height: "100%" }}
      />
      {/* Top and side vignettes for seamless blending */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
    </div>
  );
}

export default GlobeHorizonCanvas;
