import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        loading: true,
        error: false,
        movieId: "",
        movieDetails: [],
    },
    reducers: {
        changeMovieId: (state, { payload: id }) => {
            state.movieId = id;
        },
        fetchMovieDetails: () => {},
        fetchMovieDetailsSuccess: (state, { payload: movie }) => {
            state.loading = false;
            state.movieDetails = movie;
        },
        fetchError: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    changeMovieId,
    fetchMovieDetails,
    fetchMovieDetailsSuccess,
    fetchError,
} = movieDetailsSlice.actions;

export const selectMovieDetailsState = (state) => state.movieDetails;
export const selectLoading = (state) => selectMovieDetailsState(state).loading;
export const selectError = (state) => selectMovieDetailsState(state).error;
export const selectId = (state) => selectMovieDetailsState(state).movieId;
export const selectMovieDetails = (state) => selectMovieDetailsState(state).movieDetails;

export default movieDetailsSlice.reducer;