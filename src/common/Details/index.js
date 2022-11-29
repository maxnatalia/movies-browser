import styled, { css } from "styled-components";
import { ReactComponent as Star } from "../images/Star.svg";
import video from "../images/Video.svg";

export const DetailsWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  margin: 64px 0 40px 0;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 16px 0 24px 0;
  }
`;

export const DetailsImage = styled.img`
  margin: 40px;
  width: 312px;
  height: 464px;
  border-radius: 5px;
  grid-column: 1;
  grid-row: 1 / 3;
  background-image: url(${video});
  background-size: 35%;
  background-color: ${({ theme }) => theme.color.silver};
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    margin: 16px 16px 0 16px;
    width: 234px;
    height: 348px;
    grid-row: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: 169px;
  }

  ${({ person }) => person && css`
    width: 399px;
    height: 564px;

    @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
      width: 280px;
      height: 395px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      width: 116px;
      height: 163px;
    }
  `}
`;

export const TextWrapper = styled.div`
  margin: 40px 40px 0 0;
  grid-column: 2;
  grid-row: 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    margin: 16px 16px 0 0;
  }
`;

export const DetailsTitle = styled.p`
  margin: 0 0 24px 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    margin-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export const Year = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.darkerGrey};
  }
`;

export const AdditionalInfoWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    margin-top: 8px;
  }

  ${({ secondLine }) => secondLine && css`
    margin-top: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 0;
    }
  `}
`;

export const DetailsText = styled.div`
  margin: 24px 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }

  ${({ additionalQuestion }) => additionalQuestion && css`
    color: ${({ theme }) => theme.color.stormGrey};
    margin: 0;
    font-size: 18px;
    line-height: 1.2;
    padding-right: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      font-size: 12px;
      padding-right: 4px;
    }
  `}

  ${({ additionalAnswer }) => additionalAnswer && css`
    margin: 0;
    font-size: 18px;
    line-height: 22px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      font-size: 12px;
    }
  `}

  ${({ mobileHidden }) => mobileHidden && css`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      display: none;
    }
  `}
`;

export const Info = styled.div`
  margin: 0 40px 32px 0;
  grid-column: 2;
  grid-row: 2;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    grid-column: 1 / 3;
    margin: 0 16px; 
  }
`;

export const TagsWrapper = styled.div`
  margin-top: 24px; 
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 8px; 
    gap: 8px;
  }
`;

export const Tag = styled.div`
  background-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.lightBlack};
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
    line-height: 11pz;
    padding: 4px 8px;
  }
`;

export const RatingWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 12px;
  align-items: flex-end;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0 0 4px 0;
    gap: 4px;
  }

  ${({ mobileHidden }) => mobileHidden && css`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      display: none;
    }
  `}

  ${({ mobile }) => mobile && css`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 12px;
    }
  `}
`;

export const StarIcon = styled(Star)`
  width: 24px;
  height: 24px;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
    height: 16px;
  }

  ${({ display }) => display && css`
    width: 40px;
    height: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}px) {
      width: 32px;
      height: 32px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      width: 16px;
      height: 16px;
    }
  `}
`;

export const Rate = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }

  ${({ infoMain }) => infoMain && css`
    font-size: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      font-weight: 600;
      font-size: 14px;
    }
  `}
`;

export const Votes = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  padding-bottom: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    padding-bottom: 0;
    color: ${({ theme }) => theme.color.darkerGrey};
  }

  ${({ infoMain }) => infoMain && css`
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      font-size: 10px;
      padding-bottom: 2px;
      color: ${({ theme }) => theme.color.white};
    }
  `}

  ${({ normalHidden }) => normalHidden && css`
    visibility: hidden;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      visibility: visible;
    }
  `}

  ${({ mobileHidden }) => mobileHidden && css`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      display: none;
    }
  `}

  ${({ mobile }) => mobile && css`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-left: 8px;
    }
  `}
`;