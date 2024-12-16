import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  width: 60px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;

  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1000;

  img {
    height: 60px;
    width: 60px;
  }
`;

export const PageCnt = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 30px;

  a {
    text-decoration: none;
    display: block;
    background-color: #4caf50;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 30px;
  }
`;
