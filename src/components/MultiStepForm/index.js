import React, { useState } from "react";
import DeliveryInfo from "./DeliveryInfo";
import PaymentInfo from "./PaymentInfo";
import ReceiptInfo from "./ReceiptInfo";
import {
  FormContainer,
  FormInnerWrapper,
  FormHeader,
  FormContent,
  ButtonWrapper,
  PrevBtn,
  NextBtn,
  CheckoutBtn,
} from "./MultiStepFormElements";

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const Title = ["運送", "付款", "發票"];
  const NextbuttonTitle = ["下一步", "下一步"];
  const DisplayPage = () => {
    switch (step) {
      case 0:
        return <DeliveryInfo />;
      case 1:
        return <PaymentInfo />;
      case 2:
        return <ReceiptInfo />;
      default:
    }
  };
  return (
    <FormContainer>
      <FormInnerWrapper big="true">
        <FormHeader>{Title[step]}</FormHeader>
        <FormContent big={true}>{DisplayPage()}</FormContent>
      </FormInnerWrapper>
      <ButtonWrapper>
        <PrevBtn
          bigsize="true"
          primary="true"
          greenfont="true"
          onClick={() => {
            step !== 0 && setStep(step - 1);
          }}
          displayNone={step === 0}
          notShowNext={step === 0 || 1}
        >
          上一步
        </PrevBtn>
        {step === 2 ? (
          <CheckoutBtn to="/checkout-success">確認結帳</CheckoutBtn>
        ) : (
          <NextBtn
            bigsize="true"
            primary="true"
            greenfont="true"
            onClick={() => {
              step !== 2 && setStep(step + 1);
            }}
            notShowPrev={step === 0}
          >
            {NextbuttonTitle[step]}
          </NextBtn>
        )}
      </ButtonWrapper>
    </FormContainer>
  );
};

export default MultiStepForm;
