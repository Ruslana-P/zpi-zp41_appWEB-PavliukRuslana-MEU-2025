import React from "react";
import { Nav, NavList, NavItem, StyledNavLink } from "./styled";

const Navigation = ({ isVisible = true }) => {
  return (
    <Nav isVisible={isVisible}>
      <NavList>
        <NavItem>
          <StyledNavLink exact to="/">
            Home
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/shop">Shop</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/plant-care">Plant Care</StyledNavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
