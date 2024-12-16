import styled from "styled-components";

export const ShopItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: baseline;
  gap: 15px;
  padding-bottom: 60px;
`;

export const Wrapper = styled.div`
  table {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    border-collapse: collapse;
  }

  // td {
  //   border: 1px solid red; /* Межі для візуалізації блоків */
  // }

  /* Блок 1 - Верхній */
  .block-1 {
    height: 75px;
  }

  /* Блок 2 - Ліва бокова панель */
  .block-2 {
    width: 22%;
    vertical-align: baseline;
    background-color: #fbfbfb;
  }

  /* Блок 3 і 4 - Центральна область */
  .block-3-4 {
    height: 800px;
    width: 77%;
    padding: 20px;
  }

  /* Внутрішня структура в Блоці 3-4 */
  .inner-table {
    width: 100%;
    height: 100%;
    border-collapse: revert;
  }

  .inner-table td {
    border: 1px solid #ccc; /* Межі для блоків 3 і 4 */
  }

  .block-3 {
    width: 68%;
    vertical-align: baseline;
    position: relative;
  }

  .block-4 {
    height: 32%;
    vertical-align: baseline;
  }

  /* Блок 5 - Нижній */
  .block-5 {
  }
`;

export const StyledMobileWrapper = styled.div`
  position: relative;
  z-index: -1;
`;
