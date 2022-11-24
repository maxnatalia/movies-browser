import { takeLatest, put, call, delay } from "redux-saga/effects";
import { fetchError, fetchMoviesSuccess, fetchMovies } from "./moviesSlice";
import { getMovies } from "./api";

function* fetchMoviesHandler() {
    try {
        const data = yield call(getMovies);
        const movies = yield data.results;
        yield delay(3000);
        yield put(
            fetchMoviesSuccess({
                movies,
            })
        );
    } catch (error) {
        yield put(fetchError());
    }
}
export function* watchFetchPopularMovies() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
