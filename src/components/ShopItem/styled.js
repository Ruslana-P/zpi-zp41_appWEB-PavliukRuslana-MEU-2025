import styled from "styled-components";

export const Card = styled.div`
  text-align: center;
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;
`;

export const ImageWrapper = styled.div`
  max-width: 258px;
  width: 100%;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ItemDetails = styled.div`
  margin-top: 10px;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  h3 {
    font-size: 14px;
    margin: 0;
  }
  p {
    font-size: 14px;
    font-weight: bold;
    color: green;
    margin: 5px 0px;
  }
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:hover {
    width: 28px;
    height: 28px;
    backgroun-color: #fbfbfb;
  }
`;
