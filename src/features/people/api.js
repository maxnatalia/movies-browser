import { apiKey, apiUrl, apiPersonDetails } from "../../apiData";

const getPopularPeople = async (page) => {
  const response = await fetch(`${apiUrl}person/popular?api_key=${apiKey}&language=en-US&page=${page}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const people = await response.json();

  return people;
};

export const getPersonDetails = async (id) => {
  const response = await fetch(`${apiUrl}${apiPersonDetails}${id}?api_key=${apiKey}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const personDetails = await response.json();

  return personDetails;
};

export const getPersonCredits = async (id) => {
  const response = await fetch(`${apiUrl}${apiPersonDetails}${id}/movie_credits?api_key=${apiKey}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const personCredits = await response.json();

  return personCredits;
};

const getPeopleByQuery = async (query, page) => {
  if (!query) {
    return;
  }

  const response = await fetch(`${apiUrl}search/person?api_key=${apiKey}&language=en-US&page=${page}&query=${query}`)

  const people = await response.json();

  return people;
};

export const getPeople = (query, page) => {
  if (!!query) {
    return getPeopleByQuery(query, page);
  }

  return getPopularPeople(page);
};