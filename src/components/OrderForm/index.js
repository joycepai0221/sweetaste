import React from "react";
import {
  OrderFormContainer,
  OrderFormContent,
  OrderFormHeader,
  OrderFormWrapper,
  OrderFormDiv,
  OrderFormTitle,
  OrderFormPrice,
  OrderButton,
} from "./OrderFormElements";

const OrderForm = ({ checkout }) => {
  return (
    <OrderFormContainer checkout={checkout}>
      <OrderFormHeader checkout={checkout}>訂單摘要</OrderFormHeader>
      <OrderFormContent checkout={checkout}>
        <OrderFormWrapper>
          <OrderFormDiv>
            <OrderFormTitle>小計</OrderFormTitle>
            <OrderFormPrice>NT$ 2,700</OrderFormPrice>
          </OrderFormDiv>
          <OrderFormDiv>
            <OrderFormTitle>運費</OrderFormTitle>
            <OrderFormPrice>NT$ 300</OrderFormPrice>
          </OrderFormDiv>
        </OrderFormWrapper>
        <OrderFormDiv bigfont={true}>
          <OrderFormTitle>總計</OrderFormTitle>
          <OrderFormPrice>NT$ 3,000</OrderFormPrice>
        </OrderFormDiv>
      </OrderFormContent>
      <OrderButton
        primary="true"
        bigsize="true"
        greenfont="true"
        to="/checkout"
        exact="true"
        checkout={checkout}
      >
        結帳
      </OrderButton>
    </OrderFormContainer>
  );
};

export default OrderForm;
