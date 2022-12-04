import debounce from "lodash.debounce";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import { queryParamName, useQueryParams } from "../../../features/movies/ulrSearchParams";
import { toPopularMovies } from "../../../routes";
import { SearchIcon, SearchInput, SearchWrapper } from "./styled";

const Search = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [queryParam, setQueryParamToUrl] = useQueryParams();

    const handleQueryOnChange = debounce(({ target }) => {
        if (location.pathname !== toPopularMovies) {
            navigate({
                pathname: toPopularMovies,
                search: createSearchParams({ [queryParamName]: target.value }).toString()
            });
        } else {
            setQueryParamToUrl(target.value);
        };
    }, 1000);

    return (
        <SearchWrapper>
            <SearchIcon />
            <SearchInput
                onChange={handleQueryOnChange}
                defaultValue={queryParam || ""}
                type="text"
                placeholder="Search for movies..."
            />
        </SearchWrapper>
    );
};

export default Search;