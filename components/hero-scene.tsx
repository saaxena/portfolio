"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Crystal() {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.18;
    mesh.current.rotation.x += delta * 0.05;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.7}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.35, 0]} />
        <meshStandardMaterial
          color="#d7ff3f"
          wireframe
          transparent
          opacity={0.72}
        />
      </mesh>
      <mesh scale={0.62}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#ece8e1"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="relative h-[340px] w-full md:h-[420px]">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 42 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 2, 4]} intensity={18} color="#d7ff3f" />
        <pointLight position={[-4, -2, 2]} intensity={8} color="#ffffff" />
        <Crystal />
      </Canvas>
    </div>
  );
}
