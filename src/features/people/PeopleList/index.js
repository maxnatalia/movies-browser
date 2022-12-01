import { MainWrapper, Header, TilesContainer, TilePerson, ImageWrapper, Image, Title, StyledLink } from "./styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectError, selectLoading, selectPeople } from "../peopleSlice";
import Error from "../../../common/Error";
import Loading from "../../../common/Loading";
import { toPersonDetails } from "../../../routes";

const PeopleList = ({ insideDetails, title, credits }) => {
  const [people, setPeople] = useState(useSelector(selectPeople));
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!credits) {
      dispatch(fetchPeople());
    } else {
      setPeople(credits);
    }
  }, [credits, dispatch]);

  if (error) {
    return <Error />;
  }
  return (
    <MainWrapper insideDetails={insideDetails}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header>{title ? title : "Popular people"}</Header>
          <TilesContainer>
            {people.map((person) => (
              <StyledLink key={people.indexOf(person)} to={toPersonDetails({ id: person.id })}>
                <TilePerson>
                  <ImageWrapper>
                    {person.profile_path ?
                      <Image src={`https://image.tmdb.org/t/p/w185${person.profile_path}`} alt="Actor image" /> :
                      <Image />
                    }
                  </ImageWrapper>
                  <Title>{person.name}</Title>
                  {
                    person.character ?
                    <Title job>{person.character}</Title> : 
                    person.job ?
                      <Title job>{person.job}</Title> :
                      ""
                  }
                </TilePerson>
              </StyledLink>
            ))}
          </TilesContainer>
        </>
      )}
    </MainWrapper>
  );
};

export default PeopleList;