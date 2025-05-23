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
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
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
          <sphereGeometry args={[0.05, 5, 5]} />
          <meshStandardMaterial
            color="#fff"
            emissive="#ffffff"
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
    <Canvas camera={{ position: [0, 0, 60], fov: 75 }}>
      {/* <color attach="background" args={["#121118"]} /> */}
      <Stars count={700} />
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
