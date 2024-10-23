import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 40px;
  background-color: #f9f9f9;
  margin-bottom: 50px;

  .table-title {
    text-align: center;
    font-size: 24px;
    color: #4caf50;
    margin-bottom: 20px;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
  }

  thead {
    border-bottom: 2px solid #ccc;
    padding: 10px;
    text-align: left;
    font-weight: bold;
    color: #333;
  }

  tbody td {
    border-bottom: 1px solid #eee;
    padding: 10px;
    color: #333;
  }
`;
