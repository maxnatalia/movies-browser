import { takeLatest, put, call, delay, select } from "redux-saga/effects";
import { 
  fetchError, 
  fetchMovieDetailsSuccess, 
  fetchMovieDetails, 
  selectId,
  fetchMovieCredits,
  fetchMovieCreditsSuccess,
} from "./movieDetailsSlice";
import { getMovieDetails, getMovieCredits } from "../api";

function* fetchMovieDetailsHandler() {
  try {
    const id = yield select(selectId);
    const movie = yield call(getMovieDetails, id);
    yield delay(30);
    yield put(fetchMovieDetailsSuccess(movie));
  } catch (error) {
    yield put(fetchError());
  }
}

function* fetchMovieCreditsHandler() {
  try {
    const id = yield select(selectId);
    const credits = yield call(getMovieCredits, id);
    yield delay(30);
    yield put(fetchMovieCreditsSuccess(credits));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* watchFetchMovieDetails() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeLatest(fetchMovieCredits.type, fetchMovieCreditsHandler);
}