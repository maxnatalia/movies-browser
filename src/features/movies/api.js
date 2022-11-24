import { apiKey, apiUrl } from "../../apiData";

export const getMovies = async () => {
    const response = await fetch(`${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const movies = await response.json();

    return movies;
};