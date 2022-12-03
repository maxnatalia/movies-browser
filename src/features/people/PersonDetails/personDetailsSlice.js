import { createSlice } from "@reduxjs/toolkit";

const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState: {
    loadingPersonDetails: true,
    loadingPersonCredits: true,
    error: false,
    personId: "",
    personDetails: [],
    personCredits: [],
  },
  reducers: {
    changePersonId: (state, { payload: id }) => {
      state.personId = id;
    },
    fetchPersonDetails: (state) => {
      state.loadingPersonDetails = true;
      state.error = false;
      state.personDetails = [];
    },
    fetchPersonDetailsSuccess: (state, { payload: person }) => {
      state.loadingPersonDetails = false;
      state.personDetails = person;
    },
    fetchPersonCredits: (state) => {
      state.loadingPersonCredits = true;
      state.personCredits = [];
    },
    fetchPersonCreditsSuccess: (state, { payload: credits }) => {
      state.loadingPersonCredits = false;
      state.personCredits = credits;
    },
    fetchError: (state) => {
      state.loadingPersonDetails = false;
      state.loadingPersonCredits = false;
      state.error = true;
    },
  },
});

export const {
  changePersonId,
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPersonCredits,
  fetchPersonCreditsSuccess,
  fetchError,
} = personDetailsSlice.actions;

export const selectPersonDetailsState = (state) => state.personDetails;
export const selectLoadingDetails = (state) => selectPersonDetailsState(state).loadingPersonDetails;
export const selectLoadingCredits = (state) => selectPersonDetailsState(state).loadingPersonCredits;
export const selectError = (state) => selectPersonDetailsState(state).error;
export const selectId = (state) => selectPersonDetailsState(state).personId;
export const selectPersonDetails = (state) => selectPersonDetailsState(state).personDetails;
export const selectPersonCredits = (state) => selectPersonDetailsState(state).personCredits;

export default personDetailsSlice.reducer;