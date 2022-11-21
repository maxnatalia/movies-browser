import { MainWrapper, Header, TilesContainer, TilePerson, ImageWrapper, Image, Title } from "./styled";
import poster from "../../../common/images/posterPerson.png";

const PeopleList = ({ insideDetails }) => {
    return (
        <MainWrapper insideDetails={insideDetails}>
            <Header>Popular people</Header>
            <TilesContainer>
                <TilePerson>
                    <ImageWrapper>
                        <Image src={poster} alt="" />
                    </ImageWrapper>
                    <Title>Lui Yifey</Title>
                </TilePerson>
                <TilePerson>
                    <ImageWrapper>
                        <Image />
                    </ImageWrapper>
                    <Title>Lui Yifey</Title>
                </TilePerson>
                <TilePerson>
                    <ImageWrapper>
                        <Image />
                    </ImageWrapper>
                    <Title>Lui Yifey hehehehehe hj</Title>
                </TilePerson>
                <TilePerson>
                    <ImageWrapper>
                        <Image />
                    </ImageWrapper>
                    <Title>Lui Yifey hehehehehe h</Title>
                </TilePerson>
                <TilePerson>
                    <ImageWrapper>
                        <Image />
                    </ImageWrapper>
                    <Title>Lui Yifey</Title>
                </TilePerson>
                <TilePerson>
                    <ImageWrapper>
                        <Image />
                    </ImageWrapper>
                    <Title>Lui Yifey</Title>
                </TilePerson>
                <TilePerson>
                    <ImageWrapper>
                        <Image />
                    </ImageWrapper>
                    <Title>Lui Yifey</Title>
                </TilePerson>
            </TilesContainer>
        </MainWrapper>
    )
};

export default PeopleList;