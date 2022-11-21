import MainWrapper from "../../../common/MainWrapper";
import {
  DetailsImage,
  DetailsText,
  DetailsTitle,
  DetailsWrapper,
  TextWrapper,
  Year,
  Info,
  RatingWrapper,
  StarIcon,
  Rate,
  Votes,
  Tag,
  TagsWrapper,
  AdditionalInfoWrapper,
} from "../../../common/Details";
import { PosterWrapper, PosterDisplay, MainInfoWrapper, MainInfoTitle } from "../../movies/MovieDetails/styled";
import PeopleList from "../../people/PeopleList";
import image from "../../../common/images/poster.png";

const MovieDetails = () => {
  return (
    <>
      <PosterDisplay>
        <PosterWrapper>
          <MainInfoWrapper>
            <MainInfoTitle>Mulan long title</MainInfoTitle>
            <RatingWrapper>
              <StarIcon infoMain />
              <Rate infoMain>7,8</Rate>
              <Votes infoMain>/ 10</Votes>
              <Votes infoMain normalHidden>
                335 votes
              </Votes>
            </RatingWrapper>
            <RatingWrapper mobileHidden>
              <Votes infoMain>335 votes</Votes>
            </RatingWrapper>
          </MainInfoWrapper>
        </PosterWrapper>
      </PosterDisplay>
      <MainWrapper>
        <DetailsWrapper>
          <DetailsImage src={image} alt="" />
          <TextWrapper>
            <DetailsTitle>Mulan</DetailsTitle>
            <Year>2020</Year>
            <AdditionalInfoWrapper>
              <DetailsText additionalQuestion mobileHidden>
                Production:
              </DetailsText>
              <DetailsText additionalAnswer>China, United States of America</DetailsText>
            </AdditionalInfoWrapper>
            <AdditionalInfoWrapper secondLine>
              <DetailsText additionalQuestion mobileHidden>
                Release date:
              </DetailsText>
              <DetailsText additionalAnswer>24.10.2020</DetailsText>
            </AdditionalInfoWrapper>
            <TagsWrapper>
              <Tag>Action</Tag>
              <Tag>Adventure</Tag>
              <Tag>Drama</Tag>
            </TagsWrapper>
            <RatingWrapper mobile>
              <StarIcon />
              <Rate>7,8</Rate>
              <Votes mobileHidden>/ 10</Votes>
              <Votes mobile>335 votes</Votes>
            </RatingWrapper>
          </TextWrapper>
          <Info>
            <DetailsText>
              A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself
              as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior
              in order to save her father.
            </DetailsText>
          </Info>
        </DetailsWrapper>
        <PeopleList insideDetails/>
        <PeopleList insideDetails/>
      </MainWrapper>
    </>
  );
};

export default MovieDetails;