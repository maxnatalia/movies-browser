import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        loading: true,
        error: false,
        movies: [],
        genres: [],
        movie: null,
        query: "",
    },
    reducers: {
        setLoadingState: state => {
            state.loading = true;
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
        fetchGenres: () => { },
        fetchGenresSuccess: (state, { payload: genres }) => {
            state.genres = genres;
        },
        setQuery: (state, { payload: query }) => {
            state.query = query;
        },
    },
});

export const {
    setLoadingState,
    fetchMovies,
    fetchMoviesSuccess,
    fetchMovie,
    fetchMovieSuccess,
    fetchError,
    fetchGenres,
    fetchGenresSuccess,
    setQuery,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMovie = (state) => selectMoviesState(state).movie;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectError = (state) => selectMoviesState(state).error;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectQuery = (state) => selectMoviesState(state).query;

export default moviesSlice.reducer;