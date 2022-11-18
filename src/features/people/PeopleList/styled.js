import styled from "styled-components";
import person from "../../../common/images/Person.svg";

export const MainWrapper = styled.main`
    margin: 0 auto;
    max-width: 1400px;
    padding: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        padding: 0;
    }
`;

export const Header = styled.h2`
    line-height: 1.2;
    font-size: 36px;
    font-weight: 600;
    margin-top: 56px;
    color: ${({ theme }) => theme.color.lightBlack};

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}px) {
        font-size: 28px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 20px;
        margin-top: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        padding-left: 8px;
    }
`;

export const TilesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 24px;
    justify-content: center;

    @media (max-width: ${({theme}) => theme.breakpoint.mediumScreen}px) {
        grid-template-columns: repeat(5, min-content);
        width: 100%;
        justify-content: space-between;
    }

    @media (max-width: ${({theme}) => theme.breakpoint.smallScreen}px) {
        grid-template-columns: repeat(4, min-content);
        
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: repeat(3, min-content);
        
    }

    @media (max-width: ${({theme}) => theme.breakpoint.oldIphone}px) {
        grid-template-columns: repeat(2, min-content);
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMin}px) {
        grid-template-columns: repeat(1, min-content);
        justify-content: center;
    }
`;

export const TilePerson = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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

    @media (max-width: ${({theme}) => theme.breakpoint.mediumScreen}px) {
        min-width: 136px;
        min-height: 245px;
        padding: 8px;
    }
`;

export const ImageWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.silver};
    border-radius: 5px;
    width: 100%;
    max-height: 231px;
    display: flex;

    @media (max-width: ${({theme}) => theme.breakpoint.mediumScreen}px) {
        max-width: 120px;
        max-height: 178px;
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

    @media (max-width: ${({theme}) => theme.breakpoint.mediumScreen}px) {
        font-size: 14px;
        padding-top: 8px;
    }
`;
