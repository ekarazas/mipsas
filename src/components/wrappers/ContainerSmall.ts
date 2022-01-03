import styled from "styled-components";

interface Styles {
  margin?: string;
  maxWidth?: string;
  padding?: string;
  position?: string;
}

export const ContainerSmall = styled.div<Styles>`
  display: block;
  max-width: ${({ maxWidth }) => maxWidth || "49.5rem"};
  margin: ${({ margin }) => margin || "auto"};
  padding: ${({ padding }) => padding || "0 1.5rem"};
  position: ${({ position }) => position || "relative"};
`;
