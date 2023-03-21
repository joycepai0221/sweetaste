import styled from "styled-components";
import { Button } from "../ButtonElements";

export const OrderFormContainer = styled.div`
  width: 300px;
  height: ${({ checkout }) => (checkout ? "unset" : "258px")};
  background: ${({ checkout }) => (checkout ? "#fff" : "#3f5d45")};
  color: ${({ checkout }) => (checkout ? "#8DA291" : "#eaf0ed")};
  border: ${({ checkout }) => (checkout ? "1px solid #eaf0ed" : "0px")};
  margin-bottom: ${({ checkout }) => (checkout ? "20px" : "0")};

  @media screen and (max-width: 768px) {
    width: unset;
    height: 193px;
    background: #fff;
  }
`;

export const OrderFormContent = styled.div`
  margin: ${({ checkout }) => (checkout ? "16px 20px" : "16px 18px")};
  background: ${({ checkout }) => (checkout ? "#fff" : "#3f5d45")};
  @media screen and (max-width: 768px) {
    color: #3f5d45;
  }
`;

export const OrderFormHeader = styled.div`
  font-size: 24px;
  background: ${({ checkout }) => (checkout ? "#EAF0ED" : "#3f5d45")};
  border-bottom: 1px solid #eaf0ed;
  margin-bottom: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 65px;

  @media screen and (max-width: 768px) {
    line-height: 65px;
    padding-bottom: 0;
    background: #eaf0ed;
    color: #3f5d45;
  }
`;

export const OrderFormWrapper = styled.div`
  margin: 16px auto;
`;

export const OrderFormDiv = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  font-size: ${({ bigfont }) => (bigfont ? "20px" : "16px")};
`;

export const OrderFormTitle = styled.div``;

export const OrderFormPrice = styled.div``;

export const OrderButton = styled(Button)`
  width: 100%;
  display: ${({ checkout }) => (checkout ? "none" : "flex")}; ;
`;
