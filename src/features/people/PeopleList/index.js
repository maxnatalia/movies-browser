import { MainWrapper, Header, TilesContainer, TilePerson, ImageWrapper, Image, Title, StyledLink } from "./styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectError, selectLoading, selectPeople } from "../peopleSlice";
import Error from "../../../common/Error";
import Loading from "../../../common/Loading";
import { toPersonDetails } from "../../../routes";

const PeopleList = ({ insideDetails }) => {
  const people = useSelector(selectPeople);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
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
          <Header>Popular people</Header>
          <TilesContainer>
            {people.map((person) => (
              <StyledLink key={person.id} to={toPersonDetails({ id: person.id })}>
                <TilePerson key={person.id}>
                  <ImageWrapper>
                    {person.profile_path ?
                      <Image src={`https://image.tmdb.org/t/p/w185${person.profile_path}`} alt="Actor image" /> :
                      <Image />
                    }
                  </ImageWrapper>
                  <Title>{person.name}</Title>
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