import { MainWrapper, Header, TilesContainer, TilePerson, ImageWrapper, Image, Title } from "./styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectError, selectLoading, selectPeople} from "../peopleSlice";
import Error from "../../../common/Error";
import Loading from "../../../common/Loading";

const PeopleList = ({ insideDetails }) => {
    const people = useSelector(selectPeople);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch]);

    if (error) {
        return (
            <Error />
        );
    }
    return (
        <MainWrapper insideDetails={insideDetails}>
            {loading ? (<Loading />)
                :
                (<>
                    <Header>Popular people</Header>
                    <TilesContainer>
                        {people.map(person => 
                            <TilePerson key={person.id}>
                                <ImageWrapper>
                                    <Image src={`https://image.tmdb.org/t/p/w185${person.profile_path}`} alt="" />
                                </ImageWrapper>
                                <Title>{person.name}</Title>
                            </TilePerson>
                        )}
                    </TilesContainer>
                </>
                )}
        </MainWrapper>
    )
};

export default PeopleList;