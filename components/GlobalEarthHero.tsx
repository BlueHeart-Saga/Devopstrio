"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./GlobalEarthHero.module.css";

// Sun direction in WORLD space. Day/night line moves as the globe spins.
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

    // Day texture is sRGB, so the sample is already linear
    vec3 albedo = texture2D(uDay, vUv).rgb;
    float water = texture2D(uSpec, vUv).r;

    float lit = smoothstep(-0.12, 0.25, ndl);
    vec3 col = albedo * (0.025 + 1.25 * max(ndl, 0.0));

    // Sun glint on oceans only
    vec3 H = normalize(L + V);
    float glint = pow(max(dot(N, H), 0.0), 90.0) * water * step(0.0, ndl);
    col += vec3(1.0, 0.96, 0.9) * glint * 0.9;

    // Atmosphere scattering at the limb (blue edge on the lit side)
    float rim = pow(1.0 - max(dot(N, V), 0.0), 3.5);
    col += vec3(0.22, 0.5, 1.0) * rim * (0.08 + 0.9 * lit) * 0.55;

    // Night side city lights
    float night = 1.0 - smoothstep(-0.1, 0.12, ndl);
    vec3 city = texture2D(uNight, vUv).rgb * vec3(1.0, 0.78, 0.45) * 2.2;
    col += city * night;

    gl_FragColor = vec4(pow(col, vec3(1.0 / 2.2)), 1.0);
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
    float lit = max(ndl, 0.0);

    float c = smoothstep(0.2, 0.85, texture2D(uClouds, vUv).r);

    vec3 col = vec3(0.92, 0.95, 1.0) * (0.06 + 1.1 * lit);
    gl_FragColor = vec4(pow(col, vec3(1.0 / 2.2)), c * 0.9);
  }
