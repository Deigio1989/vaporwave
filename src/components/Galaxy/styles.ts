import styled from "styled-components";

export const GalaxyContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 35%;
  margin: 0 auto;
`;

export const Orbit = styled.div`
  position: "absolute";
  top: 0;
  left: 0;
  width: 600;
  height: 600;
  z-index: 5;
  .orbit-div:hover {
    z-index: 20;
  }
`;
