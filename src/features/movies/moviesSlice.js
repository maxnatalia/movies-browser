import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        loading: true,
        error: false,
        movies: [],
        genres: [],
        query: "",
        page: 1,
    },
    reducers: {
        setLoadingState: (state, {payload: boolean}) => {
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

} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectError = (state) => selectMoviesState(state).error;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectQuery = (state) => selectMoviesState(state).query;
export const selectPage = (state) => selectMoviesState(state).page;

export default moviesSlice.reducer;