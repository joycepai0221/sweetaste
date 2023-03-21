import React from "react";
import {
  FullWidthInputContainer,
  LongInputWrapper,
  InputIconWrapper,
  LongInput,
  LongInputLabel,
  Select,
  Option,
} from "./FullWidthInputElements";

const FullWidthInput = ({
  id,
  inputname,
  fullWidth,
  dflex,
  showIcon,
  iconImg,
  showLabel,
  label,
  type,
  placeholder,
  padding,
}) => {
  return (
    <>
      {type !== "select" ? (
        <FullWidthInputContainer
          type={type}
          fullWidth={fullWidth}
          dflex={dflex}
        >
          <LongInputLabel
            showLabel={showLabel}
            htmlFor={id}
            type={type}
            fullWidth={fullWidth}
          >
            {label}
          </LongInputLabel>
          <LongInputWrapper>
            <InputIconWrapper showIcon={showIcon}>{iconImg}</InputIconWrapper>
            <LongInput
              type={`${type}`}
              placeholder={`${placeholder}`}
              fullWidth={fullWidth}
              id={`${id}`}
              name={inputname}
              padding={padding}
              showLabel={showLabel}
            />
          </LongInputWrapper>
        </FullWidthInputContainer>
      ) : (
        <FullWidthInputContainer>
          <LongInputLabel showLabel={showLabel}> {label}</LongInputLabel>
          <Select fullWidth={fullWidth} showLabel={showLabel}>
            <Option>{placeholder}</Option>
          </Select>
        </FullWidthInputContainer>
      )}
    </>
  );
};

export default FullWidthInput;