`;

// ---------- Atmosphere halo (alpha-based, no hard rectangle) ----------

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
    // Bright at the silhouette, zero in the middle of the disc
    float f = pow(max(0.0, uC - dot(vN, vec3(0.0, 0.0, 1.0))), uP);

    // Brighter on the sunlit side, faint on the night side
    float sunSide = smoothstep(-0.4, 0.6, dot(vWN, normalize(uSunDir)));
    float a = clamp(f * uStrength * (0.2 + 0.8 * sunSide), 0.0, 1.0);

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

        // Color textures are sRGB; masks stay linear data
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
            uSunDir: { value: sunDir },
            uCamPos: { value: camera.position },
          },
          vertexShader: earthVert,
          fragmentShader: earthFrag,
        });
        const surface = new THREE.Mesh(surfaceGeo, earthMat);
        globe.add(surface);

        // 2. Clouds
        const cloudGeo = new THREE.SphereGeometry(EARTH_R * 1.006, 160, 120);
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

        // 3. Atmosphere halos (tight inner rim + soft outer glow)
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

        const innerHalo = makeHalo(1.03, 0x6ec6ff, 0.7, 4.0, 1.4);
        const outerHalo = makeHalo(1.14, 0x2a7fff, 0.6, 2.0, 0.6);

        // 4. Starfield
        const starGeo = new THREE.BufferGeometry();
        const starCount = 500;
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
          size: 0.12,
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

        // Mouse parallax
        let targetX = 0;
        let targetY = 0;
        const onMouseMove = (e: MouseEvent) => {
          targetX = ((e.clientX / window.innerWidth) * 2 - 1) * 0.45;
          targetY = ((e.clientY / window.innerHeight) * 2 - 1) * 0.25;
        };
        window.addEventListener("mousemove", onMouseMove, { passive: true });

        // Animation loop
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

          surface.rotation.y += dt * 0.012;
          cloudSphere.rotation.y += dt * 0.016;

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

// ============================================================================
// OLD IMPLEMENTATION BACKUP (COMMENTED OUT AS REQUESTED)
// ============================================================================
// "use client";
// 
// import { useEffect, useRef, useState } from "react";
// import styles from "./GlobalEarthHero.module.css";
// 
// /**
//  * Photorealistic 3D Earth Horizon Hero
//  * - Uses NASA 2K Blue Marble, Specular ocean mask, Night lights & Cloud textures
//  * - Rayleigh scattering atmospheric limb shader
//  * - Directional sunlight with oceanic specular glint
//  * - Strict single-line responsive title: "Global Delivery. Local Expertise."
//  */
// export default function GlobalEarthHero() {
//   const mountRef = useRef<HTMLDivElement>(null);
//   const [ready, setReady] = useState(false);
//   const [failed, setFailed] = useState(false);
// 
//   useEffect(() => {
//     const mount = mountRef.current;
//     if (!mount) return;
// 
//     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     const lowPower = window.matchMedia("(max-width: 640px)").matches || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
//     if (reduce && lowPower) return;
// 
//     let disposed = false;
//     let cleanup: (() => void) | undefined;
// 
//     (async () => {
//       try {
//         const THREE = await import("three");
//         if (disposed) return;
// 
//         // Scene & Camera
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
//         camera.position.set(0, 0, 18);
// 
//         // Renderer
//         const renderer = new THREE.WebGLRenderer({
//           alpha: true,
//           antialias: true,
//           powerPreference: "high-performance",
//         });
//         renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
//         renderer.outputColorSpace = THREE.SRGBColorSpace;
//         renderer.toneMapping = THREE.ACESFilmicToneMapping;
//         renderer.toneMappingExposure = 1.25;
//         renderer.setClearColor(0x000000, 0);
//         renderer.domElement.setAttribute("aria-hidden", "true");
//         renderer.domElement.style.width = "100%";
//         renderer.domElement.style.height = "100%";
//         mount.appendChild(renderer.domElement);
// 
//         const maxAniso = renderer.capabilities.getMaxAnisotropy();
// 
//         // High-Resolution NASA Textures Loader
//         const loader = new THREE.TextureLoader();
//         const load = (url: string) =>
//           new Promise<InstanceType<typeof THREE.Texture>>((resolve, reject) => {
//             loader.load(url, resolve, undefined, reject);
//           });
// 
//         const [day, spec, lights, clouds] = await Promise.all([
//           load("/textures/earth_atmos_2048.jpg"),
//           load("/textures/earth_specular_2048.jpg"),
//           load("/textures/earth_lights_2048.png"),
//           load("/textures/earth_clouds_1024.png"),
//         ]);
// 
//         if (disposed) {
//           renderer.dispose();
//           [day, spec, lights, clouds].forEach((t) => t.dispose());
//           return;
//         }
// 
//         // Texture color spaces & filtering
//         day.colorSpace = THREE.SRGBColorSpace;
//         lights.colorSpace = THREE.SRGBColorSpace;
//         [day, spec, lights, clouds].forEach((t) => {
//           t.anisotropy = Math.min(maxAniso, 8);
//         });
// 
//         // World & Globe Group
//         const world = new THREE.Group();
//         world.position.y = -8.7;
//         scene.add(world);
// 
//         const globe = new THREE.Group();
//         globe.rotation.z = -0.18; // Earth axial tilt (~23 deg)
//         world.add(globe);
// 
//         // 1. Earth Surface Mesh (NASA Blue Marble + Specular Water Mask)
//         const R = 8.6;
//         const surfaceGeo = new THREE.SphereGeometry(R, 128, 96);
//         const surfaceMat = new THREE.MeshStandardMaterial({
//           map: day,
//           roughnessMap: spec,
//           roughness: 0.62,
//           metalness: 0.12,
//           emissiveMap: lights,
//           emissive: new THREE.Color(0xffcf70),
//           emissiveIntensity: 0.85,
//         });
//         const surface = new THREE.Mesh(surfaceGeo, surfaceMat);
//         surface.rotation.y = 1.35;
//         globe.add(surface);
// 
//         // 2. Realistic Cloud Layer (soft diffuse scattering)
//         const cloudGeo = new THREE.SphereGeometry(R + 0.08, 96, 72);
//         const cloudMat = new THREE.MeshStandardMaterial({
//           map: clouds,
//           transparent: true,
//           opacity: 0.65,
//           blending: THREE.NormalBlending,
//           roughness: 0.95,
//           metalness: 0.0,
//           depthWrite: false,
//         });
//         const cloudSphere = new THREE.Mesh(cloudGeo, cloudMat);
//         cloudSphere.rotation.y = 1.42;
//         globe.add(cloudSphere);
// 
//         // 3. Rayleigh Scattering Atmospheric Limb Glow
//         const atmosGeo = new THREE.SphereGeometry(R + 0.22, 96, 72);
//         const sunPos = new THREE.Vector3(12, 5, 10);
//         const atmosMat = new THREE.ShaderMaterial({
//           transparent: true,
//           blending: THREE.AdditiveBlending,
//           depthWrite: false,
//           side: THREE.BackSide,
//           uniforms: {
//             sunDirection: { value: sunPos.clone().normalize() },
//             skyColor: { value: new THREE.Color(0x1a75ff) },
//             rimColor: { value: new THREE.Color(0x52c6ff) },
//           },
//           vertexShader: `
//             varying vec3 vNormal;
//             varying vec3 vWorldPosition;
//             varying vec3 vWorldNormal;
//             void main() {
//               vNormal = normalize(normalMatrix * normal);
//               vec4 worldPos = modelMatrix * vec4(position, 1.0);
//               vWorldPosition = worldPos.xyz;
//               vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
//               gl_Position = projectionMatrix * viewMatrix * worldPos;
//             }
//           `,
//           fragmentShader: `
//             uniform vec3 sunDirection;
//             uniform vec3 skyColor;
//             uniform vec3 rimColor;
//             varying vec3 vNormal;
//             varying vec3 vWorldPosition;
//             varying vec3 vWorldNormal;
//             void main() {
//               vec3 viewDir = normalize(cameraPosition - vWorldPosition);
//               float limb = 1.0 - max(dot(normalize(vNormal), viewDir), 0.0);
//               float limbFactor = pow(limb, 3.8);
// 
//               float sunDot = max(dot(vWorldNormal, sunDirection), 0.0);
//               float sunFactor = smoothstep(-0.2, 0.9, sunDot);
// 
//               vec3 col = mix(skyColor, rimColor, limbFactor);
//               float intensity = limbFactor * (0.35 + 0.65 * sunFactor) * 1.6;
//               gl_FragColor = vec4(col, intensity);
//             }
//           `,
//         });
//         const halo = new THREE.Mesh(atmosGeo, atmosMat);
//         globe.add(halo);
// 
//         // 4. Lighting Rig
//         // Ambient space bounce
//         scene.add(new THREE.AmbientLight(0x0e1828, 0.9));
// 
//         // Primary Sun (warm brilliant light grazing the curvature)
//         const sunLight = new THREE.DirectionalLight(0xfff5e6, 3.6);
//         sunLight.position.copy(sunPos);
//         scene.add(sunLight);
// 
//         // Secondary deep blue atmospheric fill
//         const fillLight = new THREE.DirectionalLight(0x18488a, 1.1);
//         fillLight.position.set(-8, -4, -6);
//         scene.add(fillLight);
// 
//         // 5. Cosmic Starfield
//         const starsCount = 500;
//         const starPos = new Float32Array(starsCount * 3);
//         for (let i = 0; i < starsCount; i++) {
//           starPos[i * 3] = (Math.random() - 0.5) * 60;
//           starPos[i * 3 + 1] = Math.random() * 22 + 1; // upper half of space
//           starPos[i * 3 + 2] = -10 - Math.random() * 20;
//         }
//         const starGeo = new THREE.BufferGeometry();
//         starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
//         const starMat = new THREE.PointsMaterial({
//           color: 0xc4dcff,
//           size: 0.045,
//           transparent: true,
//           opacity: 0.75,
//           sizeAttenuation: true,
//         });
//         const starfield = new THREE.Points(starGeo, starMat);
//         scene.add(starfield);
// 
//         // Responsive Resizing & Globe Horizon Placement
//         function resize() {
//           if (!mount) return;
//           const width = Math.max(mount.clientWidth, 1);
//           const height = Math.max(mount.clientHeight, 1);
//           camera.aspect = width / height;
//           camera.updateProjectionMatrix();
//           renderer.setSize(width, height, false);
// 
//           const aspect = width / height;
//           if (aspect < 0.8) {
//             world.position.y = -8.2;
//           } else if (aspect < 1.3) {
//             world.position.y = -8.45;
//           } else {
//             world.position.y = -8.7;
//           }
//         }
// 
//         const observer = new ResizeObserver(resize);
//         observer.observe(mount);
//         resize();
// 
//         // Interactive mouse parallax
//         let targetX = 0;
//         let targetY = 0;
//         const onMouseMove = (e: MouseEvent) => {
//           const rect = mount.getBoundingClientRect();
//           targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.4;
//           targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.2;
//         };
//         window.addEventListener("mousemove", onMouseMove);
// 
//         // Animation Loop
//         const clock = new THREE.Clock();
//         let frame = 0;
//         let inView = true;
//         const intersection = new IntersectionObserver(([entry]) => {
//           inView = entry.isIntersecting;
//         });
//         intersection.observe(mount);
// 
//         const tick = () => {
//           if (disposed) return;
//           frame = requestAnimationFrame(tick);
//           if (!inView || document.hidden) {
//             clock.getDelta();
//             return;
//           }
//           const dt = Math.min(clock.getDelta(), 0.05);
// 
//           // Subtle Earth & Cloud Rotation
//           surface.rotation.y += dt * 0.012;
//           cloudSphere.rotation.y += dt * 0.016;
// 
//           // Parallax camera easing
//           camera.position.x += (targetX - camera.position.x) * 0.04;
//           camera.position.y += (-targetY - camera.position.y) * 0.04;
//           camera.lookAt(0, -0.6, 0);
// 
//           renderer.render(scene, camera);
//         };
//         tick();
// 
//         setReady(true);
// 
//         cleanup = () => {
//           cancelAnimationFrame(frame);
//           window.removeEventListener("mousemove", onMouseMove);
//           observer.disconnect();
//           intersection.disconnect();
//           scene.remove(world, starfield);
//           surfaceGeo.dispose();
//           surfaceMat.dispose();
//           cloudGeo.dispose();
//           cloudMat.dispose();
//           atmosGeo.dispose();
//           atmosMat.dispose();
//           starGeo.dispose();
//           starMat.dispose();
//           [day, spec, lights, clouds].forEach((t) => t.dispose());
//           renderer.dispose();
//           if (renderer.domElement.parentNode === mount) {
//             mount.removeChild(renderer.domElement);
//           }
//         };
//       } catch (e) {
//         if (!disposed) {
//           console.error("Earth hero WebGL error:", e);
//           setFailed(true);
//         }
//       }
//     })();
// 
//     return () => {
//       disposed = true;
//       cleanup?.();
//     };
//   }, []);
// 
//   return (
//     <section className={styles.hero} aria-labelledby="global-earth-title">
//       <div className={styles.stars} aria-hidden="true" />
//       <div
//         className={styles.earthFallback}
//         aria-hidden="true"
//         style={{ opacity: ready && !failed ? 0 : 1 }}
//       />
//       <div ref={mountRef} className={styles.webgl} aria-hidden="true" />
//       <div className={styles.vignette} aria-hidden="true" />
// 
//       {/* Main Single-Line Content */}
//       <div className={styles.content}>
//         <p className={styles.eyebrow}>
//           <span /> DEVOPSTRIO <i /> GLOBAL TECHNOLOGY SOLUTIONS
//         </p>
//         <h1 id="global-earth-title" className={styles.title}>
//           <span>Global Delivery.</span>
//           <span className={styles.accent}>Local Expertise.</span>
//         </h1>
//       </div>
// 
//       <div className={styles.bottomGlow} aria-hidden="true" />
//     </section>
//   );
// }
// 