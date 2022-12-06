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
  Info,
  AdditionalInfoWrapper,
} from "../../../common/Details";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import MoviesList from "../../movies/MoviesList";
import {
  changePersonId,
  fetchPersonDetails,
  selectError,
  selectLoadingDetails,
  selectLoadingCredits,
  selectPersonDetails,
  selectPersonCredits,
} from "./personDetailsSlice";
import { changeDateFormat } from "../../functions";
import Navigation from "../../../common/Navigation";

const PersonDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loadingPersonDetails = useSelector(selectLoadingDetails);
  const loadingPersonCredits = useSelector(selectLoadingCredits);
  const error = useSelector(selectError);
  const person = useSelector(selectPersonDetails);
  const credits = useSelector(selectPersonCredits);
  const date = person.birthday ? changeDateFormat(person.birthday) : "";

  useEffect(() => {
    dispatch(changePersonId(id));
    dispatch(fetchPersonDetails());
  }, [id, dispatch]);

  if (loadingPersonDetails || loadingPersonCredits) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  return (
    <>
      <Navigation />
      <MainWrapper>
        <DetailsWrapper>
          {person.profile_path ? (
            <DetailsImage person src={`https://image.tmdb.org/t/p/w185${person.profile_path}`} alt="Actor image" />
          ) : (
            <DetailsImage />
          )}
          <TextWrapper>
            <DetailsTitle>{person.name}</DetailsTitle>
            <AdditionalInfoWrapper>
              <DetailsText additionalQuestion>Date of birth:</DetailsText>
              <DetailsText additionalAnswer>{date ? date : "N/A"}</DetailsText>
            </AdditionalInfoWrapper>
            <AdditionalInfoWrapper secondLine>
              <DetailsText additionalQuestion>Place of birth:</DetailsText>
              <DetailsText additionalAnswer>{person.place_of_birth ? person.place_of_birth : "N/A"}</DetailsText>
            </AdditionalInfoWrapper>
          </TextWrapper>
          <Info>
            <DetailsText>{person.biography}</DetailsText>
          </Info>
        </DetailsWrapper>
        <MoviesList insideDetails title="Movies - cast" credits={credits.cast} />
        <MoviesList insideDetails title="Movies - crew" credits={credits.crew} />
      </MainWrapper>
    </>
  );
};

export default PersonDetails;