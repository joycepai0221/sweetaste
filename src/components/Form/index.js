import React from "react";
import {
  FormContainer,
  FormInnerWrapper,
  FormHeader,
  FormContent,
} from "./FormElements";
import { Button } from "../ButtonElements";

const Form = ({ header, content, button }) => {
  return (
    <FormContainer>
      <FormInnerWrapper>
        <FormHeader>{header}</FormHeader>
        <FormContent big={false}>{content}</FormContent>
      </FormInnerWrapper>
      <Button bigsize="true" primary="true" greenfont="true">
        {button}
      </Button>
    </FormContainer>
  );
};

export default Form;
