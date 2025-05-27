"use client";
import React, { useEffect, useState } from "react";

import Galaxy from "../Galaxy";
import Sun from "../Sun";
import GalaxyPlaceholder from "../GalaxyPlaceholder";
import { useGalaxyStore } from "@/store/useGalaxystore";

import { PlanetContainer, SunContainer } from "./styles";

const Main: React.FC = () => {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    function handleResize() {
      const screenheight = window.innerHeight;
      const height = 824;
      const proportion = Math.max(screenheight / height, 0.6);

      useGalaxyStore.getState().setScale(proportion);
      setScale(proportion);
    }

    handleResize(); // chama ao montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 1,
          top: "10%",
          left: 0,
        }}
      >
        <PlanetContainer style={{ transform: `scale(${scale})` }}>
          <Galaxy />
        </PlanetContainer>
        <SunContainer>
          <Sun />
        </SunContainer>
        <PlanetContainer style={{ zIndex: 15, transform: `scale(${scale})` }}>
          <GalaxyPlaceholder />
        </PlanetContainer>
      </div>
    </>
  );
};

export default Main;
