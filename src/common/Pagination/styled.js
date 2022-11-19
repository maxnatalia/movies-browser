import styled, { css } from "styled-components";
import { ReactComponent as Vector } from "../images/Vector.svg"


export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 103px 0;
    width: 100%;
`;

export const PaginationButton = styled.button`
    display: inherit;
    align-items: center;
    border: none;
    padding: 8px 16px;
    gap: 8px;
    margin: 0 6px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 1.4;
    background-color: ${({ theme }) => theme.color.lightBlue};
    max-height: 36px;

    &:disabled {
        background-color: ${({ theme }) => theme.color.grey};
        color: ${({ theme }) => theme.color.black};
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 8px 12px;
        margin: 0 4px;
        gap: 4px;
    };
`;

export const PaginatiotButtonInfo = styled.span`
    display: block;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
    };
`;

export const PaginationInfo = styled.p`
    margin: 0 16px 0 24px;
    color: ${({ theme }) => theme.color.darkerGrey};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
        line-height: 24px;
        margin: 0 4px;
    };
`;

export const PaginationPageInfo = styled.span`
    margin: 0 8px;
    color: ${({ theme }) => theme.color.black};
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0 2px;
    };
`;

export const PaginationVector = styled(Vector)`
    width: 7px;
    height: 11px;
    fill: ${({ theme }) => theme.color.blue};

    ${({ right }) => right && css`
        transform: rotate(180deg);
    `};

    ${({ disabled }) => disabled && css`
        fill: ${({ theme }) => theme.color.darkerGrey};
    `};

    ${({ additionalMobile }) => additionalMobile && css`
        display: none;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            display: block;
        };
    `};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 5px;
        height: 8px;
    };
`;