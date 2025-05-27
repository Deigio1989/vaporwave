"use client";
import React, { useEffect, useRef } from "react";
import { OrbitBeforeContent, OrbitCirclePlaceholder } from "./styles";
import { useGalaxyStore } from "@/store/useGalaxystore";

interface PlanetProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  planetColor: string;
}

const OrbitPlanetPlaceholder: React.FC<PlanetProps> = ({
  imageSrc,
  planetColor,
  ...rest
}) => {
  const planet = useRef<HTMLDivElement>(null);
  const scale = useGalaxyStore((state) => state.scale);
  const [tooltipTranslate, setTooltipTranslate] = React.useState({
    x: "0%",
    y: "0%",
  });
  function getTranslateX(element: HTMLElement): string {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const screenW = window.innerWidth;
    const normX = (centerX / screenW) * 2 - 1;
    return `${-(50 * normX)}%`;
  }

  function getTranslateY(element: HTMLElement): string {
    const rect = element.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    const screenH = window.innerHeight;
    const normY = (centerY / screenH) * 2 - 1;
    return `${-(50 * normY)}%`;
  }
  React.useEffect(() => {
    function updateTooltip() {
      if (planet.current) {
        setTooltipTranslate({
          x: getTranslateX(planet.current),
          y: getTranslateY(planet.current),
        });
      }
    }

    window.addEventListener("orbitPlanetsUpdate", updateTooltip);

    // Atualiza inicialmente
    updateTooltip();

    return () => {
      window.removeEventListener("orbitPlanetsUpdate", updateTooltip);
    };
  }, []);

  return (
    <OrbitCirclePlaceholder
      ref={planet}
      className="orbit-planet"
      $planetColor={planetColor}
      $tooltipTranslateX={tooltipTranslate.x}
      $tooltipTranslateY={tooltipTranslate.y}
      $scale={scale}
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
};

export default OrbitPlanetPlaceholder;
