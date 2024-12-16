import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
`;

export const StyledModal = styled.div`
  background-color: white;
  min-width: 30%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 250px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1001;

  @media (max-width: 768px) {
    margin-top: 70px;
  }
`;
