import styled from "styled-components";
import { mobile } from "styles/breakpoints";
import { TextBase } from "./TextBase";

export const Paragraph = styled(TextBase)`
  font-size: 1.125rem;

  @media ${mobile} {
    font-size: 1rem;
  }
`;
