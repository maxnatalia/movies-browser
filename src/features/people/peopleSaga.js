import { takeLatest, put, call, delay } from "redux-saga/effects";
import { fetchPeopleError, fetchPeopleSuccess, fetchPeople } from "./peopleSlice";
import { getPeople } from "./api";

function* fetchPeopleHandler() {
    try {
        const data = yield call(getPeople);
        const people = yield data.results;
        yield delay(500);
        yield put(
            fetchPeopleSuccess({
                people,
            })
        );
    } catch (error) {
        yield put(fetchPeopleError());
    }
}

export function* watchFetchPopularPeople() {
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}