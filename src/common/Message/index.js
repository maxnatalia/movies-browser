import styled, { css } from "styled-components";

const Message = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  margin: 24px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
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

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      max-width: 220px;
      font-weight: 400;
      font-size: 11px;
      line-height: 14px;
      margin-top: 12px;
    }
  `}

  ${({ search }) => search && css`
    margin-top: 56px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 24px;
    }
  `}
`;

export default Message;