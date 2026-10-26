"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./GlobalEarthHero.module.css";

/** Drop-in replacement. Does not change the existing DeliveryHero import. */
export default function GlobalEarthHero() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return; // Accessible static fallback on reduced-motion devices.

    let cancelled = false;
    let teardown = () => {};

    (async () => {
      const THREE = await import("three");
      if (cancelled) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 120);
      camera.position.set(0, 0, 20);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, window.innerWidth < 768 ? 1.35 : 1.75));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.02;
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.setAttribute("aria-hidden", "true");
      host.appendChild(renderer.domElement);

      const loader = new THREE.TextureLoader();
      const loadTexture = (url: string) => new Promise<import("three").Texture>((resolve, reject) => loader.load(url, resolve, undefined, reject));
      let maps: import("three").Texture[];
      try {
        maps = await Promise.all([
          loadTexture("/earth-final/day.jpg"),
          loadTexture("/earth-final/night.jpg"),
          loadTexture("/earth-final/clouds.jpg"),
        ]);
      } catch (error) {
        console.warn("Earth textures were not loaded; using the photographic fallback.", error);
        renderer.dispose();
        renderer.domElement.remove();
        return;
      }
      if (cancelled) {
        maps.forEach(t => t.dispose()); renderer.dispose(); renderer.domElement.remove(); return;
      }
      const [day, night, clouds] = maps;
      day.colorSpace = THREE.SRGBColorSpace;
      night.colorSpace = THREE.SRGBColorSpace;
      const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      maps.forEach(t => { t.anisotropy = aniso; t.wrapS = THREE.RepeatWrapping; });

      // Camera looks across the limb. Keep this centered beneath the HTML headline.
      const radius = 8.5;
      const earth = new THREE.Group();
      earth.position.set(0, -10.45, -2.0);
      scene.add(earth);
      const tilt = new THREE.Group();
      tilt.rotation.z = -0.18;
      earth.add(tilt);
      const sunDirection = new THREE.Vector3(0.22, 0.64, 0.74).normalize();
      const sphere = new THREE.SphereGeometry(radius, 192, 128);
      const surfaceMaterial = new THREE.ShaderMaterial({
        uniforms: {
          dayMap: { value: day },
          nightMap: { value: night },
          sunDirection: { value: sunDirection },
          cameraWorld: { value: camera.position },
        },
        vertexShader: `
          varying vec2 uvCoord;
          varying vec3 normalWorld;
          varying vec3 positionWorld;
          void main() {
            uvCoord = uv;
            vec4 p = modelMatrix * vec4(position,1.0);
            positionWorld = p.xyz;
            normalWorld = normalize(mat3(modelMatrix) * normal);
            gl_Position = projectionMatrix * viewMatrix * p;
          }
        `,
        fragmentShader: `
          uniform sampler2D dayMap;
          uniform sampler2D nightMap;
          uniform vec3 sunDirection;
          uniform vec3 cameraWorld;
          varying vec2 uvCoord;
          varying vec3 normalWorld;
          varying vec3 positionWorld;
          void main() {
            vec3 N = normalize(normalWorld);
            vec3 L = normalize(sunDirection);
            vec3 V = normalize(cameraWorld - positionWorld);
            float ndl = dot(N, L);
            float dayFactor = smoothstep(-0.20, 0.19, ndl);
            vec3 albedo = texture2D(dayMap, uvCoord).rgb;
            vec3 nightLight = texture2D(nightMap, uvCoord).rgb;
            // Broad realistic diffuse illumination, rather than flat self-lit color.
            float exposure = 0.075 + pow(max(ndl, 0.0), 0.65) * 1.06;
            vec3 lit = albedo * exposure;
            vec3 dark = albedo * 0.012 + nightLight * vec3(1.0, 0.82, 0.60) * 1.40;
            vec3 color = mix(dark, lit, dayFactor);
            // Small restrained atmospheric edge within the surface.
            float rim = pow(1.0 - clamp(dot(N,V),0.0,1.0), 7.0);
            color += vec3(0.032, 0.14, 0.34) * rim * dayFactor * 0.22;
            gl_FragColor = vec4(color, 1.0);
          }
        `,
      });
      const surface = new THREE.Mesh(sphere, surfaceMaterial);
      surface.rotation.y = 0.64; // Begin with richly detailed visible continents.
      tilt.add(surface);

      // Separate, subtly drifting semi-transparent clouds.
      const cloudGeometry = new THREE.SphereGeometry(radius*1.012, 160, 112);
      const cloudMaterial = new THREE.ShaderMaterial({
        uniforms: { cloudMap:{value:clouds}, sunDirection:{value:sunDirection} },
        vertexShader: `
          varying vec2 uvCoord;
          varying vec3 normalWorld;
          void main(){uvCoord=uv;normalWorld=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}
        `,
        fragmentShader: `
          uniform sampler2D cloudMap;uniform vec3 sunDirection;
          varying vec2 uvCoord;varying vec3 normalWorld;
          void main(){
            float cloud=texture2D(cloudMap,uvCoord).r;
            float alpha=smoothstep(0.30,0.76,cloud);
            float light=smoothstep(-0.16,0.38,dot(normalize(normalWorld),normalize(sunDirection)));
            vec3 col=vec3(0.92,0.955,0.99)*(0.22+0.78*light);
            gl_FragColor=vec4(col,alpha*(0.08+0.72*light));
          }
        `,
        transparent:true, depthWrite:false,
      });
      const cloudLayer = new THREE.Mesh(cloudGeometry,cloudMaterial);
      cloudLayer.rotation.y=0.64;
      tilt.add(cloudLayer);

      // Thin scattering shell, lit from top. This is intentionally subtle.
      const atmosphereGeometry = new THREE.SphereGeometry(radius*1.018,160,112);
      const atmosphereMaterial = new THREE.ShaderMaterial({
        uniforms:{ sunDirection:{value:sunDirection}, cameraWorld:{value:camera.position}},
        vertexShader:`
          varying vec3 nWorld;varying vec3 posWorld;
          void main(){vec4 p=modelMatrix*vec4(position,1.0);posWorld=p.xyz;nWorld=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}
        `,
        fragmentShader:`
          uniform vec3 sunDirection;uniform vec3 cameraWorld;
          varying vec3 nWorld;varying vec3 posWorld;
          void main(){vec3 N=normalize(nWorld);vec3 V=normalize(cameraWorld-posWorld);
            float limb=pow(1.0-clamp(dot(N,V),0.0,1.0),12.0);
            float illumination=smoothstep(-0.12,0.45,dot(N,normalize(sunDirection)));
            float alpha=limb*(0.06+0.94*illumination)*0.29;
            gl_FragColor=vec4(vec3(0.26,0.61,0.98),alpha);
          }
        `,
        transparent:true, depthWrite:false, blending:THREE.AdditiveBlending,
      });
      const atmosphere = new THREE.Mesh(atmosphereGeometry,atmosphereMaterial);
      earth.add(atmosphere);

      const resize = () => {
        const w=host.clientWidth,h=host.clientHeight;
        if (!w || !h) return;
        camera.aspect=w/h;
        // Keep the same horizon height across layouts without stretching the planet.
        camera.fov = w < 600 ? 43 : w < 900 ? 39 : 33;
        camera.updateProjectionMatrix();
        renderer.setSize(w,h,false);
      };
      const resizeObs=new ResizeObserver(resize);
      resizeObs.observe(host);resize();
      let visible=true;
      const intersection=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;},{threshold:0});
      intersection.observe(host);
      const onContextLoss=(e:Event)=>{e.preventDefault();visible=false;setLoaded(false);};
      renderer.domElement.addEventListener("webglcontextlost",onContextLoss);
      let raf=0,last=performance.now();
      const frame=(now:number)=>{
        raf=requestAnimationFrame(frame);
        const dt=Math.min((now-last)/1000,0.05);last=now;
        if (!visible || document.hidden) return;
        surface.rotation.y += dt * 0.006;
        cloudLayer.rotation.y += dt * 0.0075;
        renderer.render(scene,camera);
      };
      renderer.render(scene,camera);
      setLoaded(true);
      raf=requestAnimationFrame(frame);
      teardown=()=>{
        cancelAnimationFrame(raf);resizeObs.disconnect();intersection.disconnect();
        renderer.domElement.removeEventListener("webglcontextlost",onContextLoss);
        sphere.dispose();surfaceMaterial.dispose();cloudGeometry.dispose();cloudMaterial.dispose();
        atmosphereGeometry.dispose();atmosphereMaterial.dispose();
        maps.forEach(t=>t.dispose());renderer.dispose();renderer.forceContextLoss();
        if(renderer.domElement.parentNode===host)host.removeChild(renderer.domElement);
      };
    })().catch(e=>console.warn("Earth hero WebGL unavailable; using image fallback.",e));

    return () => {cancelled=true;teardown();};
  },[]);

  return <section className={styles.hero} aria-labelledby="global-earth-title">
    <div className={styles.photo} aria-hidden="true" />
    <div ref={hostRef} className={`${styles.canvas} ${loaded ? styles.loaded : ""}`} aria-hidden="true" />
    <div className={styles.stars} aria-hidden="true" />
    <div className={styles.shade} aria-hidden="true" />
    <div className={styles.copy}>
      <p className={styles.eyebrow}><span className={styles.dot} /> DEVOPSTRIO <span className={styles.separator}>•</span> GLOBAL TECHNOLOGY SOLUTIONS</p>
      <h1 id="global-earth-title" className={styles.title}><span>Global Delivery.</span><span className={styles.highlight}>Local Expertise.</span></h1>
    </div>
  </section>;
}
