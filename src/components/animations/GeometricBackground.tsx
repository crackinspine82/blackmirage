'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/hooks/useTheme';

interface GeometricBackgroundProps {
  pattern?: 'cubes' | 'spheres' | 'pyramids' | 'waves';
  density?: number;
  speed?: number;
  onHover?: boolean;
}

function GeometricPattern({ pattern = 'cubes', density = 50, speed = 1, onHover = false }: GeometricBackgroundProps) {
  const { primary, secondary, accentPink } = useTheme();
  const points = useRef<THREE.Points>(null!);
  const hover = useRef(onHover);
  hover.current = onHover;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useFrame((state) => {
    if (!mounted || !points.current) return;
    
    const time = state.clock.getElapsedTime() * speed * (hover.current ? 1.5 : 1);

    switch (pattern) {
      case 'cubes':
        points.current.rotation.x = time * 0.1;
        points.current.rotation.y = time * 0.15;
        break;
      case 'spheres':
        points.current.rotation.y = time * 0.15;
        points.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.1);
        break;
      case 'pyramids':
        points.current.rotation.y = time * 0.2;
        points.current.position.y = Math.sin(time * 0.5) * 0.5;
        break;
      case 'waves':
        points.current.position.y = Math.sin(time * 0.5) * 0.3;
        const positions = points.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] = Math.sin(positions[i] * 0.5 + time) * Math.cos(positions[i + 2] * 0.5 + time) * 2;
        }
        points.current.geometry.attributes.position.needsUpdate = true;
        break;
    }
  });

  // Generate positions based on pattern
  const positions = useMemo(() => {
    if (!mounted) return { positions: new Float32Array(density * 3), colors: new Float32Array(density * 3) };

    const pos = new Float32Array(density * 3);
    const colors = new Float32Array(density * 3);
    const color1 = new THREE.Color(primary);
    const color2 = new THREE.Color(secondary);
    const color3 = new THREE.Color(accentPink);

    // Use a seeded random number generator
    let currentSeed = pattern.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const random = () => {
      currentSeed = (currentSeed * 9301 + 49297) % 233280;
      return currentSeed / 233280;
    };

    for (let i = 0; i < density; i++) {
      let x, y, z;
      const colorIndex = Math.floor(random() * 3);
      const color = [color1, color2, color3][colorIndex];

      switch (pattern) {
        case 'cubes':
          x = (random() - 0.5) * 10;
          y = (random() - 0.5) * 10;
          z = (random() - 0.5) * 10;
          break;
        case 'spheres':
          const phi = random() * Math.PI * 2;
          const costheta = random() * 2 - 1;
          const u = random();
          const theta = Math.acos(costheta);
          const r = Math.cbrt(u) * 5;
          x = r * Math.sin(theta) * Math.cos(phi);
          y = r * Math.sin(theta) * Math.sin(phi);
          z = r * Math.cos(theta);
          break;
        case 'pyramids':
          const side = Math.floor(random() * 4);
          const height = random() * 5;
          switch (side) {
            case 0:
              x = height;
              y = random() * height;
              z = random() * height;
              break;
            case 1:
              x = -height;
              y = random() * height;
              z = random() * height;
              break;
            case 2:
              x = random() * height;
              y = height;
              z = random() * height;
              break;
            default:
              x = random() * height;
              y = random() * height;
              z = height;
          }
          break;
        case 'waves':
          x = (random() - 0.5) * 10;
          z = (random() - 0.5) * 10;
          y = Math.sin(x * 0.5) * Math.cos(z * 0.5) * 2;
          break;
        default:
          x = (random() - 0.5) * 10;
          y = (random() - 0.5) * 10;
          z = (random() - 0.5) * 10;
      }

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions: pos, colors };
  }, [pattern, density, primary, secondary, accentPink, mounted]);

  return (
    <Points ref={points}>
      <PointMaterial
        transparent
        vertexColors
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.positions.length / 3}
          array={positions.positions}
          itemSize={3}
          args={[positions.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={positions.colors.length / 3}
          array={positions.colors}
          itemSize={3}
          args={[positions.colors, 3]}
        />
      </bufferGeometry>
    </Points>
  );
}

export default function GeometricBackground({ pattern, density, speed, onHover }: GeometricBackgroundProps) {
  return (
    <div className="absolute inset-0 bg-primary">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <GeometricPattern pattern={pattern} density={density} speed={speed} onHover={onHover} />
      </Canvas>
    </div>
  );
}
