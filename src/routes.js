export const toPopularMovies = () => "/movies";
export const toMovieDetails = ({ id } = { id: ":id" }) => `/movies/movie-details/${id}`;
export const toPeople = () => "/people";
export const toPersonDetails = ({ id } = { id: ":id" }) => `/people/person-details/${id}`;