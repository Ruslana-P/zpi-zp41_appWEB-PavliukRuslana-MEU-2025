import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  padding: 20px;
  display: ${(props) => (props.isVisible ? "block" : "none")};

  @media (max-width: 768px) {
    padding: 0;
    position: absolute;
    top: 67px;
    left: 0;
    width: 100%;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: white;
    width: 100%;

    li {
      height: 60px;
      border-bottom: 1px solid gray;
      display: flex;
      align-items: center;
      padding-top: 20px;

      a {
        margin: 0;
      }
    }
  }
`;

export const NavItem = styled.li`
  margin: 0 15px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding-bottom: 25px;

  &.active {
    border-bottom: 2px solid #4caf50;
  }

  &:hover {
    color: #4caf50;
  }
`;
