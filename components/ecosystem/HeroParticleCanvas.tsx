"use client";

import { useEffect, useRef } from "react";

function PseudoRandom(i: number) {
  const x = Math.sin(i * 127.1 + 3.7) * 43758.5453;
  return x - Math.floor(x);
}

interface HeroParticleCanvasProps {
  accentColor?: [number, number, number];
  highlightColor?: [number, number, number];
  className?: string;
}

export function HeroParticleCanvas({
  accentColor = [244, 63, 94], // Default Rose-500
  highlightColor = [251, 113, 133], // Default Rose-400
  className = "",
}: HeroParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;
    const t0 = (window.performance || Date).now();

    const COUNT = 280;
    const FOCUS_X = 0.65;

    function resize() {
      if (!cv) return false;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = cv.clientWidth;
      const ch = cv.clientHeight;
      if (!cw || !ch) return false;
      if (cw !== w || ch !== h) {
        w = cw;
        h = ch;
        cv.width = Math.round(w * dpr);
        cv.height = Math.round(h * dpr);
        ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      return true;
    }

    function dot(x: number, y: number, r: number, a: number, warm: number) {
      if (!ctx) return;
      ctx.beginPath();
      const red = accentColor[0] + Math.round((highlightColor[0] - accentColor[0]) * warm);
      const green = accentColor[1] + Math.round((highlightColor[1] - accentColor[1]) * warm);
      const blue = accentColor[2] + Math.round((highlightColor[2] - accentColor[2]) * warm);
      ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${Math.min(1, Math.max(0, a)).toFixed(3)})`;
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    function render(timeSec: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      const jx = w * FOCUS_X;
      const jy = h * 0.5;

      function fade(x: number) {
        const p = x / (w * 0.22);
        return p < 0 ? 0 : p > 1 ? 1 : p;
      }

      // Draw hemispherical floral dot field fanning out to the left
      for (let i = 0; i < COUNT; i++) {
        const r1 = PseudoRandom(i + 7);
        const r2 = PseudoRandom(i + 301);
        const ang = (r1 - 0.5) * 2.15 + Math.PI; // Opening towards left
        const spread = 180 + r2 * 520;
        const prog = (timeSec * 0.16 + r2) % 1;
        const R = spread * (1 - Math.pow(prog, 1.7));
        const x = jx + Math.cos(ang) * R;
        const y = jy + Math.sin(ang) * R * 0.72; // Elliptical 3D depth

        const a = (0.18 + (1 - prog) * 0.7) * fade(x);
        if (a < 0.02) continue;
        dot(x, y, 1 + (1 - prog) * 2.8, a, 1 - prog);
      }

      // Focal pulse aura
      const pulse = 0.65 + Math.sin(timeSec * 2.2) * 0.22;
      const g = ctx.createRadialGradient(jx, jy, 0, jx, jy, 110);
      g.addColorStop(0, `rgba(${accentColor.join(",")}, ${(0.55 * pulse).toFixed(3)})`);
      g.addColorStop(0.35, `rgba(${highlightColor.join(",")}, ${(0.24 * pulse).toFixed(3)})`);
      g.addColorStop(1, `rgba(${accentColor.join(",")}, 0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(jx, jy, 110, 0, Math.PI * 2);
      ctx.fill();

      // Horizontal beam line extending to the right
      const bg = ctx.createLinearGradient(jx, jy, w, jy);
      bg.addColorStop(0, `rgba(${accentColor.join(",")}, 0.95)`);
      bg.addColorStop(0.7, `rgba(${accentColor.join(",")}, 0.35)`);
      bg.addColorStop(1, `rgba(${accentColor.join(",")}, 0)`);
      ctx.fillStyle = bg;
      ctx.fillRect(jx, jy - 1, w - jx, 2);

      // Central node in focal core
      ctx.save();
      ctx.shadowColor = `rgba(${accentColor.join(",")}, 0.9)`;
      ctx.shadowBlur = 14;
      dot(jx, jy, 4, 0.95, 1);
      ctx.restore();

      // Travelling node moving along horizontal line to the right
      const nodeX = jx + ((timeSec * 0.16) % 1) * (w - jx);
      ctx.save();
      ctx.shadowColor = "rgba(255, 255, 255, 0.95)";
      ctx.shadowBlur = 12;
      dot(nodeX, jy, 4.5, 1, 1);
      ctx.restore();
    }

    function loop() {
      if (!resize()) {
        animId = requestAnimationFrame(loop);
        return;
      }
      const now = (window.performance || Date).now();
      render((now - t0) / 1000);
      animId = requestAnimationFrame(loop);
    }

    loop();

    const handleResize = () => {
      resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [accentColor, highlightColor]);

  return (
    <div aria-hidden className={`pointer-events-none relative mx-auto h-[480px] w-full max-w-lg select-none ${className}`}>
      <canvas ref={canvasRef} className="h-full w-full block" />
    </div>
  );
}
