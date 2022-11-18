import styled from "styled-components";

const MainWrapper = styled.main`
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

export default MainWrapper;