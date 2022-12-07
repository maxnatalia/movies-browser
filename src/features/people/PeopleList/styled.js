import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import person from "../../../common/images/Person.svg";

export const MainWrapper = styled.main`
    margin: 0 auto;
    max-width: 1400px;
    padding: 16px;

    ${({ insideDetails }) => insideDetails && css`
        padding: 0;
    `}
`;

export const Header = styled.h2`
    line-height: 1.2;
    font-size: 36px;
    font-weight: 600;
    margin-top: 56px;
    color: ${({ theme }) => theme.color.lightBlack};


    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 20px;
        padding-left: 8px;
    }
`;

export const TilesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
    gap: 24px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }
`;

export const TilePerson = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.color.white};
    min-width: 208px;
    min-height: 339px;
    padding: 16px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    cursor: pointer;

    &:hover {
        transition: 1s linear;
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(186, 199, 213, 1.5);
    }

    &:active {
        transform: scale(1.07);
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        min-height: 245px;
        min-width: 136px;
        padding: 8px;
    }
`;

export const ImageWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.silver};
    border-radius: 5px;
    width: 100%;
    display: flex;
    align-self: center;
    flex-basis: 264px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        flex-basis: 178px;
    }
`;

export const Image = styled.img`
    border-radius: 5px;
    width: 100%;
    background-size: 30%;
    background-image: url(${person});
    background-position: center;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.color.white};
    aspect-ratio: 2/3;
`;

export const Title = styled.h3`
    text-align: center;
    font-size: 22px;
    line-height: 1.3;
    font-weight: 500;
    margin: 0;
    padding-top: 12px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        padding-top: 8px;
    }

    ${({ job }) => job && css`
        color: ${({ theme }) => theme.color.darkerGrey};
        padding-top: 8px;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.5;

        @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
            line-height: 1.3;
            font-size: 13px;
        }
    `}
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
`;