import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        loading: true,
        error: false,
        query: null,
        page: 1,
        people: [],
        personId: "",
        personDetails: [],
        personCredits: [],
    },
    reducers: {
        setLoadingState: (state, { payload: boolean }) => {
            state.loading = boolean;
        },
        setPeoplePage: (state, { payload: pagination }) => {
            state.page = pagination;
        },
        setPeopleQuery: (state, { payload: query }) => {
            state.query = query;
        },
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
        changePersonId: (state, { payload: id }) => {
            state.personId = id;
        },
        fetchPersonDetails: (state) => {
            state.loading = true;
            state.error = false;
            state.personDetails = [];
        },
        fetchPersonDetailsSuccess: (state, { payload: person }) => {
            state.loading = false;
            state.personDetails = person;
        },
        fetchPersonCredits: (state) => {
            state.loading = true;
            state.personCredits = [];
        },
        fetchPersonCreditsSuccess: (state, { payload: credits }) => {
            state.loading = false;
            state.personCredits = credits;
        }
    },
});

export const {
    setLoadingFalse,
    setLoadingState,
    setPeopleQuery,
    setPeoplePage,
    fetchPeople,
    fetchPeopleSuccess,
    fetchPeopleError,
    changePersonId,
    fetchPersonDetails,
    fetchPersonDetailsSuccess,
    fetchPersonCredits,
    fetchPersonCreditsSuccess,
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectLoading = state => selectPeopleState(state).loading;
export const selectError = state => selectPeopleState(state).error;
export const selectPage = state => selectPeopleState(state).page;
export const selectQuery = state => selectPeopleState(state).query;
export const selectId = (state) => selectPeopleState(state).personId;
export const selectPersonDetails = (state) => selectPeopleState(state).personDetails;
export const selectPersonCredits = (state) => selectPeopleState(state).personCredits;

export default peopleSlice.reducer;