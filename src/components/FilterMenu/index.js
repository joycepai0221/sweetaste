import React, { useState } from "react";
// import { ProductsData } from "../components/ProductList/ProductData";
import { FilterMenuContainer, FilterMenuHeader } from "./FilterMenuElements";
import FilterMenuOption from "../FilterMenuOption";
import { data } from "./data";

const FilterMenu = ({ handleClick }) => {
  const [openId, setOpenId] = useState();
  const handleToggle = (id) => {
    setOpenId(openId !== id ? id : null);
  };

  return (
    <FilterMenuContainer>
      <FilterMenuHeader>甜點類別</FilterMenuHeader>
      {data.map((obj) => {
        const { id, title } = obj;
        return (
          <FilterMenuOption
            key={id}
            id={id}
            toggle={handleToggle}
            changecolor={openId === id}
            handleClick={handleClick}
            title={title}
          >
            {title}
          </FilterMenuOption>
        );
      })}
    </FilterMenuContainer>
  );
};

export default FilterMenu;
