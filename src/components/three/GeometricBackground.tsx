'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Instances, Instance } from '@react-three/drei';
import * as THREE from 'three';

interface GeometryProps {
  pattern?: 'cubes' | 'spheres' | 'pyramids' | 'waves';
  density?: number;
  speed?: number;
  onHover?: boolean;
}

const Geometries = ({ pattern = 'cubes', density = 50, speed = 0.7, onHover = false }: GeometryProps) => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const currentSpeed = onHover ? speed * 1.5 : speed;
      ref.current.rotation.x = state.clock.getElapsedTime() * currentSpeed * 0.1;
      ref.current.rotation.y = state.clock.getElapsedTime() * currentSpeed * 0.05;
    }
  });

  const getGeometry = () => {
    switch (pattern) {
      case 'spheres':
        return <sphereGeometry args={[0.5]} />;
      case 'pyramids':
        return <coneGeometry args={[0.5, 1]} />;
      case 'waves':
        return <torusGeometry args={[0.3, 0.2, 16, 32]} />;
      case 'cubes':
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <group ref={ref}>
      <Instances limit={density}>
        {getGeometry()}
        <meshPhongMaterial />
        {Array.from({ length: density }, (_, i) => (
          <Instance 
            key={i}
            position={[
              Math.random() * 20 - 10,
              Math.random() * 20 - 10,
              Math.random() * 20 - 10
            ]}
            rotation={[
              Math.random() * Math.PI,
              Math.random() * Math.PI,
              Math.random() * Math.PI
            ]}
            scale={Math.random() * 0.5 + 0.5}
            color={i % 2 === 0 ? '#FF69B4' : '#800080'}
          />
        ))}
      </Instances>
    </group>
  );
};

export default function GeometricBackground({ pattern, density, speed, onHover }: GeometryProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 5, 30]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Geometries pattern={pattern} density={density} speed={speed} onHover={onHover} />
      </Canvas>
    </div>
  );
}
