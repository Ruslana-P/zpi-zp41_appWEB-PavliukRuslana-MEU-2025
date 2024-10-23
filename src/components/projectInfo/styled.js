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
