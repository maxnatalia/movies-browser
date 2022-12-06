import { takeLatest, put, call, delay, select } from "redux-saga/effects";
import {
    fetchPeopleError,
    fetchPeopleSuccess,
    fetchPeople,
    selectQuery,
    selectPage,
    setLoadingState,
    setQuery,
    setPage
} from "./peopleSlice";
import { getPeople } from "./api";

function* fetchPeopleHandler() {
    const page = yield select(selectQuery);
    const query = yield select(selectPage)

    try {
        yield delay(500);
        const data = yield call(getPeople, query, page);
        const people = yield data.results;
        yield put(
            fetchPeopleSuccess({
                people,
            })
        );
    } catch (error) {
        yield put(fetchPeopleError());
    }
};

function* setOnChangeHandler() {
    yield put(setLoadingState());
    yield delay(500);
    yield put(fetchPeople());
};

export function* watchFetchPopularPeople() {
    yield takeLatest(setQuery.type, setOnChangeHandler)
    yield takeLatest(setPage.type, setOnChangeHandler);
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}