export const getApi = async (apiUrl) => {

    const response = await fetch(apiUrl);
  
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    return await response.json();
  };