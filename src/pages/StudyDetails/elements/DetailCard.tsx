import { Box, FlexWrapper, H2, H3, TextWrapper } from "components";
import { Study } from "utils/types";
import { green, red, white, yellow } from "styles/colors";
import styled from "styled-components";
import { mobile, tablet } from "styles/breakpoints";

export const DetailCard: React.FC<Study> = ({
  id,
  name,
  updatedAt,
  createdAt,
  studyThumbnail,
  imagesCount,
  statusKey,
}) => {
  const status =
    statusKey === "draft"
      ? "Draft"
      : statusKey === "finished"
      ? "Finished"
      : "Pending";

  const slicedUpdateDate =
    updatedAt.slice(0, 10) + " " + updatedAt.slice(11, 16);

  const slicedCreatedAtDate =
    createdAt.slice(0, 10) + " " + createdAt.slice(11, 16);

  const renderImages = () => {
    const images = [];
    for (let i = 0; i < imagesCount; i++) {
      images.push(
        <DetailImage
          key={Math.random() * 6000}
          src={studyThumbnail}
          alt={studyThumbnail}
        />
      );
    }
    return images;
  };

  return (
    <Box background={white} padding="1.5rem">
      <FlexWrapper wrap="wrap" margin="0 0 2rem">
        <ThumbnailImage src={studyThumbnail} alt={studyThumbnail} />
        <FlexedContent justifyContent="space-between">
          <FlexWrapper flexDirection="column">
            <H2 margin="0 0 0.5rem" fontWeight={400}>
              {name}
            </H2>
            <FlexWrapper margin="0 0 0.3rem" wrap="wrap" alignItems="center">
              <TextWrapper fontWeight={700} margin="0 0.3rem 0 0">
                Created at:
              </TextWrapper>
              <TextWrapper>{slicedCreatedAtDate}</TextWrapper>
            </FlexWrapper>
            <UpdateDate wrap="wrap" alignItems="center">
              <TextWrapper fontWeight={700} margin="0 0.3rem 0 0">
                Last Update:
              </TextWrapper>
              <TextWrapper>{slicedUpdateDate}</TextWrapper>
            </UpdateDate>
          </FlexWrapper>
          <Status statusColor={status}>{status}</Status>
        </FlexedContent>
      </FlexWrapper>

      <Box>
        <H3 fontWeight={400} margin="0 0 1.5rem">
          Your study images:
        </H3>
        <FlexWrapper wrap="wrap">{renderImages()}</FlexWrapper>
      </Box>
    </Box>
  );
};

const ThumbnailImage = styled.img`
  height: 10rem;
  margin-right: 2rem;
  object-fit: cover;
  width: 15rem;

  @media ${tablet} {
    height: 15rem;
    margin-bottom: 2rem;
    min-width: 100%;
  }
`;

const FlexedContent = styled(FlexWrapper)`
  flex-grow: 1;
`;

const Status = styled(TextWrapper)<{ statusColor?: string }>`
  color: ${({ statusColor }) =>
    statusColor === "Draft"
      ? red
      : statusColor === "Finished"
      ? green
      : yellow};
  font-size: 1.5rem;

  @media ${mobile} {
    font-size: 1.2rem;
  }
`;

const UpdateDate = styled(FlexWrapper)`
  opacity: 50%;
`;

const DetailImage = styled.img`
  height: 10rem;
  margin-bottom: 2rem;
  object-fit: cover;
  width: calc(25% - 6rem / 4);

  &:not(:nth-child(4n)) {
    margin-right: 2rem;
  }

  @media ${tablet} {
    width: calc(50% - 1.5rem / 2);
    margin-bottom: 1.5rem;

    &:not(:nth-child(4n)) {
      margin-right: 0;
    }

    &:not(:nth-child(2n)) {
      margin-right: 1.5rem;
    }
  }

  @media ${mobile} {
    min-width: 100%;

    &:not(:nth-child(2n)) {
      margin-right: 0rem;
    }

    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }
  }
`;
