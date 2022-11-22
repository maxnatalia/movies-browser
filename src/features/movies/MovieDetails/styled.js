import styled from "styled-components";
import bigPoster from "../../../common/images/bigPoster.png";

export const PosterDisplay = styled.div`
  background-color: ${({ theme }) => theme.color.black};
`;

export const PosterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1368px;
  height: 769px;
  background-image: url(${bigPoster});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 
    inset 0 0 40px 40px rgb(0 0 0), 
    inset 0 0 160px 0 rgb(0 0 0), 
    inset 0px -160px 160px -10px rgb(0 0 0);

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}px) {
    max-width: 800px;
    height: 449px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 262px;
    height: 148px;
    box-shadow: 
      inset 0 0 16px 8px rgb(0 0 0), 
      inset 0 -32px 88px 20px rgb(0 0 0);
  }
`;

export const MainInfoWrapper = styled.div`
  margin-bottom: 40px;
  max-height: 200px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}px) {
    margin-bottom: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 4px;
  }
`;

export const MainInfoTitle = styled.div`
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}px) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
  }
`;