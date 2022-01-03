import styled from "styled-components";

interface Styles {
  position?: string;
  height?: string;
  margin?: string;
  maxWidth?: string;
  padding?: string;
}

export const Container = styled.div<Styles>`
  display: block;
  height: ${({ height }) => height || ""};
  margin: ${({ margin }) => margin || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "75rem"};
  padding: ${({ padding }) => padding || "0 1.5rem"};
  position: ${({ position }) => position || "relative"};
`;
