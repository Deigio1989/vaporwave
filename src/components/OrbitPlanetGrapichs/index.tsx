"use client";
import React from "react";
import { OrbitCircleGraphics } from "./styles";

interface PlanetProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  planetColor: string;
}

const OrbitPlanetGraphics: React.FC<PlanetProps> = ({
  imageSrc,
  planetColor,
  ...rest
}) => (
  <OrbitCircleGraphics
    className="orbit-planet"
    $planetColor={planetColor}
    {...rest}
  >
    <img src={imageSrc} />
  </OrbitCircleGraphics>
);

export default OrbitPlanetGraphics;
