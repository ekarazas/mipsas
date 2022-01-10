import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, H2, SectionWrapper } from "components";
import { white } from "styles/colors";
import { DetailCard } from "../elements/DetailCard";
const apiLink = "../mock_data/list.json";

export const DetailsSection: React.FC = () => {
  const { studyID } = useParams<{ studyID: string }>();
  const [study, setStudy] = useState([]);

  useEffect(() => {
    fetch(apiLink)
      .then((res) => res.json())
      .then((data) => {
        setStudy(
          data.data.filter((item: { id: string }) => item.id === studyID)
        );
      })
      .catch((err) => console.log(err));
  }, [studyID]);

  console.log(study);

  return (
    <SectionWrapper>
      <Container>
        <H2 margin="0 0 2rem" textAlign="center" color={white} fontWeight={400}>
          Study details
        </H2>
        {study &&
          study.map(
            ({
              id,
              name,
              updatedAt,
              imagesCount,
              studyThumbnail,
              createdAt,
              statusKey,
              tags,
            }) => (
              <DetailCard
                key={id}
                id={id}
                name={name}
                updatedAt={updatedAt}
                imagesCount={imagesCount}
                studyThumbnail={studyThumbnail}
                createdAt={createdAt}
                statusKey={statusKey}
                tags={tags}
              />
            )
          )}
      </Container>
    </SectionWrapper>
  );
};
