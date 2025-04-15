

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}


import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  // A basic pseudo-random smooth function for demo (replace with Perlin/simplex for more realism)
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  // Mesh parameters
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  // Animate the mesh by shifting the noise offset (scrolling the valley)
  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      // Animate the mesh by scrolling the noise in the Z direction
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      // Valley shape: lower in center, higher at sides
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  // Create geometry once and reuse it for animation
  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    // Add vertex colors
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      // Map height to grey: lower = lighter, higher = darker
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple 2D noise function for smooth mountain contours
function smoothNoise(x: number, y: number) {
  // A basic pseudo-random smooth function for demo (replace with Perlin/simplex for more realism)
  return (
    Math.sin(x * 0.3 + y * 0.5) * 0.8 +
    Math.sin(x * 0.13 + y * 0.22) * 0.4 +
    Math.sin(x * 0.07 + y * 0.18) * 0.2
  );
}

function FlyingValleyScene() {
  // Mesh parameters
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  // Animate the mesh by shifting the noise offset (scrolling the valley)
  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      // Animate the mesh by scrolling the noise in the Z direction
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      // Valley shape: lower in center, higher at sides
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  // Create geometry once and reuse it for animation
  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    // Add vertex colors
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      // Map height to grey: lower = lighter, higher = darker
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}
  const width = 40;
  const length = 120;
  const segmentsW = 80;
  const segmentsL = 160;
  const meshRef = useRef<THREE.Mesh>(null);
  const noiseOffset = useRef(0);

  // Animate the mesh by shifting the noise offset (scrolling the valley)
  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geo = mesh.geometry as THREE.PlaneGeometry;
    noiseOffset.current += state.clock.getDelta() * 1.2;
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      // Animate the mesh by scrolling the noise in the Z direction
      let z =
        smoothNoise(x * 0.38, (y + noiseOffset.current * 16) * 0.18) * 2.8 +
        smoothNoise(x * 0.12 + 12, (y + noiseOffset.current * 10) * 0.09) * 1.1;
      // Valley shape: lower in center, higher at sides
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      geo.attributes.position.setZ(i, z);
    }
    geo.computeVertexNormals();
    geo.attributes.position.needsUpdate = true;
  });

  // Create geometry once and reuse it for animation
  const geometryRef = React.useRef<THREE.PlaneGeometry | null>(null);
  if (!geometryRef.current) {
    const geo = new THREE.PlaneGeometry(width, length, segmentsW, segmentsL);
    // Add vertex colors
    const colors = [];
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const x = geo.attributes.position.getX(i);
      const y = geo.attributes.position.getY(i);
      let z = smoothNoise(x * 0.38, y * 0.18) * 2.8 + smoothNoise(x * 0.12 + 12, y * 0.09) * 1.1;
      const valley = 1.5 - Math.abs(x / (width * 0.5));
      z *= valley;
      // Map height to grey: lower = lighter, higher = darker
      const shade = 0.85 - Math.max(0, Math.min(1, (z + 3) / 7)) * 0.5;
      colors.push(shade, shade, shade);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometryRef.current = geo;
  }

  return (
    <>
      <ambientLight intensity={0.85} color="#fff" />
      <directionalLight position={[0, 20, 10]} intensity={0.5} color="#cccccc" />
      <mesh
        ref={meshRef}
        geometry={geometryRef.current}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          vertexColors={true}
          roughness={1}
          metalness={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
}

export default function OrigamiMountainBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 4.5, 18], fov: 65, near: 0.1, far: 100 }} dpr={[1, 2]} style={{ background: "#fff" }} shadows>
        <FlyingValleyScene />
      </Canvas>
    </div>
  );
}
