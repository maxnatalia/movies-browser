import React from "react";
import {
    PaginationButton,
    PaginationInfo,
    PaginationPageInfo,
    PaginationVector,
    PaginationWrapper,
    PaginatiotButtonInfo
} from "./styled";

const Pagination = ({ setPageParamsToUrl, page, totalPages }) => {
    const disabledPrev = page <= 1;
    const lastPage = totalPages > 500 ? 500 : totalPages;
    const disabledNext = page === lastPage;

    return (
        <PaginationWrapper>
            <PaginationButton
                disabled={disabledPrev}
                onClick={() => setPageParamsToUrl(1)}
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
                onClick={() => setPageParamsToUrl(page - 1)}
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
                onClick={() => setPageParamsToUrl(page + 1)}
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
                onClick={() => setPageParamsToUrl(lastPage)}
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