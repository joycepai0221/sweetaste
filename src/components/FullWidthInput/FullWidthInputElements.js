import styled from "styled-components";

export const FullWidthInputContainer = styled.div`
  color: #8da291;
  height: ${({ type }) => (type === "checkbox" ? "unset" : "56px")};
  display: ${({ dflex }) => (dflex ? "flex" : "block")};
  flex-direction: ${({ type }) =>
    type === "checkbox" ? "row-reverse" : "row"};
  justify-content: ${({ type }) =>
    type !== "checkbox" ? "space-between" : "flex-end"};
  align-items: center;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "49%")};
  margin-bottom: 40px;
`;

export const LongInputWrapper = styled.div`
  display: flex;
`;

export const InputIconWrapper = styled.div`
  background: #eaf0ed;
  color: #8da291;
  font-size: 24px;
  width: 44px;
  padding-left: 20px;
  padding-top: ${({ showIcon }) => (showIcon ? "16px" : "0px")};
  padding-bottom: ${({ showIcon }) => (showIcon ? "16px" : "0px")};
  display: ${({ showIcon }) => (showIcon ? "block" : "none!important")};
  height: ${({ showIcon }) => (showIcon ? "56px" : "0px")};
`;

export const LongInput = styled.input`
  width: ${({ type }) => (type === "checkbox" ? "16px" : "100%")};
  height: ${({ type }) => (type === "checkbox" ? "16px" : "56px")};
  color: #8da291;
  background: #eaf0ed;
  padding-left: 20px;
  outline: 0;
  border: 0;
  margin-bottom: ${({ padding }) => (padding ? "0px" : "8px")};
  margin-top: ${({ fullWidth, showLabel }) =>
    fullWidth === false && showLabel === false ? "36px" : "0px"};
`;

export const LongInputLabel = styled.label`
  font-size: ${({ type }) => (type === "checkbox" ? "16px" : "20px")};
  color: #eaf0ed;
  display: ${({ showLabel }) => (showLabel ? "block" : "none")};
  cursor: pointer;
  padding-bottom: ${({ type }) => (type === "checkbox" ? "0px" : "8px")};
  margin-left: ${({ type }) => (type === "checkbox" ? "8px" : "0px")};
`;

export const Select = styled.select`
  width: 100%;
  height: 56px;
  background: #eaf0ed;
  color: #3f5d45;
  outline: 0;
  padding-left: 20px;
  margin-top: ${({ fullWidth, showLabel }) =>
    fullWidth === false && showLabel === false ? "36px" : "0px"};
`;

export const Option = styled.option`
  width: 165px;
  height: 28px;
  background: #eaf0ed;
  color: #3f5d45;
`;
