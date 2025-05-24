"use client";
import React from "react";

import { PlanetContainer } from "./styles";
import { Section } from "../../styles/globalStyles";
import Galaxy from "../Galaxy";
import Sun from "../Sun";

const Main: React.FC = () => {
  return (
    <>
      <Sun />
      <Galaxy />
    </>
  );
};

export default Main;
