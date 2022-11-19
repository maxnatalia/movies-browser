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
  max-width: 1368px;
  height: 769px;
  background-image: url(${bigPoster});
  box-shadow: 
    inset 0 0 40px 40px rgb(0 0 0), 
    inset 0 0 160px 0 rgb(0 0 0), 
    inset 0px -160px 160px -10px rgb(0 0 0);
`;

export const MainInfoWrapper = styled.div`
  margin-bottom: 40px;
  max-height: 200px;
  color: ${({ theme }) => theme.color.white};
`;

export const MainInfoTitle = styled.div`
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;
`;