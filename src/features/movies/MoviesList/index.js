import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchGenres, selectError, selectLoading, selectMovies, selectGenres, selectQuery } from "../moviesSlice";
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
  Votes,
  StyledLink,
} from "./styled";
import Error from "../../../common/Error";
import Loading from "../../../common/Loading";
import Pagination from "../../../common/Pagination";
import NoResults from "../../../common/NoResults";
import { toMovieDetails } from "../../../routes";

const MoviesList = ({ insideDetails }) => {
    const movies = useSelector(selectMovies);
    const genres = useSelector(selectGenres);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const query = useSelector(selectQuery);
    const dispatch = useDispatch();

  useEffect(() => {
    if (genres.length === 0) {
      dispatch(fetchGenres());
    }
  });

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (error) {
    return <Error />;
  }

    return (
        <MainWrapper insideDetails={insideDetails}>
            {error && <Error />}
            {loading && <Loading loadingMessage={query ? `Search results for "${query}"` : ""} />}
            {movies.total_results === 0 && <NoResults noResultMessage={`Sorry, there are no results for “${query}”`} />}

            {movies.total_results > 1 && !loading &&
                <>
                    <Header>{query ? `Search results for "${query}" (${movies.total_results})` : `Popular movies`}</Header>
                    <TilesContainer insideDetails={insideDetails}>
                        {movies.results.map(movie =>
                            <StyledLink key={movie.id} to={toMovieDetails({ id: movie.id })}>
                            <TileMovie
                                key={movie.id}
                            >
                                <ImageWrapper>
                                    <Image src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="" />
                                </ImageWrapper>
                                <ContentWrapper>
                                    <Title>{movie.title}</Title>
                                    <StyledDate>
                                        {movie.release_date ? movie.release_date.slice(0, 4) : ""}
                                    </StyledDate>
                                    {movie.genre_ids ?
                                        <TagsWrapper>
                                            {movie.genre_ids.map(id =>
                                                <Tag key={id}>{genres.find(genre => genre.id === id).name}</Tag>
                                            )}
                                        </TagsWrapper>
                                        : ""
                                    }
                                    <RatingWrapper>
                                        <StarIcon />
                                        <Rate>{movie.vote_average}</Rate>
                                        <Votes>{movie.vote_count} votes</Votes>
                                    </RatingWrapper>
                                </ContentWrapper>
                            </TileMovie>
                        )}
                    </TilesContainer>
                    <Pagination />
                </>}
        </MainWrapper>
    )
};

export default MoviesList;