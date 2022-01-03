import styled from "styled-components";
import { mobile } from "styles/breakpoints";
import { white } from "styles/colors";

interface Styles {
  background?: string;
  borderRadius?: string;
  height?: string;
  margin?: string;
  maxHeight?: string;
  padding?: string;
  position?: string;
}

export const ContentFrameSmall = styled.div<Styles>`
  background: ${({ background }) => background || white};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  display: block;
  height: ${({ height }) => height || ""};
  margin: ${({ margin }) => margin || "auto"};
  max-width: 24rem;
  padding: ${({ padding }) => padding || ""};
  position: ${({ position }) => position || "relative"};
  width: 100%;

  @media ${mobile} {
    max-width: 100%;
  }
`;
