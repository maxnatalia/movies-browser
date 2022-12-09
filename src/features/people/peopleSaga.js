import { takeLatest, put, call, delay, select } from "redux-saga/effects";
import {
    fetchPeopleError,
    fetchPeopleSuccess,
    fetchPeople,
    selectQuery,
    selectPage,
    setLoadingState,
    setPeopleQuery,
    setPeoplePage,
    selectId,
    fetchPersonDetailsSuccess,
    fetchPersonCreditsSuccess,
    fetchPersonDetails
} from "./peopleSlice";
import { getPeople, getPersonCredits, getPersonDetails } from "./api";

function* fetchPeopleHandler() {
    const page = yield select(selectPage);
    const query = yield select(selectQuery)

    try {
        yield delay(500);
        const data = yield call(getPeople, query, page);
        const people = yield data;
        yield put(
            fetchPeopleSuccess({
                people,
            })
        );
    } catch (error) {
        yield put(fetchPeopleError());
    }
};

function* fetchPersonDetailsHandler() {
    try {
      const id = yield select(selectId);
      const person = yield call(getPersonDetails, id);
      const credits = yield call(getPersonCredits, id);
      yield delay(500);
      yield put(fetchPersonDetailsSuccess(person));
      yield put(fetchPersonCreditsSuccess(credits));
    } catch (error) {
      yield put(fetchPeopleError());
    }
  };

function* setOnChangeHandler() {
    yield put(setLoadingState(true));
    yield delay(500);
    yield put(fetchPeople());
};

export function* peopleSaga() {
    yield takeLatest(setPeopleQuery.type, setOnChangeHandler)
    yield takeLatest(setPeoplePage.type, setOnChangeHandler);
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
    yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
}