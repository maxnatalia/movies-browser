import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        loading: true,
        error: false,
        people: [],
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
        }
    },
});

export const {
    fetchPeople,
    fetchPeopleSuccess,
    fetchPeopleError,
    setLoadingFalse,
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectLoading = state => selectPeopleState(state).loading;
export const selectError = state => selectPeopleState(state).error;

export default peopleSlice.reducer;