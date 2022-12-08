import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import { queryParamName, useQueryParams } from "../../../core/ulrSearchParams";
import { toMovieDetails, toPeople, toPersonDetails, toPopularMovies } from "../../../core/routes";
import { SearchIcon, SearchInput, SearchWrapper } from "./styled";

const Search = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [placeholder, setPlaceholder] = useState("");
    const [queryParam, setQueryParamToUrl] = useQueryParams();

    const handleQueryOnChange = debounce(({ target }) => {
        if (location.pathname.split("/")[1] === toMovieDetails.split("/")[1]) {
            navigate({
                pathname: toPopularMovies,
                search: createSearchParams({ [queryParamName]: target.value }).toString()
            });
        } else if (location.pathname.split("/")[1] === toPersonDetails.split("/")[1]) {
            navigate({
                pathname: toPeople,
                search: createSearchParams({ [queryParamName]: target.value }).toString()
            });
        }
        else {
            setQueryParamToUrl(target.value);
        };
    }, 1000);

    useEffect(() => {
        if (location.pathname.split("/")[1] === toMovieDetails.split("/")[1] || location.pathname.split("/")[1] === toPopularMovies.split("/")[1]) {
            setPlaceholder(`Search for ${toPopularMovies.split("/")[1]}...`);
        } else {
            setPlaceholder(`Search for ${toPeople.split("/")[1]}...`);
        }
    }, [location.pathname])

    return (
        <SearchWrapper>
            <SearchIcon />
            <SearchInput
                onChange={handleQueryOnChange}
                defaultValue={queryParam || ""}
                type="text"
                placeholder={placeholder}
            />
        </SearchWrapper>
    );
};

export default Search;