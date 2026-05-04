import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Sphere, TorusKnot } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Knot() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.25;
    ref.current.rotation.y = state.clock.elapsedTime * 0.35;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <TorusKnot ref={ref} args={[1.2, 0.36, 220, 32]}>
        <MeshDistortMaterial
          color="#00e5ff"
          emissive="#ff2bd6"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.95}
          distort={0.35}
          speed={1.6}
        />
      </TorusKnot>
    </Float>
  );
}

function Orb({ position, color, scale = 0.4 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
  });
  return (
    <Sphere ref={ref} args={[scale, 32, 32]} position={position}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} toneMapped={false} />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 55 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2.5} color="#00e5ff" />
        <pointLight position={[-5, -3, 3]} intensity={2} color="#ff2bd6" />
        <pointLight position={[0, 4, -4]} intensity={1.2} color="#a855f7" />
        <Knot />
        <Orb position={[2.6, 1.4, -1]} color="#00e5ff" scale={0.18} />
        <Orb position={[-2.8, -1.2, 0]} color="#ff2bd6" scale={0.22} />
        <Orb position={[-2.2, 1.8, -2]} color="#a855f7" scale={0.14} />
        <Orb position={[2.4, -1.6, -1.5]} color="#00e5ff" scale={0.12} />
        <Stars radius={50} depth={50} count={2500} factor={3} fade speed={1} />
      </Suspense>
    </Canvas>
  );
}
