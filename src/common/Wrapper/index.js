import styled, { css } from "styled-components";

const Wrapper = styled.div`
  margin: 40px auto;
  max-width: 668px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 0;
    max-width: 300px;
  }

  ${({ loading }) => loading && css`
    margin-top: 120px;
    width: 91px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 24px;
      width: 35px;
    }
  `}
`;

export default Wrapper;