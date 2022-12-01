import { createHashRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import MovieDetails from "./features/movies/MovieDetails";
import MoviesList from "./features/movies/MoviesList";
import PeopleList from "./features/people/PeopleList";
import PersonDetails from "./features/people/PersonDetails";

export const toPopularMovies = "/movies";
export const toMovieDetails = "/movie/:id";
export const toPeople = "/people";
export const toPersonDetails = "/person/:id";

export const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path={toPersonDetails} element={<PersonDetails />} />
            <Route path={toMovieDetails} element={<MovieDetails />} />
            <Route path={toPopularMovies} element={<MoviesList />} />
            <Route path={toPeople} element={<PeopleList />} />
            <Route path="/" element={<Navigate replace to={toPopularMovies} />} />
        </>
    )
)