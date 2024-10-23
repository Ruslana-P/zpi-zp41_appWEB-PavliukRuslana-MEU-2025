import React from "react";
import mainPlant from "../../images/main_plant.png";
import {
  HeroSectionWrapper,
  Content,
  Description,
  ImageContainer,
  PlantImage,
} from "./styled";

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <Content>
        <h2>WELCOME TO GREENSHOP</h2>
        <h1>
          LET'S MAKE A <br /> BETTER <span>PLANET</span>
        </h1>
        <Description>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create a unique Urban Jungle. Order your
          favorite plants!
        </Description>
        <a href="/shop">
          <button>SHOP NOW</button>
        </a>
      </Content>
      <ImageContainer>
        <PlantImage src={mainPlant} alt="Main Plant" />
      </ImageContainer>
    </HeroSectionWrapper>
  );
};

export default HeroSection;