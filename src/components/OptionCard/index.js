import React, { useState } from "react";
import {
  OptionMenuContainer,
  OptionBgImg,
  OptionContent,
} from "./OptionCardElements";

const OptionCard = ({ bgImg, content, href }) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <OptionMenuContainer
      to={href}
      onClick={(e) => {
        console.log(e.target.text);
      }}
    >
      <OptionBgImg src={bgImg} />
      <OptionContent
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        hover={hover}
      >
        {content}
      </OptionContent>
    </OptionMenuContainer>
  );
};

export default OptionCard;
