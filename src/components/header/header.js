import React from "react";
import Navigation from "../navigation/navigation";
import ShoppingCart from "../shoppingCard/shoppingCard";
import LoginButton from "../loginBtn/loginBtn";
import { StyledHeader, LogoSection, ActionsWrapper } from "./styled";
import Logo from "../../images/Logo";

const Header = () => {
  return (
    <StyledHeader>
      <LogoSection>
        <Logo />
      </LogoSection>
      <Navigation />
      <ActionsWrapper>
        <ShoppingCart />
        <LoginButton />
      </ActionsWrapper>
    </StyledHeader>
  );
};

export default Header;
