import { apiKey, apiMovieDetails, apiUrl } from "../../apiData";

export const getPopularMovies = page =>
  `${apiUrl}/movie/popular?api_key=${apiKey}&page=${page}`;

export const getSearchByQuery = (query, page) =>
  `${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${page}`;

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
