import styled from "styled-components";
import { TextBaseBold } from "./TextBase";
import { mobile } from "styles/breakpoints";

export const H4 = styled(TextBaseBold).attrs({ as: "h4" })`
  font-size: 1.25rem;

  @media ${mobile} {
    font-size: 1.125rem;
  }
`;
