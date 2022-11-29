import { PosterWrapper, PosterDisplay, MainInfoWrapper, MainInfoTitle } from "./styled";
import { RatingWrapper, StarIcon, Rate, Votes } from "../../../../common/Details";

const Backdrop = (movie) => {
  return (
    <PosterDisplay>
      <PosterWrapper image={movie.movie.backdrop_path}>
        <MainInfoWrapper>
          <MainInfoTitle>{movie.movie.title}</MainInfoTitle>
          <RatingWrapper>
            <StarIcon display="true" />
            <Rate infoMain>{movie.movie.vote_average.toFixed(1)}</Rate>
            <Votes infoMain>/ 10</Votes>
            <Votes infoMain normalHidden>
              {movie.movie.vote_count} votes
            </Votes>
          </RatingWrapper>
          <RatingWrapper mobileHidden>
            <Votes infoMain>{movie.movie.vote_count} votes</Votes>
          </RatingWrapper>
        </MainInfoWrapper>
      </PosterWrapper>
    </PosterDisplay>
  );
};

export default Backdrop;