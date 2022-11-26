import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectQuery, setQuery } from "../../../features/movies/moviesSlice";
import { SearchIcon, SearchInput, SearchWrapper } from "./styled";

const Search = () => {
    const query = useSelector(selectQuery);
    const dispatch = useDispatch()
    const onChangeValue = (event) => dispatch(setQuery(event.target.value));

    return (
        <SearchWrapper>
            <SearchIcon />
            <SearchInput
                value={query}
                onChange={onChangeValue}
                type="text"
                placeholder="Search for movies..."
            />
        </SearchWrapper>
    );
};

export default Search;