import styled, { css } from "styled-components";

export const ErrorContainer = styled.div`
  text-align: center;
  margin: 195px auto 0 auto;

  @media (max-width: 767px) {
    margin-top: 140px;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  margin: 24px 0 0 0;

  @media (max-width: 767px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-top: 16px;
  }

  ${({ advice }) => advice && css`
    display: inline-block;
    max-width: 428px;
    margin-top: 24px;
    font-weight: 500;
    font-size: 22px;
    line-height: 29px;

    @media (max-width: 767px) {
      max-width: 220px;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      margin-top: 12px;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ icon }) => icon && css`
    display: inline-block;
    width: 120px;
    height: 120px;

    @media (max-width: 767px) {
      width: 70px;
      height: 70px;
    }
  `}
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.blue};
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  height: 51px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  margin: 24px 0 50px 0;
  padding: 0 24px;
  border: 1px solid ${({ theme }) => theme.color.blue};
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color.blueRibbon};
  }

  @media (max-width: 767px) {
    margin-top: 16px;
    font-weight: 500;
    font-size: 12px;
    height: 40px;
  }
`;