"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, Color } from "three";

// Simple whale shape using basic geometry (oval body, tail, fins)
function Whale() {
  const bodyRef = useRef<Mesh>(null);
  const tailRef = useRef<Mesh>(null);
  const leftFinRef = useRef<Mesh>(null);
  const rightFinRef = useRef<Mesh>(null);
  // Animate gentle undulation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (bodyRef.current) bodyRef.current.rotation.z = Math.sin(t) * 0.05;
    if (tailRef.current) tailRef.current.rotation.y = Math.sin(t * 2) * 0.3;
    if (leftFinRef.current) leftFinRef.current.rotation.z = Math.cos(t * 2) * 0.4 - 0.3;
    if (rightFinRef.current) rightFinRef.current.rotation.z = -Math.cos(t * 2) * 0.4 + 0.3;
  });
  return (
    <group position={[0, -0.2, 0]}>
      {/* Body */}
      <mesh ref={bodyRef} position={[0, 0, 0]} scale={[0.8, 0.25, 0.25]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#2b7cff" wireframe />
      </mesh>
      {/* Tail */}
      <mesh ref={tailRef} position={[-0.85, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.3, 0.08, 0.02]} />
        <meshBasicMaterial color="#2b7cff" wireframe />
      </mesh>
      {/* Left Fin */}
      <mesh ref={leftFinRef} position={[0.2, -0.18, 0.09]} rotation={[0, 0, -Math.PI / 3]}>
        <boxGeometry args={[0.24, 0.05, 0.01]} />
        <meshBasicMaterial color="#2b7cff" wireframe />
      </mesh>
      {/* Right Fin */}
      <mesh ref={rightFinRef} position={[0.2, -0.18, -0.09]} rotation={[0, 0, Math.PI / 3]}>
        <boxGeometry args={[0.24, 0.05, 0.01]} />
        <meshBasicMaterial color="#2b7cff" wireframe />
      </mesh>
    </group>
  );
}

export default function WhaleBackground() {
  return (
    <div style={{position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", width: "100%", height: "100%", overflow: "hidden"}}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }} gl={{ alpha: true }}>
        {/* Subtle blue water background */}
        <color attach="background" args={[new Color(0x0a1a2f).lerp(new Color(0x06204c), 0.5)]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 2]} intensity={0.2} />
        <Whale />
      </Canvas>
    </div>
  );
}
