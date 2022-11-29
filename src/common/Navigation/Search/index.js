import React from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../../../features/movies/moviesSlice";
import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import debounce from "lodash.debounce";

const Search = () => {

    const dispatch = useDispatch();
    const handleChange = debounce((input) => {
        dispatch(setQuery(input));
    }, 1000);

    return (
        <SearchWrapper>
            <SearchIcon />
            <SearchInput
                onChange={(event) => handleChange(event.target.value)}
                type="text"
                placeholder="Search for movies..."
            />
        </SearchWrapper>
    );
};

export default Search;