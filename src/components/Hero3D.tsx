import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sphere, RoundedBox, Text } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Laptop() {
  const group = useRef<THREE.Group>(null);
  const lid = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.4) * 0.5;
      group.current.position.y = Math.sin(t * 0.8) * 0.12;
    }
    if (lid.current) {
      // subtle lid breathing between ~100° and ~110°
      lid.current.rotation.x = -Math.PI / 1.75 + Math.sin(t * 0.6) * 0.04;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
      <group ref={group} rotation={[-0.25, 0.4, 0]} scale={1.15}>
        {/* Base / keyboard deck */}
        <RoundedBox args={[3.2, 0.16, 2.1]} radius={0.06} smoothness={6} castShadow>
          <meshStandardMaterial color="#1a1d2e" metalness={0.9} roughness={0.25} />
        </RoundedBox>

        {/* Trackpad */}
        <mesh position={[0, 0.085, 0.5]}>
          <boxGeometry args={[1.1, 0.005, 0.7]} />
          <meshStandardMaterial color="#0f1220" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Keyboard area */}
        <mesh position={[0, 0.085, -0.35]}>
          <boxGeometry args={[2.7, 0.005, 1.0]} />
          <meshStandardMaterial color="#0a0d1a" metalness={0.5} roughness={0.6} />
        </mesh>

        {/* Glowing edge underneath */}
        <mesh position={[0, -0.1, 0]}>
          <boxGeometry args={[3.0, 0.02, 1.95]} />
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={1.5} toneMapped={false} />
        </mesh>

        {/* Lid (screen) — hinge at back of base */}
        <group ref={lid} position={[0, 0.08, -1.05]}>
          <group position={[0, 1, 0]}>
            {/* Screen back */}
            <RoundedBox args={[3.2, 2.0, 0.1]} radius={0.05} smoothness={6}>
              <meshStandardMaterial color="#1a1d2e" metalness={0.9} roughness={0.25} />
            </RoundedBox>

            {/* Screen display */}
            <mesh position={[0, 0, 0.055]}>
              <planeGeometry args={[3.0, 1.85]} />
              <meshStandardMaterial
                color="#050816"
                emissive="#0a1428"
                emissiveIntensity={0.8}
                toneMapped={false}
              />
            </mesh>

            {/* Code lines on screen */}
            <group position={[0, 0, 0.06]}>
              <Text
                position={[-1.3, 0.65, 0]}
                fontSize={0.11}
                color="#ff2bd6"
                anchorX="left"
                font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPQ.woff"
              >
                {"const dev = {"}
              </Text>
              <Text position={[-1.15, 0.45, 0]} fontSize={0.1} color="#00e5ff" anchorX="left">
                {"name: 'Anwar',"}
              </Text>
              <Text position={[-1.15, 0.27, 0]} fontSize={0.1} color="#a855f7" anchorX="left">
                {"role: 'Engineer',"}
              </Text>
              <Text position={[-1.15, 0.09, 0]} fontSize={0.1} color="#00e5ff" anchorX="left">
                {"stack: ['Flutter',"}
              </Text>
              <Text position={[-1.0, -0.09, 0]} fontSize={0.1} color="#00e5ff" anchorX="left">
                {"'WordPress', 'AI'],"}
              </Text>
              <Text position={[-1.15, -0.27, 0]} fontSize={0.1} color="#22d3a8" anchorX="left">
                {"shipping: true,"}
              </Text>
              <Text position={[-1.3, -0.47, 0]} fontSize={0.11} color="#ff2bd6" anchorX="left">
                {"};"}
              </Text>
              <Text position={[-1.3, -0.68, 0]} fontSize={0.13} color="#ffffff" anchorX="left">
                {"> _"}
              </Text>
            </group>

            {/* Screen glow */}
            <mesh position={[0, 0, 0.07]}>
              <planeGeometry args={[3.0, 1.85]} />
              <meshBasicMaterial color="#00e5ff" transparent opacity={0.04} toneMapped={false} />
            </mesh>
          </group>
        </group>
      </group>
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
      camera={{ position: [0, 0.4, 5.2], fov: 50 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={2.5} color="#00e5ff" />
        <pointLight position={[-5, -3, 3]} intensity={2} color="#ff2bd6" />
        <pointLight position={[0, 4, -4]} intensity={1.2} color="#a855f7" />
        <spotLight position={[0, 3, 3]} intensity={1.5} angle={0.6} penumbra={0.8} color="#ffffff" />
        <Laptop />
        <Orb position={[2.8, 1.6, -1]} color="#00e5ff" scale={0.16} />
        <Orb position={[-3.0, -1.2, 0]} color="#ff2bd6" scale={0.2} />
        <Orb position={[-2.4, 1.9, -2]} color="#a855f7" scale={0.13} />
        <Orb position={[2.6, -1.8, -1.5]} color="#00e5ff" scale={0.11} />
        <Stars radius={50} depth={50} count={2500} factor={3} fade speed={1} />
      </Suspense>
    </Canvas>
  );
}
