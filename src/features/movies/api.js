import { apiKey, apiUrl } from "../../apiData";

export const getPopularMovies = async () => {
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

export const getMoviesByQuery = async (query) => {
    if (!query) {
        return;
    }

    const response = await fetch(`${apiUrl}search/movie?api_key=${apiKey}&language=en-US&query=${query}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const movies = await response.json()

    return movies;
};

export const getMovies = (query) => {
    if (!!query) {
        return getMoviesByQuery(query);
    }

    return getPopularMovies();
};