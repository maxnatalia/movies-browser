import styled from "styled-components";
import { ReactComponent as Star } from "../../../common/images/Star.svg";
import video from "../../../common/images/Video.svg";

export const MainWrapper = styled.main`
    margin: 0 auto;
    max-width: 1400px;
    padding: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}px) {
        padding: 8px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        padding: 0;
    }
`;

export const TilesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        grid-gap: 8px;
    }
`;

export const Header = styled.h2`
    line-height: 1.2;
    font-size: 36px;
    font-weight: 600;
    margin-top: 56px;
    color: ${({ theme }) => theme.color.lightBlack};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 18px;
        margin-top: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        font-size: 14px;
        margin-top: 18px;
        padding-left: 4px;
    }
`;

export const TileMovie = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    min-height: 650px;
    min-width: 324px;
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover {
        transition: 1s linear;
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(186, 199, 213, 1.5);
    }

    &:active {
        transform: scale(1.07);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        min-height: 169px;
        flex-direction: row;
        gap: 16px;
        min-width: 288px;
        width: 100%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        min-height: 169px;
        flex-direction: row;
        gap: 8px;
        min-width: 278px;
        width: 100%;
        padding: 16px;
    }
`;

export const ImageWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.silver};
    max-height: 434px;
    border-radius: 5px;
    width: 100%;
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-height: 169px;
        max-width: 114px;
    }
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    background-size: 30%;
    background-image: url(${video});
    background-position: center;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.color.white};
    aspect-ratio: 2/3;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
    }
`;

export const Title = styled.h3`
    margin-top: 16px;
    margin-bottom: 8px;
    word-break: break-word;
    max-width: 292px;
`;

export const StyledDate = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.darkerGrey};
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        line-height: 1.3;
    }
`;

export const TagsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
`;

export const Tag = styled.div`
    background-color: ${({ theme }) => theme.color.grey};
    color: ${({ theme }) => theme.color.lightBlack};
    padding: 8px 16px;
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
        line-height: 1.1;
        padding: 4px 8px;
    }
`;

export const RatingWrapper = styled.div`
    display: flex;
    gap: 12px;
    align-items: flex-end;
    flex-grow: 1;
`;

export const StarIcon = styled(Star)`
    width: 24px;
    height: 23px;
    vertical-align: middle;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 16px;
        height: 15px;
    }
`;

export const Rate = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.lightBlack};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        line-height: 1.3;
    }
`;
export const Votes = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.darkerGrey};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        line-height: 1.3;
    }
`;