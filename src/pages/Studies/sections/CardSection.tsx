import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, FlexWrapper, H2, SectionWrapper } from "components";
import { white } from "styles/colors";
import { StudyCard } from "../elements/StudyCard";
import { setStudiesList } from "state/actions";
import { studiesListSelector } from "state/reducers";

export const CardSection: React.FC = () => {
  const dispatch = useDispatch();
  const studiesList = useSelector(studiesListSelector);
  const apiLink = "mock_data/list.json";

  useEffect(() => {
    fetch(apiLink)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setStudiesList(data.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  console.log(studiesList);

  return (
    <SectionWrapper>
      <Container>
        <H2 margin="0 0 2rem" textAlign="center" color={white} fontWeight={400}>
          Studies
        </H2>
        <FlexWrapper wrap="wrap">
          {studiesList &&
            studiesList.map(
              ({ id, updatedAt, name, statusKey, studyThumbnail }) => (
                <StudyCard
                  key={id}
                  name={name}
                  updatedAt={updatedAt}
                  statusKey={statusKey}
                  studyThumbnail={studyThumbnail}
                />
              )
            )}
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};
