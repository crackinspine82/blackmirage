import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

declare global {
  interface Window {
    smokeMeshes: THREE.Mesh[];
  }
}

// Helper for a single smoke particle with blurred texture
interface SmokeParticleProps {
  position: [number, number, number];
  velocity: [number, number, number];
  opacity: number;
  size: number;
  texture: THREE.Texture;
  bounds: { left: number; right: number; top: number; bottom: number };
  onRespawn: (mesh: THREE.Mesh) => void;
  refFn: (mesh: THREE.Mesh) => void;
}

function SmokeParticle({ position, velocity, opacity, size, texture, bounds, onRespawn, refFn }: SmokeParticleProps) {
  const mesh = useRef<THREE.Mesh>(null!);
  React.useEffect(() => { if (refFn) refFn(mesh.current); }, [refFn]);
  useFrame(() => {
    if (mesh.current) {
      mesh.current.position.x += velocity[0];
      if (mesh.current.material && 'opacity' in mesh.current.material) {
  (mesh.current.material as THREE.MeshBasicMaterial).opacity = opacity;
}
      // If out of left bound, respawn at right
      if (mesh.current.position.x < bounds.left) {
        if (onRespawn) onRespawn(mesh.current);
      }
    }
  });
  return (
    <mesh ref={mesh} position={position} userData={{
      baseY: position[1],
      wave1Amp: 0.08 + Math.random() * 0.11,
      wave1Freq: 0.15 + Math.random() * 0.18,
      wave1Phase: Math.random() * Math.PI * 2,
      wave2Amp: 0.03 + Math.random() * 0.06,
      wave2Freq: 0.45 + Math.random() * 0.23,
      wave2Phase: Math.random() * Math.PI * 2
    }}>
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

// Main smoke background
function SmokeParticles({ texture }: { texture: THREE.Texture }) {
  // Parameters for bounds
  const bounds = { left: -2.5, right: 2.5, top: 1.2, bottom: -1.2 };
  // Memoize initial smoke particles
  const [particles] = React.useState(() => {
    const arr = [];
    for (let i = 0; i < 1700; i++) { // Much thicker
      // Distribute X across the whole range so smoke is everywhere
      arr.push({
        position: [
  bounds.left + Math.random() * (bounds.right - bounds.left),
  Math.random() * (bounds.top - bounds.bottom) + bounds.bottom,
  0 as number
] as [number, number, number],
        velocity: [-(0.00075 + Math.random() * 0.00075), 0, 0] as [number, number, number],
        baseY: Math.random() * (bounds.top - bounds.bottom) + bounds.bottom,
        wave1Amp: 0.08 + Math.random() * 0.11,
        wave1Freq: 0.15 + Math.random() * 0.18,
        wave1Phase: Math.random() * Math.PI * 2,
        wave2Amp: 0.03 + Math.random() * 0.06,
        wave2Freq: 0.45 + Math.random() * 0.23,
        wave2Phase: Math.random() * Math.PI * 2,
        opacity: 0.07 + Math.random() * 0.09,
        size: 0.34 + Math.random() * 0.44,
        texture
      });
    }
    return arr;
  });

  // Respawn callback
  const handleRespawn = (mesh: THREE.Mesh) => {
    mesh.position.x = bounds.right + Math.random() * 0.2;
    const baseY = Math.random() * (bounds.top - bounds.bottom) + bounds.bottom;
    mesh.position.y = baseY;
    mesh.userData.baseY = baseY;
    mesh.userData.wave1Amp = 0.08 + Math.random() * 0.11;
    mesh.userData.wave1Freq = 0.15 + Math.random() * 0.18;
    mesh.userData.wave1Phase = Math.random() * Math.PI * 2;
    mesh.userData.wave2Amp = 0.03 + Math.random() * 0.06;
    mesh.userData.wave2Freq = 0.45 + Math.random() * 0.23;
    mesh.userData.wave2Phase = Math.random() * Math.PI * 2;
  };

  // Animate sine-wave undulation for natural movement
  useFrame(({ clock }) => {
    particles.forEach((p, i) => {
      const mesh = ((window as unknown as { smokeMeshes?: THREE.Mesh[] }).smokeMeshes)?.[i];
      if (mesh) {
        const t = clock.getElapsedTime();
        mesh.position.y = mesh.userData.baseY
          + Math.sin(t * mesh.userData.wave1Freq + mesh.userData.wave1Phase) * mesh.userData.wave1Amp
          + Math.sin(t * mesh.userData.wave2Freq + mesh.userData.wave2Phase) * mesh.userData.wave2Amp;
      }
    });
  });

  // Store mesh refs globally for sine animation (not ideal, but avoids rerender)
  window.smokeMeshes = window.smokeMeshes || [];

  return (
    <>
      {particles.map((p, i) => (
        <SmokeParticle
          key={i}
          {...p}
          position={Array.isArray(p.position) && p.position.length === 3 ? [p.position[0], p.position[1], p.position[2]] as [number, number, number] : [0, 0, 0]}
          velocity={Array.isArray(p.velocity) && p.velocity.length === 3 ? [p.velocity[0], p.velocity[1], p.velocity[2]] as [number, number, number] : [0, 0, 0]}
          bounds={bounds}
          onRespawn={handleRespawn}
          refFn={(mesh: THREE.Mesh) => {
            (window as unknown as { smokeMeshes: THREE.Mesh[] }).smokeMeshes[i] = mesh;
          }}
        />
      ))}
    </>
  );
}

function useBlurTexture(): THREE.Texture | null {
  const [texture, setTexture] = React.useState<THREE.Texture | null>(null);
  React.useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard
    const size = 320;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const gradient = ctx.createRadialGradient(
      size/2, size/2, 8,
      size/2, size/2, size/2
    );
    // Softer, more diffuse white for extensive blur
    gradient.addColorStop(0, 'rgba(255,255,255,0.22)');
    gradient.addColorStop(0.2, 'rgba(255,255,255,0.11)');
    gradient.addColorStop(0.6, 'rgba(255,255,255,0.04)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.Texture(canvas);
    tex.needsUpdate = true;
    setTexture(tex);
  }, []);
  return texture;
}

export default function StorySmokeBackground() {
  const texture = useBlurTexture();
  if (!texture) return null; // Don't render until client
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      zIndex: 0,
      background: "#000",
      pointerEvents: "none",
      overflow: "hidden"
    }}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 60 }} style={{ width: "100vw", height: "100vh", background: "#000", filter: "blur(7px)" }}>
        <SmokeParticles texture={texture} />
      </Canvas>
    </div>
  );
}
