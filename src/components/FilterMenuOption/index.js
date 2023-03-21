import React from "react";
import { FilterMenuBlock } from "./FilterMenuOptionElements";

const FilterMenuOption = ({
  id,
  toggle,
  changecolor,
  children,
  handleClick,
}) => {
  return (
    <FilterMenuBlock
      onClick={(e) => {
        toggle(id);
        handleClick(e.target.text);
      }}
      changecolor={changecolor}
    >
      {children}
    </FilterMenuBlock>
  );
};

export default FilterMenuOption;
