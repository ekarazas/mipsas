import styled from "styled-components";

import { primary, white } from "styles/colors";
import { FlexWrapper, H1, H2, TextWrapper } from "components";

export const MainSection: React.FC = () => {
  return (
    <FlexWrapperStyled justifyContent="center" alignItems="center">
      <FlexWrapper flexDirection="column" alignItems="center">
        <H1 color={white} margin="0">
          <TextWrapper fontWeight={900} color={primary}>
            4
          </TextWrapper>
          04
        </H1>
        <H2 color={white}>OOPS! Page not found</H2>
      </FlexWrapper>
    </FlexWrapperStyled>
  );
};

const FlexWrapperStyled = styled(FlexWrapper)`
  height: calc(100vh - 4rem);
`;
