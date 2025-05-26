"use client";
import React from "react";
import { OrbitBeforeContent, OrbitCirclePlaceholder } from "./styles";

interface PlanetProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  planetColor: string;
}

const OrbitPlanetPlaceholder: React.FC<PlanetProps> = ({
  imageSrc,
  planetColor,
  ...rest
}) => (
  <OrbitCirclePlaceholder
    className="orbit-planet"
    $planetColor={planetColor}
    {...rest}
  >
    <OrbitBeforeContent
      $planetColor={planetColor}
      $highlightColor={planetColor}
      className="orbit-before-content"
    >
      <img src="./images/info-card.png" alt="" />
      <h2>test</h2>
      <p>test</p>
      <button>VIAJAR</button>
    </OrbitBeforeContent>
  </OrbitCirclePlaceholder>
);

export default OrbitPlanetPlaceholder;
