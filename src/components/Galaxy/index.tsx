import React, { useEffect, useRef, useState } from "react";
import { GalaxyContainer, Orbit } from "./styles";
import OrbitPlanet from "../OrbitPlanet";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGalaxyStore } from "@/store/useGalaxystore";
import { colors } from "@/styles/variables";
import { planets } from "../utils/planetsContent";

gsap.registerPlugin(MotionPathPlugin);

const Galaxy: React.FC = () => {
  const [duration] = useState(100);

  // Use um array fixo de refs
  const planetRefs = useRef([
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
  ]);
  const animationRefs = useRef<gsap.core.Tween[]>([]);

  const paused = useGalaxyStore((state) => state.paused);

  useEffect(() => {
    animationRefs.current.forEach((anim) => anim && anim.kill());
    animationRefs.current = [];

    planetRefs.current.forEach((ref, i) => {
      if (ref.current) {
        const tween = gsap.to(ref.current, {
          motionPath: {
            path: "#orbit-path",
            align: "#orbit-path",
            alignOrigin: [0.5, 0.5],
            start: i / planetRefs.current.length,
            end: i / planetRefs.current.length + 1,
            autoRotate: false,
          },
          repeat: -1,
          duration: duration,
          ease: "linear",
        });
        animationRefs.current.push(tween);
      }
    });
  }, [duration]); // Remova planetRefs das dependências

  useEffect(() => {
    if (paused) {
      animationRefs.current.forEach((anim) => anim && anim.pause());
    } else {
      animationRefs.current.forEach((anim) => anim && anim.play());
    }
  }, [paused]);

  const handlePause = () => {
    useGalaxyStore.getState().setPaused(true);
  };
  const handleResume = () => {
    useGalaxyStore.getState().setPaused(false);
  };

  return (
    <GalaxyContainer>
      <svg
        width={1200}
        height={600}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <path
          id="orbit-path"
          d="M 800,325
             a 500,175 0 1,0 -1000,70
             a 500,175 0 1,0 1000,-70"
          fill="none"
          stroke="transparent"
          strokeDasharray="6 6"
          strokeWidth={2}
          opacity={0.3}
        />
      </svg>
      <Orbit>
        {planets.map((planet, index) => (
          <div className="orbit-div" ref={planetRefs.current[planet.order]}>
            <OrbitPlanet
              key={index}
              imageSrc={planet.imageSrc}
              planetColor={planet.planetColor}
              hoverTitle={planet.hoverTitle}
              onMouseEnter={handlePause}
              onMouseLeave={handleResume}
            />
          </div>
        ))}
      </Orbit>
    </GalaxyContainer>
  );
};

export default Galaxy;
