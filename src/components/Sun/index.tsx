import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useState } from "react";

function SunMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [sunSize, setSunSize] = useState(14);
  const [targetSize, setTargetSize] = useState(14);

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
    setSunSize((prev) => {
      if (Math.abs(prev - targetSize) < 0.01) return targetSize;
      return prev + (targetSize - prev) * 0.1;
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
      <meshBasicMaterial color="#74f1eb" wireframe={true} />
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
