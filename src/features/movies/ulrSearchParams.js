import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { toPopularMovies } from "../../routes";
import { setQuery } from "./moviesSlice";

export const queryParamName = "search";
export const pageParamName = "page";

export const useQueryParams = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [queryParams, setQueryParams] = useSearchParams();
    const queryParam = queryParams.get(queryParamName);

    useEffect(() => {
        if (location.pathname === toPopularMovies) {
            dispatch(setQuery(queryParam));
        };
    }, [queryParam, dispatch]);

    const setQueryParamToUrl = (query) => {
        queryParams.set(pageParamName, 1);
        if (!query) {
            queryParams.delete(queryParamName);
            queryParams.delete(pageParamName);
            setQueryParams(queryParams);
        } else {
            queryParams.set(queryParamName, query);
            setQueryParams(queryParams);
        };
    };

    return [queryParam, setQueryParamToUrl];
};