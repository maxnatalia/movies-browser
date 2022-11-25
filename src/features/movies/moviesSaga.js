import { takeLatest, put, call, delay } from "redux-saga/effects";
import { fetchError, fetchMoviesSuccess, fetchMovies, fetchGenres, fetchGenresSuccess } from "./moviesSlice";
import { getMovies, getGenres } from "./api";

function* fetchMoviesHandler() {
    try {
        const data = yield call(getMovies);
        const movies = yield data.results;
        yield delay(30);
        yield put(fetchMoviesSuccess({ movies }));
    } catch (error) {
        yield put(fetchError());
    }
}

function* fetchGenresHandler() {
    try {
        const genresData = yield call(getGenres);
        const genres = yield genresData.genres;
        yield put(fetchGenresSuccess(genres));
    } catch (error) {
        yield put(fetchError());
    }
}

export function* watchFetchPopularMovies() {
    yield takeLatest(fetchGenres, fetchGenresHandler);
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}