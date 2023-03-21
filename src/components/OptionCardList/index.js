import React from "react";
import OptionCard from "../OptionCard/index";
import { Data } from "./Data";
import { OptionCardList } from "./OptionCardListElements";

const OptionCardBlock = () => {
  return (
    <OptionCardList>
      {Data.map((option) => (
        <OptionCard {...option} key={option.content} />
      ))}
    </OptionCardList>
  );
};

export default OptionCardBlock;
