import { takeLatest, put, call, delay, select } from "redux-saga/effects";
import { fetchError, fetchMoviesSuccess, fetchMovies, fetchGenres, fetchGenresSuccess, selectQuery, setQuery, setLoadingState } from "./moviesSlice";
import { getGenres, getMovies } from "./api";

function* fetchMoviesHandler() {
    const query = yield select(selectQuery);

    try {
        yield delay(1000);
        const data = yield call(getMovies, query);
        const movies = data;
        yield put(
            fetchMoviesSuccess({
                movies,
            })
        );
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

function* setQueryHandler() {
    yield put(setLoadingState());
    yield delay(1000);
    yield put(fetchMovies());
};

export function* watchFetchPopularMovies() {
    yield takeLatest(fetchGenres, fetchGenresHandler);
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield takeLatest(setQuery.type, setQueryHandler);
}