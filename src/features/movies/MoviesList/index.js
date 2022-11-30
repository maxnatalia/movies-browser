import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchGenres, selectError, selectLoading, selectMovies, selectGenres, fetchMoviesSearch, selectTotalResults } from "../moviesSlice";
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
import { useQueryParameter } from "../../../common/Navigation/Search/queryParametersHooks";
import { queryParameters } from "../../../common/Navigation/Search/queryParameters";

const MoviesList = ({ insideDetails }) => {
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const query = useQueryParameter(queryParameters.search);
  const totalResults = useSelector(selectTotalResults);
  const paramsPage = +useQueryParameter(queryParameters.page);
  const page = paramsPage === 0 ? 1 : paramsPage;
  const dispatch = useDispatch();

  useEffect(() => {
    if (genres.length === 0) {
      dispatch(fetchGenres());
    }
  });

  useEffect(() => {
    query
      ? dispatch(fetchMoviesSearch({ query, page }))
      : dispatch(fetchMovies({ query, page }));
  }, [dispatch, query, page]);

  if (error) {
    return <Error />;
  }

  return (
    <MainWrapper insideDetails={insideDetails}>
      {error && <Error />}
      {loading && <Loading loadingMessage={query ? `Search results for "${query}"` : ""} />}
      {totalResults === 0 ? <NoResults noResultMessage={`Sorry, there are no results for “${query}”`} /> : error && <Error />}

      {totalResults > 1 && !loading &&
        <>
          <Header>{query ? `Search results for "${query}" (${totalResults})` : `Popular movies`}</Header>
          <TilesContainer insideDetails={insideDetails}>
            {movies.map((movie) => (
              <StyledLink key={movie.id} to={toMovieDetails({ id: movie.id })}>
                <TileMovie>
                  <ImageWrapper>
                    <Image src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="" />
                  </ImageWrapper>
                  <ContentWrapper>
                    <Title>{movie.title}</Title>
                    <StyledDate>{movie.release_date.slice(0, 4)}</StyledDate>
                    {movie.genre_ids ? (
                      <TagsWrapper>
                        {movie.genre_ids.map((id) => (
                          <Tag key={id}>{genres.find((genre) => genre.id === id).name}</Tag>
                        ))}
                      </TagsWrapper>
                    ) : (
                      ""
                    )}
                    <RatingWrapper>
                      <StarIcon />
                      <Rate>{movie.vote_average}</Rate>
                      <Votes>{movie.vote_count} votes</Votes>
                    </RatingWrapper>
                  </ContentWrapper>
                </TileMovie>
              </StyledLink>
            ))}
          </TilesContainer>
          <Pagination />
        </>}
    </MainWrapper>
  )
};

export default MoviesList;