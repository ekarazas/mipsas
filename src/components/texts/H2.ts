import styled from "styled-components";
import { TextBaseBold } from "./TextBase";
import { mobile } from "../../styles/breakpoints";

export const H2 = styled(TextBaseBold).attrs({ as: "h2" })`
  font-size: 2rem;

  @media ${mobile} {
    font-size: 1.5rem;
  }
`;
