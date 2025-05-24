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

export const OrbitCircleGraphics = styled.div<OrbitCircleProps>`
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
`;
