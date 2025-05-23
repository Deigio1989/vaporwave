import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useState } from "react";
import { on } from "events";

function SunMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [sunSize, setSunSize] = useState(14); // tamanho atual
  const [targetSize, setTargetSize] = useState(14); // tamanho alvo

  function onHandleMouseOver() {
    setTargetSize(16);
    document.body.style.cursor = "pointer";
  }
  function onHandleMouseOut() {
    setTargetSize(14);
    document.body.style.cursor = "default";
  }

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0025;
    }
    // Interpolação suave do tamanho
    setSunSize((prev) => {
      if (Math.abs(prev - targetSize) < 0.01) return targetSize;
      return prev + (targetSize - prev) * 0.1; // ajuste o 0.1 para mais/menos suavidade
    });
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      onPointerOver={onHandleMouseOver}
      onPointerOut={onHandleMouseOut}
    >
      <sphereGeometry args={[sunSize, 16, 16]} />
      <meshBasicMaterial color="#ffffff" wireframe={true} />
    </mesh>
  );
}

export default function Sun() {
  return (
    <Canvas camera={{ position: [0, 50, 50], fov: 75 }}>
      <SunMesh />
      <EffectComposer>
        <Bloom
          intensity={1}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
