'use client';

import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

interface DataFlowBackgroundProps {
  onHover?: boolean;
}

// Create a circular particle texture
function createParticleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  // Create radial gradient
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.3)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

  // Draw gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  return canvas;
}

// Seeded random function for consistent results
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

// Client-only particle system
function ParticleSystem({ onHover }: { onHover: boolean }) {
  const particlesRef = useRef<THREE.Points>(null);
  const hoverRef = useRef(0);
  
  // Create particle texture
  const particleTexture = useMemo(() => {
    const canvas = createParticleTexture();
    if (!canvas) return null;
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Create particle system with seeded randomization
  const [positions, colors, sizes, curves] = useMemo(() => {
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const curves: THREE.CatmullRomCurve3[] = [];

    let seed = 1234; // Consistent seed for randomization

    // Create flow paths (curves)
    for (let i = 0; i < 15; i++) {
      const points = [];
      const segments = Math.floor(seededRandom(seed++) * 3) + 3;
      for (let j = 0; j < segments; j++) {
        points.push(new THREE.Vector3(
          (seededRandom(seed++) - 0.5) * 20,
          (seededRandom(seed++) - 0.5) * 10,
          (seededRandom(seed++) - 0.5) * 10
        ));
      }
      curves.push(new THREE.CatmullRomCurve3(points, true));
    }

    // Distribute particles along curves
    let index = 0;
    curves.forEach(curve => {
      const particlesPerCurve = Math.floor(particleCount / curves.length);
      for (let i = 0; i < particlesPerCurve; i++) {
        const t = i / particlesPerCurve;
        const point = curve.getPoint(t);
        positions[index * 3] = point.x;
        positions[index * 3 + 1] = point.y;
        positions[index * 3 + 2] = point.z;

        // Color palette
        const baseColors = [
          new THREE.Color(0x1a237e), // Deep blue
          new THREE.Color(0x311b92), // Deep purple
          new THREE.Color(0x004d40), // Teal
          new THREE.Color(0xffd700).multiplyScalar(0.5), // Dimmed gold
        ];
        
        const colorIndex = Math.floor(seededRandom(seed++) * baseColors.length);
        const color = baseColors[colorIndex];
        colors[index * 3] = color.r;
        colors[index * 3 + 1] = color.g;
        colors[index * 3 + 2] = color.b;

        // Vary particle sizes
        sizes[index] = seededRandom(seed++) * 2 + 1;
        index++;
      }
    });

    return [positions, colors, sizes, curves];
  }, []); // Empty deps array since we use a fixed seed

  // Animation
  useFrame((state) => {
    if (!particlesRef.current) return;

    // Update hover state smoothly
    hoverRef.current += (onHover ? (1 - hoverRef.current) * 0.05 : -hoverRef.current * 0.05);

    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
    const colors = particlesRef.current.geometry.attributes.color.array as Float32Array;
    let index = 0;

    curves.forEach(curve => {
      const particlesPerCurve = Math.floor(positions.length / 3 / curves.length);
      for (let i = 0; i < particlesPerCurve; i++) {
        const t = (i / particlesPerCurve + state.clock.elapsedTime * (0.1 + hoverRef.current * 0.1)) % 1;
        const point = curve.getPoint(t);

        positions[index * 3] = point.x;
        positions[index * 3 + 1] = point.y;
        positions[index * 3 + 2] = point.z;

        // Increase brightness on hover
        const brightness = 1 + hoverRef.current * 0.5;
        const baseColor = new THREE.Color(
          colors[index * 3],
          colors[index * 3 + 1],
          colors[index * 3 + 2]
        );
        const brightColor = baseColor.multiplyScalar(brightness);

        colors[index * 3] = brightColor.r;
        colors[index * 3 + 1] = brightColor.g;
        colors[index * 3 + 2] = brightColor.b;

        index++;
      }
    });

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.geometry.attributes.color.needsUpdate = true;
  });

  if (!particleTexture) return null;

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        map={particleTexture}
      />
    </points>
  );
}

// Wrap the Canvas in a client component
export default function DataFlowBackground({ onHover = false }: DataFlowBackgroundProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b]" />
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60, near: 0.1, far: 1000 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <ParticleSystem onHover={onHover} />
      </Canvas>
    </div>
  );
}
