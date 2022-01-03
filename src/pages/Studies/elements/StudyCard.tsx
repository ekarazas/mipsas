import React from "react";
import styled from "styled-components";

import { ContentFrameSmall, FlexWrapper, H4, TextWrapper } from "components";
import { mobile, tablet } from "styles/breakpoints";
import { black, white } from "styles/colors";

export const StudyCard: React.FC = () => {
  return (
    <Card>
      <Image src="https://picsum.photos/200/300" alt="hello" />
      <CardContent flexDirection="column" justifyContent="space-between">
        <H4 margin="0 0 0.5rem">Hello WheelyBug</H4>
        <FlexWrapper justifyContent="space-between">
          <UpdateDate>Last Update 2020-02-10</UpdateDate>

          <Status>Draft</Status>
        </FlexWrapper>
      </CardContent>
    </Card>
  );
};

const Card = styled(ContentFrameSmall)`
  background: ${white};
  cursor: pointer;
  margin: 0;
  margin-bottom: 1rem;
  width: calc(33.33% - 2rem / 3);

  &:not(:nth-child(3n)) {
    margin-right: 1rem;
  }

  @media ${tablet} {
    width: calc(50% - 3rem / 2);

    &:not(:nth-child(2n)) {
      margin-right: 1.5rem;
    }
  }

  @media ${mobile} {
    min-width: 100%;

    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

const CardContent = styled(FlexWrapper)`
  padding: 1rem;
`;

const Image = styled.img`
  max-height: 13rem;
  object-fit: cover;
  width: 100%;
`;

const UpdateDate = styled(TextWrapper)`
  color: ${black};
  opacity: 50%;
`;

const Status = styled(TextWrapper)`
  color: red;
  opacity: 70%;
`;
