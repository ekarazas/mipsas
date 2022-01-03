import React from "react";
import styled from "styled-components";

import { primary, white } from "styles/colors";
import { FlexWrapper, H1, TextWrapper } from "components";
import { PrimaryButton } from "components/buttons/PrimaryButton";
import { NavLink } from "react-router-dom";

export const Welcome: React.FC = () => {
  return (
    <FlexWrapperStyled justifyContent="center" alignItems="center">
      <FlexWrapper flexDirection="column" alignItems="center">
        <H1 color={white}>
          <TextWrapper fontWeight={900} color={primary}>
            Wel
          </TextWrapper>
          come
        </H1>
        <PrimaryButton>
          <StyledLink to="/">Get Started</StyledLink>
        </PrimaryButton>
      </FlexWrapper>
    </FlexWrapperStyled>
  );
};

const FlexWrapperStyled = styled(FlexWrapper)`
  height: 100vh;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${white};
`;
