import styled from "styled-components";
import { mobile } from "styles/breakpoints";

interface Styles {
  hasBackground?: boolean;
  margin?: string;
  padding?: string;
}

export const SectionWrapper = styled.div<Styles>`
  display: block;
  margin: ${({ margin }) => margin || "3rem 0"};
  padding: ${({ padding }) => padding || ""};

  @media ${mobile} {
    margin: ${({ margin }) => margin || "2.5rem 0"};
  }
`;
