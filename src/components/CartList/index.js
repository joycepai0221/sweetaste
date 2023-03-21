import React from "react";
import CartCard from "../CartCard";
import { CartItemData } from "./CartItemsData";
import {
  CartListContainer,
  CartListHeader,
  CartListWrapper,
} from "./CartListElements";

const CartList = ({ checkout }) => {
  return (
    <CartListContainer checkout={checkout}>
      <CartListHeader checkout={checkout}>
        {checkout ? "購物清單" : "您的購物車"}
      </CartListHeader>
      <CartListWrapper>
        {CartItemData.map((item) => (
          <CartCard {...item} checkout={checkout} />
        ))}
      </CartListWrapper>
    </CartListContainer>
  );
};

export default CartList;
