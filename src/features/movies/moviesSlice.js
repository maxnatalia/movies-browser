import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        loading: true,
        error: false,
        query: null,
        page: 1,
        movies: [],
        genres: [],
        movieId: "",
        movieDetails: [],
        movieCredits: [],
    },
    reducers: {
        setLoadingState: (state, { payload: boolean }) => {
            state.loading = boolean;
        },
        setQuery: (state, { payload: query }) => {
            state.query = query;
        },
        setPage: (state, { payload: pagination }) => {
            state.page = pagination;
        },
        fetchError: (state) => {
            state.loading = false;
            state.error = true;
        },
        fetchMovies: (state) => {
            state.loading = true;
            state.error = false;
            state.movies = [];
        },
        fetchMoviesSuccess: (state, { payload }) => {
            state.loading = false;
            state.movies = payload.movies;
        },
        fetchGenres: () => { },
        fetchGenresSuccess: (state, { payload: genres }) => {
            state.genres = genres;
        },
        changeMovieId: (state, { payload: id }) => {
            state.movieId = id;
        },
        fetchMovieDetails: (state) => {
            state.loading = true;
            state.error = false;
            state.movieDetails = [];
        },
        fetchMovieDetailsSuccess: (state, { payload: movie }) => {
            state.loading = false;
            state.movieDetails = movie;
        },
        fetchMovieCredits: (state) => {
            state.loading = true;
            state.movieCredits = [];
        },
        fetchMovieCreditsSuccess: (state, { payload: credits }) => {
            state.loading = false;
            state.movieCredits = credits;
        },
    },
});

export const {
    setLoadingState,
    setQuery,
    setPage,
    fetchError,
    fetchMovies,
    fetchMoviesSuccess,
    fetchGenres,
    fetchGenresSuccess,
    changeMovieId,
    fetchMovieDetails,
    fetchMovieDetailsSuccess,
    fetchMovieCredits,
    fetchMovieCreditsSuccess,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectError = (state) => selectMoviesState(state).error;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectQuery = (state) => selectMoviesState(state).query;
export const selectPage = (state) => selectMoviesState(state).page;
export const selectId = (state) => selectMoviesState(state).movieId;
export const selectMovieDetails = (state) => selectMoviesState(state).movieDetails;
export const selectMovieCredits = (state) => selectMoviesState(state).movieCredits;

export default moviesSlice.reducer;