import debounce from "lodash.debounce";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import { queryParamName, useQueryParams } from "../../../features/movies/ulrSearchParams";
import { toPopularMovies } from "../../../routes";
import { SearchIcon, SearchInput, SearchWrapper } from "./styled";

const Search = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [queryParam, setQueryParamToUrl] = useQueryParams();
    const [inputValue, setInputValue] = useState(queryParam);

    const handleQueryOnChange = useCallback(
        debounce(value => {
            if (location.pathname !== toPopularMovies) {
                navigate({
                    pathname: toPopularMovies,
                    search: createSearchParams({ [queryParamName]: value }).toString()
                });
            } else {
                setQueryParamToUrl(value);
            };
        }, 1000), 
        []);

    useEffect(() => {
        handleQueryOnChange(inputValue);
    }, [inputValue, handleQueryOnChange])

    return (
        <SearchWrapper>
            <SearchIcon />
            <SearchInput
                onChange={({ target }) => setInputValue(target.value)}
                value={inputValue || ""}
                type="text"
                placeholder="Search for movies..."
            />
        </SearchWrapper>
    );
};

export default Search;