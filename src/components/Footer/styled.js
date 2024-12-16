import styled from "styled-components";

export const Cnt = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #eef7e9;
  border-radius: 8px;
  gap: 50px;
  margin-bottom: ${(props) => (props.isMainPage ? "100px" : "50px")};

  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
    flex-basis: ${(props) => (props.isMainPage ? "30%" : "50%")};
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: ${(props) => (props.isMainPage ? "block" : "flex")};
    flex-wrap: wrap;
  }

  ol {
    padding-left: 20px;
  }

  li {
    padding: 10px 0;
    flex-basis: 50%;
  }

  li img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    margin-bottom: -5px;
  }

  h5 {
    text-align: center;
    padding: 0;
    margin: 0;
  }

  .right-block {
    h5 {
      color: #4caf50;
      font-size: 20px;
    }
  }

  a {
    color: green;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .flex-left {
      order: 2;
    }
  }
`;

export const StyledList = styled.ul``;
