import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import burger_menu from "assets/icons/burger_menu.svg";
import close_button from "assets/icons/close_button.svg";

import { mobile, useQuery } from "styles/breakpoints";
import { black, primaryLight, white } from "styles/colors";
import { Box, FlexWrapper, Paragraph } from "components";

export const MainHeader: React.FC = () => {
  const { isMobile } = useQuery();
  const [menuOpen, toggleMenu] = useState(false);

  const showMenu = () => toggleMenu(!menuOpen);

  return (
    <NavSection width="100%">
      <FlexWrapperStyled
        justifyContent={isMobile ? "end" : "center"}
        alignItems="center"
      >
        {isMobile && (
          <BurgerButton onClick={showMenu}>
            <BurgerSvg src={burger_menu} />
          </BurgerButton>
        )}
        <StyledBox menuOpen={menuOpen} className={menuOpen ? "active" : ""}>
          {isMobile && (
            <Box height="4rem">
              <FlexWrapperStyled justifyContent="end" alignItems="center">
                <CloseButton onClick={showMenu}>
                  <CloseSvg src={close_button} />
                </CloseButton>
              </FlexWrapperStyled>
            </Box>
          )}
          <FlexWrapper
            flexDirection={isMobile ? "column" : ""}
            alignItems="center"
            padding={isMobile ? "0 2rem 0 0" : ""}
          >
            <StyledLink to="/" onClick={showMenu}>
              <NavItem>Home</NavItem>
            </StyledLink>
            <StyledLink to="/studies" onClick={showMenu}>
              <NavItem>Studies</NavItem>
            </StyledLink>
            <StyledLink to="/" onClick={showMenu}>
              <NavItem>Privacy Policy</NavItem>
            </StyledLink>
            <StyledLink to="/" onClick={showMenu}>
              <NavItem>Contacts</NavItem>
            </StyledLink>
          </FlexWrapper>
        </StyledBox>
      </FlexWrapperStyled>
    </NavSection>
  );
};

const NavSection = styled(Box)`
  background: transparent;
  height: 4rem;
`;

const FlexWrapperStyled = styled(FlexWrapper)`
  height: 100%;
`;

const StyledBox = styled(Box)<{ menuOpen?: boolean }>`
  @media ${mobile} {
    background: ${({ menuOpen }) => (menuOpen ? black : "")};
    height: 100vh;
    position: absolute;
    padding: 0 0 2rem 2rem;
    right: -100rem;
    top: 0;
    transition: 750ms;
    width: 100%;
    z-index: 99;
  }

  &.active {
    right: 0;
    transition: 500ms;
  }
`;

const NavItem = styled(Paragraph)`
  color: ${white};
  font-weight: 900;

  @media ${mobile} {
    font-size: 1.4rem;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;

  &:not(:first-child) {
    margin-left: 2rem;
  }

  &:hover ${NavItem} {
    color: ${primaryLight};
  }

  @media ${mobile} {
    margin-bottom: 1.5rem;

    &:not(:first-child) {
      margin-left: 0;
    }
  }
`;

const BurgerButton = styled.a`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 1rem;
`;
const CloseButton = styled.a`
  height: 1rem;
  width: 1rem;
  margin-right: 1.5rem;
`;

const BurgerSvg = styled.img``;

const CloseSvg = styled.img`
  height: 1rem;
  width: 1rem;
`;
