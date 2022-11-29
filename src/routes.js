export const toPopularMovies = () => "/movies";
export const toMovieDetails = ({ id } = { id: ":id" }) => `/movie-details/${id}`;
export const toPeople = () => "/people";
export const toPersonDetails = ({ id } = { id: ":id" }) => `/person-details/${id}`;