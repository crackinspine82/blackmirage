'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BlueprintBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Store ref value
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x0a192f, 1); // Dark blue background
    container.appendChild(renderer.domElement);

    // Create main grid
    const size = 200;
    const divisions = 100;
    const gridHelper = new THREE.GridHelper(size, divisions, 0x4a90e2, 0x2867b2);
    gridHelper.position.y = -20;
    scene.add(gridHelper);

    // Create circuit lines
    const createCircuitLine = (points: THREE.Vector3[]) => {
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ 
        color: 0x4a90e2,
        transparent: true,
        opacity: 0.6
      });
      return new THREE.Line(geometry, material);
    };

    const circuits: THREE.Line[] = [];
    const createCircuit = (startX: number, startZ: number) => {
      const points = [];
      let currentX = startX;
      let currentZ = startZ;
      let currentY = -15;

      // Create random circuit path
      for (let i = 0; i < 10; i++) {
        points.push(new THREE.Vector3(currentX, currentY, currentZ));
        
        // Random direction change
        const direction = Math.floor(Math.random() * 4);
        switch(direction) {
          case 0: currentX += 5; break;
          case 1: currentX -= 5; break;
          case 2: currentZ += 5; break;
          case 3: currentZ -= 5; break;
        }
        
        // Occasionally change Y
        if (Math.random() > 0.7) {
          currentY += (Math.random() - 0.5) * 2;
        }
      }

      const circuit = createCircuitLine(points);
      scene.add(circuit);
      circuits.push(circuit);
    };

    // Create multiple circuits
    for (let i = 0; i < 20; i++) {
      const startX = (Math.random() - 0.5) * 100;
      const startZ = (Math.random() - 0.5) * 100;
      createCircuit(startX, startZ);
    }

    // Create blueprint dots
    const dotsGeometry = new THREE.BufferGeometry();
    const dotsPositions = [];
    const dotsColors = [];
    const color = new THREE.Color(0x4a90e2);

    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 200;
      
      dotsPositions.push(x, y, z);
      dotsColors.push(color.r, color.g, color.b);
    }

    dotsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(dotsPositions, 3));
    dotsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(dotsColors, 3));

    const dotsMaterial = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });

    const dots = new THREE.Points(dotsGeometry, dotsMaterial);
    scene.add(dots);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0x4a90e2, 2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Position camera
    camera.position.z = 50;
    camera.position.y = 30;
    camera.rotation.x = -0.5;

    // Animation
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);

      // Rotate grid slightly
      gridHelper.rotation.y += 0.001;

      // Animate circuits
      circuits.forEach((circuit, index) => {
        const material = circuit.material as THREE.LineBasicMaterial;
        material.opacity = 0.3 + Math.sin(Date.now() * 0.001 + index) * 0.3;
      });

      // Animate dots
      dots.rotation.y += 0.0005;
      (dots.material as THREE.PointsMaterial).opacity = 0.3 + Math.sin(Date.now() * 0.0005) * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frame);
      renderer.dispose();
      gridHelper.geometry.dispose();
      circuits.forEach(circuit => {
        circuit.geometry.dispose();
        (circuit.material as THREE.Material).dispose();
      });
      dotsGeometry.dispose();
      dotsMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0"
      style={{
        background: 'radial-gradient(circle at center, #0a192f 0%, #050c17 100%)'
      }}
    />
  );
}
