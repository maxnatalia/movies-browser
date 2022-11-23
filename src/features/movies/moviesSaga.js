import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import { fetchError, fetchMoviesSuccess, fetchMovieSuccess, fetchMovie, fetchMovies } from "./moviesSlice";
import { apiUrl, apiKey } from "../../apiData";
import { getMovies } from "./api";

function* fetchMoviesHandler({ payload }) {
    try {
        const data = yield call(getMovies, payload);
        const movies = yield data.results;
        yield put(
            fetchMoviesSuccess({
                movies,
            })
        );
    } catch (error) {
        yield put(fetchError());
    }
}

function* fetchMovieHandler({ payload: id }) {
    try {
        const movie = yield axios.get(
            `${apiUrl}movie/${id}?api_key=${apiKey}&language=en-US`
        );
        yield put(fetchMovieSuccess({ payload: movie }));
    } catch (error) {
        yield put(fetchError());
    }
}

export function* watchFetchPopularMovies() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield takeLatest(fetchMovie.type, fetchMovieHandler);
}
