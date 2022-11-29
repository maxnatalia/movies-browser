import { takeLatest, put, call, delay, select } from "redux-saga/effects";
import { fetchError, fetchMovieDetailsSuccess, fetchMovieDetails, selectId } from "./movieDetailsSlice";
import { getMovieDetails } from "../api";

function* fetchMovieDetailsHandler() {
  try {
    const id = yield select(selectId);
    const movie = yield call(getMovieDetails, id);
    yield delay(30);
    yield put(fetchMovieDetailsSuccess(movie));
  } catch (error) {
    console.log(error);
    yield put(fetchError());
  }
}

export function* watchFetchMovieDetails() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}