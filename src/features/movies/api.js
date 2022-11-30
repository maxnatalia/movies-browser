import { apiKey, apiMovieDetails, apiUrl } from "../../apiData";

export const APIpopularMoviesUrl = page =>
  `${apiUrl}/movie/popular?api_key=${apiKey}&page=${page}`;

export const APIsearchMovieUrl = (query, page) =>
  `${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${page}`;
  
// export const getPopularMovies = async (page) => {
//     const response = await fetch(`${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=${page}`);

//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }

//     await response.json();
// };

export const getGenres = async () => {
    const response = await fetch(`${apiUrl}genre/movie/list?api_key=${apiKey}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const genres = await response.json();

    return genres;
};

// export const getMoviesByQuery = async (query, page) => {
//     const response = await fetch(`${apiUrl}search/movie?api_key=${apiKey}&language=en-US&page=${page}&query=${query}`);

//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }

//     await response.json()

// };


export const getMovieDetails = async (id) => {
    const response = await fetch(`${apiUrl}${apiMovieDetails}${id}?api_key=${apiKey}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const movieDetails = await response.json();

    return movieDetails;
};

// export const getMovies = (query, page) => {
//     if (!query) {
//         return getMoviesByQuery(query, page);
//     }

//     return getPopularMovies(page);
// };