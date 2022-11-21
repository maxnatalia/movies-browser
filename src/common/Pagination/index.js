import React from "react";
import { PaginationButton, PaginationInfo, PaginationPageInfo, PaginationVector, PaginationWrapper, PaginatiotButtonInfo } from "./styled";

const Pagination = () => {

    return (
        <PaginationWrapper>
            <PaginationButton disabled>
                <PaginationVector disabled />
                <PaginationVector disabled additionalMobile />
                <PaginatiotButtonInfo>
                    First
                </PaginatiotButtonInfo>
            </PaginationButton>
            <PaginationButton disabled>
                <PaginationVector disabled />
                <PaginatiotButtonInfo>
                    Previous
                </PaginatiotButtonInfo>
            </PaginationButton>
            <PaginationInfo>
                Page
                <PaginationPageInfo>
                    1
                </PaginationPageInfo>
                of
                <PaginationPageInfo>
                    500
                </PaginationPageInfo>
            </PaginationInfo>   
            <PaginationButton>
            <PaginatiotButtonInfo>
                    Next
                </PaginatiotButtonInfo>
                <PaginationVector right />
            </PaginationButton>
            <PaginationButton>
            <PaginatiotButtonInfo>
                    Last
                </PaginatiotButtonInfo>
                <PaginationVector right additionalMobile />
                <PaginationVector right />
            </PaginationButton>
        </PaginationWrapper>
    );
};


export default Pagination;