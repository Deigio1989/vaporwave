import React, { useEffect, useRef, useState } from "react";
import { GalaxyContainer, Orbit } from "./styles";
import OrbitPlanet from "../OrbitPlanet";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const Galaxy: React.FC = () => {
  const [duration] = useState(100);
  const planetRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const animationRefs = useRef<gsap.core.Tween[]>([]);

  const pink = "#F90094";
  const blue = "#0023B5";
  const yellow = "#F9B807";
  const red = "#931E26";

  useEffect(() => {
    // Mata animações antigas antes de criar novas
    animationRefs.current.forEach((anim) => anim && anim.kill());
    animationRefs.current = [];

    planetRefs.forEach((ref, i) => {
      if (ref.current) {
        const tween = gsap.to(ref.current, {
          motionPath: {
            path: "#orbit-path",
            align: "#orbit-path",
            alignOrigin: [0.5, 0.5],
            start: i / planetRefs.length,
            end: i / planetRefs.length + 1,
            autoRotate: false,
          },
          repeat: -1,
          duration: duration,
          ease: "linear",
        });
        animationRefs.current.push(tween);
      }
    });
  }, [duration, planetRefs]);

  // Pausa e retoma todas as animações
  const handlePause = () => {
    animationRefs.current.forEach((anim) => anim && anim.pause());
  };
  const handleResume = () => {
    animationRefs.current.forEach((anim) => anim && anim.resume());
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
        <div
          className="orbit-div"
          ref={planetRefs[0]}
          style={{ position: "absolute" }}
        >
          <OrbitPlanet
            imageSrc="./logo-nca.png"
            planetColor={red}
            hoverTitle="NCA"
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          ></OrbitPlanet>
        </div>
        <div
          className="orbit-div"
          ref={planetRefs[1]}
          style={{ position: "absolute" }}
        >
          <OrbitPlanet
            imageSrc="./logo-fora-da-caixa.png"
            planetColor={yellow}
            hoverTitle="Facil"
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          ></OrbitPlanet>
        </div>
        <div
          className="orbit-div"
          ref={planetRefs[2]}
          style={{ position: "absolute" }}
        >
          <OrbitPlanet
            imageSrc="./logo-digi4all.png"
            planetColor={pink}
            hoverTitle="Digi4All"
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          ></OrbitPlanet>
        </div>
        <div
          className="orbit-div"
          ref={planetRefs[3]}
          style={{ position: "absolute" }}
        >
          <OrbitPlanet
            imageSrc="./logo-film-lab.png"
            planetColor={blue}
            hoverTitle="Film Lab"
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          ></OrbitPlanet>
        </div>
        <div
          className="orbit-div"
          ref={planetRefs[4]}
          style={{ position: "absolute" }}
        >
          <OrbitPlanet
            imageSrc="./logo-facil.png"
            planetColor={yellow}
            hoverTitle="Facil"
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          ></OrbitPlanet>
        </div>
      </Orbit>
    </GalaxyContainer>
  );
};

export default Galaxy;
