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
    selectGenres,
} from "./moviesSlice";
import { getGenres, getMovies } from "./api";

function* fetchMoviesHandler() {
    const query = yield select(selectQuery);
    const page = yield select(selectPage);
    const genres = yield select(selectGenres);

    try {
        yield delay(500);

        if (genres.length === 0) {
            yield put(fetchGenres());
        }

        const data = yield call(getMovies, query, page);
        const movies = data;
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
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
    yield takeLatest([fetchMovies.type, setQuery.type, setPage.type], fetchMoviesHandler);
}