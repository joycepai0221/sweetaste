import React from "react";
import FullWidthInput from "../FullWidthInput";
import { ReceiptBtnContainer, ReceiptButton } from "./MultiStepFormElements";

const ReceiptInfo = () => {
  return (
    <>
      <ReceiptBtnContainer>
        <ReceiptButton className="active">電子發票</ReceiptButton>
        <ReceiptButton>郵寄發票</ReceiptButton>
      </ReceiptBtnContainer>
      <FullWidthInput
        name="email"
        id="email"
        dflex={false}
        fullWidth={true}
        type="text"
        showIcon={false}
        iconImg=""
        showLabel={true}
        label="電子郵件信箱"
        placeholder="example@email.com"
        padding="true"
        big="false"
      />
      <FullWidthInput
        name="receiptnum"
        id="receiptnum"
        dflex={false}
        fullWidth={true}
        type="text"
        showIcon={false}
        iconImg=""
        showLabel={true}
        label="統一編號（選填)"
        placeholder="12345678"
        padding="true"
        big="false"
      />
    </>
  );
};

export default ReceiptInfo;
