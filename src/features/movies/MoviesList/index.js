import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { fetchMovies, fetchGenres, selectError, selectLoading, selectMovies, selectGenres } from "../moviesSlice";
import { toMovieDetails } from "../../../routes";

const MoviesList = ({ insideDetails }) => {
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header>Popular movies</Header>
          <TilesContainer insideDetails={insideDetails}>
            {movies.map((movie) => (
              <StyledLink to={toMovieDetails({ id: movie.id })}>
                <TileMovie key={movie.id}>
                  <ImageWrapper>
                    <Image src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="" />
                  </ImageWrapper>
                  <ContentWrapper>
                    <Title>{movie.original_title}</Title>
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
        </>
      )}
    </MainWrapper>
  );
};

export default MoviesList;