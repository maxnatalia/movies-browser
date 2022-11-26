import { apiKey, apiMovieDetails, apiUrl } from "../../apiData";

export const getMovies = async () => {
    const response = await fetch(`${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const movies = await response.json();

    return movies;
};

export const getGenres = async () => {
    const response = await fetch(`${apiUrl}genre/movie/list?api_key=${apiKey}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const genres = await response.json();

    return genres;
};

export const getMovieDetails = async (id) => {
    const response = await fetch(`${apiUrl}${apiMovieDetails}${id}?api_key=${apiKey}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const movieDetails = await response.json();

    return movieDetails;
};