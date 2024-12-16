import React from "react";
import {
  CardWrapper,
  ImageWrapper,
  Image,
  Content,
  Title,
  Description,
  ReadMore,
} from "./styled";

const CardComponent = ({ imgUrl, title }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={imgUrl} alt={title} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Description>
          Best in hanging baskets. Prefers medium to high light.
        </Description>
        <ReadMore href="#">Read More</ReadMore>
      </Content>
    </CardWrapper>
  );
};

export default CardComponent;
