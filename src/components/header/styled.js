import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  height: 50px;
  margin-bottom: 12px;
`;

export const LogoSection = styled.div`
  display: flex;
  alignitems: center;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  alignitems: center;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: 20px;
  }
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;

  div {
    width: 30px;
    height: 2px;
    margin-bottom: 8px;
    background-color: green;
  }

  div:last-child {
    margin-bottom: 0px;
  }
`;

export const CloseCross = styled.p`
  font-size: 30px;
  cursor: pointer;
  color: green;
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-right: 15px;
`;
