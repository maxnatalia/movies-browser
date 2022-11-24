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
import { fetchMovies, selectError, selectLoading, selectMovies } from "../moviesSlice";
import Error from "../../../common/Error";
import Loading from "../../../common/Loading";

const MoviesList = ({ insideDetails }) => {
    const movies = useSelector(selectMovies);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (error) {
        return (
            <Error />
        );
    }
    return (
        <MainWrapper insideDetails={insideDetails}>
            {loading ? (
                <Loading />
            ) : (
                <>
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
                                        {movie.release_date.slice(0, 4)}
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
                    </TilesContainer>
                </>
            )}
        </MainWrapper>
    )
};

export default MoviesList;