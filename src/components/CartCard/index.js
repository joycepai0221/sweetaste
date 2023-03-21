import React, { useState } from "react";
import {
  CartCardContainer,
  CartItemInfoContainer,
  CartItemImg,
  CartItemSectionWrapper,
  CartItemCheckoutWrapper,
  CartItemInfoWrapper,
  CartItemName,
  CartItemPrice,
  CartItemCheckoutQuantity,
  CartItemCounterContainer,
  CartItemCounterWrapper,
  LeftArrow,
  CartItemTotalPrice,
  RightArrow,
  IconWrapper,
  CanIcon,
} from "./CartCardElements";

const CartCard = ({ imgUrl, name, price, quantity, checkout }) => {
  const [count, setCount] = useState(quantity);
  return (
    <CartCardContainer checkout={checkout}>
      <CartItemInfoContainer>
        <CartItemImg src={imgUrl} checkout={checkout} />
        <CartItemSectionWrapper checkout={checkout}>
          <CartItemCheckoutWrapper>
            <CartItemInfoWrapper checkout={checkout}>
              <CartItemName checkout={checkout}>{name}</CartItemName>
              <CartItemCheckoutQuantity
                checkout={checkout}
              >{`(${count})`}</CartItemCheckoutQuantity>
              <CartItemPrice
                checkout={checkout}
              >{`NT$ ${price}`}</CartItemPrice>
            </CartItemInfoWrapper>
            <CartItemTotalPrice checkout={!checkout}>{`NT$ ${
              price * count
            }`}</CartItemTotalPrice>
          </CartItemCheckoutWrapper>
          <CartItemCounterContainer checkout={checkout}>
            <CartItemCounterWrapper>
              <LeftArrow
                onClick={() => {
                  setCount(count - 1);
                }}
              />
            </CartItemCounterWrapper>
            <CartItemCounterWrapper>{count}</CartItemCounterWrapper>
            <CartItemCounterWrapper>
              <RightArrow
                onClick={() => {
                  setCount(count + 1);
                }}
              />
            </CartItemCounterWrapper>
          </CartItemCounterContainer>
        </CartItemSectionWrapper>
      </CartItemInfoContainer>
      <CartItemTotalPrice checkout={checkout}>{`NT$ ${
        price * count
      }`}</CartItemTotalPrice>
      <IconWrapper checkout={checkout}>
        <CanIcon />
      </IconWrapper>
    </CartCardContainer>
  );
};

export default CartCard;
