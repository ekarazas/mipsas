import styled from "styled-components";
import { white } from "styles/colors";

interface Styles {
  background?: string;
  border?: string;
  borderRadius?: string;
  color?: string;
  display?: string;
  fontSize?: string;
  fontWeight?: number;
  isLoading?: boolean;
  margin?: string;
  maxWidth?: string;
  minWidth?: string;
  padding?: string;
  width?: string;
  onClick?: () => void;
}

export const Button = styled.button<Styles>`
  background: ${({ background }) => background || "transparent"};
  border: ${({ border }) => border || "none"};
  border-radius: ${({ borderRadius }) => borderRadius || "1.5rem"};
  color: ${({ color }) => color || white};
  cursor: pointer;
  display: ${({ display }) => display || "inline-block"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  margin: ${({ margin }) => margin || ""};
  max-width: ${({ maxWidth }) => maxWidth || "16rem"};
  min-width: ${({ minWidth }) => minWidth || "none"};
  padding: ${({ padding }) => padding || "0.8rem 1.5rem"};
  position: relative;
  transition: all 0.3s ease-in-out;
  width: ${({ width }) => width || ""};
`;
