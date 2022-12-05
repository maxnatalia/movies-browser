import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { toPopularMovies } from "../../routes";
import { setPage, setQuery } from "./moviesSlice";

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
    }, [queryParam, dispatch, location.pathname]);

    const setQueryParamToUrl = (query) => {
        queryParams.set(pageParamName, 1);
        if (!query) {
            queryParams.delete(queryParamName);
            setQueryParams(queryParams);
        } else {
            queryParams.set(queryParamName, query);
            setQueryParams(queryParams);
        };
    };

    return [queryParam, setQueryParamToUrl];
};

export const usePageParams = () => {
    const dispatch = useDispatch();
    const [pageParams, setPageParams] = useSearchParams();
    const pageParam = pageParams.get(pageParamName);

    useEffect(() => {
        if (pageParam) {
            dispatch(setPage(+pageParam))
        } else {
            dispatch(setPage(1))
        }
    }, [pageParam, dispatch])

    const setPageParamToUrl = (page) => {
        pageParams.set(pageParamName, page);
        setPageParams(pageParams);
    };

    return setPageParamToUrl;
};