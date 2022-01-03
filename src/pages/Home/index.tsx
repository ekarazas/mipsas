import React from "react";
import styled from "styled-components";
import { Background } from "./elements/Background";
import { PrimaryButton } from "components/buttons/PrimaryButton";
import { MainHeader } from "layout/headers/MainHeader";

const Home: React.FC = () => {
  return (
    <>
      <Background />
      <MainHeader />
      <TestContainer>
        <PrimaryButton>Get Started</PrimaryButton>
      </TestContainer>
    </>
  );
};

export default Home;

const TestContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
