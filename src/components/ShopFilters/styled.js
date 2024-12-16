import styled from "styled-components";

export const FilterWrapper = styled.div`
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fbfbfb;
  border-radius: 8px;
  font-family: Arial, sans-serif;
`;

export const Section = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;

  input {
    margin-left: 10px;
  }
`;

export const PriceInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  input {
    width: 60px;
    padding: 5px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
