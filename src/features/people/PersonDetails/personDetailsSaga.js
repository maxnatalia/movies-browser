import { takeLatest, put, call, delay, select } from "redux-saga/effects";
import { 
  fetchError, 
  fetchPersonDetailsSuccess, 
  fetchPersonDetails, 
  selectId,
  fetchPersonCreditsSuccess,
} from "./personDetailsSlice";
import { fetchGenres, selectGenres } from "../../movies/moviesSlice";
import { getPersonDetails, getPersonCredits } from "../api";

function* fetchPersonDetailsHandler() {
  const genres = yield select(selectGenres);

  try {
    const id = yield select(selectId);
    const person = yield call(getPersonDetails, id);
    const credits = yield call(getPersonCredits, id);
    yield delay(500);
    
    if (genres.length === 0) {
      yield put(fetchGenres());
    }

    yield put(fetchPersonDetailsSuccess(person));
    yield put(fetchPersonCreditsSuccess(credits));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* watchFetchPersonDetails() {
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
}