import Modal from "../Modal/Modal";
import React, { useState } from "react";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import {
  Container,
  CloseButton,
  Header,
  Toggle,
  ToggleButton,
  Separator,
  Content,
} from "./AuthModalStyled";

const AuthModal = ({ onClose, isOpen }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal isOpen={isOpen}>
      <Container>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Header>
          <Toggle>
            <ToggleButton active={isLogin} onClick={() => setIsLogin(true)}>
              Login
            </ToggleButton>
            <Separator>|</Separator>
            <ToggleButton active={!isLogin} onClick={() => setIsLogin(false)}>
              Register
            </ToggleButton>
          </Toggle>
        </Header>

        <Content>{isLogin ? <LoginForm /> : <RegisterForm />}</Content>
      </Container>
    </Modal>
  );
};

AuthModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AuthModal;
