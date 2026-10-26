"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./GlobalEarthHero.module.css";

// Sun direction in WORLD space.
const SUN_DIR: [number, number, number] = [1.0, 0.3, 0.75];
const EARTH_R = 8.6;
const AXIAL_TILT = -0.41; // ~23.4 degrees

// ---------- Earth surface ----------
const earthVert = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vN;
  varying vec3 vP;

  void main() {
    vUv = uv;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const earthFrag = /* glsl */ `
  uniform sampler2D uDay;
  uniform sampler2D uSpec;
  uniform sampler2D uNight;
  uniform sampler2D uClouds;
  uniform vec3 uSunDir;
  uniform vec3 uCamPos;

  varying vec2 vUv;
  varying vec3 vN;
  varying vec3 vP;

  void main() {
    vec3 N = normalize(vN);
    vec3 L = normalize(uSunDir);
    vec3 V = normalize(uCamPos - vP);
    float ndl = dot(N, L);

    // Textures
    vec3 albedo = texture2D(uDay, vUv).rgb;
    float water = texture2D(uSpec, vUv).r;
    float cloudTex = texture2D(uClouds, vUv).r;

    // Cloud Shadows (Fake, but effective)
    float cloudShadow = smoothstep(0.2, 0.8, cloudTex) * 0.25;

    // Lighting (Smoother Terminator)
    float terminator = smoothstep(-0.15, 0.15, ndl);
    
    // Day Side
    vec3 dayColor = albedo * max(ndl, 0.0) * 1.3;
    dayColor = dayColor * (1.0 - cloudShadow); 
    dayColor += vec3(0.015, 0.015, 0.025); // Subtle ambient light

    // Ocean Glint (Wider and softer)
    vec3 H = normalize(L + V);
    float glint = pow(max(dot(N, H), 0.0), 32.0) * water * step(0.0, ndl);
    dayColor += vec3(1.0, 0.96, 0.9) * glint * 0.8;

    // Night Side City Lights
    vec3 city = texture2D(uNight, vUv).rgb * vec3(1.0, 0.85, 0.6) * 2.5;
    city = pow(city, vec3(1.2)); // Higher contrast for bright cities
    vec3 nightColor = city;

    // Mix Day and Night
    vec3 finalColor = mix(nightColor, dayColor, terminator);

    // Atmospheric Scattering (Blue glow on the lit edge)
    float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0);
    finalColor += vec3(0.25, 0.5, 1.0) * rim * (0.1 + 0.9 * terminator) * 0.7;

    // Output with Gamma Correction
    gl_FragColor = vec4(pow(finalColor, vec3(1.0 / 2.2)), 1.0);
  }
`;

// ---------- Clouds ----------
const cloudFrag = /* glsl */ `
  uniform sampler2D uClouds;
  uniform vec3 uSunDir;

  varying vec2 vUv;
  varying vec3 vN;

  void main() {
    vec3 N = normalize(vN);
    float ndl = dot(N, normalize(uSunDir));

    // Cloud Mask (Using red channel)
    float c = texture2D(uClouds, vUv).r;
    c = smoothstep(0.1, 0.7, c);

    // Lighting
    float lit = max(ndl, 0.0);
    vec3 col = vec3(1.0, 0.98, 0.95) * (0.05 + 1.1 * lit);

    // Fade out on night side
    float terminator = smoothstep(-0.2, 0.2, ndl);
    col *= terminator;

    gl_FragColor = vec4(pow(col, vec3(1.0 / 2.2)), c * 0.85);
  }
`;

// ---------- Atmosphere halo ----------
const haloVert = /* glsl */ `
  varying vec3 vN;
  varying vec3 vWN;

  void main() {
    vN = normalize(normalMatrix * normal);
    vWN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const haloFrag = /* glsl */ `
  uniform vec3 uColor;
  uniform vec3 uSunDir;
  uniform float uC;
  uniform float uP;
  uniform float uStrength;

  varying vec3 vN;
  varying vec3 vWN;

  void main() {
    // Rim light effect
    float f = pow(max(0.0, uC - dot(vN, vec3(0.0, 0.0, 1.0))), uP);

    // Brighter on sunlit side
    float sunSide = smoothstep(-0.5, 0.5, dot(vWN, normalize(uSunDir)));
    float a = clamp(f * uStrength * (0.1 + 0.9 * sunSide), 0.0, 1.0);

    gl_FragColor = vec4(uColor, a);
  }
`;

// ---------- Component ----------
export default function GlobalEarthHero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowPower =
      window.matchMedia("(max-width: 640px)").matches ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
    if (reduce && lowPower) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      try {
        const THREE = await import("three");
        if (disposed) return;

        const sunDir = new THREE.Vector3(...SUN_DIR).normalize();

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 200);
        camera.position.set(0, 0, 18);

        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setClearColor(0x000000, 0);
        renderer.domElement.setAttribute("aria-hidden", "true");
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        mount.appendChild(renderer.domElement);

        const maxAniso = renderer.capabilities.getMaxAnisotropy();

        const loader = new THREE.TextureLoader();
        const load = (url: string) =>
          new Promise<InstanceType<typeof THREE.Texture>>((resolve, reject) => {
            loader.load(url, resolve, undefined, reject);
          });

        // IMPORTANT: Ensure these files exist in your \`public/textures/\` folder!
        const [day, spec, night, clouds] = await Promise.all([
          load("/textures/earth_atmos_2048.jpg"),
          load("/textures/earth_specular_2048.jpg"),
          load("/textures/earth_lights_2048.png"),
          load("/textures/earth_clouds_1024.png"),
        ]);

        const allTextures = [day, spec, night, clouds];

        if (disposed) {
          renderer.dispose();
          allTextures.forEach((t) => t.dispose());
          return;
        }

        // Color management
        day.colorSpace = THREE.SRGBColorSpace;
        night.colorSpace = THREE.SRGBColorSpace;
        allTextures.forEach((t) => {
          t.anisotropy = Math.min(maxAniso, 8);
        });

        const world = new THREE.Group();
        world.position.y = -8.7;
        scene.add(world);

        const globe = new THREE.Group();
        globe.rotation.z = AXIAL_TILT;
        world.add(globe);

        // 1. Earth surface
        const surfaceGeo = new THREE.SphereGeometry(EARTH_R, 192, 144);
        const earthMat = new THREE.ShaderMaterial({
          uniforms: {
            uDay: { value: day },
            uSpec: { value: spec },
            uNight: { value: night },
            uClouds: { value: clouds },
            uSunDir: { value: sunDir },
            uCamPos: { value: camera.position },
          },
          vertexShader: earthVert,
          fragmentShader: earthFrag,
        });
        const surface = new THREE.Mesh(surfaceGeo, earthMat);
        globe.add(surface);

        // 2. Clouds
        const cloudGeo = new THREE.SphereGeometry(EARTH_R * 1.008, 160, 120);
        const cloudMat = new THREE.ShaderMaterial({
          uniforms: {
            uClouds: { value: clouds },
            uSunDir: { value: sunDir },
          },
          vertexShader: earthVert,
          fragmentShader: cloudFrag,
          transparent: true,
          depthWrite: false,
        });
        const cloudSphere = new THREE.Mesh(cloudGeo, cloudMat);
        globe.add(cloudSphere);

        // 3. Atmosphere halos
        const makeHalo = (scale: number, color: number, c: number, p: number, strength: number) => {
          const geo = new THREE.SphereGeometry(EARTH_R * scale, 128, 96);
          const mat = new THREE.ShaderMaterial({
            uniforms: {
              uColor: { value: new THREE.Color(color) },
              uSunDir: { value: sunDir },
              uC: { value: c },
              uP: { value: p },
              uStrength: { value: strength },
            },
            vertexShader: haloVert,
            fragmentShader: haloFrag,
            side: THREE.FrontSide,
            transparent: true,
            depthWrite: false,
          });
          const mesh = new THREE.Mesh(geo, mat);
          globe.add(mesh);
          return { geo, mat };
        };

        const innerHalo = makeHalo(1.02, 0x6ec6ff, 0.65, 4.0, 1.5);
        const outerHalo = makeHalo(1.12, 0x2a7fff, 0.55, 2.0, 0.8);

        // 4. Starfield
        const starGeo = new THREE.BufferGeometry();
        const starCount = 600;
        const starPos = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount; i++) {
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(Math.random() * 0.9 + 0.1);
          const r = 40 + Math.random() * 20;
          starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
          starPos[i * 3 + 1] = r * Math.cos(phi);
          starPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta) - 10;
        }
        starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
        const starMat = new THREE.PointsMaterial({
          size: 0.15,
          color: 0xbfd8ff,
          transparent: true,
          opacity: 0.8,
        });
        const starfield = new THREE.Points(starGeo, starMat);
        scene.add(starfield);

        // Resize
        const onResize = () => {
          const w = mount.clientWidth;
          const h = mount.clientHeight;
          if (w === 0 || h === 0) return;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h, false);
        };
        const observer = new ResizeObserver(onResize);
        observer.observe(mount);
        onResize();

        // Mouse Parallax
        let targetX = 0;
        let targetY = 0;
        const onMouseMove = (e: MouseEvent) => {
          targetX = ((e.clientX / window.innerWidth) * 2 - 1) * 0.45;
          targetY = ((e.clientY / window.innerHeight) * 2 - 1) * 0.25;
        };
        window.addEventListener("mousemove", onMouseMove, { passive: true });

        // Animation Loop
        const clock = new THREE.Clock();
        let frame = 0;
        let inView = true;
        const intersection = new IntersectionObserver(([entry]) => {
          inView = entry.isIntersecting;
        });
        intersection.observe(mount);

        const tick = () => {
          if (disposed) return;
          frame = requestAnimationFrame(tick);

          if (!inView || document.hidden) {
            clock.getDelta();
            return;
          }

          const dt = Math.min(clock.getDelta(), 0.05);

          // Rotations
          surface.rotation.y += dt * 0.015;
          cloudSphere.rotation.y += dt * 0.022; // Clouds move slightly faster
          starfield.rotation.y += dt * 0.002; // Subtle star movement

          // Camera Parallax
          camera.position.x += (targetX - camera.position.x) * 0.04;
          camera.position.y += (-targetY - camera.position.y) * 0.04;
          camera.lookAt(0, -0.6, 0);

          renderer.render(scene, camera);
        };

        tick();
        setReady(true);

        cleanup = () => {
          cancelAnimationFrame(frame);
          window.removeEventListener("mousemove", onMouseMove);
          observer.disconnect();
          intersection.disconnect();

          scene.remove(world, starfield);

          surfaceGeo.dispose();
          earthMat.dispose();
          cloudGeo.dispose();
          cloudMat.dispose();
          innerHalo.geo.dispose();
          innerHalo.mat.dispose();
          outerHalo.geo.dispose();
          outerHalo.mat.dispose();
          starGeo.dispose();
          starMat.dispose();
          allTextures.forEach((t) => t.dispose());

          renderer.dispose();
          renderer.forceContextLoss();
          if (renderer.domElement.parentNode === mount) {
            mount.removeChild(renderer.domElement);
          }
        };
      } catch (e) {
        if (!disposed) {
          console.error("Earth hero WebGL error:", e);
          setFailed(true);
        }
      }
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <section className={styles.hero} aria-labelledby="global-earth-title">
      <div className={styles.stars} aria-hidden="true" />
      <div
        className={styles.earthFallback}
        aria-hidden="true"
        style={{ opacity: ready && !failed ? 0 : 1 }}
      />
      <div ref={mountRef} className={styles.webgl} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          <span /> DEVOPSTRIO <i /> GLOBAL TECHNOLOGY SOLUTIONS
        </p>
        <h1 id="global-earth-title" className={styles.title}>
          <span>Global Delivery.</span>
          <span className={styles.accent}>Local Expertise.</span>
        </h1>
      </div>

      <div className={styles.bottomGlow} aria-hidden="true" />
    </section>
  );
}
