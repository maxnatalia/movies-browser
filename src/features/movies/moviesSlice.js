import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        loading: true,
        error: false,
        movies: [],
        movie: null,
    },
    reducers: {
        fetchMovies: (state) => {
            state.loading = true;
            state.error = false;
            state.movies = [];
        },
        fetchMoviesSuccess: (state, { payload }) => {
            state.loading = false;
            state.movies = payload.movies;
        },
        fetchMovie: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchMovieSuccess: (state, { payload: movie }) => {
            state.loading = false;
            state.movie = movie;
        },
        fetchError: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    fetchMovies,
    fetchMoviesSuccess,
    fetchMovie,
    fetchMovieSuccess,
    fetchError
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMovie = (state) => selectMoviesState(state).movie;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectError = (state) => selectMoviesState(state).error;

export default moviesSlice.reducer;