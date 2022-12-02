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

const PersonDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loadingPersonDetails = useSelector(selectLoadingDetails);
  const loadingPersonCredits = useSelector(selectLoadingCredits);
  const error = useSelector(selectError);
  const person = useSelector(selectPersonDetails);
  const credits = useSelector(selectPersonCredits);
  const birthDate = person.birthday;
  const [date, setDate] = useState("");

  useEffect(() => {
    dispatch(changePersonId(id));
    dispatch(fetchPersonDetails());
  }, [id, dispatch]);
  
  useEffect(() => {
    if (birthDate) {
      const [year, month, day] = birthDate.split("-");
      setDate(day + "." + month + "." + year);
    }
  }, [birthDate]);

  if (loadingPersonDetails || loadingPersonCredits) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  console.log(date);

  return (
    <MainWrapper>
      <DetailsWrapper>
        {person.profile_path ?
          <DetailsImage person src={`https://image.tmdb.org/t/p/w185${person.profile_path}`} alt="Actor image" /> :
          <DetailsImage />
        }
        <TextWrapper>
          <DetailsTitle>{person.name}</DetailsTitle>
          <AdditionalInfoWrapper>
            <DetailsText additionalQuestion>Date of birth:</DetailsText>
            <DetailsText additionalAnswer>{date}</DetailsText>
          </AdditionalInfoWrapper>
          <AdditionalInfoWrapper secondLine>
            <DetailsText additionalQuestion>Place of birth:</DetailsText>
            <DetailsText additionalAnswer>{person.place_of_birth}</DetailsText>
          </AdditionalInfoWrapper>
        </TextWrapper>
        <Info>
          <DetailsText>{person.biography}</DetailsText>
        </Info>
      </DetailsWrapper>
      <MoviesList insideDetails/>
      <MoviesList insideDetails/>
    </MainWrapper>
  );
};

export default PersonDetails;