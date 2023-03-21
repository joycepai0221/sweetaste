import React from "react";

import {
  AccountFormContainer,
  AccountFormHeader,
  AccountFormBtnWrapper,
  AccountFormButton,
  FBIcon,
  GoogleIcon,
} from "./ThirdPartyAccountElements";

const ThirdPartyAccount = () => {
  return (
    <AccountFormContainer>
      <AccountFormHeader>—— 連結社群帳號 ——</AccountFormHeader>
      <AccountFormBtnWrapper>
        <AccountFormButton>
          <FBIcon />
        </AccountFormButton>
        <AccountFormButton>
          <GoogleIcon />
        </AccountFormButton>
      </AccountFormBtnWrapper>
    </AccountFormContainer>
  );
};

export default ThirdPartyAccount;
