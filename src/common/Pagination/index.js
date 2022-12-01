import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectMovies,
    selectPage,
    setPage,
} from "../../features/movies/moviesSlice";
import {
    PaginationButton,
    PaginationInfo,
    PaginationPageInfo,
    PaginationVector,
    PaginationWrapper,
    PaginatiotButtonInfo
} from "./styled";

const Pagination = () => {

    const dispatch = useDispatch()
    const page = useSelector(selectPage);
    const movies = useSelector(selectMovies);
    const lastPage = movies.total_pages > 500 ? 500 : movies.total_pages;
    const disabledPrev = page !== 1 ? false : true;
    const disabledNext = page === lastPage ? true : false;

    return (
        <PaginationWrapper>
            <PaginationButton
                disabled={disabledPrev}
                onClick={() => dispatch(setPage(1))}
            >
                <PaginationVector
                    disabled={disabledPrev}

                />
                <PaginationVector
                    disabled={disabledPrev}
                    additionalmobile="true"
                />
                <PaginatiotButtonInfo>
                    First
                </PaginatiotButtonInfo>
            </PaginationButton>

            <PaginationButton
                disabled={disabledPrev}
                onClick={() => dispatch(setPage(page - 1))}
            >
                <PaginationVector
                    disabled={disabledPrev}
                />
                <PaginatiotButtonInfo>
                    Previous
                </PaginatiotButtonInfo>
            </PaginationButton>

            <PaginationInfo>
                Page
                <PaginationPageInfo>
                    {page}
                </PaginationPageInfo>
                of
                <PaginationPageInfo>
                    {lastPage}
                </PaginationPageInfo>
            </PaginationInfo>

            <PaginationButton
                disabled={disabledNext}
                onClick={() => dispatch(setPage(page + 1))}
            >
                <PaginatiotButtonInfo>
                    Next
                </PaginatiotButtonInfo>
                <PaginationVector
                    disabled={disabledNext}
                    right="true"
                />
            </PaginationButton>

            <PaginationButton
                disabled={disabledNext}
                onClick={() => dispatch(setPage(lastPage))}
            >
                <PaginatiotButtonInfo>
                    Last
                </PaginatiotButtonInfo>
                <PaginationVector
                    disabled={disabledNext}
                    right="true"
                    additionalmobile="true"
                />
                <PaginationVector
                    disabled={disabledNext}
                    right="true"
                />
            </PaginationButton>
        </PaginationWrapper>
    );
};

export default Pagination;