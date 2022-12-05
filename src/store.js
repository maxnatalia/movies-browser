import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import moviesReducer from "./features/movies/moviesSlice";
import movieDetailsReducer from "./features/movies/MovieDetails/movieDetailsSlice";
import peopleReducer from "./features/people/peopleSlice";
import personDetailsReducer from "./features/people/PersonDetails/personDetailsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieDetails: movieDetailsReducer,
        people: peopleReducer,
        personDetails: personDetailsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;