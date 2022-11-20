import MainWrapper from "../../../common/MainWrapper";
import {
  DetailsImage,
  DetailsText,
  DetailsTitle,
  DetailsWrapper,
  TextWrapper,
  Info,
  AdditionalInfoWrapper,
} from "../../../common/Details";
import MoviesList from "../../movies/MoviesList";
import image from "../../../common/images/personDetails.png";

const PersonDetails = () => {
  return (
    <MainWrapper>
      <DetailsWrapper>
        <DetailsImage person src={image} alt="" />
        <TextWrapper>
          <DetailsTitle>Liu Yifei</DetailsTitle>
          <AdditionalInfoWrapper>
            <DetailsText additionalQuestion>Date of birth:</DetailsText>
            <DetailsText additionalAnswer>25.08.1987</DetailsText>
          </AdditionalInfoWrapper>
          <AdditionalInfoWrapper secondLine>
            <DetailsText additionalQuestion>Place of birth:</DetailsText>
            <DetailsText additionalAnswer>Wuhan, Hubei, China</DetailsText>
          </AdditionalInfoWrapper>
          <Info mobileHidden>
            <DetailsText longText>
              Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age
              of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother,
              Liu lived there for four years.
            </DetailsText>
          </Info>
          </TextWrapper>
          <Info mobileVisible>
            <DetailsText longText>
              Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age
              of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother,
              Liu lived there for four years.
            </DetailsText>
          </Info>
      </DetailsWrapper>
      <MoviesList />
      <MoviesList />
    </MainWrapper>
  );
};

export default PersonDetails;