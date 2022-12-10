import { takeLatest, put, call, delay, select } from "redux-saga/effects";
import {
    fetchPeopleError,
    fetchPeopleSuccess,
    fetchPeople,
    selectQuery,
    selectPage,
    setPeopleQuery,
    setPeoplePage,
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


export function* watchFetchPopularPeople() {
    yield takeLatest([fetchPeople.type, setPeoplePage.type, setPeopleQuery.type], fetchPeopleHandler);
}