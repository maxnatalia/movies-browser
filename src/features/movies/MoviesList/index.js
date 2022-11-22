import {
    MainWrapper,
    TilesContainer,
    Header,
    TileMovie,
    ImageWrapper,
    Image,
    ContentWrapper,
    Title,
    StyledDate,
    TagsWrapper,
    Tag,
    RatingWrapper,
    StarIcon,
    Rate,
    Votes
} from "./styled";
import poster from "../../../common/images/poster.png";

const MoviesList = ({ insideDetails }) => {
    return (
            <MainWrapper insideDetails={insideDetails}>
                <Header>Popular movies</Header>
                <TilesContainer insideDetails={insideDetails}>
                    <TileMovie>
                        <ImageWrapper>
                            <Image src={poster} alt="" />
                        </ImageWrapper>
                        <ContentWrapper>
                            <Title>Mulan</Title>
                            <StyledDate>
                                2020
                            </StyledDate>
                            <TagsWrapper>
                                <Tag>Action</Tag>
                                <Tag>Thriller</Tag>
                                <Tag>Action</Tag>
                            </TagsWrapper>
                            <RatingWrapper>
                                <StarIcon />
                                <Rate>7,8</Rate>
                                <Votes>35 votes</Votes>
                            </RatingWrapper>
                        </ContentWrapper>
                    </TileMovie>
                    <TileMovie>
                        <ImageWrapper>
                            <Image />
                        </ImageWrapper>
                        <ContentWrapper>
                            <Title>Mulan</Title>
                            <StyledDate>
                                2020
                            </StyledDate>
                            <TagsWrapper>
                            </TagsWrapper>
                            <RatingWrapper>
                                <StarIcon />
                                <Rate>7,8</Rate>
                                <Votes>35 votes</Votes>
                            </RatingWrapper>
                        </ContentWrapper>
                    </TileMovie>
                    <TileMovie>
                        <ImageWrapper>
                            <Image />
                        </ImageWrapper>
                        <ContentWrapper>
                            <Title>Mulan</Title>
                            <StyledDate>
                            </StyledDate>
                            <TagsWrapper>
                                <Tag>Action</Tag>
                            </TagsWrapper>
                            <RatingWrapper>
                                <StarIcon />
                                <Rate>7,8</Rate>
                                <Votes>35 votes</Votes>
                            </RatingWrapper>
                        </ContentWrapper>
                    </TileMovie>
                    <TileMovie>
                        <ImageWrapper>
                            <Image />
                        </ImageWrapper>
                        <ContentWrapper>
                            <Title>Mulanhshsjsskskgfddddddddddd</Title>
                            <StyledDate>
                                2020
                            </StyledDate>
                            <TagsWrapper>
                                <Tag>Action</Tag>
                                <Tag>Thriller</Tag>
                                <Tag>Action</Tag>
                            </TagsWrapper>
                            <RatingWrapper>
                                <StarIcon />
                                <Rate>7,8</Rate>
                                <Votes>35 votes</Votes>
                            </RatingWrapper>
                        </ContentWrapper>
                    </TileMovie>
                    <TileMovie>
                        <ImageWrapper>
                            <Image />
                        </ImageWrapper>
                        <ContentWrapper>
                            <Title>Mulan</Title>
                            <StyledDate>
                                2020
                            </StyledDate>
                            <TagsWrapper>
                                <Tag>Action</Tag>
                                <Tag>Thriller</Tag>
                                <Tag>Action</Tag>
                            </TagsWrapper>
                            <RatingWrapper>
                                <StarIcon />
                                <Rate>7,8</Rate>
                                <Votes>35 votes</Votes>
                            </RatingWrapper>
                        </ContentWrapper>
                    </TileMovie>
                </TilesContainer>
            </MainWrapper>
    )
};

export default MoviesList;