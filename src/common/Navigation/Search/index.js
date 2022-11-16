import React from "react";
import { SearchIcon, SearchInput, SearchWrapper } from "./styled";

const Search = () => {
    return (
        <SearchWrapper>
            <SearchIcon />
            <SearchInput
                type="text"
                placeholder="Search for movies..."
            />
        </SearchWrapper>
    );
};

export default Search;