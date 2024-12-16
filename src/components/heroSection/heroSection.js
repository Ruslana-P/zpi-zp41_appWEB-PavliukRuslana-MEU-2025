import React from "react";
import mainPlant from "../../images/main_plant.png";
import {
  HeroSectionWrapper,
  Content,
  Description,
  ImageContainer,
  PlantImage,
} from "./styled";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <Content>
        <h2 id="sub-title">WELCOME TO GREENSHOP</h2>
        <h1 id="main-title">
          LET'S MAKE A <br /> BETTER <span>PLANET</span>
        </h1>
        <Description>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create a unique Urban Jungle. Order your
          favorite plants!
        </Description>
        <Link to="/shop">
          <button>SHOP NOW</button>
        </Link>
      </Content>
      <ImageContainer>
        <PlantImage src={mainPlant} alt="Main Plant" />
      </ImageContainer>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
