import styled from "styled-components";
import { ReactComponent as Video } from "./Video.svg";

export const NavigationHeader = styled.header`
    background: ${({ theme }) => theme.color.lightBlack};
`;

export const NavigationWrapper = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1330px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        padding: 0 16px 16px;
        max-width: ${({ theme }) => theme.breakpoint.mobile}px;
        justify-content: space-between;
    };
`;

export const NavigationLogoWrapper = styled.div`
    display: inherit;
    margin-right: 75px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin-right: 19px;
    };
`;

export const Nav = styled.nav`
    display: inherit;
    align-items: center;
    flex-grow: 1;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        flex-grow: 0;
    };
`;

export const NavigationTitle = styled.h1`
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    text-transform: capitalize;
    letter-spacing: -1.5px;
    color: ${({ theme }) => theme.color.white};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
        line-height: 1.3;
    };
`;

export const NavigationLink = styled.span`
    display: inherit;
    padding: 8px 24px;
    margin: 23px 0 24px 5px;
    border-radius: 24px;
    color: ${({ theme }) => theme.color.white};
    border: 1px solid transparent;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    cursor: pointer;
    
    &:hover {
        border: 1px solid ${({ theme }) => theme.color.white};
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        max-height: 34px;
        border-radius: 29px;
        font-size: 12px;
        line-height: 18px;
    };
`;

export const VideoIcon = styled(Video)`
    margin: 0 12px 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 17px;
        height: 17px;
    };
`;




