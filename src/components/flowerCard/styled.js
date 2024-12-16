import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: Arial, sans-serif;
  margin-bottom: 15px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 0 0 8px 0;
  color: #333;
`;

export const Description = styled.p`
  font-size: 14px;
  margin: 0 0 16px 0;
  color: #666;
`;

export const ReadMore = styled.a`
  font-size: 14px;
  color: green;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
