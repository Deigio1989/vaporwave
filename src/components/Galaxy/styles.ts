import styled from "styled-components";

export const GalaxyContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 0;

  width: 600px;
  height: 10px;
  margin: 0 auto;
`;
export const Orbit = styled.div`
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
  z-index: 1;
  path {
    position: absolute;
    top: 50%;
    left: 50%;
    pointer-events: none;
    z-index: 1;
  }

  .orbit-div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .orbit-div:hover {
    z-index: 20;
  }
`;
