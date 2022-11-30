import { takeLatest, put, call, debounce, delay } from "redux-saga/effects";
import { fetchError, fetchMoviesSuccess, fetchMovies, fetchGenres, fetchGenresSuccess, fetchMoviesSearch } from "./moviesSlice";
import { getApi } from "./getApi";
import { getGenres, getPopularMovies, getSearchByQuery } from "./api";

function* fetchMoviesHandler({ payload: { query, page } }) {
    const popularMovies = getPopularMovies(page);
    const searchMovie = getSearchByQuery(query, page);
    const urlPath = !query ? popularMovies : searchMovie;

    try {
        if (!query) { yield delay(300) };
        const movies = yield call(getApi, urlPath);
        yield put(fetchMoviesSuccess(movies));
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

export function* watchFetchPopularMovies() {
    yield debounce(2000, fetchMoviesSearch.type, fetchMoviesHandler);
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}