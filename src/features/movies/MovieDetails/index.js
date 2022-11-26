import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import PeopleList from "../../people/PeopleList";
import { changeMovieId, fetchMovieDetails, selectError, selectLoading, selectMovieDetails } from "./movieDetailsSlice";
import { apiBackdrop } from "../../../apiData";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const movie = useSelector(selectMovieDetails);
  const releaseDate = movie.release_date;
  const [date, setDate] = useState("");

  useEffect(() => {
    dispatch(changeMovieId(id));
    dispatch(fetchMovieDetails());
  }, []);

  useEffect(() => {
    if (releaseDate) {
      const [year, month, day] = releaseDate.split("-");
      setDate(day + "." + month + "." + year);
    }
  }, [releaseDate]);
  
  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  return (
    <>
      <PosterDisplay>
        <PosterWrapper style={{ backgroundImage: `url(${apiBackdrop}${movie.backdrop_path})` }}>
          <MainInfoWrapper>
            <MainInfoTitle>{movie.title}</MainInfoTitle>
            <RatingWrapper>
              <StarIcon display="true" />
              <Rate infoMain>{movie.vote_average.toFixed(1)}</Rate>
              <Votes infoMain>/ 10</Votes>
              <Votes infoMain normalHidden>
                {movie.vote_count} votes
              </Votes>
            </RatingWrapper>
            <RatingWrapper mobileHidden>
              <Votes infoMain>{movie.vote_count} votes</Votes>
            </RatingWrapper>
          </MainInfoWrapper>
        </PosterWrapper>
      </PosterDisplay>
      <MainWrapper>
        <DetailsWrapper>
          <DetailsImage src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="" />
          <TextWrapper>
            <DetailsTitle>{movie.title}</DetailsTitle>
            <Year>{movie.release_date.slice(0, 4)}</Year>
            <AdditionalInfoWrapper>
              <DetailsText additionalQuestion mobileHidden>
                Production:
              </DetailsText>
              <DetailsText additionalAnswer>{movie.production_countries.map((country) => country.name)}</DetailsText>
            </AdditionalInfoWrapper>
            <AdditionalInfoWrapper secondLine>
              <DetailsText additionalQuestion mobileHidden>
                Release date:
              </DetailsText>
              <DetailsText additionalAnswer>
                {date}
              </DetailsText>
            </AdditionalInfoWrapper>
            {movie.genres ? (
              <TagsWrapper>
                {movie.genres.map((genre) => (
                  <Tag key={id}>{genre.name}</Tag>
                ))}
              </TagsWrapper>
            ) : (
              ""
            )}
            <RatingWrapper mobile>
              <StarIcon />
              <Rate>{movie.vote_average.toFixed(1)}</Rate>
              <Votes mobileHidden>/ 10</Votes>
              <Votes mobile>{movie.vote_count} votes</Votes>
            </RatingWrapper>
          </TextWrapper>
          <Info>
            <DetailsText>{movie.overview}</DetailsText>
          </Info>
        </DetailsWrapper>
        <PeopleList insideDetails />
        <PeopleList insideDetails />
      </MainWrapper>
    </>
  );
};

export default MovieDetails;
