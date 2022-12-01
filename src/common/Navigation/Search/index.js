import React from "react";
import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import { useLocation } from "react-router-dom";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParametersHooks";
import { queryParameters } from "./queryParameters";

const Search = () => {

  const location = useLocation();
  const query = useQueryParameter(queryParameters.search);
  const replaceQueryParameter = useReplaceQueryParameter();

  // const clearInput = ({ target }) => {
  //   replaceQueryParameter([
  //     {
  //       key: queryParameters.search,
  //       value: target.value = "",
  //     },
  //     {
  //       key: queryParameters.page,
  //       value: 1,
  //     },
  //   ]);
  // };

  const onInputChange = ({ target }) => {
    replaceQueryParameter([
      {
        key: queryParameters.search,
        value: target.value.trim() !== "" ? target.value : "",
      },
      {
        key: queryParameters.page,
        value: 1,
      },
    ]);
  };

  return (
    <SearchWrapper disabled={location.pathname.includes("/movie-details")} >
      <SearchIcon />
      <SearchInput
        value={query ? query : ""}
        onChange={onInputChange}
        placeholder={`Search for ${location.pathname === "/movies" ||
          location.pathname.includes("/movie")
          ? "movies..."
          : "people..."
          }`}
        disabled={location.pathname.includes("/movie-details")}
        // onClick={clearInput}
      />
    </SearchWrapper>
  );
};

export default Search;