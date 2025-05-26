"use client";
import React from "react";

import { Section } from "../../styles/globalStyles";
import Galaxy from "../Galaxy";
import Sun from "../Sun";
import { Plane } from "three";
import { PlaceholderContainer, PlanetContainer } from "./styles";
import GalaxyPlaceholder from "../GalaxyPlaceholder";

const Main: React.FC = () => {
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
        <PlanetContainer>
          <Galaxy />
        </PlanetContainer>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 10,
            top: "-10%",
            left: 0,
          }}
        >
          <Sun />
        </div>
        <PlaceholderContainer>
          <GalaxyPlaceholder />
        </PlaceholderContainer>
      </div>
    </>
  );
};

export default Main;
