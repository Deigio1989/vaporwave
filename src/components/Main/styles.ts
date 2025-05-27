import styled from "styled-components";

export const PlanetContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2%;
  width: 100%;
  z-index: 1;
`;

export const SunContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  top: -10%;
  left: 0;
  @media (max-height: 450px) {
    height: 450px;
  }
`;
