import React from "react";
import PropTypes from "prop-types";
import { Overlay, StyledModal } from "./styled";

const Modal = ({ children, isOpen, onClose }) => {
  console.log("isOpen", isOpen);

  if (!isOpen) return null;

  return (
    <Overlay data-testid="khjjfklsaj" onClick={onClose}>
      <StyledModal onClick={(e) => e.stopPropagation()}>{children}</StyledModal>
    </Overlay>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default Modal;
