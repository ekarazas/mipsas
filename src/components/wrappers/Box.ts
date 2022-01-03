import styled from "styled-components";

interface Styles {
  position?: string;
  margin?: string;
  padding?: string;
  minHeight?: string;
  height?: string;
  width?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  maxWidth?: string;
  textAlign?: string;
}

export const Box = styled.div<Styles>`
  position: ${({ position }) => position || ""};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  min-height: ${({ minHeight }) => minHeight || ""};
  height: ${({ height }) => height || ""};
  width: ${({ width }) => width || ""};
  max-width: ${({ maxWidth }) => maxWidth || ""};
  background: ${({ background }) => background || ""};
  border: ${({ border }) => border || ""};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  text-align: ${({ textAlign }) => textAlign || ""};
`;
