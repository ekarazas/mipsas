import styled from "styled-components";
import { Button } from "./Button";
import { primary, primaryLight, white } from "styles/colors";

export const PrimaryButton = styled(Button)`
  background: ${primary};
  border: 0.05rem solid ${primary};
  color: ${white};

  &:hover {
    background: ${primaryLight};
    border: 0.05rem solid ${primaryLight};
  }
`;
