import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    loadingMovieDetails: true,
    loadingMovieCredits: true,
    error: false,
    movieId: "",
    movieDetails: [],
    movieCredits: [],
  },
  reducers: {
    changeMovieId: (state, { payload: id }) => {
      state.movieId = id;
    },
    fetchMovieDetails: (state) => {
      state.loadingMovieDetails = true;
      state.error = false;
      state.movieDetails = [];
    },
    fetchMovieDetailsSuccess: (state, { payload: movie }) => {
      state.loadingMovieDetails = false;
      state.movieDetails = movie;
    },
    fetchMovieCredits: (state) => {
      state.loadingMovieCredits = true;
      state.movieCredits = [];
    },
    fetchMovieCreditsSuccess: (state, { payload: credits }) => {
      state.loadingMovieCredits = false;
      state.movieCredits = credits;
    },
    fetchError: (state) => {
      state.loadingMovieDetails = false;
      state.loadingMovieCredits = false;
      state.error = true;
    },
  },
});

export const {
  changeMovieId,
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieCredits,
  fetchMovieCreditsSuccess,
  fetchError,
} = movieDetailsSlice.actions;

export const selectMovieDetailsState = (state) => state.movieDetails;
export const selectLoadingDetails = (state) => selectMovieDetailsState(state).loadingMovieDetails;
export const selectLoadingCredits = (state) => selectMovieDetailsState(state).loadingMovieCredits;
export const selectError = (state) => selectMovieDetailsState(state).error;
export const selectId = (state) => selectMovieDetailsState(state).movieId;
export const selectMovieDetails = (state) => selectMovieDetailsState(state).movieDetails;
export const selectMovieCredits = (state) => selectMovieDetailsState(state).movieCredits;

export default movieDetailsSlice.reducer;