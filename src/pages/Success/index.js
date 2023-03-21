import React from "react";
import { SuccessBanner, SuccessBtn, SuccessHead } from "./SuccessElelements";

const Success = () => {
  return (
    <SuccessBanner bannerimg={"https://bit.ly/2P7GhNd"}>
      <SuccessHead>付款成功</SuccessHead>
      <SuccessBtn to="/products" primary={true} greenfont={true}>
        繼續逛逛
      </SuccessBtn>
    </SuccessBanner>
  );
};

export default Success;
