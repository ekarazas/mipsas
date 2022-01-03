import styled from "styled-components";
import { mobile } from "styles/breakpoints";
import { TextBaseBold } from "./TextBase";

export const H1 = styled(TextBaseBold).attrs({ as: "h1" })`
  font-size: 3rem;

  @media ${mobile} {
    font-size: 1.69rem;
  }
`;
