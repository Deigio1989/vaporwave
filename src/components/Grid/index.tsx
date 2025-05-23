import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function VaporwaveBackground() {
  return (
    <Canvas camera={{ position: [0, 30, 80], fov: 75 }}>
      <color attach="background" args={["#1a0033"]} />
      <ambientLight intensity={0.3} />
      {/* Grid wireframe */}
      <gridHelper
        args={[1000, 100, "#ff00cc", "#e746c7"]}
        position={[0, 0, 0]}
      />
      <EffectComposer>
        <Bloom
          intensity={1.5} // intensidade do bloom
          luminanceThreshold={0.01} // quão brilhante precisa ser para "bloomar"
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
