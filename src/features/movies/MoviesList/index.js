import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchGenres, selectError, selectLoading, selectMovies, selectGenres, selectQuery, selectPage } from "../moviesSlice";
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
import Navigation from "../../../common/Navigation";
import { usePageParams } from "../ulrSearchParams";

const MoviesList = ({ insideDetails }) => {
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const query = useSelector(selectQuery);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const setPageParamsToUrl = usePageParams();

  useEffect(() => {
    if (genres.length === 0) {
      dispatch(fetchGenres());
    }
  });

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <MainWrapper insideDetails={insideDetails}>
        {error && <Error />}
        {loading && <Loading loadingMessage={query ? `Search results for "${query}"` : ""} />}
        {movies.total_results === 0 && <NoResults noResultMessage={`Sorry, there are no results for “${query}”`} />}

        {movies.total_results > 1 && !loading &&
          <>
            <Header>{query ? `Search results for "${query}" (${movies.total_results})` : `Popular movies`}</Header>
            <TilesContainer insideDetails={insideDetails}>
              {movies.results.map((movie) => (
                <StyledLink key={movie.id} to={`/movie/${movie.id}`}>
                  <TileMovie >
                    <ImageWrapper>
                      {movie.poster_path ?
                        <Image src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="Movie poster" /> :
                        <Image />
                      }
                    </ImageWrapper>
                    <ContentWrapper>
                      <Title>{movie.title}</Title>
                      {movie.release_date ? <StyledDate>{movie.release_date.slice(0, 4)}</StyledDate> : ""}
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
            <Pagination 
              setPageParamsToUrl={setPageParamsToUrl}
              page={page}
              totalPages={movies.total_pages}
            />
          </>}
      </MainWrapper>
    </>
  )
};

export default MoviesList;