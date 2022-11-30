import styled from "styled-components";
import { ReactComponent as Search } from "../../images/Search.svg";

export const SearchWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.grey};
    border-radius: 33px;
    display: flex;
    align-items: center;
    max-width: 432px;
    width: 100%;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
        max-width: 300px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        line-height: 16px;
        margin: auto;
    };
`;

export const SearchInput = styled.input`
    border: none;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    background-color: transparent;
    outline: 0;
    padding: 0;

    &::placeholder {
        color: ${({ theme }) => theme.color.darkerGrey};
    }

    &:disabled {}

    @media(max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
        font-size: 15px
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
    };
`;

export const SearchIcon = styled(Search)`
    margin: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
        width: 36px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 16px;
    };
`;