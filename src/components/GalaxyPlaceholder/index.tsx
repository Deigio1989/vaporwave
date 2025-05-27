import React, { useEffect, useRef, useState } from "react";
import { GalaxyContainer, Orbit } from "./styles";
import OrbitPlanetPlaceholder from "../OrbitPlanetPlaceholder";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGalaxyStore } from "@/store/useGalaxystore";
import { planets } from "../utils/planetsContent";

gsap.registerPlugin(MotionPathPlugin);

const GalaxyPlaceholder: React.FC = () => {
  const [duration] = useState(100);
  // Array fixo de refs
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
  }, [duration]); // planetRefs removido das dependências

  useEffect(() => {
    if (paused) {
      animationRefs.current.forEach((anim) => anim && anim.pause());
    } else {
      animationRefs.current.forEach((anim) => anim && anim.play());
    }
  }, [paused]);

  const handlePause = () => {
    useGalaxyStore.getState().setPaused(true);
    window.dispatchEvent(new Event("orbitPlanetsUpdate"));
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
          overflow: "visible",
        }}
      >
        <path
          id="orbit-path"
          d="M 800,325
             a 500,175 0 1,0 -1000,70
             a 500,175 0 1,0 1000,-70"
          fill="none"
          stroke="#fff"
          strokeDasharray="6 6"
          strokeWidth={2}
          opacity={0.5}
        />
      </svg>
      <Orbit>
        {planets.map((planet, index) => (
          <div
            className="orbit-div"
            ref={planetRefs.current[planet.order]}
            key={index}
          >
            <OrbitPlanetPlaceholder
              key={planet.hoverTitle}
              imageSrc={planet.imageSrc}
              planetColor={planet.planetColor}
              onMouseEnter={handlePause}
              onMouseLeave={handleResume}
            />
          </div>
        ))}
      </Orbit>
    </GalaxyContainer>
  );
};

export default GalaxyPlaceholder;
