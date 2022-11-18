import styled, { css } from "styled-components";
import { ReactComponent as Star } from "../images/Star.svg";

export const DetailsWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  margin-top: 64px;
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const DetailsImage = styled.img`
  margin: 40px;
  width: 312px;
  height: 464px;
  border-radius: 5px;

  ${({ person }) => person && css`
    width: 399px;
    height: 564px;
  `}
`;

export const TextWrapper = styled.div`
  margin: 40px 40px 0 0;
`;

export const DetailsTitle = styled.p`
  margin: 0 0 24px 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
`;

export const Year = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
`;

export const AdditionalInfoWrapper = styled.div`
  margin-top: 24px;
  display: flex;

  ${({ secondLine }) => secondLine && css`
    margin-top: 8px;
  `}
`;

export const DetailsText = styled.div`
  margin: 24px 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;

  ${({ additionalQuestion }) => additionalQuestion && css`
    color: ${({ theme }) => theme.color.stormGrey};
    margin: 0;
    font-size: 18px;
    line-height: 22px;
  `}

  ${({ additionalAnswer }) => additionalAnswer && css`
    margin: 0;
    padding-left: 10px;
    font-size: 18px;
    line-height: 22px;
  `}
`;

export const Info = styled.div`
  margin: 24px 0 0 0;
`;

export const TagsWrapper = styled.div`
  margin-top: 24px; 
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
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
`;

export const StarIcon = styled(Star)`
  width: 24px;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
    height: 15px;
  }
`;

export const Rate = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 29px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const Votes = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 17px;
  }
`;