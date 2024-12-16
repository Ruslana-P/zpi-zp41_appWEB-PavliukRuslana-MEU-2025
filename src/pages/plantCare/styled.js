import styled from "styled-components";

export const Wrapper = styled.div``;
export const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  overflow: hidden;

  &::after {
    content: "";
    display: table;
    clear: both;
  }

  .block {
    width: 23%;
    margin: 1%;
    float: left;
    text-align: center;
    box-sizing: border-box;

    @media (max-width: 768px) {
      width: 48%;
    }
  }
`;
