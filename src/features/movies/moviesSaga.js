import { takeLatest, put, call, delay, select } from "redux-saga/effects";
import {
    fetchError,
    fetchMoviesSuccess,
    fetchMovies,
    fetchGenres,
    fetchGenresSuccess,
    fetchMovieDetailsSuccess,
    fetchMovieCreditsSuccess,
    fetchMovieDetails,
    selectQuery,
    selectId,
    setQuery,
    selectPage,
    setPage,
    setLoadingState,
} from "./moviesSlice";
import { getGenres, getMovies, getMovieDetails, getMovieCredits } from "./api";

function* fetchMoviesHandler() {
    const query = yield select(selectQuery);
    const page = yield select(selectPage);

    try {
        yield delay(500);
        const data = yield call(getMovies, query, page);
        const movies = data;
        yield put(
            fetchMoviesSuccess({
                movies,
            })
        );
    } catch (error) {
        yield put(fetchError());
    }
};

function* fetchGenresHandler() {
    try {
        const genresData = yield call(getGenres);
        const genres = yield genresData.genres;
        yield put(fetchGenresSuccess(genres));
    } catch (error) {
        yield put(fetchError());
    }
};

function* fetchMovieDetailsHandler() {
    try {
        const id = yield select(selectId);
        const movie = yield call(getMovieDetails, id);
        const credits = yield call(getMovieCredits, id);
        yield delay(500);
        yield put(fetchMovieDetailsSuccess(movie));
        yield put(fetchMovieCreditsSuccess(credits));
    } catch (error) {
        yield put(fetchError());
    }
};

function* setOnChangeHandler() {
    yield put(setLoadingState(true));
    yield delay(500);
    yield put(fetchMovies());
};

export function* moviesSaga() {
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
    yield takeLatest(fetchGenres, fetchGenresHandler);
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield takeLatest(setQuery.type, setOnChangeHandler);
    yield takeLatest(setPage.type, setOnChangeHandler);
};