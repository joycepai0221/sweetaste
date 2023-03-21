import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

export const CartCardContainer = styled.div`
  height: ${({ checkout }) => (checkout ? "96px" : "130px")};
  padding: ${({ checkout }) => (checkout ? "16px 20px" : "20px auto")};
  border-bottom: 1px solid #eaf0ed;
  color: ${({ checkout }) => (checkout ? "#8DA291" : "#3f5d45")};
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 159.5px;
    margin-bottom: 30px;
  }
`;

export const CartItemInfoContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 8px;
    border-bottom: 1px solid #eaf0ed;
    display: flex;
    justify-content: space-between;
    height: 114.5px;
  }
`;

export const CartItemSectionWrapper = styled.div`
  display: flex;
  margin: ${({ checkout }) => (checkout ? "0px" : "0 38px")};
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    margin-left: 16px;
  }
`;

export const CartItemCheckoutWrapper = styled.div`
  height: 50px;
`;

export const CartItemImg = styled.img`
  width: ${({ checkout }) => (checkout ? "120px" : "110px")};
  height: ${({ checkout }) => (checkout ? "80px" : "110px")};
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 50%;
    height: 106px;
  }
`;

export const CartItemInfoWrapper = styled.div`
  width: ${({ checkout }) => (checkout ? "unset" : "107px")};
  height: ${({ checkout }) => (checkout ? "unset" : "53px")};
  display: ${({ checkout }) => (checkout ? "flex" : "block")};
  align-items: center;
`;

export const CartItemName = styled.div`
  font-size: ${({ checkout }) => (checkout ? "16px" : "20px")};
  white-space: nowrap;
`;

export const CartItemPrice = styled.div`
  margin: 0;
  display: ${({ checkout }) => (checkout ? "none" : "block")};
`;

export const CartItemCheckoutQuantity = styled.div`
  margin-left: 4px;
  display: ${({ checkout }) => (checkout ? "block" : "none")};
`;

export const CartItemCounterContainer = styled.div`
  display: ${({ checkout }) => (checkout ? "none" : "flex")};
  height: 48px;
  align-items: center;
  margin-left: 38px;
`;

export const CartItemCounterWrapper = styled.div`
  border: 1px solid #eaf0ed;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const LeftArrow = styled(AiOutlineMinus)`
  font-size: 16px;
  user-select: none;
`;

export const CartItemQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const RightArrow = styled(AiOutlinePlus)`
  font-size: 16px;
  user-select: none;
`;
export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: ${({ checkout }) => (checkout ? "none" : "flex")};
  align-items: center;
`;

export const CartItemTotalPrice = styled.div`
  width: 82px;
  height: 28px;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 600;
  margin-right: 38px;
  display: ${({ checkout }) => (checkout ? "none" : "block")};

  @media screen and (max-width: 768px) {
    align-self: end;
    line-height: 45px;
    margin-right: 0;
  }
`;

export const CanIcon = styled(AiOutlineDelete)`
  color: #8da291;
  font-size: 24px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
