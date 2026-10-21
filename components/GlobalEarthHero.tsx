"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./GlobalEarthHero.module.css";

/**
 * Photorealistic 3D Earth Horizon Hero
 * - Uses NASA 2K Blue Marble, Specular ocean mask, Night lights & Cloud textures
 * - Rayleigh scattering atmospheric limb shader
 * - Directional sunlight with oceanic specular glint
 * - Strict single-line responsive title: "Global Delivery. Local Expertise."
 */
export default function GlobalEarthHero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowPower = window.matchMedia("(max-width: 640px)").matches || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
    if (reduce && lowPower) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      try {
        const THREE = await import("three");
        if (disposed) return;

        // Scene & Camera
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
        camera.position.set(0, 0, 18);

        // Renderer
        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
        renderer.setClearColor(0x000000, 0);
        renderer.domElement.setAttribute("aria-hidden", "true");
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        mount.appendChild(renderer.domElement);

        const maxAniso = renderer.capabilities.getMaxAnisotropy();

        // High-Resolution NASA Textures Loader
        const loader = new THREE.TextureLoader();
        const load = (url: string) =>
          new Promise<InstanceType<typeof THREE.Texture>>((resolve, reject) => {
            loader.load(url, resolve, undefined, reject);
          });

        const [day, spec, lights, clouds] = await Promise.all([
          load("/textures/earth_atmos_2048.jpg"),
          load("/textures/earth_specular_2048.jpg"),
          load("/textures/earth_lights_2048.png"),
          load("/textures/earth_clouds_1024.png"),
        ]);

        if (disposed) {
          renderer.dispose();
          [day, spec, lights, clouds].forEach((t) => t.dispose());
          return;
        }

        // Texture color spaces & filtering
        day.colorSpace = THREE.SRGBColorSpace;
        lights.colorSpace = THREE.SRGBColorSpace;
        [day, spec, lights, clouds].forEach((t) => {
          t.anisotropy = Math.min(maxAniso, 8);
        });

        // World & Globe Group
        const world = new THREE.Group();
        world.position.y = -8.7;
        scene.add(world);

        const globe = new THREE.Group();
        globe.rotation.z = -0.18; // Earth axial tilt (~23 deg)
        world.add(globe);

        // 1. Earth Surface Mesh (NASA Blue Marble + Specular Water Mask)
        const R = 8.6;
        const surfaceGeo = new THREE.SphereGeometry(R, 128, 96);
        const surfaceMat = new THREE.MeshStandardMaterial({
          map: day,
          roughnessMap: spec,
          roughness: 0.62,
          metalness: 0.12,
          emissiveMap: lights,
          emissive: new THREE.Color(0xffcf70),
          emissiveIntensity: 0.85,
        });
        const surface = new THREE.Mesh(surfaceGeo, surfaceMat);
        surface.rotation.y = 1.35;
        globe.add(surface);

        // 2. Realistic Cloud Layer (soft diffuse scattering)
        const cloudGeo = new THREE.SphereGeometry(R + 0.08, 96, 72);
        const cloudMat = new THREE.MeshStandardMaterial({
          map: clouds,
          transparent: true,
          opacity: 0.65,
          blending: THREE.NormalBlending,
          roughness: 0.95,
          metalness: 0.0,
          depthWrite: false,
        });
        const cloudSphere = new THREE.Mesh(cloudGeo, cloudMat);
        cloudSphere.rotation.y = 1.42;
        globe.add(cloudSphere);

        // 3. Rayleigh Scattering Atmospheric Limb Glow
        const atmosGeo = new THREE.SphereGeometry(R + 0.22, 96, 72);
        const sunPos = new THREE.Vector3(12, 5, 10);
        const atmosMat = new THREE.ShaderMaterial({
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          side: THREE.BackSide,
          uniforms: {
            sunDirection: { value: sunPos.clone().normalize() },
            skyColor: { value: new THREE.Color(0x1a75ff) },
            rimColor: { value: new THREE.Color(0x52c6ff) },
          },
          vertexShader: `
            varying vec3 vNormal;
            varying vec3 vWorldPosition;
            varying vec3 vWorldNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              vec4 worldPos = modelMatrix * vec4(position, 1.0);
              vWorldPosition = worldPos.xyz;
              vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
              gl_Position = projectionMatrix * viewMatrix * worldPos;
            }
          `,
          fragmentShader: `
            uniform vec3 sunDirection;
            uniform vec3 skyColor;
            uniform vec3 rimColor;
            varying vec3 vNormal;
            varying vec3 vWorldPosition;
            varying vec3 vWorldNormal;
            void main() {
              vec3 viewDir = normalize(cameraPosition - vWorldPosition);
              float limb = 1.0 - max(dot(normalize(vNormal), viewDir), 0.0);
              float limbFactor = pow(limb, 3.8);

              float sunDot = max(dot(vWorldNormal, sunDirection), 0.0);
              float sunFactor = smoothstep(-0.2, 0.9, sunDot);

              vec3 col = mix(skyColor, rimColor, limbFactor);
              float intensity = limbFactor * (0.35 + 0.65 * sunFactor) * 1.6;
              gl_FragColor = vec4(col, intensity);
            }
          `,
        });
        const halo = new THREE.Mesh(atmosGeo, atmosMat);
        globe.add(halo);

        // 4. Lighting Rig
        // Ambient space bounce
        scene.add(new THREE.AmbientLight(0x0e1828, 0.9));

        // Primary Sun (warm brilliant light grazing the curvature)
        const sunLight = new THREE.DirectionalLight(0xfff5e6, 3.6);
        sunLight.position.copy(sunPos);
        scene.add(sunLight);

        // Secondary deep blue atmospheric fill
        const fillLight = new THREE.DirectionalLight(0x18488a, 1.1);
        fillLight.position.set(-8, -4, -6);
        scene.add(fillLight);

        // 5. Cosmic Starfield
        const starsCount = 500;
        const starPos = new Float32Array(starsCount * 3);
        for (let i = 0; i < starsCount; i++) {
          starPos[i * 3] = (Math.random() - 0.5) * 60;
          starPos[i * 3 + 1] = Math.random() * 22 + 1; // upper half of space
          starPos[i * 3 + 2] = -10 - Math.random() * 20;
        }
        const starGeo = new THREE.BufferGeometry();
        starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
        const starMat = new THREE.PointsMaterial({
          color: 0xc4dcff,
          size: 0.045,
          transparent: true,
          opacity: 0.75,
          sizeAttenuation: true,
        });
        const starfield = new THREE.Points(starGeo, starMat);
        scene.add(starfield);

        // Responsive Resizing & Globe Horizon Placement
        function resize() {
          if (!mount) return;
          const width = Math.max(mount.clientWidth, 1);
          const height = Math.max(mount.clientHeight, 1);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height, false);

          const aspect = width / height;
          if (aspect < 0.8) {
            world.position.y = -8.2;
          } else if (aspect < 1.3) {
            world.position.y = -8.45;
          } else {
            world.position.y = -8.7;
          }
        }

        const observer = new ResizeObserver(resize);
        observer.observe(mount);
        resize();

        // Interactive mouse parallax
        let targetX = 0;
        let targetY = 0;
        const onMouseMove = (e: MouseEvent) => {
          const rect = mount.getBoundingClientRect();
          targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.4;
          targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.2;
        };
        window.addEventListener("mousemove", onMouseMove);

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

          // Subtle Earth & Cloud Rotation
          surface.rotation.y += dt * 0.012;
          cloudSphere.rotation.y += dt * 0.016;

          // Parallax camera easing
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
          surfaceMat.dispose();
          cloudGeo.dispose();
          cloudMat.dispose();
          atmosGeo.dispose();
          atmosMat.dispose();
          starGeo.dispose();
          starMat.dispose();
          [day, spec, lights, clouds].forEach((t) => t.dispose());
          renderer.dispose();
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

      {/* Main Single-Line Content */}
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
