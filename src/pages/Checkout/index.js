import React from "react";
import { CheckoutContainer, CheckoutDetail } from "./CheckoutElements";
import CartList from "../../components/CartList";
import OrderForm from "../../components/OrderForm";
import MultiStepForm from "../../components/MultiStepForm";

const Checkout = () => {
  return (
    <>
      <CheckoutContainer>
        <MultiStepForm />
        <CheckoutDetail>
          <OrderForm checkout={true} />
          <CartList checkout={true} />
        </CheckoutDetail>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
