import React from "react";
import { StyledButton } from "./styled";

const Button = ({ text, clickHandler }) => {
  return <StyledButton onClick={clickHandler}>{text}</StyledButton>;
};

export default Button;
