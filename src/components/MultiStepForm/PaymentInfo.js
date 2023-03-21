import React from "react";
import FullWidthInput from "../FullWidthInput";
import { FormGroupContainer } from "./MultiStepFormElements";
import { AiOutlineCreditCard } from "react-icons/ai";

const PaymentInfo = () => {
  return (
    <>
      <FullWidthInput
        name="creditcard"
        id="creditcard"
        dflex={false}
        fullWidth={true}
        type="text"
        showIcon={true}
        iconImg={<AiOutlineCreditCard />}
        showLabel={true}
        label="信用卡卡號"
        placeholder="9012-3456-7890-1234"
        padding={true}
      />
      <FormGroupContainer paddingTop={true}>
        <FullWidthInput
          name="creditcard"
          id="creditcard"
          dflex={false}
          fullWidth={false}
          type="text"
          showIcon={false}
          iconImg=""
          showLabel={true}
          label="持卡人姓名"
          placeholder="王"
          padding={true}
        />
        <FullWidthInput
          name="creditcard"
          id="creditcard"
          dflex={false}
          fullWidth={false}
          type="text"
          showIcon={false}
          iconImg=""
          showLabel={false}
          label=""
          placeholder="小明"
          padding={true}
        />
      </FormGroupContainer>
      <FormGroupContainer paddingTop={false}>
        <FullWidthInput
          name="expiremonth"
          id="expiremonth"
          dflex={false}
          fullWidth={false}
          type="select"
          showIcon={false}
          iconImg=""
          showLabel="true"
          label="有效期限"
          placeholder="月"
          padding="true"
          big="false"
        />
        <FullWidthInput
          name="expireyear"
          id="expireyear"
          dflex={false}
          fullWidth={false}
          type="select"
          showIcon={false}
          iconImg=""
          showLabel={false}
          label=""
          placeholder="年"
          padding="true"
          big="false"
        />
      </FormGroupContainer>
      <FullWidthInput
        name="csv"
        id="csv"
        dflex={false}
        fullWidth={false}
        type="text"
        showIcon={false}
        iconImg=""
        showLabel={true}
        label="背面末三碼"
        placeholder="123"
        padding={true}
      />
    </>
  );
};

export default PaymentInfo;
