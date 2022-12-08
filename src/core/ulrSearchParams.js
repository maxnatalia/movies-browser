import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { toPeople, toPopularMovies } from "./routes";
import { setPage, setQuery } from "../features/movies/moviesSlice";
import { setPeoplePage, setPeopleQuery } from "../features/people/peopleSlice";

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
        } else if (location.pathname === toPeople) {
            dispatch(setPeopleQuery(queryParam));
        }
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
    const location = useLocation();
    const dispatch = useDispatch();
    const [pageParams, setPageParams] = useSearchParams();
    const pageParam = +pageParams.get(pageParamName);

    useEffect(() => {
        if (location.pathname === toPopularMovies) {
            pageParam ? dispatch(setPage(pageParam)) : dispatch(setPage(1));
        } else if (location.pathname === toPeople) {
            pageParam ? dispatch(setPeoplePage(pageParam)) : dispatch(setPeoplePage(1));
        }

    }, [pageParam, dispatch, location.pathname])

    const setPageParamToUrl = (page) => {
        pageParams.set(pageParamName, page);
        setPageParams(pageParams);
    };

    return setPageParamToUrl;
};