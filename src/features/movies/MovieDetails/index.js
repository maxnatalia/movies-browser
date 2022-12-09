import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
import Backdrop from "./Backdrop";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import PeopleList from "../../people/PeopleList";
import { 
  changeMovieId, 
  fetchMovieDetails, 
  selectError, 
  selectLoadingDetails,
  selectLoadingCredits,
  selectMovieDetails, 
  selectMovieCredits,
} from "./movieDetailsSlice";
import { changeDateFormat } from "../../../core/functions";
import Navigation from "../../../common/Navigation";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loadingMovieDetails = useSelector(selectLoadingDetails);
  const loadingMovieCredits = useSelector(selectLoadingCredits);
  const error = useSelector(selectError);
  const movie = useSelector(selectMovieDetails);
  const credits = useSelector(selectMovieCredits);
  const date = movie.release_date ? changeDateFormat(movie.release_date) : "";

  useEffect(() => {
    dispatch(changeMovieId(id));
    dispatch(fetchMovieDetails());
  }, [id, dispatch]);
  
  return (
    <> 
      <Navigation />
      {error ? <Error /> :
        (loadingMovieDetails || loadingMovieCredits) ? <Loading /> :
          <>
            {movie.backdrop_path ? <Backdrop movie={movie}/> : ""}
            <MainWrapper>
              <DetailsWrapper>
                {movie.poster_path ?
                  <DetailsImage src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="Movie poster"/> :
                  <DetailsImage />
                }
                <TextWrapper>
                  <DetailsTitle>{movie.title}</DetailsTitle>
                  {movie.release_date ? <Year>{movie.release_date.slice(0, 4)}</Year> : ""}
                  <AdditionalInfoWrapper>
                    <DetailsText additionalQuestion mobileHidden>
                      Production:
                    </DetailsText>
                    <DetailsText additionalAnswer>
                      {movie.production_countries.length === 0 ? 
                        "N/A" :
                        movie.production_countries.map((country, index) => (index + 1 === movie.production_countries.length) ? country.name : `${country.name}, ` )
                      }
                    </DetailsText>
                  </AdditionalInfoWrapper>
                  <AdditionalInfoWrapper secondLine>
                    <DetailsText additionalQuestion mobileHidden>
                      Release date:
                    </DetailsText>
                    <DetailsText additionalAnswer>
                      {date ? date : "N/A"}
                    </DetailsText>
                  </AdditionalInfoWrapper>
                  {movie.genres.length !== 0 ? 
                    <TagsWrapper>
                      {movie.genres.map((genre) => (
                        <Tag key={genre.id}>{genre.name}</Tag>
                      ))}
                    </TagsWrapper>
                      : 
                    ""
                  }
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
              <PeopleList 
                insideDetails 
                title="Cast"
                credits={credits.cast}
              />
              <PeopleList 
                insideDetails 
                title="Crew"
                credits={credits.crew}
              />
            </MainWrapper>
          </>
      }
    </>
  );
};

export default MovieDetails;