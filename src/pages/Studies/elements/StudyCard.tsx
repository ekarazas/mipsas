import styled from "styled-components";

import { ContentFrameSmall, FlexWrapper, H4, TextWrapper } from "components";
import { mobile, tablet } from "styles/breakpoints";
import { green, red, white, yellow } from "styles/colors";
import { StudyCardProps } from "utils/types";

export const StudyCard: React.FC<StudyCardProps> = ({
  updatedAt,
  name,
  statusKey,
  studyThumbnail,
}) => {
  const slicedUpdateDate =
    updatedAt.slice(0, 10) + " " + updatedAt.slice(11, 16);

  const status =
    statusKey === "draft"
      ? "Draft"
      : statusKey === "finished"
      ? "Finished"
      : "Pending";

  return (
    <Card>
      <Image src={studyThumbnail} alt={studyThumbnail} />
      <CardContent flexDirection="column" justifyContent="space-between">
        <H4 margin="0 0 0.5rem">{name}</H4>
        <FlexWrapper justifyContent="space-between" alignItems="center">
          <UpdateDate>
            <TextWrapper fontWeight={700}>Last Update </TextWrapper>
            {slicedUpdateDate}
          </UpdateDate>
          <Status statusColor={status}>{status}</Status>
        </FlexWrapper>
      </CardContent>
    </Card>
  );
};

const FlexWrapperHover = styled(FlexWrapper)`
  background-color: rgba(0, 0, 0, 0.6);
  display: none;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const Card = styled(ContentFrameSmall)`
  background: ${white};
  cursor: pointer;
  margin: 0;
  margin-bottom: 2rem;
  position: relative;
  width: calc(33.33% - 4rem / 3);

  &:not(:nth-child(3n)) {
    margin-right: 2rem;
  }

  @media ${tablet} {
    width: calc(50% - 1.5rem / 2);
    margin-bottom: 1.5rem;

    &:not(:nth-child(3n)) {
      margin-right: 0;
    }

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

  &:hover ${FlexWrapperHover} {
    display: flex;
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
  opacity: 50%;
`;

const Status = styled(TextWrapper)<{ statusColor?: string }>`
  color: ${({ statusColor }) =>
    statusColor === "Draft"
      ? red
      : statusColor === "Finished"
      ? green
      : yellow};
`;
