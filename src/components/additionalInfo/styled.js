import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #eef7e9;
  border-radius: 8px;
  gap: 50px;
  margin-bottom: 100px;

  div {
    flex-basis: 30%;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ol {
    padding-left: 20px;
  }

  li {
    padding: 10px 0;
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
`;
