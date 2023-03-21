import React from "react";
import { BannerContainer, BannerImg } from "./BannerElement";

const Banner = ({ bannerimg, children, open }) => {
  return (
    <BannerContainer open={open}>
      <BannerImg src={bannerimg} />
      {children}
    </BannerContainer>
  );
};

export default Banner;
