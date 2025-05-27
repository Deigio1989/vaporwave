// Instale: npm install three @react-three/fiber
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Stars({ count = 500 }) {
  const mesh = useRef<THREE.Group>(null);
  // Gera posições aleatórias para as estrelas

  const positions: [number, number, number][] = Array.from(
    { length: count },
    () => [
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200,
    ]
  );

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.00025; // movimento
    }
  });

  return (
    <group ref={mesh}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.05, 2, 2]} />
          <meshStandardMaterial
            color="#13bcf0"
            emissive="#5dd4ce"
            emissiveIntensity={3}
            metalness={0.2}
            roughness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function GalaxyBackground() {
  const backgroundColor = new THREE.Color("#1f1e27");
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 30, 80], fov: 75 }}>
      <color attach="background" args={["#1a0033"]} />
      <ambientLight intensity={0.3} />
      {/* Grid wireframe */}
      <gridHelper
        args={[1000, 100, "#f13493", "#f039aa"]}
        position={[0, 0, 0]}
      />
      <Stars count={250} />
      <EffectComposer>
        <Bloom
          intensity={1.5} // intensidade do bloom
          luminanceThreshold={0.1} // quão brilhante precisa ser para "bloomar"
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
