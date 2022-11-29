import { apiKey, apiUrl } from "../../apiData";

export const getPeople = async () => {
    const response = await fetch(`${apiUrl}person/popular?api_key=${apiKey}&language=en-US&page=1`);
    
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const people = await response.json();

    return people;
};