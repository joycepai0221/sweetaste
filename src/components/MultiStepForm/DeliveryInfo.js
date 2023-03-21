import React from "react";
import FullWidthInput from "../FullWidthInput";
import { FormGroupContainer } from "./MultiStepFormElements";

const DeliveryInfo = () => {
  return (
    <>
      <FormGroupContainer>
        <FullWidthInput
          name="lastname"
          id="lastname"
          dflex={false}
          fullWidth={false}
          type="text"
          showIcon={false}
          iconImg=""
          showLabel="true"
          label="姓氏"
          placeholder="王"
          login="true"
          big="false"
        />
        <FullWidthInput
          name="firstname"
          id="firstname"
          dflex={false}
          fullWidth={false}
          type="text"
          showIcon={false}
          iconImg=""
          showLabel="true"
          label="名字"
          placeholder="小明"
          login="true"
          big="false"
        />
      </FormGroupContainer>
      <FullWidthInput
        name="tel"
        id="tel"
        dflex={false}
        fullWidth={true}
        type="text"
        showIcon={false}
        iconImg=""
        showLabel="true"
        label="電話"
        placeholder="0912-345-678"
        login="true"
        big="false"
      />
      <FormGroupContainer>
        <FullWidthInput
          name="address1"
          id="address1"
          dflex={false}
          fullWidth={false}
          type="select"
          showIcon={false}
          iconImg=""
          showLabel="true"
          label="地址1"
          placeholder="高雄市"
          padding="true"
          big="false"
        />
        <FullWidthInput
          name="address2"
          id="address2"
          dflex={false}
          fullWidth={false}
          type="select"
          showIcon={false}
          iconImg=""
          showLabel={false}
          label=""
          placeholder="新興區"
          padding="true"
          big="false"
        />
      </FormGroupContainer>
      <FullWidthInput
        name="tel"
        id="tel"
        dflex={false}
        fullWidth={true}
        type="text"
        showIcon={false}
        iconImg=""
        showLabel={false}
        label=""
        placeholder="0912-345-678"
        padding="true"
        big="false"
      />
    </>
  );
};

export default DeliveryInfo;