import styled from "styled-components";

export const PageCnt = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 50px;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 10px;
  }

  @media (max-width: 768px) {
    padding-top: 15px;
  }
`;
