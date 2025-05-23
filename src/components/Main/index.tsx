"use client";
import React from "react";

import { PlanetContainer } from "./styles";
import { Section } from "../../globalStyles";
import Galaxy from "../Galaxy";
import Sun from "../Sun";

const Main: React.FC = () => {
  return (
    <PlanetContainer>
      <Galaxy />
      <Sun />
    </PlanetContainer>
  );
};

export default Main;
