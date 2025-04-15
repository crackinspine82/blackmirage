"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, Color } from "three";

// Stylized wireframe skull using primitives
function Skull() {
  const craniumRef = useRef<Mesh>(null);
  const jawRef = useRef<Mesh>(null);
  const leftEyeRef = useRef<Mesh>(null);
  const rightEyeRef = useRef<Mesh>(null);
  // Animate gentle rotation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (craniumRef.current) craniumRef.current.rotation.y = Math.sin(t) * 0.07;
    if (jawRef.current) jawRef.current.rotation.x = Math.sin(t * 1.5) * 0.08 - 0.15;
  });
  return (
    <group position={[0, -0.15, 0]}>
      {/* Cranium */}
      <mesh ref={craniumRef} position={[0, 0.18, 0]} scale={[0.48, 0.62, 0.48]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#2b7cff" wireframe />
      </mesh>
      {/* Jaw */}
      <mesh ref={jawRef} position={[0, -0.22, 0]} scale={[0.36, 0.22, 0.36]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#2b7cff" wireframe />
      </mesh>
      {/* Left Eye Socket */}
      <mesh ref={leftEyeRef} position={[-0.17, 0.10, 0.36]} scale={[0.13, 0.13, 0.08]}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshBasicMaterial color="#2b7cff" wireframe />
      </mesh>
      {/* Right Eye Socket */}
      <mesh ref={rightEyeRef} position={[0.17, 0.10, 0.36]} scale={[0.13, 0.13, 0.08]}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshBasicMaterial color="#2b7cff" wireframe />
      </mesh>
      {/* Nose Cavity */}
      <mesh position={[0, 0.01, 0.44]} scale={[0.06, 0.11, 0.05]}>
        <sphereGeometry args={[1, 18, 18]} />
        <meshBasicMaterial color="#2b7cff" wireframe />
      </mesh>
      {/* Cheekbones (stylized cylinders) */}
      <mesh position={[-0.24, -0.02, 0.18]} rotation={[0, 0, Math.PI / 5]} scale={[0.04, 0.18, 0.04]}>
        <cylinderGeometry args={[1, 1, 1, 12]} />
        <meshBasicMaterial color="#2b7cff" wireframe />
      </mesh>
      <mesh position={[0.24, -0.02, 0.18]} rotation={[0, 0, -Math.PI / 5]} scale={[0.04, 0.18, 0.04]}>
        <cylinderGeometry args={[1, 1, 1, 12]} />
        <meshBasicMaterial color="#2b7cff" wireframe />
      </mesh>
    </group>
  );
}

export default function SkullBackground() {
  return (
    <div style={{position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", width: "100%", height: "100%", overflow: "hidden"}}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }} gl={{ alpha: true }}>
        {/* Subtle blue water background */}
        <color attach="background" args={[new Color(0x0a1a2f).lerp(new Color(0x06204c), 0.5)]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 2]} intensity={0.2} />
        <Skull />
      </Canvas>
    </div>
  );
}
