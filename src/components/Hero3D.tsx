import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, Stars, Sphere } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import laptopImg from "@/assets/laptop.png";

function LaptopPlane() {
  const ref = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, laptopImg);
  texture.anisotropy = 8;

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const mx = state.pointer.x;
    const my = state.pointer.y;
    // gentle tilt that follows the mouse + breathing motion
    ref.current.rotation.y = mx * 0.4 + Math.sin(t * 0.5) * 0.08;
    ref.current.rotation.x = -my * 0.25 + Math.sin(t * 0.7) * 0.05;
    ref.current.position.y = Math.sin(t * 0.9) * 0.18;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ref}>
        <planeGeometry args={[4.6, 4.6]} />
        <meshBasicMaterial map={texture} transparent toneMapped={false} />
      </mesh>
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

function GlowRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.15;
  });
  return (
    <mesh ref={ref} position={[0, 0, -1.5]}>
      <torusGeometry args={[2.6, 0.02, 16, 120]} />
      <meshBasicMaterial color="#00e5ff" transparent opacity={0.5} toneMapped={false} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={2.5} color="#00e5ff" />
        <pointLight position={[-5, -3, 3]} intensity={2} color="#ff2bd6" />
        <pointLight position={[0, 4, -4]} intensity={1.2} color="#a855f7" />
        <GlowRing />
        <LaptopPlane />
        <Orb position={[2.8, 1.6, -1]} color="#00e5ff" scale={0.16} />
        <Orb position={[-3.0, -1.2, 0]} color="#ff2bd6" scale={0.2} />
        <Orb position={[-2.4, 1.9, -2]} color="#a855f7" scale={0.13} />
        <Orb position={[2.6, -1.8, -1.5]} color="#00e5ff" scale={0.11} />
        <Stars radius={50} depth={50} count={2500} factor={3} fade speed={1} />
      </Suspense>
    </Canvas>
  );
}
