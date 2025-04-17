'use client';

import React, { useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Canyon terrain generator
function CanyonTerrain() {
  const width = 32;
  const depth = 400;
  const segmentsW = 64;
  const segmentsD = 320;

  // Generate canyon geometry
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(width, depth, segmentsW, segmentsD);
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      // Center is lower (canyon floor), sides are higher (walls)
      const normX = x / (width / 2);
      const wallHeight = Math.pow(Math.abs(normX), 2.2) * 7;
      // Subtle undulation
      const undulation = Math.sin(y * 0.08) * 0.7 + Math.cos(x * 0.15 + y * 0.04) * 0.3;
      const z = wallHeight + undulation + (Math.random() - 0.5) * 0.12;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <mesh
      geometry={geometry}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, -180]}
      receiveShadow
      castShadow
    >
      <meshBasicMaterial color="#fafbfc" wireframe />
    </mesh>
  );
}
// Camera animation
function CanyonCameraMotion() {
  const { camera } = useThree();
  useFrame(() => {
    // Swirling path parameters
    const swirlRadius = 2.2;
    const swirlSpeed = 0.013; // angular speed
    const forwardSpeed = 0.032; // slower forward speed
    const t = -camera.position.z; // use z as time axis

    camera.position.z -= forwardSpeed;
    camera.position.x = Math.sin(t * swirlSpeed) * swirlRadius;
    camera.position.y = 2.2 + Math.cos(t * swirlSpeed * 0.7) * 0.33;
    camera.lookAt(
      Math.sin((t + 10) * swirlSpeed) * swirlRadius * 0.9, // look ahead along swirl
      0.5,
      camera.position.z - 14
    );
  });
  return null;
}

export default function OrigamiTerrainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 2.2, 12], fov: 58, near: 0.1, far: 800 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#fff"]} />
        <fog attach="fog" args={["#fff", 18, 90]} />
        <ambientLight intensity={0.85} />
        <directionalLight
          position={[20, 40, 30]}
          intensity={0.7}
          color="#e0e0e0"
        />
        <CanyonCameraMotion />
        <CanyonTerrain />
      </Canvas>
    </div>
  );
}
