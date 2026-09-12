"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import { useMemo, useRef } from "react";
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  Group,
  Mesh,
  SRGBColorSpace,
} from "three";

function PortraitMesh() {
  const texture = useTexture("/adarsh.jpg");
  texture.colorSpace = SRGBColorSpace;
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const x = state.pointer.x * 0.28;
    const y = state.pointer.y * 0.18;
    mesh.current.rotation.y += (x - mesh.current.rotation.y) * 0.06;
    mesh.current.rotation.x += (-y - mesh.current.rotation.x) * 0.06;
  });

  return (
    <mesh ref={mesh} position={[0, 0.05, 0]}>
      <circleGeometry args={[1.18, 80]} />
      <meshStandardMaterial map={texture} roughness={0.42} metalness={0.08} />
    </mesh>
  );
}

function NeuralCage() {
  const group = useRef<Group>(null);
  const cage = useRef<Mesh>(null);

  const { positions, connections } = useMemo(() => {
    const pts: number[] = [];
    const count = 46;
    for (let i = 0; i < count; i += 1) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 1.82;
      pts.push(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi) * 0.92,
        r * Math.cos(phi)
      );
    }
    const lines: number[] = [];
    for (let i = 0; i < count; i += 1) {
      for (let j = i + 1; j < count; j += 1) {
        const dx = pts[i * 3] - pts[j * 3];
        const dy = pts[i * 3 + 1] - pts[j * 3 + 1];
        const dz = pts[i * 3 + 2] - pts[j * 3 + 2];
        if (Math.hypot(dx, dy, dz) < 1.15) {
          lines.push(
            pts[i * 3],
            pts[i * 3 + 1],
            pts[i * 3 + 2],
            pts[j * 3],
            pts[j * 3 + 1],
            pts[j * 3 + 2]
          );
        }
      }
    }
    return { positions: new Float32Array(pts), connections: new Float32Array(lines) };
  }, []);

  const lineGeo = useMemo(() => {
    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(connections, 3));
    return geo;
  }, [connections]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
    if (cage.current) cage.current.rotation.y -= delta * 0.05;
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color={new Color("#d7ff3f")} size={0.045} sizeAttenuation />
      </points>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#d7ff3f" transparent opacity={0.28} />
      </lineSegments>
      <mesh ref={cage}>
        <icosahedronGeometry args={[1.72, 0]} />
        <meshStandardMaterial color="#d7ff3f" wireframe transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.35}>
      <PortraitMesh />
      <NeuralCage />
    </Float>
  );
}

export function NeuralPortrait() {
  return (
    <div className="relative h-[380px] w-full md:h-[460px]">
      <Canvas camera={{ position: [0, 0, 4.4], fov: 40 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.85} />
        <pointLight position={[2.4, 1.6, 3]} intensity={16} color="#d7ff3f" />
        <pointLight position={[-2.8, -1.2, 2]} intensity={7} color="#ffffff" />
        <Scene />
      </Canvas>
    </div>
  );
}
