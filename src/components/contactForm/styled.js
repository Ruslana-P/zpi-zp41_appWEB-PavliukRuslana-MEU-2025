import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  background-color: #eef7e9;
  border-radius: 8px;
  padding: 30px 50px;
  margin-bottom: 50px;
  max-width: 1200px;
  box-sizing: border-box;

  h2 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }

  h2 span {
    color: #4caf50;
    margin: 0 30px;
  }

  form {
    display: flex;
    justify-content: space-between;
    gap: 100px;
  }

  form div {
    flex: 1;
    margin-right: 20px;
  }

   form div:last-child {
    flex: 2;
    margin-right: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

   button {
    background-color: #4CAF50;
    color: #fff;
    border: none;
    padding: 15px 30px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    width: 40%;
  },
`;
