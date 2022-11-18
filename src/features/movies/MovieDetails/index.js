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
  AdditionalInfoWrapper
} from "../../../common/Details";
import image from "../../../common/images/poster.png";

const MovieDetails = () => {
  return (
    <MainWrapper>
      <DetailsWrapper>
        <DetailsImage src={image} alt="" />
        <TextWrapper>
          <DetailsTitle>Mulan</DetailsTitle>
          <Year>2020</Year>
          <AdditionalInfoWrapper>
            <DetailsText additionalQuestion>Production:</DetailsText>
            <DetailsText additionalAnswer>China, United States of America</DetailsText>
          </AdditionalInfoWrapper>
          <AdditionalInfoWrapper secondLine>
            <DetailsText additionalQuestion>Release date:</DetailsText>
            <DetailsText additionalAnswer>24.10.2020</DetailsText>
          </AdditionalInfoWrapper>
          <TagsWrapper>
            <Tag>Action</Tag>
            <Tag>Adventure</Tag>
            <Tag>Drama</Tag>
          </TagsWrapper>
          <RatingWrapper>
            <StarIcon />
            <Rate>7,8</Rate>
            <Votes>/ 10</Votes>
            <Votes>335 votes</Votes>
          </RatingWrapper>
          <Info>
            <DetailsText>
              A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself
              as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior
              in order to save her father.
            </DetailsText>
          </Info>
        </TextWrapper>
      </DetailsWrapper>
    </MainWrapper>
  );
};

export default MovieDetails;