import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Description = styled.p`
  margin: 0 0 10px 0;
  font-weight: 300;
`;

export const Field = styled.div`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;
