import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        loading: true,
        error: false,
        people: [],
        page: 1,
        query: "",
    },
    reducers: {
        fetchPeople: (state) => {
            state.loading = true;
            state.error = false;
            state.people = [];
        },
        fetchPeopleSuccess: (state, { payload }) => {
            state.loading = false;
            state.people = payload.people;
        },
        fetchPeopleError: (state) => {
            state.loading = false;
            state.error = true;
        },
        setLoadingFalse: (state) => {
            state.loading = false;
        },
        setPeoplePage: (state, { payload: pagination }) => {
            state.page = pagination;
        },
        setPeopleQuery: (state, { payload: query }) => {
            state.query = query;
        }
    },
});

export const {
    fetchPeople,
    fetchPeopleSuccess,
    fetchPeopleError,
    setLoadingFalse,
    setPeoplePage,
    setPeopleQuery,
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectLoading = state => selectPeopleState(state).loading;
export const selectError = state => selectPeopleState(state).error;
export const selectPage = state => selectPeopleState(state).page;
export const selectQuery = state => selectPeopleState(state).query;

export default peopleSlice.reducer;