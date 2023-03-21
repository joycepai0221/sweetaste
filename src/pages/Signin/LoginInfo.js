import React from "react";
import FullWidthInput from "../../components/FullWidthInput";
import { BsFillPersonFill, BsFillKeyFill } from "react-icons/bs";

const LoginInfo = () => {
  return (
    <>
      <FullWidthInput
        name="account"
        id="account"
        dflex={false}
        fullWidth={true}
        type="text"
        showIcon="true"
        iconImg={<BsFillPersonFill />}
        showLabel="false"
        placeholder="電子信箱/手機號碼"
        padding="true"
        big="false"
      />
      <FullWidthInput
        name="password"
        id="password"
        dflex={false}
        fullWidth={true}
        type="password"
        showIcon="true"
        iconImg={<BsFillKeyFill />}
        showLabel="false"
        placeholder="請輸入使用者密碼"
        padding="true"
        big="false"
      />
      <FullWidthInput
        name="remember"
        id="remember"
        dflex="true"
        fullWidth="false"
        type="checkbox"
        showIcon={false}
        iconImg=""
        showLabel="true"
        label="記得我"
        placeholder=""
        login="true"
        big="false"
      />
    </>
  );
};

export default LoginInfo;
