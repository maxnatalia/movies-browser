import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/movies/moviesSaga";
import { watchFetchMovieDetails } from "./features/movies/MovieDetails/movieDetailsSaga";
import { watchFetchPopularPeople } from "./features/people/peopleSaga";
import { watchFetchPersonDetails } from "./features/people/PersonDetails/personDetailsSaga";

export default function* rootSaga() {
    yield all([
        watchFetchPopularMovies(),
        watchFetchMovieDetails(),
        watchFetchPopularPeople(),
        watchFetchPersonDetails(),
    ])
};
