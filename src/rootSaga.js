import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/movies/moviesSaga";
import { watchFetchMovieDetails } from "./features/movies/MovieDetails/movieDetailsSaga";

export default function* rootSaga() {
    yield all([
        watchFetchPopularMovies(),
        watchFetchMovieDetails(),
    ])
};
