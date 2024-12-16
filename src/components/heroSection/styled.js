import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
  margin-bottom: 50px;

  #sub-title {
    font-size: 16px;
    font-weight: 600;
    color: #4caf50;
    margin-bottom: 10px;
  }

   #main-title  {
    font-size: 48px;
    font-weight: 700;
    margin: 10px 0;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  h1 span {
    color: #4caf50;
  }

  button {
    background-color: #4caf50;
    color: #fff;
    padding: 15px 30px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;

    &:hover {
    background-color: #45a049;
    }

  a {
    text-decoration: none;
  }
`;

export const Content = styled.div`
  max-width: 50%;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
`;

export const ImageContainer = styled.div`
  max-width: 40%;
`;

export const PlantImage = styled.img`
  max-width: 100%;
  height: auto;
`;
