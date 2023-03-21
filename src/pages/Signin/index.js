import React from "react";
import Form from "../../components/Form";
import ThirdPartyAccount from "../../components/ThirdPartyAccount";
import { SigninWrapper } from "./SigninElements";

const Signin = ({ ...Login }) => {
  return (
    <SigninWrapper>
      <Form {...Login} />
      <ThirdPartyAccount />
    </SigninWrapper>
  );
};

export default Signin;
