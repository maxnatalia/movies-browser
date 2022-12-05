import { apiKey, apiUrl, apiPersonDetails } from "../../apiData";

export const getPeople = async () => {
    const response = await fetch(`${apiUrl}person/popular?api_key=${apiKey}&language=en-US&page=1`);
    
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