import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Video } from "../images/Logo.svg";

export const NavigationHeader = styled.header`
    background: ${({ theme }) => theme.color.black};
`;

export const NavigationWrapper = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1330px;
    padding: 0 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
        justify-content: space-between;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding-bottom: 16px;
    };
`;

export const NavigationLogoWrapper = styled.div`
    display: inherit;
    align-items: center;
    margin-right: 75px;

    @media(max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
        margin-right: 24px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-right: 17px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        margin-right: 10px;
    };
`;

export const Nav = styled.nav`
    display: inherit;
    align-items: center;
    flex-grow: 1;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-grow: 0;
    };
`;

export const NavigationTitle = styled.h1`
    margin: 0;
    font-weight: 500;
    line-height: 40px;
    text-transform: capitalize;
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.color.white};

    @media(max-width: ${({ theme }) => theme.breakpoint.mediumScreen}px) {
        font-size: 24px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
        font-size: 20px;
        line-height: 1.3;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        line-height: 1.3;
    };
`;

export const NavigationLink = styled(NavLink)`
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
    transition: all .3s ease;
    text-decoration: none;

    &:hover, &.active {
        border: 1px solid ${({ theme }) => theme.color.white};
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
        border-radius: 30px;
        font-size: 13px;
        line-height: 19px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        border-radius: 29px;
        font-size: 12px;
        line-height: 18px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        padding: 8px 20px;
        border-radius: 29px;
        font-size: 10px;
        line-height: 16px;
        margin: 10px 0;
    };
`;

export const VideoIcon = styled(Video)`
    margin: 0 12px 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 17px;
        height: 17px;
    };
`;




