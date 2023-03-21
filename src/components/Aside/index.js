import React from "react";
import {
  AsideOuterWrapper,
  AsideContainer,
  AsideOption,
} from "./AsideElements";

const Aside = ({ open, toggle }) => {
  return (
    <AsideOuterWrapper>
      <AsideContainer open={open}>
        <AsideOption to="/" exact="true" onClick={toggle}>
          首頁
        </AsideOption>
        <AsideOption to="/products" exact="true" onClick={toggle}>
          甜點
        </AsideOption>
        <AsideOption to="/signin" exact="true" onClick={toggle}>
          登入
        </AsideOption>
      </AsideContainer>
    </AsideOuterWrapper>
  );
};

export default Aside;
