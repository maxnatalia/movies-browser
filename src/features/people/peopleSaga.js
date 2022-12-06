import { takeLatest, put, call, delay, select } from "redux-saga/effects";
import {
    fetchPeopleError,
    fetchPeopleSuccess,
    fetchPeople,
    selectQuery,
    selectPage,
    setLoadingState,
    setPeopleQuery,
    setPeoplePage
} from "./peopleSlice";
import { getPeople } from "./api";

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

function* setOnChangeHandler() {
    yield put(setLoadingState());
    yield delay(500);
    yield put(fetchPeople());
};

export function* watchFetchPopularPeople() {
    yield takeLatest(setPeopleQuery.type, setOnChangeHandler)
    yield takeLatest(setPeoplePage.type, setOnChangeHandler);
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}