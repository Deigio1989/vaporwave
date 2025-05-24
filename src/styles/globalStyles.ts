import styled from "styled-components";
import { keyframes } from "styled-components";

interface SectionProps {
  backgroundheight?: string;
}

export const Section = styled.div<SectionProps>`
  background-color: transparent;
  height: ${(props) => props.backgroundheight};
  display: block;
  overflow: hidden;
  position: relative;
`;
