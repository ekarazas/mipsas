import React from "react";
import styled from "styled-components";

import { Container, FlexWrapper, H2, SectionWrapper } from "components";
import { white } from "styles/colors";
import { StudyCard } from "../elements/StudyCard";

export const CardSection: React.FC = () => {
  return (
    <SectionWrapper>
      <Container>
        <H2 margin="0 0 2rem" textAlign="center" color={white} fontWeight={400}>
          Studies
        </H2>
        <FlexWrapper wrap="wrap">
          <StudyCard />
          <StudyCard />
          <StudyCard />
          <StudyCard />
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};
