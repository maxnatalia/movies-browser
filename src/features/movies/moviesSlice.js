import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        loading: true,
        error: false,
        movies: [],
        genres: [],
        movie: null,
        totalResults: null,
        page: 1,
    },
    reducers: {
        fetchMovies: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchMoviesSuccess: (state, { payload: movies }) => {
            state.loading = false;
            state.movies = movies.results;
            state.totalResults = movies.total_results;
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

        setPage: (state, { payload: pagination }) => {
            state.page = pagination;
        },
        fetchSearch: () => { },
        fetchMoviesSearch: (state) => {
            state.loading = true;
            state.error = false;
        },
    },
});

export const {
    fetchMovies,
    fetchMoviesSuccess,
    fetchMovie,
    fetchMovieSuccess,
    fetchError,
    fetchGenres,
    fetchGenresSuccess,
    fetchMoviesSearch,
    setPage,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMovie = (state) => selectMoviesState(state).movie;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectError = (state) => selectMoviesState(state).error;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectTotalResults = (state) => selectMoviesState(state).totalResults;
export const selectPage = (state) => selectMoviesState(state).page;

export default moviesSlice.reducer;