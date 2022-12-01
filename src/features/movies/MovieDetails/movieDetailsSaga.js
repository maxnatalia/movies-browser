import { takeLatest, put, call, delay, select } from "redux-saga/effects";
import { 
  fetchError, 
  fetchMovieDetailsSuccess, 
  fetchMovieDetails, 
  selectId,
  fetchMovieCreditsSuccess,
} from "./movieDetailsSlice";
import { getMovieDetails, getMovieCredits } from "../api";

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
}

export function* watchFetchMovieDetails() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}