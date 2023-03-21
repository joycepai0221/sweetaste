import styled from "styled-components";
import { Button } from "../ButtonElements";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
  background: #3f5d45;
  color: #eaf0ed;
  width: ${({ big }) => (big ? "460px" : "390px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const FormInnerWrapper = styled.div`
  padding: ${({ big }) => (big ? "30px 40px" : "30px")};
  padding-bottom: 0;
`;

export const FormHeader = styled.h3`
  font-size: 36px;
  white-space: nowrap;
  padding-bottom: 32px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: ${({ big }) => (big ? "0px 0px 30px" : "30px")};
`;

export const FormGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  margin-top: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 390px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PrevBtn = styled(Button)`
  width: ${({ notShowNext }) => (notShowNext ? "50%" : "100%")};
  display: ${({ displayNone }) => (displayNone ? "none" : "flex")};
  border-right: 1px solid #3f5d45;
`;

export const NextBtn = styled(Button)`
  width: ${({ notShowPrev }) => (notShowPrev ? "100%" : "50%")};
  display: flex;
`;

export const ReceiptBtnContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
`;

export const ReceiptButton = styled.div`
  border: 1px solid #eaf0ed;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #eaf0ed;

  &.active {
    background: #eaf0ed;
    color: #3f5d45;
  }
`;

export const CheckoutBtn = styled(Link)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #eaf0ed;
  height: 65px;
  background: #ffe180;
  font-size: 24px;
  color: #3f5d45;
  font-weight: bold;
`;
