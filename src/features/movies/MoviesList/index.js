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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies } from "../moviesSlice";

const MoviesList = ({ insideDetails }) => {
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <MainWrapper insideDetails={insideDetails}>
            <Header>Popular movies</Header>
            <TilesContainer insideDetails={insideDetails}>
                {movies.map(movie =>
                    <TileMovie
                        key={movie.id}
                    >
                        <ImageWrapper>
                            <Image src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="" />
                        </ImageWrapper>
                        <ContentWrapper>
                            <Title>{movie.original_title}</Title>
                            <StyledDate>
                                {movie.release_date.slice(0,4)}
                            </StyledDate>
                            <TagsWrapper>
                                <Tag>Action</Tag>
                                <Tag>Thriller</Tag>
                                <Tag>Action</Tag>
                            </TagsWrapper>
                            <RatingWrapper>
                                <StarIcon />
                                <Rate>{movie.vote_average}</Rate>
                                <Votes>{movie.vote_count} votes</Votes>
                            </RatingWrapper>
                        </ContentWrapper>
                    </TileMovie>
                )}
                {/* <TileMovie>
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
                </TileMovie> */}
            </TilesContainer>
        </MainWrapper>
    )
};

export default MoviesList;