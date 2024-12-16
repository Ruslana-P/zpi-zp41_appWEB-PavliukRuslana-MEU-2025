import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  text-align: center;
  position: relative;
`;

export const CloseButton = styled.button`
  color: green;
  position: absolute;
  right: 0px;
  top: -5px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Toggle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ToggleButton = styled.button`
  font-size: 20px;
  border: none;
  background: none;
  color: ${(props) => (props.active ? "green" : "gray")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  cursor: pointer;
`;

export const Separator = styled.span`
  margin: 0 10px;
  color: gray;
`;

export const Content = styled.div`
  margin-top: 10px;
`;
