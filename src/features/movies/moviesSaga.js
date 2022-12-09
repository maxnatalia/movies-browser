import { takeLatest, put, call, delay, select } from "redux-saga/effects";
import { 
    fetchError, 
    fetchMoviesSuccess, 
    fetchMovies, 
    fetchGenres, 
    fetchGenresSuccess, 
    selectQuery, 
    setQuery, 
    selectPage, 
    setPage, 
    setLoadingFalse
} from "./moviesSlice";
import { getGenres, getMovies } from "./api";

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

function* setOnChangeHandler() {
    yield delay(500);
    yield put(fetchMovies());
};

export function* watchFetchPopularMovies() {
    yield takeLatest(fetchGenres, fetchGenresHandler);
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield takeLatest(setQuery.type, setOnChangeHandler);
    yield takeLatest(setPage.type, setOnChangeHandler);
}