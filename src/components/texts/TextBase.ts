import styled from "styled-components";
import { black } from "styles/colors";

interface Styles {
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: string;
  margin?: string;
  opacity?: string;
  textAlign?: string;
  textDecoration?: string;
  textTransform?: string;
}

export const TextBase = styled.p<Styles>`
  color: ${({ color }) => color || black};
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  line-height: ${({ lineHeight }) => lineHeight || ""};
  margin: ${({ margin }) => margin || ""};
  opacity: ${({ opacity }) => opacity || ""};
  text-align: ${({ textAlign }) => textAlign || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
`;

export const TextBaseBold = styled(TextBase).attrs(
  ({ fontWeight }: Styles) => ({
    fontWeight: fontWeight || 900,
  })
)``;
