"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function AvailableOn() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Basic Three.js Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Central Sphere
    const centralGeometry = new THREE.SphereGeometry(2, 32, 32);
    const centralMaterial = new THREE.MeshStandardMaterial({
      color: 0xffcc00,
      emissive: 0x220038,
      emissiveIntensity: 0.5,
    });
    const centralSphere = new THREE.Mesh(centralGeometry, centralMaterial);
    scene.add(centralSphere);

    // Orbiting Planets with Icons
    const planetData = [
      {
        name: "MEXC Global",
        image: "https://neurashi.com/wp-content/uploads/2023/10/image.png",
      },
      { name: "BitMart", image: "Bitmart.png" },
      { name: "PancakeSwap", image: "Kucoin.png" },
    ];

    const planets: THREE.Mesh[] = [];
    planetData.forEach((data, index) => {
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(data.image);

      const planetGeometry = new THREE.SphereGeometry(0.5, 32, 32);
      const planetMaterial = new THREE.MeshStandardMaterial({ map: texture });
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);

      const angle = (index / planetData.length) * Math.PI * 2;
      const radius = 5; // Distance from the central sphere
      planet.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        0
      );
      scene.add(planet);
      planets.push(planet);
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate Central Sphere
      centralSphere.rotation.y += 0.005;

      // Orbit Planets
      planets.forEach((planet, index) => {
        const angle =
          Date.now() * 0.001 + (index / planets.length) * Math.PI * 2;
        const radius = 5;
        planet.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0
        );
      });

      renderer.render(scene, camera);
    };

    camera.position.z = 10;
    animate();

    // Cleanup on Component Unmount
    return () => {
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
    };
  }, []);

return (
  // Section 2
  <section className="relative h-[500px] w-full text-center">
    <h2 className="text-3xl md:text-6xl font-bold text-white mb-10">
      Available On
    </h2>
    <div
      ref={containerRef}
      className="relative h-full w-full"
      style={{
        background: "transparent",
      }}
    ></div>
  </section>

         
  );
}
