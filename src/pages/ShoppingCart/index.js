import React from "react";
import CartList from "../../components/CartList";
import OrderForm from "../../components/OrderForm";
import { ShoppingCartContainer } from "./ShoppingCartElements";

const ShoppingCart = () => {
  return (
    <ShoppingCartContainer>
      <CartList />
      <OrderForm />
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;
