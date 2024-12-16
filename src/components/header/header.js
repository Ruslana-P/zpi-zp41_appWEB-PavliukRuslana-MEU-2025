import React, { useState } from "react";
import Navigation from "../navigation/navigation";
import ShoppingCart from "../shoppingCard/shoppingCard";
import Button from "../Button/Button";
import {
  StyledHeader,
  LogoSection,
  ActionsWrapper,
  BurgerMenu,
  CloseCross,
  IconWrapper,
} from "./styled";
import Logo from "../../images/Logo";
import AuthModal from "../AuthModal/AuthModal";
import useScreenSize, { DEVICE } from "../../utils/useScreenSizeContext";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const screen = useScreenSize();

  return (
    <>
      <StyledHeader>
        {screen === DEVICE.MOBILE ? (
          <>
            <LogoSection>
              <Logo />
            </LogoSection>
            <ActionsWrapper>
              <IconWrapper>
                <ShoppingCart />
              </IconWrapper>
              <Button
                text="Log in"
                clickHandler={() => {
                  setIsModalOpen(true);
                }}
              />
            </ActionsWrapper>
            {!isMenuOpen ? (
              <BurgerMenu onClick={() => setIsMenuOpen(true)}>
                <div />
                <div />
                <div />
              </BurgerMenu>
            ) : (
              <CloseCross onClick={() => setIsMenuOpen(false)}>X</CloseCross>
            )}
            <Navigation isVisible={isMenuOpen}>jhkhl</Navigation>
          </>
        ) : (
          <>
            <LogoSection>
              <Logo />
            </LogoSection>
            <Navigation />
            <ActionsWrapper>
              <IconWrapper>
                <ShoppingCart />
              </IconWrapper>
              <Button
                text="Log in"
                clickHandler={() => {
                  setIsModalOpen(true);
                }}
              />
            </ActionsWrapper>
          </>
        )}
      </StyledHeader>
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
