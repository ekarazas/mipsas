import styled from "styled-components";
import homeBG from "assets/images/homeBG.jpg";
import homeSmallBG from "assets/images/homeSmallBG.jpg";

export const Background = styled.main`
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url(${homeBG});
  background-size: cover;
  background-position: 0% 40%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  width: 100%;

  @media (max-width: 30rem) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${homeSmallBG});
  }
`;
