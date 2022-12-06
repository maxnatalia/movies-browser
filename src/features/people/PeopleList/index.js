import { MainWrapper, Header, TilesContainer, TilePerson, ImageWrapper, Image, Title, StyledLink } from "./styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectError, selectLoading, selectPage, selectPeople, selectQuery, setLoadingFalse } from "../peopleSlice";
import Error from "../../../common/Error";
import Loading from "../../../common/Loading";
import Navigation from "../../../common/Navigation";
import NoResults from "../../../common/NoResults";
import Pagination from "../../../common/Pagination";
import { usePageParams } from "../../movies/ulrSearchParams";

const PeopleList = ({ insideDetails, title, credits }) => {
  const fetchedPeople = useSelector(selectPeople);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const query = useSelector(selectQuery);
  const page = useSelector(selectPage);
  const setPageParamsToUrl = usePageParams();
  const dispatch = useDispatch();

  const people = credits ? credits : fetchedPeople.results;

  useEffect(() => {
    if (!credits) {
      dispatch(fetchPeople());
    } else {
      dispatch(setLoadingFalse());
    }
  }, [dispatch, credits]);

  return (
    <>
      <Navigation />
      <MainWrapper insideDetails={insideDetails}>
        {error && <Error />}
        {loading && <Loading loadingMessage={query ? `Search results for "${query}"` : ""} />}
        {fetchedPeople.total_results === 0 && <NoResults noResultMessage={`Sorry, there are no results for “${query}”`} />}
        {people && (
          <>
            <Header>{title ? title : "Popular people"}</Header>
            <TilesContainer>
              {people.map((person) => (
                <StyledLink key={person.id} to={`/person/${person.id}`}>
                  <TilePerson>
                    <ImageWrapper>
                      {person.profile_path ? (
                        <Image src={`https://image.tmdb.org/t/p/w185${person.profile_path}`} alt="Actor image" />
                      ) : (
                        <Image />
                      )}
                    </ImageWrapper>
                    <Title>{person.name}</Title>
                    {person.character ? (
                      <Title job>{person.character}</Title>
                    ) : person.job ? (
                      <Title job>{person.job}</Title>
                    ) : (
                      ""
                    )}
                  </TilePerson>
                </StyledLink>
              ))}
            </TilesContainer>
            <Pagination
              setPageParamsToUrl={setPageParamsToUrl}
              page={page}
              totalPages={fetchedPeople.total_pages}
            />
          </>
        )}
      </MainWrapper>
    </>
  );
};

export default PeopleList;
