import styled from "styled-components";
import { mobile } from "styles/breakpoints";
import { TextBaseBold } from "./TextBase";

export const H1 = styled(TextBaseBold).attrs({ as: "h1" })`
  font-size: 5rem;

  @media ${mobile} {
    font-size: 3rem;
  }
`;
