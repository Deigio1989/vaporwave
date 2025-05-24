import styled, { keyframes } from "styled-components";

interface OrbitCircleProps {
  $planetColor?: string;
}
interface OrbitBeforeContentProps {
  $planetColor?: string;
  $highlightColor?: string;
}

// Helper to inject props into keyframes
const starlightanimation = (props: OrbitCircleProps) => keyframes`
  0% {
    box-shadow: 0 0 2px 1px ${props.$planetColor || "transparent"};
  }
  50% {
    box-shadow: 0 0 11px 2px ${props.$planetColor || "transparent"};
  }
  100% {
    box-shadow: 0 0 2px 1px ${props.$planetColor || "transparent"};
  }
`;

export const OrbitCircle = styled.div<OrbitCircleProps>`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;

  border: 1px solid ${({ $planetColor }) => $planetColor || "transparent"};
  box-shadow: 0 0 16px 2px
    ${({ $planetColor }) => $planetColor || "transparent"};

  animation: ${starlightanimation} 5s infinite;
  background-color: rgba(0, 0, 0, 0.5);
  width: 150px;
  height: 150px;
  position: absolute;
  transition: box-shadow 0.3s;
  transition: box-shadow 0.3s;
  img {
    padding: 16px;
  }

  &:hover {
    box-shadow: 0 0 16px 2px ${({ $planetColor }) => $planetColor},
      0 0 2px 2px #7ecbff66;

    cursor: pointer;
  }

  &:hover .orbit-before-content {
    opacity: 1;
    top: -25%;
    left: -20%;
    pointer-events: auto;
  }
`;

export const OrbitBeforeContent = styled.div<OrbitBeforeContentProps>`
  font-size: 16px;
  padding: 0 8px;
  pointer-events: none;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 350px;
  height: 212px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 10;
  transition: opacity 0.3s, top 0.5s, left 0.5s;
  color: #fff;

  img {
    padding: 0;
    position: absolute;
    top: -10px;
  }

  h2 {
    margin-top: 8px;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
  }

  p {
    font-weight: 400;
    line-height: 180%;
    font-size: 12px;
    padding: 0 12px;
    text-align: center;
    b {
      color: ${({ $planetColor, $highlightColor }) =>
        $highlightColor || $planetColor};
    }
  }
  p,
  h2 {
    z-index: 10;
  }
  button {
    position: absolute;
    bottom: 24px;

    color: #fff;
    font-size: 16px;
    background: rgba(0, 0, 0, 0.35);
    border: 1px solid
      ${({ $planetColor, $highlightColor }) => $highlightColor || $planetColor};
    padding: 6px 8px;
    transition: box-shadow 0.3s;

    cursor: pointer;
  }
  button:hover {
    font-weight: 500;
    background-color: ${({ $planetColor, $highlightColor }) =>
      $highlightColor || $planetColor};
    box-shadow: 0 0 5px 1px
      ${({ $planetColor, $highlightColor }) => $highlightColor || $planetColor};
    color: #000;
  }
`;
